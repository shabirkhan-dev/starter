// Prisma 7: connection URL for Migrate/CLI.
import { defineConfig } from "prisma/config";

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
	},
	datasource: {
		// Optional for `prisma generate`; required for migrate/db push/studio
		url: Bun.env.DATABASE_URL ?? "postgresql://localhost:5432/hono",
	},
});
