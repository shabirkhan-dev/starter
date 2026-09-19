"use client";

import { useReducedMotion } from "motion/react";

/** Motion is on unless the caller opts out or the OS asks for reduced motion. */
export function useMotion(enabled = true) {
	const reduced = useReducedMotion();

	return enabled && !reduced;
}
