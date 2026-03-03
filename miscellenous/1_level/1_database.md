# Content of Python FastAPI Database Level 1

- [Why use an ORM](#why-use-an-orm)
- [Introduction to SQLAlchemy](#introduction-to-sqlalchemy)
- [Choosing SQLite for development](#choosing-sqlite-for-development)
- [Installing database dependencies](#installing-database-dependencies)
- [Creating the database engine](#creating-the-database-engine)
- [Defining ORM models](#defining-orm-models)
- [Creating database tables from models](#creating-database-tables-from-models)
- [Creating a database session](#creating-a-database-session)
- [Using database sessions inside FastAPI routes](#using-database-sessions-inside-fastapi-routes)
- [Reading data using ORM queries](#reading-data-using-orm-queries)
- [Writing data using ORM queries](#writing-data-using-orm-queries)
- [Basic database error handling](#basic-database-error-handling)

FastAPI applications often grow beyond simple request handling. Once data needs to be stored and retrieved, the application must interact with a database in a way that keeps the code readable and maintainable.

At this point, you already understand how databases work and how SQL queries are written. The focus now shifts from *what a database is* to *how database access is structured inside a FastAPI application*.

In this level, we introduce a practical approach for working with databases by using an **Object Relational Mapper (ORM)**. Instead of writing SQL directly inside route functions, database tables are represented as Python objects and database operations are expressed through Python code.

This approach allows database logic to stay organized, reduces repetition, and keeps request handling separate from data access. Before working with database models and queries, it is important to understand **why an ORM is used** and what problems it solves in real FastAPI applications.

## Why use an ORM

FastAPI applications often need to work with persistent data. At this point, we already understand how databases work and how to write SQL queries. The remaining question is how this database logic should be **connected** to a FastAPI application in a way that is **clean**, **maintainable**, and **safe**.

In small examples, it is possible to write raw SQL directly inside route functions. While this approach works, it quickly leads to duplicated queries, tightly coupled code, and database logic mixed with request handling. As an application grows, this makes changes harder and increases the risk of errors.

To avoid these problems, FastAPI applications typically rely on an **Object Relational Mapper (ORM)**. An ORM acts as a layer between the application code and the database, allowing database rows to be represented as Python objects and database operations to be expressed using Python instead of raw SQL.

In this we focus on understanding **why an ORM is used**, how it fits into a FastAPI application, and how it helps structure database access from the very beginning.

## Introduction to SQLAlchemy

Once the role of an ORM is clear, the next step is to look at the specific tool that will be used throughout this level. Different ORMs exist in the Python ecosystem, each with its own design goals and trade-offs.

For FastAPI applications, one of the most commonly used and well-established choices is [SQLAlchemy](https://www.sqlalchemy.org/). It provides a clear mapping between database tables and Python objects while remaining flexible enough to work with different databases and application structures.

Before defining **models** or writing **queries**, it is important to understand what **SQLAlchemy** is, what responsibilities it handles, and how it fits into the overall architecture of a FastAPI application.

**SQLAlchemy** itself does not depend on a specific database. It can work with many different database systems, from simple file-based databases to full production-grade servers.

For this we focus is not on **managing infrastructure** or **external services**, but on learning how database integration works inside a **FastAPI** application. To keep that focus clear and remove unnecessary complexity, a lightweight database is used during development.

This leads to the choice of **SQLite**, which allows the application to run locally with minimal setup while still supporting the same ORM patterns that apply to larger databases.

SQLite is well suited for learning and early-stage development because it requires no separate server process and stores all data in a single file. This makes it easy to start working with a database without additional configuration or deployment steps.

Using SQLite allows us to focus on how SQLAlchemy models, sessions, and queries behave inside a FastAPI application, without being distracted by database-specific setup. The same concepts introduced here will still apply when switching to more advanced databases later.

With this in mind, we can take a closer look at SQLite and how it is used as the development database in this level.

## Choosing SQLite for development

[SQLite](https://www.sqlite.org/) is a lightweight, file-based database that is commonly used during development and learning. Unlike server-based databases, SQLite does not require a separate database service to be installed or running. The entire database is stored in a single file on disk.

This simplicity makes SQLite an ideal choice for introducing database integration in a FastAPI application. The application can be started immediately, without configuring users, passwords, ports, or network connections. As a result, the focus stays on how the application interacts with the database rather than on infrastructure setup.

Despite its simplicity, SQLite supports standard SQL features and works well with SQLAlchemy. **Models**, **sessions** and **queries** defined using SQLAlchemy behave the same way as they would with larger databases. This allows development patterns learned here to transfer directly to production environments later.

SQLite is used strictly as a development database. The goal is not to explore SQLite-specific features, but to provide a stable and minimal environment for learning how ORM-based database access works inside a FastAPI application.

## Installing database dependencies

With the database choice defined, the next step is to prepare the application environment. Before any database code can be written, the required libraries must be installed so that FastAPI can communicate with SQLite through the ORM.

This level uses **SQLAlchemy** as the ORM and **SQLite** as the database backend. SQLite itself is included with Python, so no external database server or driver needs to be installed. Only the ORM library is required.

If the project is managed using `pip`, SQLAlchemy can be installed directly.

```bash
pip install sqlalchemy
```

If the project is managed using **Poetry**, SQLAlchemy is added as a project dependency instead of being installed globally.

```bash
poetry add sqlalchemy
```

Once the installation is complete, SQLAlchemy becomes available to the application and can be imported into Python modules.

However, when using asynchronous database access with FastAPI, the database driver must also support asynchronous I/O. SQLAlchemy does not provide async communication with SQLite by itself. For asynchronous support, the `aiosqlite` package is required.

If the project uses `pip`.

```bash
pip install aiosqlite
```

If the project uses **Poetry**.

```bash
poetry add aiosqlite
```

The `aiosqlite` package acts as the asynchronous driver that allows SQLAlchemy to communicate with SQLite when using `AsyncEngine` and `AsyncSession`.

Once the installation is complete, the required dependencies become available to the application and can be imported into Python modules.

At this point, all required dependencies for database integration are in place. The application can now begin defining how it connects to the database and how database access.

Once the required dependencies are installed, the application needs a way to establish a connection to the database. This connection logic should be defined in a single, consistent place so it can be reused throughout the application.

In SQLAlchemy, this responsibility is handled by the **database engine**. The engine defines how the application communicates with the database and acts as the starting point for all database interactions.

## Creating the database engine

The database engine is the central component that defines how the application connects to the database. It does not execute queries by itself, but it provides the foundation that all database sessions and operations rely on.

In SQLAlchemy, the engine is created by specifying a **database URL**. This URL describes the database type, the location of the database, and the driver used to communicate with it.

For SQLite, the database URL points to a local file.

```py
from sqlalchemy import create_engine

DATABASE_URL = "sqlite:///./app.db"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}
)
```

The `sqlite:///./app.db` URL tells SQLAlchemy to use SQLite and store the database in a file named `app.db` in the current project directory.

The `connect_args` parameter is specific to SQLite. SQLite restricts database access to a single thread by default. Since FastAPI can handle requests across multiple threads, this option is required to allow safe access during development.

When working with asynchronous database access, an **async engine** must be created instead. In that case, the database URL changes to include the `aiosqlite` driver, and the async engine factory is used.

```py
from sqlalchemy.ext.asyncio import create_async_engine

DATABASE_URL = "sqlite+aiosqlite:///./app.db"

engine = create_async_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}
)
```

At this stage, the engine only defines how the application connects to the database. No tables are created and no ORM queries are executed yet.

To confirm that the database engine is configured correctly, a simple connection test can be performed using a raw SQL statement.

Synchronous test.

```py
def main():
    # - database file creation
    # - sqlite connection
    # - raw SQL execution
    with engine.connect() as conn:
        result = conn.execute(
            text("SELECT sqlite_version()")
        ).scalar_one()
        print("SQLite connected. Version:", result)

if __name__ == "__main__":
    main()
```

Asynchronous test.

```py
import asyncio
from sqlalchemy import text

async def main():
    async with engine.connect() as conn:
        result = await conn.execute(
            text("SELECT sqlite_version()")
        )
        version = result.scalar_one()
        print("SQLite connected. Version:", version)

if __name__ == "__main__":
    asyncio.run(main())
```

When using the async engine, database operations must be awaited. The async with statement ensures the connection is properly opened and closed, and `await` is required when executing the query.

In both cases, SQLAlchemy establishes a connection to the SQLite database file. If the file does not exist yet, SQLite creates it automatically.

The `text()` function marks the SQL string as an executable statement. The `scalar_one()` method extracts exactly one value from the result.

This confirms that the engine can successfully communicate with the database.

```bash
SQLite connected. Version: 3.49.1
```

The if `__name__ == "__main__"` guard allows this file to be run directly for testing purposes. This test is optional, but it is useful during setup to verify that the database engine is working before continuing.

Once the engine is confirmed to work, it can be reused by the rest of the application. The next step is to describe the structure of the data itself by defining ORM models.

## Defining ORM models

ORM models define how database tables are represented in Python code. Each model is a Python class that maps directly to a database table, and each attribute on the class represents a column in that table.

In SQLAlchemy, ORM models are created by extending a shared base class. This base class provides the functionality needed for SQLAlchemy to track models and translate them into database structures.

There are **two common ways** to define this base class, depending on the SQLAlchemy version and style being used.

The **legacy approach**, used in **SQLAlchemy 1.x** and still supported for compatibility, creates the base class using a factory function.

```py
from sqlalchemy.orm import declarative_base

Base = declarative_base()
```

In this approach, `declarative_base()` returns a base class that ORM models inherit from. This style is widely seen in older tutorials and existing codebases.

In modern **SQLAlchemy (2.x)**, a newer and more explicit approach is recommended. Instead of using a factory function, the base class is defined by inheriting from `DeclarativeBase`.

```py
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass
```

This modern approach integrates better with modern Python features, including **type hints** and **static analysis**. For new projects, this style is preferred.

Regardless of which approach is used, all ORM models in the application inherit from the same base class.

A model definition using modern SQLAlchemy declarative mapping looks like this.

```py
from sqlalchemy import Integer, String, Float, Boolean
from sqlalchemy.orm import Mapped, mapped_column

class Book(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    title: Mapped[str] = mapped_column(
        String,
        nullable=False
    )
    author: Mapped[str] = mapped_column(
        String,
        nullable=False
    )
    year: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )
    genre: Mapped[str] = mapped_column(
        String,
        nullable=False
    )

    pages: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )
    price: Mapped[float] = mapped_column(
        Float,
        nullable=False
    )

    in_stock: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False,
        default=True
    )
```

In this example, the `Book` class represents a database table named `books`. The `__tablename__` attribute explicitly defines the table name in the database.

Each class attribute maps to a column in the table, but instead of using the older `Column(...)` style, this model uses **typed ORM mappings**, which are recommended in **SQLAlchemy 2.x**.

The `Mapped[...]` type indicates that the attribute is managed by SQLAlchemy ORM and participates in the database mapping. The `mapped_column()` function defines the database column itself, including its type and constraints.

This style of defining models is known as **Declarative Mapping**. With declarative mapping, the table structure and the Python class are defined together in a single place. This is the most common and recommended approach in modern SQLAlchemy applications.

SQLAlchemy also supports **Imperative Mapping**, which separates table definitions from class definitions. This approach bypasses the declarative system and manually maps classes to tables.

```py
books_table = Table(
    "books",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("title", String),
    Column("author", String),
)
```

Imperative mapping is considered more **barebones** and does not support modern features such as **PEP 484** type annotations. Because of this, it is far less common in modern applications and is not used in this level.

The model itself does not create the table in the database. It only describes the structure. SQLAlchemy uses this definition later to generate database tables and to build queries.

At this level, models are kept simple. No relationships, constraints, or validations are added yet. The goal is to understand how Python classes are mapped to database tables and how this mapping forms the foundation for all ORM-based database operations.

Once models are defined, they can be used to create tables and interact with stored data through database sessions.

## Creating database tables from models

Once ORM models are defined, the next step is to create the corresponding tables in the database. SQLAlchemy uses the model definitions to generate the database schema.

This process is handled through the metadata associated with the base class. The metadata contains information about all registered models and their table definitions.

To create tables, SQLAlchemy provides a method that instructs the engine to generate any missing tables based on the defined models.

Synchronous example.

```py
def main():
    # 1) create tables
    Base.metadata.create_all(bind=engine)
    print("Tables created (if not existed).")

    # 2) verify DB + table exists
    with engine.connect() as conn:
        version = conn.execute(
            text("SELECT sqlite_version()")
        ).scalar_one()

        tables = conn.execute(
            text(
                "SELECT name FROM sqlite_master "
                "WHERE type='table' ORDER BY name;"
            )
        ).all()

        print("SQLite connected. Version:", version)
        print("Tables:", [table[0] for table in tables])

if __name__ == "__main__":
    main()
```

When using an asynchronous engine, table creation and verification must also use asynchronous operations.

First, `Base.metadata.create_all(bind=engine)` instructs SQLAlchemy to create database tables based on all ORM models that inherit from `Base`.

The `bind=engine` argument tells SQLAlchemy which database connection should be used. Without binding the metadata to an engine, SQLAlchemy would not know where the tables should be created.

This method is safe to run multiple times. SQLAlchemy checks whether each table already exists and creates only those that are missing. Existing tables are left unchanged.

The second query reads from `sqlite_master`, which is an internal SQLite system table that stores metadata about the database structure.

```sql
SELECT name FROM sqlite_master WHERE type='table'
```

This query lists all tables currently defined in the database. The result is returned as a list of rows, where each row contains the table name. The list comprehension extracts the names for display.

Asynchronous example.

```py
import asyncio
from sqlalchemy import text

async def main():
    # 1) create tables
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
        print("Tables created (if not existed).")

    # 2) verify DB + table exists
    async with engine.connect() as conn:
        result = await conn.execute(
            text("SELECT sqlite_version()")
        )
        version = result.scalar_one()

        result = await conn.execute(
            text(
                "SELECT name FROM sqlite_master "
                "WHERE type='table' ORDER BY name;"
            )
        )
        tables = result.all()

        print("SQLite connected. Version:", version)
        print("Tables:", [table[0] for table in tables])

if __name__ == "__main__":
    asyncio.run(main())
```

In the asynchronous version, `async with` is used instead of `with`, and database operations must be awaited.

The call to `conn.run_sync(Base.metadata.create_all)` is required because `create_all()` is a synchronous operation. The `run_sync()` method allows it to be executed within an asynchronous connection.

This verification step is not required for normal application operation, but it is useful during development to confirm that the database file was created, the connection works, and ORM models were translated into actual database tables.

Table creation is usually performed once, when the application starts or during an initial setup step. It should not be triggered inside individual route handlers.

When working inside a FastAPI application, table creation is typically performed during application startup instead of inside a standalone script.

```py
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # startup logic
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    yield

    # shutdown logic (optional)
    # for example: close connections, cleanup resources

app = FastAPI(lifespan=lifespan)
```

The `@asynccontextmanager` decorator is provided by Pythons `contextlib` module. It allows defining an asynchronous context manager using a function instead of creating a class.

FastAPI expects the lifespan handler to be an asynchronous context manager. That is why the function must be defined using `async def` and decorated with `@asynccontextmanager`.

The `yield` statement separates application startup logic from shutdown logic.

Everything before `yield` runs when the application starts after `yield` runs when the application shuts down.

In this example database tables are created before the application begins handling requests and no shutdown logic is required, so the code after `yield` is empty.

The app: FastAPI parameter is required because FastAPI passes the application instance into the lifespan function. Even if it is not used directly, it must be present in the function signature so FastAPI can call it correctly.

This lifespan structure is used for both synchronous and asynchronous database engines.

If the engine is synchronous, the startup section would look like this:

```py
@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    yield
```

If the engine is asynchronous, it must use an `async` connection and `await`, as shown earlier.

Even when using a synchronous engine, the lifespan function itself must still be asynchronous because FastAPI requires an async context manager.

After this step completes, the database file contains the tables defined by the ORM models. The application can now store and retrieve data using these tables through database sessions.

With tables in place, the next step is to create and manage database sessions that allow queries and transactions to be executed.

## Creating a database session

A **database session** represents an active interaction with the database. While **engine** defines how application connects to database, **session** is the component that is actually used to execute queries and manage transactions.

In SQLAlchemy, sessions are created using a **session factory**. This factory is configured once and then used to generate individual session instances as needed.

First, a session factory is created.

```py
from sqlalchemy.orm import sessionmaker

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
)
```

The `autoflush=False` setting disables automatic flushing of changes before certain query operations. Normally, SQLAlchemy may automatically send pending changes to the database before executing a query. Disabling autoflush gives more explicit control over when changes are written.

The `autocommit=False` setting ensures that changes are not committed automatically. This means you must explicitly call `db.commit()` to persist changes. This makes transaction boundaries clear and predictable.

The `SessionLocal` object does **not** represent a session itself. Instead, it is a callable that produces new session instances. Each call to `SessionLocal()` creates a **new independent database session**.

To demonstrate how a session works, a simple ORM-based interaction can be performed.

```py
def main():
    # 1) ensure tables exist
    Base.metadata.create_all(bind=engine)

    # 2) create a session
    db = SessionLocal()

    try:
        # 3) create ORM object
        book = Book(
            title="Clean Code",
            author="Robert C. Martin",
            year=2008,
            genre="Programming",
            pages=464,
            price=39.99,
            available=True,
        )

        # 4) stage object for insertion
        db.add(book)

        # 5) persist changes
        db.commit()

        # 6) refresh object from DB
        db.refresh(book)

        print("Inserted book with id:", book.id)

        # 7) read data using the same session
        books = db.query(Book).all()
        print("Books in DB:", [(book.id, book.title) for book in books])

    finally:
        # 8) close session
        db.close()
```

When `SessionLocal()` is called, a new session instance is created. This session maintains its own **transaction state** and acts as a workspace for database operations.

The `db.add(book)` call does not immediately write data to the database. Instead, it places the object into the session’s pending state.

The `db.commit()` call finalizes the transaction and persists all pending changes to the database. Until this point, no data is permanently stored.

After committing, `db.refresh(book)` reloads the object from the database. This is important because values generated by the database such as the primary key are not available until after the commit.

The same session can then be used to execute queries. In this example, `db.query(Book).all()` retrieves all rows from the books table and returns them as ORM objects.

Finally, the session is closed using `db.close()`. Closing the session releases database resources and ensures the connection is returned to the pool.

Each session should be created when needed, used for a specific unit of work, closed as soon as that work is complete.

Leaving sessions open can lead to connection leaks and unpredictable behavior.

When working with asynchronous database access, an `async` session must be used instead.

The async session factory is created using `async_sessionmaker`.

```py
from sqlalchemy.ext.asyncio import async_sessionmaker, AsyncSession

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    autoflush=False,
    expire_on_commit=False,
)
```

Each call to `AsyncSessionLocal()` creates a new asynchronous session instance.

```py
import asyncio
from sqlalchemy import select

async def main():
    # 1) create async session
    async with AsyncSessionLocal() as db:

        # 2) start transaction
        async with db.begin():

            # 3) create ORM object
            book = Book(
                title="Clean Code",
                author="Robert C. Martin",
                year=2008,
                genre="Programming",
                pages=464,
                price=39.99,
                available=True,
            )

            # 4) stage object for insertion
            db.add(book)

        # 5) transaction committed automatically after db.begin() block
        print("Inserted book with id:", book.id)

        # 6) execute query
        result = await db.execute(select(Book))

        # 7) extract ORM objects
        books = result.scalars().all()

        print("Books in DB:", [(b.id, b.title) for b in books])

if __name__ == "__main__":
    # 8) run async function
    asyncio.run(main())
```

In the asynchronous version, `async` with `AsyncSessionLocal()` ensures that the session is properly opened and automatically closed once the block finishes execution. This prevents connection leaks and guarantees that resources are released correctly.

The `async` with `db.begin()` block manages the transaction context. When the block completes successfully, the transaction is committed automatically. If an exception occurs inside the block, the transaction is rolled back.

The `await` keyword is required when executing database operations because the `async` engine performs **non-blocking I/O**. Without `await`, the coroutine would not execute.

The `select()` function is used instead of `db.query()` because asynchronous SQLAlchemy follows the newer **2.x style** query pattern. The `result.scalars().all()` call extracts ORM objects from the returned result set.

The script is executed normally using Python. The `asyncio.run(main())` call creates an event loop and runs the asynchronous function. Without this call, the async function would not execute because asynchronous functions must run inside an event loop.

Just like the synchronous session, the async session maintains its own transaction state and must be properly managed.

With the ability to create and use database sessions, the remaining question is how these sessions should be integrated into a FastAPI application.

Rather than creating sessions manually inside every route, FastAPI provides mechanisms to manage shared resources in a structured way. This allows database sessions to be created, used, and cleaned up consistently for each incoming request.

Before executing queries inside route handlers, it is important to understand how database sessions are made available to FastAPI routes and how they fit into the **request–response lifecycle**.

## Using database sessions inside FastAPI routes

In a FastAPI application, database sessions should be tied to the lifecycle of an incoming request. Each request should receive its own session, and that session should be closed once the request is complete.

FastAPI provides a mechanism called **dependency injection** that allows shared resources, such as database sessions, to be created and passed into route functions in a controlled way.

A common pattern is to define a dependency function that creates a session, yields it to the route, and ensures it is closed afterward.

```py
from sqlalchemy.orm import sessionmaker

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

This function creates a new database session and makes it available to the route.

The `yield` keyword is used to temporarily return the session to FastAPI. When FastAPI receives the yielded value, it injects it into the route function as a parameter. After the request is completed, execution continues after the `yield` statement, and the `finally` block runs. This guarantees that the session is closed even if an error occurs during request handling.

The session can then be injected into a route function using `Depends`.

```py
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

app = FastAPI()

@app.get("/books")
def list_books(db: Session = Depends(get_db)):
    books = db.query(Book).all()
    return books
```

In this route, FastAPI automatically calls the `get_db` function, provides the session to the route as the `db` parameter, and closes the session once the response is returned.

The route retrieves all records from the `books` table using the session and returns them as ORM objects.

When working with asynchronous database access, the same pattern is used, but the session factory and the dependency function must be asynchronous.

```py
from sqlalchemy.ext.asyncio import async_sessionmaker, AsyncSession

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    autoflush=False,
    expire_on_commit=False,
)

async def get_db():
    async with AsyncSessionLocal() as db:
        yield db
```

In the asynchronous version, `async with` manages opening and closing the session automatically. The `yield` keyword works the same way, FastAPI receives the session and injects it into the route, and when the request finishes, the session is closed.

The session can then be injected into an async route function using `Depends`.

```py
from fastapi import Depends, FastAPI
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

app = FastAPI()

@app.get("/books")
async def list_books(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Book))
    books = result.scalars().all()
    return books
```

In this route, FastAPI automatically calls the `async get_db` function, provides the session to the route as the `db` parameter, and closes the session once the response is returned.

The route retrieves all records from the `books` table using the async session. Because database execution is asynchronous, the query must be awaited, and `select()` is used instead of `db.query()`.

This approach keeps database session management out of route logic and ensures consistent behavior across the application. Route functions remain focused on handling requests, while session creation and cleanup are handled centrally.

At this stage, the session is available but no queries are executed yet. The next steps involve using this session to read data from the database and write new records safely.

## Reading data using ORM queries

With database sessions available inside FastAPI routes, the application can begin retrieving data from the database. In an ORM-based workflow, reading data means querying Python objects rather than writing raw SQL statements.

SQLAlchemy provides a query interface that allows data to be selected using the ORM models defined earlier. Queries are always executed through an active database session.

This function can then be used inside a FastAPI route.

```py
from fastapi import Depends

@app.get("/books")
def list_books(db: Session = Depends(get_db)):
    books = db.query(Book).all()
    return books
```

When the route is called, SQLAlchemy converts the ORM query into SQL, executes it against the SQLite database, and returns a list of `Book` objects.

Individual records can be retrieved by applying filters.

```py
def get_user_by_id(db: Session, book_id: int):
    return db.query(Book).filter(Book.id == book_id).first()
```

Here, the session is passed directly as a function argument. The function itself does not know where the session came from. It simply receives it and uses it. This design makes the function reusable and easier to test.

The `.first()` method returns the first matching record or `None` if no record exists. This allows the application to handle missing data explicitly.

When working with asynchronous database access, queries must be executed using an async session and awaited.

```py
from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

@app.get("/books")
async def list_books(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Books))
    books = result.scalars().all()
    return books
```

In the asynchronous version, await is required when executing the query because database operations are non-blocking. The `select()` construct is used instead of `db.query()`, following the **SQLAlchemy 2.x style**.

Filtering by ID in the async version looks like this.

```py
async def get_book_by_id(db: AsyncSession, book_id: int):
    result = await db.execute(
        select(User).where(Book.id == user_id)
    )
    return result.scalars().first()
```

Here, the query is executed using `await db.execute(...)`, and `scalars().first()` extracts the first matching ORM object or returns `None` if no record exists.

As in the synchronous version, the session is passed directly to the helper function. Only route functions use `Depends`. Internal functions remain independent of FastAPI and focus only on database logic.

The `Depends(get_db)` call is used only inside FastAPI route functions because it is part of FastAPIs dependency injection system. Its purpose is to tell FastAPI how to create and provide a database session automatically for each incoming request.

When a route function declares a parameter such as `db: Session = Depends(get_db)`, FastAPI calls the `get_db` function before executing the route. The yielded session is injected into the route function, and once the request is finished, FastAPI continues execution after the `yield` statement and closes the session. This ensures that each request receives its own session and that the session lifecycle is managed safely.

Helper functions, such as `get_book_by_id`, do not use `Depends` because they are not controlled by FastAPIs request handling system. They are plain Python functions. Instead of creating their own sessions, they receive the session as an argument. This keeps business logic separate from the web framework and makes those functions reusable in other contexts, such as **background tasks**, **scripts**, or **unit tests**.

In short, `Depends` is used only at the boundary where FastAPI handles a request. Inside the applications internal logic, the session is passed explicitly as a normal function parameter.

At this level, queries are kept simple and readable. More advanced query patterns, joins, and optimizations are introduced in later levels. The goal here is to understand how ORM queries map naturally to Python code and integrate cleanly into FastAPI routes.

## Writing data using ORM queries

Writing data to the database involves creating new ORM objects or modifying existing ones and then committing those changes through a database session. Just like read operations, all write operations are performed using the active session provided to the route.

When working with FastAPI, incoming request data should first be validated using **Pydantic schema models**. These schema models define the expected structure of the request body and ensure type validation before any database interaction occurs.

After validation, the schema data is used to create or update **SQLAlchemy ORM models**, which represent database tables and are responsible for persistence.

```py
from pydantic import BaseModel

class BookCreate(BaseModel):
    title: str
    author: str
    year: int
    genre: str
    pages: int
    price: float
    in_stock: bool = True

class BookUpdatePrice(BaseModel):
    price: float
```

To insert a new record, the validated Pydantic model is used to create the ORM object.

```py
from sqlalchemy.orm import Session

def create_book(db: Session, data: BookCreate):
    book = Book(**data.model_dump())
    db.add(book)
    db.commit()
    db.refresh(book)
    return book
```

The add method places the object into the session then commit method writes the changes to the database after refresh method reloads the object so generated values such as the primary key are available.

This function can be used inside a FastAPI route.

```py
from fastapi import Depends

@app.post("/books")
def create_book_route(payload: BookCreate, db: Session = Depends(get_db)):
    return create_book(db, payload)
```

Updating existing records follows a similar pattern.

```py
def update_book_price(db: Session, book_id: int, data: BookUpdatePrice):
    book = db.query(Book).filter(Book.id == book_id).first()
    if book is None:
        return None

    book.price = data.price
    db.commit()
    db.refresh(book)
    return book
```

Deleting records is also handled through the session.

```py
def delete_book(db: Session, book_id: int):
    book = db.query(Book).filter(Book.id == book_id).first()
    if book is None:
        return None

    db.delete(book)
    db.commit()
    return True
```

When using asynchronous database access, write operations must use an async session and await database interaction.

```py
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

async def create_book(db: AsyncSession, data: BookCreate):
    book = Book(**data.model_dump())
    db.add(book)
    await db.commit()
    await db.refresh(book)
    return book
```

Async route example.

```py
@app.post("/books")
async def create_book_route(payload: BookCreate, db: AsyncSession = Depends(get_db)):
    return await create_book(db, payload)
```

Async update example.

```py
async def update_book_price(db: AsyncSession, book_id: int, data: BookUpdatePrice):
    result = await db.execute(
        select(Book).where(Book.id == book_id)
    )
    book = result.scalars().first()
    if book is None:
        return None

    book.price = data.price
    await db.commit()
    await db.refresh(book)
    return book
```

Async delete example.

```py
async def delete_book(db: AsyncSession, book_id: int):
    result = await db.execute(
        select(Book).where(Book.id == book_id)
    )
    book = result.scalars().first()
    if book is None:
        return None

    await db.delete(book)
    await db.commit()
    return True
```

At this level, each write operation explicitly commits its changes.Transaction management are introduced later. The goal here is to understand how ORM objects are created, modified, and persisted using a database session inside a FastAPI application.

While the previous examples assume that all database operations succeed, applications must also account for failures.

Before moving on to more advanced transaction management, it is important to understand how basic database errors are handled in a FastAPI application and how failures can be reported in a controlled and predictable way.

## Basic database error handling

In applications, database operations can fail for many reasons. Records **may not exist**, input data **may be invalid**, or **constraints** defined at the database level may be violated. Handling these situations explicitly helps keep application behavior predictable and prevents unhandled exceptions from crashing the request.

A common case is attempting to read or modify a record that does not exist.

```py
from fastapi import HTTPException
from sqlalchemy.orm import Session

def get_book(db: Session, book_id: int):
    book = db.query(Book).filter(Book.id == book_id).first()
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    return book
```

If the requested record is not found, an `HTTPException` is raised. FastAPI automatically converts this into an HTTP response with the given status code and message. In this example, a `404` response is returned to indicate that the book does not exist.

When working with asynchronous database access, the same pattern is used.

```py
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

async def get_book(db: AsyncSession, book_id: int):
    result = await db.execute(
        select(Book).where(Book.id == book_id)
    )
    book = result.scalars().first()
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    return book
```

In the async version, the query must be awaited, but error handling works the same way. If no record is found, the route returns a controlled `404` response instead of failing silently.

Another common failure occurs when committing invalid data that violates **database constraints**. In such cases, SQLAlchemy may raise an exception during commit. At this level, it is sufficient to understand that commit can fail and that such errors should be caught and handled, which will be expanded in later sections.

Basic error handling ensures that the API returns meaningful responses instead of internal server errors, improving clarity for clients using the application.
