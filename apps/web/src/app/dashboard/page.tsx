"use client";

import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@starter/ui";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ApiSwitcher } from "@/components/api-switcher";
import { useAuth } from "@/context/auth-context";

export default function DashboardPage() {
	const router = useRouter();
	const { user } = useAuth();

	useEffect(() => {
		if (user) return;
		router.replace("/login");
	}, [user, router]);

	if (!user) return null;

	return (
		<div className="space-y-8">
			{/* Welcome / Page header */}
			<div>
				<h1 className="text-2xl font-bold tracking-tight md:text-3xl">
					Welcome back, {user.username}
				</h1>
				<p className="text-muted-foreground mt-1">
					Here’s an overview of your account and backend.
				</p>
			</div>

			{/* Cards grid */}
			<div className="grid gap-6 lg:grid-cols-2">
				{/* Account overview card */}
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-base">Account</CardTitle>
						<CardDescription>Your current session</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between">
							<span className="text-muted-foreground text-sm">Status</span>
							<Badge variant="secondary" className="font-normal">
								Active
							</Badge>
						</div>
						<div className="space-y-1">
							<span className="text-muted-foreground text-xs">Email</span>
							<p className="truncate text-sm font-medium">{user.email}</p>
						</div>
						<div className="space-y-1">
							<span className="text-muted-foreground text-xs">Username</span>
							<p className="text-sm font-medium">{user.username}</p>
						</div>
					</CardContent>
				</Card>

				{/* Backend API card - ApiSwitcher is already a Card */}
				<ApiSwitcher />
			</div>
		</div>
	);
}
