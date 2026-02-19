"use client";

import { LayoutDashboard, LogoutIcon, UserIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Button,
	cn,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Separator,
} from "@starter/ui";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ApiSwitcherCompact } from "@/components/api-switcher";
import { useAuth } from "@/context/auth-context";

const nav = [
	{ href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
	{ href: "/dashboard/profile", label: "Profile", icon: UserIcon },
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
			<div className="flex min-h-screen items-center justify-center bg-muted/20">
				<div className="flex flex-col items-center gap-3">
					<div className="bg-primary/10 h-8 w-8 animate-pulse rounded-lg" />
					<span className="text-muted-foreground text-sm">Loading...</span>
				</div>
			</div>
		);
	}

	if (!user) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-muted/20">
				<span className="text-muted-foreground text-sm">Redirecting to login...</span>
			</div>
		);
	}

	return (
		<div className="flex min-h-screen bg-background">
			{/* Mobile header - nav + user menu */}
			<header className="border-border fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b bg-background/95 px-4 backdrop-blur md:hidden">
				<Link href="/dashboard" className="flex items-center gap-2 font-semibold">
					<div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
						<HugeiconsIcon
							icon={LayoutDashboard}
							className="text-primary-foreground"
							strokeWidth={2}
						/>
					</div>
					Dashboard
				</Link>
				<DropdownMenu>
					<DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
						<HugeiconsIcon icon={UserIcon} strokeWidth={2} />
						<span className="sr-only">Menu</span>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-56">
						<div className="px-2 py-1.5">
							<p className="truncate text-sm font-medium">{user.email}</p>
						</div>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild>
							<Link href="/dashboard">Dashboard</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href="/dashboard/profile">Profile</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem variant="destructive" onClick={handleLogout}>
							<HugeiconsIcon icon={LogoutIcon} strokeWidth={2} className="size-4" />
							Sign out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</header>

			{/* Sidebar - shadcn block style (desktop) */}
			<aside
				className={cn(
					"border-border flex w-0 flex-col border-r bg-muted/30 md:w-64",
					"fixed inset-y-0 left-0 z-40 md:sticky",
				)}
			>
				<div className="flex h-14 items-center gap-2 border-b px-4 md:px-4">
					<Link href="/dashboard" className="flex items-center gap-2 font-semibold tracking-tight">
						<div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
							<HugeiconsIcon
								icon={LayoutDashboard}
								className="text-primary-foreground"
								strokeWidth={2}
							/>
						</div>
						<span className="hidden md:inline">Dashboard</span>
					</Link>
				</div>
				<nav className="flex flex-1 flex-col gap-0.5 p-2">
					<p className="text-muted-foreground mb-1 hidden px-2 text-xs font-medium md:block">
						Main
					</p>
					{nav.map((item) => (
						<Link key={item.href} href={item.href}>
							<Button
								variant={pathname === item.href ? "secondary" : "ghost"}
								size="sm"
								className={cn(
									"h-9 w-full justify-start gap-2 font-normal",
									pathname === item.href && "bg-muted",
								)}
							>
								<HugeiconsIcon icon={item.icon} strokeWidth={2} className="size-4 shrink-0" />
								<span className="truncate">{item.label}</span>
							</Button>
						</Link>
					))}
				</nav>
				<div className="border-t p-2">
					<div className="mb-2 hidden px-2 text-xs font-medium text-muted-foreground md:block">
						Backend
					</div>
					<ApiSwitcherCompact />
					<Separator className="my-2" />
					<DropdownMenu>
						<DropdownMenuTrigger
							render={
								<Button
									variant="ghost"
									size="sm"
									className="h-9 w-full justify-start gap-2 font-normal"
								>
									<div className="bg-primary/10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
										<HugeiconsIcon icon={UserIcon} strokeWidth={2} className="size-3.5" />
									</div>
									<span className="truncate text-left text-sm">{user.email}</span>
								</Button>
							}
						/>
						<DropdownMenuContent align="start" className="w-56">
							<div className="px-2 py-1.5">
								<p className="text-muted-foreground text-xs">Signed in as</p>
								<p className="truncate text-sm font-medium">{user.email}</p>
							</div>
							<DropdownMenuSeparator />
							<DropdownMenuItem asChild>
								<Link href="/dashboard/profile" className="flex cursor-pointer items-center gap-2">
									<HugeiconsIcon icon={UserIcon} strokeWidth={2} className="size-4" />
									Profile
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem variant="destructive" onClick={handleLogout}>
								<HugeiconsIcon icon={LogoutIcon} strokeWidth={2} className="size-4" />
								Sign out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</aside>

			{/* Main content */}
			<main className="min-w-0 flex-1 pt-14 md:pt-0">
				<div className="mx-auto max-w-5xl px-4 py-6 md:px-6">{children}</div>
			</main>
		</div>
	);
}
