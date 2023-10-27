# Table of Contents

- [JavaScript](#javascript)
  - [Explaination how the JavaScript works](#explaination-how-the-javaScript-works)
  - [Introduction to JavaScript](#introduction-to-javascript)
  - [ECMAScript](#ecmascript)
  - [Node.js](#nodejs)
  - [How to run Javascript](#how-to-run-javascript)
- [Javascript Variables](#javascript-variables)
    - [Variable Declarations](#variable-declarations)
    - [Hoisting](#hoisting)
    - [Naming Rules](#naming-rules)
    - [Variable Scopes](#variable-scopes)
      - [Block scopes](#block-scopes)
      - [Function scopes](#function-scopes)
      - [Global scopes](#global-scopes)
- [Data Types](#data-types)
  - [string](#string)
  - [Undefined](#undefined)
  - [Number](#number)
  - [BigInt](#big-int)
  - [Boolean](#boolean)
  - [Null](#null)
  - [Symbol](#symbol)    
  - [typeof Operator](#typeof-operator)
  - [Built-in Objects](#built-in-objects)
- [Equality Comparisons](#equality-comparisons)
  - [The == Operator](#operator==)
  - [The === Operator](#operator===)
  - [The Object.is() Method](#object-method)
- [Expressions and Operators](#expressions-and-operators)
  - [Assignment Operators](#assignment-operators)
  - [Comparison Operators](#comparison-operators)
    - [Equal to (==)](#equal-to)
    - [Equal value and equal type (===)](#equal-value-and-equal-type)
    - [Not equal (!=)](#not-equal)
    - [Not equal value or not equal type (!==)](#not-equal-value-or-not-equal-type)
    - [Greater than (>)](#greater-than)
    - [Less than (<)](#less-than)
    - [Greater than or equal to (>=)](#greater-than-or-equal-to)
    - [Less than or equal to (<=)](#less-than-or-equal-to)
    - [Ternary operator (?)](#ternary-operator)
  - [Arithmetic Operators](#arithmetic-operators)
  - [Logical Operators](#logical-operators)
    - [Logical AND (&&)](#logical-and)
    - [Logical OR (||)](#logical-or)
    - [Logical NOT (!)](#logical-not)
  - [String Operators](#string-operators)
  - [Conditional operators](#conditional-operators)
  - [Comma Operators](#comma-operators)
  - [Unary Operators](#unary-operators)
- [Type Casting in JavaScript](#type-casting-in-javascript)
  - [Type Conversion](#type-conversion)
  - [Coercion](#coercion)
  - [Explicit Type Casting](#explicit-type-casting)
  - [Implicit Type Casting](#implicit-type-casting)
- [Loops and Iterations](#loops-and-iterations)
- [Control Flow and Exception Handling](#control-flow-and-exception-handling)
  - [Conditional Statements](#conditional-statements)
  - [Exception Handling](#exception-handling)
- [Functions](#functions)

- [Data Structures](#data-structures)
  - [Structured Data](#structured-data)
    - [JSON](#json)
  - [Indexed Collections](#indexed-collections)
    - [Arrays](#arrays)
      - [Map()](#map)
      - [Filter()](#filter)
      - [ForEach()](#for-each)
      - [find()](#find)
      - [findIndex()](#find-index)
      - [includes()](#includes)
      - [sort()](#sort)
      - [Reduce()](#reduce)
    - [Keyed Collections](#keyed-collections)
      - [Map](#map)
      - [Objects](#objects)
- [Asynchronous JavaScript](#asynchronous-javascript)
  - [setTimeout](#settimeout)
  - [setInterval](#setinterval)
  - [Callbacks](#callbacks)
    - [Callback Hell](#callback-hell)
  - [Promises](#promises)
    - [async / await](#async-await)
- [Strict Mode](#strict-mode)
- [DOM (Document Object Model)](#dom-document-object-model)
  - [Introduction to DOM](#introduction-to-dom)
  - [DOM Manipulation](#dom-manipulation)
  - [DOM Traversal](#dom-traversal)
  - [DOM Events](#dom-events)
  - [DOM Styling](#dom-styling)
- [Build Tools](#build-tools)
  - [Linters formatters](#linters-formatters)
    - [Prettier](#prettier)
    - [ESLint](#eslint)
  - [Task Runners](#task-runners)
    - [Task Runners](#task-runners)
    - [scripts](#scripts)
  - [Module Bundlers](#module-bundlers)
    - [Vite](#vite)
    - [esbuild](#esbuild)

# JavaScript

JavaScript is a high-level programming language that is primarily used for web development. It enables the creation of interactive and dynamic elements on websites. JavaScript can be executed on both the client-side (in the web browser) and the server-side (on a web server).

## Explaination how the JavaScript works

When a user opens a website, the browser requests JavaScript files from the server. Once the files are received, the browser executes the JavaScript and manipulates the Document Object Model (DOM) to make changes to the website. Finally, the browser displays the website with the JavaScript changes to the user.

![howJavaScriptWork](./images/howJavaScriptWork.png)

## Introduction to JavaScript

- Syntax and basic structure of JavaScript
- Variables and data types
- Control flow and decision-making with conditionals
- Loops and iteration
- Functions and scope
- Manipulating the Document Object Model (DOM)
- Event handling
- Asynchronous programming with callbacks, promises, and async/await

## ECMAScript

ECMAScript is the standardized specification for JavaScript. It defines the language syntax, features, and behavior that all JavaScript implementations should follow. ECMAScript versions are often referred to as ES5, ES6 (or ES2015), ES7, and so on.

It's important to note that JavaScript is the most widely used implementation of ECMAScript. JavaScript engines in web browsers and server-side environments adhere to the ECMAScript specification to ensure consistent behavior across platforms.

![howJavaScriptWork](./images/ECMAScript.png)

## Node.js 

Node.js is a runtime environment that allows JavaScript to be executed on the server-side. It provides an event-driven architecture and a rich set of built-in modules, making it suitable for building scalable network applications. Node.js is built on the V8 JavaScript engine, which is also used by the Google Chrome browser.

Node.js extends the capabilities of JavaScript beyond the web browser, enabling developers to build server-side applications, command-line tools, APIs, and more. It provides access to various APIs for file system operations, networking, database connectivity, and other system-level tasks.

![nodejs](./images/nodejs.png)    

## Resources

- [(Article)JavaScript documentatio developer mozilla](https://developer.mozilla.org/en-US/)
- [(Article) JavaScript documentation w3schools](https://www.w3schools.com/js/default.asp)
- [(Article) The History of JavaScript](https://dev.to/iarchitsharma/the-history-of-javascript-5e98)
- [(Video) JavaScript in 100 Seconds](https://www.youtube.com/watch?v=DHjqpvDnNGE)

# Javascript Variables

## Variable Declarations

**Description:** A variable declaration creates a new variable and optionally initializes it with a value.

**Syntax:**

```js
var variableName;
let variableName;
const variableName = value;
```

**Example:**

```js
var age;
let name;
const PI = 3.14;
```

## Hoisting

**Description:** Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.

**Example:**

```js
console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10

console.log(y); // ReferenceError: y is not defined
let y = 20;
console.log(y); // Output: 20
```

## Naming Rules

**Description:** Naming rules determine how variables can be named in JavaScript.

**Syntax:** 

Variable names must start with a letter, underscore, or dollar sign.
They can contain letters, digits, underscores, or dollar signs.
Variable names are case-sensitive.

**Example:**

```js
var myVariable;
let _score;
const $PI = 3.14;
```

## Variable Scopes

### Block scopes

**Description:** Block scopes refer to variables that are only accessible within a specific block of code, such as within an `if` statement or a loop.

**Syntax:**

```js
{
  // Block scope
  var x = 10;
  let y = 20;
  const z = 30;
}
```

**Example:**

```js
{
  // Block scope
  var x = 10;
  let y = 20;
  const z = 30;

  console.log(x); // Output: 10
  console.log(y); // Output: 20
  console.log(z); // Output: 30
}

console.log(x); // Output: 10
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined
```

### Function scopes

**Description:** Function scopes refer to variables that are defined within a function and are only accessible within that function.

**Syntax:**

```js
function myFunction() {
  // Function scope
  var x = 10;
  let y = 20;
  const z = 30;
}
```

**Example:**

```js
function myFunction() {
  // Function scope
  var x = 10;
  let y = 20;
  const z = 30;

  console.log(x); // Output: 10
  console.log(y); // Output: 20
  console.log(z); // Output: 30
}

console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined
```

### Global scopes

**Description:** Global scopes refer to variables that are accessible throughout the entire JavaScript program.

**Example:**

```js
var x = 10;
let y = 20;
const z = 30;

function myFunction() {
  console.log(x); // Output: 10
  console.log(y); // Output: 20
  console.log(z); // Output: 30
}

console.log(x); // Output: 10
console.log(y); // Output: 20
console.log(z); // Output: 30
```

# Data Types

## String

A string represents a sequence of characters and is enclosed in either single quotes (') or double quotes (").

```js
const greeting = 'Hello, world!';
```

## Undefined

The undefined data type represents a value that is not assigned to a variable or not yet defined.

```js
let username;
console.log(username); // Output: undefined
```
## Number

The number data type represents numeric values.

```js
const age = 25;
```

## BigInt

The bigint data type represents integers with arbitrary precision, allowing you to work with numbers larger than the Number type can handle.

```js
const bigNumber = 123456789012345678901234567890n;
```

## Boolean

The boolean data type represents a logical value, either true or false.

```js
const isLogged = true;
```
The null data type represents the intentional absence of any object value.

## Null

```js
const user = null;
```
The symbol data type represents unique and immutable values that may be used as property keys of objects.

## Symbol

```js
const id = Symbol('uniqueId');
```
## typeof Operator

The typeof operator is used to determine the data type of a value.

```js
const username = 'John';
console.log(typeof username); // Output: string
```
## Built-in Objects

JavaScript provides several built-in objects that offer functionalities for specific purposes. Here are a few commonly used ones:

`Math`: Provides mathematical functions and constants.
`Date`: Enables working with dates and times.
`Array`: Represents an ordered list of elements.
`Object`: Serves as a basic object type.

```js
const randomNumber = Math.random();
const currentDate = new Date();
const fruits = ['apple', 'banana', 'orange'];
const person = { name: 'John', age: 25 };
```
## Resources

- [(Article)Data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

# Expressions and Operators

At a high level, an expression is a valid unit of code that resolves to a value. There are two types of expressions: those that have side effects (such as assigning values) and those that purely evaluate.

## Assignment Operators

Assignment operators are used to assign values to variables. They allow you to perform simple mathematical operations and update the value of a variable in a single step.

**Syntax:**

```js
variable = value;
```

**Example:**

```js
let x = 5;
x += 3; // Equivalent to x = x + 3;
console.log(x); // Output: 8
```
### Tasks

- [Assignment Operators](../../tasks/vanilla%20JavaScript/Expressions%20and%20Operators/1.assignmentOperators.js)

## Comparison Operators

Comparison operators are used to compare two values and return a Boolean result (true or false) based on the comparison.

### Equal to (==)

**Description:** The equal to operator (`==`) compares two values and returns `true` if they are equal, and `false` otherwise. It performs type coercion, meaning it can compare values of different types by converting them to a common type.

**Syntax:**

```js
value1 == value2
```

**Example:**

```js
let a = 5;
let b = "5";
console.log(a == b);  // true
```

### Equal value and equal type (===)

**Description:** The equal value and equal type operator (`===`) compares two values and returns `true` only if they have the same value and the same type. It does not perform type coercion.

**Syntax:**

```js
value1 === value2
```

**Example:**

```js
let x = 10;
let y = "10";
console.log(x === y); // false
```

### Not equal (!=)

**Description:** The not equal operator (`!=`) compares two values and returns `true` if they are not equal, and `false` if they are equal. It performs type coercion.

**Syntax:**

```js
value1 != value2
```

**Example:**

```js
let p = 8;
let q = 5;
console.log(p != q);  // true
```

### Not equal value or not equal type (!==)

**Description:** The not equal value or not equal type operator (`!==`) compares two values and returns `true` if they are not equal in value or not equal in type. It does not perform type coercion.

**Syntax:**

```js
value1 !== value2
```

**Example:**

```js
let m = 2;
let n = "2";
console.log(m !== n); // true
```

### Greater than (>)

**Description:** The greater than operator (`>`) compares two values and returns `true` if the left operand is greater than the right operand. Otherwise, it returns `false`.

**Syntax:**

```js
value1 > value2
```

**Example:**

```js
let num1 = 7;
let num2 = 4;
console.log(num1 > num2); // true
```

### Less than (<)

**Description:** The less than operator (`<`) compares two values and returns `true` if the left operand is less than the right operand. Otherwise, it returns `false`.

**Syntax:**

```js
value1 < value2
```

**Example:**

```js
let num3 = 3;
let num4 = 6;
console.log(num3 < num4); // true
```

### Greater than or equal to (>=)

**Description:** The greater than or equal to operator (>=) compares two values and returns true if the left operand is greater than or equal to the right operand. Otherwise, it returns false.

**Syntax:**

```js
value1 >= value2
```

**Example:**

```js
let value1 = 5;
let value2 = 5;
console.log(value1 >= value2); // true
```

### Less than or equal to (<=)

**Description:** The less than or equal to operator (`<=`) compares two values and returns `true` if the left operand is less than or equal to the right operand. Otherwise, it returns `false`.

**Syntax:**

```js
value1 <= value2
```

**Example:**

```js
let value3 = 8;
let value4 = 10;
console.log(value3 <= value4); // true
```

### Ternary operator (?)

**Description:** The ternary operator (`?`) is a conditional operator that evaluates a condition and returns one of two values based on the result of the condition. It provides a compact way to write simple if-else statements.

**Syntax:** 

```js
condition ? value1 : value2
```

**Example:**

```js
let age = 20;
let isAdult = (age >= 18) ? "Yes" : "No";
console.log(isAdult);  // "Yes"
```

### Tasks

- [Comparison Operators](../../tasks/vanilla%20JavaScript/Expressions%20and%20Operators/2.comparisonOperators.js)


## Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations on numeric values.

**Syntax:**

```js
value1 operator value2;
```

**Example:**

```js
let x = 5;
let y = 3;
console.log(x + y); // Output: 8
```

### Tasks

- [Arithmetic Operators
](../../tasks/vanilla%20JavaScript/Expressions%20and%20Operators/3.arithmeticOperators.js)

## Logical Operators

Logical operators are used to combine or invert Boolean values and produce a Boolean result.

### Logical AND (&&)

**Description:** The logical AND operator (`&&`) returns `true` if both operands are true, and `false` otherwise. It evaluates the operands from left to right and stops evaluating as soon as a false value is encountered.

**Syntax:**

```js
operand1 && operand2
```

**Example:**

```js
let x = 5;
let y = 3;
console.log(x > 3 && y < 10); // Output: true
```

### Logical OR (||)

**Description:** The logical OR operator (`||`) returns `true` if at least one of the operands is true, and `false` if both operands are false. It evaluates the operands from left to right and stops evaluating as soon as a true value is encountered.

**Syntax:**

```js
operand1 || operand2
```

**Example:**

```js
let x = true;
let y = false;
console.log(x || y); // true
```

### Logical NOT (!)

**Description:** The logical NOT operator (`!`) negates the value of the operand. If the operand is true, it returns false, and if the operand is false, it returns true.

**Syntax:**

```js
!operand
```

**Example:**

```js
let p = true;
console.log(!p);  // false

let q = false;
console.log(!q);  // true
```

- [Logical Operators](../../tasks/vanilla%20JavaScript/Expressions%20and%20Operators/4.logicalOperators.js)


## String Operators

**Syntax:**

```js
string1 + string2;
```

**Example:**

```js
let greeting = "Hello";
let name = "John";
console.log(greeting + " " + name); // Output: "Hello John"
```

### Tasks

- [String Operators](../../tasks/vanilla%20JavaScript/Expressions%20and%20Operators/5.stringOperators.js)

## Conditional Operators

Conditional operators are used for conditional statements and ternary expressions.

**Syntax:**

```js
condition ? value1 : value2;
```

**Example:**

```js
let age = 20;
let isAdult = (age >= 18) ? "Adult" : "Minor";
console.log(isAdult); // Output: "Adult"
```
## Comma Operators

Comma operators are used to separate multiple expressions within a single statement. The value of the entire expression is determined by the last expression.

**Syntax:**

```js
expression1, expression2, expression3;
```

**Example:**

```js
let x = 1, y = 2, z = 3;
console.log(x, y, z); // Output: 1 2 3
```
### Tasks

- [Comma Operators](../../tasks/vanilla%20JavaScript/Expressions%20and%20Operators/7.commaOperators.js)

## Unary Operators

**Description:** Unary operators in JavaScript are operators that perform operations on a single operand. They can be used to convert values, negate values, perform logical operations, or increment and decrement values.

**Syntax:**

- Unary Plus (+): `+operand`
- Unary Negation (-): `-operand`
- Logical NOT (!): `!operand`
- Increment (++): `++operand` or `operand++`
- Decrement (--): `--operand` or `operand--`

**Examples:**

```javascript
// Unary Plus
let x = "5";
let y = +x;
console.log(y); // Output: 5

// Unary Negation
let a = 10;
let b = -a;
console.log(b); // Output: -10

// Logical NOT
let p = true;
let q = !p;
console.log(q); // Output: false

// Increment
let i = 5;
console.log(++i); // Output: 6 (prefix increment)
console.log(i++); // Output: 6 (postfix increment)
console.log(i);   // Output: 7

// Decrement
let j = 5;
console.log(--j); // Output: 4 (prefix decrement)
console.log(j--); // Output: 4 (postfix decrement)
console.log(j);   // Output: 3
```
### Tasks

- [Unary Operators](../../tasks/vanilla%20JavaScript/Expressions%20and%20Operators/8.unaryOperators.js)

## Resources

- [(Article)Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

# Type Casting in JavaScript

## Type Conversion

```js
// Implicitly converting a number to a string
const num = 42;
const str = "The answer is: " + num; // Implicit type conversion
console.log(str); // Output: "The answer is: 42"
```
The number `42` is implicitly converted to a string by JavaScript when it is concatenated with another string using the `+` operator.

## Coercion

```js
// Implicitly converting a string to a number
const num = 42;
const str = "3";
const result = num + str; // Implicit coercion
console.log(result); // Output: "423"
```
The string `"3"` is implicitly coerced to a number, allowing JavaScript to perform the addition operation with the number `42`. However, since the `+` operator is used for both addition and concatenation, the result is the concatenated string `"423"`.

## Explicit Type Casting

```js
// Explicitly converting a float to an integer
const numFloat = 3.14;
const numInt = parseInt(numFloat); // Explicit type casting
console.log(numInt); // Output: 3
```
The `parseInt()` function is used to explicitly cast the floating-point number `3.14` to an integer. The function parses the integer portion of the number, discarding the decimal part, and returns the integer value `3`.

## Implicit Type Casting

```js
// Implicitly converting an integer to a float
const numInt = 42;
const numFloat = numInt; // Implicit type casting

console.log(numFloat); // Output: 42
console.log(typeof numFloat); // Output: "number"
```
 The integer value `42` is implicitly cast to a float by JavaScript without any explicit syntax. The result is the floating-point number `42.0`.

## Resources

- [(Article)JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)

# Loops and Iterations

- [for Statement](#for-statement)
- [for in Statement](#for-in-statement)
- [for of Statement](#for-of-statement)
- [while Statement](#while-statement)
- [do while Statement](#do-while-statement)

**Explanation:**

Loops and iterations are fundamental concepts in JavaScript (and many other programming languages) that allow you to repeatedly execute a block of code. They are used when you want to perform the same operation multiple times or when you need to iterate through collections like arrays or objects. There are several types of loops and iteration constructs in JavaScript

## for Statement

**Explanation:**

The `for` statement is one of the most common and versatile loop constructs in JavaScript. It allows you to create a loop that repeatedly executes a block of code while a specific condition is true. The `for` statement consists of three parts: initialization, condition, and iteration.

**Key Concepts:**

1. **Initialization:** This is where you declare and initialize a loop control variable. It usually starts with `let`, `var`, or `const`. This variable is used to keep track of the loop's progress.

2. **Condition:** The loop continues executing as long as the condition specified here evaluates to `true`. When the condition becomes `false`, the loop terminates.

3. **Iteration:** After each iteration of the loop, the iteration statement is executed, which typically updates the loop control variable. It is often used to increment or decrement the variable.

**Syntax:**

```js
for (initialization; condition; increment/decrement) {
  // Code to be executed
}
```

- `initialization`: This part is executed only once when the loop starts. It initializes the loop control variable.

- `condition`: The loop will continue to execute as long as this condition evaluates to `true`.

- `iteration`: This part is executed after each iteration of the loop and is used to update the loop control variable.

**Example:**

- [Example: for statment](./assets/examples/loopsAndInterations/forStatment.md)

## for in Statement

**Explanation:**

The `for...in` statement in JavaScript is used to iterate over the enumerable properties of an object. It's particularly useful for looping through the keys or properties of an object, such as the properties of an object literal or the elements of an array (though it's not recommended for iterating through arrays).

**Key Concepts:**

1. **Enumerability:** Not all properties of an object are enumerable. For example, properties defined with `Object.defineProperty` or certain built-in properties are not enumerable by default. You can specify the enumerability of a property when creating or modifying objects.

2. **Iterating Over Keys:** A `for...in` loop is primarily used for iterating over keys or properties of an object, rather than their values.

**Syntax:**

The `for...in` statement iterates over the enumerable properties of an object. It can be used to loop through the keys of an object.

```js
for (variable in object) {
  // Code to be executed for each property in the object
}
```

- `variable:` This is a variable that represents the key or property name in each iteration.
- `object:` The object over whose properties you want to iterate.

**Example:**

- [For in Statment](./assets/examples/loopsAndInterations/forInStatment.md)

## for of Statement

**Explanation:**

The `for...of` statement in JavaScript is used for iterating over the values of iterable objects, such as arrays, strings, maps, sets, and more. It provides a cleaner and more straightforward way to loop through the elements of an iterable, as compared to the `for...in` loop which is primarily used for iterating over object keys.

**Key Concepts:**

1. **Iterable Objects:** An iterable object is an object that has an iterable protocol, which includes a method named `[Symbol.iterator]` that returns an iterator object. Arrays, strings, maps, and sets are examples of iterable objects.

2. **Iterating Over Values:** The `for...of` loop directly iterates over the values of the iterable, rather than requiring you to access the values through an index or key.

**Syntax:**

```js
for (variable of iterable) {
  // Code to be executed
}
```

- **variable:** This is a variable that represents each value in the iterable in each iteration.

- **iterable:** The object you want to iterate over, which should be iterable.

**Example:**

- [For of Statment](./assets/examples/loopsAndInterations/forOfStatment.md)

## while Statement

**Explanation:**

The `while` statement in JavaScript is a type of loop that repeatedly executes a block of code as long as a specified condition remains true. It is used when you want to create a loop that continues as long as the condition is met.

**Key Concepts:**

1. **Condition:** The while loop begins by evaluating a condition. As long as this condition is true, the code inside the loop continues to execute. If the condition is initially false, the code within the loop is never executed.

2. **Iteration:** Inside the loop, you typically include code that changes the variables or values involved in the condition to eventually make the condition false and terminate the loop.

**Syntax:**

```js
while (condition) {
  // Code to be executed
}
```

- `condition`: This is an expression or a boolean value. The loop will continue executing as long as this condition is `true`.

**Example:**

- [Example: While statment](./assets/examples/loopsAndInterations/whileStatment.md)

## do while Statement

**Explanation:**

The `do...while` statement in JavaScript is a type of loop that is similar to the `while` loop, but with a crucial difference. It always executes the block of code at least once, regardless of whether the condition is true or false. After the first execution, it checks the condition, and if it's true, it continues to execute the code block. If the condition is false after the first execution, the loop terminates.

**Key Concepts:**

1. **Guaranteed Execution:** The primary feature of the `do...while` loop is that it guarantees the execution of the code block at least once, even if the condition is initially false.

2. **Condition Checking:** After the initial execution, the condition is checked. If it's true, the loop continues; if it's false, the loop terminates.

**Syntax:**

```js
do {
  // Code to be executed at least once
} while (condition);
```

- The code block within the `do` section is executed at least once before checking the condition.

- condition: This is the expression or boolean value that is checked after the initial execution. If it's `true`, the loop continues; if it's `false`, the loop terminates.

**Example:**

- [Example: Do while statment](./assets/examples/loopsAndInterations/doWhileStatment.md)

**Resources:**

- [Resources: Loops and Iterations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

**Tasks:**

- [Tasks: Loops and Iterations]()

# Control Flow and Exception Handling

- [Conditional Statements](#conditional-statements)
- [Exception Handling](#exception-handling)

## Conditional Statements

- [`if` Statement](#if-statement)
- [`Switch` Statement](#switch-statement)
- [Ternary Operator](#ternary-operator)

**Explanation:**

Conditional statements in JavaScript are crucial for controlling the flow of a program based on specific conditions. They allow you to make decisions, execute loops, and handle errors. In JavaScript, there are three primary types of control flow statements: conditional statements, loops, and try-catch statements.

**Key Concepts:**

1. **Conditional Logic:** Conditional statements enable your code to make decisions based on whether a given condition is true or false.

2. **Control Flow:** Conditional statements determine the order in which code is executed, providing a mechanism for branching within your program.

3. **Boolean Values:** Conditions in conditional statements evaluate to boolean values, either `true` or `false`, to determine which code path to follow.

### `if` Statement:

**Explanation:**

The "If Statement" and "Else If Statement" in JavaScript are fundamental control flow statements used for conditional execution of code. These statements enable you to define specific actions that should be taken when a given condition is evaluated as true. When the condition is false, you can also provide alternative code paths. The "Else If Statement" extends the capabilities of the "If Statement" by allowing you to check multiple conditions sequentially.

**Key Concepts:**

- **Conditional Execution:** Both the "If Statement" and "Else If Statement" are essential for executing code based on whether specified conditions are true or false.

- **Branching Logic:** These statements introduce branching logic into your code, enabling different code paths depending on the outcomes of the conditions.

- **Single Condition (If Statement):** The "If Statement" typically checks a single condition, and if that condition is met, the code block inside the `if` statement is executed.

- **Multiple Conditions (Else If Statement):** The "Else If Statement" allows you to test a series of conditions sequentially. It executes the code block associated with the first true condition, providing a structured way to handle complex decision-making.

**Syntax:**

**if Statement:**

```javascript
if (condition) {
    // Code to execute if the condition is true
}
```

**Example:**

- [Example: if Statement](./assets/examples/conditionalStatment/ifStatment.js)

**If else Statement:**

```javascript
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

**Example:**

- [Example: If else statment](./assets/examples/conditionalStatment/IfElseStatment.js)

**Else If Statement:**

```javascript
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if none of the conditions are true
}
```

**Example:**

- [Example: Else If statment](./assets/examples/conditionalStatment/elseIfStatment.js)

### `Switch` Statement

**Explanation:**

The "Switch Statement" in JavaScript is a versatile control flow statement used to select and execute a block of code from a list of multiple cases based on the value of a given expression. It provides a way to streamline decision-making when there are multiple possible outcomes.

**Key Concepts:**

- **Multi-Case Selection:** The "Switch Statement" allows for the evaluation of multiple possible values or cases. The program flow will depend on which case matches the expression's value.

- **Faster Execution:** Compared to multiple `if` conditions, a `switch` statement can be more efficient when checking against a large number of cases.

- **Fall-Through:** Each `case` block typically ends with a `break` statement to prevent fall-through. Fall-through occurs when one case block's code is executed, and execution continues into the following cases without a `break`.

**Syntax:**

```javascript
switch (expression) {
    case value1:
        // Code to execute if expression equals value1
        break;
    case value2:
        // Code to execute if expression equals value2
        break;
    // ... (more cases)
    default:
        // Code to execute if none of the cases match
}
```

- `expression`: The value or expression that is evaluated in each `case`.

- `case valueX`: Represents a specific case with a value to be compared to the `expression`.

- `break`: The `break` statement is used to exit the `switch` statement when a match is found.

- `default`: This is the block of code to execute when none of the `case` values match the `expression`. It is optional.

**Example:**

- [Example: Switch Statement](./assets/examples/conditionalStatment/switch.js)

### Ternary Operator

**Explanation:**

The Ternary Operator in JavaScript provides a concise way to express conditional logic. It selects between two values or expressions based on the evaluation of a condition.

**Key Concepts:**

- Conditional Selection

- Conciseness

**Syntax:**

```javascript
const result = condition ? expression_if_true : expression_if_false;
```

**Example:**

- [Example: Ternary Operator](./assets/examples/conditionalStatment/ternaryOperator.js)

### Tasks: Conditional Statment

- [Tasks: Conditional Statment](./assets/tasks/conditionalStatements.js)

## Exception Handling

- [Utilizing Error Object](#utilizing-error-object)
- [Throw Statement](#throw-statement)
- [try/catch/finally](#try-catch-finally)

**Explanation:**

Exception handling allows you to catch and handle errors that occur during the execution of your program.

### Throw Statement

**Explanation:**

The `throw` statement allows you to create custom errors and throw them.

**Syntax:**

```js
throw expression;
```

**Example:**

```js
let age = 15;

try {
  if (age < 18) {
    throw new Error("Invalid age. Must be at least 18 years old.");
  }
  console.log("Age is valid.");
} catch (error) {
  console.log("An error occurred:", error.message);
}
```

### Utilizing Error Object

**Explanation:**

JavaScript provides an `Error` object that represents runtime errors.

**Syntax**

```js
try {
  // code that may throw an error
} catch (error) {
  // code to handle the error
}
```

**Example:**

```js
try {
  const result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("An error occurred:", error.message);
}
```

### try/catch/finally

**Explanation:**

The `try/catch/finally` statement allows you to handle errors and execute cleanup code regardless of whether an error occurred or not.

**Syntax:**

```js
try {
  // code that may throw an error
} catch (error) {
  // code to handle the error
} finally {
  // code to be executed regardless of errors
}
```

**Example:**

```js
try {
  // code that may throw an error
  console.log("Executing try block.");
  throw new Error("Error occurred.");
} catch (error) {
  // code to handle the error
  console.log("An error occurred:", error.message);
} finally {
  // code to be executed regardless of errors
  console.log("Executing finally block.");
}
```

# Functions

**Explanation:**

# Data Structures

## Structured Data

### JSON

- **JSON (JavaScript Object Notation):**
JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used for representing structured data in web applications. JSON data consists of key-value pairs and can be represented as a nested hierarchy.

```js
// JSON data representing a person
const person = {
  "name": "John Doe",
  "age": 25,
  "email": "johndoe@example.com"
};
```
## Indexed Collections

### Arrays

1. **Arrays:**
An array is a data structure that stores a collection of elements in a specific order. Each element in the array is identified by its index, starting from 0. Arrays in JavaScript can hold elements of any data type.

```js
// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Accessing array elements
console.log(numbers[0]); // Output: 1

// Modifying array elements
numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]
```

2. **Strings:** 
Strings are sequences of characters. While strings are not technically an indexed collection, they can be accessed using a similar indexing mechanism. Each character in a string has an index starting from 0.

```js
const message = 'Hello, world!';
console.log(message[7]); // Output: w
```
#### Map()

The `map()` method creates a new array by applying a provided function to each element of the calling array.

**Syntax:**

```js
array.map(callback(element, index, array), thisArg)
```

- `callback`: A function to be called for each element in the array.
- `element`: The current element being processed in the array.
- `index` (optional): The index of the current element being processed.
- `array` (optional): The array `map()` was called upon.
- `thisArg` (optional): Value to use as `this` when executing the callback.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];

const multiplied = numbers.map((num) => num * 2);

console.log(multiplied);
```

**Output:**

```
[2, 4, 6, 8, 10]
```

#### Filter()

The `filter()` method creates a new array with all elements that pass the provided function's test.

**Syntax:**

```js
array.filter(callback(element, index, array), thisArg)
```

- `callback`: A function to be called for each element in the array.
- `element`: The current element being processed in the array.
- `index` (optional): The index of the current element being processed.
- `array` (optional): The array `filter()` was called upon.
- `thisArg` (optional): Value to use as `this` when executing the callback.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
```

**Output:**

```
[2, 4]
```

#### forEach()

The `forEach()` method executes a provided function once for each array element.

**Syntax:**

```js
array.forEach(callback(element, index, array), thisArg)
```
- `callback`: A function to be called for each element in the array.
- `element`: The current element being processed in the array.
- `index` (optional): The index of the current element being processed.
- `array` (optional): The array `forEach()` was called upon.
- `thisArg` (optional): Value to use as `this` when executing the callback.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num);
});
```

**Output:**

```
1
2
3
4
5
```

#### find()

**Description:** The `Array.prototype.find()` method returns the first element in the array that satisfies the provided testing function. It searches through the array and stops as soon as it finds an element that passes the test.

**Syntax:**

```js
array.find(callback(element[, index[, array]])[, thisArg])
```
- `callback` (required): A function that accepts up to three arguments and returns a Boolean value. It is called for each element in the array.
- `element`: The current element being processed in the array.
- `index` (optional): The index of the current element being processed.
- `array` (optional): The array on which `find()` was called.
- `thisArg` (optional): A value to use as `this` when executing the callback function.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.find((number) => number % 2 === 0);

console.log(evenNumber); // Output: 2
```

#### findIndex()

**Description:** The `Array.prototype.findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. It searches through the array and stops as soon as it finds an element that passes the test.

**Syntax:**

```js
array.findIndex(callback(element[, index[, array]])[, thisArg])
```

- `callback` (required): A function that accepts up to three arguments and returns a Boolean value. It is called for each element in the array.
- `element`: The current element being processed in the array.
- `index` (optional): The index of the current element being processed.
- `array` (optional): The array on which `findIndex()` was called.
- `thisArg` (optional): A value to use as `this` when executing the callback function.

The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. If no element is found, `-1` is returned.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];

const index = numbers.findIndex((number) => number > 3);

console.log(index); // Output: 3
```

**Output:**

The output of the above example is `3` because the number `4` is the first element in the numbers array that is greater than `3`, and its index is `3`.

#### includes()

**Description:** The `Array.prototype.includes()` method determines whether an array includes a certain element, returning `true` or `false` as appropriate.

**Syntax:**

```js
array.includes(searchElement[, fromIndex])
```
- `searchElement` (required): The element to search for within the array.
- `fromIndex` (optional): The index at which to start searching for the `searchElement`. If omitted, the default is `0`.

The `includes()` method returns a Boolean value indicating whether the `searchElement` is found in the array (`true`) or not (`false`).

**Example:**

```js
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('grape')); // Output: false
```

#### sort()

**Description:** The `sort()` method is used to sort the elements of an array in place and returns the sorted array.

**Syntax:**

```js
array.sort([compareFunction])
```

- `array`: The array to be sorted.
- `compareFunction` (optional): An optional function that defines the sort order. If omitted, the array elements are converted to strings and sorted based on their UTF-16 code unit values.

**Example:**

```js
const fruits = ['apple', 'orange', 'banana', 'grape'];

// Sorting without a compare function (default sort behavior)
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']

// Sorting with a custom compare function (sorting by string length)
fruits.sort((a, b) => a.length - b.length);
console.log(fruits); // Output: ['apple', 'grape', 'banana', 'orange']
```

#### Reduce()

**Description:** The `reduce()` method is used to reduce an array to a single value by applying a function to each element of the array.

**Syntax:**

```js
array.reduce(callback[, initialValue])
```

- `callback`: The function to execute on each element of the array. It takes four arguments:
- `accumulator`: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback or the initialValue, if supplied.
- `currentValue`: The current element being processed in the array.
- `currentIndex`: (Optional) The index of the current element being processed in the array.
- `array`: (Optional) The array reduce was called upon.
- `initialValue`: (Optional) The initial value of the accumulator. If not provided, the first element of the array will be used as the initial value, and the callback will start from the second element.

**Example:**

```js
// Sum all the elements in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the product of all elements in an array
const numbers2 = [2, 3, 4, 5];
const product = numbers2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
```

**Output:**

```
In the first example, the output will be 15, which is the sum of all elements in the `numbers` array (1 + 2 + 3 + 4 + 5).
In the second example, the output will be 120, which is the product of all elements in the `numbers2` array (2 * 3 * 4 * 5).
```

### Keyed Collections

#### Map

The `Map` data structure in JavaScript is a built-in collection that allows you to store key-value pairs. It provides an easy way to associate values with unique keys and offers various methods to manipulate and retrieve data from the map.

**Syntax:**

```js
let map = new Map();
```

**Example:**

```js
let map = new Map();

map.set('name', 'John');
map.set('age', 30);
map.set('gender', 'male');

console.log(map.get('name'));
console.log(map.size);
```

**Output:**

```
John
3
```

#### Objects

In JavaScript, objects are a fundamental data type used to store collections of key-value pairs. They allow you to define custom data structures and store related data together. Objects can contain properties and methods that define their behavior.

**Syntax:**

```js
let obj = {
  key1: value1,
  key2: value2,
  // ...
};
```
**Example:**

```js
let person = {
  name: 'John',
  age: 30,
  gender: 'male'
};

console.log(person.name);
console.log(person.age);
```

**Output:**

```
John
30
```

#### Resources

- [(Article)Data Structures in JavaScript – With Code Examples](https://www.freecodecamp.org/news/data-structures-in-javascript-with-examples/#what-is-a-data-structure)
- [(Video) Intro to Recursion](https://www.youtube.com/watch?v=yBWlPte6FhA)
- [(Video) JavaScript array.map()](https://www.youtube.com/watch?v=KZU4V38Cwfc)

# DOM (Document Object Model)

## Introduction to DOM

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of the document as a tree-like model, where each element in the document is a node in the tree. The DOM allows you to interact with and manipulate the elements and content of a web page dynamically using JavaScript.

## DOM Manipulation

DOM manipulation refers to the process of modifying the structure, content, or appearance of a web page using JavaScript. It allows you to add, remove, or modify elements and attributes in the DOM tree. DOM manipulation can be achieved using various methods and properties provided by the DOM API.

*Selecting by ID*

**Syntax:**

```js
const element = document.getElementById('elementId');
```

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <div id="elementId">
        This is the element with the ID 'elementId'.
    </div>
    <button id="clickButton" onclick="changeText()">Click me</button>

    <!-- Link to the script.js file -->
    <script src="script.js"></script>
</body>
</html>
```

```js
// script.js

function changeText() {
    const element = document.getElementById('elementId');
    element.innerText = 'Text changed! Now you clicked the button.';
}
```

*Selecting by Class*

**Syntax:**

```js
const elements = document.getElementsByClassName('className');
```

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <div class="className">
        This is the first element with the class 'className'.
    </div>
    <div class="className">
        This is the second element with the class 'className'.
    </div>
    <div class="className">
        This is the third element with the class 'className'.
    </div>

    <!-- Link to the script.js file -->
    <script src="script.js"></script>
</body>
</html>
```

```js
// script.js

const elements = document.getElementsByClassName('className');

// Simple example: Changing the text of each element with the class 'className'
for (let i = 0; i < elements.length; i++) {
    elements[i].innerText = `Element ${i + 1} has been selected.`
};
```

*Selecting by Tag Name*

**Syntax:**

```js
const elements = document.getElementsByTagName('tagName');
```

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <p>This is a paragraph element.</p>
    <div>This is a div element.</div>
    <span>This is a span element.</span>
    <p>This is another paragraph element.</p>

    <!-- Link to the script.js file -->
    <script src="script.js"></script>
</body>
</html>
```

```js
// script.js

const paragraphs = document.getElementsByTagName('p');

// Simple example: Changing the text of each paragraph element
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerText = `Paragraph ${i + 1} has been selected.`;
}
```

*Selecting by CSS Selector*

**Syntax (querySelector):**

```js
const element = document.querySelector('selector');
```

**Example (querySelector):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <p id="myParagraph">This is a paragraph element with the ID 'myParagraph'.</p>
    <div>This is a div element.</div>
    <span>This is a span element.</span>
    <p>This is another paragraph element.</p>

    <!-- Link to the script.js file -->
    <script src="script.js"></script>
</body>
</html>
```

```js
// script.js

const paragraphElement = document.querySelector('p');

// Simple example: Changing the text of the first paragraph element
if (paragraphElement) {
    paragraphElement.innerText = "This paragraph's text has been changed!";
}
```

**Syntax (querySelectorAll):**

```js
const elements = document.querySelectorAll('selector');
```

**Example (querySelectorAll):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <p class="selected">This is a paragraph element with the class 'selected'.</p>
    <div>This is a div element.</div>
    <span class="selected">This is a span element with the class 'selected'.</span>
    <p>This is another paragraph element.</p>

    <!-- Link to the script.js file -->
    <script src="script.js"></script>
</body>
</html>
```

```js
// script.js

const selectedElements = document.querySelectorAll('.selected');

// Simple example: Changing the text color of each element with the class 'selected'
selectedElements.forEach(element => {
    element.style.color = 'blue';
});
```

## DOM Traversal

DOM manipulation refers to the process of modifying the structure, content, or appearance of a web page using JavaScript. It allows you to add, remove, or modify elements and attributes in the DOM tree. DOM manipulation can be achieved using various methods and properties provided by the DOM API.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Traversal Example</title>
</head>
<body>
    <ul>
        <li onclick="changeBackgroundColor(this)">
            <span>Item 1</span>
        </li>
        <li onclick="changeBackgroundColor(this)">
            <span>Item 2</span>
        </li>
        <li onclick="changeBackgroundColor(this)">
            <span>Item 3</span>
        </li>
    </ul>
    <!-- Link to the script.js file -->
    <script src="script.js"></script>
</body>
</html>
```

```js
// script.js

function changeBackgroundColor(element) {
    // Change the background color of the clicked <li> element
    element.style.backgroundColor = 'yellow';
}
```

## DOM Events

DOM events are actions or occurrences that happen in the browser, such as a button click, mouse movement, or keypress. By handling events, you can respond to user interactions and perform specific actions. The DOM provides a set of event types and methods to attach event handlers to elements.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Button Click Event Example</title>
</head>
<body>
    <button id="myButton">Click me</button>

    <!-- Link to the script.js file -->
    <script src="script.js"></script>
</body>
</html>
```

```js
// Example of handling a button click event
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
});
```

## Code example

- [How the addEventListener](https://codesandbox.io/s/addeventlistener-l42xyc?file=/src/index.js)

## DOM Styling

DOM styling allows you to manipulate the appearance of elements on a web page. You can modify CSS properties of elements to change their size, color, position, and more. The DOM provides properties and methods to access and modify the styles of elements.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Changing Element Background Color Example</title>
    <style>
        /* Adding some styles to the element to make it visible */
        .conatiner {
            width: 200px;
            height: 100px;
            border: 1px solid black;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div id="myElement" class=conatiner>This is my element.</div>

    <!-- Link to the script.js file -->
    <script src="script.js"></script>
</body>
</html>

```

```js
// Example of changing the background color of an element
const element = document.getElementById('myElement');
element.style.backgroundColor = 'red';
```

## Resources

- [(Video) Learn DOM Manipulation](https://www.youtube.com/watch?v=y17RuWkWdn8)

# Strict Mode

When strict mode is enabled, certain actions that wouldotherwise result in silent errors or different behavior areinstead treated as syntax errors or throw exceptions. Strictmode helps you write cleaner and more reliable JavaScriptcode by catching common mistakes and preventing someproblematic features from being used.

1. Enable strict mode for an entire script:

```js
"use strict";

// Your code here
```
Placing the string "use strict"; at the beginning of your script (before any other statements) enables strict mode for the entire file.

2. Enable strict mode for a specific function:

```js
function myFunction() {
  "use strict";

  // Your code here
}
```
Adding the string "use strict"; as the first statement within a function enables strict mode for that function only.

**Example**

```js
// Regular mode
x = 10;  // This creates a global variable silently

// Strict mode
"use strict";
y = 20;  // Throws an error: ReferenceError: y is not defined
```

Strict mode provides several benefits such as preventing accidental global variable creation, disallowing duplicate parameter names, making assignments to non-writable properties throw an error, and more.

# Asynchronous JavaScript

## setTimeout

**Description**: The `setTimeout` function is used to schedule the execution of a function after a specified delay (in milliseconds). It allows for the execution of code after a certain amount of time has passed.

**Syntax:**

```js
setTimeout(function, delay, param1, param2, ...);
```
`function`: The function to be executed.
`delay`: The time (in milliseconds) to wait before executing the function.
`param1, param2, ...`: Optional parameters to be passed to the function.

**Example:**

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

setTimeout(greet, 2000, "John");
```

## setInterval

**Description:** The `setInterval` function is used to repeatedly execute a function at a specified interval (in milliseconds). It allows for the execution of code at regular intervals until stopped.

**Syntax:**

```js
setInterval(function, delay, param1, param2, ...);
```

`function:` The function to be executed.
`delay:` The time (in milliseconds) between each execution of the function.
`param1, param2, ...`: Optional parameters to be passed to the function.

**Example:**

```js
function countDown(seconds) {
  console.log(seconds);
  seconds--;

  if (seconds < 0) {
    clearInterval(intervalId);
    console.log("Countdown complete!");
  }
}

var intervalId = setInterval(countDown, 1000, 5);
```

**Output:**

```js
5
4
3
2
1
Countdown complete!
```

## Callbacks

**Description:** Callbacks are functions that are passed as arguments to other functions and are executed once a certain task is completed. They are commonly used in asynchronous programming to handle results or perform actions after an operation has finished.

**Syntax:**

```js
function asyncFunction(param1, param2, ..., callback) {
  // Perform asynchronous operation
  // Once completed, invoke the callback function
  callback(result);
}
```

`param1, param2, ...`: Parameters required for the asynchronous operation.
`callback`: A function to be called once the operation is completed, usually with the result as an argument.

**Example:**

```js
function fetchData(url, callback) {
  // Simulating asynchronous data fetching
  setTimeout(function () {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Received data:", data);
}

fetchData("https://api.example.com/data", processData);
```

**Output:**

```js
After 2 seconds:
Received data: { id: 1, name: 'John Doe' }
```

### Callback Hell

**Description:** Callback hell refers to the situation when multiple asynchronous operations are nested within each other, leading to deeply nested callbacks. This can make the code harder to read and maintain. To mitigate this issue, other asynchronous patterns like promises and async/await are often used.

```js
asyncOperation1(function (result1) {
  asyncOperation2(result1, function (result2) {
    asyncOperation3(result2, function (result3) {
      // More nested callbacks...
    });
  });
});
```

## Promises

Description: Promises are a more structured way to handle asynchronous operations in JavaScript. A promise represents the eventual completion (or failure) of an asynchronous operation and allows you to attach callbacks for handling the results.

**Syntax:**

```js
new Promise(function (resolve, reject) {
  // Perform asynchronous operation
  // If successful, call resolve(result)
  // If an error occurs, call reject(error)
}).then(function (result) {
  // Handle the successful result
}).catch(function (error) {
  // Handle the error
});
```

**Example:**

```js
function fetchData(url) {
  return new Promise(function (resolve, reject) {
    // Simulating asynchronous data fetching
    setTimeout(function () {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 2000);
  });
}

fetchData("https://api.example.com/data")
  .then(function (data) {
    console.log("Received data:", data);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
```

**Output:**

```js
After 2 seconds:
Received data: { id: 1, name: 'John Doe' }
```

### async / await

**Description:** The `async` and `await` keywords provide a more concise and synchronous-looking syntax for working with promises. `async` is used to define an asynchronous function, and `await` is used to pause the execution of the function until a promise is resolved or rejected.

**Syntax:**

```js
async function functionName() {
  try {
    // Asynchronous operations with await
    const result = await promise;
    // Handle the result
  } catch (error) {
    // Handle the error
  }
}
```

**Example:**

```js
function fetchData(url) {
  return new Promise(function (resolve, reject) {
    // Simulating asynchronous data fetching
    setTimeout(function () {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 2000);
  });
}

async function processData() {
  try {
    const data = await fetchData("https://api.example.com/data");
    console.log("Received data:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

processData();
```

**Output:**

```js
After 2 seconds:
Received data: { id: 1, name: 'John Doe' }
```
