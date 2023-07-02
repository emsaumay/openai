```python
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api import deps
from app.utils import calories_api, pagination

router = APIRouter()


@router.post("/", response_model=schemas.Entry)
def create_entry(
    *,
    db: Session = Depends(deps.get_db),
    entry_in: schemas.EntryCreate,
    current_user: schemas.User = Depends(deps.get_current_active_user),
):
    if not entry_in.calories:
        entry_in.calories = calories_api.get_calories(entry_in.text)
    entry = crud.entry.create_with_owner(db=db, obj_in=entry_in, owner_id=current_user.id)
    return entry


@router.get("/", response_model=List[schemas.Entry])
def read_entries(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: schemas.User = Depends(deps.get_current_active_user),
):
    entries = crud.entry.get_multi_by_owner(
        db=db,
        owner_id=current_user.id,
        skip=skip,
        limit=limit,
    )
    return entries


@router.get("/{id}", response_model=schemas.Entry)
def read_entry(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: schemas.User = Depends(deps.get_current_active_user),
):
    entry = crud.entry.get(db=db, id=id)
    if not entry:
        raise HTTPException(
            status_code=404,
            detail="Entry not found",
        )
    if not crud.user.is_superuser(current_user) and (entry.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    return entry


@router.put("/{id}", response_model=schemas.Entry)
def update_entry(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    entry_in: schemas.EntryUpdate,
    current_user: schemas.User = Depends(deps.get_current_active_user),
):
    entry = crud.entry.get(db=db, id=id)
    if not entry:
        raise HTTPException(
            status_code=404,
            detail="Entry not found",
        )
    if not crud.user.is_superuser(current_user) and (entry.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    entry = crud.entry.update(db=db, db_obj=entry, obj_in=entry_in)
    return entry


@router.delete("/{id}", response_model=schemas.Entry)
def delete_entry(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: schemas.User = Depends(deps.get_current_active_user),
):
    entry = crud.entry.get(db=db, id=id)
    if not entry:
        raise HTTPException(
            status_code=404,
            detail="Entry not found",
        )
    if not crud.user.is_superuser(current_user) and (entry.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    entry = crud.entry.remove(db=db, id=id)
    return entry
```