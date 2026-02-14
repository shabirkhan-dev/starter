"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@starter/ui";
import { useAuth } from "@/context/auth-context";

export default function ProfilePage() {
	const { user, api } = useAuth();

	if (!user) return null;

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-semibold">Profile</h1>
				<p className="text-muted-foreground">Your account details.</p>
			</div>
			<Card className="max-w-md">
				<CardHeader>
					<CardTitle>Account</CardTitle>
					<CardDescription>
						Info from {api === "python" ? "Python API" : "Rust API"}
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2">
					<div>
						<span className="text-muted-foreground text-sm">ID</span>
						<p className="font-mono text-sm">{user.id}</p>
					</div>
					<div>
						<span className="text-muted-foreground text-sm">Email</span>
						<p className="font-mono text-sm">{user.email}</p>
					</div>
					<div>
						<span className="text-muted-foreground text-sm">Username</span>
						<p className="font-mono text-sm">{user.username}</p>
					</div>
					<div>
						<span className="text-muted-foreground text-sm">Active</span>
						<p className="font-mono text-sm">{user.is_active ? "Yes" : "No"}</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
