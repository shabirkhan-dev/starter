"use client";

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@starter/ui";
import { useAuth } from "@/context/auth-context";
import type { ApiKind } from "@/lib/auth-types";

const labels: Record<ApiKind, string> = {
	python: "Python API (FastAPI)",
	rust: "Rust API (Axum)",
};

export function ApiSwitcher() {
	const { api, setApi } = useAuth();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
				Backend: {labels[api]}
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setApi("python")}>
					Python API (FastAPI) — :8000
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setApi("rust")}>Rust API (Axum) — :8001</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
