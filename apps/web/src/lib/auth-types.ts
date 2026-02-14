/** Shared auth types for Python API and Rust API. */

export type ApiKind = "python" | "rust";

export interface User {
	id: number;
	email: string;
	username: string;
	is_active: boolean;
}

export interface TokenResponse {
	access_token: string;
	token_type?: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface RegisterRequest {
	email: string;
	username: string;
	password: string;
}
