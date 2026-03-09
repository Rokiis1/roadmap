# Content of Python FastAPI Database Level 2

- [Working with related data in APIs](#working-with-related-data-in-apis)
- [One-to-many relationships with ORM](#one-to-many-relationships-with-orm)
- [Many-to-many relationships with ORM](#many-to-many-relationships-with-orm)
- [Querying related data with joins](#querying-related-data-with-joins)
- [Filtering across related tables](#filtering-across-related-tables)
- [Lazy loading vs eager loading](#lazy-loading-vs-eager-loading)
- [Using joinedload to load related data](#using-joinedload-to-load-related-data)

In the previous **Python FastAPI Database Level 2**, database interaction focused on working with **single tables**. ORM models were defined to represent database tables, sessions were used to execute queries, and CRUD operations allowed creating, reading, updating and deleting records.

These operations worked with individual entities such as `Book` objects, where each query interacted with a single table.

However, applications rarely store data in isolation. Different pieces of information are usually connected. For example, a book may belong to a category, have an author, or appear in multiple collections. In a relational database, these connections are represented through relationships between tables.

When building APIs, it is often necessary to retrieve and return **related data together**. Instead of returning only a book, the API might also include information about the books author or category. Handling these relationships requires additional ORM features such as model relationships, joins and loading strategies.

This level focuses on how SQLAlchemy and FastAPI work together to manage related data, allowing APIs to retrieve and return structured information across multiple tables.

## Working with related data in APIs

In applications, data rarely exists in isolation. Most entities are connected to other entities. For example, a book usually has an `author`, may belong to one or more `categories`, and might appear in user collections or orders.

Relational databases represent these connections using relationships between tables. Instead of storing all information in a **single table**, data is split into multiple tables and linked through `keys` it helps avoids duplication.

When building APIs, these relationships often need to be reflected in the responses returned to clients. Instead of returning only a `book` record, an API might return the `book` together with its `author` information or the categories it belongs to.

A example response might look like this.

```json
{
  "id": 1,
  "title": "Clean Code",
  "author": {
    "id": 3,
    "name": "Robert C. Martin"
  },
  "categories": [
    {"id": 1, "name": "Programming"},
    {"id": 2, "name": "Software Engineering"}
  ]
}
```

To support this kind of response, the database models must define relationships between tables. The ORM then uses those relationships to retrieve related records and assemble the data structure required by the API.

In SQLAlchemy, relationships are defined directly in ORM models. Once defined, these relationships allow queries to load related objects, perform joins between tables and return structured data that maps naturally to API response schemas.

The following sections introduce **one-to-many relationship**, how are defined in SQLAlchemy models and how related data can be queried and returned through FastAPI endpoints.

## One-to-many relationships with ORM

Relational databases organize data across multiple tables that are connected through keys. In ORM-based applications, these connections are represented directly in the model definitions.

In SQLAlchemy, relationships between tables are defined using two components.

- **Foreign keys**, which establish the link between tables at the database level
- **relationship()**, which tells the ORM how models are connected in Python

To demonstrate this, consider a simple relationship between **authors** and **books**. Each book belongs to one author, while an author may have multiple books. This structure is known as a **one-to-many relationship**.

The models might look like this.

```py
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Author(Base):
    __tablename__ = "authors"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]

    books: Mapped[list["Book"]] = relationship(
        back_populates="author"
    )


class Book(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str]

    author_id: Mapped[int] = mapped_column(
        ForeignKey("authors.id")
    )

    author: Mapped["Author"] = relationship(
        back_populates="books"
    )
```

The `back_populates` parameter connects the relationship on both sides. This tells SQLAlchemy that `Author.books` and `Book.author` represent two perspectives of the same relationship.

Because of this configuration accessing `book.author` returns the author of the book and `author.books` returns a collection of books written by that author.

The `relationship()` definitions allow SQLAlchemy to represent that connection in Python objects.

Once defined, related data can be accessed naturally through model attributes.

```py
book.author
author.books
```

Accessing `book.author` returns the author associated with that book and `author.books` returns a list of all books written by that author.

To verify that the relationship works correctly, related objects can be accessed after retrieving records from the database.

```py
statement = select(Book)
result = db.execute(statement)

book = result.scalars().first()

print(book.title)
print(book.author.name)
```

In this example, the book record is retrieved first. Because the relationship is defined in the ORM model, SQLAlchemy allows direct access to the related `Author` object through the `book.author` attribute.

The relationship can also be navigated in the opposite direction.

```py
statement = select(Author)
result = db.execute(statement)

author = result.scalars().first()

for book in author.books:
    print(book.title)
```

Here, the `author.books` attribute returns a collection of `Book` objects associated with that author.

This behavior demonstrates one of the main benefits of using an ORM. Instead of writing separate queries manually, related data can be accessed directly through Python attributes that reflect the relationships defined in the models.

Behind the scenes, SQLAlchemy uses the foreign key relationship between the tables to retrieve the related records from the database when they are accessed.

In the following section, we will examine  **many-to-many relationship**, which allow records from two tables to be associated with multiple records on both sides.

## Many-to-many relationships with ORM

A **many-to-many relationship** describes a situation where multiple records in one table can be associated with multiple records in another table.

For example, a **book** may belong to several **categories**, and a **category** may contain many books. This relationship cannot be represented with a single foreign key column, because both sides may contain multiple references.

Relational databases solve this by introducing an **association table** (sometimes called a **junction table**). This table stores pairs of foreign keys that connect the related records.

In SQLAlchemy, a **many-to-many relationship** is implemented using three components.

- An **association table**
- Foreign keys that reference the related tables
- `relationship()` definitions in the ORM models

First, the association table is defined.

```py
from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

book_category = Table(
    "book_category",
    Base.metadata,
    Column("book_id", ForeignKey("books.id"), primary_key=True),
    Column("category_id", ForeignKey("categories.id"), primary_key=True),
)
```

This table does not have its own model class. It simply connects the `books` and `categories` tables.

Next, the ORM models define relationships that use this association table.

```py
class Book(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str]

    categories: Mapped[list["Category"]] = relationship(
        secondary=book_category,
        back_populates="books",
    )


class Category(Base):
    __tablename__ = "categories"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]

    books: Mapped[list["Book"]] = relationship(
        secondary=book_category,
        back_populates="categories",
    )
```

The `secondary` parameter tells SQLAlchemy which table should be used to connect the two models.

Because of this configuration, the relationship works in both directions.

```py
book.categories
category.books
```

Accessing `book.categories` returns a list of categories associated with that book and `category.books` returns all books belonging to that category.

To verify that the relationship was created correctly, the data can be retrieved and inspected from the database.

```py
statement = select(Book)
result = db.execute(statement)

book = result.scalars().first()

print(book.title)

for category in book.categories:
    print(category.name)
```

In this example, the book is loaded first. Because the relationship is defined in the ORM model, SQLAlchemy allows direct access to the related categories through the `book.categories` attribute.

The relationship can also be accessed from the opposite direction.

```py
statement = select(Category)
result = db.execute(statement)

category = result.scalars().first()

print(category.name)

for book in category.books:
    print(book.title)
```

Here, the `category.books` attribute returns all books associated with that category.

These inspection steps demonstrate how SQLAlchemy manages **many-to-many relationships** through Python objects while using the association table internally to store the connections between records.

**Many-to-many relationships** are common in applications that deal with **tags**, **categories**, **permissions** or **user groups**. In the following sections, we will explore how related data can be queried using joins and returned through API responses.

## Querying related data with joins

Once relationships are defined between ORM models, it becomes possible to retrieve related data from multiple tables using **joins**. A join allows the database to combine rows from two or more tables based on their relationship.

In SQLAlchemy, joins can be expressed using ORM models instead of writing raw SQL. The ORM understands how tables are connected through foreign keys and relationships, which allows queries to reference related models directly.

Consider the earlier example where a **Book** belongs to an **Author** through the `author_id` foreign key. If we want to retrieve books together with information about their authors, a join can be used.

A basic synchronous query using a join might look like this.

```py
from sqlalchemy.orm import Session

def list_books_with_authors(db: Session):
    results = (
        db.query(Book, Author)
        .join(Author, Book.author_id == Author.id)
        .all()
    )
    return results
```

In this example, the query selects data from both the `books` and `authors` tables. The `join()` method tells SQLAlchemy how the tables are connected.

Conceptually, this ORM query is translated into SQL similar to.

```sql
SELECT books.*, authors.*
FROM books
JOIN authors ON books.author_id = authors.id;
```

The result returned by SQLAlchemy is a list of tuples where each element contains both objects.

For example

```py
for book, author in results:
    print(book.title, author.name)
```

When using the modern **SQLAlchemy 2.x style**, joins are written using the `select()` construct.

```py
from sqlalchemy import select

def list_books_with_authors(db: Session):
    statement = (
        select(Book, Author)
        .join(Author, Book.author_id == Author.id)
    )

    result = db.execute(statement)
    return result.all()
```

When working with an asynchronous session, the query must be awaited.

```py
from sqlalchemy.ext.asyncio import AsyncSession

async def list_books_with_authors(db: AsyncSession):
    statement = (
        select(Book, Author)
        .join(Author, Book.author_id == Author.id)
    )

    result = await db.execute(statement)
    return result.all()
```

Joins are useful whenever information from multiple related tables must be retrieved together. Instead of issuing separate queries for books and authors, the database can combine the data in a single operation.

In the following section, we will explore how joins work together with the `select()` construct in SQLAlchemy 2.x and how they can be used to build more complex queries across related tables.

## Filtering across related tables

When working with related tables, queries often need to filter results based on fields that belong to another model. This allows the application to retrieve records that match conditions across relationships.

For example, consider a situation where books are associated with authors. Instead of filtering only by fields on the `Book` model, it may be necessary to filter books based on properties of the related `Author`.

Using the **SQLAlchemy 2.x style**, filtering across related tables can be written using `select()`, `join()`, and `where()`.

```py
from sqlalchemy import select

def list_books_by_author(db: Session, author_name: str):
    statement = (
        select(Book)
        .join(Author)
        .where(Author.name == author_name)
    )

    result = db.execute(statement)
    return result.scalars().all()
```

In this query, the `join(Author)` call connects the books table with the authors table using the relationship defined in the models. The `where()` clause then filters results based on the author's name.

SQLAlchemy generates SQL similar to

```sql
SELECT books.*
FROM books
JOIN authors ON books.author_id = authors.id
WHERE authors.name = 'Robert C. Martin';
```

The `scalars()` method extracts the `Book` objects from the result set, since the query selects only the `Book` model.

When using asynchronous sessions, the structure of the query remains the same, but execution must be awaited.

```py
async def list_books_by_author(db: AsyncSession, author_name: str):
    statement = (
        select(Book)
        .join(Author)
        .where(Author.name == author_name)
    )

    result = await db.execute(statement)
    return result.scalars().all()
```

Filtering across related tables is useful when building API endpoints that support search or filtering criteria based on connected data. For example, a client might request all books written by a specific author or all books belonging to a particular category.

However, returning related data is important to know about **how those related objects are loaded from the database**. When a query retrieves a record such as a `Book`, the related `Author` object is not always loaded immediately. SQLAlchemy can load related data either **on demand** or **as part of the original query**.

These two approaches are known as lazy loading and eager loading. Understanding how they work is important because the loading strategy affects both the number of database queries executed.

## Lazy loading vs eager loading

When working with related objects, SQLAlchemy must decide **when the related data should be loaded from the database**. There are two primary strategies used by the ORM **lazy loading** and **eager loading**.

These strategies determine whether related data is retrieved **only when it is accessed** or **as part of the original query**.

Lazy loading means that related objects are **not loaded immediately** when the main object is retrieved. Instead, the related data is loaded **only when it is accessed in Python code**.

For example, suppose a book is retrieved from the database.

```py
statement = select(Book)
result = db.execute(statement)
book = result.scalars().first()
```

At this point, only the `Book` record has been loaded. The related `Author` object has not been retrieved yet.

If the code later accesses the relationship

```py
book.author
```

SQLAlchemy automatically executes another database query to retrieve the author associated with that book.

Database activity looks like this.

```sql
SELECT * FROM books;
SELECT * FROM authors WHERE id = ?;
```

Lazy loading is the default behavior for most SQLAlchemy relationships. It allows related data to be loaded only when needed, which can reduce unnecessary data retrieval.

Eager loading means that related objects are **loaded at the same time as the main object**, using a single query or a small number of coordinated queries.

Instead of waiting until `book.author` is accessed, the application instructs SQLAlchemy to load the related data during the initial query.

```py
from sqlalchemy.orm import joinedload

statement = (
    select(Book)
    .options(joinedload(Book.author))
)

result = db.execute(statement)
books = result.scalars().all()
```

In this case, SQLAlchemy retrieves both the book and its author during the same database operation.

SQL may look like

```sql
SELECT books.*, authors.*
FROM books
LEFT JOIN authors ON books.author_id = authors.id;
```

Because the related objects are already loaded, accessing them later does **not trigger additional database queries**.

```sql
book.author
```

Lazy loading is useful when related data is rarely needed, because it avoids loading unnecessary information.

Eager loading is useful when related data will definitely be used, because it prevents additional database queries when accessing relationships.

When building APIs that return nested response schemas, eager loading is often preferred because the related data is required to construct the response.

In the next section, we will examine a common eager loading technique in SQLAlchemy called `joinedload`, which allows related objects to be loaded efficiently when executing queries.

## Using joinedload to load related data

When an API returns nested objects, related data often needs to be available immediately. If relationships use lazy loading, accessing each related object may trigger additional database queries. This can lead to unnecessary database calls and slower responses.

SQLAlchemy provides **loading strategies** that allow related objects to be retrieved together with the main query. One common technique is `joinedload`.

The `joinedload` option instructs SQLAlchemy to load related objects using a **JOIN** as part of the original query, so the related data is already available when the ORM objects are accessed.

Consider the example where a **Book** has an associated **Author**.

```py
from sqlalchemy.orm import joinedload
from sqlalchemy import select

def list_books(db: Session):
    statement = (
        select(Book)
        .options(joinedload(Book.author))
    )

    result = db.execute(statement)
    books = result.scalars().all()
    return books
```

In this query, `joinedload(Book.author)` tells SQLAlchemy to load the related Author objects when retrieving books. This ensures that accessing `book.author` later does not trigger additional database queries.

SQLAlchemy generates SQL similar to

```sql
SELECT books.*, authors.*
FROM books
LEFT JOIN authors ON books.author_id = authors.id;
```

Because the author data is loaded together with the books, the application can access the relationship directly.

```py
for book in books:
    print(book.title, book.author.name)
```

The same approach works with asynchronous sessions.

```py
async def list_books(db: AsyncSession):
    statement = (
        select(Book)
        .options(joinedload(Book.author))
    )

    result = await db.execute(statement)
    books = result.scalars().all()
    return books
```

Using `joinedload` is particularly useful when building API responses that include nested objects, such as returning a book together with its author information.

By loading related data in the same query, `joinedload` helps avoid unnecessary database queries and improves the efficiency of the application.
