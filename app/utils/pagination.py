```python
from typing import Generic, TypeVar, Optional
from fastapi_pagination import Page, Params
from fastapi_pagination.ext.sqlalchemy import paginate
from sqlalchemy.orm import Session

T = TypeVar("T")


class Paginator(Generic[T]):
    def __init__(self, session: Session, db_model: T):
        self.session = session
        self.db_model = db_model

    def paginate(self, params: Optional[Params] = None) -> Page[T]:
        return paginate(self.session, self.db_model, params)
```