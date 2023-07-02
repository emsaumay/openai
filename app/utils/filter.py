```python
from typing import Any, Dict
from sqlalchemy.orm import Session
from sqlalchemy import text

def apply_filters(query, model, filters: Dict[str, Any]):
    for field, value in filters.items():
        if hasattr(model, field):
            query = query.filter(text(f"{field}=:value")).params(value=value)
    return query

def get_filtered_data(db: Session, model, filters: Dict[str, Any]):
    query = db.query(model)
    query = apply_filters(query, model, filters)
    return query.all()
```