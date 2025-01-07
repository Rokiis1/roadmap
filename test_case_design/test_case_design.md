<!-- markdownlint-disable MD033 -->
# Content of Table

- [Test Case Design](#test-case-design)
  - [Requirements Basis for Creating Test Cases](requirements-basis-for-creating-test-cases)
  - [Scenario](#scenario)
  - [Test Specification Table](#test-specification-table)
  - [Test Execution Table](#test-execution-table)
  - [Test Coverage](#test-coverage)
  - [Good Practices](#good-practices)
  - [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [Summarize](#summarize)

## Test Case Design

**Explanation:**

Involves creating a set of conditions or variables under which a tester will determine whether a system or one of its components is working.

<details>
    <summary>Overview:</summary>

- **Positive and Negative Test Cases:** Both expected (positive) and unexpected (negative) behaviors are tested.
- **Not Executed Test Cases:** Test cases that have been defined but not yet executed.
- **Functional and Non-Functional Test Cases:** Both functional requirements (what the system should do) and non-functional requirements (how the system should perform).
- **Boundary and Edge Cases:** Tests the boundaries and edges of input ranges.
- **Preconditions and Postconditions:** Specifies the conditions that must be met before and after the test is executed.
- **Test Case-Based Specification Table:** Focuses on individual test cases derived from scenarios, providing detailed descriptions of what needs to be tested.
- **Scenario-Based Test Specification Table:** Focuses on scenarios and includes detailed information about each scenario, along with the test cases and steps.
- **Create a Test Case (if necessary):** If the bug reveals a missing test case or an edge case that was not previously covered, create a new test case.

</details>

### Requirements for Test Basis to Creating Test Cases

**Explanation:**

Requirements are detailed descriptions of the functionalities, behaviors.

<details>
    <summary>Overview:</summary>

- **Sources of Requirements:**
  - **Requirement Specifications:**
    - Detailed documents that outline the system's functionalities.
    - Often created by business analysts or product owners.
  - **Design Documents:**
    - Design documents provide detailed descriptions of the system's architecture, components, interactions, and user interface (UI) design.
    - Help understanding how the system is built and how it should function.
  - **User Stories:**
    - Short descriptions of features from the perspective of the end user.
    - Commonly used in Agile methodologies when working in the team.
  - **Stakeholder Input:**
    - Feedback and requirements from stakeholders such as clients, users, and business analysts.
  - **Use Cases:**
    - Detailed scenarios that describe how users will interact with the system.
    - Use cases are typically documented in a **Use Case Document** or **Use Case Specification**.

</details>

### Scenario

**Explanation:**

A high-level description of a specific situation or user interaction that needs to be tested.

<details>
    <summary>Overview:</summary>

- **Verify that:**
  - Verify that a user can navigate to the registration page.
  - Verify that a user can log in with valid credentials.
  - Verify that the mobile app works on different screen sizes.
- **Ensure that:**
  - Ensure that a user receives a push notification when a new message is received.
  - Ensure that a user can add an item to the shopping cart.
- **Check that:**
  - Check that the system displays an error message for invalid login attempts.
  - Check that the user can update their profile information.
- **Test that:**
  - Test that the GPS navigation system calculates the correct route.
  - Test that the voice assistant sets a reminder correctly.

</details>

### Test Specification Table

**Explanation:**

Focuses on scenarios and includes detailed information about each scenario.

<details>
    <summary>Overview:</summary>

- **Test Case-Based Specification Table:**

    1. **Test Case ID:** A unique identifier for each test scenario.
    2. **Test Case Description:** A high-level description of the scenario being tested.
    3. **Preconditions:** Any conditions that must be met before the scenario can be executed.
    4. **Test Data:** Specific data to be used during the scenario.
    5. **Expected Results:** The expected outcome of the scenario.
    6. **Postconditions:** Any conditions that should be met after the scenario is executed.

- **Scenario-Based Test Specification Table:**

    1. **Scenario ID:** A unique identifier for each test scenario.
    2. **Scenario Description:** A high-level description of the scenario being tested.
    3. **Preconditions:** Any conditions that must be met before the scenario can be executed.
    4. **Test Case ID:** A unique identifier for each test case derived from the scenario.
    5. **Test Case Description:** A detailed description of the test case.
    6. **Test Data:** Specific data to be used during the test case.
    7. **Expected Results:** The expected outcome of the test case.
    8. **Postconditions:** Any conditions that should be met after the test case is executed.

- *Test Steps(Optional):* Because they may not be needed for all test cases, especially those focusing on specific inputs or conditions. They are more useful for test cases that involve navigating through different pages or performing a sequence of actions. Preparing test steps is good practice for future end-to-end (E2E) testing.

</details>

### Test Execution Table

**Explanation:**

Also known as the Test Results Table, documents the execution of scenarios and their outcomes. Each scenario can have multiple test cases (Test IDs) derived from it.

<details>
    <summary>Overview:</summary>

1. **Test ID/Scenario ID:** A unique identifier for each test case or scenario.
2. **Execution Date:** The date when the test case was executed.
3. **Actual Results:** The actual outcome of the test case.
4. **Pass/Fail Status:** Indicates whether the test case passed or failed.
5. **Comments/Defects:** Any additional comments or details about defects found during testing.

- *Scenario ID(Optional):* A unique identifier for each test scenario. Useful when test cases are derived from high-level scenario. When using specific functional and non-functional testing techniques, scenarios may not be explicitly defined.

- *Tester Name (Optional):* The name of the person who executed the test case. This is useful for manual testing but may not be necessary for automated tests.

</details>

### Test Coverage

**Explanation:**

Shows perecentage of how much of the software's functionality is being tested.

<details>
    <summary>Overview:</summary>

1. **Coverage Criteria:** Different criteria can be used to measure test coverage:
    - **Code Coverage:**  By developers, the extent to which the source code of a program is executed when a particular test suite runs.
    - **Requirements coverage:** By testers and QA teams which the specified requirements (both functional and non-functional) calculate percentage of test case how widely the system have been tested.
    - **Functional coverage:** By testers and QA teams based specified functionality of a software system calculate overall percetage what has been tested.
2. **Measuring Coverage:** Tools and techniques for measuring test coverage, such as code coverage tools that measure the percentage of code executed by the tests.
    - **Based what we Calculate:**
        - Identify Criteria wich one gonna be test (code, requirements, functional).
        - Map test cases and choose those criteria test case wich will be gonna check coverage.
        - Execute test cases and record results it's (pass/fail).
        - Calculate the percentage of requirements that have been tested.
    - **Pass/Fail Status:** The coverage percentage includes all tested requirements, regardless of whether the test cases passed or failed.
    - **Coverage calcualtion formula:** `coverage = (tested_requirements / total_requirements) * 100`.
    - **Achieving 100% coverage:** For all requirements or functionalities is an ideal goal, it is not practical or possible due to various constraints such as time, resources, and the complexity of the software.
    - **Coverage reflect:** To which the requirement has been fully tested. If any test case for a requirement is not executed, it means that the requirement has not been completely tested.
3. **Improving Coverage:** Strategies for improving test coverage, such as adding more test cases to cover untested areas and using different test design techniques to identify gaps.

</details>

### Good Practices

**Explanation:**

- **Clarity and Precision:** Test cases are clear and precise to avoid ambiguity.
- **Reusability:** Design test cases that can be reused in different testing scenarios.
- **Maintainability:** Keep test cases maintainable by updating them as requirements change.
- **Coverage:** Reach coverage of all functionalities and edge cases.

### Common Mistakes to Avoid

**Explanation:**

- **Incomplete Requirements:** Avoid designing test cases based on incomplete or unclear requirements.
- **Overlooking Edge Cases:** Check that edge cases and boundary conditions are tested.
- **Redundancy:** Avoid creating redundant test cases that do not add value.
- **Lack of Documentation:**  All test cases are well-documented and traceable to requirements.

## Summarize

- **Test Case Design:** Focus on both positive and negative scenarios, functional and non-functional requirements, and boundary conditions.

- **Requirements Basis:** Use detailed requirement specifications, design documents, user stories, stakeholder input, and use cases.

- **Scenarios:** Clearly define what needs to be verified, ensured, checked, and tested.

- **Specification Tables:** Use detailed tables to document test cases and scenarios.

- **Test Execution:** Record execution details and outcomes.

- **Test Coverage:** Aim for comprehensive coverage using different criteria and improve coverage by identifying gaps.

- **Good Practices:** Ensure clarity, reusability, maintainability, and comprehensive coverage.

- **Avoid Common Mistakes:** Ensure complete requirements, test edge cases, avoid redundancy, and maintain proper documentation.
