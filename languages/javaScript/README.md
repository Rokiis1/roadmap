# Table of Contents

- [Introduction to JavaScript](#introduction-to-javascript)
- [JavaScript Fundamentals](#javascript-fundamentals)
- [JavaScript Operators](#javascript-operators)
- [Control Flow](#control-flow)
- [JavaScript functions](#javascript-functions)


# Introduction to JavaScript

- [What is JavaScript?](#what-is-javascript)
- [History of JavaScript](#history-of-javascript)
- [JavaScript Versions](#javascript-versions)
- [How to run JavaScript?](#how-to-run-javascript)

## What is JavaScript?

**Explanation:**

JavaScript is a programming language initially designed to interact with elements of web pages. In web browsers, JavaScript consists of three main parts:

- ECMAScript provides the core functionality.

- The Document Object Model (DOM) provides interfaces for interacting with elements on web pages

- The Browser Object Model (BOM) provides the browser API for interacting with the web browser.

JavaScript allows you to add interactivity to a web page. Typically, you use JavaScript with HTML and CSS to enhance a web page’s functionality, such as validating forms, creating interactive maps, and displaying animated charts.

When a web page is loaded, i.e., after HTML and CSS have been downloaded, the JavaScript engine in the web browser executes the JavaScript code. The JavaScript code then modifies the HTML and CSS to update the user interface dynamically.

The JavaScript engine is a program that executes JavaScript code. In the beginning, JavaScript engines were implemented as interpreters.

However, modern JavaScript engines are typically implemented as just-in-time compilers that compile JavaScript code to bytecode for improved performance.

*Client-side vs. Server-side JavaScript*

When JavaScript is used on a web page, it is executed in web browsers. In this case, JavaScript works as a client-side language.

JavaScript can run on both web browsers and servers. A popular JavaScript server-side environment is **Node.js**. Unlike client-side JavaScript, server-side JavaScript executes on the server and allows you to access databases, file systems, etc.

## History of JavaScript

In 1995, JavaScript was created by a Netscape developer named **Brendan Eich**. First, its name was Mocha. And then, its name was changed to LiveScript.

Netscape decided to change LiveScript to JavaScript to leverage Java’s fame, which was popular. The decision was made just before Netscape released its web browser product Netscape Navigator 2. As a result, JavaScript entered version 1.0.

Netscape released JavaScript 1.1 in Netscape Navigator 3. In the meantime, Microsoft introduced a web browser product called Internet Explorer 3 (IE 3), which competed with Netscape. However, IE came with its own JavaScript implementation called **JScript**. Microsoft used the name JScript to avoid possible license issues with Netscape.

Two different JavaScript versions were in the market:

JavaScript in Netscape Navigator

JScript in Internet Explorer.

JavaScript had no standards that governed its syntax and features. And the community decided that it was time to standardize the language.

In 1997, JavaScript 1.1 was submitted to the European Computer Manufacturers Association (ECMA) as a proposal. Technical Committee #39 (TC39) was assigned to standardize the language to make it a general-purpose, cross-platform, and vendor-neutral scripting language.

TC39 came up with ECMA-262, a standard for defining a new scripting language named ECMAScript (often pronounced Ek-ma-script).

After that, the International Organization for Standardization and International Electrotechnical Commissions (ISO/IEC) adopted ECMAScript (ISO/IEC-16262).

## JavaScript Versions

**Explanation:**

JavaScript is a widely-used programming language that is primarily used for creating dynamic and interactive web pages. Over the years, several versions of JavaScript have been released, each introducing new features, enhancements, and improvements. 

**Key Concepts:**

1. **ES1 (ECMAScript 1) - 1997:**
   - The first standardized version of JavaScript.
   - Introduced fundamental features like variables, loops, conditionals, and functions.

2. **ES2 (ECMAScript 2) - 1998:**
   - Minor updates and bug fixes.
   - Introduced features like try/catch for error handling.

3. **ES3 (ECMAScript 3) - 1999:**
   - Added features such as regular expressions, exceptions, and better string handling.
   - This version formed the basis for many browsers in the early 2000s.

4. **ES4 (ECMAScript 4) - Abandoned:**
   - Planned major update, but it was abandoned due to disagreements within the community.

5. **ES5 (ECMAScript 5) - 2009:**
   - Introduced strict mode, JSON support, and various utility functions.
   - Enhanced the language with better error handling and overall improvements.

6. **ES6/ES2015 (ECMAScript 2015):**
   - A significant update with many new features.
   - Introduced let and const for variable declaration, arrow functions, classes, promises, and template literals.
   - Enhanced syntax and provided more ways to write expressive and concise code.

7. **ES2016 (ES7):**
   - Relatively small update with features like the Array.prototype.includes method.

8. **ES2017 (ES8):**
   - Introduced features such as async/await for handling asynchronous code, Object.values/Object.entries, and shared memory and atomics for multi-agent programming.

9. **ES2018 (ES9):**
   - Introduces features like asynchronous iteration, rest/spread properties for objects, and more.

10. **ES2019 (ES10):**
    - Introduced Array.prototype.flat and Array.prototype.flatMap, Object.fromEntries, and optional catch binding.

11. **ES2020 (ES11):**
    - Introduced features like BigInt for working with arbitrary precision integers, globalThis, and dynamic import().

12. **ES2021 (ES12):**
    - Introduces features such as String.prototype.replaceAll, Promise.any, and the logical assignment operators (&&=, ||=).

13. **ES2022 (ES13):**
    - Some proposed features include `Array.prototype.groupBy`, `String.prototype.splitGraphemes`, and others. The final features may vary.

## How to run JavaScript?

**Explanation:**

Running JavaScript code can be done in various environments, depending on the context and the type of application you are developing.

**Key Concepts:**

1. **Web Browsers:**
   - **Browser Console:** All major web browsers (Chrome, Firefox, Safari, Edge) come with a built-in JavaScript console. You can access it by right-clicking on a web page, selecting "Inspect" (or "Inspect Element"), and navigating to the "Console" tab. Here, you can type and execute JavaScript code directly.

   - **HTML File:** You can include JavaScript code directly within an HTML file using the `<script>` tag. For example:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
       <title>My JavaScript Page</title>
     </head>
     <body>
       <script>
         // Your JavaScript code here
         console.log("Hello, World!");
       </script>
     </body>
     </html>
     ```
     Open the HTML file in a web browser to see the results.

2. **Node.js:**
   - Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser, typically on a server. You need to install Node.js on your machine. Once installed, you can create a JavaScript file (`app.js`) and run it using the command:
     ```
     node app.js
     ```

3. **Code Editors and IDEs:**
   - Many code editors and integrated development environments (IDEs) support JavaScript development. Examples include Visual Studio Code, Atom, Sublime Text, and others. You can create JavaScript files, write your code, and execute it directly within these environments.

4. **Online Editors:**
   - There are online platforms that allow you to write and run JavaScript code directly in your web browser. Examples include JSFiddle, CodePen, and Repl.it. These platforms provide an isolated environment for testing and experimenting with code.

5. **Command Line (Using REPL):**
   - Some systems come with a JavaScript REPL (Read-Eval-Print Loop) that allows you to execute JavaScript code interactively from the command line. For example, you can open the command prompt or terminal and type:
     ```
     node
     ```
     This will open the Node.js REPL, where you can type and execute JavaScript code line by line.

# JavaScript Fundamentals

- [Syntax](#syntax)
- [Variables](#variables)
- [Data Types](#data-types)
- [Primitive vs Reference Values](#primitive-vs-reference-values)

## Syntax

## Variables

- [Variable Declarations](#variable-declarations)
  - [var](#var)
  - [let](#let)
  - [const](#const)
- [Variable Naming Rules](#variable-naming-rules)
- [Variable Scopes](#variable-scopes)
  - [Block](#block)
  - [Functions](#functions)
  - [Global](#global)

## Data Types

- [string](#string)
- [number](#number)
  - [Numeric Separator](#numeric-separator)
  - [NaN](#nan)
  - [bigInt](#bigint)
- [boolean](#boolean)
- [null](#null)
- [undefined](#undefined)
- [symbol](#symbol)

## Primitive vs Reference Values

# JavaScript Operators

- [Arithmetic Operators](#arithmetic-operators)
- [Comma Operator](#comma-operator)
- [Remainder Operator](#remainder-operator)
- [Assignment Operators](#assignment-operators)
- [Unary Operators](#unary-operators)
- [Comparison Operators](#comparison-operators)
- [Logical Operators](#logical-operators)
- [Logical Assignment Operators](#logical-assignment-operators)
- [Nullish Coalescing Operator](#javaScript-nullish-coalescing-operator)
- [Exponentiation Operator](#exponentiation-operator)

## Arithmetic Operators

## Comma Operator

## Remainder Operator

## Assignment Operators

## Unary Operators

## Comparison Operators

## Logical Operators

## Logical Assignment Operators

## Nullish Coalescing Operator

## Exponentiation Operator

# Control Flow

- [if](#if)
  - [if else](#if-else)
  - [if else if](#if-else-if)
- [Ternary Operator](#ternary-operator)
- [switch case](#switch-case)
- [while](#while)
- [do while](#do-while)
- [for](#for)
  - [break](#break)
  - [continue](#continue)

# JavaScript functions

- [Functions](#functions)
  - [Function Parameters](#function-parameters)
  - [Rest Params](#rest-params)
- [Arrow Functions](#arrow-functions)
- [Anonymous Functions](#anonymous-functions)
- [Immediately-Invoked Function Expression](#immediately-invoked-function-expression)


