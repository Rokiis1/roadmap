# Content of Basic Web

- [Client-Server model](#client-server-model)
- [DNS](#dns)
- [Request-Response lifecycle](#request-response-lifecycle)
- [URL structure (path and query parameters)](#url-structure-path-and-query-parameters)
- [HTTP protocol](#http-protocol)
- [HTTPS](#https)
- [Same-Origin concept](#same-origin-concept)

Web applications work through communication between systems. When you open a website, your browser sends requests for data and another system responds with the requested information. This process happens continuously, even for simple actions such as loading a page, clicking a link or submitting a form.

To understand how the web works, it is important to understand how this communication is structured. At a high level, one system requests information and another system provides it. This interaction follows a defined model that describes how requests are made and how responses are returned.

This model is known as the **Client–Server model**.

## Client-Server model

The **Client–Server model** describes how communication happens between two main parts of a web application.

A **client** is the system that makes a request, usually a web browser. A **server** is the system that receives the request, processes it and returns a response.

![Client-Server model](./assets/images/client_Server_model.png)

When a user interacts with a website, the browser sends a request to the server asking for specific data or resources. The server processes that request and returns a response, which the browser then renders for the user.

You can think of this interaction like ordering food in a restaurant. The client places the order and the server prepares and returns the result.

This pattern is used in all web communication, whether loading a page, submitting data or requesting information from an API. The client always initiates the request and the server responds.

The client and server are separate systems. The client cannot directly access the server’s internal logic or data. All communication happens through defined requests and responses, which helps maintain security and allows systems to scale.

To send a request, the browser must know where the server is located. This is handled using DNS.

## DNS

**DNS (Domain Name System)** translates human-readable domain names into IP addresses that computers use to communicate.

When a user enters a URL, the browser cannot use the domain name directly. It must first resolve it into an IP address. This process is called **DNS resolution**.

You can think of DNS as a lookup system. Instead of remembering IP addresses, users work with domain names while DNS maps them to the correct destination.

![dns](./assets/images/dns.png)

The browser first checks if the address is already cached. If not, it queries a DNS server to find the corresponding IP address. Once resolved, the browser can send the request to the correct server.

This process is fast and usually invisible to the user, but it is required before any request can be made.

Once the server is located, the browser can begin the request–response process.

## Request-Response lifecycle

The **request–response lifecycle** describes the sequence of steps that occur when a user interacts with a web application.

![Request-Response lifecycle](../basic_web/assets/images/request_response_lifecycle.png)

The process begins when the user performs an action, such as entering a URL or clicking a link. The browser resolves the domain using DNS, then sends an HTTP request to the server.

The request contains details about what resource is being requested and how it should be handled. The server processes the request, which may involve executing logic or retrieving data, and then returns an HTTP response.

The response includes a status code, headers and often a body containing the requested data. The browser receives this response and updates the page by rendering content and executing scripts.

This forms a continuous cycle. A request is made, a response is returned and the result is displayed. Every interaction on the web follows this pattern.

Before sending a request, the browser must define exactly what resource is being requested.

This is done using a structured address that tells the server where to go and what to return.

## URL structure (path and query parameters)

A **URL (Uniform Resource Locator)** is the address used to access resources on the web. When a browser sends a request, the URL defines both where the request should go and what resource should be returned.

A URL follows a structured format.

```text
{protocol}://{domain}:{port}/{path}?{query}
```

The protocol defines how the request is sent, such as `http` or `https`. The domain identifies the server and it is resolved into an IP address using DNS. The port is optional and specifies the communication endpoint, with default values used when it is not provided.

The path represents the resource being requested and often reflects how data is organized on the server.

```text
/users/123/posts
```

In this example, `users` represents a collection of data, `123` identifies a specific item and `posts` refers to related data connected to that item. This structure allows the server to understand exactly which resource is being requested.

A URL can also include query parameters. These appear after the `?` and are used to modify how the request is processed, such as filtering, sorting or limiting results.

While both path parameters and query parameters are part of the URL, they are used for different purposes.

The following examples show how these two types of parameters are used in practice.

![parameters](./assets/images/parameters.png)

While both path parameters and query parameters are part of the URL, they serve different roles. The path identifies the resource itself, while query parameters adjust how that resource is returned.

You can think of the URL as a structured instruction. The path defines what to retrieve and the query parameters define how the result should be shaped.

Understanding URL structure is important because it directly affects how requests are interpreted by the server.

Now that we understand how a request is defined, we can look at how it is sent and handled using the HTTP protocol.

## HTTP protocol

**HTTP (Hypertext Transfer Protocol)** defines how communication happens between a client and a server on the web. When a browser sends a request, HTTP determines how that request is structured and how the server should respond.

HTTP follows a request–response model. The client sends a request and the server returns a response containing the result.

An important characteristic of HTTP is that it is **stateless**, meaning each request is independent and the server does not automatically remember previous interactions.

To perform different actions, HTTP uses methods. These define what operation should be applied to a resource. For example, `GET` is used to retrieve data, `POST` to send data, `PUT` or `PATCH` to update data and `DELETE` to remove it.

When the server responds, it includes a **status code** that indicates the outcome of the request. This allows the client to understand whether the request was successful, failed or requires further action.

![status code](./assets/images/status_code.png)

HTTP messages also include **headers**, which provide additional information about the request or response. Headers describe how data should be handled and may include metadata such as content type, authentication details or caching instructions.

Over time, HTTP has evolved to improve performance and efficiency. Modern versions allow multiple requests to be handled more effectively and reduce delays in communication.

Understanding HTTP is essential because it defines how data is exchanged between the browser and the server in every web application.

Now that we understand how communication works, we can look at how it is secured using HTTPS.

## HTTPS

**HTTPS (Hypertext Transfer Protocol Secure)** is the secure version of HTTP. It protects data exchanged between the client and the server by using encryption.

When communication happens over HTTP, data is sent in plain text and can be intercepted or read by others on the network. HTTPS prevents this by encrypting the data, ensuring that even if it is intercepted, it cannot be easily understood.

![https vs http](./assets/images/https_vs_http.png)

You can think of this as sending a message. With HTTP, the message is visible to anyone who can access it. With HTTPS, the message is protected so that only the intended receiver can read it.

HTTPS relies on **TLS (Transport Layer Security)** to secure the connection. TLS encrypts data before it is sent and ensures that only the intended recipient can decrypt it. It acts as a protective layer between HTTP and the network during transmission.

TLS replaces an older protocol called **SSL (Secure Sockets Layer)**, which is no longer used but is still commonly referenced.

In addition to encryption, HTTPS also verifies the identity of the server. This allows the client to confirm that it is communicating with the correct server rather than an attacker.

You can recognize HTTPS by the `https` protocol in the URL and the lock icon in the browser.

Using HTTPS is essential for modern web applications, especially when handling sensitive data such as authentication, personal information or payments.

Now that communication can be secured, we can look at how browsers apply rules when interacting with different origins.

## Same-Origin concept

The **Same-Origin concept** is a browser rule that controls how web pages interact with resources from different locations.

An **origin** is defined by three parts, the protocol, domain and port. For two URLs to have the same origin, all three must match exactly.

For example, `https://example.com` and `https://example.com` share the same origin, while any difference in protocol, domain or port results in a different origin.

This distinction is important because browsers restrict how applications interact with resources from other origins. Resources from the same origin can interact freely, while resources from different origins are isolated.

You can think of origin as an identity. Only resources with the same identity are trusted to communicate directly.

These restrictions exist to protect users. Without them, a malicious website could perform actions on another site on behalf of the user or attempt to access sensitive data.

The Same-Origin concept is the foundation of many browser security mechanisms. It defines when interactions are allowed and when additional controls are required.

One of the key mechanisms built on top of this concept is **CORS**, which allows controlled communication between different origins.

Now that we understand how browsers separate and protect origins, we can look at how cross-origin access is managed using CORS.
