```python
from typing import Any, Dict, Optional, Union

from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.core.security import get_password_hash, verify_password
from app.utils.calories_api import get_calories


class UserService:
    def __init__(self, db: Session):
        self.db = db

    def create_user(self, user_in: schemas.UserCreate) -> models.User:
        user = models.User(
            email=user_in.email,
            hashed_password=get_password_hash(user_in.password),
            is_active=True,
            is_superuser=user_in.is_superuser,
        )
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

    def authenticate_user(self, email: str, password: str) -> Optional[models.User]:
        user = crud.user.get_by_email(self.db, email=email)
        if not user:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user


class EntryService:
    def __init__(self, db: Session):
        self.db = db

    def create_entry(self, entry_in: schemas.EntryCreate, user_id: int) -> models.Entry:
        calories = entry_in.calories
        if not calories:
            calories = get_calories(entry_in.text)

        entry = models.Entry(
            date=entry_in.date,
            time=entry_in.time,
            text=entry_in.text,
            calories=calories,
            owner_id=user_id,
        )
        self.db.add(entry)
        self.db.commit()
        self.db.refresh(entry)
        return entry

    def update_entry(self, entry: models.Entry, entry_in: Union[schemas.EntryUpdate, Dict[str, Any]]) -> models.Entry:
        entry_data = entry_in if isinstance(entry_in, dict) else entry_in.dict(exclude_unset=True)
        for field, value in entry_data.items():
            setattr(entry, field, value)
        self.db.commit()
        self.db.refresh(entry)
        return entry
```