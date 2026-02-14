"use client";

import { Button } from "@starter/ui";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";

export function HomeClient() {
	const { user, loading } = useAuth();
	if (loading || !user) return null;
	return (
		<Link href="/dashboard">
			<Button variant="secondary">Go to Dashboard</Button>
		</Link>
	);
}
