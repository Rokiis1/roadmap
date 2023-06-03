# Table of Contents

- [React.js](#react)
    - [Introduction to React](#introduction to-react)
    - [How React is work](#how-react-is-work)
- [Components](#components)
    - [Functional Components](#functional-components)
    - [Components Basics](#components-basics)
        - [JSX](#jsx)
        - [Props vs State](#props-vs-state)
        - [Conditional Rendering](#conditional-rendering)
        - [Composition vs Inheritance](#composition-vs-inheritance)
- [Rendering](#rendering)
    - [Component Life Cycle](#component-life-cycle)
    - [Lists and Keys](#lists-and-keys)
    - [Render Props](#render-props)
    - [Refs](#refs)
    - [Events](#events)
    - [High Order Components](#high-order-components)
- [Hooks](#hooks)
    - [Basic Hooks](#basic-hooks)
        - [useState](#usestate)
        - [useEffect](#useeffect)
    - [Common Hooks](#commonhooks)
        - [useCallback](#usecallback)
        - [useRef](#useref)
        - [useMemo](#usememo)
        - [useReducer](#usereducer)
    - [Custom Hooks](#custom-hooks)
- [Context](#context)
- [TBD](#tbd)
- [TBD](#tbd)
- [TBD](#tbd)
- [TBD](#tbd)

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

### Props vs State

**Description:** Props and state are both used to manage data in React components, but they serve different purposes. Props (short for properties) are used to pass data from a parent component to a child component, while state is used to manage data within a component itself.

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

### Composition vs Inheritance

**Description:** Composition and inheritance are two ways to achieve code reuse and component composition in React. Composition is generally recommended over inheritance as it provides more flexibility and avoids the potential pitfalls of inheritance.

#