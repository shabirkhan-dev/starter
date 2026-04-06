import { join } from "node:path";

const PORT = Number(process.env.PORT) || 3002;
const publicDir = join(import.meta.dir, "../public");
const srcDir = join(import.meta.dir, ".");

const MIME: Record<string, string> = {
	".html": "text/html; charset=utf-8",
	".css": "text/css; charset=utf-8",
	".js": "application/javascript; charset=utf-8",
	".svg": "image/svg+xml",
	".webmanifest": "application/manifest+json",
};

async function bundle(path: string): Promise<Response> {
	const result = await Bun.build({
		entrypoints: [path],
		target: "browser",
		minify: false,
	});
	const out = result.outputs[0];
	if (!out) {
		return new Response("Bundle failed", { status: 500 });
	}
	return new Response(await out.arrayBuffer(), {
		headers: { "Content-Type": "application/javascript; charset=utf-8" },
	});
}

Bun.serve({
	port: PORT,
	async fetch(req: Request) {
		const url = new URL(req.url);
		const pathname = url.pathname;

		if (pathname === "/") {
			return new Response(Bun.file(join(srcDir, "index.html")), {
				headers: { "Content-Type": "text/html; charset=utf-8" },
			});
		}
		if (pathname === "/main.js") {
			return bundle(join(srcDir, "main.ts"));
		}
		if (pathname === "/sw.js") {
			return bundle(join(srcDir, "sw.ts"));
		}
		if (pathname === "/styles.css") {
			return new Response(Bun.file(join(srcDir, "styles.css")), {
				headers: { "Content-Type": "text/css; charset=utf-8" },
			});
		}
		if (pathname === "/manifest.webmanifest") {
			const f = Bun.file(join(publicDir, "manifest.webmanifest"));
			if (await f.exists()) {
				return new Response(f, {
					headers: { "Content-Type": "application/manifest+json" },
				});
			}
		}
		if (pathname.startsWith("/icons/")) {
			const rel = pathname.slice(1);
			const f = Bun.file(join(publicDir, rel));
			if (await f.exists()) {
				const ext = rel.slice(rel.lastIndexOf("."));
				const ct = MIME[ext] ?? "application/octet-stream";
				return new Response(f, { headers: { "Content-Type": ct } });
			}
		}

		return new Response("Not Found", { status: 404 });
	},
});

console.log(`PWA dev server http://localhost:${PORT}`);
