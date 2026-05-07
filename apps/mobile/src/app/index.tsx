import * as Device from "expo-device";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedIcon } from "@/components/animated-icon";
import { HintRow } from "@/components/hint-row";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WebBadge } from "@/components/web-badge";

function getDevMenuHint() {
	if (Platform.OS === "web") {
		return <ThemedText type="small">use browser devtools</ThemedText>;
	}
	if (Device.isDevice) {
		return (
			<ThemedText type="small">
				shake device or press <ThemedText type="code">m</ThemedText> in terminal
			</ThemedText>
		);
	}
	const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
	return (
		<ThemedText type="small">
			press <ThemedText type="code">{shortcut}</ThemedText>
		</ThemedText>
	);
}

export default function HomeScreen() {
	return (
		<ThemedView className="flex-1 justify-center flex-row bg-white dark:bg-black">
			<SafeAreaView className="flex-1 px-4 items-center gap-6 max-w-xl">
				<ThemedView className="items-center justify-center flex-1 px-4 gap-4">
					<AnimatedIcon />
					<ThemedText type="title" className="text-center">
						Welcome to&nbsp;Expo
					</ThemedText>

					<Button label="Get Started" variant="primary" onPress={() => alert("Let's go!")} />

					<ThemedText type="subtitle" className="text-center text-lg text-gray-500">
						Built with UniWind & Headless Primitives
					</ThemedText>
				</ThemedView>

				<Card
					title="Development"
					description="Getting started with your new app"
					className="w-full"
				>
					<HintRow
						title="Try editing"
						hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
					/>
					<HintRow title="Dev tools" hint={getDevMenuHint()} />
					<HintRow
						title="Fresh start"
						hint={<ThemedText type="code">bun run reset-project</ThemedText>}
					/>
				</Card>

				{Platform.OS === "web" && <WebBadge />}
			</SafeAreaView>
		</ThemedView>
	);
}
