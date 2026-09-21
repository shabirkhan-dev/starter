import type { ReactNode } from "react";
import { cn } from "../cn";
import type { TransitionName } from "../motion";

/** Material: surface, shape and motion character. */
export type Kind = "solid" | "detail" | "glass" | "terminal";
/** Colour role only. */
export type Variant = "primary" | "secondary" | "destructive" | "ghost";
export type Size = "sm" | "md" | "lg" | "icon";
export type ButtonState = "idle" | "loading" | "success" | "error";

export type ButtonBaseProps = {
	kind?: Kind;
	variant?: Variant;
	size?: Size;
	/** Off = no transform, instant state changes. Reduced motion forces this too. */
	animated?: boolean;
	/** Override the kind's press depth. Lower sinks further; 1 disables the scale. */
	pressScale?: number;
	/** Spawn a ripple from the press point. Off by default, and web-only. */
	ripple?: boolean;
	/**
	 * Drives the label swap. Leaving it undefined keeps the button entirely
	 * unstateful — no wrapper, no presence tracking — so existing buttons are
	 * untouched and only opted-in ones pay for the behaviour.
	 */
	state?: ButtonState;
	loadingText?: ReactNode;
	successText?: ReactNode;
	errorText?: ReactNode;
};

/**
 * The label a state shows. `idle` falls back to the button's own children, so a
 * caller only names the states it actually uses.
 */
export function stateLabel(
	state: ButtonState,
	labels: Pick<ButtonBaseProps, "loadingText" | "successText" | "errorText">,
	children: ReactNode,
): ReactNode {
	if (state === "loading") return labels.loadingText ?? children;
	if (state === "success") return labels.successText ?? children;
	if (state === "error") return labels.errorText ?? children;

	return children;
}

/**
 * Variant sets colour variables; kind consumes them. That keeps the axes additive —
 * four kinds and four variants cost eight strings, not sixteen.
 *
 *   --fill     filled surface (solid, detail)
 *   --on-fill  text on that surface
 *   --ink      line and text colour for unfilled surfaces (glass, terminal, ghost)
 *
 * --ink exists because a filled secondary is a pale surface, but a secondary
 * outline has to be drawn in the readable foreground, not in that surface colour.
 */
export const variantVars: Record<Variant, string> = {
	primary:
		"[--fill:var(--color-primary)] [--on-fill:var(--color-primary-foreground)] [--ink:var(--color-primary)]",
	secondary:
		"[--fill:var(--color-secondary)] [--on-fill:var(--color-secondary-foreground)] [--ink:var(--color-secondary-foreground)]",
	destructive:
		"[--fill:var(--color-destructive)] [--on-fill:var(--color-background)] [--ink:var(--color-destructive)]",
	ghost:
		"[--fill:var(--color-muted)] [--on-fill:var(--color-foreground)] [--ink:var(--color-foreground)]",
};

/**
 * Shape and type character. Kept apart from the fill so `ghost` — which does not
 * fill — still inherits its material's silhouette, typeface and casing.
 *
 * Radius belongs to the material, not the size. Sizes only change height, padding
 * and text scale, so a pill stays a pill at every size and `size="icon"` becomes a
 * circle rather than a squircle of some intermediate radius.
 */
export const kindShape: Record<Kind, string> = {
	solid: "rounded-full",
	detail: "rounded-lg",
	glass: "rounded-2xl",
	terminal: "rounded-none font-mono tracking-wider uppercase",
};

/**
 * Fill, edge and depth.
 *
 * `solid` depth is three tones and nothing else: a hairline edge that follows the
 * foreground, a light top edge and a dark bottom edge. No drop shadow — on a
 * coloured fill a cast shadow only smears the page under the button, and the two
 * bevel tones already say "raised" at a glance in both themes.
 *
 * Hover and active restate `bg` and `text` because shadcn's ghost variant (the
 * least opinionated surface it offers) has its own hover background, and only a
 * class naming the same property can displace it through tailwind-merge. The
 * dark-hover pair is not redundant: `:is(.dark *)` adds a class of specificity, so
 * shadcn's dark hover would otherwise repaint the fill on a dark page.
 */
export const kindSurface: Record<Kind, string> = {
	solid: cn(
		"border-button-edge bg-(--fill) text-(--on-fill)",
		"shadow-[inset_0_1px_0_var(--button-sheen),inset_0_-1px_0_var(--button-shade)]",
		"hover:bg-(--fill) hover:text-(--on-fill) hover:brightness-105",
		"dark:hover:bg-(--fill) dark:hover:text-(--on-fill)",
		// Expansion is a state, not a material: a filled button keeps its fill while it
		// holds a menu open, instead of turning into shadcn's muted surface.
		"aria-expanded:bg-(--fill) aria-expanded:text-(--on-fill)",
		"active:bg-(--fill) active:text-(--on-fill) active:brightness-95",
	),
	detail:
		"relative border-2 border-button-rim bg-(--fill) text-(--on-fill) before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-2px)] before:border before:border-(--on-fill)/20 before:border-t-(--on-fill)/40 before:border-b-foreground/20 hover:bg-(--fill) hover:text-(--on-fill) hover:brightness-105 dark:hover:bg-(--fill) dark:hover:text-(--on-fill) active:before:border-t-foreground/20 active:before:border-b-(--on-fill)/30",
	// Left as-is on purpose: glass is the unfinished liquid-glass fallback, and
	// restyling it here would pre-empt that work rather than clean anything up.
	glass:
		"border border-(--ink)/20 bg-(--fill)/15 text-(--ink) shadow-lg backdrop-blur-xl hover:bg-(--fill)/25 hover:text-(--ink) dark:hover:bg-(--fill)/25 dark:hover:text-(--ink)",
	terminal:
		"border-2 border-(--ink) text-(--ink) hover:bg-(--ink) hover:text-background dark:hover:bg-(--ink) dark:hover:text-background",
};

/**
 * The one variant that does not fill. A ghost button is a text button, so it drops
 * the material surface entirely instead of painting a near-white fill on a
 * near-white page — which is the only way it stays legible in the light theme.
 */
export const ghostSurface =
	"border-transparent bg-transparent text-(--ink) shadow-none hover:bg-(--ink)/10 hover:text-(--ink) active:bg-(--ink)/15";

/**
 * shadcn tightens the padding on whichever side holds an icon, keyed off
 * `data-icon="inline-start" | "inline-end"`. Those rules ship with its own size
 * classes and are tuned to its `px-2.5`; against the wider Rabtx padding they
 * would cut too deep, so each size restates them at its own scale. Without this
 * the inherited shadcn rule still fires and the button ends up lopsided.
 */
export const sizeClass: Record<Size, string> = {
	sm: "h-8 gap-1.5 px-3.5 text-[0.8125rem] has-data-[icon=inline-start]:ps-2.5 has-data-[icon=inline-end]:pe-2.5",
	md: "h-10 gap-2 px-5 text-sm has-data-[icon=inline-start]:ps-4 has-data-[icon=inline-end]:pe-4",
	lg: "h-12 gap-2 px-6 text-[0.9375rem] has-data-[icon=inline-start]:ps-5 has-data-[icon=inline-end]:pe-5",
	icon: "h-10 w-10 p-0",
};

/**
 * Each kind gets its own motion character, and each lever is optional so a material
 * can decline one without the others.
 *
 * `pressScale` is how far the surface sinks under a press; `hoverScale` multiplies
 * the box on pointer hover and `hoverLift` shifts it up in pixels. All three are
 * transforms, so none of them reflow the surrounding layout, and all three are
 * web-only where hover is concerned — native has no pointer to hover with.
 *
 * Terminal is deliberately inert: it neither scales nor lifts, because snapping with
 * no displacement is what makes it read as a terminal rather than a soft UI control.
 */
export type KindMotion = {
	transition: TransitionName;
	pressScale: number;
	hoverScale?: number;
	hoverLift?: number;
};

export const kindMotion: Record<Kind, KindMotion> = {
	solid: { transition: "press", pressScale: 0.93, hoverScale: 1.02 },
	detail: { transition: "press", pressScale: 0.94, hoverLift: -1 },
	glass: { transition: "soft", pressScale: 0.93, hoverScale: 1.01, hoverLift: -2 },
	terminal: { transition: "snap", pressScale: 1 },
};
