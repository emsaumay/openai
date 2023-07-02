```python
import requests
from typing import Optional

class CaloriesAPI:
    BASE_URL = "https://api.nutritionix.com/v1_1/search"

    @classmethod
    def get_calories(cls, meal: str) -> Optional[int]:
        payload = {
            "appId": "YOUR_APP_ID",
            "appKey": "YOUR_APP_KEY",
            "query": meal
        }
        response = requests.post(cls.BASE_URL, json=payload)
        data = response.json()

        if response.status_code != 200 or not data['hits']:
            return None

        return int(data['hits'][0]['fields']['nf_calories'])
```