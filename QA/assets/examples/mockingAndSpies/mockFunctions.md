**src/math.js**
```javascript
export function add(a, b) {
  return a + b;
}
```

**__tests__/math.test.js**
```javascript
import { add } from '../src/math';

// Mocking the add function
const mockAdd = jest.fn();
jest.mock('../src/math', () => ({
  ...jest.requireActual('../src/math'),
  add: mockAdd,
}));
mockAdd.mockReturnValue(10); // Mocking the return value

test('Mocking a function', () => {
  expect(mockAdd(2, 3)).toBe(10); // Using the mock function
  expect(mockAdd).toHaveBeenCalledWith(2, 3); // Checking if it was called with specific arguments
});
```