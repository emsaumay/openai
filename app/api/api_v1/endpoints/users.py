```python
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api import deps
from app.core import security

router = APIRouter()


@router.post("/", response_model=schemas.User)
def create_user(
    *,
    db: Session = Depends(deps.get_db),
    user_in: schemas.UserCreate,
    current_user: schemas.User = Depends(deps.get_current_active_admin),
):
    user = crud.user.get_by_email(db, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system.",
        )
    user = crud.user.create(db, obj_in=user_in)
    return user


@router.get("/", response_model=List[schemas.User])
def read_users(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: schemas.User = Depends(deps.get_current_active_user),
):
    users = crud.user.get_multi(db, skip=skip, limit=limit)
    return users


@router.get("/{user_id}", response_model=schemas.User)
def read_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
    current_user: schemas.User = Depends(deps.get_current_active_user),
):
    user = crud.user.get(db, id=user_id)
    if user == current_user or current_user.role == security.Role.admin:
        return user
    raise HTTPException(status_code=400, detail="Not enough permissions")


@router.put("/{user_id}", response_model=schemas.User)
def update_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
    user_in: schemas.UserUpdate,
    current_user: schemas.User = Depends(deps.get_current_active_user),
):
    user = crud.user.get(db, id=user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )
    if user != current_user and not current_user.role == security.Role.admin:
        raise HTTPException(status_code=400, detail="Not enough permissions")
    user = crud.user.update(db, db_obj=user, obj_in=user_in)
    return user


@router.delete("/{user_id}", response_model=schemas.User)
def delete_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int,
    current_user: schemas.User = Depends(deps.get_current_active_user),
):
    user = crud.user.get(db, id=user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )
    if user != current_user and not current_user.role == security.Role.admin:
        raise HTTPException(status_code=400, detail="Not enough permissions")
    user = crud.user.remove(db, id=user_id)
    return user
```