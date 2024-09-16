# Table of Contents

- [Express.js Introduction](#expressjs-introduction)
- [Setting Up an Express Server](#setting-up-an-express-server)
- [Middleware 1 Part](#middleware-1-part)
- [Routing](#routing)
- [Handling Requests and Responses](#handling-requests-and-responses)
- [Middleware 2 Part](#middleware-2-part)

## Express.js Introduction

**Explanation:**

Express.js is a minimal and flexible Node.js web application framework. It simplifies the process of creating server-side applications and APIs by providing a thin layer of fundamental web application features without obscuring Node.js features.

- [Express: Docs](https://expressjs.com/)

**Key Concepts:**

- **Request and Response Objects**: Express provides `req` and `res` objects that represent the HTTP request and response. These objects provide methods and properties to handle data and send responses.
- **Routing**: Defines how an application responds to client requests to specific endpoints (URLs) and HTTP methods (GET, POST, PUT, DELETE, PATCH).
- **Middleware**: Functions that execute during the lifecycle of a request to the Express server. Middleware functions can perform tasks such as logging, authentication, and data parsing.

## Setting Up an Express Server

1. **Install Node.js and npm:** Express.js is a Node.js framework, so you'll need to have Node.js and npm (node package manager) installed on your machine. You can download Node.js and npm from [here](https://nodejs.org/en/download/).

    ```bash
    # Verify the installation
    node -v
    npm -v
    ```

2. **Initialize a new Node.js project:** Use `npm init -y` to create a new package.json file.

3. **Install dependencies:** Navigate into your new project folder and install the dependencies.

    ```bash

    <!-- Your project file -->
    cd myapp
    <!-- Install node_module -->
    npm install

    ```

4. **Install Express.js:** Once you have Node.js and npm installed, you can install Express.js globally on your machine or locally in your project folder.

    ```bash
    # Locally
    npm install express
    ```

5. **Creating a Basic Express.js Server:** This step involves setting up a simple Express.js server that listens on a specific port and responds to GET requests at the root URL.

    ```js

    // Importing express module
    import express from 'express';

    // Creating an express application
    const app = express();

    // Have the app listen on a specific port
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running and listening on port ${port}`);
    });

    ```

6. **Start the server:** You can start the Express.js server using the following command.

    ```bash
    npm start
    ```

## Middleware 1 Part

**Explanation:**

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. These functions can perform various tasks such as executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function in the stack.

- **Request Object (`req`)**: The `req` object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and more. It is used to retrieve information about the client's request.

- **Response Object (`res`)**: The `res` object represents the HTTP response that an Express app sends when it gets an HTTP request. It has methods for sending a response back to the client, such as `res.send()`, `res.json()`, and `res.status()`.

![alt text](./assets/reqandrescycle.png)

**Key Concepts:**

1. **Application-Level Middleware:** Bind application-level middleware to an instance of the app object by using the `app.use()` and `app.METHOD()` functions.
2. **Built-In Middleware:** Express has a few built-in middleware functions such as `express.json()` - Parsing JSON Payloads: It converts the JSON string in the request body into a JavaScript object and assigns it to `req.body`

## Routing

**Explanation:**

Routing refers to how an application's endpoints (URIs) respond to client requests. In Express.js, you define routing using methods of the Express app object that correspond to HTTP methods.

**Key Concepts:**

1. **Route Path:** In combination with a request method, a route path defines the endpoints at which requests can be made.

2. **Route Handlers:** Functions that execute when a route is accessed. Handlers can be callbacks or middleware functions.

3. **Route Parameters:** Parameters are variable parts of a route path. They can be used to capture dynamic values at specific positions in the route path.

4. **API Versioning Prefix:** Use versioning in your API endpoints to manage changes and updates without breaking existing clients. For example, /api/v1/users.

5. **Endpoint Naming Conventions:**

    - Use nouns and plural forms for resource names. `/users` instead of `/getUsers`.
    - Use sub-resources to represent relationships. `/users/:userId/posts` to get posts for a specific user.

**Syntax:**

```js

app.METHOD(PATH, HANDLER)

```

- `app` is an instance of express.

- `METHOD` is an HTTP request method, in lowercase.

- `PATH` is a path on the server.

- `HANDLER` is the function executed when the route accessed.

## Handling Requests and Responses

**Explanation:**

HTTP requests are the core of any web application. In Express.js, routes are defined to respond to HTTP requests. Each route can have one or more handler functions, which are executed when the route accessed.

**Key Concepts:**

1. **HTTP Methods:** Express.js provides methods that correspond to `HTTP request` methods: `get`, `post`, `put`, `delete`.

2. **Request Object:** The request object represents the `HTTP request` and has properties for the request query string, `parameters`, `body`, `HTTP headers`.

3. **Response Object:** The response object represents the `HTTP response` that an Express app sends when it gets an `HTTP request`.

4. **URL Parameters:** These are the parts of the URL that are dynamic. They allow you to create routes that can change based on the data sent in the URL. In Express.js, you can access them through `req.params`.

5. **Query Parameters:** These are the key-value pairs that appear after the question mark (?) in a URL and are separated by the ampersand (&). They are typically used to send non-sensitive data to the server. In Express.js, you can access them through `req.query`.

**Syntax:**

_*GET*

```js

// Handling GET request send
app.get('/', (req, res) => {
  res.send('Hello');
});

// Handling GET request to send HTML
app.get('/html', (req, res) => {
  const htmlContent = `
      <h1>Welcome to the Example Page</h1>
      <p>This is a sample HTML response.</p>
  `;
  res.send(htmlContent);
});

// Handling GET request json
app.get('/', (req, res) => {
    const responseObject = {
    message: 'GET request to the homepage',
    status: 'success',
    data: {
      id: 1,
      name: 'Example'
    }
  };
  res.json(responseObject);
});

// Handling GET request res.status(200).json();
app.get('/', (req, res) => {
  try {
    const responseObject = {
      message: 'GET request to the homepage',
      status: 'success',
      data: {show
        id: 1,
        name: 'Example'
      }
    };
    res.status(200).json(responseObject);
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ 
      message: 'Internal Server Error',
      status: 'failed'
    });
  }
});

```

_*POST*

```js

// Handling POST request
app.post('/status-json', (req, res) => {
  try {
    const responseObject = {
      message: 'POST request to /status-json',
      status: 'success',
      data: req.body // req.body is what information will to be request from server side
    };
    res.status(200).json(responseObject);
  } catch (error) {
    console.error('Error handling POST request:', error);
    res.status(500).json({ 
      message: 'Internal Server Error',
      status: 'failed'
    });
  }
});

```

_*PUT*

```js

// Handling PUT request
app.put('/status-json/:id', (req, res) => {
  try {
    const statusId = req.params.id;
    const updatedStatusData = req.body;

    console.log('Received body data:', updatedStatusData);

    const responseObject = {
      message: `PUT request to /status-json with ID ${statusId}`,
      status: 'success',
      data: updatedStatusData // req.body is what information will be updated from server side
    };
    
    res.status(200).json(responseObject);
  } catch (error) {
    console.error('Error handling PUT request:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      status: 'failed'
    });
  }
});

```

_*DELETE*

```js

// Handling DELETE request
app.delete('/user/:id', (req, res) => {
  try {
    const userId = req.params.id;

    const responseObject = {
      message: `DELETE request to /user with ID ${userId}`,
      status: 'success'
    };

    res.status(200).json(responseObject);
  } catch (error) {
    console.error('Error handling DELETE request:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      status: 'failed'
    });
  }
});

```

_*PATH params*

```js

// Handling URL parameters
app.get('/users/:userId', (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const user = users.find(u => u.id === userId);

    if (user) {
      res.status(200).json({
        message: 'User found',
        status: 'success',
        data: user
      });
    } else {
      res.status(404).json({
        message: 'User not found',
        status: 'failed'
      });
    }
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      status: 'failed'
    });
  }
});

```

_*QUERY params*

```js

// Handling query parameters
app.get('/search', (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({
        message: 'Query parameter "q" is required',
        status: 'failed'
      });
    }

    const results = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length > 0) {
      res.status(200).json({
        message: 'Products found',
        status: 'success',
        data: results
      });
    } else {
      res.status(404).json({
        message: 'No products found',
        status: 'failed'
      });
    }

  } catch (error) {
    console.error('Error handling search request:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      status: 'failed'
    });
  }
});

```

## Middleware 2 Part

**Explanation:**

Middleware functions can be used to handle various tasks in an Express application. They can be categorized into router-level middleware, third-party middleware, and error-handling middleware.

**Key Concepts:**

1. **Router-Level Middleware:** Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`. This allows you to apply middleware only to specific route handlers.

2. **Error-Handling Middleware:** Error-handling middleware functions are defined in the same way as other middleware functions, except they have four arguments instead of three: `err`, `req`, `res`, and `next`. These functions are used to handle errors that occur during the request-response cycle.
    - **Next Function (`next`)**: The `next` function is a function in the Express router which, when invoked, executes the next middleware function in the stack. If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.
    - **Error Object (`err`)**: The `err` object contains information about the error that occurred. It is passed to the error-handling middleware by calling `next(error)` in the route handler or another middleware function.

3. **Third-Party Middleware:** Third-Party Middleware: Third-party middleware functions are created by the community and can be used to add functionality to your Express application.
    - **Winston:** Winston is a versatile logging library for Node.js.
    - **express-validation:** express-validation is a middleware for validating request data schema.
    - **Passport:** Passport is an authentication middleware for Node.js that supports various authentication strategies, such as local, OAuth, and JWT.

**Syntax:**

*Router-Level Middleware:*

- **Applying Middleware to the Router**

  ```js
  const router = express.Router();

  function logRequestDetails(req, res, next) {
    console.log(`${req.method} request for '${req.url}'`);
    next();
  }

  router.use(logRequestDetails);

  router.get('/health', (req, res) => {
    res.status(200).json({
      status: "success",
      message: "Server is healthy",
    });
  });
  ```

- **Applying Middleware to Specific Routes**

  ```js
  function logRequestDetails(req, res, next) {
    console.log(`${req.method} request for '${req.url}'`);
    next();
  }

  router.get('/health', logRequestDetails, (req, res) => {
    res.status(200).json({
      status: "success",
      message: "Server is healthy",
    });
  });
  ```

*Error-Handling Middleware:*

```javascript
router.get(`${BASE_URL}/health`, (req, res, next) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Server is healthy",
        });
    } catch (error) {
        next(error);
    }
})

function notFoundHandler(req, res, next) {
  res.status(404).json({
    status: "error",
    message: "Resource Not Found"
  });
}
app.use(notFoundHandler);

function jsonErrorHandler(err, req, res, next) {
    res.status(500).json({
      status: "error",
      message: `Internal Server Error, ${err.message}`
    });
}

app.use(router);
app.use(notFoundHandler);
app.use(jsonErrorHandler);
```
