import { serve } from "bun";
import { appConfig } from "@/shared/configs/app-config";
import app from "@/app";

export function startServer() {
	serve({
		fetch: app.fetch,
		port: appConfig.port,
		hostname: appConfig.host,
	});

	console.log(
		`${appConfig.name} v${appConfig.version} listening on http://${appConfig.host}:${appConfig.port}`,
	);
}

startServer();
