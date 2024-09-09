# Table of Contents

- [Node.js Introduction](#nodejs-introduction)
- [Running application](#running-application)
- [Monitor Change](#monitor-change)
- [Modules](#modules)
- [Working with Files](#working-with-files)
- [Process](#process)

## Node.js Introduction

**Explanation:**

Node.js is a runtime environment that allows JavaScript to be run on the server side, outside of a browser. It's built on Chrome's V8 JavaScript engine.

While JavaScript was traditionally used for client-side scripting in the browser, Node.js extends its capabilities to server-side scripting as well.

![Image](../assets/images/nodeImages/nodejs.png)

**Key Concepts:**

1. **Create Server**: You can create HTTP servers to handle client requests and responses.
2. **Build APIs**: Develop RESTful APIs to interact with databases and other services.
3. **File System Operations**: Perform file system operations like reading, writing, and deleting files.
4. **Database Interaction**: Interact with databases such as MongoDB, MySQL, and PostgreSQL.
5. **Command Line Tools**: Create command line tools and scripts.
6. **Web Applications**: Create web applications using template engines like EJS, Pug.

**Resources:**

- [Node: Docs](https://nodejs.org/en)

## Running application

**Explanation:**

We can run applications in different ways using just `node`, `npm`, `npx`, or `pnpm`.

- **Global Install** (`-g`): Installs the package globally on your system, making it available from any directory.
- **Local Install**: Installs the package in the current project directory, making it available only within the project.
- **Semantic Versioning (SemVer)**: Is a versioning scheme for software that uses a three-part version number: `MAJOR.MINOR.PATCH`.

**Key Concepts:**

- **Node**:
  - Directly execute JavaScript files.
  - Commonly used for running server scripts.
  - Example: `node app.mjs`

- **npm**:
  - Manages project dependencies.
  - Runs scripts defined in `package.json`.
  - Example: `npm run start`

- **npx**:
  - Executes binaries from npm packages.
  - Useful for running one-off commands.
  - Example: `npx nodemon app.mjs`

- **pnpm**:
  - Faster and more efficient alternative to npm.
  - Uses a content-addressable filesystem to store all files.
  - Example: `pnpm run build`

**Syntax:**

- **Node**: `node <filename.js>`
- **npm**: `npm run <script-name>`
- **npx**: `npx <package-name>`
- **pnpm**: `pnpm run <script-name>`

1. **Node**:

    ```sh
    node app.mjs
    ```

2. **npm**:

    ```sh
    npm run start
    ```

3. **npx**:

    ```sh
    npx nodemon app.mjs
    ```

4. **pnpm**:

    ```sh
    pnpm run build
    ```

## Monitor Change

**Explanation:**

Monitoring changes in your application files can help in automatically restarting the server whenever a file is modified. This can be achieved using tools like `nodemon`.

**Key Concepts:**

- **--watch**: A flag used to specify directories or files to watch for changes.
- **nodemon**: A utility that automatically restarts your Node.js application when file changes in the directory are detected.

**Syntax:**

- **nodemon**: `nodemon [your node app]`
- **--watch**: `nodemon --watch [directory or file] [your node app]`

## Modules

**Explanation:**

Modules in Node.js are reusable pieces of code that can be exported from one file and imported for use in another file. This helps in organizing and managing code efficiently.

- **CommonJS Modules**: The default module system in Node.js, using `require` and `module.exports`.
  - **Synchronous Loading**: CommonJS modules are loaded synchronously. This means that when you `require` a module, Node.js will read the file, execute it, and return the exports object before moving on to the next line of code.

- **ES6 Modules**: A newer module system using `import` and `export` statements.
  - **Asynchronous Loading**: ES6 modules are loaded asynchronously. This means that when you import a module, the loading and execution of the module can happen in parallel with other operations, which can improve performance.

**Syntax:**

- **CommonJS Modules**:
  
  - Importing multiple exports:

      ```js
      function add(a, b) {
        return a + b;
      }
      function subtract(a, b) {
        return a - b;
      }
      module.exports = { add, subtract };
      ```

      ```js
      const { add, subtract } = require('./math');
      console.log(add(2, 3));
      console.log(subtract(5, 3));

- **ES6 Modules**:

  - Importing multiple exports:

      ```js
      export function add(a, b) {
        return a + b;
      }
      export function subtract(a, b) {
        return a - b;
      }
      ```

      ```js
      import { add, subtract } from './math.mjs';
      console.log(add(2, 3));
      console.log(subtract(5, 3));
      ```

  - Importing all exports as an object:

      ```js
      export function add(a, b) {
        return a + b;
      }
      export function subtract(a, b) {
        return a - b;
      }
      ```

      ```js
      import * as math from './math.mjs';
      console.log(math.add(2, 3));
      console.log(math.subtract(5, 3));
      ```

  - Default export and import:

      ```js
      export default function add(a, b) {
        return a + b;
      }
      ```

      ```js
      import add from './math.mjs';
      console.log(add(2, 3));
      ```

  - Mixing default and named exports:

      ```js
      export default function add(a, b) {
        return a + b;
      }
      export function subtract(a, b) {
        return a - b;
      }
      ```

      ```js
      import add, { subtract } from './math.mjs';
      console.log(add(2, 3));
      console.log(subtract(5, 3));
      ```

## Working with Files

**Explanation:**

Node.js provides a built-in module called `fs` (file system) that allows you to interact with the file system. You can perform various operations such as reading, writing, updating, and deleting files.

**Key Concepts:**

- **Synchronous vs Asynchronous**: Node.js provides both synchronous and asynchronous methods for file operations. Synchronous methods block the execution of code until the operation is complete, while asynchronous methods do not block the execution and use callbacks or promises to handle the result.
- **Reading Files**: You can read the contents of a file using methods like `fs.readFile` (asynchronous) and `fs.readFileSync` (synchronous).
- **Writing Files**: You can write data to a file using methods like `fs.writeFile` (asynchronous) and `fs.writeFileSync` (synchronous).
- **Appending to Files**: You can append data to an existing file using methods like `fs.appendFile` (asynchronous) and `fs.appendFileSync` (synchronous).
- **Deleting Files**: You can delete a file using methods like `fs.unlink` (asynchronous) and `fs.unlinkSync` (synchronous).
- **__dirname and __filename**: These are global variables in Node.js that provide the directory name and the file name of the current module, respectively.
- **Path Module**: The `path` module provides utilities for working with file and directory paths.

**Syntax:**

- **Reading a File (Asynchronous)**:

  ```js
  import { readFile } from 'fs/promises';

  try {
    const data = await readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }

- **Reading a File (Synchronous):**

```js
import { readFileSync } from 'fs';

try {
  const data = readFileSync('example.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
```

- **Writing to a File (Asynchronous):**

```js
import { writeFile } from 'fs/promises';

const content = 'Some content to write to the file';

try {
  await writeFile('example.txt', content);
  console.log('File has been written');
} catch (err) {
  console.error(err);
}
```

- **Writing to a File (Synchronous):**

```js
import { writeFileSync } from 'fs';

const content = 'Some content to write to the file';

try {
  writeFileSync('example.txt', content);
  console.log('File has been written');
} catch (err) {
  console.error(err);
}
```

- **Appending to a File (Asynchronous):**

```js
import { appendFile } from 'fs/promises';

const content = 'Some content to append to the file';

try {
  await appendFile('example.txt', content);
  console.log('Content has been appended');
} catch (err) {
  console.error(err);
}
```

- **Appending to a File (Synchronous):**

```js
import { appendFileSync } from 'fs';

const content = 'Some content to append to the file';

try {
  appendFileSync('example.txt', content);
  console.log('Content has been appended');
} catch (err) {
  console.error(err);
}
```

- **Deleting a File (Asynchronous):**

```js
import { unlink } from 'fs/promises';

try {
  await unlink('example.txt');
  console.log('File has been deleted');
} catch (err) {
  console.error(err);
}
```

- **Deleting a File (Synchronous):**

```js
import { unlinkSync } from 'fs';

try {
  unlinkSync('example.txt');
  console.log('File has been deleted');
} catch (err) {
  console.error(err);
}
```

- **Using __dirname and __filename with Path Module:**

```js
const { readFileSync } = require('fs');
const { join } = require('path');

console.log('__dirname:', __dirname);
console.log('__filename:', __filename);

const filePath = join(__dirname, 'example.txt');
try {
  const data = readFileSync(filePath, 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
```

```js
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('__dirname:', __dirname);
console.log('__filename:', __filename);

const filePath = join(__dirname, 'example.txt');
try {
  const data = readFileSync(filePath, 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
```

## Process

**Explanation:**

Each program running on a computer represents a `process`. It's a top level task that an operating system such as Windows or Linux uses to encapsulate a running program:

- Code that is running
- Memory that is allocated to it by the OS
- Files or sockets that it has open
- One or more threads running within the process

