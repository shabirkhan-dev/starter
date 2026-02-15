/**
 * Load .env from app root into process.env so config sees it when cwd is monorepo root.
 * Import this first in server.ts (before app/config).
 */
import { resolve } from "node:path";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const appRoot = resolve(fileURLToPath(import.meta.url), "..", "..");
const envPath = resolve(appRoot, ".env");
if (existsSync(envPath)) {
	const content = readFileSync(envPath, "utf-8");
	for (const line of content.split("\n")) {
		const trimmed = line.trim();
		if (trimmed && !trimmed.startsWith("#")) {
			const eq = trimmed.indexOf("=");
			if (eq > 0) {
				const key = trimmed.slice(0, eq).trim();
				let value = trimmed.slice(eq + 1).trim();
				if (
					(value.startsWith('"') && value.endsWith('"')) ||
					(value.startsWith("'") && value.endsWith("'"))
				)
					value = value.slice(1, -1);
				if (!(key in process.env)) process.env[key] = value;
			}
		}
	}
}
