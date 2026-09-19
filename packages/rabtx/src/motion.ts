/**
 * Motion tokens — the single source for both platforms.
 *
 * Framer Motion and Reanimated take the same physical spring parameters, so these
 * objects are passed straight to `motion/react` on web and mapped onto `withSpring`
 * / `withTiming` on native. Change a number here and both platforms follow.
 */

export type Transition =
	| { type: "spring"; stiffness: number; damping: number; mass: number }
	| { type: "tween"; duration: number };

export type TransitionName = "press" | "soft" | "snap";

export const transition: Record<TransitionName, Transition> = {
	/** Default press feedback. */
	press: { type: "spring", stiffness: 500, damping: 30, mass: 0.6 },
	/** Slower and heavier — glass should feel like it has mass. */
	soft: { type: "spring", stiffness: 260, damping: 28, mass: 0.9 },
	/** Terminal deliberately does not spring. */
	snap: { type: "tween", duration: 0.08 },
};
