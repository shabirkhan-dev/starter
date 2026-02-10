# personal-os – Project overview

## What this is

Monorepo for the personal-os product: Next.js app(s), shared UI, and shared config. Managed with Turborepo and Bun.

## Repository layout

```
personal-os/
├── apps/
│   ├── web/          # Next.js app (main app)
│   ├── rust/         # Rust binary (Cargo; run via cargo or Turbo)
│   └── c/            # C binary (justfile; clang-format, clang-tidy)
├── scripts/          # Scripts by language: bash/, lua/, python/ (ShellCheck, shfmt, luacheck, stylua, ruff)
├── packages/
│   ├── ui/           # Shared React UI (shadcn-style components)
│   ├── tailwind-config/  # Shared Tailwind theme (e.g. theme.css)
│   └── typescript-config/  # Shared tsconfig bases
├── biome.json        # Lint + format (Biome)
├── lefthook.yml      # Git hooks (pre-commit: biome check --write)
├── turbo.json        # Turborepo pipeline
├── package.json      # Root workspaces + scripts
├── AGENTS.md         # Instructions for AI agents
├── PROJECT.md        # This file
└── .cursor/rules/    # Cursor rules (conventions, clean code)
```

## Commands (run from root)

| Command | Purpose |
|--------|---------|
| `bun run dev` | Start dev (e.g. Next.js in apps/web) |
| `bun run build` | Build all apps/packages |
| `bun run lint` | Lint via Turbo (Biome where configured) |
| `bun run format` | Format with Biome (TS/JS); Rust: `cargo fmt` in `apps/rust`; C: `just format` in `apps/c`; Shell: `bun run scripts:format` |
| `bun run lint:fix` | Lint with auto-fix where supported |
| `bun run dev` / `bun run build` | Turbo runs dev/build for all apps (including `apps/rust` if scripts exist) |

## Tooling and config

- **Biome**: Single formatter/linter for TS/JS; config in root `biome.json`. Covers `apps/**`, `packages/**`, and root config files.
- **Rust**: `apps/rust` uses `rust-toolchain.toml`, `rustfmt.toml`, and Clippy; run `cargo fmt`, `cargo clippy`, `cargo test` in that directory.
- **C**: `apps/c` uses justfile, `.clang-format`, `.clang-tidy`; run `just build`, `just run`, `just lint`, `just format` in that directory (requires [just](https://github.com/casey/just)).
- **Scripts**: `scripts/` at root: **bash** (ShellCheck, shfmt), **lua** (luacheck, stylua), **python** (ruff). Run `bun run scripts:lint`, `bun run scripts:format`, `bun run scripts:run` (or `scripts:run:bash`, `scripts:run:lua`, `scripts:run:python`) from root.
- **Lefthook**: Pre-commit runs `biome check --write .`.
- **VS Code**: Project settings in `.vscode/settings.json` (e.g. `css.lint.unknownAtRules: "ignore"` for Tailwind).

## Conventions and clean code

- See `.cursor/rules/` for project conventions and clean-code guidelines.
- Use workspace packages as `@personal-os/<package-name>` (e.g. `@personal-os/ui`, `@personal-os/tailwind-config`).
