<!-- markdownlint-disable MD033 -->
# Table of Contents: API Formats

- [JSON](#json)
- [XML](#xml)
- [CSV](#csv)

## JSON

**Explanation:**

JSON (JavaScript Object Notation) is a lightweight, human-readable data interchange format.

<details>
    <summary>Overview:</summary>

- **Lightweight & Readable:** JSON is easy for both humans and machines to read and write.

- **Sturcture:** Based on key-value pairs enclosed in curly braces `{}`. And support data types like strings, numbers, booleans, arrays, and objects.

- **Interoperability:** JSON is language-independent and supported by many programming environments.

- **Usage in APIs:** Commonly used in RESTful APIs and simple JSON APIs. And also make it easier the process of serializing and exchanging structured data between client and server.

</details>

<details>
    <summary>Examples:</summary>

1. **Example of Request:**

    ```javascript
    POST /users HTTP/1.1
    Host: jsonplaceholder.typicode.com
    Content-Type: application/json

    {
        "name": "Vardenis",
        "username": "Pavardenis",
        "email": "Vardenis.Pavardenis@example.com"
    }
    ```

2. **Example of Response:**

    ```json
    {
        "id": 11,
        "name": "Vardenis",
        "username": "Pavardenis",
        "email": "Vardenis.Pavardenis@example.com"
    }
    ```

</details>

## XML

**Explanation:**

XML (Extensible Markup Language) is a flexible, text-based format used for structuring data. It allows developers to define custom tags, making it suitable for representing complex data structures.

<details>
    <summary>Overview:</summary>

- **Structured Data:** XML uses a nested, hierarchical structure that makes it easy to represent complex relationships and data.

- **Self-Descriptive:** With user-defined tags, XML data is self-descriptive and can include metadata along with data elements.

- **Platform Independence:** As a text-based format, XML is supported by a wide range of programming languages and platforms.

- **Usage in APIs:** XML is a common format in SOAP-based web services. It also sees use in configuration files, data interchange, and document storage.

</details>

<details>
    <summary>Examples:</summary>

1. **Example of Request:**

    ```xml
    <Request>
        <User>
            <Name>John Doe</Name>
            <Age>30</Age>
        </User>
        <Action>Create</Action>
    </Request>
    ```

2. **Example of Response:**

    ```xml
    <Response>
        <Status>Success</Status>
        <Message>Request processed successfully.</Message>
        <UserID>12345</UserID>
    </Response>
    ```

</details>

## CSV

**Explanation:**

CSV (Comma-Separated Values) is a simple, text-based format for representing tabular data. Each line represents a row in a table, and values within each row are separated by a comma or semicolon. CSV is widely used for importing/exporting data between applications like spreadsheets, databases, and data analysis tools.

<details>
    <summary>Overview:</summary>

- **Simple Format:** Data is stored in plain text, making it easy to create, read, and share.

- **Structure:** Each record is on a new line, and each field is separated by a comma or semicolon.

- **Usage:**  Suitable for tabular data, CSV is commonly used in data exchange and processing tasks.

- **Limitations:** CSV is best for flat data structures and does not support complex nested or hierarchical data like JSON or XML.

</details>
