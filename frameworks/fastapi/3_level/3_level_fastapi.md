# Content of Python FastAPI Level 3

- [Router](#router)
- [Middleware](#middleware)
- [Cors](#cors)

In **Python FastAPI Level 1**, the focus was on the basic structure of a FastAPI application. Routes were defined directly on the application object, request data was validated, and responses were returned in a structured way.

In **Python FastAPI Level 2**, the application was extended to work with database models, Pydantic schemas, and related data. At that stage, routes became more realistic because they had to coordinate request validation, database access, and nested response structures.

As an application grows, another problem appears. Even if each individual route is correct, placing all routes directly in one file quickly becomes difficult to manage. The code becomes longer, different parts of the application become mixed together, and the overall structure becomes harder to follow.

At this point, the next step is not adding more business logic, but improving how the application itself is organized.

In this level, we focus on the parts of FastAPI that help structure and control the application at a higher level. We will separate routes into dedicated units, see how request and response processing can be intercepted, and understand how the application can be configured to communicate safely with clients running on other origins.

We begin with routers.

## Router

In the earlier levels, routes were attached directly to the main FastAPI application object.

```py
from fastapi import FastAPI

app = FastAPI()

@app.get("/books")
async def list_books():
    return []
```

This works well in small examples, but as more resources are added, the file begins to grow. Routes for `books`, `authors`, `categories`, `users`, `authentication` and other features all compete for space in the same module.

The problem is not that the routes stop working. The problem is that the application becomes harder to read and maintain.

FastAPI solves this by allowing routes to be grouped into routers.

A router is an object that collects related routes in one place. Instead of attaching every route directly to the main application object, routes can first be attached to an `APIRouter` and then included in the application.

This allows the application to be split into smaller parts while still behaving as one API.

A router is created using `APIRouter`, and routes are attached to it in the same way as before.

```py
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_books():
    return []

@router.get("/{book_id}")
async def get_book(book_id: int):
    return {"book_id": book_id}
```

At this point, the routes exist, but they are not yet part of the application. To make them available, the router must be included in the main FastAPI instance.

```py
from fastapi import FastAPI
from routers import books

app = FastAPI()

app.include_router(books.router)
```

When the router is included, all of its routes become part of the application.

In practice, routers are often included with additional configuration.

```py
app = FastAPI(prefix="/books", tags=["Books"])
```

The `prefix` argument adds a path in front of every route defined in the router. A route defined as `/` inside the router becomes `/books`, and a route defined as `/{book_id}` becomes `/books/{book_id}`.

The `tags` argument is used for documentation. It groups routes in Swagger UI so that related endpoints appear together. This does not affect how the API behaves, only how it is presented.

Using routers separates the definition of routes from how they are exposed in the application. The router focuses on the resource itself, while the main application decides how that resource is structured within the API.

While routers help organize *where* routes are defined, they do not change *how* requests are processed. Every request still follows the same path through the application, from the moment it arrives to the moment a response is returned.

In some situations, it is useful to run logic **before or after every request**, regardless of which route is called. This could include tasks such as logging, modifying headers, measuring execution time, or handling cross-cutting concerns that apply to the entire application.

FastAPI provides a way to intercept requests and responses globally using middleware.

## Middleware

In the previous section, routers were used to organize routes. Each route handles a specific request and returns a response.

Sometimes, logic should not be repeated inside every route. There are cases where the same code should run for every request, no matter which endpoint is called. This is where middleware is used.

Middleware is a function that sits between the incoming request and the route. It receives the request before the route runs, and it also receives the response after the route finishes.

A simple middleware looks like this.

```py
from fastapi import FastAPI, Request

app = FastAPI()

@app.middleware("http")
async def simple_middleware(request: Request, call_next):
    print("Request received")

    response = await call_next(request)

    print("Response created")

    return response
```

The string `"http"` tells FastAPI that this middleware should run for HTTP requests. At this level, this is the most common type of middleware.

The request argument represents the incoming HTTP request. It contains information such as the method, path, headers, and body.

The `call_next` argument is a function provided by FastAPI. Calling `await call_next(request)` passes the request to the next step, which is usually the route function. Without calling it, the request would never reach the route.

When the request arrives, the middleware runs first. The line `print("Request received")` executes before the route.

Then await `call_next(request)` runs the route function and produces a response.

After that line finishes, execution returns back to the middleware. At this point, the response already exists, and the middleware can inspect or change it before returning it.

For example, the middleware can print information about the request.

```py
@app.middleware("http")
async def log_path(request: Request, call_next):
    print("Path:", request.url.path)

    response = await call_next(request)

    return response
```

In this case, every request will print the URL path in the server output.

Middleware is used for logic that should apply to all requests. It runs automatically for every request and surrounds the route execution without modifying the route itself.

In the next section, we will see a practical use case of middleware when working with requests coming from different origins.

## Cors

In **Web Development**, CORS was already explained as a browser security rule that controls whether a frontend running on one origin is allowed to send requests to a backend on another origin.

At this level, the focus is not on the theory again, but on how CORS is integrated into a FastAPI application.

FastAPI handles CORS through middleware. This means the application is configured once, and the rules are applied automatically to incoming browser requests.

CORS support is added using `CORSMiddleware`.

```py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

This middleware tells FastAPI which origins are allowed to access the API.

The `allow_origins` argument defines which frontend origins are permitted. In this example, requests coming from `http://localhost:5473` are allowed.

The `allow_credentials` argument controls whether cookies or authentication headers may be included.

The `allow_methods` argument defines which HTTP methods are allowed, such as `GET`, `POST`, `PUT`/`PATCH` and `DELETE`. Using `"*"` allows all methods.

The `allow_headers` argument defines which request headers the client is allowed to send. Using `"*"` allows all headers.

With this configuration in place, browser requests from the allowed frontend origin can reach the API correctly.

A development setup is a frontend running on one port and a FastAPI backend running on another port.

For example, the frontend may run on

```bash
http://localhost:5473
```

while the FastAPI application runs on

```bash
http://127.0.0.1:8000
```

Even though both are local, they are different origins, so the browser applies CORS rules. Without `CORSMiddleware`, the browser may block the request even if the backend route itself works correctly.

CORS middleware is usually added near the start of the application setup, after creating the FastAPI app and before the application starts handling requests.

At this level, it is enough to understand that CORS in FastAPI is enabled by adding `CORSMiddleware` and configuring which origins, methods, headers, and credentials are allowed.
