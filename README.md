# Starter Kit

Monorepo starter: **Turborepo + Bun** with Next.js, **Expo React Native (Expo Router + NativeWind)**, **Hono + Prisma + PostgreSQL**, Rust, C, and scripts (Bash, Lua, Python). Shared UI, lint/format everywhere, git hooks, CI, and an optional dev container.

## Quick start

**Prerequisites:** [Bun](https://bun.sh) (Node is not required). Optional: [just](https://github.com/casey/just) for `just lint`, `just format`, etc.

```bash
git clone <this-repo>
cd <repo>
bun install
bun run prepare   # install git hooks (lefthook)
bun run dev      # start Next.js + other dev servers
```

## What's inside

| Area | Contents |
|------|----------|
| **apps/** | `web` (Next.js), `mobile` (Expo Router + NativeWind), `hono-api` (Hono + Prisma + PostgreSQL), `rust` (Cargo), `c` (C) |
| **packages/** | `ui` (shared React/shadcn), `tailwind-config`, `typescript-config` |
| **scripts/** | Bash, Lua, Python (ShellCheck, shfmt, luacheck, stylua, ruff) |

One-command surface from repo root: **`bun run <task>`** (or **`just <task>`** if just is installed).

| Command | Purpose |
|--------|---------|
| `bun run dev` | Start dev (Next.js, Rust, etc.) |
| `bun run build` | Build all (Turbo + C app) |
| `bun run lint` | Lint: Biome + scripts (ShellCheck, luacheck, ruff) |
| `bun run format` | Format: Biome + scripts + Rust + C |
| `bun run typecheck` | Typecheck (TS) |
| `bun run test` | Run workspace tests (Turbo + script tests) |
| `bun run test:coverage` | Run TS coverage + all language tests |
| `bun run test:e2e:web` | Run Playwright e2e for web app |

## Docker (Postgres + Hono API)

Run Postgres and Hono API (API on host port **3001**):

```bash
cp env.docker.example .env
docker compose up --build
```

Compose files live under **[docker/](docker/)** (modular fragments). See **[docs/docker.md](docs/docker.md)** for details and env options.

## Reproducible environment

- **Dev Container:** [.devcontainer/](.devcontainer/) — Bun, Rust, C, Python, Lua, shell tools. In VS Code/Cursor: **Reopen in Container**. See [.devcontainer/README.md](.devcontainer/README.md).
- **CI:** [.github/workflows/ci.yml](.github/workflows/ci.yml) — split gates for lint, typecheck, coverage tests, and web e2e with artifacts.
- **CD:** [.github/workflows/cd.yml](.github/workflows/cd.yml) — staged deploy workflow template (staging on `main`, production on version tags).
- **Git hooks:** Lefthook — format, lint, typecheck, large-file guard, secret scan, commit-msg checks. Installed by `bun run prepare`.

## Docs

- **[PROJECT.md](PROJECT.md)** — Full layout, tooling, and conventions.
- **[docs/docker.md](docs/docker.md)** — Docker Compose (Postgres + Hono API).
- **[docs/QoL.md](docs/QoL.md)** — QoL stack (hooks, task runner, EditorConfig, CI, per-language).
- **[docs/architecture/README.md](docs/architecture/README.md)** — Architecture baseline and boundary rules.
- **[docs/overrides.md](docs/overrides.md)** — How to intentionally override starter defaults.
- **[AGENTS.md](AGENTS.md)** — Instructions for AI agents working in this repo.

## License

Dual-licensed under **MIT** or **Apache-2.0**, at your option. See [LICENSE-MIT](LICENSE-MIT) and [LICENSE-Apache-2.0](LICENSE-Apache-2.0).
