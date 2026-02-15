import { serve } from "bun";
import { createLogger } from "@starter/logger";
import app from "@/app";
import { appConfig } from "@/shared/configs/app-config";

const log = createLogger({ prefix: appConfig.name });

export function startServer() {
	serve({
		fetch: app.fetch,
		port: appConfig.port,
		hostname: appConfig.host,
	});

	log.info(
		`v${appConfig.version} listening on http://${appConfig.host}:${appConfig.port}`,
	);
}

startServer();
