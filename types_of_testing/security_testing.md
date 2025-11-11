<!-- markdownlint-disable MD033 -->
# Content of Table: Security Testing

- [Introduction to Security Testing](#introduction-to-security-testing)
- [Why Attacks Happen?](#why-attacks-happen)
- [The CIA Triad](#the-cia-triad)
- [Attack Types](#attack-types)
- [Common Security Risks for Testing](#common-security-risks-for-testing)
- [Regulatory Compliance Requirements](#regulatory-compliance-requirements)
- [Threat Modeling Basics](#threat-modeling-basics)
- [Security in the Software Testing Life Cycle (STLC)](#security-in-the-software-testing-life-cycle-stlc)

## Introduction to Security Testing

<details>
    <summary>Overview:</summary>

Security testing is the process of evaluating a software system to ensure it is protected against **threats and vulnerabilities**. For **The QA team**, this means going beyond functional checks to verify that the application behaves securely in both expected and unexpected scenarios. Security is no longer the sole responsibility of specialized teams - **QA testers’ role is identifying issues early in the lifecycle**.

Without proper security testing, serious flaws can go unnoticed and cause significant risks in production, such as:

- **Broken authentication**  
- **Exposure of sensitive data**  
- **Improper access control**

The primary goal of security testing is to ensure that the application has the necessary **safeguards to prevent misuse or attack**. This involves verifying not just the presence of **security controls**, but also their **correct implementation and behavior**. By proactively testing these areas, **QA teams help reduce the risk of breaches** and protect both the system and its users.

**Key areas to validate include:**

- **Secure authentication** (login and password handling)  
- **Role-based access control**  
- **Input validation** to prevent injection attacks  
- **Safe session handling** (timeouts, secure cookies)  
- **Protection of sensitive data** (encryption, masking)

Despite its importance, security testing is often misunderstood. It’s commonly assumed that only **penetration testers** are responsible for it, or that it's only needed in **large, high-risk applications**. In reality, many common vulnerabilities - such as **weak input validation** or **insecure error messages** - can and should be identified during **standard QA testing**.

Security testing should not be treated as a **separate activity**. Instead, it should be **integrated throughout the QA lifecycle**. This includes:

- **Reviewing requirements** for missing security criteria  
- **Incorporating security checks** into test planning  
- **Validating behaviors** like session expiration, failed login attempts, and access control during functional testing

This continuous focus helps **embed security into the core of the quality process**.

QA testers don’t need to be **security engineers**, but they must be **security-aware**. Their responsibility is to verify that essential protections - such as **authentication mechanisms**, **data handling procedures**, and **access controls** - are functioning as intended. When done right, security testing becomes a **natural extension of QA**, ensuring that the final product is not only **reliable**, but also **safe**, **resilient**, and **trustworthy** for real-world use.

</details>

## Why Attacks Happen?

<details>
    <summary>Overview:</summary>

Understanding why attackers target systems helps **QA testers** think critically about what needs to be protected and why. Attacks don’t happen randomly - they’re usually driven by **opportunity**, **weakness**, and **motivation**.

Attackers may be motivated by several goals:

- **Financial gain** - Most real-world attacks aim to steal data such as **credit card numbers**, **credentials**, or other **sensitive information** that can be sold or exploited.
- **Reputation damage** - **Hacktivists** or **competitors** may attempt to deface or disrupt services to harm an organization’s credibility.
- **Data theft or espionage** - **Intellectual property**, **internal communications**, or **trade secrets** can be valuable targets for attackers.
- **Fun or challenge** - Some individuals (often called **script kiddies**) launch attacks just to experiment or prove their skills.

Systems become targets for various reasons:

- **Public exposure** - **Web applications** and **APIs** accessible from the internet are frequent targets due to their visibility.
- **Known vulnerabilities** - Attackers commonly scan for systems that haven’t **patched** widely known **security flaws**.
- **Weak defenses** - Poor **access controls**, **outdated software**, or lack of **encryption** provide easy entry points.
- **Human error** - **Misconfigured servers**, **exposed debug tools**, or **overly permissive settings** can unintentionally open doors to attackers.

</details>

## The CIA Triad

<details>
    <summary>Overview:</summary>

The **CIA Triad** is a foundational model in **information security** that defines three key goals every **secure system** should achieve:

- **Confidentiality:** Ensuring that **sensitive information** is accessible only to **authorized users and systems**. This means protecting data from **unauthorized access or disclosure**. Examples include **encryption** and **strong access controls**.

- **Integrity:** Ensuring that data remains **accurate, consistent, and unaltered** except by **authorized actions**. This prevents **unauthorized modification or tampering** of information. Techniques like **checksums, hashes, and audit trails** support integrity.

- **Availability:** Ensuring that **systems and data** are **accessible and usable** when needed by **authorized users**. This involves preventing outages or disruptions caused by **attacks, failures, or accidents**. Examples include **backups, redundancy, and DoS attack protections**.

For **QA testers**, understanding the CIA Triad helps in designing and executing **security verification tests** that cover:

- Who can access data and how (**Confidentiality**)  
- Whether data stays correct and trustworthy (**Integrity**)  
- Whether the application remains responsive and available (**Availability**)

</details>

## Attack Types

<details>
    <summary>Overview:</summary>

In security testing, it’s important to understand how different types of attacks can target a system. These are commonly grouped into two classifications: **passive vs active attacks** and **internal vs external threats**.

**Passive attacks** involve observing or monitoring systems without interfering. The attacker’s goal is to silently collect information, such as through eavesdropping or traffic analysis. These attacks are often hard to detect because they don’t modify any data or system behavior. Examples include sniffing unencrypted data or monitoring communication channels.

In contrast, **active attacks** attempt to directly alter, disrupt, or damage the system. These are more aggressive and typically easier to detect. Examples include injecting malicious input, modifying files or configurations, or launching denial-of-service (DoS) attacks that overload the system and make it unavailable.

Another important distinction is based on the origin of the threat:

- **Internal attacks** come from users inside the organization who already have some level of authorized access. These attacks may be intentional (privilege abuse) or unintentional (careless mistakes), but they can cause significant damage.

- **External attacks** originate from outside the organization. These attackers do not have authorized access and typically try to break in through exposed interfaces, public APIs, or insecure authentication mechanisms. Common examples include brute-force login attempts or exploitation of known software vulnerabilities.

</details>

## Common Security Risks for Testing

<details>
    <summary>Overview:</summary>

**QA testers should focus on practical, testable vulnerabilities typically found in web applications**. The [**OWASP Top 10**](https://owasp.org/www-project-top-ten/) is the most widely accepted industry standard that categorizes the most critical security risks to web applications.

- **Authentication & Access Control**: This involves verifying that users are who they claim to be and that they only have access to authorized resources.

    <details>
       <summary>Notes:</summary>

    1. **Broken Authentication**: Weak or flawed login mechanisms that may allow attackers to bypass authentication controls.

        <details>
           <summary>Examples:</summary>

        - **Brute-Force Attack Simulation:** To test for broken authentication vulnerabilities, simulate a brute-force attack by attempting multiple login attempts using a list of common or leaked passwords for a known username. Use tools or script to send repeated login requests. Monitor how the system responds to these rapid failed attempts ideally, it should enforce protective measures such as account lockout, implement rate limiting, or present a CAPTCHA challenge after a specified number of consecutive failures.

            <details>
               <summary>Snippet:</summary>

            1. Launch ZAP and configure browser proxy
            2. Manual exploration to capture invalid login request
            3. Identify the login endpoint
            4. Set up Fuzzing Attack
            5. Configure fuzzing parameters
            6. Run the fuzzer
            7. Analyze results

            </details>

        - **Session Fixation Test:** To verify the resilience of session management, test if the session identifier is properly renewed after authentication. Begin by setting a known session cookie before login, then log in with valid credentials to see if the system issues a new session ID. If the session token remains unchanged, it may indicate a vulnerability that allows an attacker to hijack the session after authentication.

            <details>
               <summary>Snippet:</summary>

            1. Capture a Session Cookie Before Login `Cookie: PHPSESSID=attacker123`
            2. Log In with Valid Credentials
            3. Verify Session ID Behavior

            </details>

        </details>

    2. **Session Management Issues**: Problems such as missing timeouts or insecure cookie settings that can lead to session hijacking.

        <details>
           <summary>Examples:</summary>

        - **Inactive Session Timeout Test:** Log in with valid credentials and leave the session idle for longer than the expected inactivity timeout. Verify that the application automatically logs the user out or requires re-authentication, ensuring that stale sessions are not left open.

        - **Cookie Security Attribute Check:** After a successful login, inspect the session cookies using browser developer tools. Confirm that the cookies include security flags like `HttpOnly` and `Secure`. The absence of these attributes makes it easier for attackers to steal session tokens via XSS or other methods.

        </details>

    3. **Insecure Direct Object References (IDOR)**: Vulnerabilities where attackers manipulate identifiers (like URLs or IDs) to access data they shouldn’t.

        <details>
           <summary>Examples:</summary>

        - **URL Parameter Manipulation:** If a URL contains an identifier (/profile?id=123), manually change the value (to /profile?id=124) and check if you can access data that isn’t authorized for the current user.

        - **API Endpoint Testing:** For an API endpoint like GET /orders/{order_id}, attempt to access orders not belonging to the authenticated user by modifying the {order_id} value. Verify if access controls correctly restrict data to the rightful owner.

        - **Indirect Object References:** Evaluate whether sensitive identifiers should be obfuscated or hashed. Implementing indirect object references (such as hashed or encoded IDs) can add a layer of protection by making it harder for attackers to guess valid identifiers, though proper authorization checks must still be enforced.

        </details>

    4. **Improper Access Control**: Inadequate enforcement of user permissions, allowing users to access data or functions beyond what they are authorized to.

        <details>
          <summary>Examples:</summary>

        - **Role Escalation Testing:** Log in as a standard user and attempt to access features or endpoints reserved for higher-privileged roles (admin dashboards). Verify that unauthorized access is blocked.

        - **Vertical Privilege Escalation:** Test that users with lower privileges cannot perform administrative actions such as modifying user roles, configurations, or sensitive data.

        - **Horizontal Privilege Escalation:** For multi-user environments, check if altering URL or request parameters (changing user IDs) allows access to another user's data.

        - **UI Element Bypass:** Ensure that hidden or disabled UI elements (available only to specific roles) cannot be accessed directly through URL manipulation or API calls.

        </details>

    </details>

- **Input Validation & Injection**: This means ensuring that every input from a user is correctly validated and sanitized so that malicious payloads (like SQL commands or scripts) cannot be injected into the system. Testers verify that forms, APIs, and URL parameters handle both normal and unexpected data securely.

    <details>
       <summary>Notes:</summary>

    1. **Unvalidated Inputs**: Accepting untrusted input without proper validation may allow attackers to pass malicious data to the application.

        <details>
          <summary>Examples:</summary>

          - **Boundary Value Testing:** Input values that are unusually long, contain special characters, or are otherwise unexpected (extremely long strings, non-alphanumeric characters) to verify if the application handles them appropriately.

          - **Malformed Data Testing:** Enter data in an incorrect format (such as alphabetic characters in a numeric-only field) to see if the application properly rejects or sanitizes the input.

        </details>

    2. **SQL Injection (SQLi)**: Attackers craft input that is interpreted as part of an SQL query, potentially allowing unauthorized data access or manipulation.

        <details>
          <summary>Examples:</summary>

        - **Authentication Bypass:** Input payload: `' OR '1'='1` When entered in a login field, it could force the SQL query to always evaluate as true, bypassing authentication.

        - **Data Extraction:** Input payload: `' UNION SELECT username, password FROM users--` This attempts to merge results from a different query, possibly exposing sensitive information.

        - **Malicious Query Manipulation:** Input payload: `'; DROP TABLE users;--` In a poorly secured system, this might execute a destructive command, such as deleting a critical table.

        </details>

    3. **Cross-Site Scripting (XSS)**: Malicious scripts are injected into web pages, which then execute in the browsers of other users.

        <details>
          <summary>Examples:</summary>

        - **Reflected XSS:** Input payload: `<script>alert('XSS');</script>` When submitted via a search box or user input field, the application reflects the input without proper sanitization, causing the script to execute in the visitor's browser.

        - **Stored XSS:** Inject a malicious script into a persistent data field (such as a comment or forum post) where it is stored and later rendered to other users. When other users view the content, the script executes.

        - **DOM-based XSS:** Manipulate the document object model (DOM) by altering URL parameters or fragment identifiers that are processed by client-side scripts without proper sanitization, leading to execution of injected code.

        </details>

    </details>

- **Configuration & Data Exposure**: This focuses on maintaining secure system settings and protecting sensitive information. It involves verifying that administrative interfaces aren’t exposed, default credentials are changed, error messages don’t reveal internal details, and sensitive data is properly encrypted or masked.

    <details>
       <summary>Notes:</summary>

      1. **Security Misconfigurations**: Occur when systems are not securely configured—such as exposed admin panels, use of default credentials, or open services—that allow attackers to exploit unprotected interfaces.

        <details>
          <summary>Examples:</summary>
        
        - **Exposed Admin Panels:** Verify that administrative interfaces are not accessible via common, predictable URLs and require separate, strong authentication methods.

        - **Default Credentials:** Check that all default usernames, passwords, and API keys have been changed during deployment. Attempt logging in using common default credentials to ensure they have been replaced.

        - **Open Services and Ports:** Use network scanning tools (Nmap) to confirm that unnecessary ports or services are closed or properly secured to reduce the attack surface.
        
        </details>

      2. **Sensitive Data Exposure**: Happens when critical data like credentials, tokens, or personal information is poorly handled, for example through inadequate encryption or improper storage practices.

        <details>
          <summary>Examples:</summary>
        
        - **Inadequate Encryption:** Verify that sensitive data is encrypted both in transit (via TLS) and at rest using up-to-date, robust encryption algorithms. Test for weak or misconfigured encryption settings.

        - **Sensitive Data in Logs:** Check that sensitive information (such as passwords, tokens, or personal data) is not being logged in plaintext in application logs, error messages, or debugging outputs.

        - **Improper Data Storage:** Ensure that sensitive files, configuration data, and databases are stored securely with appropriate access controls and permissions, and that default settings exposing data have been mitigated.
        
        </details>

      3. **Improper Error Handling**: Involves providing detailed error messages that reveal technical details (stack traces or internal configurations), which can be leveraged by attackers to further compromise the system.

        <details>
          <summary>Examples:</summary>
        
        - **Verbose Error Messages in Production:** Check that production environments display generic error messages ("An error occurred. Please try again later.") rather than detailed stack traces or system information. Confirm that detailed error information is logged securely for developer review only.

        - **Debug Information Exposure:** Induce errors (such as 404 or 500 errors) intentionally and inspect the error pages. Ensure that they do not expose sensitive data like database queries, file paths, or software version numbers.

        - **Unhandled Exceptions:** Evaluate how the application handles unexpected failures. Verify that all exceptions are caught properly and that the error responses do not divulge internal implementation details.
        
        </details>

    </details>

- **Request Manipulation**: This area addresses scenarios where attackers might alter legitimate requests to perform unauthorized actions such as Cross-Site Request Forgery (CSRF). Testing ensures that proper tokens, headers, or origin checks are in place to confirm that requests are genuine and have not been tampered with.

    <details>
       <summary>Notes:</summary>

    1. **Cross-Site Request Forgery (CSRF)**: This vulnerability tricks an authenticated user's browser into performing unwanted actions on a trusted website. By leveraging the user's active session (through cookies), attackers can force actions like changing account settings or making transactions without the user's explicit consent. Effective testing includes verifying that the application implements anti-CSRF tokens, uses proper HTTP headers (like the SameSite attribute), and checks the request origin or referer.

      <details>
        <summary>Examples:</summary>
      
      - **Anti-CSRF Token Verification:** Inspect forms and state-changing endpoints to ensure they include a unique, unpredictable anti-CSRF token. Attempt to submit the form without the token or with an invalid token to verify that the request is rejected.

      - **SameSite Cookie Attribute Check:** Review session cookie settings using browser developer tools to confirm that the SameSite attribute is set (preferably "Strict" or "Lax") to minimize the risk of CSRF.

      - **Referer/Origin Header Validation:** Simulate requests from external origins and ensure that the application validates the Referer or Origin header, rejecting any requests that do not originate from a trusted source.
        
      </details>

    </details>

These issues are commonly found during functional, exploratory, or API testing, and should be part of a QA tester’s security checklist.

More advanced vulnerabilities - such as buffer overflows, race conditions, and memory corruption - typically require code-level access and are the responsibility of security engineers or specialized tools.

</details>

## Regulatory Compliance Requirements

<details>
    <summary>Overview:</summary>

Security testing must also consider **compliance with legal and industry regulations**. These frameworks are designed to protect sensitive data such as personal information, financial records, or health data. Failing to meet them can result in severe penalties, reputational damage, and legal action.

**Common regulations include:**

- **ISO/IEC 27001** - International standard for managing information security. Focuses on risk management, access control, and data protection.
- **PCI-DSS** - Required for any system that processes or stores credit card data. Includes requirements for encryption, authentication, and secure coding.
- **GDPR** (when working with EU users) - Protects personal data. Requires user consent, data minimization, and rights like data deletion.

**QA testers should validate:**

- That **personal and sensitive data** is properly protected (encryption, masking).
- That **user consent flows** are implemented where required.
- That **error messages and logs** don’t leak sensitive information.
- That **data retention policies** are correctly enforced.

</details>

## Threat Modeling Basics

<details>
    <summary>Overview:</summary>

**Threat modeling** is a proactive security activity that focuses on identifying and addressing potential **security risks** in an application - before they are exploited. For **the tester**, this means understanding how attackers think, what they might target, and how to test systems from a risk-based perspective.

Unlike reactive security testing, **threat modeling is done early**, ideally during design or requirement analysis phases. This helps teams **prevent vulnerabilities** rather than just detect them later.

Without threat modeling, teams may overlook:

- **Critical assets that need protection**  
- **Attack vectors exposed through common entry points**  
- **Design flaws in authentication or data flow**  
- **Risky assumptions in access control or error handling**

The goal of threat modeling is to identify **what can go wrong**, evaluate **how likely it is to happen**, and design **mitigations that reduce or eliminate those threats**.

**Core components of threat modeling include:**

- **Assets** - What are we protecting? (user data, credentials, API endpoints)  
- **Attackers** - Who might exploit the system? (external hackers, insiders, bots)  
- **Entry Points** - Where could attacks begin? (login forms, file uploads, unsecured APIs)  
- **Threats** - What could go wrong? (privilege escalation, data leaks, DoS attacks)  
- **Mitigations** - How do we prevent or contain it? (access control, input validation, logging)

Threat modeling helps QA teams **think beyond the happy path** and simulate **real-world abuse cases**. It encourages security-conscious test design, especially for **authentication**, **authorization**, and **data protection**.

**Frameworks for threat modeling:**

- **STRIDE** - Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege  
- **DREAD** - Damage, Reproducibility, Exploitability, Affected Users, Discoverability  
- **Attack Trees** - Diagram-based method to visualize how an attacker might reach a goal

</details>

## Security in the Software Testing Life Cycle (STLC)

<details>
    <summary>Overview:</summary>

Security should not be treated as a separate phase at the end of the testing process. Instead, it must be integrated into every stage of the **Software Testing Life Cycle (STLC)**. This approach ensures that **security risks are addressed early and continuously**, reducing the chances of vulnerabilities reaching production.

1. **Requirement Analysis** phase, security testing starts with a review of the project's security requirements. This means carefully examining both business and technical requirements to determine what needs to be protected such as **encryption**, **authentication**, **access control**, and **data privacy**. For example, you might review the documentation to ensure that sensitive data flows are properly identified, and that compliance mandates (like **GDPR**) and **audit requirements** are clearly defined.

    Next, it’s essential to ensure traceability by updating the **Requirement Traceability Matrix (RTM)** to include all security-specific requirements. This helps in mapping later test cases directly to the documented security needs.

    A component during this phase is **threat modeling**. Here, you identify the most valuable assets (such as user data or critical APIs), the likely attackers (external hackers or insider threats), and the entry points that could be exploited, such as vulnerable login pages or file upload forms. Using frameworks like **STRIDE**, **DREAD**, or **Attack Trees** can structure this analysis, providing a clear picture of potential threats like **SQL Injection** or **Cross-Site Scripting (XSS)**. Ultimately, this early analysis informs the test planning and design phases, ensuring that every security measure is aligned with the organization’s risk profile.

2. **Test Planning** phase, the security testing strategy is defined by establishing the scope and objectives. This involves outlining which security aspects such as **input validation**, **authorization**, and **session management** will be tested. At the same time, the team decides on the tools required for the effort (for instance, **OWASP ZAP** or **Burp Suite**) to facilitate automated scanning and thorough security testing.

    Additionally, a detailed **risk assessment** is conducted based on the threats identified during **threat modeling**. This assessment determines the potential impact and likelihood of each threat, thereby prioritizing security tests according to the highest risks.

    Finally, **effort estimation** is performed to allocate appropriate resources and schedule time for executing the security tests. The allocation is based on the determined risk level and the complexity of the required tests, ensuring that the organization is well prepared to detect and remediate vulnerabilities early in the development cycle.

3. **Test Design / Implementation** phase, you begin by mapping security test cases directly to the identified security requirements. For instance, you might design tests for **brute-force login simulation**, **session fixation**, **SQL Injection**, **XSS**, and **error message evaluation**. It’s essential to include both positive test cases (which confirm that the system behaves as expected under normal conditions) and negative test cases that simulate malicious, unexpected inputs.

    Additionally, you create **abuse case scenarios** to mimic potential attacker behavior. These scenarios involve simulating attempts to bypass **authentication**, manipulating URLs (to test for **IDOR** vulnerabilities), or injecting malicious payloads to observe the system’s response.

    Finally, integrate automated security testing tools into your test framework. This integration facilitates continuous monitoring of the application’s security posture and helps in quickly identifying new vulnerabilities as they arise. Tools like **OWASP ZAP** or **Burp Suite** can be configured to run automatically as part of your build pipeline, ensuring that security testing is an ongoing process throughout development.

4. **Test Environment Setup** phase, it's important to closely mimic secure production settings to ensure that security tests accurately reflect real-world scenarios. This means configuring the test environment so that it uses **HTTPS** for secure communication, enforces secure cookie settings, maintains proper **CORS configurations**, and implements **role-based access controls** just as in production.

5. **Test Execution** phase, both functional and non-functional tests are run concurrently to validate the application's behavior under normal and adversarial conditions. For example, you might perform tests for **input validation** on forms alongside attempts to execute **SQL Injection** or **XSS** attacks, ensuring that malicious inputs are properly handled. Additionally, session management is evaluated by simulating **session fixation** scenarios and verifying that the application enforces appropriate session timeouts.

    It's also important to combine **automated vulnerability scans** with manual exploratory testing. Automated tools can quickly identify known vulnerabilities, while manual testing allows you to verify techniques such as checking for **anti-CSRF tokens**, reviewing **error messages**, and testing **access controls** that may not be caught by automated scans alone.

    Throughout the testing process, maintaining detailed logs and collecting evidence is essential. Recording defects with clear, step-by-step evidence, along with an assessment of their potential risk impact, ensures that vulnerabilities can be efficiently remediated and re-tested.

6. **Test Closure** phase, the focus shifts to wrapping up the security testing efforts and ensuring that all findings are adequately addressed. First, it's essential to perform **Defect Analysis and Resolution** by ensuring that every security issue is tracked, prioritized based on risk, and fully resolved before the release. This guarantees that vulnerabilities are not left unaddressed.

    Next, compiling a **Security Test Summary** is crucial. This summary should include comprehensive results from all security tests along with recommendations for remediation. It serves as a key document for stakeholders to understand the security posture of the application at the time of release.

    Finally, conducting **Retrospectives** is a best practice during test closure. These retrospectives help capture lessons learned during the testing cycle and allow the team to update test cases and **threat models** for future cycles. This continuous improvement process ensures that the security testing process evolves along with emerging threats and changes in the application.

7. **Impact Analysis & Maintenance Testing** phase, security testing evolves from a one-time activity into an ongoing process. First, **Regression Testing** is re-run security tests whenever new features or patches are introduced to ensure that previous vulnerabilities are not inadvertently reintroduced into the codebase.

    Next, security testing should be seamlessly integrated into **Continuous Integration (CI/CD pipelines)**. This integration allows teams to detect and address security issues as early as possible in the development lifecycle, making remediation more efficient and less costly.

    Finally, the process involves regular **Evolution** of your security measures. Continuously update your **threat model** and security test cases to reflect new and emerging threats. This proactive approach ensures that your security posture adapts over time to the changing landscape of vulnerabilities.

</details>
