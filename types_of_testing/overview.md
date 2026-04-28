# Content of Table of the Types of Testing Overview

- [Dynamic Testing](#dynamic-testing)
- [Static Testing](#static-testing)

In previous sections, we explored what testing is and where it is performed within the system. Now we look at another important classification based on **whether the software is executed during testing**.

From this perspective, testing can be divided into two main types **dynamic testing** and **static testing**.

Dynamic testing involves executing the system and observing its behavior, while static testing focuses on evaluating artifacts without running the software.

These two approaches complement each other and are both essential for ensuring software quality.

## Dynamic Testing

Dynamic testing involves methods that require the **execution of the software** in order to **find defects**. In **dynamic testing**, the system is run, and its behavior is observed and evaluated.

Dynamic testing is used to validate both **functional** and **non-functional** aspects of software.

When we perform dynamic testing, we are checking what the system does and how it behaves during execution.

Dynamic testing can be **divided into two main categories**.

**Functional Testing** verifies what the system should do. It checks whether the software behaves according to the specifications and requirements.

The objective of functional testing is to ensure that each function of the system **operates in accordance with the required specification**.

The focus is on the **correctness**, **appropriateness** of system behavior. In simple words, functional testing answers the question. **Does the system do what it is supposed to do?**

Examples of functional testing include checking **login functionality**, **validating form submissions**, **verifying calculations** and **confirming business rules**.

**Non-functional Testing** testing focuses on how the system performs rather than what specific functions it provides.

The objective of **non-functional** testing is to evaluate attributes such as **performance**, **usability**, **reliability**, **scalability**, **security** and **compatibility**.

The focus is on **how well** the system performs its functions.

Examples include performance testing (**such as load testing**), **reliability testing** (stability and recovery behavior), **scalability testing** (growth under increasing load), security testing (**OWASP vulnerability categories**), usability testing (**including accessibility testing**), and **compatibility testing** across browsers, devices and operating systems.

Dynamic testing is essential because many defects can only be detected when the system is actually executed.

## Static Testing

Static testing involves validating software work products without executing the software.

Instead of running the code, static testing focuses on reviewing and **analyzing artifacts** (*requirements, design documents, source code, user manuals*)

The main goal of **static testing** is to detect defects as early as possible.

Static testing helps identify problems such as **ambiguous requirements**, **design inconsistencies**, **coding mistakes** before they become runtime failures.

By **finding defects early**, static testing **saves time**.

Static testing also improves **Reviews**.

Static testing contributes to **quality assurance** because it improves the **maintainability**, **readability**, and **reliability** of work products.

Static testing can be performed using both **reviews** and **automated tools**.

Automated static analysis tools examine code to check **coding standards**, detect potential **security vulnerabilities**, and **identify risks**.
