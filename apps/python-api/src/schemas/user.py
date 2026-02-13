"""User Pydantic schemas for request/response."""

from pydantic import BaseModel, EmailStr, Field


class UserBase(BaseModel):
    email: EmailStr
    username: str = Field(..., min_length=1, max_length=64)


class UserCreate(UserBase):
    password: str = Field(..., min_length=8, max_length=128)


class UserResponse(UserBase):
    id: int
    is_active: bool = True

    model_config = {"from_attributes": True}
