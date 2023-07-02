```python
from fastapi import APIRouter
from app.api.api_v1.endpoints import login, users, entries

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(entries.router, prefix="/entries", tags=["entries"])
```