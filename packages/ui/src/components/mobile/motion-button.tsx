import type React from "react";
import { useEffect } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SPRING_CONFIG = {
	stiffness: 400,
	damping: 25,
	mass: 0.6,
};

export interface MobileMotionButtonProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	loading?: boolean;
	disabled?: boolean;
	elevated?: boolean;
	onPress?: () => void;
	children?: React.ReactNode;
	style?: object;
	textStyle?: object;
}

export function MobileMotionButton({
	variant = "primary",
	size = "md",
	loading = false,
	disabled = false,
	elevated = true,
	onPress,
	children,
	style,
	textStyle,
}: MobileMotionButtonProps) {
	const isDisabled = disabled || loading;
	const scale = useSharedValue(1);
	const translateY = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }, { translateY: translateY.value }],
	}));

	const handlePressIn = () => {
		if (!isDisabled) {
			scale.value = withSpring(0.94, SPRING_CONFIG);
			translateY.value = withSpring(1.5, SPRING_CONFIG);
		}
	};

	const handlePressOut = () => {
		if (!isDisabled) {
			scale.value = withSpring(1, SPRING_CONFIG);
			translateY.value = withSpring(0, SPRING_CONFIG);
		}
	};

	return (
		<AnimatedPressable
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
			onPress={isDisabled ? undefined : onPress}
			disabled={isDisabled}
			style={[
				styles.base,
				styles[variant],
				styles[`size_${size}` as keyof typeof styles],
				elevated && variant === "primary" && styles.elevatedPrimary,
				isDisabled && styles.disabled,
				animatedStyle,
				style,
			]}
		>
			{loading ? (
				<View style={styles.contentRow}>
					<ActivityIndicator size="small" color={variant === "primary" ? "#000" : "#fff"} />
					{typeof children === "string" ? (
						<Text
							style={[styles.textBase, styles[`text_${variant}` as keyof typeof styles], textStyle]}
						>
							{children}
						</Text>
					) : (
						children
					)}
				</View>
			) : typeof children === "string" ? (
				<Text
					style={[styles.textBase, styles[`text_${variant}` as keyof typeof styles], textStyle]}
				>
					{children}
				</Text>
			) : (
				children
			)}
		</AnimatedPressable>
	);
}

export type MobileButtonState = "idle" | "loading" | "success" | "error";

export interface MobileStatefulButtonProps extends Omit<MobileMotionButtonProps, "children"> {
	state?: MobileButtonState;
	children: string;
	loadingText?: string;
	successText?: string;
	errorText?: string;
}

export function MobileStatefulButton({
	state = "idle",
	children,
	loadingText = "Loading",
	successText = "Saved",
	errorText = "Failed",
	...props
}: MobileStatefulButtonProps) {
	const textOpacity = useSharedValue(1);

	// biome-ignore lint/correctness/useExhaustiveDependencies: trigger text animation on state change
	useEffect(() => {
		textOpacity.value = 0;
		textOpacity.value = withTiming(1, { duration: 200 });
	}, [state]);

	const textAnimatedStyle = useAnimatedStyle(() => ({
		opacity: textOpacity.value,
	}));

	const currentText =
		state === "loading"
			? loadingText
			: state === "success"
				? successText
				: state === "error"
					? errorText
					: children;

	return (
		<MobileMotionButton loading={state === "loading"} disabled={state === "loading"} {...props}>
			<Animated.View style={textAnimatedStyle}>
				<Text
					style={[
						styles.textBase,
						styles[`text_${props.variant || "primary"}` as keyof typeof styles],
						props.textStyle,
					]}
				>
					{currentText}
				</Text>
			</Animated.View>
		</MobileMotionButton>
	);
}

const styles = StyleSheet.create({
	base: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 9999,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	contentRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	disabled: {
		opacity: 0.5,
	},
	elevatedPrimary: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.15,
		shadowRadius: 4,
		elevation: 3,
	},
	primary: {
		backgroundColor: "#ffffff",
	},
	secondary: {
		backgroundColor: "#27272a",
	},
	outline: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "#27272a",
	},
	ghost: {
		backgroundColor: "transparent",
	},
	destructive: {
		backgroundColor: "#ef4444",
	},
	size_sm: {
		height: 32,
		paddingHorizontal: 14,
	},
	size_md: {
		height: 40,
		paddingHorizontal: 20,
	},
	size_lg: {
		height: 48,
		paddingHorizontal: 24,
	},
	size_icon: {
		width: 36,
		height: 36,
		paddingHorizontal: 0,
	},
	textBase: {
		fontSize: 14,
		fontWeight: "600",
	},
	text_primary: {
		color: "#000000",
	},
	text_secondary: {
		color: "#ffffff",
	},
	text_outline: {
		color: "#ffffff",
	},
	text_ghost: {
		color: "#a1a1aa",
	},
	text_destructive: {
		color: "#ffffff",
	},
});
