- [Pagination](#pagination)
- [Rate Limiting](#rate-limiting)

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
