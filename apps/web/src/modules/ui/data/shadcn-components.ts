import {
	ArrowDown01Icon,
	Grid02Icon,
	InputTextIcon,
	Layers01Icon,
	Layout01Icon,
	SmartPhone01Icon,
	TextFontIcon,
	ToggleOnIcon,
} from "@hugeicons/core-free-icons";
import type { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentProps } from "react";

type IconType = ComponentProps<typeof HugeiconsIcon>["icon"];

export type ShadcnCategory = {
	id: string;
	title: string;
	items: {
		id: string;
		name: string;
		description: string;
		category: string;
		icon: IconType;
		badge?: string;
	}[];
};

export const SHADCN_COMPONENTS_NAV: ShadcnCategory[] = [
	{
		id: "motion-components",
		title: "Motion Components",
		items: [
			{
				id: "switch",
				name: "Motion Switch",
				description:
					"Spring-animated toggle switch with thumb icon swap, async loading state, and color variants",
				category: "Motion",
				icon: ToggleOnIcon,
				badge: "New",
			},
			{
				id: "glass-card",
				name: "Liquid Glass Card",
				description:
					"Tactile glass surface container with SVG feDisplacementMap light refraction, chromatic aberration, & 3D tilt hover",
				category: "Motion",
				icon: Layout01Icon,
				badge: "New",
			},
			{
				id: "bottom-bar",
				name: "Liquid Glass Bottom Bar",
				description:
					"Cross-browser SVG feDisplacementMap light-refracting dock with spring physics & Safari cache rotation",
				category: "Motion",
				icon: SmartPhone01Icon,
				badge: "New",
			},
			{
				id: "tabs",
				name: "Motion Tabs",
				description: "Spring animated layout indicator with exclusion pill and underline variants",
				category: "Motion",
				icon: Grid02Icon,
				badge: "Ready",
			},
			{
				id: "button",
				name: "Motion Button",
				description: "Spring interactive button with press scale feedback and loading state",
				category: "Motion",
				icon: Layers01Icon,
				badge: "Ready",
			},
			{
				id: "input",
				name: "Motion Input",
				description: "Interactive input with focus border glow, password toggle, and error shake",
				category: "Motion",
				icon: InputTextIcon,
				badge: "Ready",
			},
			{
				id: "select",
				name: "Motion Select",
				description: "Animated combobox dropdown with spring scale physics and option checkmarks",
				category: "Motion",
				icon: ArrowDown01Icon,
				badge: "Ready",
			},
			{
				id: "typeset",
				name: "Typeset",
				description: "Typography styling system for HTML & rendered markdown with rhythm presets",
				category: "Typography",
				icon: TextFontIcon,
				badge: "New",
			},
		],
	},
];
