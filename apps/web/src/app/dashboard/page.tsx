"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@starter/ui";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ApiSwitcher } from "@/components/api-switcher";
import { useAuth } from "@/context/auth-context";

export default function DashboardPage() {
	const router = useRouter();
	const { user, api } = useAuth();

	useEffect(() => {
		if (user) return;
		router.replace("/login");
	}, [user, router]);

	if (!user) return null;

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-semibold">Dashboard</h1>
				<p className="text-muted-foreground">Welcome back, {user.username}.</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>Backend</CardTitle>
					<CardDescription>
						Current API: {api === "python" ? "Python (FastAPI)" : "Rust (Axum)"}. Switch below to
						use the other.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ApiSwitcher />
				</CardContent>
			</Card>
		</div>
	);
}
