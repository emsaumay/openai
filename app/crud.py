```python
from sqlalchemy.orm import Session
from . import models, schemas
from .core.security import verify_password, get_password_hash

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_entries(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Entry).offset(skip).limit(limit).all()

def create_user_entry(db: Session, entry: schemas.EntryCreate, user_id: int):
    db_entry = models.Entry(**entry.dict(), owner_id=user_id)
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry

def get_entries_by_user(db: Session, user_id: int, skip: int = 0, limit: int = 100):
    return db.query(models.Entry).filter(models.Entry.owner_id == user_id).offset(skip).limit(limit).all()

def update_entry(db: Session, entry: schemas.EntryUpdate, entry_id: int):
    db_entry = db.query(models.Entry).filter(models.Entry.id == entry_id).first()
    if db_entry is None:
        return None
    for var, value in vars(entry).items():
        setattr(db_entry, var, value) if value else None
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry

def delete_entry(db: Session, entry_id: int):
    db_entry = db.query(models.Entry).filter(models.Entry.id == entry_id).first()
    if db_entry is None:
        return None
    db.delete(db_entry)
    db.commit()
    return db_entry
```