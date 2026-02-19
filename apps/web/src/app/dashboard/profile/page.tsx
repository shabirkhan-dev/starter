"use client";

import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@starter/ui";
import { getApiDisplayName } from "@/components/api-switcher";
import { useAuth } from "@/context/auth-context";

export default function ProfilePage() {
	const { user, api } = useAuth();

	if (!user) return null;

	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-2xl font-bold tracking-tight md:text-3xl">Profile</h1>
				<p className="text-muted-foreground mt-1">Account details from {getApiDisplayName(api)}.</p>
			</div>

			<Card className="max-w-xl">
				<CardHeader>
					<CardTitle className="text-base">Account</CardTitle>
					<CardDescription>Your profile information</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4 sm:grid-cols-2">
					<div className="space-y-1">
						<span className="text-muted-foreground text-xs">ID</span>
						<p className="font-mono text-sm">{user.id}</p>
					</div>
					<div className="space-y-1">
						<span className="text-muted-foreground text-xs">Email</span>
						<p className="truncate text-sm font-medium">{user.email}</p>
					</div>
					<div className="space-y-1">
						<span className="text-muted-foreground text-xs">Username</span>
						<p className="text-sm font-medium">{user.username}</p>
					</div>
					<div className="space-y-1">
						<span className="text-muted-foreground text-xs">Status</span>
						<p className="text-sm">
							{user.is_active ? (
								<Badge variant="secondary" className="font-normal">
									Active
								</Badge>
							) : (
								<Badge variant="outline" className="font-normal">
									Inactive
								</Badge>
							)}
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
