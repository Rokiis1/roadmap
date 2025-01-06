<!-- markdownlint-disable MD033 -->

# Content of Table

- [Types of Testing](#types-of-testing)
  - [Dynamic Testing](#dynamic-testing)
  - [Static Testing](#static-testing)
- [Summarize](#summarize)

# Types of Testing

**Explanation:**

- **Dynamic Testing:** Involves executing the software to validate its behavior.
  - **Purpose:** To find defects by executing the code.
  - **Techniques:** Functional testing, non-functional testing.

- **Static Testing:** Involves reviewing documentation and code without executing the software.
  - **Purpose:** To find defects early in the development process.
  - **Techniques:** Manual reviews, static analysis using tools.

## Dynamic Testing

**Explanation:**

Dynamic testing involves methods used in software development that require the execution of the software. These methods are used to validate both the functional and non-functional behavior of software. They are often used in conjunction with static testing methods, which do not require executing the software.

<details>
    <summary>Overview:</summary>

### Functional Testing

**Explanation:**

Functional testing is performed to verify that each function of the software application behaves as specified in the requirement document.

<details>
    <summary>Overview:</summary>

- **Unit Testing:** Involves testing individual components of the software. This is usually done by the developers themselves.
  - **Defects Found:** Logic errors, calculation mistakes, boundary issues, and data handling problems.

- **Integration Testing:** Involves testing the interaction between different software modules.
  - **Defects Found:** Interface mismatches, data flow issues, integration logic errors.

- **System Testing:** Involves testing the entire system as a whole to check the requirements.
  - **Defects Found:** System-level functional issues, end-to-end functional issues.

- **Acceptance Testing:** The final level of testing to verify if the system meets the customer requirements.
  - **Defects Found:** Requirement mismatches, missing functionality, compliance issues.

</details>

### Non-functional Testing

**Explanation:**

Non-functional testing is performed to check the non-functional aspects of a software application. It focuses on how the system performs rather than specific behaviors.

<details>
    <summary>Overview:</summary>

- **Performance Testing:** Checks how a system performs under a particular load.
  - **Defects Found:** Performance issues, slow response times, resource utilization issues.
- **Usability Testing:** Checks the user-friendliness of the software to improve better user-experience.
  - **Defects Found:** Poor navigation, confusing user interface, accessibility issues.
- **Security Testing (Penetration Testing):** Checks if the system is secure from external threats and vulnerabilities.
  - **Defects Found:** SQL injection, cross-site scripting (XSS), unauthorized access.
- **Compatibility Testing:** Ensures that the software can run in different environments (different hardware, operating systems, browsers).
  - **Defects Found:** Rendering issues, functionality issues on specific platforms, browser compatibility issues.

</details>

<details>

## Static Testing

**Explanation:**

Static testing involves validating the code, design documents, and software requirements without actually executing the software.

<details>
    <summary>Overview:</summary>

1. **Benefits of Early and Frequent Stakeholder Feedback:** Getting feedback from stakeholders early and often can help catch misunderstandings or errors in the requirements or design before coding begins.
2. **Review Process Activities:** The review process typically involves planning the review, conducting the review, reporting the results, and taking any necessary follow-up actions.
3. **Review Types:** There are several types of reviews, including informal reviews, walkthroughs, technical reviews, and inspections.
4. **Checklist-based Reviewing:** Reviewers use a checklist of common errors to guide their review.
5. **Scenario-based Reviewing:** Reviewers use a set of predefined scenarios to guide their review.
6. **Static Analysis:** Tools are used to analyze code for potential errors and security vulnerabilities.
7. **Model-Based Analysis:** Involves analyzing various models of the software to identify errors, inconsistencies, or areas for improvement. These models can include diagrams and representations that illustrate different aspects of the software system.

</details>

## Summarize

- **Dynamic Testing:** Involves executing the software to find defects. Includes functional testing (unit, integration, system, acceptance) and non-functional testing (performance, usability, security, compatibility).

- **Static Testing:** Involves reviewing documentation and code without executing the software. Includes manual reviews, static analysis, and model-based analysis.

**Functional Testing:** Verifies that software functions as specified.
Non-functional Testing: Checks performance, usability, security, and compatibility.

**Static Analysis:** Uses tools to find potential errors and security
vulnerabilities early in the development process.
