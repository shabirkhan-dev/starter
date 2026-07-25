"use client";

import { ArrowLeft01Icon, Moon01Icon, SparklesIcon, Sun01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@school-os/ui/components/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@school-os/ui/components/breadcrumb";
import { Button } from "@school-os/ui/components/button";
import { SidebarTrigger } from "@school-os/ui/components/sidebar";
import { cn } from "@school-os/ui/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface RabtxTopbarProps {
	activeItemName: string;
	depthMode: boolean;
	onToggleDepth: () => void;
}

export function RabtxTopbar({ activeItemName, depthMode, onToggleDepth }: RabtxTopbarProps) {
	const [theme, setTheme] = useState<"light" | "dark">("dark");

	useEffect(() => {
		const isDark = document.documentElement.classList.contains("dark");
		setTheme(isDark ? "dark" : "light");
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		if (newTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-border/40 bg-background/80 px-4 backdrop-blur-md transition-colors">
			<div className="flex items-center gap-3">
				<SidebarTrigger className="h-8 w-8 text-muted-foreground hover:text-foreground" />
				<div className="h-4 w-px bg-border/60" />
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink
								href="/"
								className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
							>
								<HugeiconsIcon icon={ArrowLeft01Icon} size={13} strokeWidth={2} />
								App Root
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink
								href="/ui"
								className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
							>
								Rabtx UI
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage className="text-xs font-semibold text-foreground flex items-center gap-1.5">
								<span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
								{activeItemName}
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<div className="flex items-center gap-2">
				{/* Depth Toggle Indicator */}
				<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
					<Button
						variant="outline"
						size="sm"
						onClick={onToggleDepth}
						className={cn(
							"h-8 text-xs font-medium gap-1.5 rounded-lg transition-all",
							depthMode
								? "border-teal-500/40 bg-teal-500/10 text-teal-600 dark:text-teal-300 shadow-sm"
								: "border-border text-muted-foreground hover:text-foreground",
						)}
					>
						<HugeiconsIcon icon={SparklesIcon} size={14} strokeWidth={2} />
						<span className="hidden sm:inline">
							{depthMode ? "Spatial Depth Active" : "Flat Design Mode"}
						</span>
					</Button>
				</motion.div>

				{/* Theme Switcher */}
				<Button
					variant="ghost"
					size="icon"
					onClick={toggleTheme}
					className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
					title="Toggle theme"
				>
					<HugeiconsIcon
						icon={theme === "dark" ? Sun01Icon : Moon01Icon}
						size={16}
						strokeWidth={2}
					/>
				</Button>

				{/* Production Ready Pill */}
				<Badge
					variant="outline"
					className="hidden md:flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 border-teal-500/30 text-teal-600 dark:text-teal-400 bg-teal-500/10"
				>
					<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
					60+ shadcn Components
				</Badge>
			</div>
		</header>
	);
}
