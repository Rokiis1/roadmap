# Table of Contents

- [Internet](#internet)
    - [Introduction to the Internet](#introduction-to-the-internet)
    - [How it's works HTTP, HTTPS, SSL, TLS?](#how-its-works-http-https-ssl-tls)
    - [DNS (Domain Name System)](#domain-name-system)
    - [Domain Names](#domain-names)
    - [Hosting](#hosting)
    - [Browsers and How They Work](#browsers-and-how-they-work)
        - [Browser Architecture](#browser-architecture)
        - [Loading a Website](#loading-a-website)
        - [Creating the DOM Tree](#creating-the-dom-tree)
        - [Layout and Painting](#layout-and-painting)

# Internet

## Introduction to the Internet

**Overview:**

The internet is a vast and intricate network that connects billions of devices and allows for the exchange of information across the globe. Understanding how the internet works is fundamental in today's digital age. In this video, we will explore the journey of data across the internet and delve into its key components and processes.

**Data Center:**

- A data center, often located thousands of miles away, stores digital content such as videos.
- To access this content on your device, data must travel from the data center to your mobile phone or laptop.

**Satellites vs. Optical Fiber Cables:**

- While satellites could transmit data from the data center, they introduce significant latency due to their high altitude.
- The internet primarily relies on a complex network of optical fiber cables for efficient data transmission.

**IP Addresses:**

- Every internet-connected device, whether a server, computer, or mobile phone, has a unique IP address, akin to a home address.
- IP addresses act as the shipping addresses for data on the internet.
- Domain names, like youtube.com or facebook.com, are used to make IP addresses more human-friendly.

**Domain Name System (DNS):**

- DNS serves as a vast online phone book, mapping domain names to their corresponding IP addresses.
- When you enter a domain name, your browser queries a DNS server to obtain the associated IP address.

**Data Flow:**

- When you request access to a website, your browser sends a request to the data center's server, identified by its IP address.
- Data is transmitted digitally as light pulses through optical fiber cables, covering vast distances.
- These cables are laid across challenging terrains, including undersea routes.
- Routers convert light signals into electrical signals, which are then transmitted to your device via Ethernet cables or wireless signals from cell towers.

**Efficiency and Protocols:**

- The internet efficiently transmits data by dividing it into packets, each with source and destination addresses.
- Protocols set the rules for data packet conversion, routing, and reassembly.
- Lost packets trigger retransmission requests.

**Global Internet Management:**

- Organizations like ICANN manage IP address assignments, domain name registrations, and other critical aspects of the internet.
- The internet operates as a global network with standardized rules and procedures.

![Example of Internet](./images/internet.png)

**Resources:**

- [Article: How does the Internet Work?](https://cs.fyi/guide/how-does-internet-work) |
- [Video: How the Internet Works](https://www.youtube.com/watch?v=x3c1ih2NJEg)

## How it's works HTTP, HTTPS, SSL, TLS?

**Introduction:**

We will explore the workings of HTTP (Hypertext Transfer Protocol), HTTPS (Secure Hypertext Transfer Protocol), SSL (Secure Sockets Layer), and TLS (Transport Layer Security). These protocols play crucial roles in ensuring the security and functionality of data transmission on the internet.

**HTTP - Hypertext Transfer Protocol:**

- HTTP is the most widely used protocol for viewing web pages on the internet.

- When you enter a web address (google.com), HTTP is automatically added, indicating that you're using this protocol to retrieve the web page.

- Standard HTTP transfers data in clear text, making it vulnerable to interception by malicious parties.

**Security Concerns with HTTP:**

- Standard HTTP exposes all transferred data to potential eavesdroppers, making it unsuitable for transmitting sensitive information.

- Any data exchanged between your computer and a web server is susceptible to interception, including personal information, passwords, and credit card details.

**HTTPS - Secure Hypertext Transfer Protocol:**

- HTTPS is an extension of HTTP with security features.

- It encrypts data exchanged between computers and servers, rendering it unreadable to unauthorized parties.

- When a website requires entering sensitive data, you'll notice "HTTPS" in the web address, along with a padlock symbol in many web browsers.

**Data Encryption in HTTPS:**

- Secure HTTP uses encryption algorithms to scramble data during transmission.

- Even if intercepted, the encrypted data is meaningless to hackers, as decrypting it without the proper keys is exceedingly difficult.

**SSL - Secure Sockets Layer:**

- SSL, or Secure Sockets Layer, is a protocol that ensures internet security.

- It employs public key encryption to secure data transmission.

- SSL certificates, which authenticate website identities, are crucial components.

**SSL Workflow:**

1. When a computer connects to an SSL-enabled website, it requests the website to identify itself.

2. The web server sends the computer a copy of its SSL certificate.

3. The computer's browser verifies the certificate's trustworthiness.

4. Upon successful verification, encrypted data exchange commences.

**TLS - Transport Layer Security:**

- TLS, or Transport Layer Security, is an industry-standard cryptographic protocol.

- It is based on SSL specifications and offers authentication, client-server trust, and data encryption.

- TLS is the successor to SSL, providing enhanced security features.

**Adoption of HTTPS by Websites:**

- Many websites now use HTTPS by default, even if they don't handle sensitive data, due to security and SEO considerations.

- Google penalizes websites without SSL protection, affecting their search rankings.

**Resources:**

- [Video: SSL, TLS, HTTP, HTTPS Explained](https://www.youtube.com/watch?v=hExRDVZHhig)

## DNS (Domain Name System)

- DNS, short for Domain Name System, is a fundamental component of the internet.

- It serves as a crucial translator, converting human-readable domain names (google.com) into machine-readable IP addresses.

- But what are domain names and IP addresses?

**Understanding Domain Names and IP Addresses:**

- A domain name is the text or string that you enter in your web browser's address bar.

- Common examples include google.com.

- An IP address, on the other hand, is a numerical identifier. It appears as a set of four numbers, such as 192.168.1.1.

**DNS Resolver - The Phone Book of the Internet:**

- DNS is like a phone book for the internet, bridging the gap between human communication and the networking world.

- In the networking realm, computers use numbers (IP addresses) to communicate, while humans use names.

- The DNS resolver acts as a phone book, allowing us to find the IP address associated with a domain name.

**DNS Lookup Process:**

1. The user initiates the DNS lookup by entering a website address in their web browser.

2. The web browser checks its cache memory for the IP address. If not found, it forwards the request to the DNS resolver.

3. The DNS resolver also has its cache but may need to escalate the query to higher-level servers.

4. The DNS resolver contacts the root server, the top-level entity in the DNS hierarchy.

5. The root server provides the IP address of the top-level domain (TLD) server, which stores domain-specific information.

6. The TLD server forwards the request to the authoritative name server for the specific domain (google.com).

7. The authoritative name server returns the IP address, completing the DNS lookup.

8. The DNS resolver stores the IP address in its cache and shares it with the web browser.

9. The web browser connects to the web server associated with the IP address, retrieving the web page content.

**Resources:**

- [Video: What is DNS? | How DNS works](https://www.youtube.com/watch?v=nyH0nYhMW9M)

## Domain Names

**Introduction:**

A domain name is like the address for your website on the internet. Every computer, including the server hosting your website, has a unique numerical identifier called an IP address. Without domain names, users would need to remember and enter these IP addresses to access websites.

**The Role of Domain Names:**

- Domain names serve as user-friendly, easy-to-remember alternatives to IP addresses.

- They provide a convenient way for users to access web content by simply typing in the domain name.

- Imagine having to remember a string of numbers instead of a domain name; it wouldn't be practical.

**Understanding the DNS (Domain Name System):**

- The DNS, or Domain Name System, is a decentralized system that stores information about which domain names are connected to which IP addresses.

- When a user enters a domain name in their web browser, the DNS is queried to find the corresponding IP address.

- Think of the DNS as the directory of the internet, connecting domain names to their server locations.

**Top-Level Domains (TLDs):**

- TLDs are the end portion of a domain name, such as ".com" or ".org."

- Different TLDs have specific purposes or associations; for example, ".org" is often used by non-profit organizations.

- Newer TLDs like ".blog" or ".shop" cater to specific types of websites.

- Some TLDs, like ".gov" and ".edu," require additional verification due to their authoritative nature.

- The choice of TLD may also influence the cost of your domain name.

**Subdomains:**

- Subdomains are specific URLs for sections of a website or microsites within a network.

- They are designated by a prefix, such as "blog.example.com."

- Search engines treat subdomains as separate websites, and they serve various purposes within site organization.

**Domain Registration:**

- Domain names can be registered through domain registrars or web hosts.

- Many web hosts offer the first year of domain registration for free when you purchase a hosting plan.

- When you register a domain name, it becomes part of a public record maintained by ICANN (Internet Corporation for Assigned Names and Numbers).

- ICANN's records include your contact information, but domain privacy services can keep your personal details hidden.

**Reselling Domain Names:**

- If you no longer need a domain name, you can resell it.

- Marketplaces like Flippa facilitate the buying and selling of domain names.

- Factors influencing a domain name's resale value include the TLD used, the presence of valuable keywords, and the domain's recognizability.

**Resources**

- [Article: What is a domain name](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)
- [Video: Everything You Need to Know About Domain Names](https://www.youtube.com/watch?v=qO5qcQgiNX4)

## Hosting

**Web Hosting as Renting Online Space:**

Imagine you want to open a physical store for your business. You register a store name, create a logo, and develop your products, but all of this effort would be in vain unless you rent a physical space for your store. This physical space is where you set up shop and showcase your products to customers. 

**Applying the Same Principle to the Internet:**

Web hosting follows a similar concept but in the digital world. When you create a website, you have text, images, videos, buttons, and more that need to be stored somewhere on the internet. Web hosting provides you with that space. In essence, it's like renting a spot on the internet where your website's data can reside.

**Web Hosting Services:**

Web hosting companies operate data centers filled with servers. These servers store your website's data and make it accessible to users worldwide. Here's what web hosting services typically include:

- **Storage:** Storing all the files that make up your website, including text, images, videos, and code.

- **Design Platforms:** Some web hosts offer website building tools and templates to help you create and design your site.

- **Support:** Assistance and technical support to address any issues or questions you may have.

- **Security:** Protection against cyber threats to keep your website safe.

- **Much More:** Depending on the hosting plan you choose, you may get additional features like email services, backup options, and scalability for handling increased traffic.

**Web Hosting vs. Domain Names:**

It's essential to differentiate web hosting from domain names. When you buy a domain name, you're essentially securing the web address where your online store (website) will be set up. However, without web hosting, that address remains inactive and doesn't display your website content. You need both a domain name and web hosting to go live on the internet.

**Getting Started with Web Hosting:**

If you have an idea for a website and want to start building and designing it, you can sign up for web hosting. It's a straightforward process that usually takes less than 10 minutes. I've included a link in the video description where you can explore web hosting options and get started.

**Resources**

- [(Video)What Is Web Hosting? Explained](https://www.youtube.com/watch?v=htbY9-yggB0) 
- [(Video)Different Types of Web Hosting Explained](https://www.youtube.com/watch?v=AXVZYzw8geg)

## Browsers and How They Work

### Browser Architecture

![Example of Internet](./images/webWorking.png)

**User Interface:**

The user interface consists of all the visual elements within the browser, like buttons, tabs, and the address bar. It's important to note that it represents only the browser's UI, not the website's UI.

**Browser Engine:**

The browser engine executes commands initiated by the user through the UI. It handles tasks such as navigating between pages when you click the back or refresh button.

**Data Persistence:**

Data persistence is responsible for storing data locally, including cookies and local storage, which are essential for maintaining user sessions and preferences.

**Rendering Engine:**

The rendering engine is the core of a browser. It takes care of rendering the actual website content, including HTML, CSS, and JavaScript. This is where the magic happens, as it transforms code into the visual web pages we see.

**Networking:**

Networking manages network requests between the browser and web servers. It retrieves the website's resources, such as images and scripts, from remote servers.

**JavaScript Interpreter:**

The JavaScript interpreter interprets and executes JavaScript code on web pages. It's a crucial component for adding interactivity and dynamic behavior to websites.

**UI Backend:**

The UI backend handles user interface elements that can't be classified elsewhere, like pop-up windows.

### Loading a Website

**Step 1: Typing a Web Address:**

It all begins when a user types a web address, such as "google.com," into the browser's address bar. At this point, the browser doesn't understand this human-readable address.

**Step 2: DNS Resolution:**

The browser needs to translate the human-readable address into an IP address that computers can understand. It sends a request to a DNS server, acting like a dictionary that provides the IP address corresponding to the entered address.

**Step 3: Retrieving Website Data:**

Once the browser obtains the IP address, it connects to the web server at that address. The server then sends back the HTML, CSS, and JavaScript files required to display the website.

### Creating the DOM Tree

**Step 4: Parsing HTML:**

The browser parses the HTML code and creates a Document Object Model (DOM) tree. The DOM tree represents the structure of the web page, with each HTML element corresponding to a node in the tree.

**Step 5: Parsing CSS:**

Similarly, the browser parses the CSS code, creating a CSS Object Model (CSSOM). This information is crucial for styling the web page.

**Step 6: Combining for Rendering:**

The DOM tree and CSSOM combine to form a render tree. This render tree represents the web page's layout, including the visible elements.

### Layout and Painting

**Step 7: Layout:**

The browser calculates the position and size of each element in the render tree during the layout process. This ensures that everything is correctly arranged on the page.

**Step 8: Painting:**

Finally, the browser paints the pixels on the screen, displaying the web page. It uses a "dirty bit" system to update only elements that need changes, avoiding unnecessary re-layout and repaints.

**Resources**

- [(Video)How Do Web Browsers Work?](https://www.youtube.com/watch?v=WjDrMKZWCt0)


