from fastapi import FastAPI
from .database import Base, engine
from .api.api_v1.api import api_router

def create_application() -> FastAPI:
    application = FastAPI()
    application.include_router(api_router, prefix="/api/v1")
    return application

app = create_application()

# Create all tables in the database
Base.metadata.create_all(bind=engine)