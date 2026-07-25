import { ArrowDown01Icon, CheckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const SPRING_PRESS = {
	stiffness: 500,
	damping: 30,
	mass: 0.6,
};

export interface MobileMotionSelectOption {
	value: string;
	label: string;
}

export interface MobileMotionSelectProps {
	options: MobileMotionSelectOption[];
	value?: string;
	onValueChange?: (val: string) => void;
	placeholder?: string;
	label?: string;
	disabled?: boolean;
	style?: object;
}

export function MobileMotionSelect({
	options,
	value,
	onValueChange,
	placeholder = "Select an option...",
	label,
	disabled = false,
	style,
}: MobileMotionSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const scale = useSharedValue(1);

	const selectedOption = options.find((opt) => opt.value === value);

	const handlePressIn = () => {
		if (!disabled) scale.value = withSpring(0.97, SPRING_PRESS);
	};

	const handlePressOut = () => {
		if (!disabled) scale.value = withSpring(1, SPRING_PRESS);
	};

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	return (
		<View style={styles.container}>
			{label && <Text style={styles.label}>{label}</Text>}

			<Animated.View style={animatedStyle}>
				<Pressable
					onPressIn={handlePressIn}
					onPressOut={handlePressOut}
					onPress={() => !disabled && setIsOpen(true)}
					disabled={disabled}
					style={[styles.trigger, disabled && styles.disabled, style]}
				>
					<Text style={[styles.triggerText, !selectedOption && styles.placeholder]}>
						{selectedOption ? selectedOption.label : placeholder}
					</Text>
					<HugeiconsIcon icon={ArrowDown01Icon} size={16} color="#a1a1aa" />
				</Pressable>
			</Animated.View>

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
							{options.map((opt) => {
								const isSelected = opt.value === value;
								return (
									<Pressable
										key={opt.value}
										onPress={() => {
											onValueChange?.(opt.value);
											setIsOpen(false);
										}}
										style={[styles.optionItem, isSelected && styles.optionSelected]}
									>
										<Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
											{opt.label}
										</Text>
										{isSelected && <HugeiconsIcon icon={CheckIcon} size={16} color="#14b8a6" />}
									</Pressable>
								);
							})}
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
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		height: 44,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
		backgroundColor: "#18181b",
		paddingHorizontal: 12,
	},
	disabled: {
		opacity: 0.5,
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
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
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
