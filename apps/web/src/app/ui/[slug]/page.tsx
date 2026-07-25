"use client";

import {
	AccessibilityIcon,
	ActivityIcon,
	ArrowRightIcon,
	BrushIcon,
	CodeIcon,
	Copy01Icon,
	CubeIcon,
	Download01Icon,
	EyeIcon,
	Grid02Icon,
	Layers01Icon,
	Settings02Icon,
	SmartPhone01Icon,
	SparklesIcon,
	Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@school-os/ui/components/badge";
import { Button } from "@school-os/ui/components/button";
import { Card, CardContent } from "@school-os/ui/components/card";
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
import { use, useState } from "react";

const WEB_TABS_CODE = `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@school-os/ui/components/motion/tabs";

export function MotionTabsDemo() {
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

const WEB_BUTTON_CODE = `import { MotionButton, StatefulButton } from "@school-os/ui/components/motion/button";
import { ArrowRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function MotionButtonDemo() {
  const [state, setState] = useState("idle");

  return (
    <div className="flex gap-3">
      <StatefulButton
        state={state}
        variant="primary"
        ripple
        onClick={() => setState("loading")}
        icon={<HugeiconsIcon icon={ArrowRightIcon} size={16} />}
      >
        Save changes
      </StatefulButton>
      <MotionButton variant="outline">Outline Reflection</MotionButton>
    </div>
  );
}`;

const MOBILE_BUTTON_CODE = `import { MobileMotionButton, MobileStatefulButton } from "@school-os/ui/components/mobile";

export function MobileButtonDemo() {
  return (
    <View style={{ gap: 10 }}>
      <MobileStatefulButton state="idle" variant="primary">
        Save changes
      </MobileStatefulButton>
      <MobileMotionButton variant="outline">Outline Reflection</MobileMotionButton>
    </View>
  );
}`;

export default function ComponentSlugPage({ params }: { params: Promise<{ slug: string }> }) {
	const resolvedParams = use(params);
	const slug = resolvedParams.slug || "tabs";

	const [activePlatform, setActivePlatform] = useState<"web" | "mobile">("web");
	const [activeVariant, _setActiveVariant] = useState<"pill" | "underline" | "segment">("pill");
	const [activeSize, _setActiveSize] = useState<"sm" | "md" | "lg">("md");
	const [activeViewTab, setActiveViewTab] = useState<"preview" | "code">("preview");
	const [_buttonLoading, _setButtonLoading] = useState(false);

	const [okState, setOkState] = useState<ButtonState>("idle");
	const [errState, setErrState] = useState<ButtonState>("idle");
	const [copied, setCopied] = useState(false);
	const [cmdCopied, setCmdCopied] = useState(false);

	const runStatefulDemo = (target: "ok" | "err") => {
		const setter = target === "ok" ? setOkState : setErrState;
		setter("loading");
		setTimeout(() => {
			setter(target === "ok" ? "success" : "error");
			setTimeout(() => setter("idle"), 1800);
		}, 1400);
	};

	const isButtonComponent = slug === "button";

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

	const copyInstall = () => {
		navigator.clipboard.writeText("bun add @school-os/ui motion");
		setCmdCopied(true);
		setTimeout(() => setCmdCopied(false), 2000);
	};

	return (
		<div className="space-y-12 max-w-4xl mx-auto py-4 pb-16">
			{/* 1. HEADER SECTION & PLATFORM SWITCHER */}
			<div className="space-y-4">
				<div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
					<div className="flex items-center gap-2">
						<Badge variant="secondary" className="px-2.5 py-0.5 font-mono text-xs text-foreground">
							slug: /ui/{slug}
						</Badge>
						<Badge
							variant="outline"
							className="px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
						>
							{activePlatform === "web" ? "@school-os/ui" : "@school-os/ui/components/mobile"}
						</Badge>
					</div>

					{/* PLATFORM SWITCHER */}
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
					<h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
						<HugeiconsIcon
							icon={
								isButtonComponent
									? Layers01Icon
									: activePlatform === "web"
										? Grid02Icon
										: SmartPhone01Icon
							}
							size={28}
							strokeWidth={2}
						/>
						{isButtonComponent ? "Motion Button" : "Motion Tabs"}
					</h1>
					<p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
						{isButtonComponent
							? "Production-ready motion button with cascading text stagger, icon slot swaps, material ripples, and spring press scaling physics."
							: "Spring-animated layout projection tabs with exclusion text blending and active indicator glide."}
					</p>
				</div>
			</div>

			{/* 2. OVERVIEW */}
			<section className="space-y-3">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={CubeIcon} size={18} strokeWidth={2} />
					Overview
				</h2>
				<p className="text-sm text-muted-foreground leading-relaxed">
					{isButtonComponent
						? "Rabtx UI Motion Button is engineered for high-performance interactive interfaces. It provides tactile spring physics, material press ripples, elevated glossy reflection highlights, and slot-swapping stateful loaders (idle, loading, success, error) with zero-layout-shift kerning preservation."
						: "Rabtx UI Motion Tabs provides GPU-accelerated spring glides across active tabs using Framer Motion on Web and React Native Reanimated on Mobile. Includes pill, underline, and segment variants with automatic light/dark blend inversion."}
				</p>
			</section>

			{/* 3. INTERACTIVE HERO SHOWCASE (PREVIEW / CODE) */}
			<section className="space-y-3">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
						<HugeiconsIcon icon={EyeIcon} size={18} strokeWidth={2} />
						Interactive Showcase
					</h2>

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
				</div>

				<Card className="overflow-hidden border border-border bg-card shadow-xs">
					<CardContent className="p-0">
						{activeViewTab === "preview" && (
							<div className="relative min-h-[340px] w-full flex flex-col items-center justify-center p-8 bg-background border-b border-border">
								{isButtonComponent ? (
									activePlatform === "web" ? (
										/* WEB HERO PREVIEW */
										<div className="space-y-6 w-full max-w-lg flex flex-col items-center justify-center">
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

											<div className="flex flex-wrap items-center justify-center gap-3">
												<MotionButton elevated ripple variant="primary" size="md">
													Elevated Ripple
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
										/* MOBILE HERO PREVIEW */
										<div className="w-[300px] rounded-[36px] border-[6px] border-zinc-800 bg-zinc-950 p-4 pt-3 shadow-2xl space-y-4">
											<div className="flex items-center justify-between text-[11px] text-zinc-400 px-2 font-mono">
												<span>9:41</span>
												<div className="w-16 h-3.5 bg-zinc-900 rounded-full mx-auto" />
												<span>100%</span>
											</div>

											<div className="space-y-3 py-4 flex flex-col items-stretch">
												<StatefulButton
													state={okState}
													variant="primary"
													size="md"
													onClick={() => runStatefulDemo("ok")}
													loadingText="Saving changes"
													successText="Saved successfully"
												>
													Save changes
												</StatefulButton>
												<MotionButton variant="secondary" size="md">
													Secondary
												</MotionButton>
												<MotionButton variant="outline" size="md">
													Outline
												</MotionButton>
											</div>

											<div className="w-24 h-1 bg-zinc-700 rounded-full mx-auto" />
										</div>
									)
								) : (
									/* TABS HERO PREVIEW */
									<div className="relative z-10 w-full max-w-md flex flex-col items-center gap-4">
										<div className="flex items-center justify-between w-full text-xs font-mono text-muted-foreground bg-muted/40 p-2 rounded-lg border border-border">
											<span>Variant: {activeVariant}</span>
											<span>Size: {activeSize}</span>
										</div>

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
												</MotionTabsList>
											</div>

											<div className="mt-4 w-full">
												<MotionTabsContent value="overview">
													<Card className="p-5 border border-border bg-card shadow-xs space-y-2">
														<div className="font-semibold text-sm text-foreground flex items-center gap-2">
															<HugeiconsIcon icon={SparklesIcon} size={16} strokeWidth={2} />
															Spring Layout Glides
														</div>
														<p className="text-xs text-muted-foreground leading-relaxed">
															GPU accelerated active indicator with exclusion text inversion. Size:{" "}
															<strong className="text-foreground">{activeSize}</strong>, Variant:{" "}
															<strong className="text-foreground">{activeVariant}</strong>.
														</p>
													</Card>
												</MotionTabsContent>
											</div>
										</MotionTabs>
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
			</section>

			{/* 4. INSTALLATION */}
			<section className="space-y-3">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={Download01Icon} size={18} strokeWidth={2} />
					Installation
				</h2>
				<Card className="border border-border bg-card p-4">
					<div className="flex items-center justify-between font-mono text-xs bg-zinc-950 text-zinc-100 p-3 rounded-lg border border-zinc-800">
						<code>bun add @school-os/ui motion</code>
						<Button
							variant="ghost"
							size="sm"
							onClick={copyInstall}
							className="h-7 px-2 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 gap-1 border border-zinc-700"
						>
							<HugeiconsIcon
								icon={cmdCopied ? Tick02Icon : Copy01Icon}
								size={13}
								strokeWidth={2}
								className={cmdCopied ? "text-emerald-400" : ""}
							/>
							{cmdCopied ? "Copied" : "Copy"}
						</Button>
					</div>
				</Card>
			</section>

			{/* 5. VARIANTS MATRIX */}
			<section className="space-y-4">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={Layers01Icon} size={18} strokeWidth={2} />
					Variants & Styles
				</h2>
				<Card className="border border-border bg-card p-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						<div className="p-4 rounded-xl border border-border bg-background space-y-2 text-center">
							<span className="text-xs font-mono font-medium text-muted-foreground">Primary</span>
							<div className="pt-1 flex justify-center">
								<MotionButton variant="primary" size="md">
									Primary Button
								</MotionButton>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-border bg-background space-y-2 text-center">
							<span className="text-xs font-mono font-medium text-muted-foreground">Secondary</span>
							<div className="pt-1 flex justify-center">
								<MotionButton variant="secondary" size="md">
									Secondary Button
								</MotionButton>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-border bg-background space-y-2 text-center">
							<span className="text-xs font-mono font-medium text-muted-foreground">Outline</span>
							<div className="pt-1 flex justify-center">
								<MotionButton variant="outline" size="md">
									Outline Button
								</MotionButton>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-border bg-background space-y-2 text-center">
							<span className="text-xs font-mono font-medium text-muted-foreground">Ghost</span>
							<div className="pt-1 flex justify-center">
								<MotionButton variant="ghost" size="md">
									Ghost Action
								</MotionButton>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-border bg-background space-y-2 text-center">
							<span className="text-xs font-mono font-medium text-muted-foreground">
								Destructive
							</span>
							<div className="pt-1 flex justify-center">
								<MotionButton variant="destructive" size="md">
									Destructive Action
								</MotionButton>
							</div>
						</div>

						<div className="p-4 rounded-xl border border-border bg-background space-y-2 text-center">
							<span className="text-xs font-mono font-medium text-muted-foreground">
								Icon Button
							</span>
							<div className="pt-1 flex justify-center">
								<MotionButton variant="primary" size="icon">
									<HugeiconsIcon icon={SparklesIcon} size={16} strokeWidth={2} />
								</MotionButton>
							</div>
						</div>
					</div>
				</Card>
			</section>

			{/* 6. SIZES MATRIX */}
			<section className="space-y-4">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={Settings02Icon} size={18} strokeWidth={2} />
					Sizes Matrix
				</h2>
				<Card className="border border-border bg-card p-6">
					<div className="flex flex-wrap items-center justify-center gap-4">
						<MotionButton variant="primary" size="sm">
							Small (h-8)
						</MotionButton>
						<MotionButton variant="primary" size="md">
							Medium (h-10)
						</MotionButton>
						<MotionButton variant="primary" size="lg">
							Large (h-12)
						</MotionButton>
					</div>
				</Card>
			</section>

			{/* 7. COLORS & DESIGN SYSTEM */}
			<section className="space-y-3">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={BrushIcon} size={18} strokeWidth={2} />
					Colors & Design System
				</h2>
				<Card className="border border-border bg-card p-6 space-y-3">
					<p className="text-xs text-muted-foreground leading-relaxed">
						Rabtx UI components consume native shadcn HSL semantic tokens (
						<code className="font-mono text-foreground">--primary</code>,{" "}
						<code className="font-mono text-foreground">--secondary</code>,{" "}
						<code className="font-mono text-foreground">--border</code>). Automatic light/dark mode
						adaptation without hardcoded hex colors or artificial RGB gradients.
					</p>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
						<div className="p-3 rounded-lg border border-border bg-primary text-primary-foreground text-center">
							bg-primary
						</div>
						<div className="p-3 rounded-lg border border-border bg-secondary text-secondary-foreground text-center">
							bg-secondary
						</div>
						<div className="p-3 rounded-lg border border-border bg-card text-card-foreground text-center">
							bg-card
						</div>
						<div className="p-3 rounded-lg border border-destructive bg-destructive text-destructive-foreground text-center">
							bg-destructive
						</div>
					</div>
				</Card>
			</section>

			{/* 8. MOTION PHYSICS */}
			<section className="space-y-3">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={ActivityIcon} size={18} strokeWidth={2} />
					Motion Physics Specifications
				</h2>
				<Card className="border border-border bg-card overflow-hidden">
					<div className="overflow-x-auto">
						<table className="w-full text-xs text-left">
							<thead className="bg-muted/50 border-b border-border text-muted-foreground font-mono">
								<tr>
									<th className="p-3">Physics Property</th>
									<th className="p-3">Web Value (Framer)</th>
									<th className="p-3">Mobile Value (Reanimated)</th>
									<th className="p-3">Behavior</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-border">
								<tr>
									<td className="p-3 font-mono text-foreground">Stiffness</td>
									<td className="p-3 font-mono">500</td>
									<td className="p-3 font-mono">500</td>
									<td className="p-3 text-muted-foreground">
										High elasticity tactile press feedback
									</td>
								</tr>
								<tr>
									<td className="p-3 font-mono text-foreground">Damping</td>
									<td className="p-3 font-mono">30</td>
									<td className="p-3 font-mono">30</td>
									<td className="p-3 text-muted-foreground">Prevents overshooting oscillation</td>
								</tr>
								<tr>
									<td className="p-3 font-mono text-foreground">Mass</td>
									<td className="p-3 font-mono">0.6</td>
									<td className="p-3 font-mono">0.6</td>
									<td className="p-3 text-muted-foreground">Lightweight responsive press weight</td>
								</tr>
								<tr>
									<td className="p-3 font-mono text-foreground">Press Scale</td>
									<td className="p-3 font-mono">0.93</td>
									<td className="p-3 font-mono">0.93</td>
									<td className="p-3 text-muted-foreground">Tactile press compression ratio</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Card>
			</section>

			{/* 9. ACCESSIBILITY (A11Y) */}
			<section className="space-y-3">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={AccessibilityIcon} size={18} strokeWidth={2} />
					Accessibility (a11y)
				</h2>
				<Card className="border border-border bg-card p-6 space-y-3">
					<ul className="space-y-2 text-xs text-muted-foreground list-disc list-inside leading-relaxed">
						<li>
							<strong className="text-foreground font-mono">Keyboard Navigation:</strong> Native
							support for <code className="font-mono">Tab</code>,{" "}
							<code className="font-mono">Space</code>, and <code className="font-mono">Enter</code>{" "}
							key activation.
						</li>
						<li>
							<strong className="text-foreground font-mono">ARIA State:</strong> Automatically
							injects <code className="font-mono">aria-busy="true"</code> during loading states and{" "}
							<code className="font-mono">aria-disabled</code> when disabled.
						</li>
						<li>
							<strong className="text-foreground font-mono">Reduced Motion:</strong> Respects system
							preferences via <code className="font-mono">useReducedMotion</code> to disable scale
							spring physics for users who prefer reduced motion.
						</li>
					</ul>
				</Card>
			</section>

			{/* 10. API REFERENCE */}
			<section className="space-y-3">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={CodeIcon} size={18} strokeWidth={2} />
					API Reference
				</h2>
				<Card className="border border-border bg-card overflow-hidden">
					<div className="overflow-x-auto">
						<table className="w-full text-xs text-left">
							<thead className="bg-muted/50 border-b border-border text-muted-foreground font-mono">
								<tr>
									<th className="p-3">Prop</th>
									<th className="p-3">Type</th>
									<th className="p-3">Default</th>
									<th className="p-3">Description</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-border">
								<tr>
									<td className="p-3 font-mono text-foreground">variant</td>
									<td className="p-3 font-mono text-teal-400">
										"primary" | "secondary" | "outline" | "ghost" | "destructive"
									</td>
									<td className="p-3 font-mono">"primary"</td>
									<td className="p-3 text-muted-foreground">Visual button styling variant</td>
								</tr>
								<tr>
									<td className="p-3 font-mono text-foreground">size</td>
									<td className="p-3 font-mono text-teal-400">"sm" | "md" | "lg" | "icon"</td>
									<td className="p-3 font-mono">"md"</td>
									<td className="p-3 text-muted-foreground">Button dimensions and padding</td>
								</tr>
								<tr>
									<td className="p-3 font-mono text-foreground">ripple</td>
									<td className="p-3 font-mono text-teal-400">boolean</td>
									<td className="p-3 font-mono">false</td>
									<td className="p-3 text-muted-foreground">
										Spawn Material press point ripple beam
									</td>
								</tr>
								<tr>
									<td className="p-3 font-mono text-foreground">state</td>
									<td className="p-3 font-mono text-teal-400">
										"idle" | "loading" | "success" | "error"
									</td>
									<td className="p-3 font-mono">"idle"</td>
									<td className="p-3 text-muted-foreground">
										Stateful button slot transition state
									</td>
								</tr>
								<tr>
									<td className="p-3 font-mono text-foreground">pressScale</td>
									<td className="p-3 font-mono text-teal-400">number</td>
									<td className="p-3 font-mono">0.93</td>
									<td className="p-3 text-muted-foreground">
										Spring press scale ratio down on pointer tap
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Card>
			</section>
		</div>
	);
}
