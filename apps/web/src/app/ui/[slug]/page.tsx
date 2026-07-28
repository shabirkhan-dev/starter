"use client";

import { useTheme } from "@/components/theme";
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
	Home01Icon,
	InputTextIcon,
	Layers01Icon,
	Mail01Icon,
	Moon01Icon,
	Search01Icon,
	Settings02Icon,
	SmartPhone01Icon,
	SparklesIcon,
	Sun01Icon,
	TextFontIcon,
	Tick02Icon,
	UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@school-os/ui/components/badge";
import {
	BottomBar,
	BottomBarItem,
	generateAaveLensNormalMap,
} from "@school-os/ui/components/bottom-bar";
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
import { use, useEffect, useRef, useState } from "react";

import {
	GlassCard,
	GlassCardBadge,
	GlassCardContent,
	GlassCardDescription,
	GlassCardFooter,
	GlassCardHeader,
	GlassCardTitle,
} from "@school-os/ui/components/glass-card";

const WEB_GLASS_CARD_CODE = `import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
  GlassCardBadge,
} from "@school-os/ui/components/glass-card";

export function LiquidGlassCardDemo() {
  return (
    <GlassCard themeMode="auto" depth={48} curvature={75} chroma={0.85} blur={2.5}>
      <GlassCardHeader>
        <GlassCardBadge>Aave Lens Engine</GlassCardBadge>
        <GlassCardTitle>Liquid Glass Surface</GlassCardTitle>
        <GlassCardDescription>
          Real-time SVG light bending over DOM content with chromatic dispersion.
        </GlassCardDescription>
      </GlassCardHeader>
      <GlassCardContent>
        <p className="text-sm text-zinc-300">
          Refracting live DOM nodes with zero canvas screenshots or WebGL flags.
        </p>
      </GlassCardContent>
      <GlassCardFooter>
        <button className="px-4 py-2 rounded-xl bg-teal-500 text-black font-medium text-xs">
          Explore Optics
        </button>
      </GlassCardFooter>
    </GlassCard>
  );
}`;

const WEB_BOTTOM_BAR_CODE = `import { BottomBar, BottomBarItem } from "@school-os/ui/components/bottom-bar";

export function OfficialAaveGlassStudioDemo() {
  const [active, setActive] = useState("home");
  return (
    <BottomBar
      themeMode="auto"
      value={active}
      onValueChange={setActive}
      switchScaleX={1.18}
      switchScaleY={1.35}
      stiffness={220}
      damping={15}
      mass={0.8}
    >
      <BottomBarItem value="home">Home</BottomBarItem>
      <BottomBarItem value="explore">Explore</BottomBarItem>
      <BottomBarItem value="profile">Profile</BottomBarItem>
    </BottomBar>
  );
}`;

const WEB_TABS_CODE = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@school-os/ui/components/motion/tabs";`;
const WEB_BUTTON_CODE = `import { MotionButton, StatefulButton } from "@school-os/ui/components/motion/button";`;
const WEB_INPUT_CODE = `import { MotionInput } from "@school-os/ui/components/motion/input";`;
const WEB_SELECT_CODE = `import { MotionSelect } from "@school-os/ui/components/motion/select";`;
const WEB_TYPESET_CODE = `import { Typeset, TypesetScroll, NotTypeset } from "@school-os/ui";`;

export default function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = use(params);
	const { resolvedTheme } = useTheme();

	const [activeViewTab, setActiveViewTab] = useState<"preview" | "code">("preview");
	const [copied, setCopied] = useState(false);
	const [cmdCopied, setCmdCopied] = useState(false);

	const [bottomBarTab, setBottomBarTab] = useState("home");
	const [typesetPreset, setTypesetPreset] = useState<TypesetPreset>("docs");

	const [manualThemeMode, setManualThemeMode] = useState<"dark" | "light" | null>(null);
	const activeTheme = manualThemeMode ?? (resolvedTheme === "light" ? "light" : "dark");

	// AAVE GLASS OPTICAL LENS SLIDERS
	const [lensWidth, setLensWidth] = useState(71);
	const [lensHeight, setLensHeight] = useState(80);
	const [borderRadius, setBorderRadius] = useState(64);
	const [scale, setScale] = useState(0.2);
	const [depth, setDepth] = useState(52);
	const [curvature, setCurvature] = useState(80);
	const [splay, setSplay] = useState(1.0);
	const [chroma, setChroma] = useState(0.98);
	const [blur, setBlur] = useState(2.0);
	const [glow, setGlow] = useState(1.0);
	const [edgeHighlight, setEdgeHighlight] = useState(0.25);
	const [specularAngle, setSpecularAngle] = useState(180);

	// FLUID LIQUID SWITCHING PHYSICS SLIDERS
	const [switchScaleX, setSwitchScaleX] = useState(1.22);
	const [switchScaleY, setSwitchScaleY] = useState(1.42);
	const [stiffness, setStiffness] = useState(220);
	const [damping, setDamping] = useState(14);
	const [mass, setMass] = useState(0.8);

	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	// LIVE RENDERING OF THE RGB NORMAL DISPLACEMENT MAP ON RIGHT VIEWPORT
	useEffect(() => {
		if (slug !== "bottom-bar" || !canvasRef.current) return;
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const w = Math.max(64, Math.round(lensWidth * 2));
		const h = Math.max(64, Math.round(lensHeight * 2));
		canvas.width = w;
		canvas.height = h;

		const imgData = ctx.createImageData(w, h);
		const data = imgData.data;

		const cx = w / 2;
		const cy = h / 2;
		const curv = Math.max(0.2, curvature / 40);
		const dep = depth / 50;

		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				const idx = (y * w + x) * 4;

				const dx = (x - cx) / cx;
				const dy = (y - cy) / cy;
				const dist = Math.sqrt(dx * dx + dy * dy);

				if (dist <= 1) {
					const factor = Math.pow(dist, curv) * dep;
					const normX = Math.min(1, Math.max(-1, dx * factor * splay));
					const normY = Math.min(1, Math.max(-1, dy * factor * splay));

					data[idx] = Math.round(128 + normX * 127);
					data[idx + 1] = Math.round(128 + normY * 127);
					data[idx + 2] = Math.round(255 * (1 - dist * 0.4) * Math.min(1.5, glow));
					data[idx + 3] = 255;
				} else {
					data[idx] = activeTheme === "light" ? 220 : 113;
					data[idx + 1] = activeTheme === "light" ? 220 : 113;
					data[idx + 2] = activeTheme === "light" ? 230 : 122;
					data[idx + 3] = 255;
				}
			}
		}

		ctx.putImageData(imgData, 0, 0);
	}, [slug, lensWidth, lensHeight, borderRadius, depth, curvature, splay, glow, activeTheme]);

	const codeSnippet =
		slug === "glass-card"
			? WEB_GLASS_CARD_CODE
			: slug === "bottom-bar"
				? WEB_BOTTOM_BAR_CODE
				: slug === "select"
					? WEB_SELECT_CODE
					: slug === "input"
						? WEB_INPUT_CODE
						: slug === "button"
							? WEB_BUTTON_CODE
							: slug === "typeset"
								? WEB_TYPESET_CODE
								: WEB_TABS_CODE;

	const handleCopy = () => {
		navigator.clipboard.writeText(codeSnippet);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const copyInstall = () => {
		navigator.clipboard.writeText("bun add @school-os/ui");
		setCmdCopied(true);
		setTimeout(() => setCmdCopied(false), 2000);
	};

	const title =
		slug === "glass-card"
			? "Liquid Glass Card"
			: slug === "bottom-bar"
				? "Liquid Glass Bottom Bar"
				: slug === "typeset"
					? "Typeset"
					: slug === "select"
						? "Motion Select"
						: slug === "input"
							? "Motion Input"
							: slug === "button"
								? "Motion Button"
								: "Motion Tabs";

	const description =
		slug === "glass-card"
			? "Tactile glass surface container with SVG feDisplacementMap light refraction, chromatic aberration, & 3D tilt hover"
			: slug === "bottom-bar"
				? "Official Aave Glass Lens Generator & Fluid Dynamics Studio"
				: slug === "typeset"
					? "A styling system for HTML and rendered markdown with 3 rhythm controls: size, leading, and flow."
					: slug === "select"
						? "Animated combobox dropdown with search filtering, spring scale physics, and keyboard navigation."
						: slug === "input"
							? "Interactive input field with focus ring animations, error shake, and password toggling."
							: slug === "button"
								? "Spring interactive button with multi-state loading, success, and error feedback."
								: "Spring animated layout indicator with exclusion pill and underline tab variants.";

	return (
		<div className="space-y-8 max-w-5xl pb-16">
			{/* HEADER */}
			<div className="space-y-2 border-b border-border pb-6">
				<div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
					<span>Components</span>
					<span>/</span>
					<span className="text-foreground font-semibold">{slug}</span>
					<Badge
						variant="outline"
						className="ml-2 font-mono text-[10px] text-teal-400 border-teal-500/30"
					>
						Ready
					</Badge>
				</div>
				<h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
				<p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
			</div>

			{/* PREVIEW CONTAINER */}
			<section className="space-y-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg border border-border">
						<button
							type="button"
							onClick={() => setActiveViewTab("preview")}
							className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
								activeViewTab === "preview"
									? "bg-background text-foreground shadow-xs"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							<HugeiconsIcon icon={EyeIcon} size={14} strokeWidth={2} />
							Preview
						</button>
						<button
							type="button"
							onClick={() => setActiveViewTab("code")}
							className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
								activeViewTab === "code"
									? "bg-background text-foreground shadow-xs"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							<HugeiconsIcon icon={CodeIcon} size={14} strokeWidth={2} />
							Code
						</button>
					</div>

					{/* GLOBAL THEME SYNC STATUS / MANUAL OVERRIDE */}
					{slug === "bottom-bar" && (
						<div className="flex items-center gap-2">
							<div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg border border-border">
								<button
									type="button"
									onClick={() => setManualThemeMode("dark")}
									className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1 ${
										activeTheme === "dark"
											? "bg-background text-foreground shadow-xs"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									<HugeiconsIcon icon={Moon01Icon} size={12} />
									Dark
								</button>
								<button
									type="button"
									onClick={() => setManualThemeMode("light")}
									className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1 ${
										activeTheme === "light"
											? "bg-background text-foreground shadow-xs"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									<HugeiconsIcon icon={Sun01Icon} size={12} />
									Light
								</button>
							</div>
						</div>
					)}
				</div>

				<Card className="border border-border bg-card overflow-hidden">
					<CardContent className="p-0">
						{activeViewTab === "preview" && (
							<div
								className={`p-6 space-y-6 transition-colors duration-300 ${activeTheme === "light" ? "bg-zinc-100" : "bg-[#09090b]"}`}
							>
								{slug === "glass-card" ? (
									<div className="flex flex-col items-center justify-center py-12 px-4 space-y-6">
										<GlassCard
											themeMode={activeTheme}
											depth={depth}
											curvature={curvature}
											splay={splay}
											chroma={chroma}
											blur={blur}
											glow={glow}
											edgeHighlight={edgeHighlight}
											specularAngle={specularAngle}
											className="max-w-md w-full"
										>
											<GlassCardHeader>
												<div className="flex items-center justify-between">
													<GlassCardBadge>Aave Lens Engine</GlassCardBadge>
													<span className="text-xs font-mono text-muted-foreground">v2.4</span>
												</div>
												<GlassCardTitle className="pt-2">Liquid Glass Card Surface</GlassCardTitle>
												<GlassCardDescription>
													Interactive glass surface refracting real live DOM elements with
													multi-channel RGB chromatic dispersion.
												</GlassCardDescription>
											</GlassCardHeader>
											<GlassCardContent className="space-y-3">
												<div className="flex items-center justify-between p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-mono">
													<span>Refraction Scale</span>
													<span className="text-teal-400 font-bold">
														{(scale * 160).toFixed(1)}px
													</span>
												</div>
												<div className="flex items-center justify-between p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-mono">
													<span>Chromatic Fringe</span>
													<span className="text-purple-400 font-bold">
														{(chroma * 100).toFixed(0)}%
													</span>
												</div>
											</GlassCardContent>
											<GlassCardFooter>
												<button
													type="button"
													className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-black font-semibold text-xs shadow-lg hover:brightness-110 transition-all"
												>
													Interactive Tilt Lens
												</button>
												<span className="text-[11px] font-mono text-muted-foreground">
													Hover to swell
												</span>
											</GlassCardFooter>
										</GlassCard>
									</div>
								) : slug === "bottom-bar" ? (
									<>
										{/* DUAL VIEWPORTS MATCHING SCREENSHOT */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											{/* LEFT VIEWPORT: REFRACTED RESULT OVER GRID */}
											<div
												className={`h-64 rounded-3xl overflow-hidden relative border flex items-center justify-center p-4 ${
													activeTheme === "light"
														? "border-black/10 bg-gradient-to-br from-indigo-100/80 via-zinc-100 to-purple-100/80"
														: "border-white/10 bg-gradient-to-br from-indigo-950/60 via-zinc-950 to-purple-950/60"
												}`}
											>
												<div
													className="absolute inset-0 bg-cover bg-center opacity-80"
													style={{
														backgroundImage:
															'url("/home/shabir/.gemini/antigravity-cli/brain/862b382b-0ea2-4445-b312-852049313c8d/glass_background_1785059083234.jpg")',
													}}
												/>
												<div
													className={`absolute inset-0 bg-[size:32px_32px] ${
														activeTheme === "light"
															? "bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]"
															: "bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
													}`}
												/>

												<BottomBar
													themeMode={activeTheme}
													value={bottomBarTab}
													onValueChange={setBottomBarTab}
													width={lensWidth}
													height={lensHeight}
													borderRadius={borderRadius}
													scale={scale}
													depth={depth}
													curvature={curvature}
													splay={splay}
													chroma={chroma}
													blur={blur}
													glow={glow}
													edgeHighlight={edgeHighlight}
													specularAngle={specularAngle}
													switchScaleX={switchScaleX}
													switchScaleY={switchScaleY}
													stiffness={stiffness}
													damping={damping}
													mass={mass}
													className="relative z-10"
												>
													<BottomBarItem
														value="home"
														icon={<HugeiconsIcon icon={Home01Icon} size={16} />}
													>
														Home
													</BottomBarItem>
													<BottomBarItem
														value="explore"
														icon={<HugeiconsIcon icon={Search01Icon} size={16} />}
													>
														Explore
													</BottomBarItem>
													<BottomBarItem
														value="profile"
														icon={<HugeiconsIcon icon={UserIcon} size={16} />}
													>
														Profile
													</BottomBarItem>
												</BottomBar>
											</div>

											{/* RIGHT VIEWPORT: LIVE DYNAMIC CANVAS RGB NORMAL DISPLACEMENT MAP */}
											<div
												className={`h-64 rounded-3xl overflow-hidden relative border flex items-center justify-center p-4 ${
													activeTheme === "light"
														? "border-black/10 bg-zinc-200"
														: "border-white/10 bg-[#71717a]"
												}`}
											>
												<canvas
													ref={canvasRef}
													className="rounded-[32px] shadow-2xl transition-all duration-300 max-w-[200px] max-h-[160px] object-contain"
												/>
											</div>
										</div>

										<p
											className={`text-center text-xs font-medium ${activeTheme === "light" ? "text-zinc-600" : "text-zinc-400"}`}
										>
											On the left is the refracted result, on the right the map that drives it.
											(Click tabs to test fluid swell)
										</p>
									</>
								) : (
									<div className="min-h-[300px] flex items-center justify-center">
										<Typeset preset={typesetPreset}>
											<h1>Typeset System</h1>
										</Typeset>
									</div>
								)}
							</div>
						)}

						{activeViewTab === "code" && (
							<div className="relative bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto min-h-[300px]">
								<Button
									variant="ghost"
									size="sm"
									onClick={handleCopy}
									className="absolute right-4 top-4 h-8 px-3 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 gap-1.5 border border-zinc-700"
								>
									<HugeiconsIcon
										icon={copied ? Tick02Icon : Copy01Icon}
										size={14}
										className={copied ? "text-emerald-400" : ""}
									/>
									{copied ? "Copied!" : "Copy Code"}
								</Button>
								<pre className="pr-16 leading-relaxed">
									<code>{codeSnippet}</code>
								</pre>
							</div>
						)}
					</CardContent>
				</Card>
			</section>

			{/* FLUID LIQUID SWITCHING PHYSICS CONTROLS */}
			{slug === "bottom-bar" && (
				<section className="space-y-4">
					<div className="flex items-center gap-2">
						<HugeiconsIcon icon={SparklesIcon} size={18} className="text-purple-400" />
						<h2 className="text-sm font-semibold tracking-tight text-foreground">
							Fluid Liquid Switching Physics Controls
						</h2>
					</div>
					<Card
						className={`border p-6 rounded-3xl transition-colors duration-300 ${
							activeTheme === "light" ? "border-border bg-card" : "border-white/10 bg-[#0c0c0e]/95"
						}`}
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
							{/* LEFT COLUMN */}
							<div className="space-y-5">
								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">
										Switch Scale X (Horizontal Stretch)
									</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="1.00"
											max="1.80"
											step="0.02"
											value={switchScaleX}
											onChange={(e) => setSwitchScaleX(Number.parseFloat(e.target.value))}
											className="w-full accent-purple-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{switchScaleX.toFixed(2)}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">
										Switch Scale Y (Vertical Swell)
									</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="1.00"
											max="2.00"
											step="0.02"
											value={switchScaleY}
											onChange={(e) => setSwitchScaleY(Number.parseFloat(e.target.value))}
											className="w-full accent-purple-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{switchScaleY.toFixed(2)}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Spring Stiffness</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="50"
											max="500"
											step="10"
											value={stiffness}
											onChange={(e) => setStiffness(Number.parseInt(e.target.value))}
											className="w-full accent-purple-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{stiffness}
										</span>
									</div>
								</div>
							</div>

							{/* RIGHT COLUMN */}
							<div className="space-y-5">
								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">
										Spring Damping (Friction)
									</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="5"
											max="40"
											step="1"
											value={damping}
											onChange={(e) => setDamping(Number.parseInt(e.target.value))}
											className="w-full accent-purple-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{damping}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Droplet Mass</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="0.2"
											max="3.0"
											step="0.1"
											value={mass}
											onChange={(e) => setMass(Number.parseFloat(e.target.value))}
											className="w-full accent-purple-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{mass.toFixed(1)}
										</span>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</section>
			)}

			{/* EXACT 12 AAVE GLASS SLIDERS MATCHING SCREENSHOT */}
			{slug === "bottom-bar" && (
				<section className="space-y-4">
					<div className="flex items-center gap-2">
						<HugeiconsIcon icon={CubeIcon} size={18} className="text-indigo-400" />
						<h2 className="text-sm font-semibold tracking-tight text-foreground">
							Optical Lens Displacement Controls
						</h2>
					</div>
					<Card
						className={`border p-6 rounded-3xl transition-colors duration-300 ${
							activeTheme === "light" ? "border-border bg-card" : "border-white/10 bg-[#0c0c0e]/95"
						}`}
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
							{/* LEFT COLUMN */}
							<div className="space-y-5">
								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Width</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="40"
											max="160"
											value={lensWidth}
											onChange={(e) => setLensWidth(Number.parseInt(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{lensWidth}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">BorderRadius</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="0"
											max="80"
											value={borderRadius}
											onChange={(e) => setBorderRadius(Number.parseInt(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{borderRadius}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Depth</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="10"
											max="90"
											value={depth}
											onChange={(e) => setDepth(Number.parseInt(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{depth}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Splay</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="0.1"
											max="2.0"
											step="0.05"
											value={splay}
											onChange={(e) => setSplay(Number.parseFloat(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{splay.toFixed(2)}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Blur</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="0.0"
											max="10.0"
											step="0.1"
											value={blur}
											onChange={(e) => setBlur(Number.parseFloat(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{blur.toFixed(1)}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Edge Highlight</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="0.0"
											max="1.0"
											step="0.05"
											value={edgeHighlight}
											onChange={(e) => setEdgeHighlight(Number.parseFloat(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{edgeHighlight.toFixed(2)}
										</span>
									</div>
								</div>
							</div>

							{/* RIGHT COLUMN */}
							<div className="space-y-5">
								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Height</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="30"
											max="120"
											value={lensHeight}
											onChange={(e) => setLensHeight(Number.parseInt(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{lensHeight}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Scale</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="0.000"
											max="0.500"
											step="0.01"
											value={scale}
											onChange={(e) => setScale(Number.parseFloat(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{scale.toFixed(3)}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Curvature</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="0"
											max="100"
											value={curvature}
											onChange={(e) => setCurvature(Number.parseInt(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{curvature}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Chroma</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="0.00"
											max="2.00"
											step="0.02"
											value={chroma}
											onChange={(e) => setChroma(Number.parseFloat(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{chroma.toFixed(2)}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Glow</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="0.00"
											max="2.00"
											step="0.05"
											value={glow}
											onChange={(e) => setGlow(Number.parseFloat(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{glow.toFixed(2)}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold text-foreground">Specular Angle</span>
									<div className="flex items-center gap-4 flex-1 max-w-[200px] ml-auto">
										<input
											type="range"
											min="0"
											max="360"
											step="5"
											value={specularAngle}
											onChange={(e) => setSpecularAngle(Number.parseInt(e.target.value))}
											className="w-full accent-indigo-400 cursor-pointer"
										/>
										<span className="text-xs font-mono text-foreground w-10 text-right">
											{specularAngle}
										</span>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</section>
			)}

			{/* INSTALLATION */}
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
							className="h-7 px-2 text-xs bg-zinc-800 text-zinc-300 gap-1"
						>
							{cmdCopied ? "Copied" : "Copy"}
						</Button>
					</div>
				</Card>
			</section>
		</div>
	);
}
