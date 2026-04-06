import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Greeting } from "../components/Greeting";
import { DateField } from "../components/ui/DateField";
import { Screen } from "../components/ui/Screen";
import { APP_TITLE } from "../lib/app-info";

export default function HomeScreen() {
	return (
		<Screen>
			<View className="flex-1 items-center justify-center gap-4 px-6">
				<Text className="text-3xl font-bold">{APP_TITLE}</Text>
				<Greeting />
				<DateField />
			</View>
			<StatusBar style="auto" />
		</Screen>
	);
}
