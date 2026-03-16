# Content of Python FastAPI Database Level 3

- [Why database migrations are needed](#why-database-migrations-are-needed)
- [Introduction to Alembic](#introduction-to-alembic)
- [Installing Alembic](#installing-alembic)
- [Initializing Alembic in the project](#initializing-alembic-in-the-project)
- [Understanding the Alembic project structure](#understanding-the-alembic-project-structure)
- [Configuring the database connection for Alembic](#configuring-the-database-connection-for-alembic)
- [Connecting Alembic to SQLAlchemy models](#connecting-alembic-to-sqlalchemy-models)
- [Creating the first migration](#creating-the-first-migration)
- [Autogenerating migrations from ORM models](#autogenerating-migrations-from-orm-models)
- [Applying migrations to the database](#applying-migrations-to-the-database)
- [Downgrading migrations](#downgrading-migrations)
- [Understanding Alembic revision files](#understanding-alembic-revision-files)
- [Updating database schemas safely](#updating-database-schemas-safely)
- [Working with migrations in FastAPI projects](#working-with-migrations-in-fastapi-projects)

In the previous level, we explored how SQLAlchemy ORM models represent database tables and how relationships, queries, and loading strategies allow applications to retrieve and organize data. These models define the structure of the database schema used by the application.

However, database schemas rarely remain static. As applications evolve, new fields may need to be added, existing columns may change, or entirely new tables may be introduced. Simply modifying ORM models in the code is not enough, because the database itself must also be updated to reflect those structural changes.

Updating a database schema manually can quickly become error-prone, especially as applications grow and multiple environments such as development, testing, and production must stay synchronized.

To manage these changes safely and consistently, developers use **database migrations**. Migration tools track schema changes over time and apply them to the database in a controlled and reproducible way.

In the Python ecosystem, the most common migration tool used together with SQLAlchemy is **Alembic**.

## Why database migrations are needed

Database schemas define the structure of the data used by an application. Tables, columns, constraints, and relationships describe how information is stored and how different pieces of data are connected.

In earlier levels, ORM models were used to define this structure directly in Python. For example, creating a model such as `Book` automatically describes the table that should exist in the database.

```py
class Book(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String)
    price: Mapped[float] = mapped_column(Float)
```

When the application first starts, SQLAlchemy can create the corresponding table using.

```py
Base.metadata.create_all(bind=engine)
```

This approach works well during early development. However, it has an important limitation. The `create_all()` method only **creates tables that do not exist**. It does not modify existing tables.

As an application evolves, the database schema often needs to change. For example, a new column may need to be added.

```py
class Book(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String)
    price: Mapped[float] = mapped_column(Float)
    published_year: Mapped[int] = mapped_column(Integer)
```

Updating the model alone does not update the existing database table. The database schema still reflects the old structure, which can lead to inconsistencies between the application code and the database.

Without a migration system, developers would need to manually modify the database schema using SQL statements such as

```sql
ALTER TABLE books ADD COLUMN published_year INTEGER;
```

Managing schema changes manually becomes difficult and risky. Multiple environments such as **development**, **testing** and **production** must all maintain the same schema, and changes must be applied in the correct order.

Database migrations solve this problem by providing a controlled way to track and apply schema changes over time. Each structural change to the database is recorded as a migration step. These steps can then be applied sequentially to update the database schema safely.

A migration system allows to.

- Apply schema changes consistently across environments

- Upgrade or downgrade the database schema when necessary

- keep the database synchronized with the ORM models used by the application

In the Python ecosystem, the most widely used migration tool for SQLAlchemy projects is **Alembic**. Alembic generates migration scripts that describe how the database schema should change and provides commands to apply those changes to the database.

In the following sections, we will introduce Alembic and configure it to manage schema migrations in a FastAPI application.

## Introduction to Alembic

Once it is clear why database migrations are needed, the next step is to look at the tool that manages them.

In Python projects that use SQLAlchemy, the standard migration tool is *Alembic*.

Alembic works alongside SQLAlchemy and helps track changes to the database schema over time. Instead of modifying database tables manually every time the models change, developers create migration revisions that describe how the schema should move from one version to another.

A migration revision is simply a Python file that contains instructions for updating the database structure. These instructions usually define two directions. One direction upgrades the schema to a newer version and the other direction downgrades it back to an earlier version.

This is important because schema changes are rarely one-time events. During development, the database structure may evolve many times. A project might start with a `books` table, then later add an `authors` table, then later add a new column such as `published_year`. Alembic helps manage these changes in the correct order.

Alembic does not replace SQLAlchemy. SQLAlchemy still defines the ORM models and database structure in Python code. Alembic uses those models as a reference and generates migration steps that can be applied to the actual database.

This creates a clear separation of responsibilities. SQLAlchemy defines what the schema should look like in code and Alembic manages how the real database is updated over time to match that schema.

In practice, Alembic becomes part of the normal development workflow. When the models change, a new migration is created. That migration is then reviewed and applied to the database.

Before working with migrations, Alembic must first be installed and initialized inside the project.

## Installing Alembic

If the project uses `pip`, Alembic can be installed with

```bash
pip install alembic
```

If the project uses Poetry, Alembic is added with

```bash
poetry add alembic
```

Once installed, the `alembic` command becomes available in the project environment.

This command is used to initialize Alembic, create migration revisions, and apply those revisions to the database.

At this stage, Alembic is only installed. It is not yet connected to the project and does not know anything about the database or the ORM models.

To make Alembic usable, it must be initialized inside the project directory.

## Initializing Alembic in the project

After Alembic is installed, the project must be prepared to use it.

This is done by running the initialization command inside the project root.

If the project uses `pip`, the command can be executed directly.

```bash
alembic init alembic
```

If the project uses **Poetry**, the command should be executed through Poetry so that it runs inside the project environment.

```bash
poetry run alembic init alembic
```

This command creates a new directory named `alembic` together with a configuration file named `alembic.ini`.

The initialization step does not create any migrations yet. It only creates the structure Alembic needs in order to manage them later.

The generated files give Alembic a place to store migration revisions and a configuration entry point that tells it how to connect to the database.

After initialization, the project contains the base migration setup, but it still needs to be configured to work with the actual SQLAlchemy models and database connection used by the FastAPI application.

Before changing any configuration, it is helpful to understand what Alembic created and what each generated file is responsible for.

## Understanding the Alembic project structure

After running the initialization command, the project usually contains a structure similar to this.

```ascii
alembic/
    versions/
    env.py
    README
    script.py.mako
alembic.ini
```

Each part of this structure has a specific responsibility.

- `alembic.ini` file contains the main Alembic configuration. This is where the database URL can be defined if the project uses a direct configuration approach.

- `alembic/` directory contains the migration environment itself.
  - `versions/` stores individual migration revision files. Each time a new migration is created, Alembic places a new Python file inside this folder.
  - `env.py` defines how Alembic connects to the database and how it discovers the SQLAlchemy metadata used for autogeneration.
  - `script.py.mako` is a template used by Alembic when creating new revision files. In most projects, this file is left unchanged.

At this point, Alembic has its own structure, but it still does not know which database to use or which SQLAlchemy models belong to the project.

That configuration is handled next.

## Configuring the database connection for Alembic

Alembic needs to know how to connect to the database before it can generate or apply migrations.

A simple Alembic configuration often places the database URL directly inside `alembic.ini`.

```ini
sqlalchemy.url = sqlite+aiosqlite:///./app.db
```

This tells Alembic to connect to the same SQLite database file used by the FastAPI application.

For simple learning projects, this direct approach is enough. However, many FastAPI projects already define the database URL inside a Python settings module or configuration file. In those cases, it is better for Alembic to reuse the same application configuration instead of duplicating the URL in multiple places.

That setup is usually handled inside `env.py`.

For example, if the FastAPI project stores the URL in a module such as `app.db.database`, the Alembic environment can import it.

```py
from app.db.database import DATABASE_URL

config.set_main_option("sqlalchemy.url", DATABASE_URL)
```

This allows Alembic to use the same database URL as the application itself.

That consistency is important because migrations should run against the same database configuration used by SQLAlchemy in the FastAPI project.

Once the database connection is configured, Alembic still needs one more important piece. It must know which SQLAlchemy metadata describes the schema.

Without that metadata, Alembic cannot compare the models to the current database structure and cannot autogenerate migrations.

## Connecting Alembic to SQLAlchemy models

Alembic uses SQLAlchemy metadata to understand the structure of the ORM models.

In projects using the declarative base pattern, this metadata is available through the base class.

For example, if the project defines the base like this.

```py
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass
```

Then all ORM models that inherit from `Base` register themselves inside `Base.metadata`.

Alembic must import that metadata inside `env.py`.

```py
from app.db.models import Base

target_metadata = Base.metadata
```
