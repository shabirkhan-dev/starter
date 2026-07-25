import { ArrowRightIcon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Input,
	MobileMotionButton,
	MotionInput,
	MotionSelect,
	MotionTabs,
	MotionTabsContent,
	MotionTabsList,
	MotionTabsTrigger,
	Select,
	StatefulButton,
} from "../../modules/ui";

const TABS_CODE_EXAMPLE = `import { MotionTabs } from "@school-os/ui/components/mobile";`;
const BUTTON_CODE_EXAMPLE = `import { MobileMotionButton } from "@school-os/ui/components/mobile";`;

const INPUT_CODE_EXAMPLE = `import { MotionInput } from "@school-os/ui/components/mobile";

export function MobileInputDemo() {
  const [val, setVal] = useState("john.doe@example.com");
  return (
    <MotionInput
      label="Email Address"
      placeholder="you@example.com"
      value={val}
      onChangeText={setVal}
      clearable
      onClear={() => setVal("")}
    />
  );
}`;

const SELECT_CODE_EXAMPLE = `import { MotionSelect } from "@school-os/ui/components/mobile";

export function MobileSelectDemo() {
  const [val, setVal] = useState("nextjs");
  return (
    <MotionSelect
      label="Framework Target"
      options={[
        { value: "nextjs", label: "Next.js 16 (App Router)" },
        { value: "expo", label: "Expo Router (React Native)" }
      ]}
      value={val}
      onValueChange={setVal}
    />
  );
}`;

export default function ComponentSlugScreen() {
	const { slug = "tabs" } = useLocalSearchParams<{ slug: string }>();
	const [activePlatformView, setActivePlatformView] = useState<"preview" | "code">("preview");

	const [inputValue, setInputValue] = useState("john.doe@example.com");
	const [passwordValue, setPasswordValue] = useState("secret123");
	const [inputError, setInputError] = useState(false);
	const [selectValue, setSelectValue] = useState("nextjs");

	const [_buttonLoading, _setButtonLoading] = useState(false);
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

	const frameworkOptions = [
		{ value: "nextjs", label: "Next.js 16 (App Router)" },
		{ value: "expo", label: "Expo Router (React Native)" },
		{ value: "turborepo", label: "Turborepo + Bun Monorepo" },
		{ value: "nestjs", label: "NestJS Backend Spine" },
	];

	const isButtonSlug = slug === "button";
	const isInputSlug = slug === "input";
	const isSelectSlug = slug === "select";

	const componentTitle = isInputSlug
		? "Motion Input"
		: isSelectSlug
			? "Motion Select"
			: isButtonSlug
				? "Motion Button"
				: "Motion Tabs";

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				{/* 1. HEADER SECTION */}
				<View style={styles.header}>
					<View style={styles.badgeRow}>
						<Text style={styles.badgeText}>Mobile Component</Text>
						<Text style={styles.slugBadge}>slug: /ui/{slug}</Text>
					</View>
					<Text style={styles.title}>{componentTitle}</Text>
					<Text style={styles.subtitle}>
						React Native Reanimated component running on UI thread for Expo apps.
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
					isInputSlug ? (
						/* INPUT MOBILE PREVIEW */
						<View style={styles.previewSection}>
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>Reanimated Focus Scale & Clear Input:</Text>
								<View style={styles.buttonList}>
									<MotionInput
										label="Email Address"
										placeholder="you@example.com"
										value={inputValue}
										onChangeText={setInputValue}
										clearable
										onClear={() => setInputValue("")}
										error={inputError ? "Invalid email format" : undefined}
									/>

									<MotionInput
										label="Account Password"
										secureTextEntry
										value={passwordValue}
										onChangeText={setPasswordValue}
									/>

									<MobileMotionButton
										variant="outline"
										size="sm"
										onPress={() => setInputError(!inputError)}
									>
										{inputError ? "Clear Error" : "Toggle Shake Error"}
									</MobileMotionButton>
								</View>
							</View>

							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>Base Primitive Input:</Text>
								<Input placeholder="Base un-animated TextInput..." />
							</View>
						</View>
					) : isSelectSlug ? (
						/* SELECT MOBILE PREVIEW */
						<View style={styles.previewSection}>
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>Reanimated Bottom Sheet Select Picker:</Text>
								<View style={styles.buttonList}>
									<MotionSelect
										label="Target Framework"
										options={frameworkOptions}
										value={selectValue}
										onValueChange={setSelectValue}
									/>
								</View>
							</View>

							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>Base Primitive Select:</Text>
								<Select
									options={frameworkOptions}
									value={selectValue}
									onValueChange={setSelectValue}
								/>
							</View>
						</View>
					) : isButtonSlug ? (
						/* BUTTON MOBILE PREVIEW */
						<View style={styles.previewSection}>
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

							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>Button Sizes:</Text>
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
						</View>
					) : (
						/* TABS MOBILE PREVIEW */
						<View style={styles.previewSection}>
							<View style={styles.playgroundCard}>
								<MotionTabs defaultValue="overview" variant="pill">
									<MotionTabsList>
										<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
										<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
									</MotionTabsList>
									<View style={styles.contentContainer}>
										<MotionTabsContent value="overview" style={styles.cardInner}>
											<Text style={styles.cardHeader}>System Overview</Text>
											<Text style={styles.cardText}>
												React Native Reanimated spring physics running on UI thread.
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
							{isInputSlug
								? INPUT_CODE_EXAMPLE
								: isSelectSlug
									? SELECT_CODE_EXAMPLE
									: isButtonSlug
										? BUTTON_CODE_EXAMPLE
										: TABS_CODE_EXAMPLE}
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
