import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MotionTabs, MotionTabsContent, MotionTabsList, MotionTabsTrigger } from "../../modules/ui";

export default function MobileUIScreen() {
	const [activeVariant, setActiveVariant] = useState<"pill" | "underline" | "segment">("pill");

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Mobile Motion Tabs</Text>
				<Text style={styles.subtitle}>Expo Router & React Native Reanimated</Text>
			</View>

			<View style={styles.variantSelector}>
				<Text style={styles.label}>Variant:</Text>
				<MotionTabs
					value={activeVariant}
					onValueChange={(v) => setActiveVariant(v as "pill" | "underline" | "segment")}
					variant="pill"
				>
					<MotionTabsList>
						<MotionTabsTrigger value="pill">Pill</MotionTabsTrigger>
						<MotionTabsTrigger value="underline">Underline</MotionTabsTrigger>
						<MotionTabsTrigger value="segment">Segment</MotionTabsTrigger>
					</MotionTabsList>
				</MotionTabs>
			</View>

			<View style={styles.showcase}>
				<MotionTabs defaultValue="overview" variant={activeVariant}>
					<MotionTabsList>
						<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
						<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
						<MotionTabsTrigger value="settings">Settings</MotionTabsTrigger>
					</MotionTabsList>

					<MotionTabsContent value="overview" style={styles.card}>
						<Text style={styles.cardTitle}>Mobile Overview</Text>
						<Text style={styles.cardBody}>
							Native Reanimated spring physics optimized for 120Hz mobile displays.
						</Text>
					</MotionTabsContent>
					<MotionTabsContent value="analytics" style={styles.card}>
						<Text style={styles.cardTitle}>Mobile Analytics</Text>
						<Text style={styles.cardBody}>
							Real-time mobile app telemetry metrics and performance indicators.
						</Text>
					</MotionTabsContent>
					<MotionTabsContent value="settings" style={styles.card}>
						<Text style={styles.cardTitle}>Mobile Settings</Text>
						<Text style={styles.cardBody}>Configure haptic feedback and screen transitions.</Text>
					</MotionTabsContent>
				</MotionTabs>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#09090b",
		paddingHorizontal: 20,
		paddingTop: 40,
	},
	header: {
		marginBottom: 24,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#ffffff",
	},
	subtitle: {
		fontSize: 13,
		color: "#a1a1aa",
		marginTop: 4,
	},
	variantSelector: {
		marginBottom: 24,
	},
	label: {
		fontSize: 12,
		color: "#a1a1aa",
		marginBottom: 8,
	},
	showcase: {
		alignItems: "center",
	},
	card: {
		marginTop: 20,
		padding: 20,
		backgroundColor: "#18181b",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
		width: "100%",
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#ffffff",
		marginBottom: 6,
	},
	cardBody: {
		fontSize: 13,
		color: "#a1a1aa",
		lineHeight: 18,
	},
});
