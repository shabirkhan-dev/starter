"use client";

import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from "react";
import * as api from "@/lib/api-client";
import type { ApiKind, LoginRequest, RegisterRequest, User } from "@/lib/auth-types";

const STORAGE_API = "starter-api-kind";
const STORAGE_TOKEN = "starter-auth-token";

interface AuthState {
	api: ApiKind;
	token: string | null;
	user: User | null;
	loading: boolean;
	error: string | null;
}

interface AuthContextValue extends AuthState {
	setApi: (api: ApiKind) => void;
	login: (payload: LoginRequest) => Promise<void>;
	register: (payload: RegisterRequest) => Promise<void>;
	logout: () => void;
	clearError: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function loadStored(): { api: ApiKind; token: string | null } {
	if (typeof window === "undefined") {
		return { api: "python", token: null };
	}
	const apiStored = localStorage.getItem(STORAGE_API) as ApiKind | null;
	const token = localStorage.getItem(STORAGE_TOKEN);
	return {
		api: apiStored === "rust" ? "rust" : "python",
		token,
	};
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [apiKind, setApiKindState] = useState<ApiKind>("python");
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const setApi = useCallback((next: ApiKind) => {
		setApiKindState(next);
		if (typeof window !== "undefined") localStorage.setItem(STORAGE_API, next);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUser(null);
		if (typeof window !== "undefined") localStorage.removeItem(STORAGE_TOKEN);
	}, []);

	const fetchUser = useCallback(async (kind: ApiKind, t: string) => {
		const u = await api.me(kind, t);
		setUser(u);
	}, []);

	useEffect(() => {
		const { api: storedApi, token: storedToken } = loadStored();
		setApiKindState(storedApi);
		setToken(storedToken);
		if (storedToken) {
			api
				.me(storedApi, storedToken)
				.then((u) => setUser(u))
				.catch(() => {
					localStorage.removeItem(STORAGE_TOKEN);
					setToken(null);
				})
				.finally(() => setLoading(false));
		} else {
			setLoading(false);
		}
	}, []);

	const login = useCallback(
		async (payload: LoginRequest) => {
			setError(null);
			try {
				const res = await api.login(apiKind, payload);
				const t = res.access_token;
				setToken(t);
				if (typeof window !== "undefined") localStorage.setItem(STORAGE_TOKEN, t);
				await fetchUser(apiKind, t);
			} catch (e) {
				setError(e instanceof Error ? e.message : "Login failed");
				throw e;
			}
		},
		[apiKind, fetchUser],
	);

	const register = useCallback(
		async (payload: RegisterRequest) => {
			setError(null);
			try {
				await api.register(apiKind, payload);
				await login({ email: payload.email, password: payload.password });
			} catch (e) {
				setError(e instanceof Error ? e.message : "Registration failed");
				throw e;
			}
		},
		[apiKind, login],
	);

	const value: AuthContextValue = {
		api: apiKind,
		token,
		user,
		loading,
		error,
		setApi,
		login,
		register,
		logout,
		clearError: () => setError(null),
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
}
