"use client";

import { Button, type ButtonState } from "@rabtx/ui/button";
import { useEffect, useRef, useState } from "react";

/**
 * Drives the Button through a state cycle so the docs can show the label swap.
 * The timers are cleared on unmount so navigating away mid-run cannot set state
 * on a gone component.
 */
export function ButtonStateDemo({ outcome = "success" }: { outcome?: "success" | "error" }) {
	const [state, setState] = useState<ButtonState>("idle");
	const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

	useEffect(() => () => timers.current.forEach(clearTimeout), []);

	function run() {
		if (state !== "idle") return;
		setState("loading");
		timers.current.push(
			setTimeout(() => {
				setState(outcome);
				timers.current.push(setTimeout(() => setState("idle"), 1600));
			}, 1400),
		);
	}

	return (
		<Button
			kind="detail"
			variant={outcome === "error" ? "destructive" : "primary"}
			state={state}
			onClick={run}
			loadingText={outcome === "error" ? "Submitting" : "Saving"}
			successText="Saved"
			errorText="Try again"
		>
			{outcome === "error" ? "Submit" : "Save changes"}
		</Button>
	);
}
