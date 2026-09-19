import type { ReactNode } from "react";

/** Live component surface for the Rabtx UI docs. */
export function Preview({ children }: { children: ReactNode }) {
	return (
		<div className="not-prose flex min-h-40 flex-wrap items-center justify-center gap-3 rounded-xl border bg-fd-card p-8">
			{children}
		</div>
	);
}
