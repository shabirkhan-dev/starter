"use client";

import { AnimatePresence, motion } from "motion/react";
import { type PointerEvent, useCallback, useRef, useState } from "react";
import { EASE_OUT } from "../motion";

export type Ripple = { id: number; x: number; y: number; size: number };

/**
 * Material-style ripple, spawned from the exact press point.
 *
 * The hook only produces the circles — the caller decides when, because it also
 * owns the click handler that led to the press. `event.currentTarget` is used
 * rather than the target so the circle is measured against the button, not against
 * whichever child was under the finger.
 */
export function useRipple(enabled: boolean) {
	const [ripples, setRipples] = useState<Ripple[]>([]);
	const nextId = useRef(0);

	const spawn = useCallback(
		(event: PointerEvent<HTMLElement>) => {
			if (!enabled) return;

			const rect = event.currentTarget.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			// Diameter is twice the longest distance to a corner, so the circle always
			// reaches every edge no matter where inside the surface the press landed.
			const size = 2 * Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));

			setRipples((current) => [...current, { id: nextId.current++, x, y, size }]);
		},
		[enabled],
	);

	const drop = useCallback((id: number) => {
		setRipples((current) => current.filter((ripple) => ripple.id !== id));
	}, []);

	return { ripples, spawn, drop };
}

/**
 * The circles themselves. Rendered inside an `overflow-hidden` surface so a pill or
 * a square clips them to its own silhouette.
 */
export function RippleLayer({
	ripples,
	onDone,
}: {
	ripples: Ripple[];
	onDone: (id: number) => void;
}) {
	return (
		<AnimatePresence>
			{ripples.map((ripple) => (
				<motion.span
					key={ripple.id}
					aria-hidden
					className="pointer-events-none absolute rounded-full bg-current"
					style={{
						left: ripple.x,
						top: ripple.y,
						width: ripple.size,
						height: ripple.size,
						x: "-50%",
						y: "-50%",
					}}
					initial={{ scale: 0.08, opacity: 0.32 }}
					animate={{ scale: 1, opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6, ease: EASE_OUT }}
					onAnimationComplete={() => onDone(ripple.id)}
				/>
			))}
		</AnimatePresence>
	);
}
