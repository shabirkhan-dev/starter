import { ArrowDown01Icon, CheckIcon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useEffect, useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";

const SPRING_PRESS = {
	stiffness: 500,
	damping: 30,
	mass: 0.6,
};

const SPRING_SLIDE = {
	stiffness: 350,
	damping: 26,
	mass: 0.8,
};

export interface MobileMotionSelectOption {
	value: string;
	label: string;
	group?: string;
	disabled?: boolean;
}

export interface MobileMotionSelectProps {
	options: MobileMotionSelectOption[];
	value?: string;
	onValueChange?: (val: string) => void;
	placeholder?: string;
	label?: string;
	searchable?: boolean;
	disabled?: boolean;
	error?: boolean | string;
	dir?: "ltr" | "rtl";
	style?: object;
}

export function MobileMotionSelect({
	options,
	value,
	onValueChange,
	placeholder = "Select an option...",
	label,
	searchable = false,
	disabled = false,
	error = false,
	dir = "ltr",
	style,
}: MobileMotionSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const triggerScale = useSharedValue(1);
	const chevronRotate = useSharedValue(0);
	const sheetTranslateY = useSharedValue(300);
	const backdropOpacity = useSharedValue(0);

	const selectedOption = options.find((opt) => opt.value === value);
	const isRtl = dir === "rtl";
	const hasError = Boolean(error);

	// Trigger animation on open state change
	// biome-ignore lint/correctness/useExhaustiveDependencies: animate sheet on open
	useEffect(() => {
		if (isOpen) {
			chevronRotate.value = withSpring(180, SPRING_PRESS);
			sheetTranslateY.value = withSpring(0, SPRING_SLIDE);
			backdropOpacity.value = withTiming(1, { duration: 200 });
		} else {
			chevronRotate.value = withSpring(0, SPRING_PRESS);
			sheetTranslateY.value = withTiming(300, { duration: 200 });
			backdropOpacity.value = withTiming(0, { duration: 200 });
			setSearchQuery("");
		}
	}, [isOpen]);

	const handlePressIn = () => {
		if (!disabled) triggerScale.value = withSpring(0.96, SPRING_PRESS);
	};

	const handlePressOut = () => {
		if (!disabled) triggerScale.value = withSpring(1, SPRING_PRESS);
	};

	const animatedTriggerStyle = useAnimatedStyle(() => ({
		transform: [{ scale: triggerScale.value }],
	}));

	const animatedChevronStyle = useAnimatedStyle(() => ({
		transform: [{ rotate: `${chevronRotate.value}deg` }],
	}));

	const animatedSheetStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: sheetTranslateY.value }],
	}));

	const animatedBackdropStyle = useAnimatedStyle(() => ({
		opacity: backdropOpacity.value,
	}));

	const filteredOptions = searchQuery
		? options.filter((opt) => opt.label.toLowerCase().includes(searchQuery.toLowerCase()))
		: options;

	return (
		<View style={styles.container}>
			{label && <Text style={[styles.label, isRtl && styles.rtlText]}>{label}</Text>}

			<Animated.View style={animatedTriggerStyle}>
				<Pressable
					onPressIn={handlePressIn}
					onPressOut={handlePressOut}
					onPress={() => !disabled && setIsOpen(true)}
					disabled={disabled}
					style={[
						styles.trigger,
						isRtl && styles.rtlRow,
						hasError && styles.errorBorder,
						disabled && styles.disabled,
						style,
					]}
				>
					<Text
						style={[
							styles.triggerText,
							!selectedOption && styles.placeholder,
							isRtl && styles.rtlText,
						]}
					>
						{selectedOption ? selectedOption.label : placeholder}
					</Text>
					<Animated.View style={animatedChevronStyle}>
						<HugeiconsIcon icon={ArrowDown01Icon} size={16} color="#a1a1aa" />
					</Animated.View>
				</Pressable>
			</Animated.View>

			<Modal
				visible={isOpen}
				transparent
				animationType="none"
				onRequestClose={() => setIsOpen(false)}
			>
				<Pressable style={styles.modalOverlay} onPress={() => setIsOpen(false)}>
					<Animated.View style={[styles.backdrop, animatedBackdropStyle]} />

					<Animated.View style={[styles.modalCard, animatedSheetStyle]}>
						<View style={styles.modalHeader}>
							<Text style={styles.modalTitle}>{label || "Select Option"}</Text>
							<View style={styles.dragHandle} />
						</View>

						{searchable && (
							<View style={styles.searchWrapper}>
								<HugeiconsIcon icon={Search01Icon} size={16} color="#a1a1aa" />
								<TextInput
									placeholder="Search options..."
									placeholderTextColor="#71717a"
									value={searchQuery}
									onChangeText={setSearchQuery}
									style={styles.searchInput}
								/>
							</View>
						)}

						<ScrollView style={styles.optionsList}>
							{filteredOptions.map((opt) => {
								const isSelected = opt.value === value;
								return (
									<Pressable
										key={opt.value}
										onPress={() => {
											if (!opt.disabled) {
												onValueChange?.(opt.value);
												setIsOpen(false);
											}
										}}
										disabled={opt.disabled}
										style={[
											styles.optionItem,
											isSelected && styles.optionSelected,
											opt.disabled && styles.disabled,
										]}
									>
										<Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
											{opt.label}
										</Text>
										{isSelected && <HugeiconsIcon icon={CheckIcon} size={16} color="#14b8a6" />}
									</Pressable>
								);
							})}
						</ScrollView>
					</Animated.View>
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
	rtlRow: {
		flexDirection: "row-reverse",
	},
	rtlText: {
		textAlign: "right",
	},
	errorBorder: {
		borderColor: "#ef4444",
	},
	disabled: {
		opacity: 0.4,
	},
	triggerText: {
		fontSize: 14,
		color: "#ffffff",
	},
	placeholder: {
		color: "#a1a1aa",
	},
	modalOverlay: {
		flex: 1,
		justifyContent: "flex-end",
	},
	backdrop: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.7)",
	},
	modalCard: {
		backgroundColor: "#18181b",
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		padding: 20,
		maxHeight: 380,
		borderWidth: 1,
		borderColor: "#27272a",
		gap: 12,
	},
	modalHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: 8,
		borderBottomWidth: 1,
		borderBottomColor: "#27272a",
	},
	modalTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
	dragHandle: {
		width: 36,
		height: 4,
		backgroundColor: "#3f3f46",
		borderRadius: 2,
	},
	searchWrapper: {
		flexDirection: "row",
		alignItems: "center",
		height: 38,
		borderRadius: 8,
		backgroundColor: "#27272a",
		paddingHorizontal: 10,
		gap: 8,
	},
	searchInput: {
		flex: 1,
		fontSize: 13,
		color: "#ffffff",
	},
	optionsList: {
		width: "100%",
	},
	optionItem: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 12,
		borderRadius: 10,
		marginBottom: 4,
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
