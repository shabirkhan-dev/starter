import { Cancel01Icon, CheckIcon, Loading01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import type React from "react";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";

export type ButtonVariant =
	| "primary"
	| "secondary"
	| "ghost"
	| "outline"
	| "destructive"
	| "default";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SPRING_PRESS = {
	stiffness: 500,
	damping: 30,
	mass: 0.6,
};

export interface MobileMotionButtonProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	pressScale?: number;
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
	pressScale = 0.93,
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

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	const handlePressIn = () => {
		if (!isDisabled) {
			scale.value = withSpring(pressScale, SPRING_PRESS);
		}
	};

	const handlePressOut = () => {
		if (!isDisabled) {
			scale.value = withSpring(1, SPRING_PRESS);
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
				elevated && (variant === "primary" || variant === "default") && styles.elevatedPrimary,
				isDisabled && styles.disabled,
				animatedStyle,
				style,
			]}
		>
			{loading ? (
				<View style={styles.contentRow}>
					<HugeiconsIcon
						icon={Loading01Icon}
						size={size === "sm" ? 14 : 16}
						color={variant === "primary" || variant === "default" ? "#000000" : "#ffffff"}
					/>
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
	icon?: React.ReactNode;
}

export function MobileStatefulButton({
	state = "idle",
	children,
	loadingText = "Loading",
	successText = "Done",
	errorText = "Try again",
	icon,
	variant = "primary",
	size = "md",
	...props
}: MobileStatefulButtonProps) {
	const textOpacity = useSharedValue(1);
	const textTranslateY = useSharedValue(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: trigger text animation on state change
	useEffect(() => {
		textOpacity.value = 0;
		textTranslateY.value = 8;
		textOpacity.value = withTiming(1, { duration: 180 });
		textTranslateY.value = withSpring(0, SPRING_PRESS);
	}, [state]);

	const animatedTextStyle = useAnimatedStyle(() => ({
		opacity: textOpacity.value,
		transform: [{ translateY: textTranslateY.value }],
	}));

	const isBusy = state === "loading";
	const currentText =
		state === "loading"
			? loadingText
			: state === "success"
				? successText
				: state === "error"
					? errorText
					: children;

	const isPrimary = variant === "primary" || variant === "default";
	const iconColor = isPrimary ? "#000000" : "#ffffff";

	return (
		<MobileMotionButton variant={variant} size={size} loading={false} disabled={isBusy} {...props}>
			<View style={styles.contentRow}>
				{state === "loading" && (
					<HugeiconsIcon icon={Loading01Icon} size={size === "sm" ? 14 : 16} color={iconColor} />
				)}
				{state === "success" && (
					<HugeiconsIcon icon={CheckIcon} size={size === "sm" ? 14 : 16} color="#10b981" />
				)}
				{state === "error" && (
					<HugeiconsIcon icon={Cancel01Icon} size={size === "sm" ? 14 : 16} color="#ef4444" />
				)}
				{state === "idle" && icon}

				<Animated.View style={animatedTextStyle}>
					<Text
						style={[
							styles.textBase,
							styles[`text_${variant}` as keyof typeof styles],
							props.textStyle,
						]}
					>
						{currentText}
					</Text>
				</Animated.View>
			</View>
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
	default: {
		backgroundColor: "#ffffff",
	},
	secondary: {
		backgroundColor: "#27272a",
		borderWidth: 1,
		borderColor: "#3f3f46",
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
		borderRadius: 9999,
	},
	textBase: {
		fontSize: 14,
		fontWeight: "600",
	},
	text_primary: {
		color: "#000000",
	},
	text_default: {
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
