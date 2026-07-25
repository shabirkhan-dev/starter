"use client";

import { ArrowDown01Icon, CheckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SPRING_PRESS, SPRING_SWAP } from "@school-os/ui/lib/ease";
import { cn } from "@school-os/ui/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

export interface SelectOption {
	value: string;
	label: string;
	icon?: React.ReactNode;
}

export interface MotionSelectProps {
	options: SelectOption[];
	value?: string;
	defaultValue?: string;
	onValueChange?: (val: string) => void;
	placeholder?: string;
	label?: string;
	disabled?: boolean;
	className?: string;
	size?: "sm" | "md" | "lg";
}

export function MotionSelect({
	options,
	value,
	defaultValue = "",
	onValueChange,
	placeholder = "Select an option...",
	label,
	disabled = false,
	className,
	size = "md",
}: MotionSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(value || defaultValue);
	const containerRef = useRef<HTMLDivElement>(null);

	const isControlled = value !== undefined;
	const currentValue = isControlled ? value : selected;
	const selectedOption = options.find((opt) => opt.value === currentValue);

	const handleSelect = (optionValue: string) => {
		if (!isControlled) setSelected(optionValue);
		onValueChange?.(optionValue);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const sizeClasses = {
		sm: "h-8 text-xs px-3",
		md: "h-10 text-sm px-3.5",
		lg: "h-12 text-base px-4",
	};

	return (
		<div ref={containerRef} className="relative w-full space-y-1.5">
			{label && (
				// biome-ignore lint/a11y/noLabelWithoutControl: label is styled description text
				<label className="text-xs font-medium text-foreground tracking-tight block">{label}</label>
			)}

			<motion.button
				type="button"
				whileTap={disabled ? undefined : { scale: 0.98 }}
				transition={SPRING_PRESS}
				onClick={() => !disabled && setIsOpen(!isOpen)}
				disabled={disabled}
				className={cn(
					"flex items-center justify-between w-full rounded-xl border border-input bg-background font-medium text-foreground transition-colors shadow-2xs cursor-pointer select-none",
					isOpen && "border-ring ring-3 ring-ring/20",
					disabled && "opacity-50 pointer-events-none bg-muted/30",
					sizeClasses[size],
					className,
				)}
			>
				<span className="flex items-center gap-2 truncate">
					{selectedOption?.icon}
					<span className={selectedOption ? "text-foreground" : "text-muted-foreground"}>
						{selectedOption ? selectedOption.label : placeholder}
					</span>
				</span>

				<motion.span
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={SPRING_SWAP}
					className="shrink-0 text-muted-foreground"
				>
					<HugeiconsIcon icon={ArrowDown01Icon} size={16} strokeWidth={2} />
				</motion.span>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -8, scale: 0.96 }}
						animate={{ opacity: 1, y: 4, scale: 1 }}
						exit={{ opacity: 0, y: -8, scale: 0.96 }}
						transition={SPRING_SWAP}
						className="absolute left-0 right-0 z-50 p-1.5 bg-popover text-popover-foreground border border-border rounded-xl shadow-lg max-h-60 overflow-y-auto scrollbar-thin space-y-0.5"
					>
						{options.map((option) => {
							const isSelected = option.value === currentValue;
							return (
								<button
									key={option.value}
									type="button"
									onClick={() => handleSelect(option.value)}
									className={cn(
										"flex items-center justify-between w-full px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer text-left",
										isSelected
											? "bg-accent text-accent-foreground font-semibold"
											: "hover:bg-muted text-foreground",
									)}
								>
									<span className="flex items-center gap-2 truncate">
										{option.icon}
										<span>{option.label}</span>
									</span>

									{isSelected && (
										<HugeiconsIcon icon={CheckIcon} size={14} className="text-primary shrink-0" />
									)}
								</button>
							);
						})}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
