```js
let i = 1;
while (i < 5) {
  console.log(i);
  i++; // Incrementing the loop control variable
}
```

- The `while` loop starts with the condition `i <= 5`, which evaluates to `true` for `i` being 1, 2, 3, 4, and 5.

- Inside the loop, the value of `i` is printed, and then `i` is incremented by 1 using `i++`.

- This process continues until `i` becomes 6, at which point the condition becomes `false`, and the loop terminates.

The `while` loop is very flexible and can be used for a wide range of tasks, from simple counting and input validation to more complex scenarios where the loop's execution depends on changing conditions. It's essential to ensure that the loop control variable or conditions within the loop eventually lead to the termination of the loop, to prevent infinite loops.