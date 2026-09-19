import type { TransitionName } from "../motion";

/** Material: surface, shape and motion character. */
export type Kind = "solid" | "glass" | "detail" | "terminal";
/** Colour role only. */
export type Variant = "primary" | "secondary" | "destructive" | "ghost";
export type Size = "sm" | "md" | "lg" | "icon";

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
};

/**
 * Variant sets colour variables; kind consumes them. That keeps the axes additive —
 * four kinds and four variants cost eight strings, not sixteen.
 *
 *   --fill     filled surface (solid, detail)
 *   --on-fill  text on that surface
 *   --ink      line and text colour for unfilled surfaces (glass, terminal)
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
 * shadcn tightens the padding on whichever side holds an icon, keyed off
 * `data-icon="inline-start" | "inline-end"`. Those rules ship with its own size
 * classes and are tuned to its `px-2.5`; against the wider Rabtx padding they
 * would cut too deep, so each size restates them at its own scale. Without this
 * the inherited shadcn rule still fires and the button ends up lopsided.
 */
export const sizeClass: Record<Size, string> = {
	sm: "h-8 px-3 text-xs gap-1.5 has-data-[icon=inline-start]:ps-2 has-data-[icon=inline-end]:pe-2",
	md: "h-10 px-4 text-sm gap-2 has-data-[icon=inline-start]:ps-3 has-data-[icon=inline-end]:pe-3",
	lg: "h-12 px-6 text-base gap-2 has-data-[icon=inline-start]:ps-5 has-data-[icon=inline-end]:pe-5",
	icon: "h-10 w-10 p-0",
};

/**
 * Each kind gets its own motion character.
 *
 * `pressScale` is how far the surface sinks under a press; `hoverLift` is how far it
 * rises on pointer hover, in pixels, and is web-only because native has no hover.
 * Both are transforms, so neither reflows the surrounding layout and neither adds a
 * shadow — `detail` keeps its depth from edge contrast even while it lifts.
 *
 * Terminal is deliberately inert: it neither scales nor lifts, because snapping with
 * no displacement is what makes it read as a terminal rather than a soft UI control.
 */
export const kindMotion: Record<
	Kind,
	{ transition: TransitionName; pressScale: number; hoverLift: number }
> = {
	solid: { transition: "press", pressScale: 0.93, hoverLift: -1 },
	detail: { transition: "press", pressScale: 0.94, hoverLift: -1 },
	glass: { transition: "soft", pressScale: 0.93, hoverLift: -2 },
	terminal: { transition: "snap", pressScale: 1, hoverLift: 0 },
};
