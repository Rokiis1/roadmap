<!-- markdownlint-disable MD033 -->
# Content of Table on the Dynamic non-functional testing

- [Compatibility Testing](#compatibility-testing)
- [Usability Testing](#usability-testing)
- [Performance Testing](#performance-testing)
- [Security Testing](#security-testing)

## Compatibility Testing

## Usability Testing

**Explanation:**

Determinate how easily users can navigate and interact with the interface, identify any usability issues.

And where this technique is commonly used:

- **Web development and design**
- **Mobile app development**
- **Software applications**

<details>
    <summary>Overview:</summary>

- **Navigation:** How easily users can move around the web page.

  - **Menus:** Logically organized and easy to understand.
  - **Links:** Clearly labeled and do they lead to the expected destinations.
  - **Buttons:** Easily identifiable and do they perform the expected actions.
  - **Search Functionality:** Does it return relevant results.

- **Content:** Evaluating the clarity, conciseness, and relevance of the text, images, and other media on the web page.

  - **Text:** Is the text easy to read and grammatically correct.
  - **Headings and Subheadings:** Are headings and subheadings organize.
  - **Images:** Relevant, high-quality, and do they have descriptive alt text.
  - **Videos and Multimedia:** Videos and other multimedia elements relevant.

- **Layout and Design:** Visual appeal and organization of the web page.

  - **Consistency:** Design elements (colors, fonts, buttons) consistent throughout the site.
  - **Alignment:** Elements properly aligned.

- **Responsiveness:** testing how well the web page adapts to different devices and screen sizes.

  - **Mobile-Friendly Design:** Site work well on smartphones and tablets.
  - **Media Queries:** Different styles for different devices.
  - **Touchscreen Compatibility:** Interactive elements easy to use on touchscreens.

- **Accessibility:**  

  - **Screen Readers:** Compatible with screen readers.
  - **Keyboard Navigation:** Users navigate the site using only a keyboard.
  - **Alt Text:** Images and other non-text content provided with descriptive alt text.

    **Examples:**

      ```html
      <img src="image.jpg" alt="A descriptive text about the image">
      ```

    **Tools:**

    - **WAVE (Web Accessibility Evaluation Tool)**

  - **Color Contrast:** Is there sufficient contrast between text and background colors.

    **Tools:**

    - **Contrast Checker - WebAIM**

  - **ARIA Landmarks:** Used to improve navigation for assistive technologies.

    - **Roles:** Roles define the type of element and its purpose on the page.

    ```html
    <header role="banner">
    <nav role="navigation">
    <main role="main">
    <footer role="contentinfo">
    ```

</details>

## Performance Testing

**Explanation:**

Performance testing is crucial for ensuring the reliability and efficiency of a system, especially during high-stress situations like a product release. It involves various types of tests to simulate real user behavior and measure the system's performance under different conditions.

<details>
    <summary>Overview:</summary>

1. **Load Testing:** Evaluates the system's performance under normal load conditions to ensure it meets predefined criteria.

    ![alt text](./assets/images/load_testing.png)

    <details>
      <summary>Overview:</summary>
  
    - Load testing involves simulating normal traffic to the API to ensure it meets acceptable response times and success rates.

    - It helps identify how the system performs under expected user load and can be integrated into CI/CD pipelines to assess the impact of changes.

    - Success criteria are often defined in terms of response time and percentage of successful requests, 99% of requests should return successfully within 200 milliseconds.

    - Load testing provides initial indications of system performance and helps ensure stability under normal operating conditions.

    </details>

    <details>
      <summary>Examples:</summary>

      1. **Online Store Launch:**

          - Imagine you are launching a new online store. You expect a certain number of customers to visit and make purchases. Load testing helps you ensure that your website can handle this expected traffic.

      2. **API Response Time Test:**

          - You can test with 10 virtual users and check that the API responses are under 200 milliseconds. This test can be run for 5 minutes to get an initial indication of how the system performs under normal conditions.
  
      </details>

2. **Stress Testing:** Gradually increases the load to determine how the system behaves under extreme conditions.

    ![alt text](./assets/images/stress_testing.png)

    <details>
      <summary>Overview:</summary>

    - Stress testing involves pushing the system beyond its normal operational capacity to identify its breaking point and observe how it handles high-stress situations.

    - This type of testing helps determine the system's robustness and its ability to maintain acceptable performance levels under extreme conditions.

    - It can reveal potential bottlenecks, performance degradation, and failure points that might not be apparent under normal load conditions.

    - Stress testing is useful for understanding the limits of your system and ensuring it can handle unexpected spikes in traffic or usage.

    </details>

    <details>
      <summary>Examples:</summary>

    1. **Concert Ticket Sales:**

        - Imagine you are managing a ticket sales platform for a popular concert. When tickets go on sale, there is a sudden surge in traffic. Stress testing helps you ensure that your system can handle this sudden spike in user activity without crashing.

    2. **Gradual Load Increase Test:**

        - You can gradually ramp up the number of virtual users from 100 to 500, monitoring how the system performs at each level. This helps identify at what point the system starts to degrade and ensures it can handle high-stress conditions.

    </details>

3. **Spike Testing:** Tests the system's response to sudden, high loads over a short period.

    ![alt text](./assets/images/spike_testing.png)

    <details>
      <summary>Overview:</summary>

    - Spike testing involves subjecting the system to a sudden and extreme increase in load to observe how it handles the abrupt change.

    - This type of testing helps determine the system's ability to recover quickly and maintain performance during unexpected spikes in traffic.

    - It can reveal issues such as system crashes, slowdowns, or failures that occur when the load suddenly increases.

    - Spike testing is useful for applications that experience sudden bursts of traffic, such as during flash sales or viral events.

    </details>

    <details>
      <summary>Examples:</summary>

    1. **Flash Sale Event**

        - Imagine you are running an e-commerce platform and announce a flash sale. Spike testing helps you ensure that your system can handle the sudden influx of users trying to make purchases at the same time.

    2. **Sudden Load Increase Test**

        - You can start with a low number of virtual users and then drastically increase the number of users over a short period. This helps you observe how the system handles the sudden spike and whether it can maintain performance.

    </details>

4. **Soak Testing:** Runs tests over an extended period to identify issues like memory leaks and ensure stable performance.

    ![alt text](./assets/images/soak_testing.png)

    <details>
      <summary>Overview:</summary>

    - Soak testing involves running the system under a significant load for an extended period to identify performance issues that may not be apparent in shorter tests.

    - This type of testing helps detect problems such as memory leaks, resource exhaustion, and performance degradation over time.

    - It ensures that the system can maintain stable performance and resource usage during prolonged periods of operation.

    - Soak testing is particularly important for applications that need to run continuously without downtime, such as servers and critical services.

    </details>

    <details>
      <summary>Examples:</summary>

    1. **Long-Term Application Stability**

        - Imagine you are running a financial application that needs to operate continuously. Soak testing helps you ensure that the application remains stable and performs well over several days or weeks without issues.

    2. **Extended Load Test**

        - You can run a test with a consistent load of virtual users for 24 hours or more, monitoring for issues like memory leaks and CPU usage. This helps ensure that the system can handle long-term usage without performance degradation.

    </details>

</details>

## Security Testing

**Explanation:**

Security testing helps you find weaknesses in your software, systems, or networks so you can fix them before attackers find and exploit them.

<details>
    <summary>Overview:</summary>

- **Risk Identification:** Finding and listing possible weaknesses that could be attacked. Think of it as checking what treasures you have that might attract thieves.

  <details>
    <summary>Overview:</summary>

  - **Asset Inventory:** Identify the key assets within the application, such as databases, authentication modules, and sensitive user data. These are the "treasures" that could attract attackers.

  - **Vulnerability Listing:** Identify the key assets within the application—such as databases, authentication modules, and sensitive user data that could attract attackers. Document potential weaknesses or gaps in the system. This process may involve reviewing the codebase, configurations, or past incident reports to list common vulnerabilities. Consider including frameworks like OWASP Top 10 (for web), OWASP Mobile Top 10 (for mobile), Common Weakness Enumeration (CWE), SANS Top 25, Network Vulnerability Lists, and API Security Vulnerabilities if relevant.

  - **Threat Analysis:** Consider how each identified vulnerability might be exploited by an attacker. Ask questions like, "If this vulnerability is exploited, what will the attacker gain?" or "Which weaknesses provide the easiest access?"

  </details>

- **Risk Assessment:** Evaluating the identified risks to decide which vulnerabilities need attention first. Think of it as weighing which unlocked doors would cause the most damage if broken into.

  <details>
    <summary>Overview:</summary>

  - **Likelihood:** Estimate how probable it is for each vulnerability to be exploited.

  - **Impact:** Determine the potential damage or loss if the vulnerability were exploited.

  - **Prioritization:** Combine likelihood and impact to rank the risks, ensuring that high-risk vulnerabilities receive the most attention.
  
  - **Risk Register:** Document the risks, including descriptions, likelihood, impact ratings, and planned mitigation strategies. This record helps keep track of testing focus and remediation efforts.

  - **Guiding Testing Focus:** Use the risk assessment outcomes to direct security testing efforts toward the most critical areas first.

  </details>

- **Threat Modeling:** Looking at your system from an attacker's point of view. This means imagining how someone could use the weaknesses to get in and cause harm.

  <details>
    <summary>Overview:</summary>
  
  - **Understanding the System Architecture:** Create diagrams that outline how data flows through the system. Identify components like user interfaces, databases, APIs, and third-party integrations.

  - **Identifying Entry Points and Interfaces:** List all points where attackers might interact with your system, such as login pages, APIs, and data input forms.

  - **Listing Potential Threats:** Consider what an attacker could do at each entry point. For example, they might perform SQL injections, exploit misconfigurations, or abuse weak authentication.

  - **Evaluating Attack Scenarios:** Imagine different scenarios where a threat could be exploited. How might an attacker move laterally, escalate privileges, or access sensitive data?

  - **Determining Mitigation Strategies:** Identify controls and safeguards that could prevent, detect, or mitigate the attack scenarios identified.
  
  </details>

- **Vulnerability Assessment:** Using tools (and sometimes manual checks) to scan your system for problems. This is like running a health check to see if everything is in good shape.

  <details>
    <summary>Overview:</summary>

  - **Tools Selection:** Choose appropriate automated tools (OWASP ZAP) that match your application type and environment.

  - **Automated Scanning:** Run these tools to scan your system and automatically identify common vulnerabilities such as SQL injections, cross-site scripting, or misconfigurations.
  
  </details>

- **Penetration Testing:** Acting like a real hacker to try to break in. This controlled test helps you understand which weak spots can really be exploited.

- **Compliance Verification:** Making sure your system follows all the important rules, standards, or laws (like a checklist). This helps in keeping things secure and legally compliant.

</details>
