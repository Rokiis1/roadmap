# Table of Contents

- [Internet](#internet)
- [QA Basics](#qa-basics)
  - [Tasks: Intro](#intro)
  - [Tasks: Learning Write Test Cases](#tasks-learning-write-test-cases)
- [Static Testing vs Dynamic Testing](#static-testing-vs-dynamic-testing)
- [Testing Techniques and analysis](#testing-techniques-and-analysis)
- [Test Levels and Test Types](#test-levels)
- [Project Managment](#project-managment)
  - [Tasks: Backlog Grooming](#tasks-backlog-grooming)
- [Software Testing Life Cycle](#software-testing-life-cycle)
  - [Tasks: Test Case Report](tasks-test-case-report)
  - [Tasks: Bug Report](#tasks-bug-report)
  - [Tasks: Test Summary Report](#tasks-test-summary-report)

# Internet

**Resources:**

- [Dosc: What is Internet?](../internet/README.md)

# QA Basics

- [What is Quality Assurance?](#what-is-quality-assurance)
  - [What is Quality?](#what-is-quality)
  - [What is Assurance?](#what-is-assurance)
  - [Quality Assurance in Software Testing](#quality-assurance-in-software-testing)

- [Testing Principles](#testing-principles)
- [Test Case Design](#test-case-design)
  - [Types of Test Cases](#types-of-test-cases)
  - [Test Case Format](#test-case-format)
  - [Test Case Types](#test-case-types)
  - [Test Case Requirements](#test-case-requirements)
  - [Common Mistakes](#common-mistakes) 

## What is Quality Assurance?

### What is Quality?

**Explanation:**

Quality refers to the degree of excellence or superiority of a product or service. These factors include reliability, performance, security, usability, and the ability to meet customer expectations effectively.

**Key Concepts:**

- **Fitness for Purpose**: A product or service should effectively serve its intended purpose. This means that it should meet the specific needs and requirements

- **Conformance to Requirements**: Ultimately, quality is about satisfying customer needs and expectations.  

- **Customer Satisfaction**: The product satisfies customer needs and expectations.

- **Continuous Improvement**: Quality is not a one-time achievement but an ongoing commitment.

### What is Assurance?

**Explanation:**

It involves activities aimed at building confidence that a product or service will meet its quality objectives.

**Key Concepts:**

- **Preventive Activities**: Assurance includes a range of preventive activities that are designed to stop defects from occurring in the first place. 

- **Process Adherence**: Ensuring that processes are followed consistently.

- **Standardization**: Implementing best practices and standards.

- **Early Detection**: Identifying and addressing issues early in the development lifecycle.

### Quality Assurance in Software Testing

**Explanation:**

Quality Assurance (QA): ensure software products meet specified quality standards.

**Key Concepts:**

- **Process Improvement**: QA involves the continuous identification and implementation of improvements in the testing process.

- **Standardization**: Establishing testing standards and guidelines.

- **Test Planning**: These plans outline the testing objectives, strategies, and schedules, ensuring that testing efforts align with project goals.

- **Metrics and Measurement**: Key performance indicators (KPIs).

![What is QA?](./images/whatIsQA.png)

**Resources:**

- [Article: What is Quality Assurance(QA)?](https://www.guru99.com/all-about-quality-assurance.html)
- [Article: Why Is ISTQB Certification Important for QA Professionals?](https://www.testdevlab.com/blog/why-is-istqb-certification-important-for-qa-professionals)
- [Article: What is QA?](https://www.investopedia.com/terms/l/lean-six-sigma.asp)

## Tasks: Intro

- [Tasks: Intro]()

## Testing Principles

## Test Case Design

**Explanation:**

We will explore the fundamentals of test case design, including the types, format, and requirements of test cases.

**Key Concepts:**

- Test case types (positive, negative, destructive)

- Test case format (ID, summary, preconditions, steps, post conditions, expected results, actual results, status)

- Test case requirements (comprehensiveness, repeatability, reusability)

### Types of Test Cases

**Explanation:**

The three types of test cases: positive, negative, and destructive.

**Key Concepts:**

- Positive test cases (using valid inputs)

- Negative test cases (using invalid inputs)

**Example:**

- Positive test cases are used to validate that software behaves correctly with valid inputs, such as logging in with correct credentials. 

- Negative test cases, on the other hand, aim to ensure the software handles invalid inputs appropriately, like incorrect login credentials. 

### Test Case Format

**Explanation:**

We will break down the format of a test case, including its eight essential elements. Understanding this format is crucial for creating effective test cases.

**Key Concepts:**

- Test case elements (ID, summary, preconditions, steps, expected results, actual results, status)

**Example:**

Eight elements that make up a test case format: 

1. These elements include ID (unique identifier)

2. Summary (brief description)

3. Preconditions (actions needed before the test)

4. Steps (actions for verification)

5. Expected results

6. Actual results

7. Status

### Test Case Types

**Explanation:*

It discusses the flexibility in naming and structuring test cases.

**Key Concepts:**

- Different test case formats

- Variability in naming and section terminology

**Example:**

- That test cases can vary in format and structure. For instance, some may use a shorter format with only a few key elements like summary, priority, steps, and expected results. 

- The terminology used in different sections may also vary, with "inputs" used instead of "steps" or "outputs" instead of "results."

### Test Case Requirements

**Explanation:**

Discusses the need for accuracy, clarity, and repeatability in test case documentation.

**Key Concepts:**

- including or dealing with all or nearly all aspects of test cases

- Clear and accurate descriptions

- Repeatability and ease of understanding

**Example:**

- Test cases should be comprehensive and not depend on other cases

- They should provide clear and accurate descriptions of steps and expected results to ensure repeatability.

### Common Mistakes

**Explanation:**

Highlights common mistakes made by QA engineers when writing test cases.

**Key Concepts:**

- Avoiding abstract summaries

- Ensuring clickable links

- Balancing detail in descriptions

**Example:**

- Avoiding overly abstract summaries, advocating for specific and clear descriptions like `"check adding a product to the wishlist"` instead of a generalized `"check wishlist functionality."` 

## Tasks: Learning Write Test Cases

- [Tasks: Learning Write Test Cases](./tasks/testCaseDesignTask.md)

# Static Testing vs Dynamic Testing

- [Static Testing](#static-testing)
- [Dynamic Testing](#dynamic-testing)

# Testing Techniques and analysis

- [Black-Box Test Techniques](#black-box-test-techniques)
  - [Equivalence Partitioning](#equivalence-partitioning)
  - [Boundary Value Analysis](#boundary-value-analysis)
  - [Decision Table Testing](#decision-table-testing)
  - [State Transition Testing](#state-transition-testing)
- [White-Box Test Techniques](#white-box-test-techniques)
- [Experience-based Test Techniques](#experience-based-test-techniques)
  - [Exploratory Testing](#exploratory-testing)
- [Collaboration-based Test Approaches](#collaboration-based-test-approaches)
  - [Collaborative User Story Writing](#collaborative-user-story-writing)
  - [Acceptance Criteria](#acceptance-criteria)

# Test Levels and Test Types

- [Test Levels](#test-levels)
- [Test Types](#test-types)
  - [Functional testing](#functional-testing)
    - [Unit Testing](#unit-testing)
    - [Integration Testing](#integration-testing)
      - [APIs Testing](#apis-testing)
    - [System Testing](#system-testing)
    - [End to End Testing(E2E)](#end-to-end-testing-e2e)
    - [Acceptance Testing](#acceptance-testing)
    - [Smoke Testing](#smoke-testing)
    - [Regression Testing](#regression-testing)
  - [Non-functional testing](#non-functional-testing)
    - [Compatibility Testing](#compatibility-testing)
    - [Accessibility Testing](#accessibility-testing)
    - [Performance Testing](#performance-testing)
    - [Security Testing](#security-testing)

# Project Managment

**Resources:**

- [Docs: Project Managment](../project-managment/README.md)

## Tasks: Backlog Grooming

- [Tasks: Backlog Grooming]()

# Software Testing Life Cycle

- [Requirement Analysis](#requirement-analysis)
- [Test Planning](#test-planning)
  - [Purpose and Content of a Test Plan](#purpose-and-content-of-a-test-plan)
  - [Tester's Contribution to Iteration and Release Planning](#testers-contribution-to-iteration-and-release-planning)
  - [Entry Criteria and Exit Criteria](#entry-criteria-and-exit-criteria)
  - [Estimation Techniques](#estimation-techniques)
  - [Test Case Prioritization](#test-case-prioritization)
- [Test Case](#test-case)
- [Test Execution](#test-execution)
- [Defect Reporting and Tracking](#defect-reporting-and-tracking)
  - [Test Case Report](#test-case-report)
    - [Test Case vs Test Case Report](#test-case-vs-test-case-report)
  - [Test Summary Report](#test-summary-report)
  - [Defect Report (Bug Report)](#defect-report-bug-report)
- [Test Closure](#test-closure)

**Explanation:**

The Software Testing Life Cycle is a structured approach that encompasses various phases from the inception of a software project to its completion and release. It ensures that the software meets its intended requirements, is free of defects, and aligns with quality standards.

**Key Concepts:**

- **Requirement Analysis**: This initial phase involves understanding and documenting all project requirements, including functional and non-functional aspects. It sets the foundation for the entire testing process.

- **Test Planning**: Test planning is crucial for outlining the scope of testing, identifying necessary resources, creating schedules, defining deliverables, and estimating efforts. It helps in organizing and managing the testing process effectively.

- **Test Case Design**: In this phase, test cases are designed based on the identified requirements. Test scenarios and cases are created to cover various aspects of the software's functionality, ensuring comprehensive testing.

- **Test Execution**: Test execution involves setting up the testing environment, running test cases, and documenting the results. Testers execute the test cases as per the test plan and report any defects they encounter.

- **Defect Reporting and Tracking**: During test execution, defects or issues are identified and reported to the development team. A defect tracking system is used to manage and monitor the status of these reported defects until they are resolved.

- **Test Closure**: Test closure marks the end of the testing phase. It involves evaluating whether all functionalities have been tested, no new defects are found, testing schedules are met, and there are no project risks related to testing.

## Defect Reporting and Tracking

### Test Case Report

**Explanation:**

A Test Case Report, also known as a Test Execution Report, provides an overview of the status and results of executed test cases.

**Example:**

- [Test Case Report](./assets/manualTesting/testCaseReport.md)

## Test Case vs Test Case Report

1. **Test Case:**

- **Purpose:** A test case is a detailed document that outlines the specific steps to be followed, the conditions to be met, and the expected outcomes to verify a particular aspect of a software application.

- **Content:** Test cases include information such as test case ID, test steps, input data, expected results, preconditions, and postconditions. They are used by testers to execute tests systematically.

- **Focus:** Test cases are focused on the specific actions to be taken during testing and the expected results, helping testers ensure that the software functions correctly.

2. **Test Case Report** (or Test Execution Report):

- **Purpose**: A Test Case Report, often referred to as a Test Execution Report, provides an overview of the status and results of executed test cases for a specific testing phase or cycle.

- **Content**: Test Case Reports typically include project details, test phase information, test execution dates, the total number of test cases executed, the number of test cases passed and failed, details about the test environment, an overall summary of the testing effort (example overall status, comments), and a list of individual test cases with their execution statuses and any specific comments.

- **Focus**: Test Case Reports focus on summarizing the outcomes of testing efforts and providing stakeholders with a high-level view of the testing progress and results. They help project managers, stakeholders, and team members assess the quality and readiness of the software.

### Tasks: Test Case Report

- [Task: Test Case Report](../QA/tasks/TestCaseReports.md)

## Defect Report (Bug Report)

**Explanation:**

Defect Reports are separate documents used to document and track issues or defects identified during testing. You do not typically write Defect Reports (Bug Reports) within individual test cases.

- Defect Reports document issues found during testing, which may result from executing test cases. These reports are used to communicate the problems to developers or the relevant team responsible for fixing the defects.

**Example:**

- [Example: Defect Report (Bug Report)](./assets/manualTesting/bugReport.md)

### Tasks: Bug Report

- [Task: Defect Report (Bug Report)](../QA/tasks/bugReport.md)

## Test Summary Report

**Explanation:**

- [Explanation: Test Summary Report](../QA/assets/explanation/testSummaryReport.md)

**Example:**

- [Test Summary Report](./assets/manualTesting/testSummaryReport.md)

### Tasks: Test Summary Report

- [Task: Test Summary Report](../QA/tasks/testSummaryReport.md)







