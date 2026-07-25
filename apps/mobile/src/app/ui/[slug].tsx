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
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Input,
	MobileButton,
	MobileMotionButton,
	MobileNotTypeset,
	MobileTypeset,
	MobileTypesetBlockquote,
	MobileTypesetCode,
	MobileTypesetHeading,
	MobileTypesetParagraph,
	MobileTypesetScroll,
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
const TYPESET_CODE_EXAMPLE = `import { MobileTypeset, MobileTypesetHeading, MobileTypesetParagraph } from "@school-os/ui/components/mobile";`;

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
	const [scrollableSelect, setScrollableSelect] = useState("utc");
	const [groupedSelect, setGroupedSelect] = useState("nextjs");
	const [errorSelectVal, setErrorSelectVal] = useState("");
	const [selectErrorState, setSelectErrorState] = useState(true);
	const [rtlSelectVal, setRtlSelectVal] = useState("ar");

	const [mobileTypesetPreset, setMobileTypesetPreset] = useState<"docs" | "chat" | "reading">(
		"docs",
	);

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

	const timezoneOptions = [
		{ value: "utc", label: "UTC (Coordinated Universal Time)" },
		{ value: "est", label: "US Eastern Time (EST / UTC-5)" },
		{ value: "cst", label: "US Central Time (CST / UTC-6)" },
		{ value: "mst", label: "US Mountain Time (MST / UTC-7)" },
		{ value: "pst", label: "US Pacific Time (PST / UTC-8)" },
		{ value: "gmt", label: "Europe London (GMT / UTC+0)" },
		{ value: "cet", label: "Europe Paris (CET / UTC+1)" },
		{ value: "eet", label: "Europe Athens (EET / UTC+2)" },
		{ value: "gst", label: "Asia Dubai (GST / UTC+4)" },
		{ value: "ist", label: "Asia India (IST / UTC+5:30)" },
		{ value: "sgt", label: "Asia Singapore (SGT / UTC+8)" },
		{ value: "jst", label: "Asia Tokyo (JST / UTC+9)" },
		{ value: "kst", label: "Asia Seoul (KST / UTC+9)" },
		{ value: "aest", label: "Australia Sydney (AEST / UTC+10)" },
		{ value: "nzst", label: "New Zealand (NZST / UTC+12)" },
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
	const isTypesetSlug = slug === "typeset";

	const componentTitle = isInputSlug
		? "Motion Input"
		: isSelectSlug
			? "Motion Select"
			: isButtonSlug
				? "Motion Button"
				: isTypesetSlug
					? "Typeset System"
					: "Motion Tabs";

	return (
		<SafeAreaView className="flex-1 bg-zinc-950">
			<ScrollView className="p-5 pb-10">
				{/* 1. HEADER SECTION */}
				<View className="mb-4">
					<View className="flex-row items-center gap-2 mb-2">
						<Text className="text-[11px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded font-mono overflow-hidden">
							Mobile Component
						</Text>
						<Text className="text-[11px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded font-mono overflow-hidden">
							slug: /ui/{slug}
						</Text>
					</View>
					<Text className="text-[22px] font-bold text-white">{componentTitle}</Text>
					<Text className="text-xs text-zinc-400 mt-1">
						React Native Reanimated component running on UI thread for Expo apps.
					</Text>
				</View>

				{/* PREVIEW / CODE SWITCHER */}
				<View className="items-center mb-5">
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
					isTypesetSlug ? (
						/* TYPESET MOBILE PREVIEW & EXTENSIVE EXAMPLES */
						<View className="gap-4">
							<View className="items-center mb-2">
								<MotionTabs
									value={mobileTypesetPreset}
									onValueChange={(v) => setMobileTypesetPreset(v as "docs" | "chat" | "reading")}
									variant="pill"
								>
									<MotionTabsList>
										<MotionTabsTrigger value="docs">Docs</MotionTabsTrigger>
										<MotionTabsTrigger value="chat">Chat</MotionTabsTrigger>
										<MotionTabsTrigger value="reading">Reading</MotionTabsTrigger>
									</MotionTabsList>
								</MotionTabs>
							</View>

							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<MobileTypeset preset={mobileTypesetPreset}>
									<MobileTypesetHeading level={1}>Typeset Mobile</MobileTypesetHeading>
									<MobileTypesetParagraph>
										Typeset is a single typography rhythm system for HTML and rendered Markdown
										across Web and React Native Expo.
									</MobileTypesetParagraph>

									<MobileTypesetHeading level={2}>Rhythm Controls</MobileTypesetHeading>
									<MobileTypesetParagraph>
										Three core controls derive all sizes: size, leading, and flow.
									</MobileTypesetParagraph>

									<MobileTypesetBlockquote>
										"Three controls: size, leading, and flow. Everything else derives from them."
									</MobileTypesetBlockquote>

									<MobileTypesetCode block>bun add @school-os/ui</MobileTypesetCode>

									<MobileTypesetScroll>
										<View className="flex-row items-center gap-6 p-2">
											<Text className="text-xs font-mono text-zinc-300">Metric</Text>
											<Text className="text-xs font-mono text-zinc-300">Web CSS</Text>
											<Text className="text-xs font-mono text-zinc-300">Mobile UniWind</Text>
										</View>
									</MobileTypesetScroll>

									<MobileNotTypeset className="mt-4 p-3 bg-zinc-950 rounded-lg border border-zinc-800">
										<Text className="text-xs font-semibold text-white">
											Opted Out Component (NotTypeset)
										</Text>
									</MobileNotTypeset>
								</MobileTypeset>
							</View>
						</View>
					) : isInputSlug ? (
						/* INPUT MOBILE PREVIEW & EXTENSIVE EXAMPLES */
						<View className="gap-4">
							{/* EX 1: SUCCESS ANIMATED CHECKMARK */}
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">
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
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">2. Error Shake & Message:</Text>
								<MotionInput
									label="Workspace Domain"
									value={errorInputVal}
									onChangeText={setErrorInputVal}
									error={inputErrorState ? "Domain contains invalid characters" : undefined}
									leftIcon={<HugeiconsIcon icon={UserIcon} size={16} color="#a1a1aa" />}
								/>
								<View className="mt-2">
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
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">3. Search Bar with Clear Button:</Text>
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
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">
									4. Password Input with Eye Toggle:
								</Text>
								<MotionInput
									label="Account Security Password"
									secureTextEntry
									value={passwordVal}
									onChangeText={setPasswordVal}
								/>
							</View>

							{/* EX 5: UNANIMATED BASE PRIMITIVE */}
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">
									5. Un-animated Base Primitive Input:
								</Text>
								<Input placeholder="Standard TextInput fallback..." />
							</View>
						</View>
					) : isSelectSlug ? (
						/* SELECT MOBILE PREVIEW & EXTENSIVE EXAMPLES */
						<View className="gap-4">
							{/* EX 1: SCROLLABLE LONG LIST (15+ TIMEZONES) */}
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">
									1. Scrollable Long List (15+ World Timezones):
								</Text>
								<MotionSelect
									label="Select World Timezone"
									options={timezoneOptions}
									value={scrollableSelect}
									onValueChange={setScrollableSelect}
									searchable
								/>
							</View>

							{/* EX 2: SEARCHABLE COMBOBOX SELECT */}
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">
									2. Searchable Filter Combobox Select:
								</Text>
								<MotionSelect
									label="Select Country"
									options={countryOptions}
									value={searchableSelect}
									onValueChange={setSearchableSelect}
									searchable
								/>
							</View>

							{/* EX 3: GROUPED SELECT */}
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">3. Grouped Technologies Select:</Text>
								<MotionSelect
									label="Stack Target"
									options={groupedTechOptions}
									value={groupedSelect}
									onValueChange={setGroupedSelect}
								/>
							</View>

							{/* EX 4: ERROR STATE SELECT */}
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">4. Invalid / Error State Select:</Text>
								<MotionSelect
									label="Required Selection"
									options={roleOptions}
									value={errorSelectVal}
									onValueChange={setErrorSelectVal}
									error={selectErrorState}
								/>
								<View className="mt-2">
									<MobileMotionButton
										variant="outline"
										size="sm"
										onPress={() => setSelectErrorState(!selectErrorState)}
									>
										{selectErrorState ? "Clear Select Error" : "Trigger Select Error"}
									</MobileMotionButton>
								</View>
							</View>

							{/* EX 5: RTL SELECT */}
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">
									5. RTL Support (Right-to-Left Layout):
								</Text>
								<MotionSelect
									label="اختر اللغة"
									options={rtlOptions}
									value={rtlSelectVal}
									onValueChange={setRtlSelectVal}
									dir="rtl"
								/>
							</View>

							{/* EX 6: UNANIMATED BASE SELECT */}
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">
									6. Base Un-animated Select Primitive:
								</Text>
								<Select options={roleOptions} value={roleSelect} onValueChange={setRoleSelect} />
							</View>
						</View>
					) : isButtonSlug ? (
						/* BUTTON MOBILE PREVIEW & EXTENSIVE EXAMPLES */
						<View className="gap-4">
							{/* EX 1: STATEFUL BUTTON */}
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">
									1. Cascading Stagger & Icon Slot Swap:
								</Text>
								<View className="gap-2.5 mt-2">
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
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">2. Button Size Matrix:</Text>
								<View className="flex-row flex-wrap items-center gap-2 mt-2">
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
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<Text className="text-xs text-zinc-400 mb-2">3. Button Styling Variants:</Text>
								<View className="gap-2.5 mt-2">
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
						<View className="gap-4">
							<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
								<MotionTabs defaultValue="overview" variant="pill">
									<MotionTabsList>
										<MotionTabsTrigger value="overview">Overview</MotionTabsTrigger>
										<MotionTabsTrigger value="analytics">Analytics</MotionTabsTrigger>
										<MotionTabsTrigger value="settings">Settings</MotionTabsTrigger>
									</MotionTabsList>
									<View className="w-full mt-4">
										<MotionTabsContent
											value="overview"
											className="bg-zinc-950 p-4 rounded-[10px] border border-zinc-800 min-h-[100px]"
										>
											<Text className="text-sm font-semibold text-white mb-1.5">
												System Overview
											</Text>
											<Text className="text-xs text-zinc-400 leading-[18px]">
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
					<View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
						<Text className="text-xs font-semibold text-zinc-400 mb-3">
							React Native Code Snippet:
						</Text>
						<Text className="font-mono text-[11px] text-teal-400 leading-[18px]">
							{isInputSlug
								? INPUT_CODE_EXAMPLE
								: isSelectSlug
									? SELECT_CODE_EXAMPLE
									: isButtonSlug
										? BUTTON_CODE_EXAMPLE
										: isTypesetSlug
											? TYPESET_CODE_EXAMPLE
											: TABS_CODE_EXAMPLE}
						</Text>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
}
