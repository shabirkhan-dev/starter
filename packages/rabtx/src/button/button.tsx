"use client";

import { type HTMLMotionProps, motion } from "motion/react";
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

const base =
	"inline-flex shrink-0 select-none items-center justify-center font-medium whitespace-nowrap outline-none transition-colors focus-visible:ring-2 focus-visible:ring-(--ink) focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const kindClass: Record<Kind, string> = {
	solid: "rounded-lg bg-(--fill) text-(--on-fill) shadow-xs hover:brightness-110",
	glass:
		"rounded-2xl border border-(--ink)/20 bg-(--fill)/15 text-(--ink) shadow-lg backdrop-blur-xl hover:bg-(--fill)/25",
	detail:
		"relative rounded-lg border-2 border-button-rim bg-(--fill) text-(--on-fill) before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-2px)] before:border before:border-(--on-fill)/20 before:border-t-(--on-fill)/40 before:border-b-foreground/20 hover:brightness-105 active:before:border-t-foreground/20 active:before:border-b-(--on-fill)/30",
	terminal:
		"rounded-none border-2 border-(--ink) font-mono uppercase tracking-wider text-(--ink) hover:bg-(--ink) hover:text-background",
};

export type ButtonProps = HTMLMotionProps<"button"> & ButtonBaseProps;

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
	const { transition: name, pressScale } = kindMotion[kind];

	return (
		<motion.button
			disabled={disabled}
			whileTap={on ? { scale: pressScale } : undefined}
			transition={transition[name]}
			className={cn(base, variantVars[variant], kindClass[kind], sizeClass[size], className)}
			{...props}
		/>
	);
}
