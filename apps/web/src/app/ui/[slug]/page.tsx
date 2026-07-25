"use client";

import {
	AccessibilityIcon,
	ArrowDown01Icon,
	ArrowRightIcon,
	BrushIcon,
	CodeIcon,
	Copy01Icon,
	CubeIcon,
	Download01Icon,
	EyeIcon,
	Grid02Icon,
	InputTextIcon,
	Layers01Icon,
	Mail01Icon,
	Search01Icon,
	SmartPhone01Icon,
	SparklesIcon,
	Tick02Icon,
	UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@school-os/ui/components/badge";
import { Button } from "@school-os/ui/components/button";
import { Card, CardContent } from "@school-os/ui/components/card";
import { type ButtonState, StatefulButton } from "@school-os/ui/components/motion/button";
import { MotionInput } from "@school-os/ui/components/motion/input";
import {
	MotionSelect,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSearch,
	SelectTrigger,
	SelectValue,
} from "@school-os/ui/components/motion/select";
import {
	Tabs as MotionTabs,
	TabsContent as MotionTabsContent,
	TabsList as MotionTabsList,
	TabsTrigger as MotionTabsTrigger,
} from "@school-os/ui/components/motion/tabs";
import { use, useState } from "react";

const WEB_TABS_CODE = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@school-os/ui/components/motion/tabs";

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

export function MotionButtonDemo() {
  return (
    <div className="flex gap-3">
      <StatefulButton variant="primary" ripple>Save changes</StatefulButton>
      <MotionButton variant="outline">Outline</MotionButton>
    </div>
  );
}`;

const WEB_INPUT_CODE = `import { MotionInput } from "@school-os/ui/components/motion/input";

export function MotionInputDemo() {
  return (
    <MotionInput
      label="Verified Email"
      defaultValue="shabir@school-os.dev"
      success
    />
  );
}`;

const WEB_SELECT_CODE = `import {
  MotionSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSearch,
} from "@school-os/ui/components/motion/select";

export function MotionSelectDemo() {
  const [val, setVal] = useState("nextjs");

  return (
    <MotionSelect value={val} onValueChange={setVal}>
      <SelectTrigger>
        <SelectValue placeholder="Select framework..." />
      </SelectTrigger>
      <SelectContent>
        <SelectSearch placeholder="Filter frameworks..." />
        <SelectGroup>
          <SelectLabel font-mono font-bold>Frontend</SelectLabel>
          <SelectItem value="nextjs">Next.js 16 (App Router)</SelectItem>
          <SelectItem value="expo">Expo Router (React Native)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel font-mono font-bold>Backend</SelectLabel>
          <SelectItem value="nestjs">NestJS API Spine</SelectItem>
        </SelectGroup>
      </SelectContent>
    </MotionSelect>
  );
}`;

export default function ComponentSlugPage({ params }: { params: Promise<{ slug: string }> }) {
	const resolvedParams = use(params);
	const slug = resolvedParams.slug || "tabs";

	const [activePlatform, setActivePlatform] = useState<"web" | "mobile">("web");
	const [activeViewTab, setActiveViewTab] = useState<"preview" | "code">("preview");

	const [emailValue, setEmailValue] = useState("shabir@school-os.dev");
	const [errorInputVal, setErrorInputVal] = useState("invalid domain!");
	const [inputErrorState, _setInputErrorState] = useState(true);
	const [searchValue, setSearchValue] = useState("");

	const [_roleSelect, _setRoleSelect] = useState("admin");
	const [groupedSelect, setGroupedSelect] = useState("nextjs");
	const [searchableSelect, setSearchableSelect] = useState("us");
	const [errorSelect, setErrorSelect] = useState("");
	const [selectErrorState, setSelectErrorState] = useState(true);
	const [rtlSelect, setRtlSelect] = useState("ar");

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

	const handleCopy = () => {
		const codeMap = {
			tabs: WEB_TABS_CODE,
			button: WEB_BUTTON_CODE,
			input: WEB_INPUT_CODE,
			select: WEB_SELECT_CODE,
		};
		navigator.clipboard.writeText(codeMap[slug as keyof typeof codeMap] || WEB_TABS_CODE);
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
								slug === "button"
									? Layers01Icon
									: slug === "input"
										? InputTextIcon
										: slug === "select"
											? ArrowDown01Icon
											: Grid02Icon
							}
							size={28}
							strokeWidth={2}
						/>
						Motion {slug.charAt(0).toUpperCase() + slug.slice(1)} Component
					</h1>
					<p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
						{slug === "select"
							? "Compositional motion select supporting grouped headers, searchable filter inputs, scrollable lists, invalid error shake, and RTL alignment."
							: slug === "input"
								? "Shadcn motion input with error shake animations, animated checkmark path draw, left/right icon slots, and blur error messages."
								: slug === "button"
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
					{slug === "select"
						? "Rabtx UI Motion Select delivers bouncy accordion corner flattening transitions with automatic viewport flip placement. Supports SelectGroup, SelectLabel, inline SelectSearch filtering, scrollable containers, error shakes, and RTL."
						: slug === "input"
							? "Rabtx UI Motion Input combines smooth focus border ring feedback with SVG checkmark path draw animations and automatic error shake physics. Includes full classNames customization and ARIA accessibility."
							: slug === "button"
								? "Rabtx UI Motion Button is engineered for high-performance interactive interfaces. It provides tactile spring physics, material press ripples, elevated glossy reflection highlights, and slot-swapping stateful loaders."
								: "Rabtx UI Motion Tabs provides GPU-accelerated spring glides across active tabs using Framer Motion on Web and React Native Reanimated on Mobile."}
				</p>
			</section>

			{/* 3. INTERACTIVE HERO SHOWCASE */}
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
							<div className="relative min-h-[380px] w-full flex flex-col items-center justify-center p-8 bg-background border-b border-border space-y-6">
								{slug === "select" ? (
									/* SELECT EXTENSIVE VARIANTS (SEARCHABLE, GROUPED, SCROLLABLE, ERROR, RTL) */
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
										{/* 1. SEARCHABLE COMBOBOX SELECT */}
										<div className="space-y-1.5">
											{/* biome-ignore lint/a11y/noLabelWithoutControl: section label */}
											<label className="text-xs font-medium text-foreground tracking-tight block">
												1. Searchable Filter Combobox
											</label>
											<MotionSelect value={searchableSelect} onValueChange={setSearchableSelect}>
												<SelectTrigger>
													<SelectValue placeholder="Search country..." />
												</SelectTrigger>
												<SelectContent>
													<SelectSearch placeholder="Filter countries..." />
													<SelectItem value="us">United States 🇺🇸</SelectItem>
													<SelectItem value="ca">Canada 🇨🇦</SelectItem>
													<SelectItem value="uk">United Kingdom 🇬🇧</SelectItem>
													<SelectItem value="de">Germany 🇩🇪</SelectItem>
													<SelectItem value="jp">Japan 🇯🇵</SelectItem>
												</SelectContent>
											</MotionSelect>
										</div>

										{/* 2. GROUPED SELECT */}
										<div className="space-y-1.5">
											{/* biome-ignore lint/a11y/noLabelWithoutControl: section label */}
											<label className="text-xs font-medium text-foreground tracking-tight block">
												2. Grouped Categories Select
											</label>
											<MotionSelect value={groupedSelect} onValueChange={setGroupedSelect}>
												<SelectTrigger>
													<SelectValue placeholder="Select technology..." />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Frontend Stack</SelectLabel>
														<SelectItem value="nextjs">Next.js 16 (App Router)</SelectItem>
														<SelectItem value="expo">Expo Router (React Native)</SelectItem>
													</SelectGroup>
													<SelectGroup>
														<SelectLabel>Backend & Database</SelectLabel>
														<SelectItem value="nestjs">NestJS Production API</SelectItem>
														<SelectItem value="postgres">PostgreSQL (Neon DB)</SelectItem>
													</SelectGroup>
												</SelectContent>
											</MotionSelect>
										</div>

										{/* 3. ERROR SHAKE SELECT */}
										<div className="space-y-1.5">
											{/* biome-ignore lint/a11y/noLabelWithoutControl: section label */}
											<label className="text-xs font-medium text-foreground tracking-tight block">
												3. Invalid / Error State Select
											</label>
											<MotionSelect
												value={errorSelect}
												onValueChange={setErrorSelect}
												error={selectErrorState}
											>
												<SelectTrigger>
													<SelectValue placeholder="Required selection..." />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="opt1">Valid Option 1</SelectItem>
													<SelectItem value="opt2">Valid Option 2</SelectItem>
												</SelectContent>
											</MotionSelect>
											<Button
												variant="outline"
												size="sm"
												onClick={() => setSelectErrorState(!selectErrorState)}
												className="mt-1 text-[11px] h-7"
											>
												{selectErrorState ? "Clear Select Error" : "Trigger Select Error"}
											</Button>
										</div>

										{/* 4. RTL LAYOUT SELECT */}
										<div className="space-y-1.5">
											{/* biome-ignore lint/a11y/noLabelWithoutControl: section label */}
											<label className="text-xs font-medium text-foreground tracking-tight block">
												4. RTL Support (Right-to-Left Layout)
											</label>
											<MotionSelect value={rtlSelect} onValueChange={setRtlSelect} dir="rtl">
												<SelectTrigger>
													<SelectValue placeholder="اختر اللغة..." />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="ar">العربية (Arabic RTL)</SelectItem>
													<SelectItem value="fa">فارسی (Persian RTL)</SelectItem>
													<SelectItem value="ur">اردو (Urdu RTL)</SelectItem>
												</SelectContent>
											</MotionSelect>
										</div>
									</div>
								) : slug === "input" ? (
									/* INPUT EXTENSIVE PREVIEWS */
									<div className="space-y-5 w-full max-w-md">
										<MotionInput
											label="1. Verified Account Email (Success Checkmark)"
											value={emailValue}
											onChange={setEmailValue}
											success
											leftIcon={<HugeiconsIcon icon={Mail01Icon} size={16} strokeWidth={2} />}
										/>

										<MotionInput
											label="2. Workspace Domain (Error Shake & Blur)"
											value={errorInputVal}
											onChange={setErrorInputVal}
											error={
												inputErrorState ? "Domain contains invalid special characters" : undefined
											}
											leftIcon={<HugeiconsIcon icon={UserIcon} size={16} strokeWidth={2} />}
										/>

										<MotionInput
											label="3. Search Query (Left & Right Slot)"
											placeholder="Search components or icons..."
											value={searchValue}
											onChange={setSearchValue}
											leftIcon={<HugeiconsIcon icon={Search01Icon} size={16} strokeWidth={2} />}
										/>
									</div>
								) : slug === "button" ? (
									/* BUTTON PREVIEW */
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
									</div>
								) : (
									/* TABS PREVIEW */
									<div className="relative z-10 w-full max-w-md flex flex-col items-center">
										<MotionTabs defaultValue="overview" variant="pill" size="md" className="w-full">
											<div className="flex justify-center w-full">
												<MotionTabsList>
													<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
													<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
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
															GPU accelerated active indicator with exclusion text inversion.
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
										{slug === "input"
											? WEB_INPUT_CODE
											: slug === "select"
												? WEB_SELECT_CODE
												: slug === "button"
													? WEB_BUTTON_CODE
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

			{/* 5. COLORS & DESIGN SYSTEM */}
			<section className="space-y-3">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={BrushIcon} size={18} strokeWidth={2} />
					Colors & Design System
				</h2>
				<Card className="border border-border bg-card p-6 space-y-3">
					<p className="text-xs text-muted-foreground leading-relaxed">
						Consumes native shadcn HSL semantic tokens (
						<code className="font-mono text-foreground">--input</code>,{" "}
						<code className="font-mono text-foreground">--ring</code>,{" "}
						<code className="font-mono text-foreground">--destructive</code>). Automatic light/dark
						mode adaptation.
					</p>
				</Card>
			</section>

			{/* 6. ACCESSIBILITY (A11Y) */}
			<section className="space-y-3">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={AccessibilityIcon} size={18} strokeWidth={2} />
					Accessibility (a11y)
				</h2>
				<Card className="border border-border bg-card p-6 space-y-3">
					<ul className="space-y-2 text-xs text-muted-foreground list-disc list-inside leading-relaxed">
						<li>
							<strong className="text-foreground font-mono">Keyboard Navigation:</strong> Fully
							focusable with <code className="font-mono">Tab</code>,{" "}
							<code className="font-mono">Enter</code>, and{" "}
							<code className="font-mono">Escape</code> keys.
						</li>
						<li>
							<strong className="text-foreground font-mono">ARIA Attributes:</strong> Injects{" "}
							<code className="font-mono">aria-invalid</code> when error is true and{" "}
							<code className="font-mono">aria-expanded</code> on dropdown panel open.
						</li>
					</ul>
				</Card>
			</section>
		</div>
	);
}
