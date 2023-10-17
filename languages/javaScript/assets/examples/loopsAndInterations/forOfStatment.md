```javascript
const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
  console.log(fruit);
}
```

- The `for...of `loop iterates over the elements of the `fruits` array.

- In each iteration, the `fruit` variable represents the current element's value, making the code more readable and concise.

The `for...of` loop simplifies the process of iterating through iterable objects and is particularly useful when you want to work with the values directly without worrying about indexes or keys. It's a preferred choice for iterating through arrays, strings, and other data structures that implement the iterable protocol.