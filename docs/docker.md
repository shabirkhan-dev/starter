# Docker: Postgres + Python API + Rust API

Run PostgreSQL and both APIs (Python on 8000, Rust on 8001) with Docker Compose.

## Setup

1. **Copy env file** (from repo root):

   ```bash
   cp env.docker.example .env
   ```

   Edit `.env` if needed (e.g. `SECRET_KEY`, `POSTGRES_PASSWORD`).

2. **Start Postgres, then build Rust API** (Rust image needs a reachable DB at build time):

   ```bash
   docker compose up -d postgres
   # Wait until postgres is healthy (e.g. 5–10 seconds)
   docker compose build rust-api
   ```

   Ensure `DATABASE_URL` in `.env` points to a URL the **build** container can reach (e.g. `postgresql://starter:starter@127.0.0.1:5432/starter` when using `network: host` for the build). On Mac/Windows with Docker Desktop, you may need to use `host.docker.internal` instead of `127.0.0.1` and omit `network: host` in `docker-compose.yml` if the build fails.

3. **Start all services**:

   ```bash
   docker compose up --build
   ```

   Or, if you already built:

   ```bash
   docker compose up
   ```

## Ports

| Service     | Port |
|------------|------|
| Postgres   | 5432 |
| Python API | 8000 |
| Rust API   | 8001 |

## Env file

`env.docker.example` lists:

- `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` — used by Postgres and by both APIs’ `DATABASE_URL`.
- `SECRET_KEY` — JWT signing (min 32 chars in production).
- `ACCESS_TOKEN_EXPIRE_MINUTES` — optional (default 30).
- `DATABASE_URL` — optional; only needed for **building** the Rust API image (must be reachable from the build container).

## Rust API build without Postgres

To build the Rust image without a live Postgres (e.g. in CI):

1. From repo root, with Postgres running (e.g. `docker compose up -d postgres`), run:

   ```bash
   cd apps/rust-api
   DATABASE_URL=postgresql://starter:starter@localhost:5432/starter cargo sqlx prepare
   ```

2. Commit the generated `.sqlx` directory.

3. In `apps/rust-api/Dockerfile`, use offline mode: add `COPY .sqlx ./.sqlx` and `ENV SQLX_OFFLINE=true`, and remove the `ARG DATABASE_URL` / `ENV DATABASE_URL` build step. Then `docker compose build rust-api` will work without Postgres at build time.
