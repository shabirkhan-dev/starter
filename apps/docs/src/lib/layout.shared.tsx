import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			// JSX supported
			title: appName,
		},
		// Both doc trees need a way back to each other; /rabtx has its own sidebar.
		links: [
			{ text: "Docs", url: "/docs" },
			{ text: "Components", url: "/rabtx" },
		],
		githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
	};
}
