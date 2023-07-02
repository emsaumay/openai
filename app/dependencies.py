```python
from typing import Generator
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from app import crud, models
from app.core import security
from app.database import SessionLocal
from app.core.config import settings

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl=f"{settings.API_V1_STR}/login/access-token"
)

def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

def get_current_user(
    db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)
) -> models.User:
    try:
        payload = security.decode_access_token(token)
        user = crud.user.get(db, id=payload.sub)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

def get_current_active_user(current_user: models.User = Depends(get_current_user)) -> models.User:
    if not crud.user.is_active(current_user):
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

def get_current_active_superuser(current_user: models.User = Depends(get_current_user)) -> models.User:
    if not crud.user.is_superuser(current_user):
        raise HTTPException(status_code=400, detail="The user doesn't have enough privileges")
    return current_user
```