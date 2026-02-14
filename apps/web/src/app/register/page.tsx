"use client";

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Field,
	FieldGroup,
	FieldLabel,
	Input,
} from "@starter/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ApiSwitcher } from "@/components/api-switcher";
import { useAuth } from "@/context/auth-context";

export default function RegisterPage() {
	const router = useRouter();
	const { user, loading, error, clearError, register, api } = useAuth();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [submitting, setSubmitting] = useState(false);

	if (loading && user) return null;
	if (user) {
		router.replace("/dashboard");
		return null;
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		clearError();
		if (password.length < 8) {
			return;
		}
		setSubmitting(true);
		try {
			await register({ email, username, password });
			router.push("/dashboard");
		} catch {
			// error set in context
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-6 p-4">
			<div className="absolute right-4 top-4">
				<ApiSwitcher />
			</div>
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle>Register</CardTitle>
					<CardDescription>
						Using {api === "python" ? "Python API" : "Rust API"}. Switch in the top right.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<FieldGroup>
							{error && (
								<div className="bg-destructive/10 text-destructive rounded-md px-3 py-2 text-sm">
									{error}
								</div>
							)}
							<Field>
								<FieldLabel htmlFor="reg-email">Email</FieldLabel>
								<Input
									id="reg-email"
									type="email"
									placeholder="you@example.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									autoComplete="email"
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor="reg-username">Username</FieldLabel>
								<Input
									id="reg-username"
									type="text"
									placeholder="johndoe"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									required
									autoComplete="username"
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor="reg-password">Password (min 8 chars)</FieldLabel>
								<Input
									id="reg-password"
									type="password"
									placeholder="••••••••"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									minLength={8}
									autoComplete="new-password"
								/>
							</Field>
							<Button type="submit" className="w-full" disabled={submitting}>
								{submitting ? "Creating account…" : "Register"}
							</Button>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
			<p className="text-muted-foreground text-center text-sm">
				Already have an account?{" "}
				<Link href="/login" className="text-primary underline underline-offset-4">
					Sign in
				</Link>
			</p>
		</div>
	);
}
