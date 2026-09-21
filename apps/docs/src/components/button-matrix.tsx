import { Button, type Kind, type Size, type Variant } from "@rabtx/ui/button";
import { Plus } from "lucide-react";

const ROWS: { variant: Variant; label: string }[] = [
	{ variant: "primary", label: "Save changes" },
	{ variant: "secondary", label: "Save changes" },
	{ variant: "destructive", label: "Delete" },
	{ variant: "ghost", label: "Cancel" },
];

const COLUMNS: Size[] = ["sm", "md", "lg", "icon"];

/**
 * Every role at every size on one surface, which is the only way to see whether a
 * material still holds together when the box shrinks to 32px or grows to 48px.
 *
 * The row and column headers are the prop values, so the grid doubles as the
 * reference for what to pass. Icon-only cells carry an accessible name of their
 * own, since a `+` glyph announces nothing.
 */
export function ButtonMatrix({ kind = "solid" }: { kind?: Kind }) {
	return (
		<div className="not-prose my-6 overflow-x-auto rounded-xl border bg-fd-card">
			<table className="w-full min-w-[40rem] border-collapse text-left">
				<caption className="sr-only">
					{kind} buttons: {ROWS.length} colour roles by {COLUMNS.length} sizes
				</caption>
				<thead>
					<tr className="border-b">
						<th scope="col" className="p-3 font-mono text-xs font-normal text-fd-muted-foreground">
							{kind}
						</th>
						{COLUMNS.map((size) => (
							<th
								key={size}
								scope="col"
								className="p-3 font-mono text-xs font-normal text-fd-muted-foreground"
							>
								{size}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{ROWS.map(({ variant, label }) => (
						<tr key={variant} className="border-b last:border-0">
							<th
								scope="row"
								className="p-3 font-mono text-xs font-normal text-fd-muted-foreground"
							>
								{variant}
							</th>
							{COLUMNS.map((size) => (
								<td key={size} className="p-3">
									<Button
										kind={kind}
										variant={variant}
										size={size}
										aria-label={size === "icon" ? `Add — ${variant}` : undefined}
									>
										{size === "icon" ? <Plus className="size-4" /> : label}
									</Button>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
