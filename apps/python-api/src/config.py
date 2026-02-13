"""App settings from environment."""

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    database_url: str = "postgresql+asyncpg://user:password@localhost:5432/starter"
    secret_key: str = "change-me-in-production-min-32-chars"
    access_token_expire_minutes: int = 30


settings = Settings()
