import { Hono } from "hono";
import { appConfig } from "@/shared/configs/app-config";
import { HTTP_CODE } from "@/shared/configs/http-config";
import { appErrorHandler } from "@/shared/middlewares/app-error";
import authRoutes from "@/modules/auth/auth.routes";

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

app.route("/auth", authRoutes);

export default app;
