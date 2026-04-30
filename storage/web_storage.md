# Content of Web Storage

- [What is Web Storage and why it exists](#what-is-web-storage-and-why-it-exists)
- [Local Storage and Session Storage overview](#local-storage-and-session-storage-overview)
- [Working with localStorage](#working-with-localstorage)
- [Working with sessionStorage](#working-with-sessionstorage)
- [Common use cases and limitations of Web Storage](#common-use-cases-and-limitations-of-web-storage)

Web applications often need to store data in the browser, such as user preferences, UI state or temporary data used during interaction.

HTTP does not provide a built-in way to store this kind of data on the client. While cookies can be used for storage, they have limitations. They are small in size and are automatically included in every HTTP request, which can affect performance and introduce unnecessary overhead.

To address these limitations, browsers provide a separate mechanism designed specifically for client-side storage.

You can think of this as a local storage space in the browser, where applications can store data directly and retrieve it when needed without sending it with every request.

This mechanism is called **Web Storage**. It allows applications to store key-value data in the browser in a simple and efficient way, making it suitable for managing client-side state.

Web Storage provides two main types of storage **localStorage** and **sessionStorage**.

To understand how they are used, we first look at their basic characteristics and how they differ.

## What is Web Storage and why it exists

**Web Storage** is a browser feature that allows web applications to store data directly on the client side as `key:value` pairs.

Unlike cookies, this data is not automatically included in HTTP requests, making Web Storage more efficient for managing application state that is only needed in the browser.

You can think of Web Storage as a small local data store inside the browser, where applications can save information and access it later without communicating with the server.

This is useful for improving performance and creating smoother user experiences. For example, an application may store user interface preferences such as **theme** or **layout**, temporary form data or client-side state used for interactive features.

Web Storage was introduced to address the limitations of cookies, such as their small size and the overhead of being sent with every request.

It also provides a simple API that allows developers to store, retrieve and remove data using straightforward methods.

There are two types of Web Storage available in the browser: **localStorage** and **sessionStorage**. Both provide similar functionality but differ in how long the data is stored and how it is scoped.

To understand these differences, we first look at an overview of localStorage and sessionStorage.

## Local Storage and Session Storage overview

Web Storage provides two types of storage mechanisms **localStorage** and **sessionStorage**.

Both store data in the browser as `key:value` pairs and share the same API, meaning they are used in the same way but differ in how long data is stored and how it is scoped.

The main difference is **lifetime**. **localStorage** stores data without an expiration time, so it remains available even after the page is refreshed or the browser is closed, until it is explicitly removed. In contrast, **sessionStorage** stores data only for the duration of a single browser session and is cleared when the tab or window is closed.

Another difference is how data is shared. Data in **localStorage** is available across all tabs and windows of the same origin, while **sessionStorage** is isolated to a single tab, with each new tab having its own separate storage.

You can think of **localStorage** as long-term memory that persists across sessions, while **sessionStorage** acts as short-term memory that exists only during the current interaction.

Both are useful in different situations, and the choice depends on whether data should persist across sessions or remain limited to a single tab.

To better understand how these storage mechanisms are used in practice, we now focus on how data is handled using localStorage.

## Working with localStorage

**localStorage** allows applications to store and retrieve data in the browser using the **Web Storage API**. Unlike cookies, this data is not automatically included in HTTP requests and remains on the client side unless explicitly used.

Applications interact with localStorage using methods such as `setItem`, `getItem`, `removeItem` and `clear`.

When data is stored, it is saved as a **string value** associated with a key. If more complex data structures are needed, such as objects or arrays, they must be converted to a string format, typically using JSON.

The following example demonstrates how data can be stored, retrieved and removed.

```js
localStorage.setItem("cart_items", JSON.stringify(["book", "laptop"]));

const items = JSON.parse(localStorage.getItem("cart_items"));

localStorage.removeItem("cart_items");
localStorage.clear();
```

If the requested key does not exist, `getItem` returns `null`.

The next example shows how objects are stored and retrieved

```js
const settings = { theme: "dark", language: "en" };

localStorage.setItem("settings", JSON.stringify(settings));

const storedSettings = JSON.parse(localStorage.getItem("settings"));
```

Data stored in localStorage is persistent. It remains available even after the page is refreshed or the browser is closed, until it is explicitly removed.

localStorage is scoped to the origin, meaning only scripts running on the same domain, protocol and port can access it. The data is also shared across all tabs and windows of the same origin.

You can inspect and modify localStorage using browser developer tools. In the Application tab, under Storage, you can view stored key-value pairs.

localStorage is commonly used for storing small pieces of data that need to persist across sessions, such as user preferences or application settings.

While localStorage is designed for long-term storage, some scenarios require data to exist only during a single interaction.

To understand this difference, we now look at how data is handled using sessionStorage.

## Working with sessionStorage

**sessionStorage** allows applications to store and retrieve data in the browser for the duration of a single session.

It uses the same Web Storage API as localStorage, with methods such as `setItem`, `getItem`, `removeItem` and `clear`.

The following example shows how data can be stored, retrieved and removed

```js
sessionStorage.setItem("form_data", JSON.stringify({ email: "user@example.com" }));

const formData = JSON.parse(sessionStorage.getItem("form_data"));

sessionStorage.removeItem("form_data");
sessionStorage.clear();
```

If the requested key does not exist, `getItem` returns `null`.

The next example demonstrates how objects are stored and retrieved

```js
const state = { step: 2, completed: false };

sessionStorage.setItem("wizard_state", JSON.stringify(state));

const storedState = JSON.parse(sessionStorage.getItem("wizard_state"));
```

Data stored in sessionStorage exists only for the duration of the current session and is removed when the browser tab or window is closed.

sessionStorage is scoped to the origin, meaning only scripts running on the same domain, protocol and port can access it. Unlike localStorage, data is not shared across tabs, and each tab has its own separate storage.

You can inspect and modify sessionStorage using browser developer tools in the Application tab, under Storage.

sessionStorage is commonly used for temporary data that is needed only during a single interaction, such as form inputs, navigation state or multi-step processes.

Now that we understand how sessionStorage works, we can compare it with localStorage.

## Common use cases for Web Storage

Web Storage is commonly used to store small amounts of data that are needed on the client side.

Because the data is stored in the browser, it can be accessed quickly without making additional requests to the server.

One common use case is storing **user preferences**.

For example, an application may store settings such as theme, language, or layout so that the user experience remains consistent across visits.

Another use case is storing **application state**.

This can include data such as the current step in a multi-step form, UI state, or temporary data needed during user interaction.

This type of data is often stored in sessionStorage when it only needs to exist during a single session.

Web Storage is also used for **caching small pieces of data**.

For example, an application may store API responses or configuration data to avoid repeated requests and improve performance.

However, this should be limited to small and non-critical data.

Another common use case is storing **shopping cart data** or similar temporary user data.

This allows users to navigate between pages or refresh the browser without losing their progress.

Web Storage can also be used to store **flags or simple indicators**, such as whether a user has seen a tutorial, accepted a banner, or completed a specific action.

It is important to note that Web Storage is not suitable for storing sensitive information.

Because the data is accessible through JavaScript, it can be exposed if the application is vulnerable to attacks.

Web Storage is best used for non-sensitive, client-side data that improves user experience and reduces unnecessary communication with the server.

Now that we understand common use cases, we can look at the limitations and considerations of Web Storage.

## Limitations and considerations

Web Storage is useful for storing small amounts of data in the browser, but it comes with several limitations.

One important limitation is **storage size**.

Browsers typically limit Web Storage to a few megabytes per origin. This makes it unsuitable for storing large amounts of data.

Another limitation is that Web Storage stores only **string values**.

If you need to store objects or arrays, they must be converted to a string format, usually using JSON. This adds extra steps when storing and retrieving data.

Web Storage is also **synchronous**.

This means that operations such as reading or writing data happen immediately and can block execution if large amounts of data are processed. Because of this, it should be used for small and simple data only.

Another important consideration is **security**.

Data stored in Web Storage is accessible through JavaScript. If the application is vulnerable to attacks such as cross-site scripting, this data may be exposed.

For this reason, sensitive information should not be stored in Web Storage.

Web Storage is also limited to a specific **origin**.

Data is not shared across different domains, protocols, or ports. While this improves isolation, it also means that data cannot be easily shared between applications.

In addition, users can manually **clear browser storage**.

This means that applications should not rely on Web Storage as a permanent or reliable source of data.

Web Storage is best used for non-critical data that improves user experience, rather than essential application logic.

Understanding these limitations helps ensure that Web Storage is used appropriately and avoids potential issues in real applications.

## Common use cases and limitations of Web Storage

Web Storage is commonly used to store small amounts of data that are needed on the client side. Because the data is stored in the browser, it can be accessed quickly without making additional requests to the server.

One common use case is storing **user preferences**, such as theme, language or layout, so the experience remains consistent across visits.

It is also used to store **application state**, such as the current step in a multi-step form, UI state or temporary interaction data. In these cases, sessionStorage is often used when the data should exist only during a single session.

Another use case is **caching small pieces of data**, such as API responses or configuration values, to reduce repeated requests and improve performance. This should be limited to small and non-critical data.

Web Storage can also be used for **temporary user data**, such as shopping cart contents, or simple **flags and indicators**, such as whether a user has seen a tutorial or completed an action.

While Web Storage is useful, it comes with important limitations.

Storage size is limited to a few megabytes per origin, making it unsuitable for large amounts of data.

Data is stored as strings, so objects and arrays must be converted using JSON before storing and parsed when retrieved.

Operations are synchronous, meaning reading and writing data happens immediately and can block execution if large amounts of data are processed.

Security is another important consideration. Data stored in Web Storage is accessible through JavaScript, so it can be exposed if the application is vulnerable to attacks. For this reason, sensitive information should not be stored in Web Storage.

Web Storage is also limited to a specific origin. Data is not shared across different domains, protocols or ports.

In addition, users can manually clear browser storage, so it should not be relied on as a permanent or critical data source.

In practice, Web Storage is best used for non-sensitive, client-side data that improves user experience rather than for essential application logic.
