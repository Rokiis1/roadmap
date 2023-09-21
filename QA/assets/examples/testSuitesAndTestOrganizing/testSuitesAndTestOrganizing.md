**math.js**
```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

**math.test.js**
```javascript
import { add, subtract } from './math';

describe('Math Functions', () => {
  // Test suite for addition
  describe('add()', () => {
    it('should correctly add two numbers', () => {
      expect(add(1, 2)).toBe(3);
    });

    it('should handle negative numbers', () => {
      expect(add(-1, 2)).toBe(1);
    });
  });

  // Test suite for subtraction
  describe('subtract()', () => {
    it('should correctly subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative results', () => {
      expect(subtract(2, 5)).toBe(-3);
    });
  });
});
```