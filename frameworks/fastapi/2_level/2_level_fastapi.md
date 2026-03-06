# Content of Python FastAPI Level 2

- [Validation with Path, Query, and Pydantic](#validation-with-path-query-and-pydantic)
- [Request body models](#request-body-models)
- [Router](#router)

In **Python FastAPI Level 1**, we handled incoming data manually. Values coming from the URL were received as strings, and we explicitly converted them, validated them, and raised errors when something went wrong. This made the request flow clear, but it also introduced repetitive code.

In this level, FastAPI takes over some of that repetitive work. Input is still coming from the same places, but validation and conversion happen before route logic runs. Instead of focusing on how values are transformed, we focus on how routes declare what they expect.

We start by looking at how FastAPI validates values coming from the URL.

## Validation with Path, Query and Pydantic

In **Python FastAPI Level 1**, values coming from the URL were accepted as raw text and validated manually inside the route logic. In this level, validation is moved to the framework layer.

FastAPI provides explicit tools for validating values coming from the URL. These tools describe **constraints**, **requirements**, **defaults** and FastAPI enforces them before the route logic runs.

In code, this is commonly written with `Annotated`. The type stays visible, and the validation rules are attached to that type.

Validation rules for path parameters are defined using `Path`.

```py
from typing import Annotated
from fastapi import FastAPI, Path

app = FastAPI()

@app.get("/books/{book_id}", response_model=BookOut)
def get_book(book_id: Annotated[int, Path(gt=0)]):
    return {"book_id": book_id}
```

In this example, `book_id` must be present and must be greater than zero. If a request is sent with a missing or invalid value, FastAPI rejects the request automatically and the function is never executed.

Path parameters are always required. Validation rules describe what values are acceptable, not whether the value exists.

Query parameters are validated using `Query`.

```py
from typing import List
from fastapi import FastAPI, Query

@app.get("/books", response_model=List[BookOut])
def list_books(
    search: Annotated[str | None, Query(min_length=3, max_length=50)] = None,
    limit: Annotated[int, Query(gt=0, le=100)] = 10,
    offset: Annotated[int, Query(ge=0)] = 0,
):
    return {"limit": limit, "offset": offset}
```

Here, `search`, `limit` and `offset` are optional, but constrained. If a client provides values outside the allowed range, FastAPI returns an error response automatically.

The `= None` default is required when declaring an optional parameter. Without a default value, FastAPI would treat the parameter as required and reject requests where the parameter is missing.

If a query parameter is omitted, the default value is used. If a value is provided but violates a rule, the request is rejected.

Validation also applies to **structured data sent in the request body**. Instead of `Path` or `Query`, request bodies are validated using **Pydantic models**.

```py
from pydantic import BaseModel, Field

class BookCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    author: str = Field(..., min_length=1)
    year: int = Field(..., ge=0)
    genre: str
    pages: int = Field(..., gt=0)
    price: float = Field(..., gt=0)
    in_stock: bool = True
```

This schema defines the expected structure of the request body when creating a new book. FastAPI reads the JSON body, validates it, converts values when needed, and constructs a `BookCreate` object before the route function runs.

```py
@app.post("/books", status_code=201, response_model=BookOut)
def create_book(payload: BookCreate):
    return payload
```

If the client sends invalid data such as a negative price, missing title, or incorrect type, FastAPI automatically returns a validation error response.

Sometimes request body fields need additional validation rules beyond simple types. Pydantic provides specialized types such as `EmailStr` and additional constraints using `Field`.

```py
from pydantic import BaseModel, EmailStr, Field

class AuthorCreate(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
```

In this example, `email` must be a valid email address. If the client sends an invalid email, the request is rejected automatically.

String fields can also be validated using patterns. A pattern is a **regular expression** that defines what the value must look like.

```py
from pydantic import BaseModel, Field

class BookCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    isbn: str = Field(..., pattern=r"^\d{13}$")
```

In this example, isbn must contain exactly `13` digits. If the client sends a value that does not match the pattern, validation fails and FastAPI returns an error response.

Path, query, and body validation can also be combined.

```py
@app.put("/books/{book_id}", response_model=BookOut)
def update_book_price(
    book_id: Annotated[int, Path(gt=0)],
    price: Annotated[float, Query(gt=0)],
):
    return {"book_id": book_id, "price": price}
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

class BookCreate(BaseModel):
    title: str
    author: str
    year: int
    genre: str
    pages: int
    price: float
    in_stock: bool = True
```

When this model is used in a route, FastAPI reads the request body and constructs an `Book` object before the function executes.

```py
@app.post("/books", status_code=201, response_model=BookOut)
def create_book_route(book: BookCreate):
    return book
```

If a client sends a request with this JSON body

```json
{
  "title": "Clean Code",
  "price": 39.99
}
```

FastAPI parses the JSON and creates a `BookCreate` instance. The route function receives a Python object instead of raw JSON.

If the incoming data does not match the model structure, the request is rejected automatically and the function is not called.

A field without a default value is required. A field with a default value is optional.

```py
class Item(BaseModel):
    title: str
    author: str
    year: int
    genre: str
    pages: int
    price: float
    description: str = ""
    in_stock: bool = True
```

If the client sends

```json
{
  "title": "Clean Code",
  "price": 39.99
}
```

`description` field is missing, so the default value is used.

Models can also represent nested structures by using other models as fields.

```py
class Author(BaseModel):
    name: str
    email: str

class Book(BaseModel):
    title: str
    author: Author
    year: int
    genre: str
    pages: int
    price: float
    description: str = ""
    in_stock: bool = True
```

This allows structured request bodies such as

```json
{
  "title": "Clean Code",
  "price": 39.99,
  "author": {
    "name": "Robert Martin",
    "email": "unclebob@example.com"
  }
}
```

When this request is sent, FastAPI parses the JSON body and constructs nested Python objects. The outer object becomes a `Book` instance, and the nested object becomes an `Author` instance. Validation is applied to both models before the route logic runs.

Nested models are especially useful when representing related data. In applications, this often mirrors relationships in a database. For example, a book may belong to an author stored in a separate table.

In **Database Level 2**, we will see how Pydantic models interact with SQLAlchemy models and how nested Pydantic structures can correspond to relationships between database tables.

Sometimes you want the API to reject unknown fields instead of ignoring them. This can be configured so the model only accepts fields that are declared.

For example, this request would normally still succeed even though `pages` is not defined in the model.

```json
{
  "title": "Clean Code",
  "price": 39.99,
  "pages": 464
}
```

If the application should reject unexpected fields, the model can be configured to forbid them.

```py
from pydantic import BaseModel, ConfigDict

class Book(BaseModel):
    title: str
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
