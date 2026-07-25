import { Grid02Icon } from "@hugeicons/core-free-icons";
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
				id: "tabs",
				name: "Motion Tabs",
				description: "Spring animated layout indicator with exclusion pill and underline variants",
				category: "Motion",
				icon: Grid02Icon,
				badge: "Ready",
			},
		],
	},
];
