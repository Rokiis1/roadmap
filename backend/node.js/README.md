# Table of Contents

- [Node.js Introduction](#nodejs-introduction)
- [Modules](#modules)
- [Package Manager](#package-manager)
- [Error Handling](#error-handling)
- [Working with Files](#working-with-files)
- [Command Line Interface](#command-line-interface)
- [Working with APIs](#working-with-apis)
- [Logging](#logging)

# Node.js Introduction

- [What is Node.js](#what-is-nodejs)
- [Why use Node.js](#why-use-nodejs)
- [History of Node.js](#history-of-nodejs)
- [Node.js vs Browser](#nodejs-vs-browser)
- [Running Node.js Code](#running-nodejs-code)

**Explanation:**

Node.js is a runtime environment that allows developers to run JavaScript on the server side, enabling the development of scalable and high-performance web applications.

**Key Concepts:**

1. **Event-Driven Architecture**: Node.js uses an event-driven, non-blocking I/O model, allowing for efficient handling of concurrent operations.

2. **Modules and NPM**: Node.js promotes modular programming, and NPM provides a vast ecosystem of reusable modules that can be easily integrated into applications.

3. **Real-Time Applications**: Node.js is well-suited for building real-time applications, such as chat applications, online gaming, and collaborative tools, due to its asynchronous nature.

4. **Community and Support**: The active community and extensive documentation contribute to the popularity and support for Node.js development.

## What is Node.js

Node.js is an open-source, cross-platform JavaScript runtime built on the V8 JavaScript engine from Chrome. It allows developers to execute JavaScript code server-side, providing a runtime environment for building server-side applications. Node.js uses an event-driven, non-blocking I/O model, making it well-suited for building real-time applications and scalable networked applications.

## Why use Node.js

1. **JavaScript Everywhere**: Node.js enables the use of JavaScript for both server-side and client-side development. This unification of languages allows developers to use the same language and code on both ends, improving consistency and efficiency.

2. **Non-Blocking I/O**: Node.js is designed to handle asynchronous operations efficiently. Its non-blocking I/O model allows handling a large number of concurrent connections without blocking the execution of other tasks.

3. **Scalability**: Node.js is known for its ability to handle a large number of concurrent connections with low resource consumption. This makes it well-suited for building scalable applications, especially those requiring real-time features.

4. **NPM (Node Package Manager)**: NPM is the default package manager for Node.js, providing access to a vast ecosystem of open-source libraries and tools. This makes it easy to integrate third-party modules and libraries into Node.js applications.

5. **Active Community and Ecosystem**: Node.js has a vibrant and active community that contributes to the continuous improvement of the platform. The ecosystem is rich with libraries, frameworks, and tools, making it versatile for various use cases.

## History of Node.js

Node.js was created by Ryan Dahl and was first released in 2009. It was built to address the limitations of traditional server-side technologies and to enable scalable, real-time applications. Over the years, Node.js has gained widespread adoption and has become a popular choice for building modern web applications.

## Node.js vs Browser

While JavaScript in browsers is mainly used for client-side scripting, Node.js extends its use to server-side scripting. The key difference lies in the environment: browsers provide a runtime environment for client-side execution, and Node.js provides a runtime environment for server-side execution.

## Running Node.js Code

To run Node.js code, you need to have Node.js installed on your machine. Once installed, you can create JavaScript files with server-side logic and execute them using the `node` command in the terminal.

# Modules

- [Common JS](#common-js)
- [ESM (ECMAScript Modules)](#esm-ecmascript-modules)

**Explanation:**

In JavaScript, modules provide a way to organize code into reusable, encapsulated units. They help manage code complexity, promote reusability, and facilitate collaboration. Two major module systems are CommonJS and ECMAScript Modules (ESM).

**Key Concepts:**

1. **Encapsulation**: Modules encapsulate code, allowing developers to create reusable and modular components.

2. **Dependency Management**: Modules provide a way to manage dependencies and control what parts of the code are exposed to the outside world.

3. **Compatibility**: While CommonJS is commonly used in Node.js, ESM is the standard for modern browsers and environments supporting ECMAScript 6.

4. **Syntax Differences**: ESM and CommonJS have syntax differences, such as the use of `import/export` in ESM and `require/module.exports` in CommonJS.

## Common JS

**Explanation:**

CommonJS is a module system for JavaScript that was initially designed for server-side environments, such as Node.js.

**Key Concepts:**

1. **`require` and `module.exports`**: In CommonJS, the `require` function is used to import modules, and the `module.exports` object is used to define what a module exports.

2. **Synchronous Loading**: CommonJS modules are loaded synchronously, meaning the entire module is loaded before the code execution continues.

3. **Runtime Loading**: Modules are loaded and executed at runtime, allowing for dynamic loading and conditional dependencies.

```javascript
// Example CommonJS module
// math.js
const add = (a, b) => a + b;
module.exports = { add };
```

```javascript
// Using the module in another file
// main.js
const mathModule = require('./math');
console.log(mathModule.add(3, 5)); // Output: 8
```

## ESM (ECMAScript Modules)

**Explanation:**

ECMAScript Modules, or ESM, is the official standard for JavaScript modules. It was introduced in ECMAScript 6 (ES6) and is supported in modern JavaScript environments.

**Key Concepts:**

1. **`import` and `export` Statements**: In ESM, the `import` statement is used to import modules, and the `export` statement is used to define what a module exports.

2. **Asynchronous Loading**: ESM modules are loaded asynchronously, and their dependencies are resolved at the time of import.

3. **Static Analysis**: ESM supports static analysis, allowing tools to analyze and optimize code during build time.

```javascript
// Example ESM module
// math.mjs
export const add = (a, b) => a + b;
```

```javascript
// Using the module in another file
// main.mjs
import { add } from './math';
console.log(add(3, 5)); // Output: 8
```

# Package Manager

**Explanation:**

- [Explanation: Tools](../../operations/tools/README.md)

# Error Handling

- [Uncaught Exceptions](#uncaught-exceptions)
- [Types of Errors](#types-of-errors)
    - [Javascript Errors](#javascript-errors)
    - [System Errors](#system-errors)
    - [User Specified Errors](#user-specified-errors)
    - [Assertion Errors](#assertion-errors)

**Explanation:**

**Key Concepts:**

JavaScript is a versatile programming language that can be used both on the server side (Node.js) and the client side (web browsers). The concepts of error handling, including try-catch blocks, error objects, custom errors, and assertions, are applicable in both environments.

1. **Try-Catch Blocks:**
   - Used to isolate sections of code that may throw errors.
   - Essential for handling synchronous errors.

```javascript
try {
  // Server-side code that may throw errors
} catch (error) {
  // Handle the error
  console.error(error.message);
}
```

2. **Error Objects:**
   - JavaScript provides various built-in error objects like `Error`, `SyntaxError`, `TypeError`.
   - These objects contain information about the error, including the error message and stack trace.

```javascript
try {
  // Server-side code that may throw errors
} catch (error) {
  // Handle the error
  console.error(error.message);
}
```

3. **Custom Errors:**
   - Developers can create custom error objects to represent application-specific errors.
   - Useful for conveying meaningful information about errors.

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  if (someCondition) {
    throw new CustomError('Custom error message');
  }
} catch (error) {
  // Handle the custom error
  console.error(error.message);
}
```

# Working with Files

- [fs module](#fs-module)
- [path module](#path-module)
- [process.cwd()](#processcwd)
- [dirname and filename](#dirname-and-filename)


**Explanation:**

Working with files is a common task in programming, and Node.js provides modules to facilitate file system operations.

**Key Concepts:**

1. **File System Operations**: The `fs` module provides a range of functions for file system operations, such as reading, writing, and manipulating files and directories.

2. **Path Manipulation**: The `path` module helps in constructing and manipulating file paths, making it easier to work with file locations across different platforms.

3. **Current Working Directory**: `process.cwd()` returns the current working directory of the Node.js process, which is essential for constructing absolute paths.

4. **__dirname and __filename**: Global variables `__dirname` and `__filename` provide information about the directory and filename of the current module, respectively.

5. **Platform Independence**: Using appropriate file system and path modules ensures that file operations are platform-independent, allowing code to run consistently across different operating systems.

## fs module

*Reading a File*

```javascript
import { readFile } from 'fs/promises';

try {
  const data = await readFile('example.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
```

*Writing to a File:*

```javascript
import { writeFile } from 'fs/promises';

try {
  await writeFile('example.txt', 'Hello, Node.js!');
  console.log('File written successfully.');
} catch (err) {
  console.error(err);
}
```

## process.cwd()

**Explanation:**

In Node.js, process.cwd() stands for "current working directory." It is a method provided by the process global object, and it returns the current working directory of the Node.js process.

The current working directory is the directory from which the Node.js process was started. It is the base directory for all relative path operations in the application. When you execute a Node.js script, the current working directory is initially set to the directory where the script is located.

**Key Concepts:**



## path module

```javascript
import { join } from 'path';

const filePath = join(__dirname, 'files', 'example.txt');
console.log(filePath);
```

```javascript
console.log(import.meta.url);
```

## dirname and filename

```javascript
// commonjsFileExample.js

const fs = require('fs');
const path = require('path');

// Get the absolute path of the current directory
const currentDirectory = __dirname;

// Construct the file path using __dirname
const filePath = path.join(currentDirectory, 'example.txt');

// Read the content of the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File Content:', data);
});
```

# Command Line Interface

- [Environment Variables](#environment-variables)
    - [dotenv package](#dotenv-package)
    - [process.env](#processenv)
- [Exitting & Exit Codes](#exitting-exit-codes)
- [Printing Output](#printing-output)
    - [process.stdout](#processstdout)
    - [process.stderr](#processstderr)
- [Taking Input](#taking-input)
    - [process.stdin](#processstdin)
- [Command Line Args](#command-line-args)
    - [process.argv](#processargv)

**Explanation:**

Command Line Interface (CLI) is a text-based interface that allows users to interact with a program or system by typing commands. In Node.js, the CLI is commonly used for running scripts, tools, and managing applications.

**Key Concepts:**

1. **Environment Variables:** Using environment variables allows developers to configure applications without modifying the code. The `dotenv` package simplifies the process of loading environment variables from a `.env` file.

2. **Exit Codes:** Exit codes help communicate the success or failure status of a Node.js application. Conventionally, a code of `0` indicates success, and other codes indicate errors.

3. **Standard Output and Error:** `process.stdout` and `process.stderr` are used for writing output and error messages to the console, respectively.

4. **Standard Input:** `process.stdin` allows reading input from the user. It is commonly used for interactive CLI applications.

5. **Command Line Arguments:** `process.argv` provides access to command line arguments. It is an array where the first two elements are the Node.js executable and the script file.

## Environment Variables

### dotenv package

The `dotenv` package is commonly used to load environment variables from a `.env` file into `process.env`. It allows developers to keep sensitive information separate from the code and manage configurations easily.

```javascript
// Example using dotenv
require('dotenv').config();

console.log(process.env.API_KEY);
```

### process.env

`process.env` is an object that holds the values of environment variables. It allows access to various configuration parameters, API keys, and other settings defined in the environment.

```javascript
// Accessing environment variables
console.log(process.env.NODE_ENV);
```

## Exiting & Exit Codes

Exiting a Node.js application can be done using `process.exit(code)`, where `code` is an integer exit code. It helps communicate the termination status of the application.

```javascript
// Exiting with exit code 0 (success)
process.exit(0);

// Exiting with exit code 1 (error)
process.exit(1);
```

## Printing Output

### process.stdout

`process.stdout` is a writable stream that represents the standard output. It is used for printing information to the console.

```javascript
// Writing to standard output
process.stdout.write('Hello, CLI!');
```

### process.stderr

`process.stderr` is a writable stream that represents the standard error. It is used for printing error messages to the console.

```javascript
// Writing to standard error
process.stderr.write('Error: Something went wrong.');
```

## Taking Input

### process.stdin

`process.stdin` is a readable stream that represents the standard input. It is used for taking input from the user.

```javascript
// Reading from standard input
process.stdin.on('data', (data) => {
  console.log(`User Input: ${data}`);
});
```

## Command Line Args

### process.argv

`process.argv` is an array that contains the command line arguments. The first two elements are the Node.js executable and the script file, followed by any additional command line arguments.

```javascript
// Accessing command line arguments
console.log(process.argv);
```

# Working with APIs

- [Server](#http-server)
    - [HTTP Server](#http-server)
    - [#Express.js](#expressjs)
- [Making API Calls](#making-api-calls)
    - [axios package](#axios-package)

# Working with APIs

Interacting with APIs (Application Programming Interfaces) is a common task in web development. It involves both creating HTTP servers to expose APIs and making HTTP requests to consume external APIs.

## Server

**Explanation:**

A server, in the context of web development, is a program that receives requests from clients (typically browsers or other applications), processes those requests, and sends back responses. HTTP servers specifically handle requests and responses following the Hypertext Transfer Protocol.

## Key Concepts:

1. **HTTP Server:** An HTTP server listens for incoming HTTP requests and processes them. It is fundamental for handling client-server communication in web development.

2. **Express.js:** Express.js is a web framework for Node.js that simplifies server-side development. It provides features like routing, middleware, and a more structured approach to building web applications.

3. **Routing:** Routing is the process of determining how an application responds to a client request based on the URL. Both basic HTTP servers and frameworks like Express.js use routing to define how different paths (endpoints) are handled.

4. **Middleware:** Middleware functions in Express.js are functions that have access to the request and response objects. They can perform actions, modify the request, or terminate the request-response cycle. Middleware is a powerful concept for handling various tasks in the request-response flow.

5. **Port:** Servers listen on a specific port for incoming connections. Ports are essential for routing incoming requests to the correct application or service.

## Making API Calls

# Logging

- [Winston package](#winston-package)

# Logging

## Explanation:

Logging is an essential aspect of software development that involves recording information about the application's behavior, errors, and events during runtime. It helps developers understand the execution flow, troubleshoot issues, and monitor the health of an application.

## Key Concepts:

1. **Log Levels:** Logging libraries often use different log levels (such as info, warn, error) to categorize the severity of messages. This helps developers filter and prioritize log entries.

2. **Transports:** Transports are the outputs or destinations for log messages. Winston supports various transports, including console, files, databases, and more. Each transport defines where the log messages will be stored or sent.

3. **Log Formatting:** Log formatting determines how log messages are presented. Winston allows developers to customize log formatting to suit their preferences or organizational requirements.

4. **Centralized Logging:** In larger applications or distributed systems, centralized logging becomes important. This involves aggregating log messages from multiple instances or components into a central location for analysis and monitoring.

5. **Error Handling:** Logging is a critical tool for error handling and debugging. When an error occurs, logging the relevant information helps developers identify the root cause and fix issues efficiently.

6. **Monitoring and Analytics:** Logs are valuable for monitoring application health and performance. Analyzing logs can provide insights into user behavior, system bottlenecks, and areas for improvement.

## Winston package

Winston is a versatile logging library for Node.js that provides a flexible and extensible logging framework. It supports various transports (such as console, files, databases, etc.) and allows developers to customize log formatting and handling.

```javascript
// Example using Winston for logging
const winston = require('winston');

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info', // Set the log level
  format: winston.format.simple(), // Use a simple log format
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: 'logfile.log' }) // Log to a file
  ],
});

// Log messages at different levels
logger.info('Informational message');
logger.warn('Warning message');
logger.error('Error message');
```
