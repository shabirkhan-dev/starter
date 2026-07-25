"use client";

import {
	ActivityIcon,
	CodeIcon,
	Copy01Icon,
	EyeIcon,
	Grid02Icon,
	Layers01Icon,
	SecurityIcon,
	Settings02Icon,
	SparklesIcon,
	Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@school-os/ui/components/avatar";
import { Badge } from "@school-os/ui/components/badge";
import { Button } from "@school-os/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@school-os/ui/components/card";
import {
	Tabs as MotionTabs,
	TabsContent as MotionTabsContent,
	TabsList as MotionTabsList,
	TabsTrigger as MotionTabsTrigger,
} from "@school-os/ui/components/motion/tabs";
import { cn } from "@school-os/ui/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

const CODE_EXAMPLE = `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@school-os/ui/components/motion/tabs";

export function MotionTabsExample() {
  return (
    <Tabs defaultValue="overview" variant="pill">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <div className="p-4 rounded-xl border bg-card">Overview Content</div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4 rounded-xl border bg-card">Analytics Content</div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="p-4 rounded-xl border bg-card">Settings Content</div>
      </TabsContent>
    </Tabs>
  );
}`;

export default function RabtxUIPage() {
	const [activeVariant, setActiveVariant] = useState<"pill" | "underline" | "segment">("pill");
	const [activeViewTab, setActiveViewTab] = useState<"preview" | "code">("preview");
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(CODE_EXAMPLE);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="space-y-10 max-w-4xl mx-auto py-2">
			{/* HEADER SECTION */}
			<div className="space-y-3">
				<div className="flex items-center gap-2">
					<Badge
						variant="outline"
						className="px-2.5 py-0.5 font-mono text-xs border-teal-500/40 text-teal-600 dark:text-teal-400 bg-teal-500/10"
					>
						Motion Primitive
					</Badge>
					<Badge
						variant="outline"
						className="px-2.5 py-0.5 font-mono text-xs border-border text-muted-foreground"
					>
						@school-os/ui/components/motion/tabs
					</Badge>
				</div>

				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-2.5">
							<HugeiconsIcon
								icon={Grid02Icon}
								size={28}
								strokeWidth={2}
								className="text-teal-500"
							/>
							Motion Tabs
						</h1>
						<p className="text-sm text-muted-foreground mt-1">
							Spring animated tab indicator with exclusion text inversion, reduced motion fallback,
							and animated content cards.
						</p>
					</div>
				</div>
			</div>

			{/* INTERACTIVE DEMO 1: MAIN VARIANT SWITCHER */}
			<Card className="overflow-hidden border-border/80 bg-card/95 backdrop-blur-sm shadow-md">
				<CardHeader className="flex flex-row items-center justify-between border-b border-border/40 pb-4">
					<div className="flex items-center gap-2">
						<span className="text-xs font-mono font-medium text-muted-foreground mr-1">
							Variant:
						</span>
						<div className="inline-flex rounded-lg bg-muted p-1 gap-1 border border-border/50">
							<button
								type="button"
								onClick={() => setActiveVariant("pill")}
								className={cn(
									"px-2.5 py-1 text-xs font-medium rounded-md transition-all",
									activeVariant === "pill"
										? "bg-background text-foreground shadow-sm font-semibold"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								Pill
							</button>
							<button
								type="button"
								onClick={() => setActiveVariant("underline")}
								className={cn(
									"px-2.5 py-1 text-xs font-medium rounded-md transition-all",
									activeVariant === "underline"
										? "bg-background text-foreground shadow-sm font-semibold"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								Underline
							</button>
							<button
								type="button"
								onClick={() => setActiveVariant("segment")}
								className={cn(
									"px-2.5 py-1 text-xs font-medium rounded-md transition-all",
									activeVariant === "segment"
										? "bg-background text-foreground shadow-sm font-semibold"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								Segment
							</button>
						</div>
					</div>

					<div className="inline-flex rounded-lg bg-muted/60 p-0.5 border border-border/40">
						<button
							type="button"
							onClick={() => setActiveViewTab("preview")}
							className={cn(
								"h-7 text-xs px-3 gap-1.5 inline-flex items-center font-medium rounded-md transition-all",
								activeViewTab === "preview"
									? "bg-background text-foreground shadow-sm font-semibold"
									: "text-muted-foreground hover:text-foreground",
							)}
						>
							<HugeiconsIcon icon={EyeIcon} size={13} strokeWidth={2} />
							Preview
						</button>
						<button
							type="button"
							onClick={() => setActiveViewTab("code")}
							className={cn(
								"h-7 text-xs px-3 gap-1.5 inline-flex items-center font-medium rounded-md transition-all",
								activeViewTab === "code"
									? "bg-background text-foreground shadow-sm font-semibold"
									: "text-muted-foreground hover:text-foreground",
							)}
						>
							<HugeiconsIcon icon={CodeIcon} size={13} strokeWidth={2} />
							Code
						</button>
					</div>
				</CardHeader>

				<CardContent className="p-0">
					{activeViewTab === "preview" && (
						<div className="relative min-h-[340px] w-full flex flex-col items-center justify-start p-8 md:p-12 pt-10 md:pt-12 bg-gradient-to-b from-muted/30 via-background to-muted/20 border-b border-border/30 overflow-hidden">
							<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
							<div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,color-mix(in_oklab,var(--dashboard-accent,#0f766e)_8%,transparent),transparent)] pointer-events-none" />

							{/* Fit content width TabsList */}
							<div className="relative z-10 w-full max-w-lg flex flex-col items-center">
								<MotionTabs defaultValue="overview" variant={activeVariant} className="w-full">
									<div className="flex justify-center w-full">
										<MotionTabsList>
											<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
											<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
											<MotionTabsTrigger value="settings">Settings</MotionTabsTrigger>
											<MotionTabsTrigger value="security">Security</MotionTabsTrigger>
										</MotionTabsList>
									</div>

									<div className="mt-5 w-full">
										<MotionTabsContent value="overview">
											<motion.div
												initial={{ opacity: 0, y: 8, scale: 0.98 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												transition={{ type: "spring", stiffness: 350, damping: 25 }}
											>
												<Card className="p-5 border-teal-500/30 bg-background/90 backdrop-blur-md shadow-md space-y-3 min-h-[140px]">
													<div className="flex items-center justify-between">
														<div className="font-bold text-sm text-foreground flex items-center gap-2">
															<HugeiconsIcon
																icon={SparklesIcon}
																size={17}
																strokeWidth={2}
																className="text-teal-500"
															/>
															System Overview
														</div>
														<Badge
															variant="outline"
															className="text-[10px] border-teal-500/30 text-teal-600 dark:text-teal-400 bg-teal-500/10"
														>
															Live Telemetry
														</Badge>
													</div>
													<p className="text-xs text-muted-foreground leading-relaxed">
														Active spring indicator with exclusion text inversion. Top-aligned
														layout ensures zero vertical shifting.
													</p>
													<div className="pt-1 flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
														<span>
															Status: <strong className="text-emerald-500">Operational</strong>
														</span>
														<span>•</span>
														<span>
															Latency: <strong>14ms</strong>
														</span>
													</div>
												</Card>
											</motion.div>
										</MotionTabsContent>

										<MotionTabsContent value="analytics">
											<motion.div
												initial={{ opacity: 0, y: 8, scale: 0.98 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												transition={{ type: "spring", stiffness: 350, damping: 25 }}
											>
												<Card className="p-5 border-emerald-500/30 bg-background/90 backdrop-blur-md shadow-md space-y-3 min-h-[140px]">
													<div className="flex items-center justify-between">
														<div className="font-bold text-sm text-foreground flex items-center gap-2">
															<HugeiconsIcon
																icon={ActivityIcon}
																size={17}
																strokeWidth={2}
																className="text-emerald-500"
															/>
															Performance Analytics
														</div>
														<Badge
															variant="outline"
															className="text-[10px] border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
														>
															60 FPS
														</Badge>
													</div>
													<p className="text-xs text-muted-foreground leading-relaxed">
														GPU hardware accelerated spring transitions configured via{" "}
														<code className="font-mono">SPRING_LAYOUT</code> physics.
													</p>
													<div className="pt-1 flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
														<span>
															FPS: <strong className="text-emerald-500">60.0</strong>
														</span>
														<span>•</span>
														<span>
															Memory: <strong>1.2MB</strong>
														</span>
													</div>
												</Card>
											</motion.div>
										</MotionTabsContent>

										<MotionTabsContent value="settings">
											<motion.div
												initial={{ opacity: 0, y: 8, scale: 0.98 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												transition={{ type: "spring", stiffness: 350, damping: 25 }}
											>
												<Card className="p-5 border-cyan-500/30 bg-background/90 backdrop-blur-md shadow-md space-y-3 min-h-[140px]">
													<div className="flex items-center justify-between">
														<div className="font-bold text-sm text-foreground flex items-center gap-2">
															<HugeiconsIcon
																icon={Settings02Icon}
																size={17}
																strokeWidth={2}
																className="text-cyan-500"
															/>
															Workspace Preferences
														</div>
														<Badge
															variant="outline"
															className="text-[10px] border-cyan-500/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10"
														>
															Configured
														</Badge>
													</div>
													<p className="text-xs text-muted-foreground leading-relaxed">
														Customize stiffness, damping, mass, and accessible reduced motion
														preferences.
													</p>
													<div className="pt-1 flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
														<span>
															Stiffness: <strong>170</strong>
														</span>
														<span>•</span>
														<span>
															Damping: <strong>24</strong>
														</span>
													</div>
												</Card>
											</motion.div>
										</MotionTabsContent>

										<MotionTabsContent value="security">
											<motion.div
												initial={{ opacity: 0, y: 8, scale: 0.98 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												transition={{ type: "spring", stiffness: 350, damping: 25 }}
											>
												<Card className="p-5 border-amber-500/30 bg-background/90 backdrop-blur-md shadow-md space-y-3 min-h-[140px]">
													<div className="flex items-center justify-between">
														<div className="font-bold text-sm text-foreground flex items-center gap-2">
															<HugeiconsIcon
																icon={SecurityIcon}
																size={17}
																strokeWidth={2}
																className="text-amber-500"
															/>
															Security & Access
														</div>
														<Badge
															variant="outline"
															className="text-[10px] border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10"
														>
															Protected
														</Badge>
													</div>
													<p className="text-xs text-muted-foreground leading-relaxed">
														Role permissions, authentication tokens, and audit log access controls.
													</p>
													<div className="pt-1 flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
														<span>
															Access: <strong className="text-amber-500">Admin</strong>
														</span>
														<span>•</span>
														<span>
															Enforced: <strong>Yes</strong>
														</span>
													</div>
												</Card>
											</motion.div>
										</MotionTabsContent>
									</div>
								</MotionTabs>
							</div>
						</div>
					)}

					{activeViewTab === "code" && (
						<div className="relative bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto min-h-[320px] scrollbar-thin">
							<Button
								variant="ghost"
								size="sm"
								onClick={handleCopy}
								className="absolute right-4 top-4 h-8 px-3 text-xs bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 gap-1.5 border border-zinc-700/60"
							>
								<HugeiconsIcon
									icon={copied ? Tick02Icon : Copy01Icon}
									size={14}
									strokeWidth={2}
									className={copied ? "text-emerald-400" : ""}
								/>
								{copied ? "Copied!" : "Copy Code"}
							</Button>
							<pre className="pr-16 leading-relaxed">
								<code>{CODE_EXAMPLE}</code>
							</pre>
						</div>
					)}
				</CardContent>
			</Card>

			{/* ADDITIONAL REAL-WORLD EXAMPLES */}
			<div className="space-y-6">
				<div className="space-y-1">
					<h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
						<HugeiconsIcon
							icon={Layers01Icon}
							size={20}
							strokeWidth={2}
							className="text-teal-500"
						/>
						Production UI Patterns
					</h2>
					<p className="text-xs text-muted-foreground">
						Real-world application patterns built using Motion Tabs.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Example 2: Segmented Media Switcher */}
					<Card className="p-6 border-border/80 space-y-4">
						<div className="space-y-1">
							<Badge
								variant="outline"
								className="text-[10px] font-mono border-teal-500/30 text-teal-600 dark:text-teal-400 bg-teal-500/10"
							>
								Segmented Variant
							</Badge>
							<CardTitle className="text-base font-bold">Tech Stack Filter</CardTitle>
						</div>

						<MotionTabs defaultValue="react" variant="segment" className="w-full">
							<MotionTabsList className="w-full">
								<MotionTabsTrigger value="react">React</MotionTabsTrigger>
								<MotionTabsTrigger value="vue">Next.js</MotionTabsTrigger>
								<MotionTabsTrigger value="svelte">TypeScript</MotionTabsTrigger>
							</MotionTabsList>

							<MotionTabsContent value="react">
								<motion.div
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ type: "spring", stiffness: 400, damping: 28 }}
									className="p-4 rounded-xl bg-muted/40 border border-border/50 text-xs space-y-1"
								>
									<span className="font-semibold text-foreground">React 19 Server Components</span>
									<p className="text-muted-foreground">
										Full support for concurrent rendering and motion transitions.
									</p>
								</motion.div>
							</MotionTabsContent>
							<MotionTabsContent value="vue">
								<motion.div
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ type: "spring", stiffness: 400, damping: 28 }}
									className="p-4 rounded-xl bg-muted/40 border border-border/50 text-xs space-y-1"
								>
									<span className="font-semibold text-foreground">Next.js App Router</span>
									<p className="text-muted-foreground">
										Server-rendered HTML with layout projection scoping.
									</p>
								</motion.div>
							</MotionTabsContent>
							<MotionTabsContent value="svelte">
								<motion.div
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ type: "spring", stiffness: 400, damping: 28 }}
									className="p-4 rounded-xl bg-muted/40 border border-border/50 text-xs space-y-1"
								>
									<span className="font-semibold text-foreground">TypeScript Strict Mode</span>
									<p className="text-muted-foreground">100% typed props and state interfaces.</p>
								</motion.div>
							</MotionTabsContent>
						</MotionTabs>
					</Card>

					{/* Example 3: Underline Navigation Bar */}
					<Card className="p-6 border-border/80 space-y-4">
						<div className="space-y-1">
							<Badge
								variant="outline"
								className="text-[10px] font-mono border-teal-500/30 text-teal-600 dark:text-teal-400 bg-teal-500/10"
							>
								Underline Variant
							</Badge>
							<CardTitle className="text-base font-bold">Team Activity Deck</CardTitle>
						</div>

						<MotionTabs defaultValue="members" variant="underline" className="w-full">
							<MotionTabsList className="w-full justify-start border-b border-border/60">
								<MotionTabsTrigger value="members">Members</MotionTabsTrigger>
								<MotionTabsTrigger value="activity">Activity</MotionTabsTrigger>
							</MotionTabsList>

							<MotionTabsContent value="members">
								<motion.div
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ type: "spring", stiffness: 400, damping: 28 }}
									className="space-y-2 pt-1"
								>
									<div className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 border border-border/40 text-xs">
										<Avatar className="w-7 h-7">
											<AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" />
											<AvatarFallback>SK</AvatarFallback>
										</Avatar>
										<div>
											<span className="font-semibold text-foreground block">Alex Rivera</span>
											<span className="text-[10px] text-muted-foreground">
												Lead Engineer • Active
											</span>
										</div>
									</div>
								</motion.div>
							</MotionTabsContent>
							<MotionTabsContent value="activity">
								<motion.div
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ type: "spring", stiffness: 400, damping: 28 }}
									className="p-3 rounded-lg bg-muted/30 border border-border/40 text-xs space-y-1"
								>
									<span className="font-semibold text-foreground">Updated Motion Physics</span>
									<span className="text-[10px] text-muted-foreground block">2 minutes ago</span>
								</motion.div>
							</MotionTabsContent>
						</MotionTabs>
					</Card>
				</div>
			</div>
		</div>
	);
}
