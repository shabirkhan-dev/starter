"""SQLAlchemy declarative base and common column types."""

from sqlalchemy import Integer, String
from sqlalchemy.orm import DeclarativeBase, Mapped
from sqlalchemy.orm import mapped_column as _mapped_column


class Base(DeclarativeBase):
    pass


def int_pk() -> Mapped[int]:
    return _mapped_column(Integer, primary_key=True, autoincrement=True)


def str_required(max_length: int = 255) -> Mapped[str]:
    return _mapped_column(String(max_length), nullable=False)
