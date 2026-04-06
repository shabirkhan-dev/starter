import "../../global.css";
import "react-native-reanimated";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<Stack screenOptions={{ headerTitle: "Starter Mobile" }} />
		</SafeAreaProvider>
	);
}
