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
	children?: React.ReactNode;
}

export const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
	(
		{
			className,
			variant = "default",
			size = "default",
			loading = false,
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
				whileHover={isDisabled ? undefined : { scale: 1.02 }}
				whileTap={isDisabled ? undefined : { scale: 0.96 }}
				transition={SPRING_PRESS}
				disabled={isDisabled}
				className={cn(buttonVariants({ variant, size, className }))}
				{...props}
			>
				{loading ? (
					<span className="inline-flex items-center gap-1.5">
						<Spinner className="size-4" />
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
