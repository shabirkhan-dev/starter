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
import { Badge } from "@school-os/ui/components/badge";
import { Button } from "@school-os/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@school-os/ui/components/card";
import {
	Tabs as MotionTabs,
	TabsContent as MotionTabsContent,
	TabsList as MotionTabsList,
	TabsTrigger as MotionTabsTrigger,
} from "@school-os/ui/components/motion/tabs";
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
    <Tabs defaultValue="overview" variant="pill" size="md">
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
	const [activeSize, setActiveSize] = useState<"sm" | "md" | "lg">("md");
	const [activeViewTab, setActiveViewTab] = useState<"preview" | "code">("preview");
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(CODE_EXAMPLE);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="space-y-8 max-w-4xl mx-auto py-2">
			{/* HEADER SECTION */}
			<div className="space-y-2">
				<div className="flex items-center gap-2">
					<Badge variant="secondary" className="px-2.5 py-0.5 font-mono text-xs">
						Motion Component
					</Badge>
					<Badge
						variant="outline"
						className="px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
					>
						@school-os/ui/components/motion/tabs
					</Badge>
				</div>

				<div>
					<h1 className="text-2xl font-semibold tracking-tight text-foreground flex items-center gap-2">
						<HugeiconsIcon icon={Grid02Icon} size={22} strokeWidth={2} />
						Motion Tabs
					</h1>
					<p className="text-xs text-muted-foreground mt-1">
						Spring-animated tab indicator with text exclusion blending, rounded pill controls,
						customizable sizes (sm, md, lg), and animated panels.
					</p>
				</div>
			</div>

			{/* INTERACTIVE DEMO 1: MAIN VARIANT & SIZE SWITCHER */}
			<Card className="overflow-hidden border border-border bg-card shadow-sm">
				<CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border p-4 gap-4">
					{/* Controls for Variant and Size using MotionTabs pill controls */}
					<div className="flex flex-wrap items-center gap-4">
						{/* Variant Switcher powered by MotionTabs */}
						<div className="flex items-center gap-2">
							<span className="text-xs font-mono font-medium text-muted-foreground">Variant:</span>
							<MotionTabs
								value={activeVariant}
								onValueChange={(v) => setActiveVariant(v as "pill" | "underline" | "segment")}
								variant="pill"
								size="sm"
							>
								<MotionTabsList>
									<MotionTabsTrigger value="pill">Pill</MotionTabsTrigger>
									<MotionTabsTrigger value="underline">Underline</MotionTabsTrigger>
									<MotionTabsTrigger value="segment">Segment</MotionTabsTrigger>
								</MotionTabsList>
							</MotionTabs>
						</div>

						{/* Size Switcher powered by MotionTabs */}
						<div className="flex items-center gap-2">
							<span className="text-xs font-mono font-medium text-muted-foreground">Size:</span>
							<MotionTabs
								value={activeSize}
								onValueChange={(s) => setActiveSize(s as "sm" | "md" | "lg")}
								variant="pill"
								size="sm"
							>
								<MotionTabsList>
									<MotionTabsTrigger value="sm">sm</MotionTabsTrigger>
									<MotionTabsTrigger value="md">md</MotionTabsTrigger>
									<MotionTabsTrigger value="lg">lg</MotionTabsTrigger>
								</MotionTabsList>
							</MotionTabs>
						</div>
					</div>

					{/* View Switcher: Preview / Code powered by MotionTabs */}
					<MotionTabs
						value={activeViewTab}
						onValueChange={(v) => setActiveViewTab(v as "preview" | "code")}
						variant="pill"
						size="sm"
					>
						<MotionTabsList>
							<MotionTabsTrigger value="preview" className="gap-1.5">
								<HugeiconsIcon icon={EyeIcon} size={13} strokeWidth={2} />
								Preview
							</MotionTabsTrigger>
							<MotionTabsTrigger value="code" className="gap-1.5">
								<HugeiconsIcon icon={CodeIcon} size={13} strokeWidth={2} />
								Code
							</MotionTabsTrigger>
						</MotionTabsList>
					</MotionTabs>
				</CardHeader>

				<CardContent className="p-0">
					{activeViewTab === "preview" && (
						<div className="relative min-h-[320px] w-full flex flex-col items-center justify-start p-8 pt-10 bg-background border-b border-border">
							<div className="relative z-10 w-full max-w-md flex flex-col items-center">
								<MotionTabs
									defaultValue="overview"
									variant={activeVariant}
									size={activeSize}
									className="w-full"
								>
									<div className="flex justify-center w-full">
										<MotionTabsList>
											<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
											<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
											<MotionTabsTrigger value="settings">Settings</MotionTabsTrigger>
											<MotionTabsTrigger value="security">Security</MotionTabsTrigger>
										</MotionTabsList>
									</div>

									<div className="mt-4 w-full">
										<MotionTabsContent value="overview">
											<motion.div
												initial={{ opacity: 0, y: 6, scale: 0.99 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												transition={{ type: "spring", stiffness: 350, damping: 25 }}
											>
												<Card className="p-5 border border-border bg-card shadow-xs space-y-2 min-h-[120px]">
													<div className="flex items-center justify-between">
														<div className="font-semibold text-sm text-foreground flex items-center gap-2">
															<HugeiconsIcon icon={SparklesIcon} size={16} strokeWidth={2} />
															System Overview
														</div>
														<Badge variant="outline" className="text-[10px] font-mono">
															Operational
														</Badge>
													</div>
													<p className="text-xs text-muted-foreground leading-relaxed">
														Spring layout active indicator with exclusion text inversion. Size:{" "}
														<strong className="text-foreground">{activeSize}</strong>, Variant:{" "}
														<strong className="text-foreground">{activeVariant}</strong>.
													</p>
													<div className="pt-1 flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
														<span>
															Status:{" "}
															<strong className="text-foreground font-semibold">Ready</strong>
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
												initial={{ opacity: 0, y: 6, scale: 0.99 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												transition={{ type: "spring", stiffness: 350, damping: 25 }}
											>
												<Card className="p-5 border border-border bg-card shadow-xs space-y-2 min-h-[120px]">
													<div className="flex items-center justify-between">
														<div className="font-semibold text-sm text-foreground flex items-center gap-2">
															<HugeiconsIcon icon={ActivityIcon} size={16} strokeWidth={2} />
															Performance Analytics
														</div>
														<Badge variant="outline" className="text-[10px] font-mono">
															60 FPS
														</Badge>
													</div>
													<p className="text-xs text-muted-foreground leading-relaxed">
														GPU hardware accelerated spring transitions configured via{" "}
														<code className="font-mono">SPRING_LAYOUT</code> physics.
													</p>
													<div className="pt-1 flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
														<span>
															FPS: <strong className="text-foreground font-semibold">60.0</strong>
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
												initial={{ opacity: 0, y: 6, scale: 0.99 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												transition={{ type: "spring", stiffness: 350, damping: 25 }}
											>
												<Card className="p-5 border border-border bg-card shadow-xs space-y-2 min-h-[120px]">
													<div className="flex items-center justify-between">
														<div className="font-semibold text-sm text-foreground flex items-center gap-2">
															<HugeiconsIcon icon={Settings02Icon} size={16} strokeWidth={2} />
															Workspace Preferences
														</div>
														<Badge variant="outline" className="text-[10px] font-mono">
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
												initial={{ opacity: 0, y: 6, scale: 0.99 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												transition={{ type: "spring", stiffness: 350, damping: 25 }}
											>
												<Card className="p-5 border border-border bg-card shadow-xs space-y-2 min-h-[120px]">
													<div className="flex items-center justify-between">
														<div className="font-semibold text-sm text-foreground flex items-center gap-2">
															<HugeiconsIcon icon={SecurityIcon} size={16} strokeWidth={2} />
															Security & Access
														</div>
														<Badge variant="outline" className="text-[10px] font-mono">
															Protected
														</Badge>
													</div>
													<p className="text-xs text-muted-foreground leading-relaxed">
														Role permissions, authentication tokens, and audit log access controls.
													</p>
													<div className="pt-1 flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
														<span>
															Access:{" "}
															<strong className="text-foreground font-semibold">Admin</strong>
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
						<div className="relative bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto min-h-[300px] scrollbar-thin">
							<Button
								variant="ghost"
								size="sm"
								onClick={handleCopy}
								className="absolute right-4 top-4 h-8 px-3 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 gap-1.5 border border-zinc-700"
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

			{/* ADDITIONAL SIZES AND VARIANTS EXAMPLES */}
			<div className="space-y-4">
				<div className="space-y-1">
					<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
						<HugeiconsIcon icon={Layers01Icon} size={18} strokeWidth={2} />
						Size Options & Real-world Usage
					</h2>
					<p className="text-xs text-muted-foreground">
						Explore compact (sm), standard (md), and large (lg) size variations.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{/* Size SM Example */}
					<Card className="p-4 border border-border bg-card space-y-3">
						<div className="space-y-1">
							<Badge variant="secondary" className="text-[10px] font-mono">
								size="sm"
							</Badge>
							<CardTitle className="text-xs font-semibold">Compact Filter</CardTitle>
						</div>

						<MotionTabs defaultValue="all" variant="pill" size="sm" className="w-full">
							<MotionTabsList className="w-full">
								<MotionTabsTrigger value="all">All</MotionTabsTrigger>
								<MotionTabsTrigger value="active">Active</MotionTabsTrigger>
								<MotionTabsTrigger value="archived">Archived</MotionTabsTrigger>
							</MotionTabsList>
						</MotionTabs>
					</Card>

					{/* Size MD Example */}
					<Card className="p-4 border border-border bg-card space-y-3">
						<div className="space-y-1">
							<Badge variant="secondary" className="text-[10px] font-mono">
								size="md" (Default)
							</Badge>
							<CardTitle className="text-xs font-semibold">Standard Control</CardTitle>
						</div>

						<MotionTabs defaultValue="day" variant="pill" size="md" className="w-full">
							<MotionTabsList className="w-full">
								<MotionTabsTrigger value="day">Day</MotionTabsTrigger>
								<MotionTabsTrigger value="week">Week</MotionTabsTrigger>
								<MotionTabsTrigger value="month">Month</MotionTabsTrigger>
							</MotionTabsList>
						</MotionTabs>
					</Card>

					{/* Size LG Example */}
					<Card className="p-4 border border-border bg-card space-y-3">
						<div className="space-y-1">
							<Badge variant="secondary" className="text-[10px] font-mono">
								size="lg"
							</Badge>
							<CardTitle className="text-xs font-semibold">Prominent Header</CardTitle>
						</div>

						<MotionTabs defaultValue="summary" variant="pill" size="lg" className="w-full">
							<MotionTabsList className="w-full">
								<MotionTabsTrigger value="summary">Summary</MotionTabsTrigger>
								<MotionTabsTrigger value="details">Details</MotionTabsTrigger>
							</MotionTabsList>
						</MotionTabs>
					</Card>
				</div>
			</div>
		</div>
	);
}
