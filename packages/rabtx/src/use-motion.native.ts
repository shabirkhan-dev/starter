import { useEffect, useState } from "react";
import { AccessibilityInfo } from "react-native";

/** Motion is on unless the caller opts out or the OS asks for reduced motion. */
export function useMotion(enabled = true) {
	const [reduced, setReduced] = useState(false);

	useEffect(() => {
		AccessibilityInfo.isReduceMotionEnabled().then(setReduced);
		const sub = AccessibilityInfo.addEventListener("reduceMotionChanged", setReduced);

		return () => sub.remove();
	}, []);

	return enabled && !reduced;
}
