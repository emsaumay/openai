```python
from sqlalchemy import Boolean, Column, Integer, String, DateTime, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    role = Column(String, default="user")

    entries = relationship("Entry", back_populates="owner")

class Entry(Base):
    __tablename__ = "entries"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(DateTime, index=True)
    time = Column(DateTime, index=True)
    text = Column(String, index=True)
    calories = Column(Float)
    is_less_than_expected = Column(Boolean, default=False)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="entries")
```