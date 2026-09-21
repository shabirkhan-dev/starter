"use client";

import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { type TransitionName, transition } from "../motion";

/**
 * The animated label slot for a stateful Button.
 *
 * Each state is a real enter and exit rather than a text swap: the outgoing label
 * blurs up and out while the next blurs in behind it. `gap: inherit` keeps icon
 * spacing identical to the unstateful case, where no wrapper exists at all.
 */
export function StateLabel({
	stateKey,
	enabled,
	transitionName,
	children,
}: {
	stateKey: string;
	enabled: boolean;
	transitionName: TransitionName;
	children: ReactNode;
}) {
	return (
		<AnimatePresence mode="popLayout" initial={false}>
			<motion.span
				key={stateKey}
				className="inline-flex items-center gap-[inherit]"
				initial={enabled ? { opacity: 0, filter: "blur(4px)", y: -6 } : false}
				animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
				exit={enabled ? { opacity: 0, filter: "blur(4px)", y: 6 } : { opacity: 0 }}
				transition={transition[transitionName]}
			>
				{children}
			</motion.span>
		</AnimatePresence>
	);
}
