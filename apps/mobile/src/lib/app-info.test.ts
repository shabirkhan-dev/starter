import { describe, expect, it } from "vitest";
import { APP_TITLE, getWelcomeMessage } from "./app-info";

describe("app-info", () => {
	it("has stable app title", () => {
		expect(APP_TITLE).toBe("Starter Mobile");
	});

	it("returns welcome message", () => {
		expect(getWelcomeMessage()).toBe("Minimal Expo starter ready.");
	});
});
