# Content of Python FastAPI Level 3

- [Router](#router)

## Router

As an application grows, placing all routes directly on the application object becomes hard to manage. Routes that belong together conceptually still end up mixed in the same file.

FastAPI provides routers to group related routes without changing how requests are handled.

A router behaves like a smaller application. Routes are attached to the router instead of the main application. The router is then included into the application.

```py
from fastapi import FastAPI, APIRouter

app = FastAPI()
router = APIRouter()

@router.get("/items")
def get_items():
    return ["item1", "item2"]

@router.post("/items")
def create_item():
    return {"status": "created"}

app.include_router(router)
```

In this setup, the routes are defined on the router, not on the application object. When the router is included, its routes become part of the application.

Routers do not change request handling behavior. Validation, execution, and response generation work exactly the same way as with routes defined directly on the application.

The purpose of a router is organization. It allows related routes to be grouped together and moved into separate files without affecting how the application behaves.
