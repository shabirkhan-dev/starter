import type { ReactNode } from "react";

/**
 * Live component surface for the Rabtx UI docs.
 *
 * Rows are labelled, so a preview reads back as a statement — "this is the pressed
 * state" — instead of a pile of unlabelled buttons. The card surface is deliberate:
 * a material has to hold up on a card, not only on the page background.
 */
export function Preview({ label, children }: { label?: string; children: ReactNode }) {
	return (
		<figure className="not-prose my-6 overflow-hidden rounded-xl border bg-fd-card">
			<div className="flex flex-wrap items-center gap-3 p-6">{children}</div>
			{label ? (
				<figcaption className="border-t px-4 py-2 font-mono text-xs text-fd-muted-foreground">
					{label}
				</figcaption>
			) : null}
		</figure>
	);
}
