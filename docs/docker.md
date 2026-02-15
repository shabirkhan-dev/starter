# Docker: Postgres + Hono API

Run PostgreSQL and Hono API (port 3000) with Docker Compose.

## Setup

1. **Copy env file** (from repo root):

   ```bash
   cp env.docker.example .env
   ```

   Edit `.env` if needed (e.g. `POSTGRES_PASSWORD`).

2. **Start all services**:

   ```bash
   docker compose up --build
   ```

   Or run in background:

   ```bash
   docker compose up -d --build
   ```

## Ports

| Service   | Port |
|----------|------|
| Postgres | 5432 |
| Hono API | 3000 |

## Env file

`env.docker.example` lists:

- `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` — used by Postgres and by Hono API’s `DATABASE_URL`.
