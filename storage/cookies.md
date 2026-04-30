# Content of Cookies

- [What are cookies and why they exist](#what-are-cookies-and-why-they-exist)
- [How cookies work in the browser](#how-cookies-work-in-the-browser)
- [How cookies are created and stored](#how-cookies-are-created-and-stored)
- [How cookies are sent with requests](#how-cookies-are-sent-with-requests)
- [Cookie structure and attributes](#cookie-structure-and-attributes)
- [Cookie security and browser policies](#cookie-security-and-browser-policies)
- [Types of cookies](#types-of-cookies)
- [Modern browser restrictions on cookies](#modern-browser-restrictions-on-cookies)

Web applications need a way to remember information between requests.

HTTP itself is a **stateless protocol**, which means each request is independent and the server does not automatically remember previous interactions. This creates a challenge, because once a user is authenticated or interacts with the system, that information is not retained by default.

For example, when a user logs in to an application, the server needs a way to remember that the user is authenticated. Without this, the user would have to log in again on every request. Applications also need to store small pieces of data such as user preferences, session identifiers or tracking information.

To solve this problem, web applications use a mechanism that allows data to be stored on the client and sent with future requests.

You can think of this like a ticket system. When a user interacts with a website, the server provides a small piece of data, like a ticket, which the browser stores and sends back with future requests. The server then uses this ticket to recognize the user or retrieve related information.

This mechanism is called **cookies**. Cookies act as a **state management layer between the browser and the server**, allowing web applications to maintain continuity across multiple requests.

To understand how cookies are used in web applications, we start with the basics.

## What are cookies and why they exist

A **cookie** is a small piece of data that a server sends to the browser. The browser stores this data and includes it in future requests to the same server.

![Cookie](./assets/images/cookie.png)

Cookies are used to maintain **state** in web applications by allowing the server to associate multiple requests with the same user or context.

You can think of cookies like an identification badge. When a user first visits a website, the server provides a small piece of data, which the browser stores and presents with future requests. The server then uses this information to recognize the user or retrieve related data.

In most cases, cookies do not store sensitive data directly. Instead, they store a **reference**, such as a session identifier, while the actual data is kept on the server.

For example, when a user logs in, the server creates a session and assigns it a unique ID. This ID is stored in a cookie, and on subsequent requests, the server uses it to identify the user.

![Cookie where is used](./assets/images/cookie_where_is_used.png)

Cookies can also be used to store user preferences, support features such as shopping carts or track user behavior for analytics.

At a fundamental level, cookies provide a way to maintain continuity between requests by linking them to the same user or context.

To understand how this works in practice, the next step is to look at how cookies move between the browser and the server.

## How cookies work in the browser

Cookies are part of the communication between the **browser and the server** and are handled through HTTP headers and browser behavior.

![browser server communication works](./assets/images/browser_server_communication_works.png)

The process begins when the browser sends a request to a server. In the response, the server can include a `Set-Cookie` header, which instructs the browser to store a cookie.

For example, a response might include `Set-Cookie: session_id=abc123`

When the browser receives this header, it stores the cookie along with metadata such as domain, path and expiration.

On subsequent requests, the browser automatically includes the cookie in the `Cookie` header when the request matches the cookie rules. The server then reads the cookie value and uses it to identify the user or retrieve related data.

This creates a continuous interaction where the server sets a cookie, the browser stores it and then sends it back with future requests.

You can think of this like a check-in system where a user receives an identifier on the first visit and presents it on each return so the system can recognize them.

It is important to note that cookies are not sent with every request. The browser only includes cookies when specific conditions are met, such as matching domain and path rules, ensuring that cookies are shared only with the appropriate servers.

In the next section, we look at how cookies are created and stored in more detail.

## How cookies are created and stored

Cookies are created when a server sends a `Set-Cookie` header in an HTTP response. This header instructs the browser to store a piece of data along with rules that define how it should be used.

![Set-Cookie](./assets/images/Set-Cookie.png)

For example, a response might include `Set-Cookie: session_id=abc123`.

When the browser receives this response, it processes the header and stores the cookie together with metadata such as domain, path and expiration.

You can observe this behavior using browser developer tools. In the **Network tab**, the `Set-Cookie` header appears in the response when a cookie is created or updated.

Once stored, cookies are managed entirely by the browser and can be viewed in the **Application tab -- Storage -- Cookies**, where they are grouped by domain.

A cookie is not just a simple value. In addition to the key-value pair, it includes metadata that defines where it is sent, how long it exists and how it behaves.

Cookies can be created in two ways. The most common approach is through the server using the `Set-Cookie` header, typically for authentication and session management. Cookies can also be created in the browser using JavaScript, for example `document.cookie = "theme=dark"`.

Once created, cookies remain stored in the browser until they expire or are removed. Some cookies exist only for the duration of a session, while others persist across browser restarts.

At this level, it is enough to understand that cookies are created by the server or browser, stored on the client and managed by the browser based on defined rules.

In the next section, we look at how cookies are included in outgoing requests.

## How cookies are sent with requests

Once cookies are stored in the browser, they are automatically included in outgoing HTTP requests.

This behavior is handled entirely by the browser. When a request is made, the browser checks its cookie store and includes matching cookies in the `Cookie` header based on defined rules.

For example, a request may include `Cookie: session_id=abc123; theme=dark`.

This allows the server to receive one or more cookie values as `key:value` pairs and use them to identify the user or retrieve related data.

You can think of this process like presenting an identification badge. The browser automatically attaches this information to each request, allowing the server to recognize the user or context without requiring manual input.

In practice, this mechanism is commonly used for authentication. After a user logs in, the server stores a session identifier in a cookie, and on subsequent requests, the browser includes that cookie so the server can verify the user.

At this level, it is enough to understand that cookies are sent automatically by the browser with requests that match the cookie rules.

In the next section, we examine how cookie structure and attributes control this behavior.

## Cookie structure and attributes

A cookie is not just a simple value. It consists of a **name**, a **value** and a set of **attributes** that define how it behaves.

When a server creates a cookie, it sends it using the `Set-Cookie` header. For example, `Set-Cookie: session_id=abc123; Path=/; HttpOnly; Secure`, where `session_id=abc123` is the `name:value` pair and the rest define how the cookie is handled.

The `name:value` pair represents the stored data, which is typically a small piece of information such as a session identifier. The attributes act as rules that determine where the cookie is sent, how long it exists and how it is protected.

One important attribute is **Domain**, which defines which domain can receive the cookie. If it is not set, the cookie is only sent to the exact domain that created it.

The **Path** attribute limits where the cookie is included. For example, a cookie with `Path=/api` is only sent with requests that target that path.

**Expires** and **Max-Age** control the lifetime of a cookie. If neither is set, the cookie exists only for the duration of the session. If one is defined, the cookie persists beyond the current session.

The **Secure** attribute ensures that the cookie is only sent over HTTPS, helping protect it during transmission.

![Cookie Secure](./assets/images/cookie_secure.png)

The **HttpOnly** attribute prevents access from JavaScript, meaning the cookie cannot be read using `document.cookie`, which helps reduce the risk of client-side attacks.

![HTTPOnly](./assets/images/HTTPOnly.png)

Another important attribute is **SameSite**, which controls whether cookies are included in cross-site requests.

![SameSite](./assets/images/SameSite.png)

Depending on its value, a cookie may be restricted to same-site requests or allowed in cross-site scenarios. This behavior helps reduce risks such as unwanted or unintended requests triggered from other sites.

At this level, it is enough to understand that cookie attributes define how cookies are stored, when they are sent and how they are protected.

owever, these attributes are not only about behavior. They also play an important role in how securely cookies are handled in real applications.

Modern browsers apply additional rules and enforce these attributes to reduce security risks and protect user data.

To understand how cookies behave in practice and how these protections are applied, we look at cookie security and browser policies.

## Cookie security and browser policies

Cookie attributes do not only define how cookies are stored and sent. They also affect how safely cookies behave in real applications.

Some attributes help limit where cookies can travel. For example, `Domain` and `Path` control which requests can include a cookie.

Other attributes help protect cookies during transmission or from browser-side access. The `Secure` attribute ensures that a cookie is only sent over HTTPS, while `HttpOnly` prevents JavaScript from reading the cookie through `document.cookie`.

The `SameSite` attribute controls whether cookies are sent with cross-site requests. `Strict` is the most restrictive, `Lax` allows limited cross-site navigation behavior, and `None` allows cross-site usage but requires `Secure`.

These settings matter because cookies are often used for authentication or session management. A poorly configured cookie may expose sensitive data or allow cookies to be sent in situations where they should not be included.

A cookie is generally safer when it uses `Secure`, uses `HttpOnly` for sensitive values, defines an appropriate `SameSite` policy and avoids overly broad `Domain` or `Path` settings.

These protections do not make an application secure by themselves, but they reduce risk and help browsers enforce safer behavior.

At this level, it is enough to understand that cookie security depends on how attributes and browser policies control access, transmission and cross-site behavior.

While these rules define how cookies behave, cookies can also be classified based on how they are used in applications.

Different types of cookies serve different purposes, such as maintaining sessions, storing preferences or supporting external services.

To better understand these use cases, we look at how cookies are categorized in practice.

## Types of cookies

Cookies can be classified in different ways depending on how they are used, such as their lifetime, origin or purpose.

One common classification is based on **lifetime**. Cookies that do not define `Expires` or `Max-Age` are called **session cookies** and exist only while the browser session is active. Once the browser is closed, they are automatically removed. Cookies that define `Expires` or `Max-Age` are called **persistent cookies** and remain stored in the browser until they expire or are manually removed.

Another classification is based on **origin**. Cookies created by the same domain that the user is currently visiting are called **first-party cookies** and are typically used for core functionality such as authentication or user preferences.

![first-party cookies](./assets/images/first-party-cookies.png)

Cookies created by a different domain are called **third-party cookies** and are usually set by external services such as analytics tools, advertising networks or embedded content.

![third-party cookies](./assets/images/third_party_cookies.png)

These cookies have often been used to track users across different websites, but they are increasingly restricted by modern browsers due to privacy concerns.

Cookies can also be categorized based on their **purpose**, such as authentication, personalization or analytics. In practice, a single cookie can belong to multiple categories, for example being both persistent and first-party.

Understanding these types helps explain how cookies are used in real applications and why different cookies behave differently in the browser.

In the next section, we look at how modern browsers apply restrictions that affect cookie behavior.

## Modern browser restrictions on cookies

Modern browsers apply additional restrictions on cookies to improve security and protect user privacy. These restrictions affect how cookies are stored, accessed and sent with requests.

One important area is **third-party cookies**. Cookies set by a different domain than the one currently visited are often blocked or limited by default, as they have historically been used for cross-site tracking.

Another key behavior involves the **SameSite** attribute. If it is not explicitly defined, browsers typically treat cookies as `SameSite=Lax` by default, meaning they are not included in most cross-site requests.

When `SameSite=None` is used, browsers require the cookie to also include the `Secure` attribute. Without it, the cookie is rejected.

Browsers may also restrict cookies in certain contexts, such as third-party iframes or private browsing modes, depending on user settings and browser policies.

In addition, limits may be applied to the number and size of cookies stored for a domain, helping control resource usage and prevent misuse.

As browser privacy models continue to evolve, cross-site tracking is increasingly restricted. Applications that rely on cookies must take these limitations into account when designing authentication and data handling mechanisms.

At this level, it is enough to understand that modern browsers actively control cookie behavior, and these rules directly impact how cookies function in web applications.
