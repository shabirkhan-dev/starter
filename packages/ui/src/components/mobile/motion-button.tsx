import type React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

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
	onPress?: () => void;
	children?: React.ReactNode;
	style?: object;
	textStyle?: object;
}

export function MobileMotionButton({
	variant = "default",
	size = "default",
	loading = false,
	disabled = false,
	onPress,
	children,
	style,
	textStyle,
}: MobileMotionButtonProps) {
	const isDisabled = disabled || loading;
	const scale = useSharedValue(1);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	const handlePressIn = () => {
		if (!isDisabled) scale.value = withSpring(0.96, SPRING_CONFIG);
	};

	const handlePressOut = () => {
		if (!isDisabled) scale.value = withSpring(1, SPRING_CONFIG);
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
				isDisabled && styles.disabled,
				animatedStyle,
				style,
			]}
		>
			{loading ? (
				<View style={styles.contentRow}>
					<ActivityIndicator size="small" color={variant === "default" ? "#000" : "#fff"} />
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

const styles = StyleSheet.create({
	base: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		paddingHorizontal: 16,
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
	default: {
		backgroundColor: "#ffffff",
	},
	destructive: {
		backgroundColor: "#ef4444",
	},
	outline: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "#27272a",
	},
	secondary: {
		backgroundColor: "#27272a",
	},
	ghost: {
		backgroundColor: "transparent",
	},
	size_default: {
		height: 40,
		paddingHorizontal: 16,
	},
	size_sm: {
		height: 32,
		paddingHorizontal: 12,
		borderRadius: 6,
	},
	size_lg: {
		height: 48,
		paddingHorizontal: 24,
		borderRadius: 10,
	},
	size_icon: {
		width: 40,
		height: 40,
		paddingHorizontal: 0,
	},
	textBase: {
		fontSize: 14,
		fontWeight: "600",
	},
	text_default: {
		color: "#000000",
	},
	text_destructive: {
		color: "#ffffff",
	},
	text_outline: {
		color: "#ffffff",
	},
	text_secondary: {
		color: "#ffffff",
	},
	text_ghost: {
		color: "#a1a1aa",
	},
});
