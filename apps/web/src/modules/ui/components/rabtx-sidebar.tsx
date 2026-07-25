"use client";

import { Search01Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@school-os/ui/components/badge";
import { Button } from "@school-os/ui/components/button";
import { Input } from "@school-os/ui/components/input";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	SidebarTrigger,
	useSidebar,
} from "@school-os/ui/components/sidebar";
import { cn } from "@school-os/ui/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { SHADCN_COMPONENTS_NAV } from "../data/shadcn-components";

interface RabtxSidebarProps {
	activeItem: string;
	onSelectItem: (id: string) => void;
	depthMode: boolean;
	onToggleDepth: () => void;
}

export function RabtxSidebar({
	activeItem,
	onSelectItem,
	depthMode,
	onToggleDepth,
}: RabtxSidebarProps) {
	const [searchQuery, setSearchQuery] = useState("");
	const { state } = useSidebar();
	const isCollapsed = state === "collapsed";

	const filteredCategories = SHADCN_COMPONENTS_NAV.map((category) => ({
		...category,
		items: category.items.filter((item) =>
			item.name.toLowerCase().includes(searchQuery.toLowerCase()),
		),
	})).filter((category) => category.items.length > 0);

	const totalCount = SHADCN_COMPONENTS_NAV.reduce((sum, cat) => sum + cat.items.length, 0);

	return (
		<Sidebar
			collapsible="icon"
			className={cn(
				"border-r transition-all duration-300",
				"border-[var(--dashboard-border,#e8e8e8)] bg-[var(--sidebar,#fcfcfc)] dark:bg-[color-mix(in_srgb,var(--sidebar,#101010)_95%,transparent)]",
				depthMode &&
					"shadow-[12px_0_32px_-12px_rgba(0,0,0,0.15)] dark:shadow-[12px_0_32px_-12px_rgba(0,0,0,0.5)]",
			)}
		>
			<SidebarHeader className="border-b border-border/40 p-4 space-y-3">
				<div className="flex items-center justify-between">
					<Link href="/ui" className="flex items-center gap-3 group">
						<motion.div
							whileHover={{ scale: 1.08, rotate: 5 }}
							whileTap={{ scale: 0.95 }}
							className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 via-emerald-600 to-cyan-700 text-white shadow-md shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-all duration-300"
						>
							<HugeiconsIcon icon={SparklesIcon} size={20} strokeWidth={2} />
							<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-background animate-pulse" />
						</motion.div>
						{!isCollapsed && (
							<div className="flex flex-col">
								<div className="flex items-center gap-2">
									<span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
										Rabtx UI
									</span>
									<Badge
										variant="outline"
										className="text-[10px] px-1.5 py-0 h-4 font-mono font-medium border-teal-500/30 text-teal-600 dark:text-teal-400 bg-teal-500/10"
									>
										{totalCount} Components
									</Badge>
								</div>
								<span className="text-[11px] text-muted-foreground font-medium leading-none">
									shadcn UI Catalog
								</span>
							</div>
						)}
					</Link>
					<SidebarTrigger className="h-8 w-8 text-muted-foreground hover:text-foreground" />
				</div>

				{!isCollapsed && (
					<div className="relative">
						<HugeiconsIcon
							icon={Search01Icon}
							size={14}
							strokeWidth={2}
							className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
						/>
						<Input
							placeholder={`Search ${totalCount} components...`}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="h-8 text-xs pl-8 pr-12 bg-background/60 backdrop-blur-sm border-border/60 focus-visible:ring-teal-500/40 transition-all"
						/>
						<kbd className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-4 select-none items-center gap-0.5 rounded border border-border bg-muted px-1 font-mono text-[9px] text-muted-foreground font-semibold">
							⌘K
						</kbd>
					</div>
				)}
			</SidebarHeader>

			<SidebarContent className="px-2 py-2 scrollbar-thin">
				{filteredCategories.map((category) => (
					<SidebarGroup key={category.id} className="py-1">
						{!isCollapsed && (
							<SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/80 px-2 py-1 flex items-center justify-between">
								<span>{category.title}</span>
								<span className="font-mono text-[9px] text-muted-foreground/60">
									{category.items.length}
								</span>
							</SidebarGroupLabel>
						)}
						<SidebarGroupContent>
							<SidebarMenu>
								{category.items.map((item) => {
									const isActive = activeItem === item.id;
									return (
										<SidebarMenuItem key={item.id}>
											<SidebarMenuButton
												onClick={() => onSelectItem(item.id)}
												isActive={isActive}
												tooltip={item.name}
												className={cn(
													"relative font-medium text-xs rounded-lg transition-all duration-200 group/btn",
													isActive
														? "bg-teal-500/10 text-teal-700 dark:text-teal-300 font-semibold shadow-sm border border-teal-500/20"
														: "hover:bg-muted/70 text-foreground/80 hover:text-foreground",
												)}
											>
												<div
													className={cn(
														"p-1 rounded-md transition-colors",
														isActive
															? "bg-teal-500/20 text-teal-600 dark:text-teal-400"
															: "text-muted-foreground group-hover/btn:text-foreground",
													)}
												>
													<HugeiconsIcon icon={item.icon} size={15} strokeWidth={2} />
												</div>
												{!isCollapsed && <span className="truncate">{item.name}</span>}

												{!isCollapsed && item.badge && (
													<SidebarMenuBadge className="ml-auto">
														<Badge
															variant="outline"
															className="text-[9px] px-1.5 py-0 h-4 font-mono font-normal border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400"
														>
															{item.badge}
														</Badge>
													</SidebarMenuBadge>
												)}
											</SidebarMenuButton>
										</SidebarMenuItem>
									);
								})}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>

			<SidebarFooter className="border-t border-border/40 p-3 space-y-2">
				<div className="flex items-center justify-between gap-2">
					{!isCollapsed && (
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
							<span className="text-[11px] font-medium text-muted-foreground">
								Spatial Depth Mode
							</span>
						</div>
					)}
					<Button
						variant="outline"
						size="sm"
						onClick={onToggleDepth}
						className={cn(
							"h-7 text-xs gap-1.5 font-medium transition-all",
							depthMode
								? "border-teal-500/40 bg-teal-500/10 text-teal-600 dark:text-teal-400"
								: "text-muted-foreground",
							isCollapsed && "w-full justify-center p-0",
						)}
					>
						<HugeiconsIcon icon={SparklesIcon} size={13} strokeWidth={2} />
						{!isCollapsed && (depthMode ? "Depth ON" : "Flat Mode")}
					</Button>
				</div>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
