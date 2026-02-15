import type { AppConfig } from "@/shared/interfaces/app-config";
import { getEnv } from "@/shared/utils/get-env";

function loadAppConfig(): AppConfig {
	return {
		name: getEnv("APP_NAME", "hono-api"),
		version: getEnv("APP_VERSION", "0.0.0"),
		env: getEnv("NODE_ENV", "development"),
		port: Number(getEnv("PORT", "8080")),
		host: getEnv("HOST", "0.0.0.0"),
		appOrigin: getEnv("APP_ORIGIN", "localhost"),
		basePath: getEnv("BASE_PATH", "/api/v1"),
		databaseUrl:
			getEnv("DATABASE_URL") ??
			(typeof process !== "undefined" && process.env.NODE_ENV !== "production"
				? "postgresql://hono:hono@localhost:5432/hono"
				: ""),
		jwt: {
			secret: getEnv("JWT_SECRET", ""),
			expiresIn: getEnv("JWT_EXPIRES_IN", "15m"),
			refreshSecret: getEnv("JWT_REFRESH_SECRET", ""),
			refreshExpiresIn: getEnv("JWT_REFRESH_EXPIRES_IN", "30d"),
		},
		mailerSender: getEnv("MAILER_SENDER"),
		resendApiKey: getEnv("RESEND_API_KEY"),
	};
}

export const appConfig = loadAppConfig();
