import { LinearGradient } from "expo-linear-gradient";
import type * as React from "react";
import { View, type ViewStyle } from "react-native";

interface NeonCardProps {
	children: React.ReactNode;
	style?: ViewStyle;
	className?: string;
	glowPosition?: "top-right" | "bottom-left" | "both-diagonal" | "none";
	accentColor?: string;
}

export function NeonCard({ children, style, className = "" }: NeonCardProps) {
	return (
		<View className={`relative ${className}`} style={style}>
			<LinearGradient
				colors={["#18181b", "#09090b"]}
				className="rounded-3xl border border-zinc-800 overflow-hidden"
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
			>
				<View className="p-6">{children}</View>
			</LinearGradient>
		</View>
	);
}
