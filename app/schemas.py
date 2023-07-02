```python
from typing import Optional
from pydantic import BaseModel
from datetime import datetime
from enum import Enum

class Role(str, Enum):
    user = "user"
    user_manager = "user_manager"
    admin = "admin"

class UserBase(BaseModel):
    email: str
    role: Role = Role.user
    expected_calories_per_day: int

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True

class EntryBase(BaseModel):
    date: datetime
    time: datetime
    text: str
    calories: Optional[int] = None

class EntryCreate(EntryBase):
    pass

class Entry(EntryBase):
    id: int
    owner_id: int
    is_less_than_expected: bool

    class Config:
        orm_mode = True
```