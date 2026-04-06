import { Text } from "react-native";
import { getWelcomeMessage } from "../lib/app-info";

export function Greeting() {
	return (
		<Text testID="mobile-greeting" className="text-base text-neutral-700">
			{getWelcomeMessage()}
		</Text>
	);
}
