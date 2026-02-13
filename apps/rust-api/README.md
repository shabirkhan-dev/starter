# Starter Rust API

Axum API with **PostgreSQL** (SQLx) and **auth**: register, login, JWT-protected `/auth/me`. Stack: axum, tokio, serde, sqlx, tracing.

## Prerequisites

- Rust (e.g. `rustup`)
- PostgreSQL running (e.g. `localhost:5432`)

## Setup

```bash
cd apps/rust-api
cp .env.example .env   # set DATABASE_URL, SECRET_KEY
```

Create a DB and set `DATABASE_URL` in `.env`, e.g.:

`postgresql://user:password@localhost:5432/starter`

## Run

```bash
cargo run
```

Listens on **0.0.0.0:8001** (port 8001 to avoid clash with python-api on 8000). Or from repo root: `bun run dev` (Turbo runs all apps).

## Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| POST | `/auth/register` | Create user (email, username, password) |
| POST | `/auth/login` | Login (email, password) → JWT |
| GET | `/auth/me` | Current user (Authorization: Bearer &lt;token&gt;) |

## QoL

- **Lint:** `cargo clippy -- -D warnings` (or from root: `bun run lint` via Turbo)
- **Format:** `cargo fmt` (or root: `bun run format`)
