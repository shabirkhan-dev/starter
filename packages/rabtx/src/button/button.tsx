"use client";

import { Button as ShadcnButton } from "@school-os/ui/components/button";
import { AnimatePresence, motion } from "motion/react";
import type { ComponentProps, CSSProperties } from "react";
import { useState } from "react";
import { cn } from "../cn";
import { transition } from "../motion";
import { useMotion } from "../use-motion";
import {
	type ButtonBaseProps,
	type Kind,
	kindMotion,
	sizeClass,
	stateLabel,
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
 * our classes last, conflicting utilities resolve in our favour — but a
 * non-conflicting rule like shadcn's hover background would survive, which is why
 * each kind states its own `hover:bg-*` and `hover:text-*` explicitly.
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

type Ripple = { id: number; x: number; y: number; size: number };

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
	const { transition: name, pressScale: kindPress, hoverLift } = kindMotion[kind];
	const press = pressScale ?? kindPress;
	const [ripples, setRipples] = useState<Ripple[]>([]);

	function handlePointerDown(event: ButtonPointerEvent) {
		onPointerDown?.(event);
		if (!ripple || !on) return;

		// Diameter is twice the longest distance to a corner, so the circle always
		// reaches every edge no matter where inside the button the press landed.
		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const size = 2 * Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));

		setRipples((current) => [...current, { id: Date.now() + Math.random(), x, y, size }]);
	}

	return (
		<MotionButton
			variant="ghost"
			disabled={disabled || busy}
			// Disabling on its own would drop focus mid-action and leave a keyboard or
			// screen-reader user with nowhere to land. Base UI keeps it focusable, and
			// aria-busy is what actually announces the wait.
			focusableWhenDisabled={busy || undefined}
			aria-busy={busy || undefined}
			onPointerDown={handlePointerDown}
			whileHover={on && hoverLift ? { y: hoverLift } : undefined}
			whileTap={on ? { scale: press, y: 0 } : undefined}
			transition={transition[name]}
			// Only stateful buttons animate their box, so the width morph costs nothing
			// for the ordinary ones.
			layout={state === undefined ? undefined : true}
			className={cn(
				base,
				variantVars[variant],
				kindClass[kind],
				sizeClass[size],
				ripple && "relative overflow-hidden",
				className,
			)}
			{...props}
		>
			{state === undefined ? (
				children
			) : (
				<AnimatePresence mode="popLayout" initial={false}>
					{/* Keyed by state, so each label is a genuine enter/exit rather than a
					    text swap: the outgoing one blurs up and out while the next blurs in,
					    and `gap: inherit` keeps icon spacing identical to the unwrapped case. */}
					<motion.span
						key={state}
						className="inline-flex items-center gap-[inherit]"
						initial={on ? { opacity: 0, filter: "blur(4px)", y: -6 } : false}
						animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
						exit={on ? { opacity: 0, filter: "blur(4px)", y: 6 } : { opacity: 0 }}
						transition={transition[name]}
					>
						{stateLabel(state, { loadingText, successText, errorText }, children)}
					</motion.span>
				</AnimatePresence>
			)}
			{ripples.map((r) => (
				<motion.span
					key={r.id}
					aria-hidden
					className="pointer-events-none absolute rounded-full bg-current"
					style={{
						left: r.x,
						top: r.y,
						width: r.size,
						height: r.size,
						x: "-50%",
						y: "-50%",
					}}
					initial={{ scale: 0, opacity: 0.3 }}
					animate={{ scale: 1, opacity: 0 }}
					transition={{ duration: 0.55, ease: "easeOut" }}
					onAnimationComplete={() =>
						setRipples((current) => current.filter((item) => item.id !== r.id))
					}
				/>
			))}
		</MotionButton>
	);
}
