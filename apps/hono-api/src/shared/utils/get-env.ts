/**
 * Read env var with optional default. Uses Bun.env when available, else process.env.
 */

const env = typeof Bun !== "undefined" && Bun.env ? Bun.env : process.env;

export function getEnv(key: string): string | undefined;
export function getEnv(key: string, defaultValue: string): string;
export function getEnv(key: string, defaultValue?: string): string | undefined {
	const value = env[key];
	if (value !== undefined && value !== "") return value;
	return defaultValue;
}
