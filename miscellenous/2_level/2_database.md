# Content of Python FastAPI Database Level 2

- [Basic database error handling](#basic-database-error-handling)

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
