import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Re-export rather than reimplement once @school-os/ui/lib/utils is reachable from
// native too. Rabtx extends shadcn rather than replacing it, so the duplication here
// is a leftover, not a boundary.
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
