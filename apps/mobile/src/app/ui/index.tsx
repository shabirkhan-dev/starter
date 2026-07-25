import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const MOBILE_COMPONENT_SLUGS = [
	{
		slug: "tabs",
		name: "Motion Tabs",
		description: "React Native Reanimated spring sliding tabs (Pill, Underline, Segment)",
		category: "Motion Components",
		status: "Ready",
	},
	{
		slug: "button",
		name: "Motion Button",
		description: "React Native Reanimated press scale button with loading state",
		category: "Motion Components",
		status: "Ready",
	},
];

export default function MobileUICatalogScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View style={styles.header}>
					<Text style={styles.title}>Mobile UI Catalog</Text>
					<Text style={styles.subtitle}>Expo Router & Reanimated Component System</Text>
				</View>

				<View style={styles.categoryGroup}>
					<Text style={styles.categoryTitle}>Motion Components</Text>

					{MOBILE_COMPONENT_SLUGS.map((item) => (
						<Pressable
							key={item.slug}
							onPress={() => router.push({ pathname: "/ui/[slug]", params: { slug: item.slug } })}
							style={styles.componentCard}
						>
							<View style={styles.cardHeader}>
								<Text style={styles.componentName}>{item.name}</Text>
								<Text style={styles.badge}>{item.status}</Text>
							</View>
							<Text style={styles.componentDesc}>{item.description}</Text>
							<Text style={styles.slugTag}>slug: /ui/{item.slug}</Text>
						</Pressable>
					))}
				</View>
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
	categoryGroup: {
		gap: 12,
	},
	categoryTitle: {
		fontSize: 11,
		fontWeight: "bold",
		color: "#a1a1aa",
		textTransform: "uppercase",
		letterSpacing: 1,
		marginBottom: 4,
	},
	componentCard: {
		backgroundColor: "#18181b",
		padding: 16,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#27272a",
		gap: 6,
	},
	cardHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	componentName: {
		fontSize: 16,
		fontWeight: "600",
		color: "#ffffff",
	},
	badge: {
		fontSize: 10,
		color: "#14b8a6",
		backgroundColor: "rgba(20, 184, 166, 0.1)",
		paddingHorizontal: 8,
		paddingVertical: 2,
		borderRadius: 4,
		overflow: "hidden",
		fontFamily: "monospace",
	},
	componentDesc: {
		fontSize: 12,
		color: "#a1a1aa",
		lineHeight: 18,
	},
	slugTag: {
		fontSize: 10,
		color: "#71717a",
		fontFamily: "monospace",
		marginTop: 4,
	},
});
