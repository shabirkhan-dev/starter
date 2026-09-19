import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { rabtxSource } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/rabtx">) {
	return (
		<DocsLayout tree={rabtxSource.getPageTree()} {...baseOptions()}>
			{children}
		</DocsLayout>
	);
}
