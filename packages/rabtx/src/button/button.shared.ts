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

export const sizeClass: Record<Size, string> = {
	sm: "h-8 px-3 text-xs gap-1.5",
	md: "h-10 px-4 text-sm gap-2",
	lg: "h-12 px-6 text-base gap-2",
	icon: "h-10 w-10 p-0",
};

/** Each kind gets its own motion character. Terminal snaps instead of springing. */
export const kindMotion: Record<Kind, { transition: TransitionName; pressScale: number }> = {
	solid: { transition: "press", pressScale: 0.97 },
	detail: { transition: "press", pressScale: 0.97 },
	glass: { transition: "soft", pressScale: 0.96 },
	terminal: { transition: "snap", pressScale: 1 },
};
