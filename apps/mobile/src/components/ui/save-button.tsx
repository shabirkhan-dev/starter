import { Pressable, Text } from "react-native";
import type { ComponentType, ReactNode } from "react";

export function SaveButton() {
	const expoUi = (() => {
		try {
			return require("@expo/ui/jetpack-compose") as {
				Host: ComponentType<{ matchContents?: boolean; children: ReactNode }>;
				Button: ComponentType<{
					onPress: () => void;
					children: ReactNode;
				}>;
			};
		} catch {
			return null;
		}
	})();

	if (!expoUi) {
		return (
			<Pressable
				onPress={() => alert("Saved!")}
				style={{
					paddingHorizontal: 14,
					paddingVertical: 8,
					borderRadius: 8,
					backgroundColor: "#1f2937",
				}}
			>
				<Text style={{ color: "#ffffff", fontWeight: "600" }}>Save changes</Text>
			</Pressable>
		);
	}

	const { Host, Button } = expoUi;

	return (
		<Host matchContents>
			<Button onPress={() => alert("Saved!")}>Save changes</Button>
		</Host>
	);
}
