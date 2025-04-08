<!-- markdownlint-disable MD033 -->
# Content of Table of the Types of Testing

- [Dynamic Testing](#dynamic-testing)
- [Static Testing](#static-testing)
- [Differences Between Static Testing and Dynamic Testing](#differences-between-static-testing-and-dynamic-testing)

## Dynamic Testing

**Explanation:**

Dynamic testing involves methods used in software development that require the execution of the software to find defects. These methods are used to validate both the functional and non-functional behavior of software.

<details>
    <summary>Overview:</summary>

- **Functional Testing**

  **Explanation:**

  Verifying what the system should do by checking its functionality against the specifications.

  <details>
      <summary>Overview:</summary>

  - **Objective:** Verify that each function of the system operates in conformance with the required specification.
  
  - **Focus:** Checks the "what" of system behavior—functional correctness, completeness, and appropriateness.

  </details>

- **Non-functional Testing**

  **Explanation:**

  Non-functional testing is performed to check the non-functional aspects of a software application. It focuses on how the system performs rather than specific behaviors.

  <details>
      <summary>Overview:</summary>

  - **Objective:** Evaluate attributes other than specific behaviors (performance, usability, security).

  - **Focus:** Tests the "how well" the system performs.  

</details>

## Static Testing

**Explanation:**

Static testing involves validating the code, design documents, and software requirements without actually executing the software. This process aims to detect defects early, reducing both the cost and effort of fixing them later in the development cycle.

<details>
    <summary>Overview:</summary>

1. **Early Detection of Defects:** Identifies issues such as requirement ambiguities, design inconsistencies, and coding errors before they manifest at runtime.

2. **Work Product Evaluation:** Involves examining all work products (requirements, design documents, source code) to ensure they are complete, clear.

3. **Cost and Time Savings:** Early identification allows for quick resolution, reducing rework and lowering overall development costs.

4. **Enhanced Collaboration:** Static reviews, walkthroughs, and inspections encourage team collaboration and ensure alignment of stakeholder expectations.

5. **Quality Assurance:** Provides a means to measure and improve the quality of work products while building confidence in the software’s maintainability and reliability.

6. **Techniques and Tools:**
    - **Reviews, Walkthroughs, and Inspections:** Structured meetings where team members check documents and code for errors.
    - **Static Analysis Tools:** Automated tools that examine code for compliance with coding standards, potential security vulnerabilities, and other quality metrics.

</details>

## Differences Between Static Testing and Dynamic Testing

<details>
    <summary>Overview:</summary>

1. **Nature of Testing:**
    - **Static Testing:** Involves reviewing work products without executing the code.
    - **Dynamic Testing:** Involves executing the actual software to identify defects and determine behavior.

2. **Defect Detection:**
    - **Static Testing:** Uncovers issues such as ambiguities, inconsistencies, and design flaws directly from the artifacts.
    - **Dynamic Testing:** Identifies failures caused by defects, which are then analyzed to determine the root cause.

3. **Applicability:**
    - **Static Testing:** Can be applied to non-executable work products, such as requirements, design documents, and user manuals.
    - **Dynamic Testing:** Can only be applied to executable work products, such as the software code.

4. **Quality Characteristics:**
    - **Static Testing:** Focuses on maintainability, readability, and adherence to standards.
    - **Dynamic Testing:** Assesses functional correctness, performance, security, and overall system behavior.

5. **Efficiency:**
    - **Static Testing:** More easily detects defects in rarely executed or hard-to-reach paths through the code.
    - **Dynamic Testing:** May not cover all paths through the code, especially those that are rarely executed.

6. **Cost and Time:**
    - **Static Testing:** Detects defects early in the development lifecycle, which reduces rework costs.
    - **Dynamic Testing:** Finds defects later during or after execution, often resulting in higher correction costs and longer debugging cycles.

</details>
