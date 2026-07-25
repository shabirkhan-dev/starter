import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export interface MobileInputProps {
	label?: string;
	error?: string | boolean;
	placeholder?: string;
	value?: string;
	onChangeText?: (text: string) => void;
	secureTextEntry?: boolean;
	disabled?: boolean;
	style?: object;
}

export function MobileInput({
	label,
	error,
	placeholder,
	value,
	onChangeText,
	secureTextEntry = false,
	disabled = false,
	style,
}: MobileInputProps) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View style={styles.container}>
			{label && <Text style={styles.label}>{label}</Text>}
			<View
				style={[
					styles.inputWrapper,
					isFocused && styles.focused,
					error ? styles.errorBorder : undefined,
					disabled && styles.disabled,
					style,
				]}
			>
				<TextInput
					placeholder={placeholder}
					placeholderTextColor="#a1a1aa"
					value={value}
					onChangeText={onChangeText}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					editable={!disabled}
					secureTextEntry={secureTextEntry}
					style={styles.input}
				/>
			</View>
			{typeof error === "string" && <Text style={styles.errorText}>{error}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		gap: 6,
	},
	label: {
		fontSize: 12,
		fontWeight: "600",
		color: "#ffffff",
	},
	inputWrapper: {
		height: 44,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
		backgroundColor: "#18181b",
		paddingHorizontal: 12,
		justifyContent: "center",
	},
	focused: {
		borderColor: "#14b8a6",
	},
	errorBorder: {
		borderColor: "#ef4444",
	},
	disabled: {
		opacity: 0.5,
	},
	input: {
		fontSize: 14,
		color: "#ffffff",
	},
	errorText: {
		fontSize: 11,
		color: "#ef4444",
	},
});
