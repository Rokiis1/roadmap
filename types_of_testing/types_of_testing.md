<!-- markdownlint-disable MD033 -->

# Content of Table of the Types of Testing

- [Dynamic Testing](#dynamic-testing)
- [Static Testing](#static-testing)
- [Differences Between Static Testing and Dynamic Testing](#differences-between-static-testing-and-dynamic-testing)

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

- **Functional Testing**

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

- **Non-functional Testing**

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

## Static Testing

**Explanation:**

Static testing involves validating the code, design documents, and software requirements without actually executing the software. This type of testing is performed to identify defects early in the development process, ensuring that the work products meet the required standards and specifications.

<details>
    <summary>Overview:</summary>

1. **Early Detection of Defects**: Identifies potential quality issues before they become significant problems.

2. **Improved Understanding**: Helps the development team understand what they are building and ensures alignment with stakeholders' expectations.

3. **Cost and Time Savings**: Reduces the cost and effort required to fix defects by addressing them early.

4. **Enhanced Collaboration**: Promotes better collaboration between the development team and stakeholders.

5. **Quality Evaluation**: Provides the ability to evaluate the quality of work products and build confidence in them.

</details>

<details>
    <summary>Examples:</summary>

1. **Requirement Defects:**
    - **Inconsistencies:** One part of the requirements document states that the system should support up to 1000 concurrent users, while another part states that it should support up to 500 concurrent users.
    - **Ambiguities:** The requirement states, "The system should be fast." This is ambiguous because "fast" is not defined in measurable terms.
    - **Contradictions:** One requirement states that the user must be at least 18 years old to register, while another requirement states that users must be at least 21 years old to register.
    - **Omissions:** The requirements document specifies the need for user authentication but does not mention how password recovery should be handled.
    - **Inaccuracies:** The requirement states that the system should use a specific version of a software library that is no longer supported or available.
    - **Duplications:** The requirement "The system should generate monthly reports" is mentioned in multiple sections of the document, leading to potential confusion and redundancy.

2. **Design Defects:**
    - **Inefficient database structures:** The database design includes a single table with hundreds of columns, leading to slow query performance and difficulty in maintaining the database. A more efficient design would normalize the data into multiple related tables.
    - **Poor modularization:** The system's codebase is structured as a single monolithic application with tightly coupled components, making it difficult to maintain, test, and extend. A better approach would be to refactor the code into smaller, loosely coupled modules or services.

3. **Coding Defects:**
    - **Variables with undefined values:** A variable `total` is used in a calculation before it has been assigned a value, leading to unpredictable results.
    - **Undeclared variables:** A variable `count` is used in the code without being declared, causing a runtime error.
    - **Unreachable or duplicated code:** A block of code is placed after a return statement, making it unreachable.
    - **Excessive code complexity:** A method contains deeply nested loops and conditionals, making it difficult to understand and maintain.

4. **Coding Standards:**
    - **Lack of adherence to naming conventions:** Variables and methods are named inconsistently, making the code harder to read and maintain.
    - **Deviation from coding standards:** The code does not follow the project's established coding standards, such as indentation, spacing, or brace placement.

5. **Interface Defects:**
    - **Mismatching:** Numbers, types, or order of parameters between calling and called structures

6. **Security Vulnerabilities:**
    - **SQL Injection:** SQL injection occurs when an attacker is able to insert or manipulate SQL queries in an application's input fields. This can allow the attacker to execute arbitrary SQL commands, potentially gaining unauthorized access to the database, retrieving sensitive information, or modifying/deleting data.

7. **Test Basis Coverage and Traceability:**
    - **Gaps or inaccuracies between test cases and acceptance criteria:**  A test case is written to verify a feature, but it does not fully cover the acceptance criteria specified in the requirements.
    - **Missing tests for specific requirements:** A requirement specifies a feature, but there are no test cases written to verify that feature.

</details>

## Differences Between Static Testing and Dynamic Testing

<details>
    <summary>Overview:</summary>

1. **Nature of Testing:**
    - **Static Testing:** Involves reviewing work products without executing the code. It includes activities such as reviews and static analysis.
    - **Dynamic Testing:** Involves executing the software to identify defects. It includes activities such as functional testing, performance testing, and security testing.

2. **Defect Detection:**
    - **Static Testing:** Directly identifies defects in work products, such as inconsistencies in requirements or design flaws.
    - **Dynamic Testing:** Identifies failures caused by defects, which are then analyzed to determine the root cause.

3. **Applicability:**
    - **Static Testing:** Can be applied to non-executable work products, such as requirements, design documents, and user manuals.
    - **Dynamic Testing:** Can only be applied to executable work products, such as the software code.

4. **Quality Characteristics:**
    - **Static Testing:** Measures quality characteristics that are not dependent on executing the code, such as maintainability and readability.
    - **Dynamic Testing:** Measures quality characteristics that are dependent on executing the code, such as performance and security.

5. **Efficiency:**
    - **Static Testing:** More easily detects defects in rarely executed or hard-to-reach paths through the code.
    - **Dynamic Testing:** May not cover all paths through the code, especially those that are rarely executed.

6. **Cost and Time:**
    - **Static Testing:** Detects defects early in the SDLC, reducing the cost and effort required to fix them.
    - **Dynamic Testing:** Identifies defects later in the SDLC, which may be more costly and time-consuming to fix.

</details>
