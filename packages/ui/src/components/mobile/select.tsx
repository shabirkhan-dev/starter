import { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export interface MobileSelectOption {
	value: string;
	label: string;
}

export interface MobileSelectProps {
	options: MobileSelectOption[];
	value?: string;
	onValueChange?: (val: string) => void;
	placeholder?: string;
	label?: string;
	style?: object;
}

export function MobileSelect({
	options,
	value,
	onValueChange,
	placeholder = "Select an option...",
	label,
	style,
}: MobileSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const selectedOption = options.find((opt) => opt.value === value);

	return (
		<View style={styles.container}>
			{label && <Text style={styles.label}>{label}</Text>}

			<Pressable onPress={() => setIsOpen(true)} style={[styles.trigger, style]}>
				<Text style={[styles.triggerText, !selectedOption && styles.placeholder]}>
					{selectedOption ? selectedOption.label : placeholder}
				</Text>
			</Pressable>

			<Modal
				visible={isOpen}
				transparent
				animationType="fade"
				onRequestClose={() => setIsOpen(false)}
			>
				<Pressable style={styles.backdrop} onPress={() => setIsOpen(false)}>
					<View style={styles.modalCard}>
						<Text style={styles.modalTitle}>{label || "Select Option"}</Text>
						<ScrollView style={styles.optionsList}>
							{options.map((opt) => (
								<Pressable
									key={opt.value}
									onPress={() => {
										onValueChange?.(opt.value);
										setIsOpen(false);
									}}
									style={[styles.optionItem, opt.value === value && styles.optionSelected]}
								>
									<Text
										style={[styles.optionText, opt.value === value && styles.optionTextSelected]}
									>
										{opt.label}
									</Text>
								</Pressable>
							))}
						</ScrollView>
					</View>
				</Pressable>
			</Modal>
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
	trigger: {
		height: 44,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
		backgroundColor: "#18181b",
		paddingHorizontal: 12,
		justifyContent: "center",
	},
	triggerText: {
		fontSize: 14,
		color: "#ffffff",
	},
	placeholder: {
		color: "#a1a1aa",
	},
	backdrop: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		justifyContent: "flex-end",
	},
	modalCard: {
		backgroundColor: "#18181b",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20,
		maxHeight: 320,
		gap: 12,
	},
	modalTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
	optionsList: {
		width: "100%",
	},
	optionItem: {
		paddingVertical: 14,
		paddingHorizontal: 12,
		borderRadius: 8,
	},
	optionSelected: {
		backgroundColor: "#27272a",
	},
	optionText: {
		fontSize: 14,
		color: "#a1a1aa",
	},
	optionTextSelected: {
		color: "#ffffff",
		fontWeight: "600",
	},
});
