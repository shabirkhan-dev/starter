"use client";

import { Button as ShadcnButton } from "@school-os/ui/components/button";
import { motion } from "motion/react";
import type { ComponentProps, CSSProperties } from "react";
import { cn } from "../cn";
import { transition } from "../motion";
import { useHoverCapable } from "../use-hover-capable";
import { useMotion } from "../use-motion";
import {
	type ButtonBaseProps,
	ghostSurface,
	type KindMotion,
	kindMotion,
	kindShape,
	kindSurface,
	sizeClass,
	stateLabel,
	variantVars,
} from "./button.shared";
import { RippleLayer, useRipple } from "./ripple";
import { StateLabel } from "./state-label";

/**
 * Rabtx builds on the shadcn Button, not around it. That component owns the element
 * semantics, disabled and focus handling, aria-invalid styling and icon sizing — it
 * wraps Base UI itself, so reaching for Base UI directly here would bypass the layer
 * that is meant to be the source of truth and let the two drift.
 *
 * `variant="ghost"` is the least opinionated surface shadcn offers; the kind classes
 * supply the actual material. Because `cn` runs tailwind-merge with our classes last,
 * conflicting utilities resolve in our favour — but a non-conflicting rule like
 * shadcn's hover background would survive, which is why every kind states its own
 * `hover:bg-*` and `hover:text-*` explicitly.
 */
const MotionButton = motion.create(ShadcnButton);

/**
 * What Rabtx adds on top of shadcn's base: Rabtx's own colour transition (shadcn uses
 * `transition-all`, which would animate layout properties too), a ring drawn in
 * `--ink` so it stays legible against every variant, and the removal of shadcn's
 * active translate — motion owns the transform, and two systems moving the same
 * element makes the press feel like it stutters.
 */
const base =
	"shrink-0 select-none font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,filter] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-(--ink) focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:translate-y-0";

// Base UI hands handlers its own wrapped event (it carries preventBaseUIHandler),
// so the parameter type comes from the component rather than from React.
type ButtonPointerEvent = Parameters<
	NonNullable<ComponentProps<typeof ShadcnButton>["onPointerDown"]>
>[0];

/**
 * Motion redefines the drag and animation handlers with its own gesture signatures,
 * and Base UI allows `style` as a function of state, so those collide with what
 * motion expects. Dropping them keeps the remaining props honest rather than
 * widening them with `any`. `variant` and `size` go too: Rabtx owns both axes and
 * their value sets differ from shadcn's.
 */
type MotionConflicts =
	| "onDrag"
	| "onDragStart"
	| "onDragEnd"
	| "onAnimationStart"
	| "onAnimationEnd"
	| "onAnimationIteration"
	| "style"
	| "variant"
	| "size";

export type ButtonProps = Omit<ComponentProps<typeof ShadcnButton>, MotionConflicts> &
	ButtonBaseProps & {
		/** Base UI's state-function form is dropped; motion drives the transform here. */
		style?: CSSProperties;
	};

/** A kind that declines hover produces no motion props at all, so no transform is written. */
function hoverTarget({ hoverScale, hoverLift }: KindMotion) {
	if (!hoverScale && !hoverLift) return undefined;

	return {
		...(hoverScale ? { scale: hoverScale } : {}),
		...(hoverLift ? { y: hoverLift } : {}),
	};
}

export function Button({
	kind = "solid",
	variant = "primary",
	size = "md",
	animated = true,
	pressScale,
	ripple = false,
	state,
	loadingText,
	successText,
	errorText,
	className,
	children,
	disabled,
	onPointerDown,
	...props
}: ButtonProps) {
	const busy = state === "loading";
	const on = useMotion(animated && !disabled && !busy);
	const canHover = useHoverCapable();
	const { transition: name, pressScale: kindPress } = kindMotion[kind];
	const press = pressScale ?? kindPress;
	const { ripples, spawn, drop } = useRipple(ripple && on);

	return (
		<MotionButton
			variant="ghost"
			disabled={disabled || busy}
			// Disabling on its own would drop focus mid-action and leave a keyboard or
			// screen-reader user with nowhere to land. Base UI keeps it focusable, and
			// aria-busy is what actually announces the wait.
			focusableWhenDisabled={busy || undefined}
			aria-busy={busy || undefined}
			onPointerDown={(event: ButtonPointerEvent) => {
				onPointerDown?.(event);
				spawn(event);
			}}
			whileHover={on && canHover ? hoverTarget(kindMotion[kind]) : undefined}
			whileTap={on && press !== 1 ? { scale: press } : undefined}
			transition={transition[name]}
			// Only stateful buttons animate their box, so the width morph costs nothing
			// for the ordinary ones.
			layout={state === undefined ? undefined : true}
			className={cn(
				base,
				variantVars[variant],
				kindShape[kind],
				variant === "ghost" ? ghostSurface : kindSurface[kind],
				sizeClass[size],
				ripple && on && "relative overflow-hidden",
				className,
			)}
			{...props}
		>
			{state === undefined ? (
				children
			) : (
				<StateLabel stateKey={state} enabled={on} transitionName={name}>
					{stateLabel(state, { loadingText, successText, errorText }, children)}
				</StateLabel>
			)}
			<RippleLayer ripples={ripples} onDone={drop} />
		</MotionButton>
	);
}
