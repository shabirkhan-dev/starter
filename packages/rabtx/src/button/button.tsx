"use client";

import { Button as ShadcnButton } from "@school-os/ui/components/button";
import { motion } from "motion/react";
import type { ComponentProps, CSSProperties } from "react";
import { cn } from "../cn";
import { transition } from "../motion";
import { useMotion } from "../use-motion";
import {
	type ButtonBaseProps,
	type Kind,
	kindMotion,
	sizeClass,
	variantVars,
} from "./button.shared";

/**
 * Rabtx builds on the shadcn Button, not around it. That component owns the
 * element semantics, disabled and focus handling, aria-invalid styling and icon
 * sizing — it wraps Base UI itself, so reaching for Base UI directly here would
 * bypass the layer that is meant to be the source of truth and let the two drift.
 *
 * `variant="ghost"` is the least opinionated surface shadcn offers; the kind
 * classes below supply the actual material. Because `cn` runs tailwind-merge with
 * our classes last, conflicting utilities resolve in our favour — which is why
 * each kind states its own `hover:bg-*` and `hover:text-*` rather than relying on
 * shadcn's hover, which would otherwise survive as a non-conflicting rule.
 */
const MotionButton = motion.create(ShadcnButton);

const base =
	"shrink-0 select-none font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-(--ink) focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const kindClass: Record<Kind, string> = {
	solid:
		"rounded-lg bg-(--fill) text-(--on-fill) hover:bg-(--fill) hover:text-(--on-fill) hover:brightness-110",
	// Left as-is on purpose: glass is the unfinished liquid-glass fallback, and
	// restyling it here would pre-empt that work rather than clean anything up.
	glass:
		"rounded-2xl border border-(--ink)/20 bg-(--fill)/15 text-(--ink) shadow-lg backdrop-blur-xl hover:bg-(--fill)/25 hover:text-(--ink)",
	detail:
		"relative rounded-lg border-2 border-button-rim bg-(--fill) text-(--on-fill) before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-2px)] before:border before:border-(--on-fill)/20 before:border-t-(--on-fill)/40 before:border-b-foreground/20 hover:bg-(--fill) hover:text-(--on-fill) hover:brightness-105 active:before:border-t-foreground/20 active:before:border-b-(--on-fill)/30",
	terminal:
		"rounded-none border-2 border-(--ink) font-mono uppercase tracking-wider text-(--ink) hover:bg-(--ink) hover:text-background",
};

/**
 * Motion redefines the drag and animation handlers with its own gesture signatures,
 * which collide with the DOM ones the shadcn Button declares. Dropping them keeps the
 * remaining props honest rather than widening them with `any`; callers who need drag
 * gestures should compose a motion wrapper around the Button instead.
 */
type MotionConflicts =
	| "onDrag"
	| "onDragStart"
	| "onDragEnd"
	| "onAnimationStart"
	| "onAnimationEnd"
	| "onAnimationIteration"
	| "style"
	// Rabtx owns these two axes and their value sets differ from shadcn's, so the
	// inherited ones are dropped rather than intersected down to the overlap.
	| "variant"
	| "size";

export type ButtonProps = Omit<ComponentProps<typeof ShadcnButton>, MotionConflicts> &
	ButtonBaseProps & {
		/** Base UI's state-function form is dropped; motion drives the transform here. */
		style?: CSSProperties;
	};

export function Button({
	kind = "solid",
	variant = "primary",
	size = "md",
	animated = true,
	className,
	disabled,
	...props
}: ButtonProps) {
	const on = useMotion(animated && !disabled);
	const { transition: name, pressScale, hoverLift } = kindMotion[kind];

	return (
		<MotionButton
			variant="ghost"
			disabled={disabled}
			whileHover={on && hoverLift ? { y: hoverLift } : undefined}
			whileTap={on ? { scale: pressScale, y: 0 } : undefined}
			transition={transition[name]}
			className={cn(base, variantVars[variant], kindClass[kind], sizeClass[size], className)}
			{...props}
		/>
	);
}
