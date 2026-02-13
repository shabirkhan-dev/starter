# Starter Kit – Project overview

## What this is

Monorepo starter kit for your projects: Next.js app(s), shared UI, and shared config. Managed with Turborepo and Bun.

## Repository layout

```
starter/
├── apps/
│   ├── web/          # Next.js app (main app)
│   ├── rust/         # Rust binary (Cargo; run via cargo or Turbo)
│   └── c/            # C binary (justfile; clang-format, clang-tidy)
├── scripts/          # Scripts by language: bash/, lua/, python/ (ShellCheck, shfmt, luacheck, stylua, ruff)
├── packages/
│   ├── ui/           # Shared React UI (shadcn-style components)
│   ├── tailwind-config/  # Shared Tailwind theme (e.g. theme.css)
│   └── typescript-config/  # Shared tsconfig bases
├── .editorconfig     # Editor consistency (line endings, indent, charset)
├── biome.json        # Lint + format (Biome)
├── justfile          # Optional task runner: `just lint`, `just format`, etc.
├── lefthook.yml      # Git hooks (format, lint, typecheck, large-files, secrets, commit-msg)
├── turbo.json        # Turborepo pipeline
├── package.json      # Root workspaces + scripts
├── .github/workflows # CI (lint, typecheck, build, test)
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
| `bun run test` | Run tests (e.g. `cargo test` in apps/rust) |

## Tooling and config

- **Biome**: Single formatter/linter for TS/JS; config in root `biome.json`. Covers `apps/**`, `packages/**`, and root config files.
- **Rust**: `apps/rust` uses `rust-toolchain.toml`, `rustfmt.toml`, and Clippy; run `cargo fmt`, `cargo clippy`, `cargo test` in that directory.
- **C**: `apps/c` uses `clang-format`, `clang-tidy`; run `bun run build` / `bun run format` in that directory (or `just build` / `just format` if just is installed).
- **Scripts**: `scripts/` at root: **bash** (ShellCheck, shfmt), **lua** (luacheck, stylua), **python** (ruff). Included in root `bun run lint` and `bun run format`.
- **Lefthook**: Pre-commit runs format, lint, typecheck, large-file check, secret scan; commit-msg enforces message length.
- **EditorConfig**: `.editorconfig` enforces line endings (LF), indent style, charset (UTF-8), final newline across editors.
- **CI**: `.github/workflows/ci.yml` runs lint, typecheck, build, test on push/PR to `main`.
- **VS Code**: Project settings in `.vscode/settings.json` (e.g. `css.lint.unknownAtRules: "ignore"` for Tailwind).

## QoL stack

See **`docs/QoL.md`** for the full QoL stack (hooks, task runner, EditorConfig, CI, per-language tools).

## Conventions and clean code

- See `.cursor/rules/` for project conventions and clean-code guidelines.
- Use workspace packages as `@starter/<package-name>` (e.g. `@starter/ui`, `@starter/tailwind-config`).
