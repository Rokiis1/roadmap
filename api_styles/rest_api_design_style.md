# Content of REST API design style

- [REST principles](#rest-principles)
- [CRUD operations](#crud-operations)
- [URI design](#uri-design)

When building APIs, it is not enough to decide how data looks. There also needs to be a consistent way to structure endpoints and define how clients interact with resources.

**REST** is common approaches for designing APIs. It is not a protocol or a library. It is a set of design ideas that guide how HTTP is used to work with resources.

The goal is to make APIs easy to understand.

## REST principles

**REST** stands for *Representational State Transfer*. It describes how a **client** and **server** communicate using HTTP in a structured way.

One important idea is that each request is independent. The server does not remember previous requests. Everything needed to process a request must be included in that request. This keeps interactions simple.

Another idea is that everything is treated as a resource. A resource can be anything such as a `user`, a `book` or an `order`. Each resource is identified by a **URL**.

    /books
    /books/1

The same rules are used for all resources. Instead of creating custom actions, the API relies on standard HTTP methods such as **GET**, **POST**,
**PATCH**, and **DELETE**. This creates a uniform way to interact with data.

There is also a clear separation between client and server. The client is responsible for the user interface, while the server is responsible for data and logic. Because of this separation, both sides can change independently.

Responses can also be reused. A server can indicate that a response may be cached, which allows clients to reuse data instead of requesting it again.

These ideas together make **REST APIs** easier to maintain.

## CRUD operations

Most APIs work with stored data. The basic operations for working with that data are **create**, **read**, **update** and delete.

In **REST**, these operations are mapped to **HTTP methods**.

Creating a new resource is done with **POST**.

    POST /books

Reading data is done with **GET**.

    GET /books
    GET /books/1

Updating data is done with **PUT** or **PATCH**. **PUT** replaces the full resource, while **PATCH** updates only part of it.

    PUT /books/1
    PATCH /books/1

Deleting data is done with **DELETE**.

    DELETE /books/1

These operations often match database actions. Creating maps to **insert**, **reading** maps to **select**, **updating** maps to **update** and **deleting** maps to
**delete**.

This mapping keeps the API consistent with how data is actually managed in the backend.

## URI design

**URIs** define how resources are identified. A consistent structure makes the API easier to use.

Resources are usually written as **plural nouns**.

    /users
    /books
    /orders

Names should stay simple and describe the resource directly. Extra words that do not add meaning should be avoided.

Related resources can be expressed using a hierarchical structure.

    /users/123/orders

This shows that the orders belong to a specific user.

The URI should describe the resource, not the action. Actions are handled by HTTP methods, not by naming.

Instead of writing something like this

    /getUser
    /createProduct

the API should use

    GET /users/1
    POST /products

Consistency is also important. Mixing **singular** and **plural** forms or using different naming styles makes the API harder to understand.

Paths should be written in **lowercase** to avoid issues on systems where case matters.

Versioning can also be included in the path when needed.

    /v1/users

This allows the API to evolve without breaking existing clients.

Designed **URI structure** makes the API reduces the need for extra explanation.
