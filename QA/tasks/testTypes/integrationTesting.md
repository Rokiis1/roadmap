## Task 1: Test with Postman an APIs

**Explanation:**

Let's consider a fictional Bookstore API that allows you to manage user accounts and books.

**Demo:**

- [Demo: APIs](https://bookstore.toolsqa.com)

### Task 1.1: Create a new user

1. **Method:** POST
2. **Endpoint:** `/Account/v1/User`
3. **Body:** Include necessary user information (username, password)

   **Steps:**
   - Open Postman and create a new request.
   - Set the request method to POST.
   - Enter the URL: `https://bookstore.toolsqa.com/Account/v1/User`
   - In the request body, provide the required user information in the appropriate format (JSON, XML).
   - Click "Send" to execute the request.
   - Verify that the response indicates a successful creation of the user.

### Task 1.2: Authorize a user

1. **Method:** POST
2. **Endpoint:** `/Account/v1/Authorized`
3. **Body:** Include user credentials for authorization

   **Steps:**
   - Create a new request in Postman.
   - Set the request method to POST.
   - Enter the URL: `https://bookstore.toolsqa.com/Account/v1/Authorized`
   - Include the user credentials in the request body.
   - Click "Send" to execute the request.
   - Use this token for subsequent authorized requests.

### Task 1.3: Generate Token

1. **Method:** POST
2. **Endpoint:** `/Account/v1/GenerateToken`
3. **Body:** Include user credentials for token generation

   **Steps:**
   - Create a new request in Postman.
   - Set the request method to POST.
   - Enter the URL: `https://bookstore.toolsqa.com/Account/v1/GenerateToken`
   - Include the user credentials in the request body.
   - Click "Send" to execute the request.
   - Use this token for subsequent authorized requests.

### Task 1.4: Delete a user by UUID

1. **Method:** DELETE
2. **Endpoint:** `/Account/v1/User/{UUID}`
3. **Replace `{UUID}` with an actual UUID in the URL

   **Steps:**
   - Create a new request in Postman.
   - Set the request method to DELETE.
   - Enter the URL: `https://bookstore.toolsqa.com/Account/v1/User/{UUID}` (replace `{UUID}` with an actual UUID).
   - Include the Bearer token in the Authorization header.
   - Click "Send" to execute the request.
   - Verify that the user with the specified UUID is successfully deleted.

### Task 1.5: Get user details by UUID

1. **Method:** GET
2. **Endpoint:** `/Account/v1/User/{UUID}`
3. **Replace `{UUID}` with an actual UUID in the URL

   **Steps:**
   - Create a new request in Postman.
   - Set the request method to GET.
   - Enter the URL: `https://bookstore.toolsqa.com/Account/v1/User/{UUID}` (replace `{UUID}` with an actual UUID).
   - Include the Bearer token in the Authorization header.
   - Click "Send" to execute the request.
   - Verify that the response contains the details of the user with the specified UUID.

### Task 1.6: Get all books

1. **Method:** GET
2. **Endpoint:** `/BookStore/v1/Books`

   **Steps:**
   - Open Postman and create a new request.
   - Set the request method to GET.
   - Enter the URL: `https://bookstore.toolsqa.com/BookStore/v1/Books`
   - Include the Bearer token in the Authorization header.
   - Click "Send" to execute the request.
   - Verify that the response contains a list of books.

### Task 1.7: Add a new book

1. **Method:** POST
2. **Endpoint:** `/BookStore/v1/Books`
3. **Body:** Include book information (title, author, ISBN, etc.)

   **Steps:**
   - Create a new request in Postman.
   - Set the request method to POST.
   - Enter the URL: `https://bookstore.toolsqa.com/BookStore/v1/Books`
   - In the request body, provide the necessary book information in the appropriate format (JSON, XML, etc.).
   - Include the Bearer token in the Authorization header.
   - Click "Send" to execute the request.
   - Verify that the response indicates a successful addition of the new book.

### Task 1.8: Delete all books

1. **Method:** DELETE
2. **Endpoint:** `/BookStore/v1/Books`

   **Steps:**
   - Create a new request in Postman.
   - Set the request method to DELETE.
   - Enter the URL: `https://bookstore.toolsqa.com/BookStore/v1/Books`
   - Include the Bearer token in the Authorization header.
   - Click "Send" to execute the request.
   - Verify that the response indicates successful deletion of all books.

### Task 1.9: Get book details by ISBN

1. **Method:** GET
2. **Endpoint:** `/BookStore/v1/Books/{ISBN}`
3. **Replace `{ISBN}` with an actual ISBN in the URL

   **Steps:**
   - Create a new request in Postman.
   - Set the request method to GET.
   - Enter the URL: `https://bookstore.toolsqa.com/BookStore/v1/Books/{ISBN}` (replace `{ISBN}` with an actual ISBN).
   - Include the Bearer token in the Authorization header.
   - Click "Send" to execute the request.
   - Verify that the response contains details of the book with the specified ISBN.

### Task 1.10: Delete a book by ISBN

1. **Method:** DELETE
2. **Endpoint:** `/BookStore/v1/Books/{ISBN}`
3. **Replace `{ISBN}` with an actual ISBN in the URL

   **Steps:**
   - Create a new request in Postman.
   - Set the request method to DELETE.
   - Enter the URL: `https://bookstore.toolsqa.com/BookStore/v1/Books/{ISBN}` (replace `{ISBN}` with an actual ISBN).
   - Include the Bearer token in the Authorization header.
   - Click "Send" to execute the request.
   - Verify that the book with the specified ISBN is successfully deleted.

### Task 1.11: Update book details by ISBN

1. **Method:** PUT
2. **Endpoint:** `/BookStore/v1/Books/{ISBN}`
3. **Replace `{ISBN}` with an actual ISBN in the URL
4. **Body:** Include updated book information

   **Steps:**
   - Create a new request in Postman.
   - Set the request method to PUT.
   - Enter the URL: `https://bookstore.toolsqa.com/BookStore/v1/Books/{ISBN}` (replace `{ISBN}` with an actual ISBN).
   - In the request body, provide the updated book information in the appropriate format (JSON, XML).
   - Include the Bearer token in the Authorization header.
   - Click "Send" to execute the request.
   - Verify that the response indicates successful updating of the book with the specified ISBN.

## Task 2: Create document file

**Explanation:**

Next task is to document README.md file about this api's

```plaintext
File structure:
    bookStore
        - README.md
```

**Examples:**

- [Examples: Bookstore API example](../../assets/examples/testTypes/APIDocsExample.md)

- [Examples: Youtube API example](../../assets/examples/testTypes/APIDocsExample.md)

**Tools:**

It's helps faster to create documentation file

- [Tools: readme.so](https://readme.so/)

## Task 3: Create in Github Repository and push local in upstream(Github)

**Explanation:**

1. Create locally you project `.git`
2. Create in Github upstream Repository
3. Push locally repository into Github


