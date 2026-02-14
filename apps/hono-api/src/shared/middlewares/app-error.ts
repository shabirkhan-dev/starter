import type { Context } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import type { HttpCode } from "@/shared/configs/http-config";
import { getMessage, HTTP_CODE } from "@/shared/configs/http-config";

export class AppError extends Error {
	constructor(
		public readonly code: HttpCode,
		message?: string,
		public readonly details?: unknown,
	) {
		super(message ?? getMessage(code));
		this.name = "AppError";
	}
}

export function appErrorHandler(err: unknown, c: Context) {
	if (err instanceof AppError) {
		return c.json(
			{
				success: false,
				code: err.code,
				message: err.message,
				...(err.details != null && { details: err.details }),
			},
			err.code as ContentfulStatusCode,
		);
	}
	const message = err instanceof Error ? err.message : "Internal Server Error";
	return c.json(
		{
			success: false,
			code: HTTP_CODE.INTERNAL_SERVER_ERROR,
			message: getMessage(HTTP_CODE.INTERNAL_SERVER_ERROR),
			...(process.env.NODE_ENV === "development" && { details: message }),
		},
		HTTP_CODE.INTERNAL_SERVER_ERROR,
	);
}
