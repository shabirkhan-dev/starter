"use client";

import {
	ActivityIcon,
	ArrowRightIcon,
	CodeIcon,
	Copy01Icon,
	EyeIcon,
	Grid02Icon,
	Layers01Icon,
	SecurityIcon,
	Settings02Icon,
	SmartPhone01Icon,
	SparklesIcon,
	Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@school-os/ui/components/badge";
import { Button } from "@school-os/ui/components/button";
import { Card, CardContent, CardHeader } from "@school-os/ui/components/card";
import {
	type ButtonState,
	MotionButton,
	StatefulButton,
} from "@school-os/ui/components/motion/button";
import {
	Tabs as MotionTabs,
	TabsContent as MotionTabsContent,
	TabsList as MotionTabsList,
	TabsTrigger as MotionTabsTrigger,
} from "@school-os/ui/components/motion/tabs";
import { motion } from "motion/react";
import { useState } from "react";

const WEB_TABS_CODE = `import {
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
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 rounded-xl border bg-card">Overview Content</div>
      </TabsContent>
    </Tabs>
  );
}`;

const WEB_BUTTON_CODE = `import { MotionButton } from "@school-os/ui/components/motion/button";
import { Button } from "@school-os/ui/components/button";

export function MotionButtonExample() {
  return (
    <div className="flex flex-wrap gap-3">
      <MotionButton variant="default">Primary Spring Motion</MotionButton>
      <MotionButton variant="secondary">Secondary</MotionButton>
      <MotionButton variant="outline">Outline</MotionButton>
      <MotionButton variant="destructive">Destructive</MotionButton>
      <MotionButton loading variant="default">Loading</MotionButton>
    </div>
  );
}`;

const MOBILE_BUTTON_CODE = `import { MobileMotionButton, MobileButton } from "@school-os/ui/components/mobile";

export function MobileButtonDemo() {
  return (
    <View style={{ gap: 10 }}>
      <MobileMotionButton variant="default">Primary Motion Button</MobileMotionButton>
      <MobileMotionButton variant="destructive">Destructive</MobileMotionButton>
      <MobileMotionButton loading variant="outline">Loading...</MobileMotionButton>
    </View>
  );
}`;

export default function RabtxUIPage() {
	const [activeComponent, setActiveComponent] = useState<"tabs" | "button">("tabs");
	const [activePlatform, setActivePlatform] = useState<"web" | "mobile">("web");
	const [activeVariant, setActiveVariant] = useState<"pill" | "underline" | "segment">("pill");
	const [activeSize, setActiveSize] = useState<"sm" | "md" | "lg">("md");
	const [activeViewTab, setActiveViewTab] = useState<"preview" | "code">("preview");
	const [buttonLoading, setButtonLoading] = useState(false);
	const [okState, setOkState] = useState<ButtonState>("idle");
	const [errState, setErrState] = useState<ButtonState>("idle");
	const [copied, setCopied] = useState(false);

	const runStatefulDemo = (target: "ok" | "err") => {
		const setter = target === "ok" ? setOkState : setErrState;
		setter("loading");
		setTimeout(() => {
			setter(target === "ok" ? "success" : "error");
			setTimeout(() => setter("idle"), 1800);
		}, 1400);
	};

	const isButtonComponent = activeComponent === "button";

	const handleCopy = () => {
		const codeToCopy = isButtonComponent
			? activePlatform === "web"
				? WEB_BUTTON_CODE
				: MOBILE_BUTTON_CODE
			: WEB_TABS_CODE;
		navigator.clipboard.writeText(codeToCopy);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="space-y-8 max-w-4xl mx-auto py-2">
			{/* HEADER SECTION */}
			<div className="space-y-3">
				<div className="flex flex-wrap items-center justify-between gap-4">
					<div className="flex items-center gap-2">
						{/* Component Switcher */}
						<MotionTabs
							value={activeComponent}
							onValueChange={(c) => setActiveComponent(c as "tabs" | "button")}
							variant="pill"
							size="sm"
						>
							<MotionTabsList>
								<MotionTabsTrigger value="tabs">Motion Tabs</MotionTabsTrigger>
								<MotionTabsTrigger value="button">Motion Button</MotionTabsTrigger>
							</MotionTabsList>
						</MotionTabs>

						<Badge
							variant="outline"
							className="px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
						>
							{activePlatform === "web" ? "@school-os/ui" : "@school-os/ui/components/mobile"}
						</Badge>
					</div>

					{/* PLATFORM SWITCHER (WEB vs MOBILE) */}
					<MotionTabs
						value={activePlatform}
						onValueChange={(p) => setActivePlatform(p as "web" | "mobile")}
						variant="pill"
						size="sm"
					>
						<MotionTabsList>
							<MotionTabsTrigger value="web" className="gap-1.5">
								<HugeiconsIcon icon={Grid02Icon} size={14} strokeWidth={2} />
								Web UI
							</MotionTabsTrigger>
							<MotionTabsTrigger value="mobile" className="gap-1.5">
								<HugeiconsIcon icon={SmartPhone01Icon} size={14} strokeWidth={2} />
								Mobile UI (Expo)
							</MotionTabsTrigger>
						</MotionTabsList>
					</MotionTabs>
				</div>

				<div>
					<h1 className="text-2xl font-semibold tracking-tight text-foreground flex items-center gap-2">
						<HugeiconsIcon
							icon={
								isButtonComponent
									? Layers01Icon
									: activePlatform === "web"
										? Grid02Icon
										: SmartPhone01Icon
							}
							size={22}
							strokeWidth={2}
						/>
						{isButtonComponent ? "Motion Button Component" : "Motion Tabs Component"} (
						{activePlatform === "web" ? "Web Edition" : "Mobile Expo Edition"})
					</h1>
					<p className="text-xs text-muted-foreground mt-1">
						{isButtonComponent
							? "Spring press scaling with loading spinner state for both React Web & React Native Mobile."
							: "Spring-animated layout projection for both React Web & React Native Mobile."}
					</p>
				</div>
			</div>

			{/* INTERACTIVE DEMO CARD */}
			<Card className="overflow-hidden border border-border bg-card shadow-sm">
				<CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border p-4 gap-4">
					{!isButtonComponent && activePlatform === "web" ? (
						<div className="flex flex-wrap items-center gap-4">
							<div className="flex items-center gap-2">
								<span className="text-xs font-mono font-medium text-muted-foreground">
									Variant:
								</span>
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
					) : (
						<span className="text-xs font-mono font-medium text-muted-foreground">
							{isButtonComponent ? "Motion Button Showcase" : "Motion Tabs Showcase"}
						</span>
					)}

					{/* View Switcher: Preview / Code */}
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
							{isButtonComponent ? (
								activePlatform === "web" ? (
									/* WEB MOTION BUTTON SHOWCASE */
									<div className="space-y-6 w-full max-w-md flex flex-col items-center justify-center pt-2">
										{/* Stateful Cascading Text Stagger & Icon Slot Swap Buttons */}
										<div className="flex flex-wrap items-center justify-center gap-3">
											<StatefulButton
												state={okState}
												variant="primary"
												size="md"
												ripple
												onClick={() => runStatefulDemo("ok")}
												loadingText="Saving changes"
												successText="Saved successfully"
												icon={<HugeiconsIcon icon={ArrowRightIcon} size={16} strokeWidth={2} />}
											>
												Save changes
											</StatefulButton>

											<StatefulButton
												state={errState}
												variant="secondary"
												size="md"
												ripple
												onClick={() => runStatefulDemo("err")}
												loadingText="Submitting form"
												errorText="Failed to save"
											>
												Submit form
											</StatefulButton>
										</div>

										<div className="flex flex-wrap items-center justify-center gap-3 pt-2">
											<MotionButton
												elevated
												ripple
												variant="primary"
												size="md"
												onClick={() => setButtonLoading(!buttonLoading)}
											>
												Ripple Motion Button
											</MotionButton>
											<MotionButton elevated variant="outline" size="md">
												Outline Reflection
											</MotionButton>
											<MotionButton elevated variant="destructive" size="md">
												Destructive
											</MotionButton>
										</div>
									</div>
								) : (
									/* MOBILE MOTION BUTTON SHOWCASE */
									<div className="w-[300px] rounded-[36px] border-[6px] border-zinc-800 bg-zinc-950 p-4 pt-3 shadow-2xl space-y-4">
										<div className="flex items-center justify-between text-[11px] text-zinc-400 px-2 font-mono">
											<span>9:41</span>
											<div className="w-16 h-3.5 bg-zinc-900 rounded-full mx-auto" />
											<span>100%</span>
										</div>

										<div className="space-y-3 py-4 flex flex-col items-stretch">
											<MotionButton
												variant="default"
												onClick={() => setButtonLoading(!buttonLoading)}
											>
												Mobile Motion Button
											</MotionButton>
											<MotionButton variant="secondary">Mobile Secondary</MotionButton>
											<MotionButton variant="outline">Mobile Outline</MotionButton>
											<MotionButton variant="destructive">Mobile Destructive</MotionButton>
											<MotionButton loading={buttonLoading} variant="default">
												{buttonLoading ? "Processing..." : "Tap to test loading"}
											</MotionButton>
										</div>

										<div className="w-24 h-1 bg-zinc-700 rounded-full mx-auto" />
									</div>
								)
							) : activePlatform === "web" ? (
								/* WEB MOTION TABS SHOWCASE */
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
																Web Overview
															</div>
															<Badge variant="outline" className="text-[10px] font-mono">
																Next.js Web
															</Badge>
														</div>
														<p className="text-xs text-muted-foreground leading-relaxed">
															Spring layout active indicator with exclusion text inversion. Size:{" "}
															<strong className="text-foreground">{activeSize}</strong>, Variant:{" "}
															<strong className="text-foreground">{activeVariant}</strong>.
														</p>
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
																Web Analytics
															</div>
															<Badge variant="outline" className="text-[10px] font-mono">
																60 FPS
															</Badge>
														</div>
														<p className="text-xs text-muted-foreground leading-relaxed">
															GPU hardware accelerated spring transitions configured via{" "}
															<code className="font-mono">SPRING_LAYOUT</code> physics.
														</p>
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
																Web Settings
															</div>
															<Badge variant="outline" className="text-[10px] font-mono">
																Configured
															</Badge>
														</div>
														<p className="text-xs text-muted-foreground leading-relaxed">
															Customize stiffness, damping, mass, and accessible reduced motion
															preferences.
														</p>
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
																Web Security
															</div>
															<Badge variant="outline" className="text-[10px] font-mono">
																Protected
															</Badge>
														</div>
														<p className="text-xs text-muted-foreground leading-relaxed">
															Role permissions, authentication tokens, and audit log access
															controls.
														</p>
													</Card>
												</motion.div>
											</MotionTabsContent>
										</div>
									</MotionTabs>
								</div>
							) : (
								/* MOBILE MOTION TABS SHOWCASE */
								<div className="w-[300px] rounded-[36px] border-[6px] border-zinc-800 bg-zinc-950 p-4 pt-3 shadow-2xl space-y-4">
									<div className="flex items-center justify-between text-[11px] text-zinc-400 px-2 font-mono">
										<span>9:41</span>
										<div className="w-16 h-3.5 bg-zinc-900 rounded-full mx-auto" />
										<span>100%</span>
									</div>

									<div className="py-2">
										<MotionTabs defaultValue="overview" variant="pill" className="w-full">
											<div className="flex justify-center w-full">
												<MotionTabsList>
													<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
													<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
												</MotionTabsList>
											</div>

											<div className="mt-4">
												<MotionTabsContent value="overview">
													<div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 space-y-1 min-h-[100px]">
														<span className="font-semibold text-white block">
															Mobile Motion Tabs
														</span>
														<p className="text-zinc-400 text-[11px]">
															Expo Router screen with React Native Reanimated spring physics.
														</p>
													</div>
												</MotionTabsContent>

												<MotionTabsContent value="analytics">
													<div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 space-y-1 min-h-[100px]">
														<span className="font-semibold text-white block">Mobile Telemetry</span>
														<p className="text-zinc-400 text-[11px]">
															60 FPS touch gestures & screen transition metrics.
														</p>
													</div>
												</MotionTabsContent>
											</div>
										</MotionTabs>
									</div>

									<div className="w-24 h-1 bg-zinc-700 rounded-full mx-auto mt-4" />
								</div>
							)}
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
								<code>
									{isButtonComponent
										? activePlatform === "web"
											? WEB_BUTTON_CODE
											: MOBILE_BUTTON_CODE
										: WEB_TABS_CODE}
								</code>
							</pre>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
