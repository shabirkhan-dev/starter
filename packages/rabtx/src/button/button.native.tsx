import type { ReactNode } from "react";
import {
	Pressable,
	type PressableProps,
	type PressableStateCallbackType,
	Text,
	View,
} from "react-native";
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
	kindShape,
	type Size,
	sizeClass,
	variantVars,
} from "./button.shared";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const base = "flex-row shrink-0 items-center justify-center";

/**
 * Native surfaces. Kept apart from the web map because the web one leans on inset
 * shadows, backdrop blur and `before:` contours that React Native has no equivalent
 * for — while `kindShape` still supplies one silhouette for both platforms.
 *
 * ponytail: glass is flat translucency, not a real blur. Swap the surface for
 * expo-glass-effect <GlassView> when we target iOS 26 — it is already a mobile dep.
 */
const surfaceClass: Record<Kind, string> = {
	solid: "border border-button-edge bg-(--fill)",
	detail: "border-2 border-button-rim bg-(--fill)",
	glass: "border border-(--ink)/20 bg-(--fill)/20",
	terminal: "border-2 border-(--ink)",
};

/** Ghost never fills on either platform: it is a text button, not a tinted one. */
const ghostClass = "border-transparent bg-transparent";

// Text does not inherit from a View in React Native, so type character that the web
// build reads off the shared kindShape has to be restated on the Text child here.
const textClass: Record<Kind, string> = {
	solid: "text-(--on-fill)",
	detail: "text-(--on-fill)",
	glass: "text-(--ink)",
	terminal: "font-mono tracking-wider uppercase text-(--ink)",
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
	pressScale,
	className,
	children,
	disabled,
	onPressIn,
	onPressOut,
	style: callerStyle,
	...props
}: ButtonProps) {
	const on = useMotion(animated && !disabled);
	const { transition: name, pressScale: kindPress } = kindMotion[kind];
	const press = pressScale ?? kindPress;
	const scale = useSharedValue(1);
	const style = useAnimatedStyle(() => ({ transform: [{ scale: on ? scale.value : 1 }] }));

	return (
		<AnimatedPressable
			disabled={disabled}
			onPressIn={(event) => {
				if (on) scale.value = animate(press, transition[name]);
				onPressIn?.(event);
			}}
			onPressOut={(event) => {
				scale.value = on ? animate(1, transition[name]) : 1;
				onPressOut?.(event);
			}}
			style={(state: PressableStateCallbackType) => [
				style,
				typeof callerStyle === "function" ? callerStyle(state) : callerStyle,
			]}
			className={cn(
				base,
				variantVars[variant],
				kindShape[kind],
				variant === "ghost" ? ghostClass : surfaceClass[kind],
				sizeClass[size],
				disabled && "opacity-50",
				className,
			)}
			{...props}
		>
			{kind === "detail" && variant !== "ghost" && (
				<View
					pointerEvents="none"
					accessible={false}
					className="absolute inset-0 rounded-[calc(var(--radius-lg)-2px)] border border-(--on-fill)/20 border-t-(--on-fill)/40 border-b-foreground/20"
				/>
			)}
			{typeof children === "string" ? (
				<Text
					className={cn(
						"font-medium",
						variant === "ghost" ? "text-(--ink)" : textClass[kind],
						textSize[size],
					)}
				>
					{children}
				</Text>
			) : (
				children
			)}
		</AnimatedPressable>
	);
}
