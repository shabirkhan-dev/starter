# personal-os scripts (Bash)

Bash scripts live in **`scripts/`** at repo root. Same goodies: ShellCheck, shfmt.

## Prerequisites

- Bash
- Optional: **ShellCheck**, **shfmt** (e.g. `sudo pacman -S shellcheck shfmt`)

## Commands (from root)

| Command | Purpose |
|---------|---------|
| `bun run scripts:lint` | ShellCheck on `scripts/*.sh` |
| `bun run scripts:format` | shfmt -i 4 on `scripts/*.sh` |
| `bun run scripts:run` | Run `scripts/main.sh` |

## QoL / goodies

- **.shellcheckrc** – ShellCheck options (e.g. disable SC2034).
- **shfmt** – Format with 4-space indent via `bun run scripts:format`.
- **main.sh** – `set -euo pipefail`; add more `.sh` files in `scripts/` as needed.
