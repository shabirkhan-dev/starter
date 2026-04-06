const SW_URL = "/sw.js";

function setStatus(message: string): void {
	const el = document.getElementById("status");
	if (el) el.textContent = message;
}

async function refresh(): Promise<void> {
	if (!("serviceWorker" in navigator)) {
		setStatus("Service workers are not supported in this browser.");
		return;
	}
	const reg = await navigator.serviceWorker.getRegistration();
	if (!reg) {
		setStatus("No service worker registered yet.");
		return;
	}
	const state = reg.active?.state ?? reg.installing?.state ?? reg.waiting?.state ?? "unknown";
	setStatus(
		`Service worker: ${state}. ${navigator.onLine ? "Online" : "Offline (cached assets may still work)."}`,
	);
}

async function registerSw(): Promise<void> {
	if (!("serviceWorker" in navigator)) {
		setStatus("Service workers are not supported.");
		return;
	}
	try {
		const reg = await navigator.serviceWorker.register(SW_URL, { scope: "/" });
		reg.addEventListener("updatefound", () => {
			const worker = reg.installing;
			if (worker) {
				worker.addEventListener("statechange", () => {
					void refresh();
				});
			}
		});
		await refresh();
	} catch (e) {
		const msg = e instanceof Error ? e.message : String(e);
		setStatus(`Registration failed: ${msg}`);
	}
}

void registerSw();

window.addEventListener("online", () => {
	void refresh();
});
window.addEventListener("offline", () => {
	void refresh();
});

document.getElementById("refresh")?.addEventListener("click", () => {
	void refresh();
});
