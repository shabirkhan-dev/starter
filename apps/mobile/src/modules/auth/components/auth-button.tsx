import { ActivityIndicator, Pressable, Text, type ViewStyle } from "react-native";

interface AuthButtonProps {
	label: string;
	onPress: () => void;
	pending?: boolean;
	disabled?: boolean;
	variant?: "primary" | "outline" | "ghost";
	style?: ViewStyle;
}

export function AuthButton({
	label,
	onPress,
	pending = false,
	disabled = false,
	variant = "primary",
	style,
}: AuthButtonProps) {
	const isDisabled = disabled || pending;
	const variantClass =
		variant === "primary"
			? "bg-emerald-400"
			: variant === "outline"
				? "border border-zinc-800 bg-transparent"
				: "bg-transparent";

	return (
		<Pressable
			onPress={onPress}
			disabled={isDisabled}
			className={`min-h-[48px] rounded-xl items-center justify-center px-4 ${variantClass} ${
				isDisabled ? "opacity-50" : "active:opacity-85"
			}`}
			style={style}
		>
			{pending ? (
				<ActivityIndicator color={variant === "primary" ? "#09090b" : "#34d399"} />
			) : (
				<Text
					className={`text-base font-bold ${
						variant === "primary" ? "text-zinc-950" : "text-white"
					}`}
				>
					{label}
				</Text>
			)}
		</Pressable>
	);
}
