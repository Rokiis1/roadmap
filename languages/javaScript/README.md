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
  - [for Statement](#for-statement)
  - [do...while Statement](#do-while-statement)
  - [while Statement](#while-statement)
  - [for...in Statement](#for-in-statement)
  - [for...of Statement](#for-of-statement)
  - [break / continue - labeled Statement](#break-continue-labeled-statement)
- [Control Flow and Exception Handling](#control-flow-and-exception-handling)
  - [Conditional Statements](#conditional-statements)
    - [if...else Statement](#ifelse-statement)
    - [Switch Statement](#switch-statement)
  - [Exception Handling](#exception-handling)
    - [Utilizing Error Object](#utilizing-error-object)
    - [Throw Statement](#throw-statement)
    - [try/catch/finally](#try-catch-finally)
- [Functions](#functions)
  - [Defining and Calling Functions](#defining-and-calling-functions)
  - [Function Parameters](#function-parameters)
    - [Default Parameters](#default-parameters)
    - [Rest Parameters](#rest-parameters)
  - [Arrow Functions](#arrow-functions)
  - [Built-in Functions](#built-in-functions)
- [Data Structures](#data-structures)
  - [Structured Data](#structured-data)
    - [JSON](#json)
  - [Indexed Collections](#indexed-collections)
    - [Arrays](#arrays)
      - [Map()](#map)
      - [Filter()](#filter)
      - [Reduce()](#reduce)
      - [ForEach()](#forEach)
      - [Push()](#push)
      - [Pop()](#pop)
      - [Shift()](#shift)
      - [Unshift()](#unshift)
      - [Splice()](#splice)
      - [Slice()](#slice)
      - [Concat()](#concat)
    - [Keyed Collections](#keyed-collections)
      - [Map](#map)
      - [Objects](#objects)
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
- [Strict Mode](#strict-mode)
- [Asynchronous JavaScript](#asynchronous-javascript)
  - [setTimeout](#settimeout)
  - [setInterval](#setinterval)
  - [Callbacks](#callbacks)
    - [Callback Hell](#callback-hell)
  - [Promises](#promises)
    - [async / await](#async-await)

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

- [(Article) JavaScript documentation](https://www.w3schools.com/js/default.asp)
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
  console.log(y); // ReferenceError: y is not defined
  console.log(z); // ReferenceError: z is not defined
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

- [Assignment Operators](../../tasks/vanilla%20JavaScript/Expressions%20and%20Operators/assignmentOperators.js)

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

- [Comparison Operators](../../tasks/vanilla%20JavaScript/Expressions%20and%20Operators/comparisonOperators.js)


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

- [Logical Operators](../../tasks/vanilla%20JavaScript/Expressions%20and%20Operators/comparisonOperators.js)


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
console.log(numFloat); // Output: 42.0
```
 The integer value `42` is implicitly cast to a float by JavaScript without any explicit syntax. The result is the floating-point number `42.0`.

## Resources

- [(Article)JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)


# Loops and Iterations

## for Statement

The `for` statement allows you to execute a block of code repeatedly for a specific number of times. It consists of three parts: initialization, condition, and increment/decrement.

```js
for (initialization; condition; increment/decrement) {
  // Code to be executed
}
```

**Example:**

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**Output:**

```js
0
1
2
3
4
```

## do...while Statement

The `do...while` statement executes a block of code once, and then repeats the execution as long as a specified condition is true.

**Syntax:**

```js
do {
  // Code to be executed
} while (condition);
```

**Example:**

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
**Output:**

```js
0
1
2
3
4
```

## while Statement

The `while` statement executes a block of code as long as a specified condition is true.

```js
while (condition) {
  // Code to be executed
}
```

**Example:**

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

**Output:**

```js
0
1
2
3
4
```
## for...in Statement

The `for...in` statement iterates over the enumerable properties of an object. It can be used to loop through the keys of an object.

```js
for (variable in object) {
  // Code to be executed
}
```

**Example:**

```js
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}
```

**Output:**

```js
name: John
age: 30
city: New York
```
## for...of Statement

The `for...of` statement iterates over iterable objects such as arrays, strings, and more. It can be used to loop through the values of an iterable.

```js
for (variable of iterable) {
  // Code to be executed
}
```

**Example**

```
const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
  console.log(fruit);
}
```
**Output:**

```
apple
banana
orange
```

## break / continue - labeled Statement

The `break` statement is used to terminate a loop prematurely, while the `continue` statement skips the current iteration and moves to the next one. Both statements can be labeled to specify which loop to break or continue when nested loops are present.

**Example:**

```js
outerLoop: for (let i = 0; i < 3; i++) {
  console.log('Outer loop:', i);
  
  innerLoop: for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue outerLoop;
    }
    console.log('Inner loop:', j);
  }
}
```

**Output:**

```js
Outer loop: 0
Inner loop: 0
Outer loop: 1
Outer loop: 2
Inner loop: 0
Outer loop: 3
Inner loop: 0
```

## Resources

- [(Article)Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

# Control Flow and Exception Handling

## Conditional Statements

Conditional statements in JavaScript allow you to make decisions and execute different blocks of code based on certain conditions.

### if...else Statement

The `if...else` statement is used to perform different actions based on different conditions.

**Syntax:**

```js
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}
```
**Example:**

```js
const age = 18;

if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote yet.");
}
```

**Output:**

```js
You are eligible to vote!
```

### Switch Statement

The `switch` statement is used to perform different actions based on different cases.

**Syntax:**

```js
switch (expression) {
  case value1:
    // code to be executed if expression matches value1
    break;
  case value2:
    // code to be executed if expression matches value2
    break;
  default:
    // code to be executed if expression doesn't match any case
    break;
}
```

**Example:**

```js
const day = "Monday";
let dayType;

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    dayType = "Weekday";
    break;
  case "Saturday":
  case "Sunday":
    dayType = "Weekend";
    break;
  default:
    dayType = "Invalid day";
    break;
}

console.log(`Today is a ${dayType}.`);
```

**Output:**

```js
Today is a Weekday.
```

## Exception Handling

Exception handling allows you to catch and handle errors that occur during the execution of your program.

### Utilizing Error Object

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

**Output:**

```js
An error occurred: Division by zero
```
### Throw Statement

The `throw` statement allows you to create custom errors and throw them.

**Syntax:**

```js
throw expression;
```

**Example:**

```js
function validateAge(age) {
  if (age < 18) {
    throw new Error("Invalid age. Must be at least 18 years old.");
  }
  // code to be executed if age is valid
}

try {
  validateAge(15);
  console.log("Age is valid.");
} catch (error) {
  console.log("An error occurred:", error.message);
}
```

**Output:**

```js
An error occurred: Invalid age. Must be at least 18 years old.
```

### try/catch/finally

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

**Output:**

```js
Executing try block.
An error occurred: Error occurred.
Executing finally block.
```
## Resources

- [(Article)Control flow](https://www.w3schools.com/js/js_if_else.asp)
- [(Article)Conditional statements](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [(Article)How to Throw Exceptions in JavaScript](https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript/)
- [(Video)JavaScript error handling](https://www.youtube.com/watch?v=Z2l3cQ7bvBA)

# Functions

## Defining and Calling Functions

**Syntax:**

```js
function functionName(parameter1, parameter2) {
  // Function body
  // Code to be executed
  return result;
}
```

**Example:**

```js
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));
```

**Output:**

```js
Hello, Alice!
```

## Function Parameters

In JavaScript, function parameters are the variables that are declared as part of a function's definition. They represent the values that can be passed into the function when it is called. Parameters allow you to provide input to a function and make it more flexible and reusable.

### Default Parameters

**Syntax:**

```js
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
  // Function body
  // Code to be executed
  return result;
}
```

**Example:**

```js
function greet(name = "stranger") {
  return "Hello, " + name + "!";
}

console.log(greet());
console.log(greet("Alice"));
```

**Output:**

```js
Hello, stranger!
Hello, Alice!
```

### Rest Parameters

**Syntax:**

```js
function functionName(parameter1, parameter2, ...restParameters) {
  // Function body
  // Code to be executed
  return result;
}
```

**Example:**

```js
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
```

**Output:**

```js
15
```

## Arrow Functions

**Syntax:**

```js
const functionName = (parameter1, parameter2) => {
  // Function body
  // Code to be executed
  return result;
};
```

**Example:**

```js
const add = (a, b) => a + b;

console.log(add(3, 5));
```

**Output:**

```
8
```

## Resources

- [(Article)Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [(Video)How To Create/Use Functions - JavaScript Essentials](https://www.youtube.com/watch?v=FOD408a0EzU)

## Built-in Functions

JavaScript provides several built-in functions that can be directly used without defining them. Examples include `console.log()`, `Math.random()`, `parseInt()`, etc.

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

#### Reduce()

The `reduce()` method applies a function to reduce the array to a single value. It executes a provided function for each value of the array.

**Syntax:**

```js
array.reduce(callback(accumulator, currentValue, index, array), initialValue)
```

`callback`: A function to be called for each element in the array.
`accumulator`: The accumulator accumulates the callback's return values.
`currentValue`: The current element being processed in the array.
`index` (optional): The index of the current element being processed.
`array` (optional): The array `reduce()` was called upon.
`initialValue` (optional): A value to be used as the first argument to the first call of the callback.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum);
```

**Output:**

```
15
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

#### Push()

The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

**Syntax:**

```js
array.push(element1, element2, ..., elementN)
```

- `element1`, `element2`, ..., `elementN`: The elements to add to the end of the array.

**Example:**

```js
const fruits = ['apple', 'banana'];

fruits.push('orange');

console.log(fruits);
```

**Output:**

```js
['apple', 'banana', 'orange']
```

#### Pop()

The `pop()` method removes the last element from an array and returns that element.

**Syntax:**

```js
array.pop()
```

**Example:**

```js
const fruits = ['apple', 'banana', 'orange'];

const removedFruit = fruits.pop();

console.log(removedFruit);
console.log(fruits);
```

**Output:**

```
'orange'
['apple', 'banana']
```

#### Shift()

The `shift()` method removes the first element from an array and returns that element

**Syntax:**

```js
array.shift()
```

**Example:**

```js
const fruits = ['apple', 'banana', 'orange'];

const removedFruit = fruits.shift();

console.log(removedFruit);
console.log(fruits);
```

**Output:**

```
'apple'
['banana', 'orange']
```

#### Unshift()

The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

**Syntax:**

```js
array.unshift(element1, element2, ..., elementN)
```

- `element1`, `element2`, ..., `elementN`: The elements to add to the beginning of the array.

**Example:**

```js
const fruits = ['apple', 'banana'];

fruits.unshift('orange');

console.log(fruits);
```

**Output:**

```
['orange', 'apple', 'banana']
```

#### Splice()

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements.

**Syntax:**

```js
array.splice(start, deleteCount, item1, item2, ..., itemN)
```
- `start`: Index at which to start changing the array.
- `deleteCount` (optional): An integer indicating the number of elements in the array to remove from `start`.
- `item1`, `item2`, ..., `itemN` (optional): The elements to add to the array, beginning from `start`.

**Example:**

```js
const fruits = ['apple', 'banana', 'orange'];

const removedFruits = fruits.splice(1, 2, 'grape', 'kiwi');

console.log(removedFruits);
console.log(fruits);
```

**Output:**

```js
['banana', 'orange']
['apple', 'grape', 'kiwi']
```

#### slice()

The `slice()` method returns a shallow copy of a portion of an array into a new array object.

**Syntax:**

```js
array.slice(start, end)
```
- `start` (optional): Zero-based index at which to begin extraction.
- `end` (optional): Zero-based index at which to end extraction (exclusive).

**Example:**

```js
const fruits = ['apple', 'banana', 'orange'];

const slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits);
```

**Output:**

```
['banana', 'orange']
```

#### Concat()

The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.

**Syntax:**

```js
array.concat(array1, array2, ..., arrayN)
```

- `array1`, `array2`, ..., `arrayN` (optional): Arrays and/or values to concatenate into a new array.

**Example:**

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = array1.concat(array2);

console.log(newArray);
```

**Output:**

```
[1, 2, 3, 4, 5, 6]
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

```js
const myElement = document.getElementById('myElement');
```

*Selecting by Class*

**Syntax:**

```js
const elements = document.getElementsByClassName('className');
```

**Example:**

```js
const myElements = document.getElementsByClassName('myClass');
```

*Selecting by Tag Name*

**Syntax:**

```js
const elements = document.getElementsByTagName('tagName');
```

**Example:**

```js
const myElements = document.getElementsByTagName('p');
```

*Selecting by CSS Selector*

**Syntax (querySelector):**

```js
const element = document.querySelector('selector');
```

**Syntax (querySelectorAll):**

```js
const elements = document.querySelectorAll('selector');
```

**Example (querySelector):**

```js
const myElement = document.querySelector('.myClass');
```

**Example (querySelectorAll):**

```js
const myElements = document.querySelectorAll('p.myClass');
```

## DOM Traversal

DOM manipulation refers to the process of modifying the structure, content, or appearance of a web page using JavaScript. It allows you to add, remove, or modify elements and attributes in the DOM tree. DOM manipulation can be achieved using various methods and properties provided by the DOM API.

**Example:**

```js
// Example of traversing the DOM to access child elements
const parentElement = document.getElementById('parent');
const childElements = parentElement.children;
for (let i = 0; i < childElements.length; i++) {
  console.log(childElements[i].textContent);
}
```
**Output:**

```
Child 1
Child 2
Child 3
```

## DOM Events

DOM events are actions or occurrences that happen in the browser, such as a button click, mouse movement, or keypress. By handling events, you can respond to user interactions and perform specific actions. The DOM provides a set of event types and methods to attach event handlers to elements.

**Example:**

```js
// Example of handling a button click event
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
});
```

**Output (after clicking the button):**

```
Button clicked!
```

## DOM Styling

DOM styling allows you to manipulate the appearance of elements on a web page. You can modify CSS properties of elements to change their size, color, position, and more. The DOM provides properties and methods to access and modify the styles of elements.

**Example:**

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
