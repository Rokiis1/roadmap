```javascript
// Example function to be spied on
function greet(name) {
  return `Hello, ${name}!`;
}

// Spying on the greet function
const spy = jest.spyOn(global, 'greet');

// Providing a custom implementation for the spy
spy.mockImplementation((name) => `Mocked Hello, ${name}!`);

// Calling the function and using the spy
const result = greet('Rokas'); // Calls the greet function
console.log(result); // Outputs: "Mocked Hello, Rokas!"

// Checking if the function was called
expect(spy).toHaveBeenCalled(); // Checks if the greet function was called

// Checking the number of times the function was called
expect(spy).toHaveBeenCalledTimes(1); // Checks if the greet function was called exactly 1 time

// Checking the arguments passed to the function
expect(spy).toHaveBeenCalledWith('Rokas'); // Checks if the greet function was called with 'Rokas'

// Restoring the original function
spy.mockRestore(); // Restores the original greet function
```