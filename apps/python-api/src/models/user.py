"""User SQLAlchemy model."""

from sqlalchemy.orm import Mapped, mapped_column

from src.models.base import Base, int_pk, str_required


class User(Base):
    __tablename__ = "users"

    id: Mapped[int_pk]
    email: Mapped[str_required]
    username: Mapped[str_required]
    hashed_password: Mapped[str_required]
    is_active: Mapped[bool] = mapped_column(default=True)

    def __repr__(self) -> str:
        return f"User(id={self.id}, email={self.email!r})"
