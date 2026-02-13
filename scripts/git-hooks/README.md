# Git hooks (Lefthook)

Hooks are wired in root `lefthook.yml`. After clone/install run `bun run prepare` to install.

## Pre-commit

| Step | What it does |
|------|----------------|
| **trailing-whitespace** | Strips trailing WS from staged text files and re-stages |
| **format** | `bun run format` (Biome) |
| **lint** | `bun run lint:fix` (Biome) |
| **typecheck** | `bun run typecheck` |
| **large-files** | Fails if any staged file &gt; 2MB (override: `MAX_SIZE_MB=1`) |
| **secrets** | Greps staged diff for private keys, AWS-style keys, `api_key`/`password` assignments |

## Commit-msg

- First line must be at least 10 characters (override: `COMMIT_MSG_MIN_LEN=20`).
- Merge, Revert, fixup!, squash! messages are allowed as-is.

## Optional: stronger secret scanning

For deeper scanning (e.g. high-entropy strings), install [gitleaks](https://github.com/gitleaks/gitleaks) and add a pre-commit step that runs `gitleaks protect --staged --no-banner`.
