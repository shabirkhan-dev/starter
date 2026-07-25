import {
	ArrowRightIcon,
	Mail01Icon,
	Search01Icon,
	SparklesIcon,
	UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Input,
	MobileButton,
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
const INPUT_CODE_EXAMPLE = `import { MobileMotionInput } from "@school-os/ui/components/mobile";`;
const SELECT_CODE_EXAMPLE = `import { MobileMotionSelect } from "@school-os/ui/components/mobile";`;

export default function ComponentSlugScreen() {
	const { slug = "tabs" } = useLocalSearchParams<{ slug: string }>();
	const [activePlatformView, setActivePlatformView] = useState<"preview" | "code">("preview");

	const [emailVal, setEmailVal] = useState("shabir@school-os.dev");
	const [errorInputVal, setErrorInputVal] = useState("invalid domain!");
	const [inputErrorState, setInputErrorState] = useState(true);
	const [searchVal, setSearchVal] = useState("");
	const [passwordVal, setPasswordVal] = useState("secret123");

	const [roleSelect, setRoleSelect] = useState("admin");
	const [searchableSelect, setSearchableSelect] = useState("us");
	const [groupedSelect, setGroupedSelect] = useState("nextjs");
	const [errorSelectVal, setErrorSelectVal] = useState("");
	const [selectErrorState, setSelectErrorState] = useState(true);
	const [rtlSelectVal, setRtlSelectVal] = useState("ar");

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

	const countryOptions = [
		{ value: "us", label: "United States 🇺🇸" },
		{ value: "ca", label: "Canada 🇨🇦" },
		{ value: "uk", label: "United Kingdom 🇬🇧" },
		{ value: "de", label: "Germany 🇩🇪" },
		{ value: "jp", label: "Japan 🇯🇵" },
	];

	const groupedTechOptions = [
		{ value: "nextjs", label: "Next.js 16 (App Router)", group: "Frontend" },
		{ value: "expo", label: "Expo Router (Mobile)", group: "Frontend" },
		{ value: "nestjs", label: "NestJS Production API", group: "Backend" },
		{ value: "postgres", label: "PostgreSQL DB", group: "Backend" },
	];

	const rtlOptions = [
		{ value: "ar", label: "العربية (Arabic RTL)" },
		{ value: "fa", label: "فارسی (Persian RTL)" },
		{ value: "ur", label: "اردو (Urdu RTL)" },
	];

	const roleOptions = [
		{ value: "admin", label: "Administrator (Full Access)" },
		{ value: "developer", label: "Developer (API Keys & Logs)" },
		{ value: "viewer", label: "Viewer (Read-Only)" },
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
						/* INPUT MOBILE PREVIEW & EXTENSIVE EXAMPLES */
						<View style={styles.previewSection}>
							{/* EX 1: SUCCESS ANIMATED CHECKMARK */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>
									1. Verified Account Email (Success Checkmark):
								</Text>
								<MotionInput
									label="Verified Email"
									placeholder="you@example.com"
									value={emailVal}
									onChangeText={setEmailVal}
									success
									leftIcon={<HugeiconsIcon icon={Mail01Icon} size={16} color="#a1a1aa" />}
								/>
							</View>

							{/* EX 2: ERROR REANIMATED SHAKE */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>2. Error Shake & Message:</Text>
								<MotionInput
									label="Workspace Domain"
									value={errorInputVal}
									onChangeText={setErrorInputVal}
									error={inputErrorState ? "Domain contains invalid characters" : undefined}
									leftIcon={<HugeiconsIcon icon={UserIcon} size={16} color="#a1a1aa" />}
								/>
								<View style={{ marginTop: 8 }}>
									<MobileMotionButton
										variant="outline"
										size="sm"
										onPress={() => setInputErrorState(!inputErrorState)}
									>
										{inputErrorState ? "Clear Error State" : "Re-trigger Error Shake"}
									</MobileMotionButton>
								</View>
							</View>

							{/* EX 3: SEARCH WITH LEFT & RIGHT ICON */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>3. Search Bar with Clear Button:</Text>
								<MotionInput
									label="Global Search"
									placeholder="Search components or icons..."
									value={searchVal}
									onChangeText={setSearchVal}
									clearable
									onClear={() => setSearchVal("")}
									leftIcon={<HugeiconsIcon icon={Search01Icon} size={16} color="#a1a1aa" />}
								/>
							</View>

							{/* EX 4: PASSWORD VISIBILITY TOGGLE */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>4. Password Input with Eye Toggle:</Text>
								<MotionInput
									label="Account Security Password"
									secureTextEntry
									value={passwordVal}
									onChangeText={setPasswordVal}
								/>
							</View>

							{/* EX 5: UNANIMATED BASE PRIMITIVE */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>5. Un-animated Base Primitive Input:</Text>
								<Input placeholder="Standard TextInput fallback..." />
							</View>
						</View>
					) : isSelectSlug ? (
						/* SELECT MOBILE PREVIEW & EXTENSIVE EXAMPLES */
						<View style={styles.previewSection}>
							{/* EX 1: SEARCHABLE COMBOBOX SELECT */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>1. Searchable Filter Combobox Select:</Text>
								<MotionSelect
									label="Select Country"
									options={countryOptions}
									value={searchableSelect}
									onValueChange={setSearchableSelect}
									searchable
								/>
							</View>

							{/* EX 2: GROUPED SELECT */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>2. Grouped Technologies Select:</Text>
								<MotionSelect
									label="Stack Target"
									options={groupedTechOptions}
									value={groupedSelect}
									onValueChange={setGroupedSelect}
								/>
							</View>

							{/* EX 3: ERROR STATE SELECT */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>3. Invalid / Error State Select:</Text>
								<MotionSelect
									label="Required Selection"
									options={roleOptions}
									value={errorSelectVal}
									onValueChange={setErrorSelectVal}
									error={selectErrorState}
								/>
								<View style={{ marginTop: 8 }}>
									<MobileMotionButton
										variant="outline"
										size="sm"
										onPress={() => setSelectErrorState(!selectErrorState)}
									>
										{selectErrorState ? "Clear Select Error" : "Trigger Select Error"}
									</MobileMotionButton>
								</View>
							</View>

							{/* EX 4: RTL SELECT */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>4. RTL Support (Right-to-Left Layout):</Text>
								<MotionSelect
									label="اختر اللغة"
									options={rtlOptions}
									value={rtlSelectVal}
									onValueChange={setRtlSelectVal}
									dir="rtl"
								/>
							</View>

							{/* EX 5: UNANIMATED BASE SELECT */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>5. Base Un-animated Select Primitive:</Text>
								<Select options={roleOptions} value={roleSelect} onValueChange={setRoleSelect} />
							</View>
						</View>
					) : isButtonSlug ? (
						/* BUTTON MOBILE PREVIEW & EXTENSIVE EXAMPLES */
						<View style={styles.previewSection}>
							{/* EX 1: STATEFUL BUTTON */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>1. Cascading Stagger & Icon Slot Swap:</Text>
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

							{/* EX 2: SIZES */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>2. Button Size Matrix:</Text>
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

							{/* EX 3: VARIANTS */}
							<View style={styles.playgroundCard}>
								<Text style={styles.sectionLabel}>3. Button Styling Variants:</Text>
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
							<View style={styles.playgroundCard}>
								<MotionTabs defaultValue="overview" variant="pill">
									<MotionTabsList>
										<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
										<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
										<MotionTabsTrigger value="settings">Settings</MotionTabsTrigger>
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
