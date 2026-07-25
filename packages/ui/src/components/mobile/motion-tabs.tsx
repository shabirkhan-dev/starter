import React, { createContext, useContext, useState } from "react";
import { type LayoutChangeEvent, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

type Variant = "pill" | "underline" | "segment";

type Ctx = {
	value: string;
	setValue: (v: string) => void;
	variant: Variant;
	registerLayout: (val: string, x: number, width: number) => void;
	indicatorAnimatedStyle: object;
};

const TabsCtx = createContext<Ctx | null>(null);

function useTabs() {
	const ctx = useContext(TabsCtx);
	if (!ctx) throw new Error("MotionTabs.* must be used inside <MotionTabs>");
	return ctx;
}

const SPRING_CONFIG = {
	stiffness: 170,
	damping: 24,
	mass: 1.2,
};

export function MotionTabs({
	defaultValue = "",
	value,
	onValueChange,
	variant = "pill",
	children,
	style,
}: {
	defaultValue?: string;
	value?: string;
	onValueChange?: (v: string) => void;
	variant?: Variant;
	children: React.ReactNode;
	style?: object;
}) {
	const [internal, setInternal] = useState(defaultValue);
	const controlled = value !== undefined;
	const current = controlled ? value : internal;

	const indicatorX = useSharedValue(0);
	const indicatorWidth = useSharedValue(0);
	const layoutsRef = React.useRef<Record<string, { x: number; width: number }>>({});

	const registerLayout = (val: string, x: number, width: number) => {
		layoutsRef.current[val] = { x, width };
		if (val === current) {
			indicatorX.value = withSpring(x, SPRING_CONFIG);
			indicatorWidth.value = withSpring(width, SPRING_CONFIG);
		}
	};

	const setValue = (v: string) => {
		if (!controlled) setInternal(v);
		onValueChange?.(v);

		const layout = layoutsRef.current[v];
		if (layout) {
			indicatorX.value = withSpring(layout.x, SPRING_CONFIG);
			indicatorWidth.value = withSpring(layout.width, SPRING_CONFIG);
		}
	};

	const indicatorAnimatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: indicatorX.value }],
		width: indicatorWidth.value,
	}));

	return (
		<TabsCtx.Provider
			value={{
				value: current,
				setValue,
				variant,
				registerLayout,
				indicatorAnimatedStyle,
			}}
		>
			<View style={style}>{children}</View>
		</TabsCtx.Provider>
	);
}

export function MotionTabsList({ children, style }: { children: React.ReactNode; style?: object }) {
	const { variant, indicatorAnimatedStyle } = useTabs();

	return (
		<View
			style={[
				styles.listBase,
				variant === "pill" && styles.listPill,
				variant === "underline" && styles.listUnderline,
				variant === "segment" && styles.listSegment,
				style,
			]}
		>
			<Animated.View
				style={[
					styles.indicatorBase,
					variant === "pill" && styles.indicatorPill,
					variant === "underline" && styles.indicatorUnderline,
					variant === "segment" && styles.indicatorSegment,
					indicatorAnimatedStyle,
				]}
			/>
			{children}
		</View>
	);
}

export function MotionTabsTrigger({
	value,
	children,
	style,
}: {
	value: string;
	children: React.ReactNode;
	style?: object;
}) {
	const { value: current, setValue, variant, registerLayout } = useTabs();
	const active = current === value;

	const handleLayout = (e: LayoutChangeEvent) => {
		const { x, width } = e.nativeEvent.layout;
		registerLayout(value, x, width);
	};

	return (
		<Pressable
			onLayout={handleLayout}
			onPress={() => setValue(value)}
			style={[
				styles.triggerBase,
				variant === "pill" && styles.triggerPill,
				variant === "underline" && styles.triggerUnderline,
				style,
			]}
		>
			<Text
				style={[
					styles.triggerText,
					active ? styles.textActive : styles.textInactive,
					variant === "pill" && active && styles.textPillActive,
				]}
			>
				{children}
			</Text>
		</Pressable>
	);
}

export function MotionTabsContent({
	value,
	children,
	style,
}: {
	value: string;
	children: React.ReactNode;
	style?: object;
}) {
	const { value: current } = useTabs();
	if (current !== value) return null;

	return <View style={style}>{children}</View>;
}

const styles = StyleSheet.create({
	listBase: {
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "center",
		position: "relative",
	},
	listPill: {
		backgroundColor: "#18181b",
		borderRadius: 9999,
		padding: 4,
	},
	listUnderline: {
		borderBottomWidth: 1,
		borderBottomColor: "#27272a",
	},
	listSegment: {
		backgroundColor: "#18181b",
		borderRadius: 8,
		padding: 3,
	},
	indicatorBase: {
		position: "absolute",
		top: 4,
		bottom: 4,
		zIndex: 1,
	},
	indicatorPill: {
		backgroundColor: "#ffffff",
		borderRadius: 9999,
	},
	indicatorUnderline: {
		top: "auto",
		bottom: -1,
		height: 2,
		backgroundColor: "#ffffff",
	},
	indicatorSegment: {
		top: 3,
		bottom: 3,
		backgroundColor: "#27272a",
		borderRadius: 6,
	},
	triggerBase: {
		paddingHorizontal: 14,
		paddingVertical: 8,
		alignItems: "center",
		justifyContent: "center",
		zIndex: 10,
	},
	triggerPill: {
		borderRadius: 9999,
	},
	triggerUnderline: {
		paddingBottom: 10,
	},
	triggerText: {
		fontSize: 13,
		fontWeight: "600",
	},
	textActive: {
		color: "#ffffff",
	},
	textPillActive: {
		color: "#000000",
	},
	textInactive: {
		color: "#a1a1aa",
	},
});
