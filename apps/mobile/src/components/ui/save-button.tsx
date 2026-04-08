import { Host, Button } from "@expo/ui/jetpack-compose";

export function SaveButton() {
	return (
		<Host matchContents>
			<Button onPress={() => alert("Saved!")}>Save changes</Button>
		</Host>
	);
}
