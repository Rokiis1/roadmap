- [setTimeout vs setInterval](#setTimeout-vs-setinterval)
- [Callbacks](#callbacks)
  - [Callback Hell](#callback-hell)
- [Promises](#promises)
  - [Async/Await](#async-/-await)

# `setTimeout` vs `setInterval`

**`setTimeout`**

  - `setTimeout` is a function that executes a given function or code block after a specified amount of time.
  - It runs the code once after the specified delay.
  - Useful for delaying the execution of a function.

  ```javascript
  setTimeout(() => {
    // Function Body, code will go here...
    console.log("This will be executed after 2000 milliseconds.");
  }, 2000);
  ```

**`setInterval`**

  - `setInterval` is a function that repeatedly executes a given function or code block at specified intervals.
  - It continues to run the code at the specified interval until explicitly stopped.
  - Useful for tasks that need to be performed repeatedly.

  ```javascript
  let intervalId = setInterval(() => {
    // Function Body, code will go here...
    console.log("This will be executed every 1000 milliseconds.");
  }, 1000);

  // To stop the interval after a certain time
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
  ```

# Callbacks

In JavaScript, functions are `first-class citizens`. Therefore, you can pass a function to another function as an `argument`.

By definition, a callback is a `function` that you pass into another function as an argument for executing later.

*Synchronous callbacks*

A synchronous callback is executed during the execution of the high-order function that uses the callback.

```javascript
function download(url) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
    }, 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

const url = 'www.picture.com';

download(url);
process(url);
```

This is not what you expected because the `process()` function executes before the `download()` function. The 

correct sequence should be:

- Download the picture and wait for the download complete.

- Process the picture.

*Asynchronous callbacks*

An asynchronous callback is executed after the execution of the high-order function that uses the callback.

Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.

Note that JavaScript is a single-threaded programming language. It carries asynchronous operations via the callback queue and event loop.

**Examples:**

```javascript
function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 1000);
}

const url = 'www.picture.com';
download(url, function(picture) {
    console.log(`Processing ${picture}`);
});
```

In this example, the `process()` is a callback passed into an asynchronous function.

## Callback Hell

How do you download three pictures and process them sequentially? A typical approach is to call the `download()` function inside the callback function

*Callback Hell (Pyramid of Doom)*

```javascript
function download(url, callback) {
  setTimeout(() => {
    console.log(`Downloading ${url} ...`);
    callback(url);
  }, 1000);
}

const url1 = 'www.picture.com';
const url2 = 'www.picture.com';
const url3 = 'www.picture.com';

download(url1, function (url) {
  console.log(`Processing ${url}`);
  download(url2, function (url) {
    console.log(`Processing ${url}`);
    download(url3, function (url) {
      console.log(`Processing ${url}`);
    });
  });
});
```

However, this callback strategy does not scale well when the complexity grows significantly.

Nesting many asynchronous functions inside callbacks is known as the **pyramid of doom or the callback hell:**

```javascript
asyncFunction(function(){
    asyncFunction(function(){
        asyncFunction(function(){
            asyncFunction(function(){
                asyncFunction(function(){
                    ....
                });
            });
        });
    });
});
```

To avoid the pyramid of doom, you use `promises` or `async/await` functions.

**Demo: forEach**

- [Demo: Live Tasks](../tasks/arrayMethods/highOrderMethods/mapLive.js)

# Promises

- **Promises**
  - A promise represents the eventual completion or failure of an asynchronous operation and its resulting value.
  - It has three states: pending, fulfilled, or rejected.
  - Helps to handle asynchronous code in a more readable and maintainable way.

  ```javascript
  const fetchData = new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
          const data = "This is the fetched data.";
          resolve(data); // Success
          // or
          // reject("Error fetching data"); // Failure
      }, 2000);
  });

  fetchData
      .then((result) => {
          console.log(result);
      })
      .catch((error) => {
          console.error(error);
      });
  ```

## Async/await

- **Async/Await**
  - Async/await is a syntactical sugar on top of promises, providing a more concise and synchronous-like way to write asynchronous code.
  - The `async` keyword is used to define a function as asynchronous, and `await` is used to pause execution until the promise is resolved.
  - Makes code more readable and easier to reason about.

  ```javascript
  async function fetchData() {
      return new Promise((resolve) => {
          setTimeout(() => {
              const data = "This is the fetched data.";
              resolve(data);
          }, 2000);
      });
  }

  async function fetchDataAndLog() {
      try {
          const result = await fetchData();
          console.log(result);
      } catch (error) {
          console.error(error);
      }
  }

  fetchDataAndLog();
  ```