# Table of Contents

- [React.js](#react)
  - [Introduction to React](#introduction-to-react)
  - [How React is work](#how-react-is-work)
- [Components](#components)
  - [Functional Components](#functional-components)
  - [Components Basics](#components-basics)
    - [JSX](#jsx)
    - [Props vs State](#props-vs-state)
    - [Conditional Rendering](#conditional-rendering)
    - [Composition vs Inheritance](#composition-vs-inheritance)
- [Rendering](#rendering)
  - [Lists and Keys](#lists-and-keys)
  - [Render Props](#render-props)
  - [Refs](#refs)
  - [Events](#events)
  - [High Order Components](#high-order-components)
- [Hooks](#hooks)
  - [Basic Hooks](#basic-hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)
  - [Common Hooks](#common-hooks)
    - [useCallback](#usecallback)
    - [useRef](#useref)
    - [useMemo](#usememo)
    - [useReducer](#usereducer)
  - [Custom Hooks](#custom-hooks)
- [API Calls](#api-calls)
  - [Axios](#axios)
  - [(Optional)React Query](#react-query)
- [Context](#context)
- [Routers](#routers)
  - [React Router](#react-router)
- [Forms](#forms)
  - [React hook form](#react-hook-form)
- [(Optional)Frameworks](#frameworks)
  - [Next.js](#next)

# React.js

## Introduction to React

React is an open-source JavaScript library that is widely used for building user interfaces (UIs) and single-page applications. It was developed by Facebook and is now maintained by Facebook and a community of individual developers.

## How React is work

# Components

## Functional Components

**Description:** Functional components are JavaScript functions that return JSX (JavaScript XML) elements. They are a simpler way to write components compared to class components.

**Syntax:**

```jsx
function MyComponent() {
  return (
    <div>
      {/* JSX elements */}
    </div>
  );
}
```

**Example:**

```jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

**Output:**

```jsx
Hello, World!
```

## Components Basics

### JSX

**Description:** JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It provides a concise and familiar syntax for defining the structure and appearance of your components.

**Syntax:**

```jsx
const element = <h1>Hello, JSX!</h1>;
```

**Example:**

```jsx
const name = "John";
const element = <h1>Hello, {name}!</h1>;
```

**Output:**

```jsx
Hello, John!
```

### Resources

- [(Article)React Documentation](https://react.dev/learn/your-first-component)
- [(Article)React function component](https://www.robinwieruch.de/react-function-component/)

### Props vs State

**Description:** Props and state are both used to manage data in React components, but they serve different purposes. Props (short for properties) are used to pass data from a parent component to a child component, while state is used to manage data within a component itself.

### Code example

- []()

### Resources

- [(Article)Props vs State](https://www.robinwieruch.de/react-pass-props-to-component/)

### Conditional Rendering

**Description:** Conditional rendering allows you to show different components or content based on certain conditions. It enables dynamic and flexible rendering of components based on the current state or props.

```jsx
function MyComponent() {
  if (condition) {
    return <ComponentA />;
  } else {
    return <ComponentB />;
  }
}
```

**Example:**

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
```

**Output:** (when isLoggedIn is true)

```jsx
Welcome back!
```

(when isLoggedIn is false)

```jsx
Please log in.
```

### Code example

- []()

### Resources

- [(Article)Conditional rendering react](https://www.robinwieruch.de/conditional-rendering-react/)

### Composition vs Inheritance

**Description:** Composition and inheritance are two ways to achieve code reuse and component composition in React. Composition is generally recommended over inheritance as it provides more flexibility and avoids the potential pitfalls of inheritance.

### Code example

- []()

### Resources

- [(Article)Composition vs Inheritance](https://www.robinwieruch.de/react-component-composition/)


# Rendering

## Lists and Keys

**Description:** Rendering lists and utilizing keys in React components.

**Syntax:**

```jsx
// Syntax example:
{items.map((item) => (
  <ListItem key={item.id} item={item} />
))}
```

**Example:**

```jsx
// Example code:
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

const List = () => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
```

**Output:**

```
- Item 1
- Item 2
- Item 3
```

### Code example

- []()

### Resources

- []()

## Render Props

**Description:** How render props can be used to share code and behavior between components.

**Syntax:**

```jsx
// Syntax example:
<DataProvider render={(data) => <Component data={data} />} />
```

**Example:**

```jsx
// Example code:
const DataProvider = ({ render }) => {
  const data = { name: "John", age: 25 };
  return render(data);
};

const Component = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.age} years old</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <DataProvider render={(data) => <Component data={data} />} />
    </div>
  );
};
```

**Output:**

```
<h1>John</h1>
<p>25 years old</p>
```

### Code example

- []()

### Resources

- []()

## Refs

**Description:** Allowing direct access to DOM elements or React components.

**Syntax:**

```jsx
const inputRef = useRef();
```

**Example:**

```jsx
import { useRef } from "react";

const TextInput = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Ref Example</h1>
      <TextInput />
    </div>
  );
};
```

**Output:**

```
Renders an input field and a button. Clicking the button focuses the input field.
```

### Code example

- []()

### Resources

- []()

## Events

**Description:** Handling events in React components, such as click events or form submissions. It demonstrates how to define event handlers and attach them to specific elements.

**Syntax:**

```jsx
const handleClick = () => {
  // Event handler code goes here
};
```

**Example:**

```jsx
const Button = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click me</button>;
};

const App = () => {
  return (
    <div>
      <h1>Event Handling Example</h1>
      <Button />
    </div>
  );
};
```

**Output:**

```
Renders a button labeled "Click me". Clicking the button logs "Button clicked" to the console.
```

### Code example

- []()

### Resources

- []()

## High Order Components

**Description:** Concept of Higher-Order Components (HOCs) and how they can be used in React. It illustrates how HOCs enable component composition and code reuse.

**Syntax:**

```jsx
const withLogger = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
};
```

**Example:**

```jsx
const withLogger = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
};

const Component = ({ name }) => {
  return <p>Hello, {name}!</p>;
};

const EnhancedComponent = withLogger(Component);

const App = () => {
  return (
    <div>
      <h1>HOC Example</h1>
      <EnhancedComponent name="John" />
    </div>
  );
};
```

**Output:**

```
Renders a paragraph saying "Hello, John!". The HOC logs the props passed to the enhanced component.
```

### Code example

- []

### Resources

- []

# Hooks

Hooks provide a way to manage stateful values and side effects in functional components. They allow you to add features such as local state, lifecycle methods, and context to functional components.

## Basic Hooks

### useState

**Description:** The `useState` hook allows you to add state to functional components in React. It returns a pair of values: the current state and a function that lets you update the state.

**Syntax:**

```jsx
const [state, setState] = useState(initialState);
```

**Example:**

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Output:**

```
button to increment the count.
```

### Code example

- []

### Resources

- []

### useEffect

**Description:** The `useEffect` hook allows you to perform side effects in functional components. It runs after every render and replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

**Syntax:**

```jsx
useEffect(() => {
  // Side effect logic here
  // This function will run after every render
  // Return a cleanup function if needed
}, dependencies);
```

**Example:**

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Time: {time}</div>;
}
```

**Output:**

```
The output will display the elapsed time in seconds, updating every second.
```

### Code example

- []()

### Resources

- []()

## Common Hooks

### useCallback

**Description:**

The `useCallback` hook returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is useful for optimizing performance in child components that rely on callbacks passed down from parent components.

**Syntax:**

```jsx
const memoizedCallback = useCallback(callback, dependencies);
```

**Example:**

```jsx
import React, { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

function ChildComponent({ onClick }) {
  // Renders a button that calls the onClick function when clicked
  return <button onClick={onClick}>Increment</button>;
}
```

**Output:**

```
The output will display a button in the child component that increments the count in the parent component when clicked.
```

### Code example

- []()

### Resources

- []()

### useRef

**Description:** The `useRef` hook returns a mutable ref object whose `.current` property is initialized with the passed argument. The ref object persists across renders and can hold any value.

**Syntax:**

```jsx
const refContainer = useRef(initialValue);
```

**Example:**

```jsx
import React, { useRef } from 'react';

function InputWithFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

**Output:**

```
The output will display an input field and a button. Clicking the button will set the focus on the input field.
```

### Code example

- []()

### Resources

- []()

### useMemo

**Description:** The `useMemo` hook allows you to memoize a value or a function, preventing expensive recalculations on every render. It takes a function and an array of dependencies and returns a memoized value.

**Syntax:**

```jsx
const memoizedValue = useMemo(() => functionToMemoize, dependencies);
```

**Example:**

```jsx
import React, { useMemo } from 'react';

function ExpensiveComponent({ value }) {
  const expensiveValue = useMemo(() => {
    // Expensive calculation based on value
    // This will only recalculate if the value changes
    return calculateExpensiveValue(value);
  }, [value]);

  return <div>Expensive Value: {expensiveValue}</div>;
}
```

**Output:**

```
The output will display the calculated expensive value based on the provided value prop.
```

### Code example

- []()

### Resources

- []()

### useReducer

**Description:**

The `useReducer` hook is an alternative to `useState` for managing complex state logic. It accepts a reducer function and an initial state, and returns the current state and a dispatch function to update the state.

**Syntax:**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

**Example:**

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

**Output:**

```
Will display the current count and two buttons to increment and decrement the count.
```

### Code example

- []()

### Resources

- []()

## Custom Hooks

**Description:** In React, a custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components. It is a way to abstract and encapsulate common logic into a reusable function.

**Syntax:**

```jsx
const { count, increment, decrement, reset } = useCounter(initialValue, step);
```
- `initialValue` (optional): The initial value of the counter. Defaults to 0.
- `step` (optional): The increment/decrement step value. Defaults to 1.

**Example:**

useCounter.js
```js
import { useState } from 'react';

const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    decrement,
    reset
  };
};

export default useCounter;
```

```jsx
import React from 'react';
import useCounter from './useCounter';

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(0, 2);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;
```

**Output:**

```
The `CounterComponent` renders a counter value and provides buttons to increment, decrement, and reset the counter.
```

### Code example

- []()

### Resources

- []()

# API Calls

## Axios

**Description:** Axios is a popular JavaScript library used for making HTTP requests from the browser or Node.js. It provides an easy-to-use API for handling asynchronous operations and simplifies the process of sending and receiving data over the network.

**Syntax:**

```jsx
try {
  const response = await axios(config);
  console.log(response.data);
} catch (error) {
  console.error(error);
} finally {
  console.log('Request completed.');
}
```

**Example:**

```jsx
async function fetchData() {
  try {
    const response = await axios.get('/api/data');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Request completed.');
  }
}

fetchData();
```

**Output:**

```
The output of the API call will depend on the specific request and the server's response. In the example above, the response data will be logged to the console if the request is successful. If an error occurs, the error will be logged to the console. The `finally` block will always be executed, regardless of the request's outcome.
```

### Code example

- []()

### Resources

- []()