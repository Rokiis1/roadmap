# Table of Contents

- [Advanced Operations](#advanced-operations)
- [Manipulating Arrays](#manipulating-arrays)
- [Adding / Removing elements](#adding-/-removing-elements)
- [High-order methods](#high-order-methods)

# Advanced Operations

- [Destructuring Assignment Array](#destructuring-assignment-Array)
- [Spread Operator](#spread-operator)

## Destructuring Assignment Array

**Explanation:**

ES6 provides a new feature called destructing assignment that allows you to destructure properties of an object or elements of an array into individual variables. When it comes to arrays, destructuring assignment provides a convenient way to unpack elements into variables, making code more expressive and succinct.

**Key Concepts:**

1. **Syntax:**

   ```javascript
    function array() {
        return [70, 80,];
    }

   const [variable1, variable2, ...rest] = array;
   ```

   The square brackets on the left-hand side mirror the array structure, and variables inside them will be assigned values from the corresponding positions in the array.

2. **Skipping Elements:**

   You can skip elements by using commas without assigning them to variables.

   ```javascript
   let [first, , third] = [1, 2, 3];
   ```

3. **Default Values:**

   Provide default values in case the corresponding array element is undefined.

   ```javascript
   let [x = 1, y = 2] = [3];
   // x = 3, y = 2
   ```

4. **Nested Destructuring:**

   Destructure nested arrays within arrays.

   ```javascript
   let [a, [b, c]] = [1, [2, 3]];
   // a = 1, b = 2, c = 3
   ```

5. **Rest Operator:**

   Capture remaining elements into a new array using the rest operator.

   ```javascript
   let [head, ...tail] = [1, 2, 3, 4];
   // head = 1, tail = [2, 3, 4]
   ```

6. **Swapping Variables:**

   Destructuring allows for a concise way to swap variable values without using a temporary variable.

   ```javascript
   let a = 1, b = 2;
   [a, b] = [b, a];
   // a = 2, b = 1
   ```

## Spread Operator

**Explanation:**

The spread operator (`...`) in JavaScript is a versatile tool that allows for the expansion of iterable elements like arrays or objects. It provides a concise syntax for copying, concatenating, and spreading values in various contexts.

**Key Concepts:**

1. **Copying Arrays:**

   ```javascript
   let originalArray = [1, 2, 3];
   let copiedArray = [...originalArray];
   ```
   This creates a new array (`copiedArray`) with the same elements as `originalArray` without affecting the original.

2. **Concatenating Arrays:**

   Combine multiple arrays into a new one using the spread operator.

   ```javascript
   let array1 = [1, 2];
   let array2 = [3, 4];
   let combinedArray = [...array1, ...array2];
   // combinedArray = [1, 2, 3, 4]
   ```

3. **Spreading Function Arguments:**

   Pass elements of an array as arguments to a function.

   ```javascript
   function exampleFunction(x, y, z) {
       // code
   }
   let args = [1, 2, 3];
   exampleFunction(...args);
   ```

4. **Copying Objects:**

   The spread operator is also useful for shallow copying objects.

   ```javascript
   let originalObject = { a: 1, b: 2 };
   let copiedObject = { ...originalObject };
   ```

5. **Merging Objects:**
   Merge properties of multiple objects into a new object.

   ```javascript
   let obj1 = { a: 1, b: 2 };
   let obj2 = { c: 3, d: 4 };
   let mergedObject = { ...obj1, ...obj2 };
   // mergedObject = { a: 1, b: 2, c: 3, d: 4 }
   ```

6. **Immutable Data Structures:**

   The spread operator is instrumental in creating immutable data structures, preserving the original data while making modifications.

# Manipulating Arrays

- [Array concat](#array-concat)

## Array concat

**Explanation:**

Array concatenation is a process of combining two or more arrays to create a new array that includes elements from all the arrays being concatenated. In JavaScript, you can use the `concat` method to concatenate arrays. The `concat` method does not modify the original arrays; instead, it creates and returns a new array containing all the elements of the concatenated arrays.

**Key Concepts:**

1. **Syntax:**

```javascript
newArray = array1.concat(array2, array3, ...)
```

2. **Example:**

```javascript
// Example arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Concatenate arrays using the concat method
const newArray = array1.concat(array2);

console.log(newArray);
// Output: [1, 2, 3, 4, 5, 6]
```

3. **Immutable Operation:**

   - Array concatenation is an immutable operation, meaning it does not change the original arrays.

4. **Order of Elements:**

   - The order of elements in the concatenated array is determined by the order in which arrays are passed to the `concat` method.

5. **Alternative Syntax:**

   - The spread operator (`...`) can also be used for array concatenation.
     ```javascript
     const newArray = [...array1, ...array2];
     ```

# Adding / Removing elements

- [Array Push](#array-push)
- [Array Pop](#array-pop)
- [Array unshift](#array-unshift)
- [Array shift](#array-shift)
- [Array splice](#array-splice)

**Explanation:**

Manipulating arrays often involves adding or removing elements. There are several methods in JavaScript that facilitate these operations.

**Key Concepts:**

1. **Mutability:**
   - Methods like `push`, `pop`, `unshift`, and `shift` modify the original array.

2. **Immutability:**
   - The `splice` method can be used for both adding and removing elements, and it can be used immutably by creating a new array.

3. **Return Values:**
   - `pop` and `shift` return the removed element, while `push`, `unshift`, and `splice` do not return the modified array (or a copy).

4. **Array Length:**
   - The `length` property of an array is automatically updated when elements are added or removed using these methods.

5. **Splice Parameters:**
   - The `splice` method takes three parameters: the starting index, the number of elements to remove, and the elements to add.

## Array Push

**Explanation:**

The ```Array.prototype.push()``` method adds one or more elements to the end of an array and returns the new array’s length.

**Syntax:**

```javascript
array.push(newElement);
array.push(newElement1,newElement2);
array.push(newElement1,newElement2,...,newElementN);
```

The `push()` method returns the new value of the length property of the array object on which you call the method.

**Example:**

```javascript
let numbers = [10, 20, 30];

const length = numbers.push(40);

console.log(length);
console.log(numbers);
//4
// [ 10, 20, 30, 40 ]
```

Starting from ES6, you can use the spread operator (`...`) to spread the elements of the `cmyk` array and push them to the `colors` array.

```javascript
let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

colors.push(...cmyk);

console.log(colors);
```

**Demo: push**

- [Demo: Live Tasks](../tasks/arrayMethods/addingAndRemovingElements/pushLive.js)

## Array Pop

**Explanation:**

The `Array.prototype.pop()` method removes the last element from an array and returns the removed element.

**Syntax:**

```javascript
Array.pop(element1)
```

**Example:**

```javascript
const fruits = ['apple', 'orange', 'banana'];

const removedFruit = fruits.pop();

console.log(removedFruit) // banana
console.log(fruits) // ["apple", "orange"]
console.log(fruits.length); // 2
```

**Demo: pop**

- [Demo: Live Tasks](../tasks/arrayMethods/addingAndRemovingElements/popLive.js)

## Array Unshift

**Explanation:**

The `Array.prototype.unshift()` method adds one or more elements to the beginning of an array and returns the new array’s length.

**Syntax:**

```javascript
array.unshift(element);
array.unshift(element1, element2);
array.unshift(element1, element2,...elementN);
```

**Example:**

Added two `fruits` in the head of array.

```javascript
// Original array
const fruits = ['Banana', 'Apple', 'Orange'];

// Using unshift to add elements to the beginning
fruits.unshift('Mango', 'Pineapple');

// Display the modified array
console.log(fruits);
```

In this example, the spread operator (`...`) is used to add the elements of the 

```javascript
// Original arrays
const vegetables = ['Carrot', 'Broccoli'];
const additionalFruits = ['Mango', 'Pineapple'];

// Using unshift to add elements of another array to the beginning
vegetables.unshift(...additionalFruits);

// Display the modified array
console.log(vegetables); // Output: ['Mango', 'Pineapple', 'Carrot', 'Broccoli']
```

**Demo: unshift**

- [Demo: Live Tasks](../tasks/arrayMethods/addingAndRemovingElements/unshiftLive.js)

## Array Shift

**Explanation:**

The `Array.prototype.shift()` method removes the first element from an array and returns that element. 

**Syntax:**

```javascript
array.unshift(element);
array.unshift(element1, element2);
array.unshift(element1, element2,...elementN);
```

**Example:**

Removing first element from an array.

```javascript
const fruits = ['apple', 'orange', 'banana'];

const removedFruit = fruits.shift(); // removedFruit is 'apple', fruits is now ['orange', 'banana']
```

**Demo: shift**

- [Demo: Live Tasks](../tasks/arrayMethods/addingAndRemovingElements/shiftLive.js)

## Array Splice

**Explanation:**

JavaScript Array type provides a very powerful `splice()` method that allows you to insert new elements into the middle of an array. Also, you can use this method to delete and replace existing elements as well.

**Syntax**

The `position` specifies the position of the first item to delete and the `num` argument determines the number of elements to delete.

The `splice()` method changes the original array and returns an array that contains the deleted elements.

```javascript
Array.splice(position,num);
```

```javascript
let scores = [1, 2, 3, 4, 5];
//The following statement deletes three elements of the scores array starting from the first element.
let deletedScores = scores.splice(0, 3);
//The scores array now contains two elements.
console.log(scores); //  [4, 5]
// And the deletedScores array contains three elements.
console.log(deletedScores); // [1, 2, 3]
```

**Syntax**

```javascript
Array.splice(position,0,new_element_1,new_element_2);
```

**Adding Elements with Splice:**

```javascript
const fruits = ['apple', 'orange', 'banana'];

fruits.splice(1, 0, 'grape', 'kiwi'); // fruits is now ['apple', 'grape', 'kiwi', 'orange', 'banana']
```

**Removing Elements with Splice:**

```javascript
const fruits = ['apple', 'grape', 'kiwi', 'orange', 'banana'];
fruits.splice(2, 2);
// fruits is now ['apple', 'grape', 'banana']
console.log(fruits)
```

**Demo: splice**

- [Demo: Live Tasks](../tasks/arrayMethods/addingAndRemovingElements/spliceLive.js)

# High-order methods

- [Array forEach](#array-foreach)
- [Array map](#array-map)
- [Array reduce](#array-reduce)
- [Array filter](#array-filter)
- [Array sort](#array-sort)

**Explanation:**

Higher-order array methods in JavaScript that operate on arrays and allow you to perform various operations, often more concisely and with greater expressiveness than traditional loops.

**Key Concepts:**

1. **Callback Functions:**

   - Higher-order array methods take callback functions as arguments. These functions define the operation to be performed on each element.

2. **Immutability:**

   - Higher-order methods generally do not modify the original array. Instead, they return a new array or a single result.

3. **Chaining:**

   - Higher-order methods can be chained together to perform complex operations in a concise and readable manner.

4. **Arrow Functions:**

   - Arrow functions are commonly used as callbacks in higher-order methods due to their concise syntax.

5. **Accumulator in Reduce:**

   - In the `reduce` method, the accumulator is a variable that accumulates the results of the callback function.

### Array `forEach`:

The `forEach` method is used to iterate over the elements of an array and perform a specified action for each element.

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach((number) => {
  console.log(number);
});
// Output:
// 1
// 2
// 3
// 4
```

### Array `map`:

The `map` method creates a new array by applying a provided function to each element of the original array.

```javascript
const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map((number) => {
  return number * number;
});
// squaredNumbers is now [1, 4, 9, 16]
```

### Array `reduce`:

The `reduce` method is used to reduce the elements of an array to a single value. It takes a callback function and an initial accumulator value.

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);
// sum is 10
```

### Array `filter`:

The `filter` method creates a new array with elements that satisfy a provided condition.

```javascript
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
// evenNumbers is now [2, 4]
```

### Array `sort`:

The `sort` method is used to sort the elements of an array. By default, it sorts elements as strings. To sort numbers, a custom compare function can be provided.

```javascript
const fruits = ['banana', 'apple', 'orange'];

const sortedFruits = fruits.sort();
// sortedFruits is now ['apple', 'banana', 'orange']
```
