```
my-project/
  └── src/
      ├── math.js
  └── tests/
      ├── math.test.js
```

```javascript
import { add, subtract } from '../src/math';

describe('Math Functions', () => {
  describe('add()', () => {
    it('should correctly add two numbers', () => {
      expect(add(1, 2)).toBe(3);
    });

    it('should handle negative numbers', () => {
      expect(add(-1, 2)).toBe(1);
    });
  });

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