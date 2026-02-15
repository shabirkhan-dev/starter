import type { Context } from "hono";
import { getCookie, setCookie } from "hono/cookie";
import { HTTP_CODE } from "@/shared/configs/http-config";
import { AppError } from "@/shared/middlewares/app-error";
import { ErrorCode } from "@/shared/errors/error-enum";
import {
	clearAuthenticationCookies,
	getRefreshTokenCookieOptions,
	getAccessTokenCookieOptions,
	setAuthenticationCookies,
} from "@/shared/utils/cookie";
import type { AuthService } from "./auth.service";
import {
	registerSchema,
	loginSchema,
	verificationEmailSchema,
	forgotPasswordSchema,
	resetPasswordSchema,
} from "./auth.validator";
import type { AuthEnv } from "./jwt.middleware";

export function createAuthController(service: AuthService) {
	return {
		async register(c: Context) {
			const body = await c.req.json().catch(() => ({}));
			const input = registerSchema.parse(body);
			const { user } = await service.register(input);
			return c.json(
				{
					success: true,
					code: HTTP_CODE.CREATED,
					message: "User registered successfully",
					data: { user },
				},
				HTTP_CODE.CREATED,
			);
		},

		async login(c: Context) {
			const body = await c.req.json().catch(() => ({}));
			const userAgent = c.req.header("user-agent");
			const input = loginSchema.parse({ ...body, userAgent });
			const { user, accessToken, refreshToken, mfaRequired } = await service.login(input);

			if (mfaRequired) {
				return c.json({
					success: true,
					code: HTTP_CODE.OK,
					message: "Verify MFA authentication",
					data: { mfaRequired: true, user },
				});
			}

			setAuthenticationCookies(c, { accessToken, refreshToken });
			return c.json({
				success: true,
				code: HTTP_CODE.OK,
				message: "Login successful",
				data: { user, mfaRequired: false },
			});
		},

		async refreshToken(c: Context) {
			const refreshToken = getCookie(c, "refreshToken");
			if (!refreshToken) {
				throw new AppError(
					HTTP_CODE.UNAUTHORIZED,
					"Missing refresh token",
					undefined,
					ErrorCode.AUTH_TOKEN_NOT_FOUND,
				);
			}

			const { accessToken, newRefreshToken } = await service.refreshToken(refreshToken);
			if (newRefreshToken) {
				setCookie(c, "refreshToken", newRefreshToken, getRefreshTokenCookieOptions());
			}
			setCookie(c, "accessToken", accessToken, getAccessTokenCookieOptions());
			return c.json({
				success: true,
				code: HTTP_CODE.OK,
				message: "Token refreshed successfully",
			});
		},

		async verifyEmail(c: Context) {
			const body = await c.req.json().catch(() => ({}));
			const { code } = verificationEmailSchema.parse(body);
			await service.verifyEmail(code);
			return c.json({
				success: true,
				code: HTTP_CODE.OK,
				message: "Email verified successfully",
			});
		},

		async forgotPassword(c: Context) {
			const body = await c.req.json().catch(() => ({}));
			const { email } = forgotPasswordSchema.parse(body);
			await service.forgotPassword(email);
			return c.json({
				success: true,
				code: HTTP_CODE.OK,
				message: "Password reset email sent",
			});
		},

		async resetPassword(c: Context) {
			const body = await c.req.json().catch(() => ({}));
			const input = resetPasswordSchema.parse(body);
			await service.resetPassword(input);
			clearAuthenticationCookies(c);
			return c.json({
				success: true,
				code: HTTP_CODE.OK,
				message: "Password reset successfully",
			});
		},

		async logout(c: Context<{ Variables: AuthEnv }>) {
			const sessionId = c.get("sessionId");
			await service.logout(sessionId);
			clearAuthenticationCookies(c);
			return c.json({
				success: true,
				code: HTTP_CODE.OK,
				message: "Logged out successfully",
			});
		},
	};
}
