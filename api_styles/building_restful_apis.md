<!-- markdownlint-disable MD033 -->
# Table of Contents: Building RESTful APIs

- [REST Principles](#rest-principles)
- [CRUD Operations](#crud-operations)
- [URI Design](#uri-design)
- [Pagination](#pagination)
- [Rate Limiting](#rate-limiting)

## REST Principles

**Explanation:**

REST (Representational State Transfer) is an architectural style for building web services that use standard HTTP methods to interact with resources.

<details>
    <summary>Overview:</summary>

- **Statelessness:** Each request from the client must contain all the information needed to process that request. The server does not store any client context between requests.

- **Resource Identification:** Every resource (user or product) is uniquely identified by a URL, making it clear and consistent for accessing and manipulating data.

- **Uniform Interface:** A consistent set of rules is used for interactions. This means using standard HTTP methods (GET, POST, PUT, DELETE) and common data formats (JSON or XML) for both requests and responses.

- **Client-Server Architecture:** The client handles the user interface and presentation, while the server manages data processing and storage. This separation allows each side to evolve independently.

- **Cacheability:** Responses can be marked as cacheable, which helps reduce server load and improve performance by allowing clients to store and reuse previous responses.

</details>

## CRUD Operations

**Explanation:**

CRUD stands for Create, Read, Update, and Delete four common operations for managing persistent data storage. In RESTful APIs, these operations are mapped to standard HTTP methods, which in turn correspond to database operations on the server side.

<details>
    <summary>Overview:</summary>

- **Create:**
  - **Operation:** Adding new data or resources.
  - **HTTP Method:** `POST`.
  - **Database Operation:** Typically translated to an `INSERT` query.

- **Read:**
  - **Operation:** Retrieving existing data or resources.
  - **HTTP Method:** `GET`.
  - **Database Operation:** Usually corresponds to a `SELECT` query.

- **Update:**
  - **Operation:** Modifying existing data.
  - **HTTP Methods:** `PUT` (for full replacements) or `PATCH` (for partial updates).
  - **Database Operation:** Translated into an `UPDATE` query.

- **Delete:**
  - **Operation:** Removing data or resources.
  - **HTTP Method:** `DELETE`.
  - **Database Operation:** Maps to a `DELETE` query.

</details>

## URI Design

**Explanation:**

URI design involves crafting well-structured Uniform Resource Identifiers (URIs) to ensure clarity, consistency, and ease of use when interacting with web resources.

<details>
    <summary>Overview:</summary>

- **Resource Identification:**

  - **Good Practice:**
    - **Use Consistent Plural Nouns:** Always use `/users` instead of alternating between `/user` and `/users`.  
    - **Keep Names Simple and Descriptive:** Use names that clearly indicate the resource without extra words (`/orders` rather than `/orderList`).  
    - **Follow a Hierarchical Pattern:** For related resources, use nested URIs (`/users/123/orders` to represent a user's orders).
    - **Versioning:** API version in the URI to manage changes and maintain compatibility (`/v1/users`).

  - **Bad Practice:**
    - **Using Verbs in the URI:** Avoid URIs like `/getUser` or `/createProduct` the action should be represented by the HTTP method, not the URI.  
    - **Inconsistent Naming Conventions:** Mixing singular and plural forms (`/user/orders`) can lead to confusion.  
    - **Overly Complex or Irrelevant Terms:** Avoid adding unnecessary details (`/listAllUsers`) that do not add clarity to the resource being accessed.
    - **Case Inconsistency:**
      - Using uppercase letters for resource names or path parameters (`/Users` instead of `/users`) can cause issues on case-sensitive servers.
      - Path and query parameters should be written in lowercase for consistency.

</details>

## Pagination

**Explanation:**

Pagination is a technique used in APIs to divide large sets of data into smaller, manageable "pages."

<details>
    <summary>Overview:</summary>

- **Purpose:** Reduces response size, improving performance and reducing latency.

- **Common Pagination Methods:**
  - **Offset and Limit:**  Specify an offset (number of records to skip) and a limit (maximum number of records to return).
    - **Usage:** Good for simple datasets or when browsing small-to-moderate lists of records.
    - **Advantages:** Easy to implement and understand.
    - **Limitation:** May become inefficient on very large datasets as the database must skip many records.
    - **Example:** `?offset=20&limit=10`

  - **Page-Based Pagination:** Use page numbers and define the number of items per page.
    - **Usage:** Ideal for user interfaces that display paginated results, such as search results or list views where users jump between numbered pages.
    - **Advantages:** Provides a familiar and intuitive experience for users.
    - **Limitation:** Can result in inconsistent data if the underlying dataset changes frequently between page requests.
    - **Example:** `?page=2&per_page=10`

  - **Cursor-Based Pagination:** Use a cursor or token that points to the last retrieved item to load the next set of data.
    - **Usage:** Best suited for large or dynamic datasets (such as social media feeds).
    - **Advantages:** Offers more efficient and consistent pagination by using a cursor to reference the last record, avoiding the performance hit of large offsets.
    - **Limitation:** More complex to implement and can be harder to understand compared to other methods.
    - **Example:** `?cursor=abcdef123456`

- **Response Metadata:**
  - **Total Record Count:** The total number of available records.
  - **Current Page and Navigation Links:** Indicators for the current page, and links or cursors for the next and previous pages.
  - **Response Headers:**
    - `X-Total-Count` might indicate the total number of records.
    - Custom headers (or standardized ones) can aid in navigation when combined with links (using the `Link` header format).

</details>

## Rate Limiting

**Explanation:**

Rate limiting is a mechanism used to control the number of requests a client can make to an API within a given time frame.

<details>
    <summary>Overview:</summary>

- **Purpose:** Prevents abuse of API resources and too many requests ths ensures fair distribution of resources among multiple clients.

- **Common Implementation Methods:**
  - **Token Bucket:** A bucket is filled with tokens at a fixed rate. Each request consumes a token, and if no tokens are available, the request is denied.

  - **Fixed Window:** Requests are counted within fixed time intervals (per minute or per hour).

  - **Sliding Window:** A more dynamic approach that smooths out the rate limit over time, providing a more flexible limit handling.

- **Response Indicators:**
  - HTTP status code **429 (Too Many Requests)** is typically returned when the limit is exceeded.
  - Response headers may include details such as the remaining quota and reset time for the limit (`X-RateLimit-Remaining`, `X-RateLimit-Reset`).
