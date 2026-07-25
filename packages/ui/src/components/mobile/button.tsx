import type React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface MobileButtonProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	loading?: boolean;
	disabled?: boolean;
	onPress?: () => void;
	children?: React.ReactNode;
	style?: object;
	textStyle?: object;
}

export function MobileButton({
	variant = "default",
	size = "default",
	loading = false,
	disabled = false,
	onPress,
	children,
	style,
	textStyle,
}: MobileButtonProps) {
	const isDisabled = disabled || loading;

	return (
		<Pressable
			onPress={isDisabled ? undefined : onPress}
			disabled={isDisabled}
			style={({ pressed }: { pressed: boolean }) => [
				styles.base,
				styles[variant],
				styles[`size_${size}` as keyof typeof styles],
				pressed && !isDisabled && styles.pressed,
				isDisabled && styles.disabled,
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
		</Pressable>
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
	pressed: {
		opacity: 0.8,
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
