"use client";

import {
	CodeIcon,
	Copy01Icon,
	EyeIcon,
	Grid02Icon,
	SparklesIcon,
	Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@school-os/ui/components/badge";
import { Button } from "@school-os/ui/components/button";
import { Card, CardContent, CardHeader } from "@school-os/ui/components/card";
import {
	Tabs as MotionTabs,
	TabsContent as MotionTabsContent,
	TabsList as MotionTabsList,
	TabsTrigger as MotionTabsTrigger,
} from "@school-os/ui/components/motion/tabs";
import { cn } from "@school-os/ui/lib/utils";
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
        <p>Overview Content</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p>Analytics Content</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>Settings Content</p>
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
		<div className="space-y-8 max-w-4xl mx-auto py-2">
			{/* COMPONENT HEADER */}
			<div className="space-y-3">
				<div className="flex items-center gap-2">
					<Badge
						variant="outline"
						className="px-2.5 py-0.5 font-mono text-xs border-teal-500/40 text-teal-600 dark:text-teal-400 bg-teal-500/10"
					>
						Motion Component
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
							Spring animated active tab layout indicator with exclusion blending, reduced motion
							support, and smooth panel entrance.
						</p>
					</div>
				</div>
			</div>

			{/* SHOWCASE & CODE CONTAINER */}
			<Card className="overflow-hidden border-border/80 bg-card/95 backdrop-blur-sm shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:shadow-[0_12px_45px_rgb(0,0,0,0.4)]">
				<CardHeader className="flex flex-row items-center justify-between border-b border-border/40 pb-4">
					{/* Variant Switcher Control */}
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

					{/* View Switcher: Preview / Code */}
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
						<div className="relative min-h-[320px] w-full flex flex-col items-center justify-center p-8 md:p-12 bg-gradient-to-b from-muted/30 via-background to-muted/20 border-b border-border/30 overflow-hidden">
							{/* Background Grid Pattern */}
							<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
							<div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,color-mix(in_oklab,var(--dashboard-accent,#0f766e)_8%,transparent),transparent)] pointer-events-none" />

							{/* Interactive Motion Tabs View */}
							<div className="relative z-10 w-full max-w-md">
								<MotionTabs defaultValue="overview" variant={activeVariant} className="w-full">
									<MotionTabsList className="w-full">
										<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
										<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
										<MotionTabsTrigger value="settings">Settings</MotionTabsTrigger>
										<MotionTabsTrigger value="security">Security</MotionTabsTrigger>
									</MotionTabsList>

									<div className="mt-4">
										<MotionTabsContent value="overview">
											<Card className="p-5 border-border/60 bg-background/90 backdrop-blur-md shadow-sm space-y-2">
												<div className="font-semibold text-sm text-foreground flex items-center gap-2">
													<HugeiconsIcon
														icon={SparklesIcon}
														size={16}
														strokeWidth={2}
														className="text-teal-500"
													/>
													Overview Dashboard
												</div>
												<p className="text-xs text-muted-foreground leading-relaxed">
													Spring layout active indicator with stiffness: 170, damping: 24, mass:
													1.2.
												</p>
											</Card>
										</MotionTabsContent>

										<MotionTabsContent value="analytics">
											<Card className="p-5 border-border/60 bg-background/90 backdrop-blur-md shadow-sm space-y-2">
												<div className="font-semibold text-sm text-foreground flex items-center gap-2">
													<HugeiconsIcon
														icon={Grid02Icon}
														size={16}
														strokeWidth={2}
														className="text-emerald-500"
													/>
													Telemetry Analytics
												</div>
												<p className="text-xs text-muted-foreground leading-relaxed">
													Real-time telemetry metric views with smooth entrance transitions.
												</p>
											</Card>
										</MotionTabsContent>

										<MotionTabsContent value="settings">
											<Card className="p-5 border-border/60 bg-background/90 backdrop-blur-md shadow-sm space-y-2">
												<div className="font-semibold text-sm text-foreground flex items-center gap-2">
													<HugeiconsIcon
														icon={CodeIcon}
														size={16}
														strokeWidth={2}
														className="text-cyan-500"
													/>
													Workspace Settings
												</div>
												<p className="text-xs text-muted-foreground leading-relaxed">
													Configure motion physics, layout projection, and accessibility
													preferences.
												</p>
											</Card>
										</MotionTabsContent>

										<MotionTabsContent value="security">
											<Card className="p-5 border-border/60 bg-background/90 backdrop-blur-md shadow-sm space-y-2">
												<div className="font-semibold text-sm text-foreground flex items-center gap-2">
													<HugeiconsIcon
														icon={SparklesIcon}
														size={16}
														strokeWidth={2}
														className="text-amber-500"
													/>
													Security Controls
												</div>
												<p className="text-xs text-muted-foreground leading-relaxed">
													Session tokens and authentication access permissions.
												</p>
											</Card>
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
		</div>
	);
}
