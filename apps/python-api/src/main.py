"""FastAPI app: lifespan, routers."""

from contextlib import asynccontextmanager

from fastapi import FastAPI

from src.api.auth import router as auth_router
from src.database import init_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield


app = FastAPI(
    title="Starter API",
    description="FastAPI + PostgreSQL + auth",
    version="0.1.0",
    lifespan=lifespan,
)

app.include_router(auth_router)


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}
