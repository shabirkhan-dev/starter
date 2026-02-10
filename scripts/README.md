# Starter Kit scripts

Scripts live under **`scripts/`** at repo root, organized by language: **bash**, **lua**, **python**.

## Layout

```
scripts/
├── bash/           # Bash – ShellCheck, shfmt
│   ├── main.sh
│   └── .shellcheckrc
├── lua/            # Lua – luacheck, stylua
│   ├── main.lua
│   ├── .luacheckrc
│   └── .stylua.toml
├── python/         # Python – ruff (lint + format)
│   ├── main.py
│   └── pyproject.toml
└── README.md       # This file
```

## Commands (from root)

| Command | Purpose |
|---------|---------|
| `bun run scripts:lint` | Lint bash (ShellCheck), lua (luacheck), python (ruff) |
| `bun run scripts:format` | Format bash (shfmt), lua (stylua), python (ruff format) |
| `bun run scripts:run` | Run bash main script (same as `scripts:run:bash`) |
| `bun run scripts:run:bash` | Run `scripts/bash/main.sh` |
| `bun run scripts:run:lua` | Run `scripts/lua/main.lua` |
| `bun run scripts:run:python` | Run `scripts/python/main.py` |

## Prerequisites

- **Bash** – for `scripts/bash`
- **Lua** – for `scripts/lua` (e.g. `pacman -S lua`)
- **Python 3.11+** – for `scripts/python`

Optional (for lint/format):

- Bash: **ShellCheck**, **shfmt** (e.g. `pacman -S shellcheck shfmt`)
- Lua: **luacheck**, **stylua** (e.g. `luarocks install luacheck`, `cargo install stylua` or `pacman -S lua-stylua`)
- Python: **ruff** (e.g. `pip install ruff` or `pacman -S ruff`)

## QoL / goodies

- **bash** – `.shellcheckrc`, shfmt 4-space indent.
- **lua** – `.luacheckrc` (std lua54, line length 100), `.stylua.toml` (format).
- **python** – `pyproject.toml` (ruff + black-style line-length 100, Python 3.11).
