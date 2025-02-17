<!-- markdownlint-disable MD033 -->
# Content of Table Test Case Design

- [Requirements Basis for Creating Test Cases](requirements-basis-for-creating-test-cases)
- [Scenario](#scenario)
- [Test Specification Table](#test-specification-table)
- [Test Execution Table](#test-execution-table)
- [Traceability Matrix](#traceability-matrix)
- [Test Coverage](#test-coverage)
- [Good Practices](#good-practices)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)

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

## Requirements for Test Basis to Creating Test Cases

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

## Scenario

**Explanation:**

A test scenario is a high-level description of a specific situation or user interaction that needs to be tested. It outlines the context and conditions under which the software will be evaluated, providing a clear and comprehensive understanding of what needs to be tested, how it should be tested, and what the expected outcomes are. Test scenarios help ensure that all aspects of the functionality are covered and that the software meets the specified requirements.

<details>
    <summary>Overview:</summary>

- **Purpose of a Test Scenario:**

  1. **Identify Test Conditions**: Define the specific conditions and inputs under which the software will be tested.
  2. **Ensure Comprehensive Coverage**: Ensure that all possible user interactions and system behaviors are covered.
  3. **Facilitate Communication**: Provide a clear and concise description of the test conditions, making it easier for testers, developers, and stakeholders to understand and collaborate.
  4. **Guide Test Case Development**: Serve as a foundation for developing detailed test cases, which include specific steps, test data, and expected results.

- **Structure writting Traditional Scenario:**

  - **Verify that:** Used to confirm that a specific functionality works as expected.
  - **Ensure that:** Used to make sure that certain conditions or behaviors are met.
  - **Check that:** Used to validate that specific conditions or behaviors are not met or that error handling works correctly.
  - **Test that:** Used to confirm that specific outcomes or responses occur under certain conditions.

- **Traditional Scenario Structure:**

  1. **Scenario: User Authentication**

      - **Verify that:**
      - Verify that user can manage password change.
      - Verify that user can log in with valid credentials.
      - Verify that user can log out successfully.

      - **Ensure that:**
      - Ensure that user session expires after a period of inactivity.
      - Ensure that user can reset password using the "Forgot Password" feature.

      - **Check that:**
      - Check that user cannot log in with invalid credentials.
      - Check that user receives an error message for incorrect password.
      - Check that user cannot access restricted pages without logging in.

      - **Test that:**
      - Test that user receives a confirmation email after password reset.
      - Test that user is redirected to the login page when accessing a protected resource.
      - Test that user account is locked after multiple failed login attempts.

- **Structure writting Behavior-driven development Scenario:**

  - **Given:** Describes the initial context or state of the system.
  - **When:** Describes the action or event that triggers the scenario.
  - **Then:** Describes the expected outcome or result of the action.

- **Behavior-driven development Scenario:**

  1. **Scenario: User Authentication**

      - **Scenario: Valid User Login**
      - **Given** the user is on the login page,
      - **When** the user enters valid credentials and clicks the login button,
      - **Then** the user should be redirected to the dashboard.

      - **Scenario: Invalid User Login**
      - **Given** the user is on the login page,
      - **When** the user enters invalid credentials and clicks the login button,
      - **Then** the user should see an error message indicating invalid credentials.

      - **Scenario: Password Change**
      - **Given** the user is logged in and on the account settings page,
      - **When** the user enters the current password, a new password, and confirms the new password,
      - **Then** the user should see a confirmation message indicating the password change was successful.

</details>

### Test Specification Table

**Explanation:**

<details>
    <summary>Overview:</summary>

- **Scenario-Based Test Specification Table:**

    1. **Scenario ID:** A unique identifier for each test scenario.
    2. **Scenario Description:** A high-level description of the scenario being tested.
    3. **Preconditions:** Any conditions that must be met before the scenario can be executed.
    4. **Expected Results:** The expected outcome of the scenario.
    5. **Postconditions:** Any conditions that should be met after the scenario is executed.

- **Test Case-Based Specification Table:**

    1. **Test Case ID:** A unique identifier for each test case.
    2. **Scenario ID:** The identifier of the scenario this test case is derived from.
    3. **Test Case Description:** A detailed description of the test case.
    4. **Preconditions:** Any conditions that must be met before the test case can be executed.
    5. **Test Data:** Specific data to be used during the test case.
    6. **Expected Results:** The expected outcome of the test case.
    7. **Postconditions:** Any conditions that should be met after the test case is executed.
    8. **Test Steps(Optional):** Because they may not be needed for all test cases, especially those focusing on specific inputs or conditions. They are more useful for test cases that involve navigating through different pages or performing a sequence of actions. Preparing test steps is good practice for future end-to-end (E2E) testing.

</details>

### Test Execution Table

**Explanation:**

Also known as the Test Results Table, documents the execution of scenarios and their outcomes. Each scenario can have multiple test cases (Test IDs) derived from it.

<details>
    <summary>Overview:</summary>

1. **Scenario ID:** A unique identifier for each test scenario. Useful when test cases are derived from high-level scenario. When using specific functional and non-functional testing techniques, scenarios may not be explicitly defined.
2. **Test Case ID:** A unique identifier for each test case or scenario.
3. **Execution Date:** The date when the test case was executed.
4. **Tester Name:** The name of the person who executed the test case. This is useful for manual testing but may not be necessary for automated tests.
5. **Actual Results:** The actual outcome of the test case.
6. **Pass/Fail Status:** Indicates whether the test case passed or failed.
7. **Comments/Defects:** Any additional comments or details about defects found during testing.

</details>

### Traceability Matrix

**Explanation:**

A traceability matrix is a document that maps and traces user requirements with test cases.

<details>
    <summary>Overview:</summary>

1. **Purpose**: To ensure that all requirements are covered by test cases and to identify any missing requirements or test cases.

2. **Structure**:
    - **Requirement ID**: Unique identifier for each requirement.
    - **Requirement Description**: Detailed description of the requirement.
    - **Test Case ID**: Unique identifier for each test case.
    - **Test Case Description**: Detailed description of the test case.
    - **Status**: Indicates whether the requirement is covered by the test case (Covered, Not Covered).

3. **Types of Traceability Matrices**:
    - **Forward Traceability**: Ensures that all requirements are covered by test cases.
    - **Backward Traceability**: Ensures that all test cases are linked to requirements.
    - **Bidirectional traceability**: Ability to trace forward (from requirement to test case) and backward (from test case to requirement).

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
