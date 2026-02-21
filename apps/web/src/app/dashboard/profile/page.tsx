"use client";

import { getApiDisplayName } from "@/components/api-switcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/auth-context";

export default function ProfilePage() {
	const { user, api } = useAuth();
	if (!user) return null;

	return (
		<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
			<div className="px-4 lg:px-6">
				<h1 className="text-2xl font-bold">Profile</h1>
				<p className="text-muted-foreground text-sm">Your account details from the API.</p>
			</div>
			<div className="px-4 lg:px-6">
				<Card className="max-w-xl">
					<CardHeader>
						<CardTitle>Account</CardTitle>
						<CardDescription>Data from {getApiDisplayName(api)} /auth/me</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<div className="grid gap-1">
							<span className="text-muted-foreground text-sm">Username</span>
							<p className="font-medium">{user.username}</p>
						</div>
						<div className="grid gap-1">
							<span className="text-muted-foreground text-sm">Email</span>
							<p className="font-medium">{user.email}</p>
						</div>
						<div className="grid gap-1">
							<span className="text-muted-foreground text-sm">ID</span>
							<p className="font-mono text-sm">{String(user.id)}</p>
						</div>
						<div className="grid gap-1">
							<span className="text-muted-foreground text-sm">Status</span>
							<p className="font-medium">{user.is_active ? "Active" : "Inactive"}</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
