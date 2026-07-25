import { Cancel01Icon, EyeIcon, ViewOffIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const SPRING_PRESS = {
	stiffness: 500,
	damping: 30,
	mass: 0.6,
};

export interface MobileMotionInputProps {
	label?: string;
	error?: string | boolean;
	placeholder?: string;
	value?: string;
	onChangeText?: (text: string) => void;
	secureTextEntry?: boolean;
	clearable?: boolean;
	onClear?: () => void;
	disabled?: boolean;
	style?: object;
}

export function MobileMotionInput({
	label,
	error,
	placeholder,
	value,
	onChangeText,
	secureTextEntry = false,
	clearable = false,
	onClear,
	disabled = false,
	style,
}: MobileMotionInputProps) {
	const [isFocused, setIsFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const scale = useSharedValue(1);

	const handleFocus = () => {
		setIsFocused(true);
		scale.value = withSpring(1.01, SPRING_PRESS);
	};

	const handleBlur = () => {
		setIsFocused(false);
		scale.value = withSpring(1, SPRING_PRESS);
	};

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	const isPassword = secureTextEntry;

	return (
		<View style={styles.container}>
			{label && <Text style={styles.label}>{label}</Text>}

			<Animated.View
				style={[
					styles.inputWrapper,
					isFocused && styles.focused,
					error ? styles.errorBorder : undefined,
					disabled && styles.disabled,
					animatedStyle,
					style,
				]}
			>
				<TextInput
					placeholder={placeholder}
					placeholderTextColor="#a1a1aa"
					value={value}
					onChangeText={onChangeText}
					onFocus={handleFocus}
					onBlur={handleBlur}
					editable={!disabled}
					secureTextEntry={isPassword && !showPassword}
					style={styles.input}
				/>

				{clearable && value && (
					<Pressable onPress={onClear} hitSlop={8} style={styles.iconButton}>
						<HugeiconsIcon icon={Cancel01Icon} size={15} color="#a1a1aa" />
					</Pressable>
				)}

				{isPassword && (
					<Pressable
						onPress={() => setShowPassword(!showPassword)}
						hitSlop={8}
						style={styles.iconButton}
					>
						<HugeiconsIcon icon={showPassword ? ViewOffIcon : EyeIcon} size={16} color="#a1a1aa" />
					</Pressable>
				)}
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
	focused: {
		borderColor: "#ffffff",
	},
	errorBorder: {
		borderColor: "#ef4444",
	},
	disabled: {
		opacity: 0.5,
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
	},
});
