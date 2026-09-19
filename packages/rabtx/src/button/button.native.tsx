import type { ReactNode } from "react";
import { Pressable, type PressableProps, Text } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";
import { cn } from "../cn";
import { type Transition, transition } from "../motion";
import { useMotion } from "../use-motion";
import {
	type ButtonBaseProps,
	type Kind,
	kindMotion,
	type Size,
	sizeClass,
	variantVars,
} from "./button.shared";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const base = "flex-row shrink-0 items-center justify-center";

// ponytail: glass is flat translucency, not a real blur. Swap the surface for
// expo-glass-effect <GlassView> when we target iOS 26 — it is already a mobile dep.
const kindClass: Record<Kind, string> = {
	solid: "rounded-lg bg-(--fill)",
	glass: "rounded-2xl border border-(--ink)/20 bg-(--fill)/20",
	detail: "rounded-lg bg-(--fill) shadow-lg",
	terminal: "rounded-none border-2 border-(--ink)",
};

const textClass: Record<Kind, string> = {
	solid: "text-(--on-fill)",
	glass: "text-(--ink)",
	detail: "text-(--on-fill)",
	terminal: "font-mono uppercase tracking-wider text-(--ink)",
};

const textSize: Record<Size, string> = {
	sm: "text-xs",
	md: "text-sm",
	lg: "text-base",
	icon: "text-sm",
};

function animate(to: number, t: Transition) {
	return t.type === "spring"
		? withSpring(to, { stiffness: t.stiffness, damping: t.damping, mass: t.mass })
		: withTiming(to, { duration: t.duration * 1000 });
}

export type ButtonProps = PressableProps &
	ButtonBaseProps & {
		className?: string;
		children?: ReactNode;
	};

export function Button({
	kind = "solid",
	variant = "primary",
	size = "md",
	animated = true,
	className,
	children,
	...props
}: ButtonProps) {
	const on = useMotion(animated);
	const { transition: name, pressScale } = kindMotion[kind];
	const scale = useSharedValue(1);
	const style = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

	return (
		<AnimatedPressable
			onPressIn={() => {
				if (on) scale.value = animate(pressScale, transition[name]);
			}}
			onPressOut={() => {
				if (on) scale.value = animate(1, transition[name]);
			}}
			style={style}
			className={cn(base, variantVars[variant], kindClass[kind], sizeClass[size], className)}
			{...props}
		>
			{typeof children === "string" ? (
				<Text className={cn("font-medium", textClass[kind], textSize[size])}>{children}</Text>
			) : (
				children
			)}
		</AnimatedPressable>
	);
}
