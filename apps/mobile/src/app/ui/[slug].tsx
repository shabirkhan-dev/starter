import { ArrowRightIcon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
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
	StatefulButton,
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

const BUTTON_CODE_EXAMPLE = `import { MobileMotionButton, MobileStatefulButton } from "@school-os/ui/components/mobile";
import { ArrowRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

export function MobileButtonDemo() {
  const [okState, setOkState] = useState("idle");

  return (
    <View style={{ gap: 12 }}>
      <MobileStatefulButton
        state={okState}
        variant="primary"
        size="md"
        onPress={() => run("ok")}
        loadingText="Saving changes"
        successText="Saved successfully"
        icon={<HugeiconsIcon icon={ArrowRightIcon} size={16} color="#000" />}
      >
        Save changes
      </MobileStatefulButton>

      <MobileMotionButton variant="secondary" size="md">Secondary</MobileMotionButton>
      <MobileMotionButton variant="outline" size="md">Outline</MobileMotionButton>
    </View>
  );
}`;

export default function ComponentSlugScreen() {
	const { slug = "tabs" } = useLocalSearchParams<{ slug: string }>();
	const [activePlatformView, setActivePlatformView] = useState<"preview" | "code">("preview");
	const [activeVariant, setActiveVariant] = useState<"pill" | "underline" | "segment">("pill");

	const [buttonLoading, setButtonLoading] = useState(false);
	const [okState, setOkState] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [errState, setErrState] = useState<"idle" | "loading" | "success" | "error">("idle");

	const runStatefulDemo = (target: "ok" | "err") => {
		const setter = target === "ok" ? setOkState : setErrState;
		setter("loading");
		setTimeout(() => {
			setter(target === "ok" ? "success" : "error");
			setTimeout(() => setter("idle"), 1800);
		}, 1400);
	};

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
							? "React Native Reanimated press scale spring physics with Hugeicons & stateful text transitions."
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
						/* BUTTON MOBILE PREVIEW MATCHING WEB EXACTLY */
						<View style={styles.previewSection}>
							{/* GROUP 1: STATEFUL CASCADING TEXT STAGGER & ICON SLOT */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>Cascading Text Stagger & Icon Slot Swap:</Text>
								<View style={styles.buttonList}>
									<StatefulButton
										state={okState}
										variant="primary"
										size="md"
										onPress={() => runStatefulDemo("ok")}
										loadingText="Saving changes"
										successText="Saved successfully"
										icon={<HugeiconsIcon icon={ArrowRightIcon} size={16} color="#000000" />}
									>
										Save changes
									</StatefulButton>
									<StatefulButton
										state={errState}
										variant="secondary"
										size="md"
										onPress={() => runStatefulDemo("err")}
										loadingText="Submitting form"
										errorText="Failed to save"
									>
										Submit form
									</StatefulButton>
								</View>
							</View>

							{/* GROUP 2: BUTTON SIZES & ELEVATION */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>Button Sizes & Elevation:</Text>
								<View style={styles.buttonRow}>
									<MobileMotionButton variant="primary" size="sm">
										Small Pill
									</MobileMotionButton>
									<MobileMotionButton variant="primary" size="md">
										Medium Primary
									</MobileMotionButton>
									<MobileMotionButton variant="primary" size="icon">
										<HugeiconsIcon icon={SparklesIcon} size={16} color="#000000" />
									</MobileMotionButton>
								</View>
							</View>

							{/* GROUP 3: VARIANTS & LOADING SPINNER STATE */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>Variants & Loading Spinner State:</Text>
								<View style={styles.buttonList}>
									<MobileMotionButton
										loading={buttonLoading}
										variant="primary"
										size="md"
										onPress={() => setButtonLoading(!buttonLoading)}
									>
										{buttonLoading ? "Processing State..." : "Click for Loader"}
									</MobileMotionButton>
									<MobileMotionButton variant="outline" size="md">
										Outline Reflection
									</MobileMotionButton>
									<MobileMotionButton variant="destructive" size="md">
										Destructive Action
									</MobileMotionButton>
									<MobileButton variant="outline" size="md">
										Base Primitive
									</MobileButton>
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
	buttonRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		gap: 8,
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
