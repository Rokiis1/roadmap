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
def test_book_to_author(db: Session):

    statement = select(Book)
    result = db.execute(statement)

    book = result.scalars().first()

    print(book.title)
    print(book.author.name)

```

In this example, the book record is retrieved first. Because the relationship is defined in the ORM model, SQLAlchemy allows direct access to the related `Author` object through the `book.author` attribute.

The `db: Session` part of the function signature is a **type hint**. It tells Python and development tools that the `db` parameter is expected to be a SQLAlchemy `Session` object.

This type annotation does **not create the session** and does not establish a database connection. It is only used for **type checking**, **documentation** and **editor support** such as autocomplete.

The actual session instance must be created elsewhere and passed into the function. For example, it may come from `SessionLocal()` in scripts or from a FastAPI dependency such as `get_db`.

Because of this design, the function does not need to know how the session was created. It simply receives a `Session` object and uses it to execute queries.

The relationship can also be navigated in the opposite direction.

```py
def test_author_to_books(db: Session):

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
def test_book_to_categories(db: Session):

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
def test_category_to_books(db: Session):

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

In SQL, several types of joins exist, each controlling how rows from different tables are combined.

Common join types include:

- **INNER JOIN** returns rows that have matching values in both tables
- **LEFT JOIN** returns all rows from the left table and matching rows from the right table
- **RIGHT JOIN** returns all rows from the right table and matching rows from the left table
- **FULL JOIN** returns rows when there is a match in either table

In most application queries, **INNER JOIN** and **LEFT JOIN** are used most frequently.

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

The result returned by SQLAlchemy is a **list of tuples** where each element contains both objects.

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

While filtering focuses on **which records should be returned**, another important aspect of working with related data is **how those related objects are loaded from the database**.

It is important to distinguish between two common operations when working with relationships.

The `join()` method is used when a query needs to **combine or filter data across related tables**. In this case, the join changes how the database constructs the result set.

However, sometimes the goal is not to filter across tables but simply to **load related objects together with the main entity**. For example, an API may return a `Book` together with its `Author` without changing which books are selected.

In these situations, SQLAlchemy provides **loading strategies** that control how relationships are retrieved while still returning the main ORM objects.

## Controlling how related data is loaded

When working with relationships, SQLAlchemy must decide **how related objects should be loaded from the database**.

For example, when retrieving a `Book`, the related `Author` object may or may not be loaded at the same time. The ORM provides several **loading strategies** that control when and how related data is retrieved.

These strategies are configured during query execution using the `.options()` method.

```py
statement = (
    select(Book)
    .options(...)
)
```

These tools allow developers to control how relationships are retrieved depending on the needs of the application.

In many APIs, related objects must be returned together with the main entity. In such cases, the application often instructs SQLAlchemy to load the related objects during the initial query.

The most common loading strategies include `joinedload()` loads related objects using a SQL JOIN, `selectinload()` loads related objects using a separate SELECT query and lazy loading loads related objects automatically when accessed

Among these strategies, `joinedload()` is often the first one encountered when working with related data. It allows related objects to be retrieved together with the main entity as part of the same query.

## Using joinedload to load related data

One of the most common loading strategies in SQLAlchemy is `joinedload()`.

The `joinedload` option instructs SQLAlchemy to retrieve related objects using a SQL JOIN as part of the original query.

For example, if a `Book` has an associated `Author`, the query can request both objects at the same time.

```py
from sqlalchemy.orm import joinedload

statement = (
    select(Book)
    .options(joinedload(Book.author))
)

result = db.execute(statement)
books = result.scalars().all()
```

In this case, SQLAlchemy retrieves both books and their authors in a single database query.

Conceptually, `joinedload()` also uses a SQL JOIN behind the scenes. However, its purpose is different from the `join()` method.

The `join()` method changes the structure of the query and is typically used for filtering or combining data across tables.

In contrast, `joinedload()` is a loading strategy. It instructs SQLAlchemy to retrieve related objects together with the main entity, while still returning the primary ORM objects from the query.

SQL generated by the ORM may look like this.

```sql
SELECT books.*, authors.*
FROM books
LEFT JOIN authors ON books.author_id = authors.id;
```

Because the author information is already loaded, accessing the relationship later does not trigger additional database queries.

```py
for book in books:
    print(book.author.name)
```

This approach is useful when building API responses that include nested data.

However, using a JOIN is not always the most efficient approach. When a query returns many records or when relationships involve collections, joining tables can produce very large result sets with repeated data.

In these situations, SQLAlchemy provides another loading strategy that retrieves related objects using a separate query.

## Using selectinload to load related data

Another common loading strategy is `selectinload()`.

Instead of using a JOIN, `selectinload` retrieves the related objects using a second query that loads all required related records at once.

```py
from sqlalchemy.orm import selectinload

statement = (
    select(Book)
    .options(selectinload(Book.author))
)

result = db.execute(statement)
books = result.scalars().all()
```

In this case, SQLAlchemy performs two coordinated queries.

```sql
SELECT * FROM books;

SELECT * FROM authors
WHERE id IN (...);
```

The first query retrieves the books. The second query retrieves all authors associated with those books using an `IN` clause.

This strategy avoids very large joined result sets and can be more efficient when loading collections of related objects.

The loading techniques discussed so far are practical tools for controlling how relationships are retrieved. At a higher level, these techniques correspond to two broader concepts that describe when related data is loaded.

These concepts are known as **lazy loading** and **eager loading**, and they help explain the behavior behind the strategies used in SQLAlchemy queries.

## Lazy loading vs eager loading

The loading strategies described above correspond to two general concepts **lazy loading** and **eager loading**.

Lazy loading means that related objects are **not retrieved immediately** when the main object is loaded. Instead, SQLAlchemy loads them automatically when the relationship attribute is accessed.

```py
statement = select(Book)
result = db.execute(statement)

book = result.scalars().first()

print(book.author.name)
```

When `book.author` is accessed, SQLAlchemy sends an additional query to the database.

the database query looks like this.

```sql
SELECT * FROM books;
SELECT * FROM authors WHERE id = ?;
```

This behavior is called lazy loading because the related object is retrieved only when it is needed.

Eager loading means that related objects are retrieved together with the main object during the original query.

Using `joinedload()` or `selectinload()` are examples of eager loading. The related objects are already available, so accessing them later does not trigger additional queries.

In practice, eager loading is often preferred when APIs return nested response structures, because the related data is required to construct the response.

In many real queries, loading strategies are used together with joins. The `join()` method is typically used when the query needs to **filter or combine data across tables**, while loading strategies such as `joinedload()` or `selectinload()` control **how related objects are retrieved and attached to ORM models**.

For example, a query might join tables to apply filtering conditions and at the same time instruct SQLAlchemy to eagerly load related objects.

```py
statement = (
    select(Book)
    .join(Author)
    .options(joinedload(Book.author))
    .where(Author.name == "Robert C. Martin")
)
```

In this query, the `join()` method connects the `books` and `authors` tables so that the query can apply a filtering condition based on the authors name.

At the same time, `joinedload(Book.author)` instructs SQLAlchemy to load the related `Author` objects together with each `Book`. This ensures that when the application later accesses `book.author`, the author information is already available and no additional database query is required.

These operations serve different purposes. The `join()` method is used to combine tables or apply filtering conditions across relationships. Loading strategies such as `joinedload()` and `selectinload()` control how related objects are retrieved and attached to ORM models.

In practice, queries often combine these techniques. A join can be used to filter results across tables, while a loading strategy ensures that related objects are retrieved efficiently for use in the application or API response.
