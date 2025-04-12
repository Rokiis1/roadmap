<!-- markdownlint-disable MD033 -->
# Content of Table Test Case Design

- [Requirements Basis for Creating Test Cases](requirements-basis-for-creating-test-cases)
- [Scenario](#scenario)
- [Traceability Between the Test Basis and Testware](#traceability-between-the-test-basis-and-testware)
- [Traceability Matrix](#traceability-matrix)
- [Test Specification Table](#test-specification-table)
- [Test Execution Table](#test-execution-table)
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
- **Scenario-Based Test Specification Table:** Focuses on scenarios and includes detailed information about each scenario, along with the test cases and steps.
- **Test Case-Based Specification Table:** Focuses on individual test cases derived from scenarios, providing detailed descriptions of what needs to be tested.
- **Create a Test Case (if necessary):** If the bug reveals a missing test case or an edge case that was not previously covered, create a new test case.

</details>

## Requirements for Test Basis to Creating Test Cases

**Explanation:**

Requirements are detailed descriptions of the functionalities, behaviors.

<details>
    <summary>Overview:</summary>

- **Sources of Requirements:**
  - **Requirement Documentation:**
    - Functional and non-functional requirements.
    - User stories and use cases.
    - Business rules and specifications.
  - **Design Documents:**
    - Design documents provide detailed descriptions of the system's architecture, components, interactions, and user interface (UI) design.
    - Database schemas and data models.
  - **Code:**
    - Source code and configuration files.
    - API documentation and service contracts.
  - **Risk Analysis Reports:**
    - Identified risks and their potential impact.
    - Risk mitigation strategies and priorities.
  - **Regulatory and Compliance Standards:**
    - Industry-specific regulations and standards.
    - Compliance requirements and guidelines.
  - **User Manuals and Guides:**
    - User manuals and operational guides.
    - Installation and setup instructions.

</details>

## Scenario

**Explanation:**

A test scenario is a high-level description of a specific situation or user interaction that needs to be tested. It outlines the context and conditions under which the software will be evaluated, providing a clear and comprehensive understanding of what needs to be tested, how it should be tested, and what the expected outcomes are. Test scenarios help ensure that all aspects of the functionality are covered and that the software meets the specified requirements. They are also used for writing scripts for end-to-end (E2E) testing and non-functional.

<details>
    <summary>Overview:</summary>

- **Purpose of a Test Scenario:**

  1. **Identify Test Conditions:** Test scenarios help define the specific conditions and inputs under which the software will be tested. This ensures that all relevant aspects of the software are considered during testing.
  2. **Ensure Comprehensive Coverage:** Test scenarios ensure that all possible user interactions and system behaviors are covered. This helps in identifying any gaps in the testing process and ensures that the software is thoroughly tested.
  3. **Facilitate Communication:** Test scenarios provide a clear and concise description of the test conditions, making it easier for testers, developers, and stakeholders to understand and collaborate.
  4. **Guide Test Case Development:** Serve as a foundation for developing detailed test cases. The specific details and steps of the test cases are derived from the test scenarios, and the approach taken depends on the test design technique used.
  5. **Writing Scripts:** Test scenarios are also used for writing scripts for end-to-end (E2E) testing and non-functional testing.

- **Traditional Scenario Structure:** Is a method used to outline test scenarios in a detailed and structured manner.

  <details>
      <summary>Overview:</summary>

  1. **Writting Structure:**

      - **Verify that:** Used to confirm that a specific functionality works as expected.
      - **Ensure that:** Used to make sure that certain conditions or behaviors are met.
      - **Check that:** Used to validate that specific conditions or behaviors are not met or that error handling works correctly.
      - **Test that:** Used to confirm that specific outcomes or responses occur under certain conditions.

  2. **Scenario: User Authentication**

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

  3. **When to Use:**
      - **Familiarity:** Teams that are more familiar with traditional testing approaches may find this structure easier to use.
      - **Detailed Steps:** When detailed, step-by-step instructions are needed for each test case.
      - **Legacy Systems:** Often used in projects with legacy systems where traditional testing methods have been established.
      - **Documentation Requirements:** When there is a need for comprehensive documentation that outlines each specific test condition and expected outcome.
  
  4. **Why should Use:**
      - **Clarity:** Provides clear and detailed steps for each test case, making it easier for testers to follow.
      - **Comprehensive Coverage:** Ensures that all aspects of the functionality are covered through specific test conditions.
      - **Ease of Use:** Familiar to many testers and does not require learning new syntax or frameworks.

  </details>

- **Behavior-driven development Scenario:** Is an approach to software development that emphasizes collaboration between developers, testers, and non-technical stakeholders.

  <details>
      <summary>Overview:</summary>

  1. **Writting Structure:**

      - **Given:** Describes the initial context or state of the system.
      - **When:** Describes the action or event that triggers the scenario.
      - **Then:** Describes the expected outcome or result of the action.

  2. **Scenario: User Authentication**

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

  3. **When to Use:**

      - **Collaboration:** When there is a need for close collaboration between developers, testers, and non-technical stakeholders.
      - **Agile Projects:** Commonly used in Agile projects where user stories and acceptance criteria are defined.
      - **Automation:** When integrating with automated testing.
      - **Readable Tests:** When tests need to be easily readable and understandable by all stakeholders, including non-technical team members.
  
  4. **Why should Use:**

      - **Collaboration:** Encourages collaboration between technical and non-technical team members by using a common language.
      - **Readability:** The Given-When-Then format is easy to read and understand, making it accessible to all stakeholders.
      - **Automation Integration:** BDD scenarios can be directly integrated with automated testing tools, streamlining the testing process.
      - **Focus on Behavior:** Emphasizes the behavior of the system from the user's perspective, ensuring that the software meets user needs.
  
  </details>

</details>

## Traceability Between the Test Basis and Testware

**Explanation:**

Establishing traceability means linking every element of your test basis (requirements, risks, and design specifications) to corresponding testware (test conditions, test cases, and test results) and, in turn, to detected defects.

<details>
    <summary>Overview:</summary>

- **Coverage Evaluation:** By mapping test cases to requirements, you can verify that every requirement is addressed and measure the extent of your coverage. For example, you can confirm that all high-risk requirements are tested, and any missing tests are quickly identified.

- **Impact Analysis:** When changes occur in the requirements or design, traceability helps you assess and manage the impact on the test cases and test results. This supports faster test updates and better maintenance.

- **Test Audits and IT Governance:** Good traceability facilitates audits and meets governance criteria, as it provides a clear record of how testing efforts align with requirements and business goals. This transparency makes test progress and completion reports easier to understand.

- **Communication with Stakeholders:** A well-maintained traceability process makes it simpler to convey the technical details of testing to non-technical stakeholders. It provides meaningful insights into product quality, process capability, and overall project progress.

</details>

## Traceability Matrix

**Explanation:**

A traceability matrix is a document that maps user requirements to test cases. It serves as a tool to confirm that every requirement is tested and to highlight any gaps in the test coverage.

<details>
    <summary>Overview:</summary>

1. **Purpose:**
    - Ensure that all requirements are covered by test cases.
    - Identify missing requirements or test cases.

2. **Structure:**
    - **Requirement ID:** Unique identifier for each requirement.
    - **Requirement Description:** Detailed description of the requirement.
    - **Test Case ID:** Unique identifier for each test case.
    - **Test Case Description:** Detailed description of the test case.
    - **Status:** Indicates whether the requirement is covered by the test case (Covered, Not Covered) or the current execution status.

3. **Types of Traceability Matrices:**
    - **Forward Traceability:** Links requirements to test cases to ensure every requirement is addressed by one or more tests.
    - **Backward Traceability:** Links test cases back to their original requirements to confirm that each test has a purpose.
    - **Bidirectional traceability:** Combines both forward and backward traceability, helping ensure full alignment between requirements and test cases.

</details>

## Test Specification Table

**Explanation:**

<details>
    <summary>Overview:</summary>

- **Scenario-Based Test Specification Table:**

    1. **Scenario ID:** A unique identifier for each test scenario.
    2. **Scenario Description:** A high-level description of the scenario being tested.
    3. **Expected Results:** The expected outcome of the scenario.

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

## Test Execution Table

**Explanation:**

Also known as the Test Results Table, documents the execution of scenarios and their outcomes. Each scenario can have multiple test cases (Test IDs) derived from it.

<details>
    <summary>Overview:</summary>

1. **Scenario ID:** A unique identifier for each test scenario. Useful when test cases are derived from high-level scenario. When using specific functional and non-functional testing techniques, scenarios may not be explicitly defined.
2. **Test Case ID:** A unique identifier for each test case or scenario.
3. **Execution Date:** The date when the test case was executed.
4. **Tester Name:** The name of the person who executed the test case. This is useful for manual testing but may not be necessary for automated tests.
5. **Actual Results:** The actual outcome of the test case.
6. **Pass/Fail/Block Status:** Indicates whether the test case passed, failed, block.
7. **Comments/Defects:** Any additional comments or details about defects found during testing.

</details>

## Test Coverage

**Explanation:**

Test coverage measures the proportion of the software's functionality or code that is exercised by your test suite. It helps identify untested areas and guides improvements in testing.

<details>
    <summary>Overview:</summary>

1. **Coverage Criteria:**
    - **Requirements coverage:**Evaluates the percentage of specified requirements (both functional and non-functional) that are validated by test cases. Testers and QA teams use this metric to ensure that all requirements are addressed.
    - **Functional Coverage:** Measures the percentage of the software functionalities (user interactions or workflows) that are exercised by the test cases. This metric ensures that the system behaves as expected from a users perspective, covering use cases and business scenarios.
    - **Code Coverage:** Measures the percentage of source code executed during testing. This metric is primarily used by developers.

2. **Measuring Coverage:**
    - **Identify Criteria:** Decide whether you are measuring code, requirements, or functional coverage.
    - **Mapping:** Map each requirement or code segment to corresponding test cases so that you know which areas have tests.
    - **Execution:** Run your test cases and record outcomes (pass/fail) for each requirement or code segment.
    - **Calculation:** `coverage = (tested_requirements / total_requirements) * 100`.
    - **Pass/Fail Status:** Coverage is generally measured regardless of whether the tests pass or fail it indicates the extent of testing performed
    - **Realistic Goal:** Achieving 100% coverage for all requirements or code is an ideal that is rarely attainable due to constraints in time, resources, or software complexity.

3. **Improving Coverage:** Strategies for improving test coverage, such as adding more test cases to cover untested areas and using different test design techniques to identify gaps.
    - Adding additional test cases to address previously untested functional areas or code paths.
    - Using a variety of test design techniques (like boundary value analysis, equivalence partitioning) to identify gaps in testing.
    - Regularly reviewing the traceability matrix to ensure all requirements are covered by at least one test case.

</details>

## Good Practices

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
