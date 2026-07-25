"use client";

import {
	AccessibilityIcon,
	Add01Icon,
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
	TextFontIcon,
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
import {
	NotTypeset,
	Typeset,
	type TypesetPreset,
	TypesetScroll,
} from "@school-os/ui/components/typeset";
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
  const [timezone, setTimezone] = useState("utc");

  return (
    <MotionSelect value={timezone} onValueChange={setTimezone}>
      <SelectTrigger>
        <SelectValue placeholder="Select world timezone..." />
      </SelectTrigger>
      <SelectContent className="max-h-60 overflow-y-auto">
        <SelectSearch placeholder="Search 15+ timezones..." />
        <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
        <SelectItem value="est">US Eastern Time (EST / UTC-5)</SelectItem>
      </SelectContent>
    </MotionSelect>
  );
}`;

const WEB_TYPESET_CODE = `import { Typeset, TypesetScroll, NotTypeset } from "@school-os/ui";

export function MarkdownContentDemo() {
  return (
    <Typeset preset="docs">
      <h1>Architecting High Performance Systems</h1>
      <p>
        Typeset delivers container-aware rhythm controls (<code>--typeset-size</code>,
        <code>--typeset-leading</code>, <code>--typeset-flow</code>) with streaming append stability.
      </p>

      <blockquote>
        "Three controls: size, leading, and flow. Everything derives from them."
      </blockquote>

      <TypesetScroll>
        <table>
          <thead>
            <tr><th>Metric</th><th>@tailwindcss/typography</th><th>Typeset</th></tr>
          </thead>
          <tbody>
            <tr><td>Sizing</td><td>Fixed rem scale</td><td>Container relative</td></tr>
            <tr><td>Streaming</td><td>No stability contract</td><td>Designed for stable appends</td></tr>
          </tbody>
        </table>
      </TypesetScroll>

      <NotTypeset className="p-4 rounded-xl bg-card border text-sm">
        <span>Opted out interactive component inside typeset container.</span>
      </NotTypeset>
    </Typeset>
  );
}`;

export default function ComponentSlugPage({ params }: { params: Promise<{ slug: string }> }) {
	const resolvedParams = use(params);
	const slug = resolvedParams.slug || "tabs";

	const [activePlatform, setActivePlatform] = useState<"web" | "mobile">("web");
	const [activeViewTab, setActiveViewTab] = useState<"preview" | "code">("preview");

	const [emailValue, setEmailValue] = useState("shabir@school-os.dev");
	const [errorInputVal, setErrorInputVal] = useState("invalid domain!");
	const [_inputErrorState, _setInputErrorState] = useState(true);
	const [searchValue, setSearchValue] = useState("");

	const [groupedSelect, setGroupedSelect] = useState("nextjs");
	const [searchableSelect, setSearchableSelect] = useState("us");
	const [scrollableSelect, setScrollableSelect] = useState("utc");
	const [errorSelect, setErrorSelect] = useState("");
	const [selectErrorState, setSelectErrorState] = useState(true);
	const [_rtlSelect, _setRtlSelect] = useState("ar");

	// Typeset Interactive State
	const [typesetPreset, setTypesetPreset] = useState<TypesetPreset>("docs");
	const [typesetSize, _setTypesetSize] = useState("15px");
	const [typesetLeading, _setTypesetLeading] = useState("1.75");
	const [typesetFlow, _setTypesetFlow] = useState("1.25em");
	const [streamBlocks, setStreamBlocks] = useState<string[]>([
		"Streaming block #1: Typeset uses margin-block-start exclusively, so prepended and appended streaming chunks never cause margin recalculation layout shift.",
	]);

	const [okState, setOkState] = useState<ButtonState>("idle");
	const [errState, setErrState] = useState<ButtonState>("idle");
	const [copied, setCopied] = useState(false);
	const [cmdCopied, setCmdCopied] = useState(false);

	const addStreamBlock = () => {
		const blockId = streamBlocks.length + 1;
		setStreamBlocks((prev) => [
			...prev,
			`Streaming block #${blockId}: Real-time token arrived at ${new Date().toLocaleTimeString()}. Margin flow derives from --typeset-flow.`,
		]);
	};

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
			typeset: WEB_TYPESET_CODE,
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

	const timezones = [
		{ value: "utc", label: "UTC (Coordinated Universal Time)" },
		{ value: "est", label: "US Eastern Time (EST / UTC-5)" },
		{ value: "cst", label: "US Central Time (CST / UTC-6)" },
		{ value: "pst", label: "US Pacific Time (PST / UTC-8)" },
		{ value: "gmt", label: "Europe London (GMT / UTC+0)" },
		{ value: "cet", label: "Europe Paris (CET / UTC+1)" },
		{ value: "eet", label: "Europe Athens (EET / UTC+2)" },
		{ value: "gst", label: "Asia Dubai (GST / UTC+4)" },
		{ value: "ist", label: "Asia India (IST / UTC+5:30)" },
		{ value: "sgt", label: "Asia Singapore (SGT / UTC+8)" },
		{ value: "jst", label: "Asia Tokyo (JST / UTC+9)" },
		{ value: "kst", label: "Asia Seoul (KST / UTC+9)" },
		{ value: "aest", label: "Australia Sydney (AEST / UTC+10)" },
		{ value: "nzst", label: "New Zealand Auckland (NZST / UTC+12)" },
		{ value: "brt", label: "America São Paulo (BRT / UTC-3)" },
	];

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
											: slug === "typeset"
												? TextFontIcon
												: Grid02Icon
							}
							size={28}
							strokeWidth={2}
						/>
						{slug === "typeset"
							? "Typeset Typography System"
							: `Motion ${slug.charAt(0).toUpperCase() + slug.slice(1)} Component`}
					</h1>
					<p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
						{slug === "typeset"
							? "A styling system for HTML and rendered markdown, from blog posts to streaming chat. Powered by size, leading, and flow rhythm controls."
							: slug === "select"
								? "Compositional motion select supporting scrollable long list containers (15+ items), grouped headers, searchable filter inputs, invalid error shake, and RTL alignment."
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
					{slug === "typeset"
						? "shadcn/typeset condenses document typography into three rhythm controls: size, leading, and flow. It fits its container, uses native theme tokens, stays stable during AI chat streaming, and provides opt-out escape hatches."
						: slug === "select"
							? "Rabtx UI Motion Select delivers bouncy accordion corner flattening transitions with automatic viewport flip placement. Supports SelectGroup, SelectLabel, inline SelectSearch filtering, scrollable 15+ long lists, error shakes, and RTL."
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
						Interactive Showcase ({activePlatform === "web" ? "Web Edition" : "Mobile Expo Frame"})
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
								{activePlatform === "web" ? (
									/* WEB PLATFORM SHOWCASE */
									slug === "typeset" ? (
										<div className="w-full max-w-2xl space-y-6">
											{/* PRESET SELECTOR & CONTROLS */}
											<div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl border border-border bg-card shadow-xs">
												<div className="flex items-center gap-2">
													<span className="text-xs font-semibold text-foreground">Preset:</span>
													<MotionTabs
														value={typesetPreset}
														onValueChange={(v) => setTypesetPreset(v as TypesetPreset)}
														variant="pill"
														size="sm"
													>
														<MotionTabsList>
															<MotionTabsTrigger value="docs">Docs</MotionTabsTrigger>
															<MotionTabsTrigger value="chat">Chat</MotionTabsTrigger>
															<MotionTabsTrigger value="compact">Compact</MotionTabsTrigger>
															<MotionTabsTrigger value="reading">Reading</MotionTabsTrigger>
														</MotionTabsList>
													</MotionTabs>
												</div>

												<Button
													variant="outline"
													size="sm"
													onClick={addStreamBlock}
													className="gap-1.5 text-xs h-8"
												>
													<HugeiconsIcon icon={Add01Icon} size={14} />
													Simulate AI Stream Block
												</Button>
											</div>

											{/* TYPESET CONTAINER */}
											<div className="p-6 rounded-2xl border border-border bg-card/60 shadow-sm">
												<Typeset
													preset={typesetPreset}
													size={typesetSize !== "15px" ? typesetSize : undefined}
													leading={typesetLeading !== "1.75" ? typesetLeading : undefined}
													flow={typesetFlow !== "1.25em" ? typesetFlow : undefined}
												>
													<h1>Architecting High Performance Systems</h1>
													<p>
														Typeset delivers container-aware rhythm controls with streaming append
														stability. Headings, code blocks, blockquotes, and tables derive spacing
														from <code>--typeset-flow</code>.
													</p>

													<blockquote>
														"Three controls: size, leading, and flow. Everything else derives from
														them."
													</blockquote>

													<h2>Comparison with Typography Plugins</h2>
													<p>
														Typeset uses zero-specificity <code>:where()</code> guards so standard
														Tailwind classes like <code>text-lg</code> win effortlessly without{" "}
														<code>!important</code>.
													</p>

													<TypesetScroll>
														<table>
															<thead>
																<tr>
																	<th>Metric</th>
																	<th>@tailwindcss/typography</th>
																	<th>shadcn/typeset</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Sizing</td>
																	<td>Fixed rem scale</td>
																	<td>Container relative</td>
																</tr>
																<tr>
																	<td>Streaming</td>
																	<td>No stability contract</td>
																	<td>Margin-block-start stable</td>
																</tr>
																<tr>
																	<td>Dark Mode</td>
																	<td>prose-invert modifier</td>
																	<td>Native HSL tokens flip</td>
																</tr>
															</tbody>
														</table>
													</TypesetScroll>

													{/* STREAMING BLOCKS */}
													{streamBlocks.map((block) => (
														<p key={block}>{block}</p>
													))}

													{/* OPT-OUT COMPONENT */}
													<NotTypeset className="mt-6 p-4 rounded-xl bg-muted/60 border border-border flex items-center justify-between">
														<div>
															<span className="text-xs font-semibold text-foreground block">
																Opted-Out Interactive Component
															</span>
															<span className="text-xs text-muted-foreground">
																Wrapped inside NotTypeset / data-not-typeset.
															</span>
														</div>
														<Button variant="default" size="sm">
															Action
														</Button>
													</NotTypeset>
												</Typeset>
											</div>
										</div>
									) : slug === "select" ? (
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
											{/* 1. SCROLLABLE LONG LIST SELECT (15+ ITEMS) */}
											<div className="space-y-1.5">
												{/* biome-ignore lint/a11y/noLabelWithoutControl: section label */}
												<label className="text-xs font-medium text-foreground tracking-tight block">
													1. Scrollable Long List (15+ World Timezones)
												</label>
												<MotionSelect value={scrollableSelect} onValueChange={setScrollableSelect}>
													<SelectTrigger>
														<SelectValue placeholder="Select timezone..." />
													</SelectTrigger>
													<SelectContent className="max-h-56">
														<SelectSearch placeholder="Filter 15+ timezones..." />
														{timezones.map((tz) => (
															<SelectItem key={tz.value} value={tz.value}>
																{tz.label}
															</SelectItem>
														))}
													</SelectContent>
												</MotionSelect>
											</div>

											{/* 2. SEARCHABLE COMBOBOX SELECT */}
											<div className="space-y-1.5">
												{/* biome-ignore lint/a11y/noLabelWithoutControl: section label */}
												<label className="text-xs font-medium text-foreground tracking-tight block">
													2. Searchable Filter Combobox
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

											{/* 3. GROUPED SELECT */}
											<div className="space-y-1.5">
												{/* biome-ignore lint/a11y/noLabelWithoutControl: section label */}
												<label className="text-xs font-medium text-foreground tracking-tight block">
													3. Grouped Categories Select
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

											{/* 4. ERROR SHAKE SELECT */}
											<div className="space-y-1.5">
												{/* biome-ignore lint/a11y/noLabelWithoutControl: section label */}
												<label className="text-xs font-medium text-foreground tracking-tight block">
													4. Invalid / Error State Select
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
										</div>
									) : slug === "input" ? (
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
												error="Domain contains invalid special characters"
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
										<div className="relative z-10 w-full max-w-md flex flex-col items-center">
											<MotionTabs
												defaultValue="overview"
												variant="pill"
												size="md"
												className="w-full"
											>
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
									)
								) : (
									/* MOBILE FRAME PLATFORM SHOWCASE */
									<div className="w-[320px] rounded-[36px] border-[6px] border-zinc-800 bg-zinc-950 p-4 pt-3 shadow-2xl space-y-4">
										<div className="flex items-center justify-between text-[11px] text-zinc-400 px-2 font-mono">
											<span>9:41</span>
											<div className="w-16 h-3.5 bg-zinc-900 rounded-full mx-auto" />
											<span>100%</span>
										</div>

										<div className="space-y-4 py-2 flex flex-col items-stretch max-h-[420px] overflow-y-auto pr-1">
											{slug === "typeset" ? (
												<Typeset preset="docs" className="text-xs">
													<h3 className="text-base font-bold text-white mb-1">Typeset Mobile</h3>
													<p className="text-xs text-zinc-300">
														Mobile typography powered by React Native NativeWind rhythm presets.
													</p>
													<blockquote className="my-2 border-l-2 border-teal-500 pl-3 text-xs italic text-zinc-400">
														"Three controls: size, leading, flow."
													</blockquote>
													<pre className="my-2 p-2 rounded-lg bg-zinc-900 text-[11px] font-mono text-teal-400">
														<code>bun add @school-os/ui</code>
													</pre>
													<NotTypeset className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 mt-3">
														<span className="text-xs font-semibold text-white">
															Opt-out Component
														</span>
													</NotTypeset>
												</Typeset>
											) : slug === "select" ? (
												<div className="space-y-1">
													<span className="text-[11px] font-medium text-zinc-400">
														1. Scrollable 15+ Timezones
													</span>
													<MotionSelect
														value={scrollableSelect}
														onValueChange={setScrollableSelect}
													>
														<SelectTrigger className="h-9 text-xs">
															<SelectValue placeholder="Timezone..." />
														</SelectTrigger>
														<SelectContent className="max-h-48">
															<SelectSearch placeholder="Filter 15+ timezones..." />
															{timezones.map((tz) => (
																<SelectItem key={tz.value} value={tz.value}>
																	{tz.label}
																</SelectItem>
															))}
														</SelectContent>
													</MotionSelect>
												</div>
											) : slug === "input" ? (
												<MotionInput
													label="Verified Account Email"
													value={emailValue}
													onChange={setEmailValue}
													success
													leftIcon={<HugeiconsIcon icon={Mail01Icon} size={15} />}
												/>
											) : slug === "button" ? (
												<StatefulButton
													state={okState}
													variant="primary"
													size="md"
													onClick={() => runStatefulDemo("ok")}
													loadingText="Saving"
													successText="Saved"
												>
													Save changes
												</StatefulButton>
											) : (
												<MotionTabs defaultValue="overview" variant="pill">
													<MotionTabsList className="w-full justify-center">
														<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
														<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
													</MotionTabsList>
												</MotionTabs>
											)}
										</div>

										<div className="w-24 h-1 bg-zinc-700 rounded-full mx-auto mt-2" />
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
													: slug === "typeset"
														? WEB_TYPESET_CODE
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
						<code>bun add @school-os/ui</code>
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
					Colors & Rhythm System
				</h2>
				<Card className="border border-border bg-card p-6 space-y-3">
					<p className="text-xs text-muted-foreground leading-relaxed">
						Typeset uses 3 core rhythm variables:{" "}
						<code className="font-mono text-foreground">--typeset-size</code>,{" "}
						<code className="font-mono text-foreground">--typeset-leading</code>, and{" "}
						<code className="font-mono text-foreground">--typeset-flow</code>. All headings,
						spacing, and quotes derive from them.
					</p>
				</Card>
			</section>

			{/* 6. ACCESSIBILITY (A11Y) */}
			<section className="space-y-3">
				<h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
					<HugeiconsIcon icon={AccessibilityIcon} size={18} strokeWidth={2} />
					Accessibility & Dark Mode
				</h2>
				<Card className="border border-border bg-card p-6 space-y-3">
					<ul className="space-y-2 text-xs text-muted-foreground list-disc list-inside leading-relaxed">
						<li>
							<strong className="text-foreground font-mono">Zero-Specificity Guards:</strong> Uses{" "}
							<code className="font-mono">:where()</code> so standard Tailwind text utilities win
							without needing <code className="font-mono">!important</code>.
						</li>
						<li>
							<strong className="text-foreground font-mono">Streaming Append Stability:</strong>{" "}
							Uses <code className="font-mono">margin-block-start</code> only so appending new
							blocks during AI streaming does not reflow previous margins.
						</li>
					</ul>
				</Card>
			</section>
		</div>
	);
}
