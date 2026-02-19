/**
 * API client for Python (FastAPI), Rust (Axum), and Hono backends.
 * Python/Rust: /auth/register, /auth/login, /auth/me with Bearer token.
 * Hono: same paths, cookie-based auth; register uses `name` instead of `username`.
 */
import type { ApiKind, LoginRequest, RegisterRequest, TokenResponse, User } from "./auth-types";

const PYTHON_API =
	typeof process !== "undefined" && process.env.NEXT_PUBLIC_PYTHON_API_URL
		? process.env.NEXT_PUBLIC_PYTHON_API_URL
		: "http://localhost:8000";
const RUST_API =
	typeof process !== "undefined" && process.env.NEXT_PUBLIC_RUST_API_URL
		? process.env.NEXT_PUBLIC_RUST_API_URL
		: "http://localhost:8001";
const HONO_API =
	typeof process !== "undefined" && process.env.NEXT_PUBLIC_HONO_API_URL
		? process.env.NEXT_PUBLIC_HONO_API_URL
		: "http://localhost:8080";

export function getBaseUrl(api: ApiKind): string {
	if (api === "python") return PYTHON_API;
	if (api === "rust") return RUST_API;
	return HONO_API;
}

/** Hono API wraps responses as { success, code, message, data }. */
interface HonoResponse<T> {
	success: boolean;
	data?: T;
	message?: string;
}

function isHonoCookieToken(token: string): boolean {
	return token === "cookie" || !token;
}

async function request<T>(
	baseUrl: string,
	path: string,
	options: RequestInit & { token?: string; useCredentials?: boolean } = {},
): Promise<T> {
	const { token, useCredentials, ...init } = options;
	const headers = new Headers(init.headers);
	headers.set("Content-Type", "application/json");
	if (token && !useCredentials) headers.set("Authorization", `Bearer ${token}`);
	const res = await fetch(`${baseUrl}${path}`, {
		...init,
		headers,
		credentials: useCredentials ? "include" : "same-origin",
	});
	if (!res.ok) {
		const body = await res.json().catch(() => ({}));
		const detail =
			(body as { detail?: string })?.detail ??
			(body as HonoResponse<unknown>)?.message ??
			res.statusText;
		throw new Error(typeof detail === "string" ? detail : "Request failed");
	}
	return res.json() as Promise<T>;
}

/** Normalize Hono user (name, string id) to shared User (username, id number | string). */
function fromHonoUser(u: {
	id: string;
	name: string;
	email: string;
	isEmailVerified: boolean;
}): User {
	return {
		id: u.id,
		email: u.email,
		username: u.name,
		is_active: u.isEmailVerified,
	};
}

export async function register(api: ApiKind, payload: RegisterRequest): Promise<User> {
	const baseUrl = getBaseUrl(api);
	if (api === "hono") {
		const body = { name: payload.username, email: payload.email, password: payload.password };
		const res = await request<
			HonoResponse<{ user: { id: string; name: string; email: string; isEmailVerified: boolean } }>
		>(baseUrl, "/auth/register", { method: "POST", body: JSON.stringify(body) });
		if (!res.data?.user) throw new Error("Invalid response");
		return fromHonoUser(res.data.user);
	}
	return request<User>(baseUrl, "/auth/register", {
		method: "POST",
		body: JSON.stringify(payload),
	});
}

export async function login(api: ApiKind, payload: LoginRequest): Promise<TokenResponse> {
	const baseUrl = getBaseUrl(api);
	if (api === "hono") {
		const res = await request<
			HonoResponse<{
				user: { id: string; name: string; email: string; isEmailVerified: boolean };
				mfaRequired: boolean;
			}>
		>(baseUrl, "/auth/login", {
			method: "POST",
			body: JSON.stringify({ email: payload.email, password: payload.password }),
			useCredentials: true,
		});
		if (!res.data?.user) throw new Error(res.message ?? "Login failed");
		if (res.data.mfaRequired) throw new Error("MFA verification is required");
		// Hono sets cookies; frontend uses a sentinel so me() is called with credentials
		return { access_token: "cookie", token_type: "cookie" };
	}
	return request<TokenResponse>(baseUrl, "/auth/login", {
		method: "POST",
		body: JSON.stringify(payload),
	});
}

export async function me(api: ApiKind, token: string): Promise<User> {
	const baseUrl = getBaseUrl(api);
	if (api === "hono" && isHonoCookieToken(token)) {
		const res = await request<
			HonoResponse<{ user: { id: string; name: string; email: string; isEmailVerified: boolean } }>
		>(baseUrl, "/auth/me", { method: "GET", useCredentials: true });
		if (!res.data?.user) throw new Error("Not authenticated");
		return fromHonoUser(res.data.user);
	}
	return request<User>(baseUrl, "/auth/me", { headers: {}, token });
}
