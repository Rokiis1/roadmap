# Content of Basic Web

- [Client-Server model](#client-server-model)
- [DNS](#dns)
- [Request-Response lifecycle](#request-response-lifecycle)
- [URL structure (path and query parameters)](#url-structure-path-and-query-parameters)
- [HTTP protocol](#http-protocol)
- [HTTPS](#https)
- [Same-Origin concept](#same-origin-concept)

Web applications rely on communication between different systems.

When you open a website, your browser needs to request data and another system needs to respond with the requested information.

This interaction happens constantly, even for simple actions such as loading a page, submitting a form or clicking a button.

To understand how the web works, it is important to understand how these systems communicate with each other.

You can think of the web as a system where one side asks for information and another side provides it.

This communication follows a structured model that defines how requests are made and how responses are returned.

This model is called the **Client–Server model**.

## Client-Server model

The **Client–Server model** describes how communication happens between two main parts of a web application.

A **client** is the system that makes a request, most commonly a web browser used by the user. A **server** is the system that receives the request, processes it, and returns a response.

![Client-Server model](./assets/images/client_Server_model.png)

When a user interacts with a website, the browser sends a request to the server asking for specific data or resources. The server processes that request and sends back a response, which the browser then displays to the user.

You can think of this interaction like ordering food in a restaurant. The client is the customer placing an order and the server is the kitchen preparing the food. The customer makes a request, the kitchen processes it and the result is returned.

This model is used for all web communication, such as loading a webpage, submitting a form or fetching data from an API. In each case, the client initiates a request and the server responds with the appropriate data.

It is important to understand that the client and server are separate systems. The client does not have direct access to the server’s internal data or logic. Instead, all communication happens through defined requests and responses.

This separation allows web applications to scale, maintain security and handle multiple users at the same time.

Now that we understand how clients and servers interact, the next step is to understand how the browser knows where to send a request.

To do this, we first look at how domain names are resolved into IP addresses using DNS.

## DNS

**DNS (Domain Name System)** is a system that translates human-readable domain names (like "example.com") into IP addresses that computers use to identify each other on the network.

When a user enters a URL in the browser, the browser cannot directly use the domain name to send a request. Instead, it must first find the corresponding IP address.

This process is called **DNS resolution**.

You can think of DNS like a phone book.

Instead of remembering phone numbers, you look up a name and get the number you need. In the same way, DNS allows users to work with easy to remember domain names while computers use IP addresses behind the scenes.

![dns](./assets/images/dns.png)

The DNS resolution process happens in several steps.

The browser first checks if the IP address is already known, either from cache or the operating system.

If not, it sends a request to a DNS server, which looks up the domain and returns the corresponding IP address.

Once the IP address is resolved, the browser can send the request to the correct server.

This process happens quickly and is usually invisible to the user.

Understanding DNS is important, because every request on the web depends on it before any communication with a server can begin.

Now that we know how domain names are resolved, we can look at how a request is sent and processed using the request–response lifecycle.

## Request-Response lifecycle

The **request–response lifecycle** describes the sequence of steps that happen when a user interacts with a website.

Every time you open a page, click a link or submit a form, this process takes place behind the scenes.

![alt text](image.png)

It begins when the user performs an action, such as entering a URL in the browser.

The browser first needs to determine where to send the request. It does this by resolving the domain name into an IP address using DNS.

Once the address is known, the browser sends an HTTP request to the server.

This request contains information about what the client is asking for, such as the resource path, method and headers.

The server receives the request, processes it and prepares a response.

This may involve retrieving data from a database, executing application logic or generating content.

After processing, the server sends back an HTTP response.

The response includes a status code, headers and often a body containing the requested data.

The browser receives the response and uses it to update the page.

For example, it may render HTML, apply styles and execute JavaScript to display the content to the user.

You can think of this process as a full cycle.

A request is sent, a response is returned and the result is shown to the user.

This cycle happens continuously as users interact with a web application.

Understanding this lifecycle is important, because all web communication is built on top of it.

Before a request is sent, the browser needs to define exactly what resource is being requested and how it should be handled.

This information is defined by the structure of the URL.

## URL structure (path and query parameters)

## HTTP protocol

## HTTPS

## Same-Origin concept
