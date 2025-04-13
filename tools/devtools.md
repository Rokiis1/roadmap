<!-- markdownlint-disable MD033 -->
# Table of Content: DevTools

- [Device toggler](#device-toggler)
- [Network](#network)
- [Application](#application)
- [Lighthose](#lighthouse)

## Device toggler

**Explanation:**

Allows you to simulate different devices and screen resolutions. This is useful for testing responsive design and ensuring your application behaves correctly on various screen sizes and device orientations.

<details>
    <summary>Overview:</summary>

- **Responsive Testing:** Emulate mobile, tablet, and desktop devices to see how your layout adapts.

- **Custom Resolutions:** Set custom screen dimensions to mimic lesser-known devices or edge cases.

</details>

## Network

**Explanation:**

Network requests made by your web application. It helps both developers and testers monitor resource loads, diagnose performance issues, and troubleshoot error responses.

<details>
    <summary>Overview:</summary>

- **Request Details:** Review all HTTP/HTTPS requests made by the application, including methods, URLs, status codes, and response times.

- **Performance Insights:** Analyze load times for each resource to identify bottlenecks in page rendering and data fetching.

- **Error Analysis:** Automatically flag failed requests or server errors (404, 500) to help pinpoint issues early.

- **Resource Content:** Inspect the headers, payload, and response body of each request to verify that the correct data is being sent and received.

- **Throttling Capabilities:** Simulate various network speeds to test how your application behaves under different connectivity conditions.

- **Security Checks:** Confirm that requests, especially those handling sensitive data, use secure protocols (HTTPS) and proper headers.

</details>

## Application

**Explanation:**

Various assets, storage, and resources used by your web application. It enables developers and testers to inspect and manage components that support the app's functionality.

<details>
    <summary>Overview:</summary>

- **Storage Inspection:** View and manage data stored in Local Storage, Session Storage, Cookies. This helps verify how and where your application persists its data.

- **Cache Management:** Inspect the Cache Storage to ensure that service workers are correctly caching resources, which is crucial for offline capability and performance.

- **Service Workers:** Monitor service workers registration, status, and their activities, such as caching and background sync. This ensures that progressive web app features are properly implemented.

</details>

## Lighthouse

**Explanation:**

Lighthouse is an automated tool integrated into Chrome DevTools that helps you audit your web application's performance, accessibility, SEO, and best practices. It generates detailed reports that identify issues and recommend improvements across different aspects of your site.

<details>
    <summary>Overview:</summary>

- **Performance Audits:** Analyze loading speed, time-to-interactive, and other performance indicators to identify bottlenecks.

- **Accessibility Checks:** Ensure your application is usable by people with disabilities by detecting potential issues in your code.

- **SEO Analysis:** Validate that your site follows SEO best practices to boost visibility in search engines.

- **Best Practices:** Identify areas where your application deviates from modern web development standards, including security and optimization.

</details>
