"use client";

import { ArrowDown01Icon, ArrowUpDownIcon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Skeleton } from "@school-os/ui/components/skeleton";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@school-os/ui/components/table";
import { SPRING_PRESS, SPRING_SWAP } from "@school-os/ui/lib/ease";
import { cn } from "@school-os/ui/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import React, { type ComponentPropsWithoutRef, type ReactNode, forwardRef } from "react";

export interface MotionTableProps extends ComponentPropsWithoutRef<typeof Table> {
	className?: string;
}

export const MotionTable = forwardRef<HTMLTableElement, MotionTableProps>(
	({ className, ...props }, ref) => {
		return <Table ref={ref} className={cn("w-full border-collapse", className)} {...props} />;
	},
);

MotionTable.displayName = "MotionTable";

export interface MotionTableRowProps extends ComponentPropsWithoutRef<"tr"> {
	index?: number;
	selected?: boolean;
	interactive?: boolean;
	children?: ReactNode;
	className?: string;
}

export const MotionTableRow = forwardRef<HTMLTableRowElement, MotionTableRowProps>(
	({ index = 0, selected = false, interactive = true, children, className, ...props }, ref) => {
		const reduce = useReducedMotion();

		return (
			<motion.tr
				ref={ref}
				initial={reduce ? false : { opacity: 0, y: 6 }}
				animate={reduce ? undefined : { opacity: 1, y: 0 }}
				exit={reduce ? undefined : { opacity: 0, y: -6 }}
				transition={{
					duration: 0.25,
					delay: Math.min(index * 0.03, 0.3),
					ease: "easeOut",
				}}
				whileHover={interactive && !reduce ? { backgroundColor: "rgba(255,255,255,0.03)" } : undefined}
				className={cn(
					"border-b border-border/60 transition-colors select-none",
					selected && "bg-primary/10 border-primary/30",
					interactive && "cursor-pointer hover:bg-muted/50",
					className,
				)}
				{...props}
			>
				{children}
			</motion.tr>
		);
	},
);

MotionTableRow.displayName = "MotionTableRow";

export interface TableSortHeadProps extends ComponentPropsWithoutRef<typeof TableHead> {
	sortDirection?: "asc" | "desc" | null;
	onSort?: () => void;
	children?: ReactNode;
	className?: string;
}

export function TableSortHead({
	sortDirection = null,
	onSort,
	children,
	className,
	...props
}: TableSortHeadProps) {
	const reduce = useReducedMotion();

	return (
		<TableHead
			className={cn(
				"cursor-pointer select-none group/sort-head transition-colors hover:text-foreground",
				className,
			)}
			onClick={onSort}
			{...props}
		>
			<div className="flex items-center gap-1.5 py-1">
				<span>{children}</span>
				<motion.span
					animate={sortDirection ? { opacity: 1, scale: 1 } : { opacity: 0.4, scale: 0.9 }}
					whileHover={!reduce ? { scale: 1.15 } : undefined}
					transition={SPRING_PRESS}
					className="text-muted-foreground group-hover/sort-head:text-foreground"
				>
					{sortDirection === "asc" ? (
						<HugeiconsIcon icon={ArrowUp01Icon} size={14} className="stroke-[2.5] text-primary" />
					) : sortDirection === "desc" ? (
						<HugeiconsIcon icon={ArrowDown01Icon} size={14} className="stroke-[2.5] text-primary" />
					) : (
						<HugeiconsIcon icon={ArrowUpDownIcon} size={14} />
					)}
				</motion.span>
			</div>
		</TableHead>
	);
}

export interface MotionTableSkeletonProps {
	rows?: number;
	columns?: number;
	className?: string;
}

export function MotionTableSkeleton({
	rows = 4,
	columns = 4,
	className,
}: MotionTableSkeletonProps) {
	return (
		<TableBody className={className}>
			{Array.from({ length: rows }).map((_, rIdx) => (
				<TableRow key={rIdx} className="border-b border-border/40">
					{Array.from({ length: columns }).map((_, cIdx) => (
						<TableCell key={cIdx} className="py-3.5">
							<Skeleton className="h-4 w-full rounded-md opacity-60" />
						</TableCell>
					))}
				</TableRow>
			))}
		</TableBody>
	);
}
