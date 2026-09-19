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
		"rounded-lg bg-(--fill) text-(--on-fill) shadow-[0_1px_2px_rgba(0,0,0,0.24),0_4px_12px_-2px_rgba(0,0,0,0.16)] inset-ring inset-ring-white/20 hover:brightness-110",
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
	...props
}: ButtonProps) {
	const on = useMotion(animated);
	const { transition: name, pressScale } = kindMotion[kind];

	return (
		<motion.button
			whileTap={on ? { scale: pressScale } : undefined}
			transition={transition[name]}
			className={cn(base, variantVars[variant], kindClass[kind], sizeClass[size], className)}
			{...props}
		/>
	);
}
