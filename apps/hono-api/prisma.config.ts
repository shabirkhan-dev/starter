// Prisma 7: connection URL for Migrate/CLI.
import { defineConfig, env } from "prisma/config";

const defaultUrl =
	"postgres://40e91a0efe61f77d07c56d45e718f512f6955de6841b0c1939528ec8b43acbec:sk_n1QheuSuHSkiWnkxIPe1X@db.prisma.io:5432/postgres?sslmode=require&pool=true";

function getDatasourceUrl(): string {
	try {
		return env("DATABASE_URL");
	} catch {
		return defaultUrl;
	}
}

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
	},
	datasource: {
		url: getDatasourceUrl(),
	},
});
