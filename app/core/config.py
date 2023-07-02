```python
from starlette.config import Config
from starlette.datastructures import Secret

# Initialize configuration
config = Config(".env")

# Define the project settings
PROJECT_NAME = config("PROJECT_NAME", default="FastAPI Calorie Tracker")
API_V1_STR = "/api/v1"
SECRET_KEY = config("SECRET_KEY", cast=Secret, default="CHANGE_ME")
ACCESS_TOKEN_EXPIRE_MINUTES = config("ACCESS_TOKEN_EXPIRE_MINUTES", cast=int, default=30)
SQLALCHEMY_DATABASE_URI = config("SQLALCHEMY_DATABASE_URI", default="sqlite:///./app.db")

# Define the roles
ROLE_ADMIN = "admin"
ROLE_USER_MANAGER = "user_manager"
ROLE_REGULAR_USER = "regular_user"
ROLES = [ROLE_ADMIN, ROLE_USER_MANAGER, ROLE_REGULAR_USER]

# Define the calories API
CALORIES_API_URL = config("CALORIES_API_URL", default="https://www.nutritionix.com")
```