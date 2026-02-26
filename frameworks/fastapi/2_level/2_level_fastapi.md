# Content of Python FastAPI Level 2

- [Path and query parameter validation](#path-and-query-parameter-validation)
- [Request body models](#request-body-models)
- [Routere](#router)

In **Python FastAPI Level 1**, we handled incoming data manually. Values coming from the URL were received as strings, and we explicitly converted them, validated them, and raised errors when something went wrong. This made the request flow clear, but it also introduced repetitive code.

In this level, FastAPI takes over some of that repetitive work. Input is still coming from the same places, but validation and conversion happen before route logic runs. Instead of focusing on how values are transformed, we focus on how routes declare what they expect.

We start by looking at how FastAPI validates values coming from the URL.

## Path and query parameter validation

In **Python FastAPI Level 1**, values coming from the URL were accepted as raw text and validated manually inside the route logic. In this level, validation is moved to the framework layer.

FastAPI provides explicit tools for validating values coming from the URL. These tools describe **constraints**, **requirements**, and **defaults**, and FastAPI enforces them before the route logic runs.

Validation rules for path parameters are defined using Path.

```py
from fastapi import FastAPI, Path

app = FastAPI()

@app.get("/items/{item_id}")
def get_item(item_id = Path(..., gt=0)):
    return {"item_id": item_id}
```

In this example, `item_id` must be present and must be greater than zero. If a request is sent with a missing or invalid value, FastAPI rejects the request automatically and the function is never executed.

Path parameters are always required. Validation rules describe what values are acceptable, not whether the value exists.

Query parameters are validated using `Query`.

```py
from fastapi import FastAPI, Query

@app.get("/items")
def list_items(
    limit = Query(10, gt=0, le=100),
    offset = Query(0, ge=0),
):
    return {"limit": limit, "offset": offset}
```

Here, `limit` and `offset` are optional, but constrained. If a client provides values outside the allowed range, FastAPI returns an error response automatically.

If a query parameter is omitted, the default value is used. If a value is provided but violates a rule, the request is rejected.

Path and query parameters can be combined.

```py
@app.get("/categories/{category_id}/items")
def category_items(
    category_id = Path(..., gt=0),
    limit = Query(10, gt=0),
):
    return {"category_id": category_id, "limit": limit}
```

Routing is still determined only by the path and HTTP method. Validation affects whether the request is allowed to reach the route logic.

At this level, it is enough to understand that FastAPI validates URL input declaratively. Instead of writing checks inside the function, constraints are declared at the boundary of the application.

In the next section, we will apply the same idea to structured data sent in the request body.

## Request body models

In **Python FastAPI Level 1**, request bodies were introduced as structured input. In this level, we expand the idea and focus on how request body models control shape, defaults, and strictness.

A request body model defines which fields are expected in the incoming data.

```py
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
```

When this model is used in a route, FastAPI reads the request body and constructs an `Item` object before the function executes.

```py
@app.post("/items")
def create_item(item: Item):
    return item
```

If the incoming data does not match the model structure, the request is rejected automatically and the function is not called.

A field without a default value is required. A field with a default value is optional.

```py
class Item(BaseModel):
    name: str
    price: float
    description: str = ""
```

If `description` is missing, the default value is used.

Models can also represent nested structures by using other models as fields.

```py
class Owner(BaseModel):
    username: str
    email: str

class Item(BaseModel):
    name: str
    price: float
    owner: Owner
```

This makes the expected request body structure explicit, and validation is applied to the whole nested input.

Sometimes you want the API to reject unknown fields instead of ignoring them. This can be configured so the model only accepts fields that are declared.

```py
from pydantic import BaseModel, ConfigDict

class Item(BaseModel):
    name: str
    price: float

    model_config = ConfigDict(extra="forbid")
```

With this configuration, sending any extra fields causes the request to be rejected before route logic runs.

Request body models define what data is allowed to enter the application. Once the data has passed validation and the route logic runs, the next responsibility of the application is deciding **how the result is returned** to the client.

That responsibility still belongs to the route. As the number of routes grows, the next concern becomes how those routes are organized within the application.

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
