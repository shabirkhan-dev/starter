import DateTimePicker from "@expo/ui/datetimepicker";
import { useState } from "react";
import { Text, View } from "react-native";

export function DateField() {
	const [date, setDate] = useState(new Date());

	return (
		<View className="w-full max-w-sm gap-2">
			<Text className="text-sm text-neutral-500">Selected date</Text>
			<Text className="text-base font-medium">{date.toDateString()}</Text>
			<DateTimePicker
				value={date}
				onValueChange={(_event, nextDate) => {
					if (nextDate) setDate(nextDate);
				}}
				mode="date"
			/>
		</View>
	);
}
