import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Duplicated from @school-os/ui on purpose: rabtx must not depend on the package
// it is meant to replace.
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
