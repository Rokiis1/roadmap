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
- [Updating database schemas safely](#updating-database-schemas-safely)
- [Handling `NotImplementedError` during migrations](#handling-notimplementederror-during-migrations)

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
    isbn: Mapped[int] = mapped_column(Integer)
```

Updating the model alone does not update the existing database table. The database schema still reflects the old structure, which can lead to inconsistencies between the application code and the database.

Without a migration system, developers would need to manually modify the database schema using SQL statements such as

```sql
ALTER TABLE books ADD COLUMN isbn INTEGER;
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

In Python projects that use SQLAlchemy, the standard migration tool is **Alembic**.

Alembic works alongside SQLAlchemy and helps track changes to the database schema over time. Instead of modifying database tables manually every time the models change, developers create migration revisions that describe how the schema should move from one version to another.

![migration_alembic](./assets/images/migration_alembic.png)

A migration revision is simply a Python file that contains instructions for updating the database structure. These instructions usually define two directions. One direction upgrades the schema to a newer version and the other direction downgrades it back to an earlier version.

This is important because schema changes are rarely one-time events. During development, the database structure may evolve many times. A project might start with a `books` table, then later add an `authors` table, then later add a new column such as `published_year`. Alembic helps manage these changes in the correct order.

SQLAlchemy still defines the ORM models and database structure in Python code. Alembic uses those models as a reference and generates migration steps that can be applied to the actual database.

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

For example, if the FastAPI project stores the URL in a module such as `database`, the Alembic environment can import it.

```py
from database import DATABASE_URL
```

Even if the application uses an asynchronous database URL such as

```py
sqlite+aiosqlite:///./app.db
```

Alembic migrations are typically executed using a synchronous connection.

Because of that, the async driver part is removed before configuring Alembic.

```py
sync_database_url = DATABASE_URL.replace("+aiosqlite", "")
config.set_main_option("sqlalchemy.url", sync_database_url)
```

This allows Alembic to use the same database file as the application, while still using a synchronous connection that works reliably for migrations.

Migrations are executed as standalone commands and are not part of the async request handling used by FastAPI. Because of that, they do not need to use the async driver.

That consistency is important because migrations should run against the same database used by the application, even if the connection style differs.

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

The `target_metadata` variable is the link between Alembic and the SQLAlchemy models.

When Alembic performs autogeneration, it compares `target_metadata` against the actual database schema. It then determines which tables, columns, and constraints have changed.

This means the project models must be imported correctly before migration generation runs. If a model is missing from the imports, Alembic will not see it in the metadata and may fail to detect the schema structure properly.

For example, if the project has separate model files such as `book.py`, `author.py` and `category.py`, they usually need to be imported somewhere in the models package so that they are registered before `Base.metadata` is inspected.

A common pattern is to make sure `models.__init__.py` imports all model classes.

```py
from models import Book, Author, Category
```

Once Alembic is connected to the correct metadata, it is ready to create migration revisions based on the models.

The first migration usually captures the initial schema of the project.

## Creating the first migration

The first migration records the initial database structure defined by the ORM models.

If the project already contains models such as `Book`, `Author` or `Category`, Alembic can generate the initial revision automatically.

If the project uses `pip`

```bash
alembic revision --autogenerate -m "create initial tables"
```

If the project uses **Poetry**

```bash
poetry run alembic revision --autogenerate -m "create initial tables"
```

This command tells Alembic to inspect the SQLAlchemy metadata, compare it to the current database schema, and generate a new revision file.

The `-m` value is the human-readable message attached to the migration. It helps describe what the revision is intended to do.

If the database is empty and the models define several tables, Alembic generates operations to create those tables.

The resulting revision file is placed inside the `alembic/versions` directory.

A typical revision file looks like this.

```py
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b71f64b3eed0'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###
```

The `revision` value uniquely identifies this migration.

The `down_revision` value points to the revision that comes immediately before it.

Together, these identifiers form a chain of migration history. Alembic uses that chain to determine the correct order in which migrations must be applied.

The `upgrade()` function describes how to move the schema forward.

The `downgrade()` function describes how to undo that change.

Even when Alembic generates the revision automatically, the file should still be reviewed. Autogeneration helps a lot, but developers are still responsible for checking that the migration actually matches the intended schema change.

Once the first migration is created, later changes to the ORM models can also be turned into migration files.

## Autogenerating migrations from ORM models

One of Alembic’s most useful features is autogeneration.

When the ORM models change, Alembic can compare the updated metadata to the current database schema and generate the migration operations needed to bring the database up to date.

For example, suppose the original Book model contains these fields.

```py
class Book(TimestampMixin, Base):
    __tablename__ = "books"
    __table_args__ = (
        CheckConstraint("pages > 0", name="check_book_pages_positive"),
        CheckConstraint("price >= 0", name="check_book_price_non_negative"),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    year: Mapped[int] = mapped_column(Integer, nullable=False, index=True)
    pages: Mapped[int] = mapped_column(Integer, nullable=False)
    price: Mapped[float] = mapped_column(Float, nullable=False)
    in_stock: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)

    author_id: Mapped[int] = mapped_column(
        ForeignKey("authors.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )

    author: Mapped["Author"] = relationship(
        back_populates="books",
    )

    categories: Mapped[list["Category"]] = relationship(
        secondary=book_category,
        back_populates="books",
    )
```

Later, the application may need to store the publication year.

```py
class Book(TimestampMixin, Base):
    __tablename__ = "books"
    __table_args__ = (
        CheckConstraint("pages > 0", name="check_book_pages_positive"),
        CheckConstraint("price >= 0", name="check_book_price_non_negative"),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    year: Mapped[int] = mapped_column(Integer, nullable=False, index=True)
    pages: Mapped[int] = mapped_column(Integer, nullable=False)
    price: Mapped[float] = mapped_column(Float, nullable=False)
    isbn: Mapped[int] = mapped_column(Integer, nullable=False)
    in_stock: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)

    author_id: Mapped[int] = mapped_column(
        ForeignKey("authors.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )

    author: Mapped["Author"] = relationship(
        back_populates="books",
    )

    categories: Mapped[list["Category"]] = relationship(
        secondary=book_category,
        back_populates="books",
    )
```

After the model is updated, a new migration can be generated.

If the project uses `pip`

```bash
alembic revision --autogenerate -m "add isbn to books"
```

If the project uses `Poetry`

```bash
poetry run alembic revision --autogenerate -m "add isbn to books"
```

However, when creating a second or later migration, Alembic may raise an error like this.

```bash
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
ERROR [alembic.util.messaging] Target database is not up to date.
FAILED: Target database is not up to date.
```

This happens when a previous migration file has already been created, but the database itself has not yet been upgraded to that latest revision.

In other words, the migration history in the `versions` directory has moved forward, but the actual database schema is still behind.

Alembic does not allow generating a new migration on top of an outdated database state. Before creating another revision, the existing migrations must first be applied to the database.

That is done with the upgrade command.

## Applying migrations to the database

Creating a migration file does not change the database by itself.

The migration must be applied using the Alembic upgrade command.

If the project uses `pip`

```bash
alembic upgrade head
```

If the project uses **Poetry**

```bash
poetry run alembic upgrade head
```

The word `head` means the latest available revision in the migration history.

When this command runs, Alembic connects to the database, checks which revisions have already been applied, and executes any missing `upgrade()` functions in order.

A successful execution produces output similar to this.

```bash
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
INFO  [alembic.runtime.plugins] setting up autogenerate plugin alembic.autogenerate.schemas
INFO  [alembic.runtime.plugins] setting up autogenerate plugin alembic.autogenerate.tables
INFO  [alembic.runtime.plugins] setting up autogenerate plugin alembic.autogenerate.types
INFO  [alembic.runtime.plugins] setting up autogenerate plugin alembic.autogenerate.constraints
INFO  [alembic.runtime.plugins] setting up autogenerate plugin alembic.autogenerate.defaults
INFO  [alembic.runtime.plugins] setting up autogenerate plugin alembic.autogenerate.comments
INFO  [alembic.autogenerate.compare.tables] Detected added column 'books.isbn'
Generating
done
```

This output confirms that Alembic has applied the migration and updated the database schema to the latest revision.

For example, if the project has an initial migration and then a second migration that adds a new column, Alembic applies both in sequence if the database is still behind.

Alembic also creates its own internal table named `alembic_version`. This table stores the current revision identifier applied to the database.

That is how Alembic knows which migrations have already run and which ones still need to be executed.

Applying migrations in this way keeps the database schema synchronized with the evolution of the application code.

In development, this often happens whenever the models change and a new revision is created.

In real projects, the same process is also used in test and production environments so that all databases follow the same schema history.

Sometimes, however, a schema change must be reversed.

That is where downgrading becomes relevant.

## Downgrading migrations

Alembic revisions support both forward and backward movement through schema history.

The `upgrade()` function moves the schema to a newer version and the `downgrade()` function reverts it to the previous one.

To move back one revision, Alembic provides the downgrade command.

If the project uses `pip`

```bash
alembic downgrade -1
```

If the project uses `Poetry`

```bash
poetry run alembic downgrade -1
```

This tells Alembic to undo the most recent migration.

A successful execution produces output similar to this.

```bash
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
INFO  [alembic.runtime.migration] Running downgrade b71f64b3eed0 -> , create initial tables
```

This output shows that the latest revision was removed and the database schema was moved one step backward.

A specific target revision can also be used.

If the project uses `pip`

```bash
alembic downgrade b71f64b3eed0
```

If the project uses `Poetry`

```bash
poetry run alembic downgrade b71f64b3eed0
```

In that case, Alembic downgrades the database until it reaches the specified revision.

A successful execution produces output similar to this.

```bash
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
INFO  [alembic.runtime.migration] Running downgrade a06a32c0230e -> b71f64b3eed0, add published year to books
```

This means the database was moved from a newer revision back to the specified one.

Downgrading is especially useful during development and testing, where schema changes may need to be adjusted repeatedly.

For example, if a migration adds the wrong column or uses an incorrect constraint, downgrading allows the database to return to the earlier state before a corrected migration is created.

The ability to upgrade and downgrade safely is one of the main reasons migration systems are preferred over manual schema editing.

As schema changes become more frequent, it becomes important not only to create migrations, but to create them carefully.

## Updating database schemas safely

Changing a database schema affects stored data, application logic, and sometimes even deployment order.

Because of that, migrations should be written and applied carefully.

A small change in an ORM model may produce a migration that looks simple, but the effect on the real database can still be significant.

For example, suppose the `Book` model is updated to add a new field.

```py
class Book(TimestampMixin, Base):
    __tablename__ = "books"
    __table_args__ = (
        CheckConstraint("pages > 0", name="check_book_pages_positive"),
        CheckConstraint("price >= 0", name="check_book_price_non_negative"),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    year: Mapped[int] = mapped_column(Integer, nullable=False, index=True)
    pages: Mapped[int] = mapped_column(Integer, nullable=False)
    price: Mapped[float] = mapped_column(Float, nullable=False)
    published_year: Mapped[int] = mapped_column(Integer, nullable=False)
    in_stock: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)

    author_id: Mapped[int] = mapped_column(
        ForeignKey("authors.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )

    author: Mapped["Author"] = relationship(
        back_populates="books",
    )

    categories: Mapped[list["Category"]] = relationship(
        secondary=book_category,
        back_populates="books",
    )
```

After autogeneration, Alembic may produce a migration like this.

```py
def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('books', sa.Column('isbn', sa.INTEGER(), nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('books', 'isbn')
    # ### end Alembic commands ###
```

At first glance, this migration looks straightforward. However, if the `books` table already contains rows, adding a new column with `nullable=False` may fail because existing records do not yet have a value for `isbn`.

This is exactly why autogenerated migrations should always be reviewed before being applied. The migration may be structurally correct, but the developer still needs to think about how it behaves against existing data.

In practice, when adding a new column to a table that already contains data, the change is usually performed in steps.

Instead of adding the column as non-nullable immediately, the column is first introduced in a way that does not break existing rows.

For example, the migration can be adjusted like this.

```py
def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('books', 'isbn',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###
```

This allows the database to accept the new column without requiring values for existing records.

After the column is added, the existing rows can be updated with appropriate values. This step depends on the application logic and may involve setting default values or computing them based on other fields.

Once all rows contain valid data, the column can be changed to enforce the constraint.

Another example is removing an existing field from the model. Suppose the `genre` field is removed from `Book`. Alembic may generate a migration like this.

```py
def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_books_genre'), table_name='books')
    op.drop_column('books', 'genre')
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('books', sa.Column('genre', sa.VARCHAR(length=100), nullable=False))
    op.create_index(op.f('ix_books_genre'), 'books', ['genre'], unique=False)
    # ### end Alembic commands ###
```

This migration is also valid from Alembic’s point of view, but it carries more risk. Dropping a column removes part of the schema, and the data stored in that column may be lost.

That is why destructive changes such as dropping columns or tables should be reviewed even more carefully. In development, such changes are often acceptable while the schema is still evolving. In real projects, especially once important data already exists, these operations should be treated with caution.

It is also important to distinguish between the ORM model code and the migration code.

In the ORM model, **SQLAlchemy 2.x** uses `Mapped[...]` together with `mapped_column(...)`.

```py
published_year: Mapped[int] = mapped_column(Integer, nullable=False)
```

In the Alembic revision file, the generated operations use `sa.Column(...)`.

```py
op.add_column('books', sa.Column('published_year', sa.Integer(), nullable=False))
```

This difference is expected. The model describes the table structure inside the application, while the migration file describes the database operation needed to change the schema.

For that reason, migrations are not just a technical detail. They are part of how a project evolves safely over time.

However, even when migrations are generated correctly, applying them to an existing database does not always succeed. When tables already contain data, new constraints or structural changes can lead to runtime errors.

One of the most common issues encountered at this stage is the `NotImplementedError`, which occurs when existing data does not satisfy the new schema rules.

This type of error is not specific to a single database system. It can occur in any relational database when schema changes conflict with existing data. However, when using SQLite, these errors may appear more frequently because of its limited support for certain schema alterations and how it handles `ALTER TABLE` operations internally.

## Handling `NotImplementedError` during migrations

When working with database migrations, it is important to understand that not all schema changes can be applied directly in every database system.

If a migration tries to modify a constraint in a way that SQLite does not support, the operation fails before the schema change can be completed. In these situations, Alembic raises a `NotImplementedError`.

A typical error may look like this.

```bash
NotImplementedError: No support for ALTER of constraints in SQLite dialect.
Please refer to the batch mode feature which allows for SQLite migrations
using a copy-and-move strategy.
```

This type of error occurs when the migration uses an operation that depends on `ALTER TABLE` support for constraints, but SQLite cannot perform that operation directly. SQLite omits many direct constraint-alteration operations, and Alembic documents batch mode as the recreate-and-copy approach used for SQLite table changes.

For example, consider a project that starts with a `Book` model that does not yet include an author relationship.

```py
class Book(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str]
```

A migration is created and applied for this version of the model.

```bash
poetry run alembic revision --autogenerate -m "create books without author"
poetry run alembic upgrade head
```

A migration is created and applied for this version of the model. At this stage, the `books` table exists without an `author_id` column and without a foreign key constraint to `authors`.

Later, the model is updated to include a required relationship.

```py
class Book(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str]

    author_id: Mapped[int] = mapped_column(
        ForeignKey("authors.id", ondelete="RESTRICT"),
        nullable=False
    )
```

After this change, a new migration is generated.

```bash
poetry run alembic revision --autogenerate -m "add author foreign key to books"
```

A typical autogenerated migration may look like this.

```py
def upgrade() -> None:
    op.add_column("books", sa.Column("author_id", sa.Integer(), nullable=False))
    op.create_index(op.f("ix_books_author_id"), "books", ["author_id"], unique=False)
    op.create_foreign_key(
        "fk_books_author_id",
        "books",
        "authors",
        ["author_id"],
        ["id"],
        ondelete="RESTRICT",
    )
```

At the migration level, this may look valid. However, SQLite cannot apply the constraint change directly when the migration uses operations such as `create_foreign_key(...)` outside batch mode.

When the migration is applied.

```bash
poetry run alembic upgrade head
```

SQLite raises a `NotImplementedError`, because it cannot execute this kind of constraint modification using `ALTER TABLE`.

For this reason, migrations in SQLite must sometimes be rewritten to use batch mode.

Instead of applying the constraint directly, the migration is updated as follows.

```py
with op.batch_alter_table("books") as batch_op:
    batch_op.create_foreign_key(
        "fk_books_author_id",
        "authors",
        ["author_id"],
        ["id"],
        ondelete="RESTRICT",
    )
```

This allows Alembic to recreate the table using a copy-and-move strategy instead of trying to alter it in place.

It is also important to understand that migrations may fail partway through. In such cases, some operations may already have been applied.

For example, the column may already exist even though the migration failed later when creating the foreign key. If the migration is run again, this may produce a different error.

```bash
sqlite3.OperationalError: duplicate column name: author_id
```

In this situation, the revision file must be updated to match the actual database state. If the column was already created, the following lines should be removed from the migration.

```py
op.add_column("books", sa.Column("author_id", sa.Integer(), nullable=False))
op.create_index(op.f("ix_books_author_id"), "books", ["author_id"], unique=False)
```

Only the remaining missing operation should be kept.

```py
with op.batch_alter_table("books") as batch_op:
    batch_op.create_foreign_key(
        "fk_books_author_id",
        "authors",
        ["author_id"],
        ["id"],
        ondelete="RESTRICT",
    )
```

At a conceptual level, this means that migrations must reflect the actual state of the database, not only the intended changes.

Ignoring this can lead to repeated failures and inconsistent schema updates.
