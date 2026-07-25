import { Cancel01Icon, CheckIcon, EyeIcon, ViewOffIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import type React from "react";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSequence,
	withSpring,
	withTiming,
} from "react-native-reanimated";

const SPRING_PRESS = {
	stiffness: 500,
	damping: 30,
	mass: 0.6,
};

export interface MobileMotionInputProps {
	label?: string;
	error?: string | boolean;
	success?: boolean;
	placeholder?: string;
	value?: string;
	onChangeText?: (text: string) => void;
	secureTextEntry?: boolean;
	clearable?: boolean;
	onClear?: () => void;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	disabled?: boolean;
	style?: object;
}

export function MobileMotionInput({
	label,
	error,
	success,
	placeholder,
	value,
	onChangeText,
	secureTextEntry = false,
	clearable = false,
	onClear,
	leftIcon,
	rightIcon,
	disabled = false,
	style,
}: MobileMotionInputProps) {
	const [isFocused, setIsFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const scale = useSharedValue(1);
	const shakeX = useSharedValue(0);
	const borderProgress = useSharedValue(0);

	const hasError = Boolean(error);

	// Trigger error shake animation
	// biome-ignore lint/correctness/useExhaustiveDependencies: trigger shake on error change
	useEffect(() => {
		if (hasError) {
			shakeX.value = withSequence(
				withTiming(-8, { duration: 60 }),
				withTiming(8, { duration: 60 }),
				withTiming(-6, { duration: 60 }),
				withTiming(6, { duration: 60 }),
				withTiming(-3, { duration: 60 }),
				withTiming(0, { duration: 60 }),
			);
		}
	}, [hasError]);

	const handleFocus = () => {
		setIsFocused(true);
		scale.value = withSpring(1.02, SPRING_PRESS);
		borderProgress.value = withTiming(1, { duration: 200 });
	};

	const handleBlur = () => {
		setIsFocused(false);
		scale.value = withSpring(1, SPRING_PRESS);
		borderProgress.value = withTiming(0, { duration: 200 });
	};

	const animatedWrapperStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }, { translateX: shakeX.value }],
	}));

	const isPassword = secureTextEntry;

	return (
		<View style={styles.container}>
			{label && <Text style={styles.label}>{label}</Text>}

			<Animated.View
				style={[
					styles.inputWrapper,
					isFocused && styles.focusedBorder,
					success && styles.successBorder,
					hasError && styles.errorBorder,
					disabled && styles.disabled,
					animatedWrapperStyle,
					style,
				]}
			>
				{leftIcon && <View style={styles.leftSlot}>{leftIcon}</View>}

				<TextInput
					placeholder={placeholder}
					placeholderTextColor="#71717a"
					value={value}
					onChangeText={onChangeText}
					onFocus={handleFocus}
					onBlur={handleBlur}
					editable={!disabled}
					secureTextEntry={isPassword && !showPassword}
					style={styles.input}
				/>

				{success ? (
					<View style={styles.iconButton}>
						<HugeiconsIcon icon={CheckIcon} size={16} color="#10b981" />
					</View>
				) : clearable && value ? (
					<Pressable onPress={onClear} hitSlop={8} style={styles.iconButton}>
						<HugeiconsIcon icon={Cancel01Icon} size={15} color="#a1a1aa" />
					</Pressable>
				) : isPassword ? (
					<Pressable
						onPress={() => setShowPassword(!showPassword)}
						hitSlop={8}
						style={styles.iconButton}
					>
						<HugeiconsIcon icon={showPassword ? ViewOffIcon : EyeIcon} size={16} color="#a1a1aa" />
					</Pressable>
				) : rightIcon ? (
					<View style={styles.rightSlot}>{rightIcon}</View>
				) : null}
			</Animated.View>

			{typeof error === "string" && <Text style={styles.errorText}>{error}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		gap: 6,
	},
	label: {
		fontSize: 12,
		fontWeight: "600",
		color: "#ffffff",
	},
	inputWrapper: {
		flexDirection: "row",
		alignItems: "center",
		height: 44,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
		backgroundColor: "#18181b",
		paddingHorizontal: 12,
	},
	focusedBorder: {
		borderColor: "#ffffff",
	},
	successBorder: {
		borderColor: "#10b981",
	},
	errorBorder: {
		borderColor: "#ef4444",
	},
	disabled: {
		opacity: 0.5,
	},
	leftSlot: {
		marginRight: 8,
	},
	rightSlot: {
		marginLeft: 8,
	},
	input: {
		flex: 1,
		fontSize: 14,
		color: "#ffffff",
	},
	iconButton: {
		padding: 4,
		marginLeft: 4,
	},
	errorText: {
		fontSize: 11,
		color: "#ef4444",
		fontWeight: "500",
	},
});
