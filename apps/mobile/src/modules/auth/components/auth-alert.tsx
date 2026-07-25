import { Text, View } from "react-native";

interface AuthAlertProps {
	title?: string;
	message: string;
	variant?: "destructive" | "info";
}

export function AuthAlert({ title, message, variant = "info" }: AuthAlertProps) {
	const destructive = variant === "destructive";
	return (
		<View
			className={`rounded-xl border p-3 gap-1 ${
				destructive ? "border-red-500/40 bg-red-500/10" : "border-emerald-500/35 bg-emerald-500/8"
			}`}
		>
			{title ? (
				<Text className={`text-sm font-bold ${destructive ? "text-red-400" : "text-white"}`}>
					{title}
				</Text>
			) : null}
			<Text className={`text-xs leading-[18px] ${destructive ? "text-red-300" : "text-zinc-400"}`}>
				{message}
			</Text>
		</View>
	);
}
