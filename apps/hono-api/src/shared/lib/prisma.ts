import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { appConfig } from "@/shared/configs/app-config";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function createPrisma() {
	if (!appConfig.databaseUrl) {
		throw new Error("DATABASE_URL is required for Prisma");
	}
	const adapter = new PrismaPg({ connectionString: appConfig.databaseUrl });
	return new PrismaClient({
		adapter,
		log: appConfig.env === "development" ? ["query", "error", "warn"] : ["error"],
	});
}

export const prisma = globalForPrisma.prisma ?? createPrisma();

if (appConfig.env !== "production") globalForPrisma.prisma = prisma;
