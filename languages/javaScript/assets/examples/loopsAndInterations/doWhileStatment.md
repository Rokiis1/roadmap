```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

- `let i = 0;`: Initializes a variable `i` to 0.

- `do { ... }`: Starts a `do...while` loop, which means the code block inside the curly braces will always execute at least once.

- `console.log(i);`: Prints the value of `i` to the console.

- `i++;`: Increments the value of `i` by 1.

- `while (i < 5);`: Checks the condition `i < 5`. If it's true, the loop repeats; if it's false, the loop terminates.

The `do...while` loop is particularly useful when you need to ensure that a specific action occurs at least once before testing the condition. It's commonly used for user input validation and other situations where you want to guarantee the execution of a block of code before conditionally repeating it.
