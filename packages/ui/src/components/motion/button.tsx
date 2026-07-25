"use client";

import { buttonVariants } from "@school-os/ui/components/button";
import { Spinner } from "@school-os/ui/components/spinner";
import { SPRING_PRESS } from "@school-os/ui/lib/ease";
import { cn } from "@school-os/ui/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { type HTMLMotionProps, motion } from "motion/react";
import React from "react";

export interface MotionButtonProps
	extends HTMLMotionProps<"button">,
		VariantProps<typeof buttonVariants> {
	loading?: boolean;
	elevated?: boolean;
	children?: React.ReactNode;
}

export const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
	(
		{
			className,
			variant = "default",
			size = "default",
			loading = false,
			elevated = true,
			disabled,
			children,
			...props
		},
		ref,
	) => {
		const isDisabled = disabled || loading;

		return (
			<motion.button
				ref={ref}
				whileHover={isDisabled ? undefined : { scale: 1.015, y: -0.5 }}
				whileTap={isDisabled ? undefined : { scale: 0.96, y: 1 }}
				transition={SPRING_PRESS}
				disabled={isDisabled}
				className={cn(
					buttonVariants({ variant, size, className }),
					"relative group overflow-hidden transition-shadow",
					elevated &&
						variant === "default" &&
						"shadow-[0_2px_8px_0_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.2)] active:shadow-[0_1px_2px_0_rgba(0,0,0,0.12)]",
					elevated &&
						variant === "outline" &&
						"shadow-xs hover:shadow-sm border-border/80 bg-background/90 backdrop-blur-xs",
					elevated && variant === "secondary" && "shadow-xs inset-shadow-2xs",
				)}
				{...props}
			>
				{/* Ambient Reflection Beam on Hover */}
				{!isDisabled && (
					<span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.12)_50%,transparent_75%)]" />
				)}

				{loading ? (
					<span className="inline-flex items-center gap-2">
						<Spinner className="size-4 animate-spin" />
						<span>{children}</span>
					</span>
				) : (
					children
				)}
			</motion.button>
		);
	},
);

MotionButton.displayName = "MotionButton";
