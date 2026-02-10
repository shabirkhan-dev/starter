# Agent instructions (personal-os)

When working in this repo:

1. **Read project context**: Prefer `PROJECT.md` and `.cursor/rules/` for structure, tooling, and conventions.
2. **Tooling**: Use **Bun** for scripts and installs. Use **Biome** for lint/format (no ESLint/Prettier). Respect root `biome.json` and `lefthook.yml` (pre-commit runs `biome check --write .`).
3. **Scope**: This is a Turborepo. Apps live in `apps/` (e.g. `apps/web`), shared code in `packages/` (e.g. `packages/ui`, `packages/tailwind-config`, `packages/typescript-config`). Prefer changing shared packages when changes apply across apps.
4. **Style**: Follow rules in `.cursor/rules/` (project conventions and clean code). Use tabs, line width 100, and workspace imports like `@personal-os/ui`.
5. **Before finishing**: Ensure `bun run lint` and `bun run format` pass from repo root; don’t leave lint/format errors.
