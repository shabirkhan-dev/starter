import type { AppConfig } from "@/shared/interfaces/app-config";

export type { AppConfig };

const env = process.env;

export const appConfig: AppConfig = {
	name: env.APP_NAME ?? "hono-api",
	version: env.APP_VERSION ?? "0.0.0",
	port: Number(env.PORT ?? 3000),
	host: env.HOST ?? "0.0.0.0",
	env: env.NODE_ENV ?? "development",
	databaseUrl: env.DATABASE_URL ?? "",
	databaseUser: env.DATABASE_USER ?? "",
	databasePassword: env.DATABASE_PASSWORD ?? "",
	databaseHost: env.DATABASE_HOST ?? "localhost",
	databasePort: Number(env.DATABASE_PORT ?? 5432),
	databaseName: env.DATABASE_NAME ?? "",
};
