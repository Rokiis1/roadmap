- [setTimeout vs setInterval](#setTimeout-vs-setinterval)
- [Callbacks](#callbacks)
  - [Callback Hell](#callback-hell)
- [Promises](#promises)
  - [Async/Await](#async-/-await)

### `setTimeout` vs `setInterval`

- **`setTimeout`**
  - `setTimeout` is a function that executes a given function or code block after a specified amount of time.
  - It runs the code once after the specified delay.
  - Useful for delaying the execution of a function.

  ```javascript
  setTimeout(() => {
      console.log("This will be executed after 2000 milliseconds.");
  }, 2000);
  ```

- **`setInterval`**
  - `setInterval` is a function that repeatedly executes a given function or code block at specified intervals.
  - It continues to run the code at the specified interval until explicitly stopped.
  - Useful for tasks that need to be performed repeatedly.

  ```javascript
  let intervalId = setInterval(() => {
      console.log("This will be executed every 1000 milliseconds.");
  }, 1000);

  // To stop the interval after a certain time
  setTimeout(() => {
      clearInterval(intervalId);
  }, 5000);
  ```

### Callbacks

- **Callbacks**
  - A callback is a function passed as an argument to another function, to be executed later.
  - Commonly used in asynchronous operations to handle the completion of a task.
  - Example:

    ```javascript
    function fetchData(callback) {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = "This is the fetched data.";
            callback(data);
        }, 2000);
    }

    fetchData((result) => {
        console.log(result);
    });
    ```

#### Callback Hell

- **Callback Hell (Pyramid of Doom)**
  - Occurs when multiple nested callbacks are used, leading to code that is hard to read and maintain.
  - Promises and async/await are solutions to mitigate callback hell.

    ```javascript
    asyncFunction1((result1) => {
        asyncFunction2(result1, (result2) => {
            asyncFunction3(result2, (result3) => {
                // ...and so on
            });
        });
    });
    ```

### Promises

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

#### Async/await

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