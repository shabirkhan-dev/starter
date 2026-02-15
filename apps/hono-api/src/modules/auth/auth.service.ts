import { createLogger } from "@starter/logger";
import { VerificationType } from "@/generated/prisma/enums";
import { prisma } from "@/shared/lib/prisma";
import { AppError } from "@/shared/middlewares/app-error";
import { HTTP_CODE } from "@/shared/configs/http-config";
import { ErrorCode } from "@/shared/errors/error-enum";
import {
	anHourFromNow,
	fortyFiveMinutesFromNow,
	ONE_DAY_MS,
	parseExpiresIn,
	thirtyDaysFromNow,
	threeMinutesAgo,
} from "@/shared/utils/date-time";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "@/shared/utils/jwt";
import { hashPassword, verifyPassword } from "@/shared/utils/password";
import { generateUniqueCode } from "@/shared/utils/unique-code";
import { sendEmail, passwordResetTemplate, verifyEmailTemplate } from "@/shared/mailer/mailer";
import { appConfig } from "@/shared/configs/app-config";
import type { RegisterInput, LoginInput, ResetPasswordInput } from "./auth.validator";

const log = createLogger({ prefix: "auth-service" });

/** User shape returned to client (no password, no twoFactorSecret). */
export type SafeUser = {
	id: string;
	name: string;
	email: string;
	isEmailVerified: boolean;
	enable2FA: boolean;
	emailNotification: boolean;
	createdAt: Date;
	updatedAt: Date;
};

function toSafeUser(user: {
	id: string;
	name: string;
	email: string;
	isEmailVerified: boolean;
	enable2FA: boolean;
	emailNotification: boolean;
	createdAt: Date;
	updatedAt: Date;
}): SafeUser {
	return {
		id: user.id,
		name: user.name,
		email: user.email,
		isEmailVerified: user.isEmailVerified,
		enable2FA: user.enable2FA,
		emailNotification: user.emailNotification,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt,
	};
}

export class AuthService {
	async register(input: RegisterInput): Promise<{ user: SafeUser }> {
		const { name, email, password } = input;

		const existing = await prisma.user.findUnique({ where: { email } });
		if (existing) {
			throw new AppError(
				HTTP_CODE.BAD_REQUEST,
				"User already exists with this email",
				undefined,
				ErrorCode.AUTH_EMAIL_ALREADY_EXISTS,
			);
		}

		const hashedPassword = await hashPassword(password);
		const user = await prisma.user.create({
			data: { name, email, password: hashedPassword },
		});

		const code = generateUniqueCode();
		await prisma.verificationCode.create({
			data: {
				userId: user.id,
				code,
				type: VerificationType.EMAIL_VERIFICATION,
				expiresAt: fortyFiveMinutesFromNow(),
			},
		});

		const verificationUrl = `${appConfig.appOrigin}/confirm-account?code=${code}`;
		const { error } = await sendEmail({
			...verifyEmailTemplate(verificationUrl),
			to: user.email,
		});
		if (error) log.warn("Verify email send failed", error.message);

		return { user: toSafeUser(user) };
	}

	async login(input: LoginInput): Promise<{
		user: SafeUser | null;
		accessToken: string;
		refreshToken: string;
		mfaRequired: boolean;
	}> {
		const { email, password, userAgent } = input;

		log.info("Login attempt", { email });
		const user = await prisma.user.findUnique({ where: { email } });
		if (!user) {
			log.warn("Login failed: user not found", { email });
			throw new AppError(
				HTTP_CODE.BAD_REQUEST,
				"Invalid email or password",
				undefined,
				ErrorCode.AUTH_USER_NOT_FOUND,
			);
		}

		const valid = await verifyPassword(password, user.password);
		if (!valid) {
			log.warn("Login failed: invalid password", { email });
			throw new AppError(
				HTTP_CODE.BAD_REQUEST,
				"Invalid email or password",
				undefined,
				ErrorCode.AUTH_USER_NOT_FOUND,
			);
		}

		if (user.enable2FA) {
			log.info("2FA required", { userId: user.id });
			return {
				user: null,
				accessToken: "",
				refreshToken: "",
				mfaRequired: true,
			};
		}

		const session = await prisma.session.create({
			data: {
				userId: user.id,
				userAgent: userAgent ?? null,
				expiredAt: thirtyDaysFromNow(),
			},
		});

		const [accessToken, refreshToken] = await Promise.all([
			signAccessToken({ userId: user.id, sessionId: session.id }),
			signRefreshToken({ sessionId: session.id }),
		]);

		log.info("Login successful", { userId: user.id });
		return {
			user: toSafeUser(user),
			accessToken,
			refreshToken,
			mfaRequired: false,
		};
	}

	async refreshToken(
		refreshToken: string,
	): Promise<{ accessToken: string; newRefreshToken?: string }> {
		const payload = await verifyRefreshToken(refreshToken);
		if (!payload) {
			throw new AppError(
				HTTP_CODE.UNAUTHORIZED,
				"Invalid refresh token",
				undefined,
				ErrorCode.AUTH_INVALID_TOKEN,
			);
		}

		const session = await prisma.session.findUnique({
			where: { id: payload.sessionId },
			include: { user: true },
		});

		if (!session) {
			throw new AppError(
				HTTP_CODE.UNAUTHORIZED,
				"Session does not exist",
				undefined,
				ErrorCode.AUTH_TOKEN_NOT_FOUND,
			);
		}

		const now = Date.now();
		const expiresAt = session.expiredAt.getTime();
		if (expiresAt <= now) {
			throw new AppError(
				HTTP_CODE.UNAUTHORIZED,
				"Session expired",
				undefined,
				ErrorCode.AUTH_INVALID_TOKEN,
			);
		}

		const sessionRequireRefresh = expiresAt - now <= ONE_DAY_MS;
		let newRefreshToken: string | undefined;

		if (sessionRequireRefresh) {
			const newExpiry = parseExpiresIn(appConfig.jwt.refreshExpiresIn);
			await prisma.session.update({
				where: { id: session.id },
				data: { expiredAt: newExpiry },
			});
			newRefreshToken = await signRefreshToken({ sessionId: session.id });
		}

		const accessToken = await signAccessToken({
			userId: session.userId,
			sessionId: session.id,
		});

		return { accessToken, newRefreshToken };
	}

	async verifyEmail(code: string): Promise<void> {
		const validCode = await prisma.verificationCode.findFirst({
			where: {
				code,
				type: VerificationType.EMAIL_VERIFICATION,
				expiresAt: { gt: new Date() },
			},
		});

		if (!validCode) {
			throw new AppError(
				HTTP_CODE.BAD_REQUEST,
				"Invalid or expired verification code",
				undefined,
				ErrorCode.VERIFICATION_ERROR,
			);
		}

		await prisma.$transaction([
			prisma.user.update({
				where: { id: validCode.userId },
				data: { isEmailVerified: true },
			}),
			prisma.verificationCode.delete({ where: { id: validCode.id } }),
		]);
	}

	async forgotPassword(email: string): Promise<{ url: string }> {
		const user = await prisma.user.findUnique({ where: { email } });
		if (!user) {
			throw new AppError(
				HTTP_CODE.NOT_FOUND,
				"User not found",
				undefined,
				ErrorCode.AUTH_USER_NOT_FOUND,
			);
		}

		const since = threeMinutesAgo();
		const count = await prisma.verificationCode.count({
			where: {
				userId: user.id,
				type: VerificationType.PASSWORD_RESET,
				createdAt: { gt: since },
			},
		});
		const maxAttempts = 2;
		if (count >= maxAttempts) {
			throw new AppError(
				HTTP_CODE.TOO_MANY_REQUESTS,
				"Too many requests, try again later",
				undefined,
				ErrorCode.AUTH_TOO_MANY_ATTEMPTS,
			);
		}

		const code = generateUniqueCode();
		const expiresAt = anHourFromNow();
		await prisma.verificationCode.create({
			data: {
				userId: user.id,
				code,
				type: VerificationType.PASSWORD_RESET,
				expiresAt,
			},
		});

		const resetUrl = `${appConfig.appOrigin}/reset-password?code=${code}&exp=${expiresAt.getTime()}`;
		const { error } = await sendEmail({
			...passwordResetTemplate(resetUrl),
			to: user.email,
		});
		if (error) log.warn("Password reset email failed", error.message);

		return { url: resetUrl };
	}

	async resetPassword(input: ResetPasswordInput): Promise<void> {
		const { password, verificationCode } = input;

		const validCode = await prisma.verificationCode.findFirst({
			where: {
				code: verificationCode,
				type: VerificationType.PASSWORD_RESET,
				expiresAt: { gt: new Date() },
			},
		});

		if (!validCode) {
			throw new AppError(
				HTTP_CODE.NOT_FOUND,
				"Invalid or expired verification code",
				undefined,
				ErrorCode.VERIFICATION_ERROR,
			);
		}

		const hashedPassword = await hashPassword(password);
		await prisma.$transaction([
			prisma.user.update({
				where: { id: validCode.userId },
				data: { password: hashedPassword },
			}),
			prisma.verificationCode.delete({ where: { id: validCode.id } }),
			prisma.session.deleteMany({ where: { userId: validCode.userId } }),
		]);
	}

	async logout(sessionId: string): Promise<void> {
		await prisma.session.deleteMany({ where: { id: sessionId } });
	}
}
