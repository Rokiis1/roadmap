<!-- markdownlint-disable MD033 -->
# Table of Contents: API Styles

- [JSON APIs](#json-apis)
- [RESTful APIs](#restful-apis)

## JSON APIs

**Explanation:**

APIs that use JSON (JavaScript Object Notation) as the primary data format for both requests and responses. They focus on lightweight and easy-to-parse data exchange.

<details>
    <summary>Overview:</summary>

- **Data Format:** Uses JSON exclusively for exchanging data.

- **Simplicity:** Focuses on minimal structure without enforcing strict RESTful conventions.

- **Usage:** For primary need is to transfer data between systems in an easily consumable format.

</details>

## RESTful APIs

**Explanation:**

RESTful APIs follow the principles of Representational State Transfer (REST). They use standard HTTP methods and a resource-based approach to interact with data.

<details>
    <summary>Overview:</summary>

- **HTTP Methods:** RESTful APIs use standard actions (GET, POST, PUT, PATCH, DELETE) to perform operations on resources.

- **Statelessness:** Each request contains all the information needed, ensuring that no session state is stored on the server.

- **Resource-Based URLs:** Organizes API endpoints around resources, identified by clear and structured URLs.

- **Standard Agreements:** Utilize HTTP status codes, headers, and both request and response bodies (typically formatted in JSON or XML) to indicate the success or failure of operations. For example, POST, PUT, and PATCH methods include a request body with data to be created or updated, while the response body contains the result of the operation.

</details>
