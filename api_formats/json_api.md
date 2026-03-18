# Content of JSON API

- [What a JSON API is](#what-a-json-api-is)
- [Why JSON is used](#why-json-is-used)
- [JSON request and response structure](#json-request-and-response-structure)
- [Sending data in JSON requests](#sending-data-in-json-requests)
- [Returning data in JSON responses](#returning-data-in-json-responses)
- [Common JSON data types](#common-json-data-types)
- [Working with nested JSON data](#working-with-nested-json-data)

When a client and server exchange data, they need a format both sides can understand. One of the most common formats for this is **JSON**.

JSON is widely used in APIs because it is simple, readable, and easy to work with in different programming languages. Instead of sending plain text or more complex formats, applications often send structured JSON data.

In this topic, the goal is to understand how data is represented in **JSON** and how that data moves between client and server.

## What a JSON API is

A JSON API is an API that uses JSON as the main format for data exchange.

When a client sends data to the server, that data is often written as JSON in the request body. When the server sends data back, the response body is also often returned as JSON.

A simple JSON object can look like this.

``` json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "price": 39.99
}
```

This structure stores data as key and value pairs. Each key names a field, and each value holds the data for that field.

A **JSON API** is simply an API where this format is used to send and receive structured data.

## Why JSON is used

JSON is used because it is easier to read and write than many older data formats.

It has a small amount of syntax, which makes the structure easier to see. It also maps well to common programming language structures such as **dictionaries**, **objects**, **lists**, **strings**, **numbers** and **booleans**.

Because of this, JSON is a practical format for sending data between **frontend applications**, **backend services**.

## JSON request and response structure

A **JSON API** usually works in two directions. The client sends JSON to the server, and the server returns JSON back to the client.

For example, a client may send data for a new book.

``` json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "year": 2008
}
```

The server may respond with the created data and include an `id`.

``` json
{
  "id": 1,
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "year": 2008
}
```

The important idea is that internal application data is converted into JSON when it is sent over HTTP.

## Sending data in JSON requests

When a client wants to send structured input to the server, that data is often placed in the request body as JSON.

This is common when **creating new records** or **updating existing ones**.

For example, a request body might look like this.

``` json
{
  "name": "Example",
  "email": "example@example.com",
  "is_active": true
}
```

The server reads this JSON body, parses it, and then works with the data
inside the application.

In Python, the parsed data usually becomes a dictionary like structure.

``` py
{
    "name": "Example",
    "email": "example@example.com",
    "is_active": True
}
```

The syntax changes slightly, but the data still represents the same values.

## Returning data in JSON responses

After the server processes a request, it often returns JSON in the response body.

This response may contain one object.

``` json
{
  "id": 5,
  "name": "Example",
  "email": "example@example.com",
  "is_active": true
}
```

It may also contain many objects.

``` json
[
  {
    "id": 1,
    "title": "Clean Code"
  },
  {
    "id": 2,
    "title": "The Pragmatic Programmer"
  }
]
```

In the first example, the response is a single JSON object. In the second example, the response is a JSON array that contains multiple objects.

This allows the client to receive data in a structured format that.

## Common JSON data types

JSON uses a small number of basic data types.

A value can be a **string**, **number**, **boolean**, **null**, **object** or **array**.

Here is an example that shows these types together.

``` json
{
  "title": "Clean Code",
  "year": 2008,
  "price": 39.99,
  "in_stock": true,
  "publisher": null,
  "tags": ["programming", "backend"],
  "author": {
    "name": "Robert C. Martin"
  }
}
```

## Working with nested JSON data

JSON can also represent more complex structures by placing objects and arrays inside other objects.

For example, a book can include author data and category data in the same response.

``` json
{
  "id": 10,
  "title": "Clean Code",
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
