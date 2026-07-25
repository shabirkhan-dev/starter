import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotionTabs, MotionTabsContent, MotionTabsList, MotionTabsTrigger } from "../../modules/ui";

const RN_CODE_EXAMPLE = `import {
  MotionTabs,
  MotionTabsList,
  MotionTabsTrigger,
  MotionTabsContent,
} from "@/modules/ui";

export function MobileTabsDemo() {
  return (
    <MotionTabs defaultValue="overview" variant="pill">
      <MotionTabsList>
        <MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
        <MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
        <MotionTabsTrigger value="settings">Settings</MotionTabsTrigger>
      </MotionTabsList>

      <MotionTabsContent value="overview">
        <Text>Mobile Overview</Text>
      </MotionTabsContent>
    </MotionTabs>
  );
}`;

export default function ComponentSlugScreen() {
	const { slug } = useLocalSearchParams<{ slug: string }>();
	const [activePlatformView, setActivePlatformView] = useState<"preview" | "code">("preview");
	const [activeVariant, setActiveVariant] = useState<"pill" | "underline" | "segment">("pill");
	const [_copied, _setCopied] = useState(false);

	const componentTitle = slug === "tabs" ? "Motion Tabs" : `${slug} Component`;

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				{/* HEADER */}
				<View style={styles.header}>
					<View style={styles.badgeRow}>
						<Text style={styles.badgeText}>Mobile Component</Text>
						<Text style={styles.slugBadge}>slug: {slug || "tabs"}</Text>
					</View>
					<Text style={styles.title}>{componentTitle}</Text>
					<Text style={styles.subtitle}>
						React Native Reanimated spring physics for Expo Router applications.
					</Text>
				</View>

				{/* PREVIEW / CODE SWITCHER */}
				<View style={styles.viewSwitcherContainer}>
					<MotionTabs
						value={activePlatformView}
						onValueChange={(v) => setActivePlatformView(v as "preview" | "code")}
						variant="pill"
					>
						<MotionTabsList>
							<MotionTabsTrigger value="preview">Preview</MotionTabsTrigger>
							<MotionTabsTrigger value="code">Code</MotionTabsTrigger>
						</MotionTabsList>
					</MotionTabs>
				</View>

				{activePlatformView === "preview" ? (
					<View style={styles.previewSection}>
						{/* VARIANT SELECTOR */}
						<View style={styles.variantCard}>
							<Text style={styles.sectionLabel}>Variant Switcher:</Text>
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

						{/* MAIN INTERACTIVE PLAYGROUND */}
						<View style={styles.playgroundCard}>
							<MotionTabs defaultValue="overview" variant={activeVariant}>
								<MotionTabsList>
									<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
									<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
									<MotionTabsTrigger value="settings">Settings</MotionTabsTrigger>
									<MotionTabsTrigger value="security">Security</MotionTabsTrigger>
								</MotionTabsList>

								<View style={styles.contentContainer}>
									<MotionTabsContent value="overview" style={styles.cardInner}>
										<Text style={styles.cardHeader}>System Overview</Text>
										<Text style={styles.cardText}>
											React Native Reanimated spring physics running on UI thread.
										</Text>
									</MotionTabsContent>

									<MotionTabsContent value="analytics" style={styles.cardInner}>
										<Text style={styles.cardHeader}>Performance Analytics</Text>
										<Text style={styles.cardText}>
											60/120Hz gesture & animation telemetry metrics.
										</Text>
									</MotionTabsContent>

									<MotionTabsContent value="settings" style={styles.cardInner}>
										<Text style={styles.cardHeader}>Workspace Preferences</Text>
										<Text style={styles.cardText}>
											Configure haptic feedback and native layout bounds.
										</Text>
									</MotionTabsContent>

									<MotionTabsContent value="security" style={styles.cardInner}>
										<Text style={styles.cardHeader}>Security & Access</Text>
										<Text style={styles.cardText}>
											Session authentication tokens and audit log permissions.
										</Text>
									</MotionTabsContent>
								</View>
							</MotionTabs>
						</View>

						{/* ADDITIONAL PATTERN EXAMPLES */}
						<Text style={styles.groupTitle}>More Mobile UI Patterns</Text>

						{/* Example 2: Segmented Stack */}
						<View style={styles.patternCard}>
							<Text style={styles.patternTitle}>Tech Stack Filter (Segment)</Text>
							<MotionTabs defaultValue="rn" variant="segment">
								<MotionTabsList>
									<MotionTabsTrigger value="rn">React Native</MotionTabsTrigger>
									<MotionTabsTrigger value="expo">Expo Router</MotionTabsTrigger>
									<MotionTabsTrigger value="ts">TypeScript</MotionTabsTrigger>
								</MotionTabsList>

								<MotionTabsContent value="rn" style={styles.patternContent}>
									<Text style={styles.patternText}>Native iOS & Android Components</Text>
								</MotionTabsContent>
								<MotionTabsContent value="expo" style={styles.patternContent}>
									<Text style={styles.patternText}>File-based routing & universal builds</Text>
								</MotionTabsContent>
								<MotionTabsContent value="ts" style={styles.patternContent}>
									<Text style={styles.patternText}>100% type-safe props and state</Text>
								</MotionTabsContent>
							</MotionTabs>
						</View>
					</View>
				) : (
					/* CODE VIEW */
					<View style={styles.codeCard}>
						<Text style={styles.codeHeader}>React Native Code Snippet:</Text>
						<Text style={styles.codeText}>{RN_CODE_EXAMPLE}</Text>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#09090b",
	},
	scrollContent: {
		padding: 20,
		paddingBottom: 40,
	},
	header: {
		marginBottom: 16,
	},
	badgeRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		marginBottom: 8,
	},
	badgeText: {
		fontSize: 11,
		color: "#14b8a6",
		backgroundColor: "rgba(20, 184, 166, 0.1)",
		paddingHorizontal: 8,
		paddingVertical: 2,
		borderRadius: 4,
		overflow: "hidden",
		fontFamily: "monospace",
	},
	slugBadge: {
		fontSize: 11,
		color: "#a1a1aa",
		backgroundColor: "#18181b",
		paddingHorizontal: 8,
		paddingVertical: 2,
		borderRadius: 4,
		overflow: "hidden",
		fontFamily: "monospace",
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#ffffff",
	},
	subtitle: {
		fontSize: 12,
		color: "#a1a1aa",
		marginTop: 4,
	},
	viewSwitcherContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	previewSection: {
		gap: 16,
	},
	variantCard: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "between",
		backgroundColor: "#18181b",
		padding: 12,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
	},
	sectionLabel: {
		fontSize: 12,
		color: "#a1a1aa",
		marginRight: 10,
	},
	playgroundCard: {
		backgroundColor: "#18181b",
		padding: 16,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
		alignItems: "center",
	},
	contentContainer: {
		width: "100%",
		marginTop: 16,
	},
	cardInner: {
		backgroundColor: "#09090b",
		padding: 16,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#27272a",
		minHeight: 100,
	},
	cardHeader: {
		fontSize: 14,
		fontWeight: "600",
		color: "#ffffff",
		marginBottom: 6,
	},
	cardText: {
		fontSize: 12,
		color: "#a1a1aa",
		lineHeight: 18,
	},
	groupTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#ffffff",
		marginTop: 8,
	},
	patternCard: {
		backgroundColor: "#18181b",
		padding: 16,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
		gap: 12,
	},
	patternTitle: {
		fontSize: 13,
		fontWeight: "600",
		color: "#ffffff",
	},
	patternContent: {
		marginTop: 12,
		padding: 12,
		backgroundColor: "#09090b",
		borderRadius: 8,
	},
	patternText: {
		fontSize: 12,
		color: "#a1a1aa",
	},
	codeCard: {
		backgroundColor: "#18181b",
		padding: 16,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
	},
	codeHeader: {
		fontSize: 12,
		fontWeight: "600",
		color: "#a1a1aa",
		marginBottom: 12,
	},
	codeText: {
		fontFamily: "monospace",
		fontSize: 11,
		color: "#14b8a6",
		lineHeight: 18,
	},
});
