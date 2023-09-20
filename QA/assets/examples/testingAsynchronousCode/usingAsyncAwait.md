```javascript
// Assuming asyncFunction returns a promise that resolves with 'Hello, Jest!'
function asyncFunction() {
  return Promise.resolve('Hello, Jest!');
}

test('Testing asynchronous code with async/await', async () => {
  const result = await asyncFunction();
  expect(result).toBe('Hello, Jest!');
});

```