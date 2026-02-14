/**
 * API client for Python (FastAPI) and Rust (Axum) backends.
 * Both APIs expose the same auth shape: /auth/register, /auth/login, /auth/me.
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

export function getBaseUrl(api: ApiKind): string {
	return api === "python" ? PYTHON_API : RUST_API;
}

async function request<T>(
	baseUrl: string,
	path: string,
	options: RequestInit & { token?: string } = {},
): Promise<T> {
	const { token, ...init } = options;
	const headers = new Headers(init.headers);
	headers.set("Content-Type", "application/json");
	if (token) headers.set("Authorization", `Bearer ${token}`);
	const res = await fetch(`${baseUrl}${path}`, { ...init, headers });
	if (!res.ok) {
		const body = await res.json().catch(() => ({}));
		const detail = (body as { detail?: string })?.detail ?? res.statusText;
		throw new Error(detail);
	}
	return res.json() as Promise<T>;
}

export async function register(api: ApiKind, payload: RegisterRequest): Promise<User> {
	const baseUrl = getBaseUrl(api);
	return request<User>(baseUrl, "/auth/register", {
		method: "POST",
		body: JSON.stringify(payload),
	});
}

export async function login(api: ApiKind, payload: LoginRequest): Promise<TokenResponse> {
	const baseUrl = getBaseUrl(api);
	return request<TokenResponse>(baseUrl, "/auth/login", {
		method: "POST",
		body: JSON.stringify(payload),
	});
}

export async function me(api: ApiKind, token: string): Promise<User> {
	const baseUrl = getBaseUrl(api);
	return request<User>(baseUrl, "/auth/me", { headers: {}, token });
}
