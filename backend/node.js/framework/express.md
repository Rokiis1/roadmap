# Table of Contents

- [Setting up the development environment](#setting-up-the-development-environment)
- [Working with Data](#working-with-data)
- [Middleware](#middleware)
- [Validation](#validation)
- [Cookies and Sessions](#cookies-and-sessions)
- [Working with Databases](#working-with-databases)
- [Authentication](#authentication)
- [Authorization](#authorization)

# Setting up the development environment

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
    # Globally
    npm install -g express

    # Locally
    npm install express
    ```
5. "Creating a Basic Express.js Server". This step involves setting up a simple Express.js server that listens on a specific port and responds to GET requests at the root URL.

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

7. **ESLint and esbuild:**

    **Resource:**

    - [Resource: ESLint and esbuild](../../../operations/tools/eslintNebuild.md)

# Working with Data

- [Routing in Express.js](#routing-in-expressjs)
- [Handling HTTP Requests](#handling-http-requests)
- [Query Parameters and URL Parameters](#query-parameters-and-url-parameters)

## Routing in Express.js

**Explanation:**

Routing refers to how an application's endpoints (URIs) respond to client requests. In Express.js, you define routing using methods of the Express app object that correspond to HTTP methods.

**Key Concepts:**

1. **Route Path:** In combination with a request method, a route path defines the endpoints at which requests can be made.

2. **Route Handlers:** Functions that execute when a route is matched. These can be a single function, an array of functions, or combinations of both.

3. **Route Parameters:** Parameters are variable parts of a route path. They can be used to capture dynamic values at specific positions in the route path.

**Syntax:**

```js

app.METHOD(PATH, HANDLER)

```

- `app` is an instance of express.

- `METHOD` is an HTTP request method, in lowercase.

- `PATH` is a path on the server.

- `HANDLER` is the function executed when the route is matched.

## Handling HTTP Requests

**Explanation:**

HTTP requests are the core of any web application. In Express.js, routes are defined to respond to HTTP requests. Each route can have one or more handler functions, which are executed when the route is matched.

**Key Concepts:**

1. **HTTP Methods:** Express.js provides methods that correspond to `HTTP request` methods: `get`, `post`, `put`, `delete`.

2. **Request Object:** The request object represents the `HTTP request` and has properties for the request query string, `parameters`, `body`, `HTTP headers`.

3. **Response Object:** The response object represents the `HTTP response` that an Express app sends when it gets an `HTTP request`.

**Syntax:**

```js

// Handling GET request
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Handling POST request
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Handling PUT request
app.put('/user', (req, res) => {
  res.send('PUT request to /user');
});

// Handling DELETE request
app.delete('/user', (req, res) => {
  res.send('DELETE request to /user');
});

```

## Query Parameters and URL Parameters

**Explanation:**

Work with data sent in the URL through query parameters and URL parameters.

**Key Concepts:**

2. **URL Parameters:** These are the parts of the URL that are dynamic. They allow you to create routes that can change based on the data sent in the URL. In Express.js, you can access them through `req.params`.

1. **Query Parameters:** These are the key-value pairs that appear after the question mark (?) in a URL. They are typically used to send non-sensitive data to the server. In Express.js, you can access them through `req.query`.

**Example:**

```js

// Handling URL parameters
app.get('/users/:userId', (req, res) => {
  res.send(`User ID is: ${req.params.userId}`);
});

// Handling query parameters
app.get('/search', (req, res) => {
  res.send(`You searched for: ${req.query.q}`);
});

```

# Middleware

**Explanation:**

Middleware in Express.js is essentially a series of callback functions that get executed in the order they are added (unless the execution is halted or passed to the next middleware). They have access to the HTTP request and response objects, and the `next` middleware function in the application's request-response cycle. And call the `next` middleware function in the stack.

**Key Concepts:**

1. **Application-level middleware:** Bind application-level middleware to an instance of the app object by using the `app.use()` and `app.METHOD()` functions.

2. **Router-level middleware:** Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`.

3. **Error-handling middleware:** Defined by having four arguments instead of three (`err, req, res, next`).

4. **Built-in middleware:** Express has a few built-in middleware functions such as e`express.static`, `express.json`, and `express.urlencoded`.

5. **Third-party middleware:** You can load third-party middleware modules by installing via npm and requiring them in your app.

**Syntax:**

```js

app.use(function (req, res, next) {
  // middleware function
  next();
});

```

**Example:**

```js

// Middleware for logging the route taken by the user
const logRoute = (req, res, next) => {
  console.log(`Method: ${req.method}, URL: ${req.url}`);
  next();
};

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(`Error status: ${err.status}`);
  res.status(err.status || 500);
  res.send('Error occurred');
});

app.get('/', logRoute, (req, res) => {
  res.send('Hello, world!');
});

```

# Validation

**Explanation:**

Express-Validation is a middleware for Express.js that validates the body, params, query, headers, and cookies of a request and returns a response with errors if any of the configured validation rules fail. It's used to validate incoming data at the start of the request-response cycle, before any controller or handler function is executed.

**Resources:**

- [Docs: Express-Validation](https://express-validator.github.io/docs)

# Cookies and Sessions

**Explanation:**

- [express-session](#express-session)
- [cookie-parser](#cookie-parser)

## express-session

`express-session` is a middleware used in Express.js applications to manage sessions. Sessions are a way to store data for a specific client, which is useful for storing user login credentials, storing preferences of a particular user, etc. Session data is stored on the server side.

```bash
npm i express-session
```

**Key Concepts:**

- **Session ID:** A unique identifier that is generated for each session.

- **Session Store:** The place where the session data is stored. It could be a database or in-memory store.

**Syntax:**

```js

const session = require('express-session');

app.use(session({
  secret: 'your secret key', // This is the secret used to sign the session ID cookie.
  resave: false, // This forces the session to be saved back to the session store, even if the session was never modified during the request.
  saveUninitialized: true, // This forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
  cookie: { secure: true } // This option dictates whether cookies should be sent over secure connections only.
}));

```

**Example:**

```js

app.use(session({
  secret: 'simple secret',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }
  res.send(`This page has been viewed ${req.session.views} times`);
});

```

## cookie-parser

**Explanation:**

`cookie-parser` is a middleware that parses cookies attached to the client request object. It populates `req.cookies` with an object keyed by the cookie names. This is useful to read the cookies sent from the client.

**Key Concepts:**

- **Cookie:** Small piece of data stored on the client's computer by the web browser while browsing a website.

- **Signed Cookies:** Cookies that are signed to prevent tampering.

**Syntax:**

```js

const cookieParser = require('cookie-parser');

app.use(cookieParser()); // This tells your application to use the cookie-parser middleware. This will parse incoming cookies in the request headers and expose them as the 'cookies' property of the request object (req.cookies).

```

**Example:**

```js

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies);
});

```