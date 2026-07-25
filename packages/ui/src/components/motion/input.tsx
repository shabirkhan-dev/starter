"use client";

import { Cancel01Icon, EyeIcon, ViewOffIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SPRING_PRESS } from "@school-os/ui/lib/ease";
import { cn } from "@school-os/ui/lib/utils";
import { AnimatePresence, type HTMLMotionProps, motion } from "motion/react";
import React, { useState } from "react";

export interface MotionInputProps extends Omit<HTMLMotionProps<"input">, "size"> {
	label?: string;
	error?: string | boolean;
	icon?: React.ReactNode;
	clearable?: boolean;
	onClear?: () => void;
	size?: "sm" | "md" | "lg";
}

export const MotionInput = React.forwardRef<HTMLInputElement, MotionInputProps>(
	(
		{
			className,
			type = "text",
			label,
			error,
			icon,
			clearable = false,
			onClear,
			size = "md",
			value,
			onChange,
			disabled,
			...props
		},
		ref,
	) => {
		const [isFocused, setIsFocused] = useState(false);
		const [showPassword, setShowPassword] = useState(false);
		const isPassword = type === "password";
		const inputType = isPassword ? (showPassword ? "text" : "password") : type;

		const sizeClasses = {
			sm: "h-8 text-xs px-2.5",
			md: "h-10 text-sm px-3.5",
			lg: "h-12 text-base px-4",
		};

		return (
			<div className="w-full space-y-1.5">
				{label && (
					// biome-ignore lint/a11y/noLabelWithoutControl: label is styled description text
					<label className="text-xs font-medium text-foreground tracking-tight block">
						{label}
					</label>
				)}

				<motion.div
					animate={error ? { x: [0, -4, 4, -4, 4, 0] } : isFocused ? { scale: 1.01 } : { scale: 1 }}
					transition={error ? { duration: 0.3 } : SPRING_PRESS}
					className={cn(
						"relative flex items-center w-full rounded-xl border border-input bg-background transition-all shadow-2xs overflow-hidden",
						isFocused && "border-ring ring-3 ring-ring/20",
						error && "border-destructive ring-3 ring-destructive/20",
						disabled && "opacity-50 pointer-events-none bg-muted/30",
						className,
					)}
				>
					{icon && <span className="pl-3 text-muted-foreground shrink-0">{icon}</span>}

					<motion.input
						ref={ref}
						type={inputType}
						value={value}
						onChange={onChange}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						disabled={disabled}
						className={cn(
							"w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none border-none py-1 min-w-0",
							sizeClasses[size],
							icon && "pl-2",
						)}
						{...props}
					/>

					{clearable && value && (
						<button
							type="button"
							onClick={onClear}
							className="pr-2.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0"
						>
							<HugeiconsIcon icon={Cancel01Icon} size={15} strokeWidth={2} />
						</button>
					)}

					{isPassword && (
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="pr-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0"
						>
							<HugeiconsIcon
								icon={showPassword ? ViewOffIcon : EyeIcon}
								size={16}
								strokeWidth={2}
							/>
						</button>
					)}
				</motion.div>

				<AnimatePresence>
					{typeof error === "string" && (
						<motion.p
							initial={{ opacity: 0, y: -4 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -4 }}
							className="text-xs text-destructive font-medium"
						>
							{error}
						</motion.p>
					)}
				</AnimatePresence>
			</div>
		);
	},
);

MotionInput.displayName = "MotionInput";
