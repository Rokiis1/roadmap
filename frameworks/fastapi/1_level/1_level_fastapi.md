# Content of Python FastAPI 1 level

- [Setup (FastAPI and Uvicorn)](#setup-fastapi-and-uvicorn)
- [Your first FastAPI app](#your-first-fastapi-app)
- [Path operations (routes)](#path-operations-routes)
- [Path parameters](#path-parameters)
- [Query parameters](#query-parameters)
- [Request body with Pydantic and basic validiation](#request-body-with-pydantic-and-basic-validiation)
- [Errors with HTTPException](#errors-with-httpexception)
- [Automatic API docs (Swagger UI)](#automatic-api-docs-swagger-ui)

FastAPI is a Python framework designed for this kind of work. It allows us to define how a program reacts to incoming HTTP requests and how data flows in and out of the application.

In this level, we focus on the **core building blocks** of FastAPI. We will **set up the environment**, **run a development server**, **define routes**, **accept input data**, **validate it**, and **return structured responses**. We will not use **databases**, **authentication**, or **advanced features** yet. The goal is to understand how a **FastAPI** application works at a fundamental level.

We begin by setting up FastAPI and running the server.

## Setup (FastAPI and Uvicorn)

Before writing any FastAPI code, we need a working environment where the required tools are installed. FastAPI is a Python package, and it needs a server process to run and respond to requests.

FastAPI itself does not listen for network traffic. It only describes how requests should be handled. A separate component is responsible for receiving HTTP requests and keeping the application running. For development, this role is handled by Uvicorn.

FastAPI and Uvicorn are installed using pip, just like other Python packages.

```bash
pip install fastapi uvicorn
```

Or wehn we managed using Poetry, FastAPI and Uvicorn are added as project dependencies instead of being installed globally.

```bash
poetry add fastapi uvicorn
```

Once the installation finishes, the packages become available to the Python interpreter. To confirm that the server is installed correctly, the uvicorn command can be executed from the terminal.

```bash
uvicorn --version
```

If a version number is printed, the installation is successful.

A FastAPI application starts as a regular Python file. Create a new file named main.py.

```py
from fastapi import FastAPI

app = FastAPI()
```

This file defines a FastAPI application object. At this stage, the application does not handle any requests. No routes exist yet. The object only represents the API structure.

To run the application, it must be started through Uvicorn.

```bash
uvicorn main:app --reload
```

Or if the application is started through Poetry so that the correct virtual environment is used.

```bash
poetry run uvicorn main:app --reload
```

This command tells Uvicorn to load the application object from the file and start a development server. The reload option causes the server to restart automatically whenever the code changes.

After the server starts, it listens for requests on the local machine. By default, the application is available at `http://127.0.0.1:8000`.

Unlike earlier Python programs that execute and then exit, a FastAPI application stays alive. The process continues running and waits for incoming requests. When a request arrives, Uvicorn passes it to FastAPI, which decides how to respond.

With the server running and the application in place, we are ready to define our first route.

In the next section, we will create the first FastAPI endpoint and see how a request is handled end to end.

## Your first FastAPI app

In the setup section, we created a FastAPI application object and started the server. At that point the application existed, but it had no routes. A route is what connects an incoming HTTP request to a Python function.

A FastAPI route is created by attaching a decorator to a function. The decorator describes which URL path should trigger the function and which HTTP method is used.

Open `main.py` and add your first route.

```py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello, FastAPI"}
```

This creates an endpoint at the root path `/`. When a client sends a GET request to `/`, FastAPI runs the `root` function and turns the returned dictionary into a JSON response.

Make sure the server is running.

```bash
poetry run uvicorn main:app --reload
```

Now open `http://127.0.0.1:8000/` in a browser. You should see a JSON response containing the message.

FastAPI automatically converts common Python data types into JSON. A dictionary becomes a JSON object. A list becomes a JSON array. Strings, integers, floats, and booleans are converted into their JSON equivalents.

If you change the return value and refresh the browser, you will see the updated result. This is one of the reasons the reload option is useful during development.

At this point, it is worth clarifying how this application is started. In earlier Python modules, programs were often executed directly using an if `__name__ == "__main__"` block. FastAPI applications follow a different execution model.

This file does not control program execution. Instead, it defines an application object that is loaded by a server process. When Uvicorn starts, it imports the file as a module and uses the application object it finds. Because of this, we do not rely on an execution guard to start the server.

For convenience, some projects include an optional block like this.

```py
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True)
```

This block does not run when the file is imported by a server. It only runs when the file itself is executed directly. In this case, the application is still started by Uvicorn, but the server is launched from inside the file instead of from the command line.

When this pattern is used, the file is executed as a regular Python script.

```bash
python main.py
```

If the project is managed using Poetry, the execution is done through Poetry so that the correct environment is used.

```bash
poetry run python main.py
```

This approach can be useful for small experiments or quick local testing. However, it is not the primary way FastAPI applications are started. In practice, applications are usually run by invoking the server directly, which keeps execution and application definition separate.

This first endpoint shows the core idea behind FastAPI. You write Python functions, and the framework connects them to HTTP routes.

In the next section, we will expand routing and start working with different path operations.

## Path operations (routes)

In the previous section, we created a single route that responded to requests at the root path. That route introduced the core idea behind FastAPI routing. Each route connects a specific URL path and HTTP method to a Python function.

In FastAPI, routes are defined using decorators attached to functions. These decorators describe which HTTP method is expected and which path should trigger the function. A path operation is the combination of both.

The decorator name does not contain business logic. Calling `.get()`, `.post()`, `.put()`, `.patch()`, or `.delete()` does not change how the function executes internally. These method names exist to express intent and to make the API behavior clear to anyone reading or using it.

Every route runs inside a **request–response cycle**. FastAPI always receives a `request` and always produces a `response`. Most routes only care about returning data, but FastAPI also allows access to the incoming `request` and outgoing `response` when needed.

At this level, we only inspect these objects to understand what information is available. More advanced usage is covered in **Python FastAPI Level 2**.

A **GET** operation represents reading data.

```py
@app.get("/items")
def get_items():
    return ["item1", "item2"]
```

This route depends only on the operation itself. FastAPI handles the request and response automatically.

The same route can be written with access to the request and response objects.

```py
from fastapi import Request, Response

@app.get("/items/debug")
def debug_items(request: Request, response: Response):
    print("Request method:", request.method)
    print("Request path:", request.url.path)
    print("Query string:", request.url.query)
    print("Client:", request.client)
    print("Response status code:", response.status_code)
    return ["item1", "item2"]
```

When this route is called, request and response metadata are printed to the server terminal. The returned value still defines the response body. The request and response objects are inspected but not modified.

The notation `request: Request` and `response: Response` uses type hints. They do not change how Python executes the function. They describe what kind of object FastAPI should provide. This form of type annotation is part of Pythons dynamic typing system and will be covered later in the **Miscellaneous Level 1**.

A **POST** operation represents creating new data.

```py
@app.post("/items")
def create_item():
    return {"status": "item created"}
```

A **PUT** operation represents replacing an existing resource.

```py
@app.put("/items")
def replace_items():
    return {"status": "items replaced"}
```

A **PATCH** operation represents updating part of an existing resource.

```py
@app.patch("/items")
def update_items():
    return {"status": "items updated"}
```

A **DELETE** operation represents removing a resource.

```py
@app.delete("/items")
def delete_items():
    return {"status": "items deleted"}
```

FastAPI allows the same path to be reused with different HTTP methods. The framework selects the correct function based on both the request path and the HTTP method.

```py
@app.get("/users")
def get_users():
    return []

@app.post("/users")
def create_user():
    return {"status": "user created"}
```

The order of route definitions in the file does not affect how requests are handled. FastAPI builds its routing table when the application starts and uses it to dispatch requests.

At this stage, route functions return simple data structures. In the next section, we will start passing values through the URL itself.

In the next section, we will work with path parameters and see how dynamic parts of the path are handled.

## Path parameters

So far, the routes we defined used fixed paths. Each path always matched the same URL. In practice, URLs often need to include values that change, such as identifiers or names. Path parameters allow parts of the URL itself to act as input to a route.

A path parameter is defined by placing a variable name inside curly braces in the path. FastAPI extracts the value from the URL and passes it to the function as an argument.

Add a route with a path parameter.

```py
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/{item_id}")
def get_item(item_id):
    item_id = int(item_id)
    return {"item_id": item_id}
```

When a request is sent to `/items/42`, FastAPI captures the value `42` from the path and passes it to the `item_id` parameter of the function.

Values extracted from the URL are always strings. Even though `42` looks like a number, it is received as text. If the value represents a number, it must be converted explicitly inside the function.

If the value cannot be converted, Python raises an error. At this level, it is enough to understand that conversion is a responsibility of the route logic.

Path parameters are always required. If the value is missing, the path does not match and the request is not routed to the function.

Multiple path parameters can be used in the same route.

```py
@app.get("/users/{user_id}/posts/{post_id}")
def get_post(user_id, post_id):
    user_id = int(user_id)
    post_id = int(post_id)
    return {"user_id": user_id, "post_id": post_id}
```

Each parameter in the function signature corresponds to a named segment in the path. All values coming from the path start as strings and must be converted when numeric behavior is required.

Path parameters allow routes to represent dynamic resources while keeping the URL structure clear and predictable.

In the next section, we will work with query parameters and see how additional values can be passed without changing the path itself.

## Query parameters

So far, we passed values through the URL path itself. In some cases, values are optional or used to adjust how a request behaves without changing the path. Query parameters allow additional data to be sent as part of the request URL.

Query parameters appear after a question mark in the URL and are written as key value pairs separated by ampersands.

Add a route that uses query parameters.

```py
from fastapi import FastAPI

app = FastAPI()

@app.get("/items")
def list_items(limit=None, offset=None):
    if limit is not None:
        limit = int(limit)
    if offset is not None:
        offset = int(offset)
    return {"limit": limit, "offset": offset}
```

When a request is sent to `/items?limit=10&offset=20`, FastAPI extracts the values from the query string and passes them to the function arguments.

Query parameters values are also received as strings. Even when they look like numbers, they must be converted before numeric operations are performed.

Query parameters are optional by default. If a value is not provided, the corresponding argument receives `None`.

A route can use both path parameters and query parameters at the same time.

```py
@app.get("/items/{category}")
def list_category_items(category, limit=None):
    if limit is not None:
        limit = int(limit)
    return {"category": category, "limit": limit}
```

In this example, `category` comes from the path and remains text, while `limit` comes from the query string and is converted to a number.

Query parameters do not affect which route is selected. Routing is determined only by the path and the HTTP method. Query parameters only influence how the selected route behaves.

At this level, numeric conversion is handled manually. In later sections, FastAPI features will be introduced that automate this process.

In the next section, we will start sending structured data in the request body.

## Request body with Pydantic and basic validiation

So far, the data we passed into routes came from the URL path or from query parameters. These approaches work well for small values, but they are not suitable for structured or larger inputs. When a client needs to send structured data, it is sent in the request body.

In FastAPI, request bodies are described using Pydantic models. A Pydantic model defines the shape of the expected data and how it should be parsed.

A request body is commonly used with **POST** and **PUT** operations.

Create a simple Pydantic model.

```py
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
```

This model describes the expected structure of the request body. It does not execute any logic. It only defines which fields are expected and how they are named.

Now use this model in a route.

```py
@app.post("/items")
def create_item(item: Item):
    return item
```

When a client sends a POST request to `/items` with a JSON body, FastAPI reads the request body and creates an instance of the `Item` model.

For example, sending this JSON body.

```py
{
  "name": "Book",
  "price": 10.5
}
```

FastAPI parses the data and passes it to the function as the `item` argument.

When a client sends a JSON body to this endpoint, FastAPI reads the request body and attempts to create an Item object.

If the provided data matches the model structure, the request continues and the function is executed. The function receives a Python object instead of raw JSON.

If the data does not match the model, the request is rejected automatically. The route function is not called. FastAPI returns an error response describing what part of the input was invalid.

This validation happens before any application logic runs. There is no need to manually check for missing fields or incorrect values inside the function.

At this level, it is enough to understand that defining a request body using a Pydantic model also enables automatic validation.

If the parameter were defined without a Pydantic model, FastAPI would not treat it as request body data.

```py
@app.post("/items")
def create_item(item):
    return item
```

In this case, FastAPI treats `item` as a query parameter. If no **query parameter** named `item` is provided, FastAPI reports it as missing and returns an error indicating that a required **query value** was not found.

```json
{
  "detail": [
    {
      "type": "missing",
      "loc": ["query", "item"],
      "msg": "Field required",
      "input": null
    }
  ]
}
```

This difference exists because FastAPI decides where input data comes from based on the function signature. A Pydantic model signals structured request body data. A plain parameter signals a path or query value.

At this level, it is enough to remember that **request bodies are defined using Pydantic models**.

In the next section, we will look at how errors can be raised intentionally and returned to the client.

## Errors with HTTPException

So far, we relied on FastAPI to handle errors automatically, such as invalid request bodies or missing data. In some situations, an application needs to return an error response intentionally based on its own logic.

FastAPI provides `HTTPException` for this purpose. Raising this exception stops normal execution and sends an error response to the client.

Import `HTTPException` and use it inside a route.

```py
from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.get("/items/{item_id}")
def get_item(item_id):
    try:
        item_id = int(item_id)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid item id")

    if item_id != 1:
        raise HTTPException(status_code=404, detail="Item not found")

    return {"item_id": item_id}
```

Values coming from the URL are received as strings. When numeric behavior is required, the value must be converted explicitly. If conversion fails, the request represents invalid input and an error response is returned.

When an `HTTPException` is raised, the route function stops executing immediately. FastAPI catches the exception and generates an HTTP response using the provided status code and message.

The `status_code` describes the type of error. The `detail` value becomes part of the response body and is returned to the client.

`HTTPException` is used to represent expected error conditions, such as missing resources or invalid operations. It is not used for programming errors or unexpected failures.

When no exception is raised, the function behaves normally and returns a successful response.

Using `HTTPException` makes error handling explicit and keeps validation.

In the next section, we will look at the automatically generated API documentation and see how these routes and errors are represented.

## Automatic API docs (Swagger UI)

One of the built-in features of FastAPI is automatic API documentation. As routes, request bodies, and errors are defined, FastAPI generates interactive documentation without any additional configuration.

This documentation is generated from the information already present in the application, such as route paths, HTTP methods, request body models, and response structures.

When the server is running, open the following address in a browser.

```bash
http://127.0.0.1:8000/docs
```

This page displays the Swagger UI interface. It lists all available routes, grouped by path, and shows which HTTP methods are supported.

Each route entry includes information about required parameters, request bodies, and possible responses. Routes that use Pydantic models display the expected structure of the input data.

The documentation is interactive. Requests can be sent directly from the browser, and responses are shown immediately. This allows routes to be tested without writing additional client code.

FastAPI also provides an alternative documentation interface.

```bash
http://127.0.0.1:8000/redoc
```

This interface presents the same information in a different layout. Both interfaces are generated from the same underlying data.

The documentation updates automatically as the application changes. Adding or removing routes immediately affects what appears in the documentation.

At this level, it is enough to understand that the API documentation is always available while the server is running and reflects the current state of the application.
