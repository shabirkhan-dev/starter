import { Button } from "@rabtx/ui/button";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { ArrowRight, Check, Download, Plus, Settings, Trash2 } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonStateDemo } from "@/components/button-state-demo";
import { getMDXComponents } from "@/components/mdx";
import { Preview } from "@/components/preview";
import { rabtxSource } from "@/lib/source";

// Icons the MDX examples reference; MDX only sees what is passed in below.
const icons = { ArrowRight, Check, Download, Plus, Settings, Trash2 };

export default async function Page(props: PageProps<"/rabtx/[[...slug]]">) {
	const params = await props.params;
	const page = rabtxSource.getPage(params.slug);
	if (!page) notFound();

	const MDX = page.data.body;

	return (
		<DocsPage toc={page.data.toc} full={page.data.full}>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDX components={getMDXComponents({ Button, ButtonStateDemo, Preview, ...icons })} />
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return rabtxSource.generateParams();
}

export async function generateMetadata(props: PageProps<"/rabtx/[[...slug]]">): Promise<Metadata> {
	const params = await props.params;
	const page = rabtxSource.getPage(params.slug);
	if (!page) notFound();

	return { title: page.data.title, description: page.data.description };
}
