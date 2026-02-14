"use client";

import { LogoutIcon, UserIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@starter/ui";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ApiSwitcher } from "@/components/api-switcher";
import { useAuth } from "@/context/auth-context";

const nav = [
	{ href: "/dashboard", label: "Dashboard" },
	{ href: "/dashboard/profile", label: "Profile" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const router = useRouter();
	const { user, loading, logout } = useAuth();

	const handleLogout = () => {
		logout();
		router.push("/");
	};

	useEffect(() => {
		if (!loading && !user) router.replace("/login");
	}, [loading, user, router]);

	if (loading) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<span className="text-muted-foreground">Loading...</span>
			</div>
		);
	}

	if (!user) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<span className="text-muted-foreground">Redirecting to login...</span>
			</div>
		);
	}

	return (
		<div className="flex min-h-screen flex-col md:flex-row">
			<aside className="border-border flex w-full flex-col border-b md:w-56 md:border-b-0 md:border-r">
				<div className="flex h-14 items-center gap-2 border-b px-4 md:px-3">
					<Link href="/dashboard" className="font-semibold">
						Dashboard
					</Link>
				</div>
				<nav className="flex flex-1 flex-col gap-1 p-2">
					{nav.map((item) => (
						<Link key={item.href} href={item.href}>
							<Button
								variant={pathname === item.href ? "secondary" : "ghost"}
								className="w-full justify-start"
							>
								{item.label}
							</Button>
						</Link>
					))}
				</nav>
				<div className="border-t p-2">
					<ApiSwitcher />
				</div>
			</aside>
			<main className="flex-1">
				<header className="border-border flex h-14 items-center justify-between border-b px-4">
					<span className="text-muted-foreground text-sm">Logged in as {user.email}</span>
					<DropdownMenu>
						<DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
							<HugeiconsIcon icon={UserIcon} strokeWidth={2} />
							<span className="sr-only">Account</span>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem>
								<Link href="/dashboard/profile" className="flex items-center gap-2">
									<HugeiconsIcon icon={UserIcon} strokeWidth={2} />
									Profile
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem variant="destructive" onClick={handleLogout}>
								<HugeiconsIcon icon={LogoutIcon} strokeWidth={2} />
								Sign out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				<div className="p-4 md:p-6">{children}</div>
			</main>
		</div>
	);
}
