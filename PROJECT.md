# Starter Kit – Project overview

## What this is

Monorepo starter kit for your projects: Next.js app(s), shared UI, and shared config. Managed with Turborepo and Bun.

## Repository layout

```
starter/
├── apps/
│   ├── web/          # Next.js app (main app)
│   ├── mobile/       # Expo Router + NativeWind app
│   ├── hono-api/     # Hono + Prisma + PostgreSQL API
│   ├── rust/         # Rust binary (Cargo; run via cargo or Turbo)
│   └── c/            # C binary (clang-format, clang-tidy)
├── scripts/          # Scripts by language: bash/, lua/, python/ (ShellCheck, shfmt, luacheck, stylua, ruff)
├── packages/
│   ├── ui/           # Shared React UI (shadcn-style components)
│   ├── tailwind-config/  # Shared Tailwind theme (e.g. theme.css)
│   └── typescript-config/  # Shared tsconfig bases
├── .devcontainer/    # Dev Container (Bun, Rust, C, Python, Lua, shell tools)
├── .editorconfig     # Editor consistency (line endings, indent, charset)
├── biome.json        # Lint + format (Biome)
├── justfile          # Optional task runner: `just lint`, `just format`, etc.
├── lefthook.yml      # Git hooks (format, lint, typecheck, large-files, secrets, commit-msg)
├── turbo.json        # Turborepo pipeline
├── package.json      # Root workspaces + scripts
├── .github/workflows # CI (lint, typecheck, build, test)
├── docker/           # Compose fragments (docker/compose/*.yml); root docker-compose.yml includes them
├── AGENTS.md         # Instructions for AI agents
├── PROJECT.md        # This file
├── CHANGELOG.md      # Changelog (Keep a Changelog format)
├── LICENSE-MIT       # MIT license
├── LICENSE-Apache-2.0 # Apache License 2.0 (dual license)
└── .cursor/rules/    # Cursor rules (conventions, clean code)
```

## Commands (run from root)

One interface: **`bun run <task>`** (or **`just <task>`** if [just](https://github.com/casey/just) is installed).

| Command | Purpose |
|--------|---------|
| `bun run dev` | Start dev (Turbo: Next.js, Rust, etc.) |
| `bun run build` | Build all (Turbo + C app) |
| `bun run lint` | Lint: Turbo (Biome) + scripts (ShellCheck, luacheck, ruff) |
| `bun run format` | Format: Biome + scripts (shfmt, stylua, ruff) + Rust (cargo fmt) + C (clang-format) |
| `bun run lint:fix` | Lint with auto-fix where supported |
| `bun run typecheck` | Typecheck (TS) |
| `bun run test` | Run workspace tests (Turbo + script tests) |
| `bun run test:coverage` | Run TS coverage + all language tests |
| `bun run test:e2e:web` | Run Playwright e2e for web app |

**Hono API (apps/hono-api):** Hono + Prisma default on port 8080 (configurable via `PORT`). Set `DATABASE_URL` in `apps/hono-api/.env`; see [apps/hono-api/README.md](apps/hono-api/README.md).

## Tooling and config

- **Biome**: Single formatter/linter for TS/JS; config in root `biome.json`. Covers `apps/**`, `packages/**`, and root config files.
- **Rust**: `apps/rust` uses `rust-toolchain.toml`, `rustfmt.toml`, and Clippy; run `cargo fmt`, `cargo clippy`, `cargo test` in that directory.
- **C**: `apps/c` uses `clang-format`, `clang-tidy`; run `bun run build` / `bun run format` in that directory (or `just build` / `just format` if just is installed).
- **Hono API**: `apps/hono-api` is Hono + Prisma + PostgreSQL. Run `cd apps/hono-api && bun run dev`; lint/format via Turbo. See [apps/hono-api/README.md](apps/hono-api/README.md).
- **Scripts**: `scripts/` at root: **bash** (ShellCheck, shfmt), **lua** (luacheck, stylua), **python** (ruff). Included in root `bun run lint` and `bun run format`.
- **Lefthook**: Pre-commit runs format, lint, typecheck, large-file check, secret scan; commit-msg enforces message length.
- **EditorConfig**: `.editorconfig` enforces line endings (LF), indent style, charset (UTF-8), final newline across editors.
- **CI**: `.github/workflows/ci.yml` runs split gates (lint, typecheck, coverage test, web e2e) on push/PR to `main`.
- **CD**: `.github/workflows/cd.yml` provides staged deploy workflow template for `main` and version tags.
- **Dev Container**: `.devcontainer/` provides a reproducible environment (Bun, Rust, C, Python, Lua, shellcheck, shfmt, ruff, stylua, luacheck, just). Reopen in Container in VS Code/Cursor; see `.devcontainer/README.md`.
- **Docker**: Root `docker-compose.yml` includes **`docker/compose/`** (Postgres + Hono API; API on host **3001**). Copy `env.docker.example` to `.env` and see **`docs/docker.md`**.
- **VS Code**: Project settings in `.vscode/settings.json` (e.g. `css.lint.unknownAtRules: "ignore"` for Tailwind).

## QoL stack

See **`docs/QoL.md`** for the full QoL stack (hooks, task runner, EditorConfig, CI, per-language tools).

## Conventions and clean code

- See `AGENTS.md` for universal AI agent instructions (works with any AI tool).
- See `.cursor/rules/` for Cursor-specific rules (mirrors content from `AGENTS.md`).
- See `docs/architecture/README.md` for enforced architecture boundaries and layering.
- See `docs/overrides.md` for project-specific architecture override policy.
- Use workspace packages as `@starter/<package-name>` (e.g. `@starter/ui`, `@starter/tailwind-config`).
