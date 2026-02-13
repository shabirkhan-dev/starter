# Starter API

FastAPI app with **PostgreSQL** (async SQLAlchemy + asyncpg) and **auth**: register, login, JWT-protected `/auth/me`.

## Prerequisites

- [uv](https://docs.astral.sh/uv/) (recommended) or Python 3.11+
- PostgreSQL running (e.g. `localhost:5432`)

## Setup

```bash
cd apps/python-api
cp .env.example .env   # set DATABASE_URL, SECRET_KEY
uv sync                # or: pip install -e .
```

Create a DB and set `DATABASE_URL` in `.env`, e.g.:

`postgresql+asyncpg://user:password@localhost:5432/starter`

## Run

```bash
uv run uvicorn src.main:app --reload --host 0.0.0.0 --port 8000
```

Or from repo root: `bun run dev` (Turbo runs all apps; API is on port 8000).

## Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| POST | `/auth/register` | Create user (email, username, password) |
| POST | `/auth/login` | Login (email, password) → JWT |
| GET | `/auth/me` | Current user (Bearer token) |

## QoL

- **Lint:** `uv run ruff check .` (or from root: `bun run lint` via Turbo)
- **Format:** `uv run ruff format .` (or root: `bun run format`)
