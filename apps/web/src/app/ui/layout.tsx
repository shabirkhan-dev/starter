"use client";

import { SidebarInset, SidebarProvider } from "@school-os/ui/components/sidebar";
import { type ReactNode, useState } from "react";
import { RabtxSidebar, RabtxTopbar, SHADCN_COMPONENTS_NAV } from "@/modules/ui";

export default function RabtxLayout({ children }: { children: ReactNode }) {
	const [activeItem, setActiveItem] = useState("button");
	const [depthMode, setDepthMode] = useState(true);

	const activeItemObject = SHADCN_COMPONENTS_NAV.flatMap((cat) => cat.items).find(
		(item) => item.id === activeItem,
	);
	const activeItemName = activeItemObject ? activeItemObject.name : "Showcase";

	return (
		<SidebarProvider defaultOpen={true}>
			<div className="min-h-screen w-full flex bg-background text-foreground selection:bg-teal-500/20 selection:text-teal-500">
				{/* Rabtx Sidebar Component from modules/ui */}
				<RabtxSidebar
					activeItem={activeItem}
					onSelectItem={setActiveItem}
					depthMode={depthMode}
					onToggleDepth={() => setDepthMode(!depthMode)}
				/>

				{/* Main Inset Canvas */}
				<SidebarInset className="flex flex-col flex-1 min-w-0 bg-background">
					<RabtxTopbar
						activeItemName={activeItemName}
						depthMode={depthMode}
						onToggleDepth={() => setDepthMode(!depthMode)}
					/>

					{/* Page Container */}
					<main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 max-w-6xl mx-auto w-full">
						{children}
					</main>
				</SidebarInset>
			</div>
		</SidebarProvider>
	);
}
