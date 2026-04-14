# Content of Web Storage

- [What is Web Storage and why it exists](#what-is-web-storage-and-why-it-exists)
- [Local Storage and Session Storage overview](#local-storage-and-session-storage-overview)
- [How Web Storage works in the browser](#how-web-storage-works-in-the-browser)
- [Working with localStorage](#working-with-localstorage)
- [Working with sessionStorage](#working-with-sessionstorage)
- [Key differences between localStorage and sessionStorage](#key-differences-between-localstorage-and-sessionstorage)
- [Common use cases for Web Storage](#common-use-cases-for-web-storage)
- [Limitations and considerations](#limitations-and-considerations)

Web applications often need to store data in the browser.

For example, an application may need to remember user preferences, keep track of UI state or store temporary data while the user interacts with the page.

HTTP alone does not provide a way to store this kind of data on the client.

Cookies can be used for storage, but they have limitations. They are small in size and are automatically sent with every HTTP request, which can affect performance and introduce unnecessary overhead.

To address these limitations, browsers provide a separate mechanism designed specifically for client-side storage.

You can think of this like having a local storage space in the browser.

Instead of sending data back and forth with every request, the application can store data directly in the browser and retrieve it when needed.

This mechanism is called **Web Storage**.

Web Storage allows applications to store key-value data in the browser in a simple and efficient way.

Unlike cookies, this data is not automatically sent with HTTP requests.

This makes it suitable for storing application state that is only needed on the client side.

Web Storage provides two main types of storage.

These are **localStorage** and **sessionStorage**.

To understand how they are used, we first look at their basic characteristics and how they differ.

## What is Web Storage and why it exists

**Web Storage** is a browser feature that allows web applications to store data directly on the client side.

It provides a simple way to save and retrieve data in the form of key-value pairs.

Unlike cookies, Web Storage is designed specifically for storing data in the browser without sending it with every HTTP request.

This makes it more efficient for handling application state that is only needed on the client.

You can think of Web Storage as a small local database inside the browser.

An application can store data there and access it later without needing to communicate with the server.

This is useful for improving performance and creating smoother user experiences.

For example, an application may store:

- user interface preferences, such as theme or layout
- temporary form data
- client-side state for interactive features

Web Storage was introduced to address the limitations of cookies.

Cookies are limited in size and are automatically included in every request, which can add unnecessary overhead.

In contrast, Web Storage provides more space and keeps data on the client side unless explicitly used by the application.

Web Storage is also easier to use.

It provides a simple API that allows developers to store, retrieve and remove data using straightforward methods.

There are two types of Web Storage available in the browser.

These are **localStorage** and **sessionStorage**.

Both provide similar functionality, but differ in how long the data is stored and how it is scoped.

To understand these differences, we first look at an overview of localStorage and sessionStorage.

## Local Storage and Session Storage overview

Web Storage provides two types of storage mechanisms: **localStorage** and **sessionStorage**.

Both are used to store data in the browser as simple key-value pairs and share the same API.

This means they are accessed and used in the same way, but differ in how long the data is stored and how it is scoped.

The main difference between them is **lifetime**.

**localStorage** stores data without an expiration time.

This means the data remains in the browser even after the page is refreshed or the browser is closed. It stays available until it is explicitly removed by the application or the user.

**sessionStorage**, on the other hand, stores data only for the duration of a single browser session.

The data is cleared when the tab or window is closed. Each tab has its own separate session storage, even if multiple tabs are open for the same website.

Another difference is how they are shared.

Data stored in **localStorage** is shared across all tabs and windows of the same origin.

In contrast, **sessionStorage** is isolated to a single tab. Opening a new tab creates a new, independent storage.

You can think of **localStorage** like long-term memory.

It remembers data across visits and sessions.

**sessionStorage** is more like short-term memory.

It keeps data only while the current interaction is active and is cleared when the session ends.

Both storage types are useful in different situations.

Choosing between them depends on how long the data should persist and whether it should be shared across tabs.

To understand how these storage mechanisms work in practice, we next look at how Web Storage operates in the browser.

## How Web Storage works in the browser

Web Storage is managed entirely by the browser and is accessed through the **Web Storage API**.

Unlike cookies, data stored in Web Storage is not automatically included in HTTP requests. It remains on the client side unless the application explicitly reads and uses it.

Applications interact with Web Storage using simple methods provided by the browser.

For example, data can be stored, retrieved, and removed using methods such as:

- `setItem(key, value)` to store data
- `getItem(key)` to retrieve data
- `removeItem(key)` to delete a specific item
- `clear()` to remove all stored data

These methods work the same way for both **localStorage** and **sessionStorage**.

When data is stored, it is saved as a **string value** associated with a key.

If more complex data structures are needed, such as objects or arrays, they must be converted to a string format, typically using JSON.

For example:

```js
localStorage.setItem("user", JSON.stringify({ name: "John" }));

const user = JSON.parse(localStorage.getItem("user"));
```

The browser stores this data internally and makes it available to scripts running on the same origin.

You can think of Web Storage as a simple key-value store that belongs to a specific website.

Each origin has its own separate storage, and data is not shared across different domains.

Web Storage can also be inspected using browser developer tools.

In the **Application tab**, under **Storage**, you can view and modify both localStorage and sessionStorage entries for a given site.

It is important to note that Web Storage operations are synchronous.

This means that reading or writing data happens immediately and can block execution if large amounts of data are processed.

Because of this, Web Storage is best suited for small amounts of data and simple use cases.

Now that we understand how Web Storage operates in the browser, we can look at how to work with localStorage in practice.

## Working with localStorage

**localStorage** provides a simple way to store and retrieve data in the browser.

It stores data as key-value pairs, where both the key and the value are strings.

You can interact with localStorage using methods provided by the browser.

To store data, you can use `setItem`.

```js
localStorage.setItem("cart_items", JSON.stringify(["book", "laptop"]));
```

To retrieve data, you can use `getItem`.

```py
const items = JSON.parse(localStorage.getItem("cart_items"));
```

If the key does not exist, `getItem` returns `null`.

To remove a specific item, you can use `removeItem`.

```py
localStorage.removeItem("cart_items");
```

To remove all stored data for the current origin, you can use `clear`.

```py
localStorage.clear();
```

Data stored in localStorage is persistent.

This means it remains available even after the page is refreshed or the browser is closed.

The data will stay in the browser until it is explicitly removed by the application or the user.

Since localStorage stores only strings, complex data types such as objects or arrays must be converted before storing.

```py
const settings = { theme: "dark", language: "en" };

localStorage.setItem("settings", JSON.stringify(settings));

const storedSettings = JSON.parse(localStorage.getItem("settings"));
```

localStorage is scoped to the origin.

This means that only scripts running on the same domain, protocol, and port can access the stored data.

Data stored in localStorage is also shared across all tabs and windows of the same origin.

You can inspect and modify localStorage using browser developer tools.

In the **Application tab**, under **Storage**, you can view all stored key-value pairs.

localStorage is commonly used for storing small pieces of data that need to persist across sessions, such as user preferences or application settings.

Now that we understand how to work with localStorage, we can look at how sessionStorage behaves in comparison.

## Working with sessionStorage

**sessionStorage** provides a way to store data in the browser for the duration of a single session.

It stores data as key-value pairs, where both the key and the value are strings.

You can interact with sessionStorage using methods provided by the browser.

To store data, you can use `setItem`.

```js
sessionStorage.setItem("form_data", JSON.stringify({ email: "user@example.com" }));
```

To retrieve data, you can use `getItem`.

```js
const formData = JSON.parse(sessionStorage.getItem("form_data"));
```

If the key does not exist, `getItem` returns `null`.

To remove a specific item, you can use `removeItem`.

```js
sessionStorage.removeItem("form_data");
```

To remove all stored data for the current session, you can use `clear`.

```js
sessionStorage.clear();
```

Data stored in sessionStorage exists only for the duration of the current session.

This means it is removed when the browser tab or window is closed.

Since sessionStorage stores only strings, complex data types such as objects or arrays must be converted before storing.

```js
const state = { step: 2, completed: false };

sessionStorage.setItem("wizard_state", JSON.stringify(state));

const storedState = JSON.parse(sessionStorage.getItem("wizard_state"));
```

sessionStorage is scoped to the origin.

This means that only scripts running on the same domain, protocol, and port can access the stored data.

Data stored in sessionStorage is not shared across tabs.

Each tab has its own separate storage, even if multiple tabs are open for the same website.

You can inspect and modify sessionStorage using browser developer tools.

In the **Application tab**, under **Storage**, you can view all stored key-value pairs.

sessionStorage is commonly used for storing temporary data that is needed only during a single interaction, such as form inputs, navigation state, or multi-step processes.

Now that we understand how sessionStorage works, we can compare it with localStorage.

## Key differences between localStorage and sessionStorage

Data in **localStorage** is shared across all tabs and windows of the same origin.

In contrast, **sessionStorage** is isolated to a single tab. Opening a new tab creates a separate storage.

This means that changes made in one tab using localStorage can be accessed from another tab, while sessionStorage data remains independent.

Both storage types use the same API and store data as strings, but their behavior differs depending on how long the data should persist and whether it should be shared.

You can think of **localStorage** as long-term storage that remembers data across sessions, while **sessionStorage** acts as short-term storage that is cleared when the session ends.

Choosing between them depends on the needs of the application.

If data should persist across visits, localStorage is more suitable.

If data should exist only during a single interaction, sessionStorage is a better choice.

Now that we understand their differences, we can look at common use cases for Web Storage.

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
