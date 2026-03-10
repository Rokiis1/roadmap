# Content of Python FastAPI Level 2

- [Validation with Path, Query, and Pydantic](#validation-with-path-query-and-pydantic)
- [Request body models](#request-body-models)

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

After defining database models and relationships in **Database Level 2**, the next step is connecting those models to the API layer. In FastAPI, this connection is handled through **Pydantic schemas**.

Schemas serve two purposes in the route layer.

Request schemas define what data the client is allowed to send, and response schemas define what data the API returns to the client.

The following schemas represent authors, categories, and books.

```py
from typing import List, Optional
from pydantic import BaseModel, ConfigDict, Field

class AuthorCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)


class AuthorOut(BaseModel):
    id: int
    name: str

    model_config = ConfigDict(from_attributes=True)


class CategoryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=50)


class CategoryOut(BaseModel):
    id: int
    name: str

    model_config = ConfigDict(from_attributes=True)


class BookCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    year: int = Field(..., ge=0, le=2100)
    genre: str = Field(..., min_length=1, max_length=50)
    pages: int = Field(..., gt=0)
    price: float = Field(..., gt=0)
    in_stock: bool = True

    author_id: int = Field(..., gt=0)
    category_ids: List[int] = Field(default_factory=list)


class BookUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=200)
    year: Optional[int] = Field(None, ge=0, le=2100)
    genre: Optional[str] = Field(None, min_length=1, max_length=50)
    pages: Optional[int] = Field(None, gt=0)
    price: Optional[float] = Field(None, gt=0)
    in_stock: Optional[bool] = None
    author_id: Optional[int] = Field(None, gt=0)
    category_ids: Optional[List[int]] = None


class BookOut(BaseModel):
    id: int
    title: str
    year: int
    genre: str
    pages: int
    price: float
    in_stock: bool
    author: AuthorOut
    categories: List[CategoryOut]

    model_config = ConfigDict(from_attributes=True)
```

This structure separates input models from output models.

`AuthorCreate`, `CategoryCreate`, and `BookCreate` describe data that can enter the application. These models validate incoming request bodies.

`AuthorOut`, `CategoryOut`, and `BookOut` describe data that leaves the application. These models define the shape of API responses.

This separation is useful because clients usually send references when creating or updating records, but APIs often return expanded related data in responses.

A create route might look like this.

```py
@app.post("/books", status_code=201, response_model=BookOut)
async def create_book_route(
    payload: BookCreate,
    db: AsyncSession = Depends(get_db),
):
    author = await db.get(Author, payload.author_id)
    if author is None:
        raise HTTPException(status_code=404, detail="Author not found")

    categories = []
    if payload.category_ids:
        stmt = select(Category).where(Category.id.in_(payload.category_ids))
        result = await db.execute(stmt)
        categories = result.scalars().all()

    book_data = payload.model_dump(exclude={"category_ids"})
    new_book = Book(**book_data)

    new_book.categories = categories

    db.add(new_book)
    await db.commit()
    await db.refresh(new_book)

    return new_book
```

The request body must match the `BookCreate` schema.

A client request body could look like this.

```json
{
  "title": "Clean Code",
  "year": 2008,
  "genre": "Programming",
  "pages": 464,
  "price": 39.99,
  "in_stock": true,
  "author_id": 1,
  "category_ids": [1, 2]
}
```

FastAPI reads the JSON body, validates it against `BookCreate`, and constructs a Python object before the route logic runs.

The route can then use `author_id` and `category_ids` to load related records from the database and create the Book record.

Even though the request body is flat, the response can be nested because the route declares `response_model=BookOut`.

A list route can be implemented in different ways depending on what the query needs.

One common approach is to load related objects using `selectinload()`.

```py
@app.get("/books", response_model=list[BookOut])
async def list_books_route(
    db: AsyncSession = Depends(get_db),
):
    statement = (
        select(Book)
        .options(selectinload(Book.author), selectinload(Book.categories))
    )
    result = await db.execute(statement)
    books = result.scalars().unique().all()
    return books
```

This approach returns `Book` ORM objects and loads the related `author` and `categories` objects in additional coordinated queries. It is often a good choice when returning many rows, especially when one of the relationships is a collection such as `categories`.

Another approach is to use `joinedload()`.

```py
@app.get("/books-with-joined-author", response_model=list[BookOut])
async def list_books_with_joined_author_route(
    db: AsyncSession = Depends(get_db),
):
    statement = (
        select(Book)
        .options(joinedload(Book.author), selectinload(Book.categories))
    )
    result = await db.execute(statement)
    books = result.scalars().unique().all()
    return books
```

Here, the related `author` object is loaded using a SQL JOIN as part of the main query, while `categories` are still loaded with `selectinload()`. This can be useful when loading a single related object together with each main row.

A different case appears when the query must filter across a related table. In that situation, `join()` is used because it changes which rows are selected.

```py
@app.get("/authors/{author_name}/books", response_model=list[BookOut])
async def list_books_by_author_name_route(
    author_name: str,
    db: AsyncSession = Depends(get_db),
):
    statement = (
        select(Book)
        .join(Book.author)
        .where(Author.name == author_name)
        .options(joinedload(Book.author), selectinload(Book.categories))
    )
    result = await db.execute(statement)
    books = result.scalars().unique().all()
    return books
```

In this example, `join(Book.author)` is needed because the filter depends on the Author table. The loading options are still used so the returned ORM objects already contain the related data required by BookOut.

These query styles solve different problems.

`join()` is used when the related table affects **filtering**, **sorting**, or **row selection**.

`joinedload()` and `selectinload()` are used when related objects should already be loaded on the returned ORM objects.

If the route returns SQLAlchemy ORM objects, FastAPI uses the response model to convert them into the correct JSON structure.

A response could look like this.

```json
{
  "id": 10,
  "title": "Clean Code",
  "year": 2008,
  "genre": "Programming",
  "pages": 464,
  "price": 39.99,
  "in_stock": true,
  "author": {
    "id": 1,
    "name": "Robert C. Martin"
  },
  "categories": [
    {
      "id": 1,
      "name": "Software Engineering"
    },
    {
      "id": 2,
      "name": "Backend"
    }
  ]
}
```

Because `from_attributes=True` is enabled, Pydantic reads values directly from ORM attributes instead of expecting dictionaries.

This output shape is defined by `BookOut`. The author field uses `AuthorOut` and the `categories` field uses a list of `CategoryOut`. This is how nested response schemas represent relationships between objects.

Updates often allow partial data, so a separate schema is used.

```py
@app.patch("/books/{book_id}", response_model=BookOut)
async def update_book_route(
    book_id: int,
    payload: BookUpdate,
    db: AsyncSession = Depends(get_db),
):
    statement = (
        select(Book)
        .options(selectinload(Book.author), selectinload(Book.categories))
        .where(Book.id == book_id)
    )
    result = await db.execute(statement)
    book = result.scalar_one_or_none()

    if book is None:
        raise HTTPException(status_code=404, detail="Book not found")

    update_data = payload.model_dump(exclude_unset=True)

    if "author_id" in update_data:
        author = await db.get(Author, update_data["author_id"])
        if author is None:
            raise HTTPException(status_code=404, detail="Author not found")

    if "category_ids" in update_data:
        statement = select(Category).where(Category.id.in_(update_data["category_ids"]))
        result = await db.execute(statement)
        book.categories = result.scalars().all()
        del update_data["category_ids"]

    for field, value in update_data.items():
        setattr(book, field, value)

    await db.commit()
    await db.refresh(book)

    return book
```

In `BookUpdate`, every field is optional. This allows the client to send only the fields that should change.

The request body may include only the fields that should change.

```json
{
  "price": 29.99,
  "in_stock": false
}
```

At the route layer, request schemas control what data can enter the application, and response schemas control the shape of data returned to the client.

Because the database relationships were defined earlier in **Database Level 2**, the API can expose those relationships through nested response schemas without manually constructing the response structure.

Different routes may also use different query strategies. Some routes only need eager loading through `selectinload()` or `joinedload()`, while others also need `join()` because filtering depends on related tables. The choice depends on whether the relationship affects row selection or only how related objects are loaded for the response.
