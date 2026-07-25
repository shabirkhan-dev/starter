import type React from "react";
import { createContext, useContext, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Variant = "pill" | "underline" | "segment";

type Ctx = {
	value: string;
	setValue: (v: string) => void;
	variant: Variant;
};

const TabsCtx = createContext<Ctx | null>(null);

function useTabs() {
	const ctx = useContext(TabsCtx);
	if (!ctx) throw new Error("MotionTabs.* must be used inside <MotionTabs>");
	return ctx;
}

const _SPRING_CONFIG = {
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

	const setValue = (v: string) => {
		if (!controlled) setInternal(v);
		onValueChange?.(v);
	};

	return (
		<TabsCtx.Provider value={{ value: current, setValue, variant }}>
			<View style={style}>{children}</View>
		</TabsCtx.Provider>
	);
}

export function MotionTabsList({ children, style }: { children: React.ReactNode; style?: object }) {
	const { variant } = useTabs();

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
	const { value: current, setValue, variant } = useTabs();
	const active = current === value;

	return (
		<Pressable
			onPress={() => setValue(value)}
			style={[
				styles.triggerBase,
				variant === "pill" && styles.triggerPill,
				variant === "underline" && styles.triggerUnderline,
				active && variant === "pill" && styles.triggerPillActive,
				active && variant === "segment" && styles.triggerSegmentActive,
				style,
			]}
		>
			<Text style={[styles.triggerText, active ? styles.textActive : styles.textInactive]}>
				{children}
			</Text>
			{active && variant === "underline" && <View style={styles.underlineIndicator} />}
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
	},
	listPill: {
		backgroundColor: "#18181b",
		borderRadius: 9999,
		padding: 4,
		gap: 4,
	},
	listUnderline: {
		borderBottomWidth: 1,
		borderBottomColor: "#27272a",
		gap: 8,
	},
	listSegment: {
		backgroundColor: "#18181b",
		borderRadius: 8,
		padding: 2,
	},
	triggerBase: {
		paddingHorizontal: 14,
		paddingVertical: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	triggerPill: {
		borderRadius: 9999,
	},
	triggerUnderline: {
		paddingBottom: 10,
		position: "relative",
	},
	triggerPillActive: {
		backgroundColor: "#ffffff",
	},
	triggerSegmentActive: {
		backgroundColor: "#27272a",
		borderRadius: 6,
	},
	triggerText: {
		fontSize: 13,
		fontWeight: "600",
	},
	textActive: {
		color: "#000000",
	},
	textInactive: {
		color: "#a1a1aa",
	},
	underlineIndicator: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: 2,
		backgroundColor: "#ffffff",
	},
});
