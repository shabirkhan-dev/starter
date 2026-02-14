import { Hono } from "hono";
import { appErrorHandler } from "@/middleware/app-error";
import { HTTP_CODE } from "@/shared/configs/http-config";
import { appConfig } from "@/shared/configs/app-config";

const app = new Hono();

app.onError(appErrorHandler);

app.get("/", (c) => {
	return c.json({
		success: true,
		code: HTTP_CODE.OK,
		message: "OK",
		data: { name: appConfig.name, version: appConfig.version },
	});
});

app.get("/health", (c) => {
	return c.json({
		success: true,
		code: HTTP_CODE.OK,
		message: "OK",
		data: { status: "ok", env: appConfig.env },
	});
});

export default app;
