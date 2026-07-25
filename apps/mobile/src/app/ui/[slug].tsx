import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	MobileButton,
	MobileMotionButton,
	MotionTabs,
	MotionTabsContent,
	MotionTabsList,
	MotionTabsTrigger,
} from "../../modules/ui";

const TABS_CODE_EXAMPLE = `import {
  MotionTabs,
  MotionTabsList,
  MotionTabsTrigger,
  MotionTabsContent,
} from "@school-os/ui/components/mobile";

export function MobileTabsDemo() {
  return (
    <MotionTabs defaultValue="overview" variant="pill">
      <MotionTabsList>
        <MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
        <MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
      </MotionTabsList>
      <MotionTabsContent value="overview">
        <Text>Overview Panel</Text>
      </MotionTabsContent>
    </MotionTabs>
  );
}`;

const BUTTON_CODE_EXAMPLE = `import { MobileMotionButton, MobileButton } from "@school-os/ui/components/mobile";

export function MobileButtonDemo() {
  return (
    <View style={{ gap: 10 }}>
      <MobileMotionButton variant="default">Primary Spring Button</MobileMotionButton>
      <MobileMotionButton variant="destructive">Destructive</MobileMotionButton>
      <MobileMotionButton variant="outline">Outline</MobileMotionButton>
      <MobileMotionButton loading variant="secondary">Loading...</MobileMotionButton>
    </View>
  );
}`;

export default function ComponentSlugScreen() {
	const { slug = "tabs" } = useLocalSearchParams<{ slug: string }>();
	const [activePlatformView, setActivePlatformView] = useState<"preview" | "code">("preview");
	const [activeVariant, setActiveVariant] = useState<"pill" | "underline" | "segment">("pill");
	const [buttonLoading, setButtonLoading] = useState(false);

	const isButtonSlug = slug === "button";
	const componentTitle = isButtonSlug ? "Motion Button" : "Motion Tabs";

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				{/* HEADER */}
				<View style={styles.header}>
					<View style={styles.badgeRow}>
						<Text style={styles.badgeText}>Mobile Component</Text>
						<Text style={styles.slugBadge}>slug: /ui/{slug}</Text>
					</View>
					<Text style={styles.title}>{componentTitle}</Text>
					<Text style={styles.subtitle}>
						{isButtonSlug
							? "React Native Reanimated press scale spring physics with loading states."
							: "React Native Reanimated spring physics for Expo Router applications."}
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
					isButtonSlug ? (
						/* BUTTON MOBILE PREVIEW */
						<View style={styles.previewSection}>
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>Reanimated Spring Motion Buttons:</Text>
								<View style={styles.buttonList}>
									<MobileMotionButton
										variant="default"
										onPress={() => setButtonLoading(!buttonLoading)}
									>
										Primary Motion Button
									</MobileMotionButton>
									<MobileMotionButton variant="secondary">Secondary Motion</MobileMotionButton>
									<MobileMotionButton variant="outline">Outline Variant</MobileMotionButton>
									<MobileMotionButton variant="destructive">Destructive Action</MobileMotionButton>
									<MobileMotionButton loading={buttonLoading} variant="default">
										{buttonLoading ? "Processing..." : "Tap to test loading"}
									</MobileMotionButton>
								</View>
							</View>

							<Text style={styles.groupTitle}>Base Un-animated Mobile Buttons</Text>
							<View style={styles.playgroundCard}>
								<View style={styles.buttonList}>
									<MobileButton variant="default">Base Primitive Button</MobileButton>
									<MobileButton variant="outline">Base Outline</MobileButton>
								</View>
							</View>
						</View>
					) : (
						/* TABS MOBILE PREVIEW */
						<View style={styles.previewSection}>
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
						</View>
					)
				) : (
					/* CODE VIEW */
					<View style={styles.codeCard}>
						<Text style={styles.codeHeader}>React Native Code Snippet:</Text>
						<Text style={styles.codeText}>
							{isButtonSlug ? BUTTON_CODE_EXAMPLE : TABS_CODE_EXAMPLE}
						</Text>
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
		justifyContent: "space-between",
		backgroundColor: "#18181b",
		padding: 12,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
	},
	sectionLabel: {
		fontSize: 12,
		color: "#a1a1aa",
		marginBottom: 8,
	},
	playgroundCard: {
		backgroundColor: "#18181b",
		padding: 16,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
		alignItems: "stretch",
	},
	buttonList: {
		gap: 10,
		marginTop: 8,
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
