# Table of Contents

- [Introduction to Manual Testing](#introduction-to-manual-testing)
    - [What is manual testing?](#what-is-manual-tetsing)
    - [When is manual testing suitable?](#when-is-manual-testing-suitable)
    - [Pros and cons of manual testing](#pros-and-cons-of-manual-tetsing)
- [Test Case Design](#test-case-design)
    - [Writing effective test cases](#writing-effective-test-cases)
    - [Test case structure and format](#test-case-structure-and-format)
    - [Test case prioritization](#test-case-prioritization)
- [Test Execution and Reporting](#test-execution-and-reporting)
    - [Executing test cases](#executing-test-cases)
    - [Logging defects](#logging-defects)
    - [Creating test reports](#creating-test-reports)
    - [Tracking test progress](#tracking-test-progress)
- [Defect Management](#defect-management)
    - [Defining and categorizing defects](#defining-and-categorizing-defects)
    - [Severity and priority of defects](#severity-and-priority-of-defects)
    - [Defect life cycle](#defect-life-cycle)

# Introduction to Manual Testing

## What is manual testing?

Manual Testing is a software testing process in which testers manually execute test cases without using any automation tools. It involves meticulously going through the software application to identify defects, bugs, or issues by following predefined test cases. Testers act as end-users and interact with the application, exploring its various features to ensure its quality and functionality.

## When is manual testing suitable?

- **Exploratory Testing:** When the application is being explored to find defects, without predefined test cases.
- **Usability Testing:** To assess the user-friendliness and user experience of the application.
- **Ad Hoc Testing:** For quick, unplanned testing to identify critical issues.
- **Small Projects:** When the cost of automation is higher than manual testing efforts.
- **Initial Stages:** Early in the development process before stable builds are available.

## Pros and cons of manual testing

*Pros of Manual Testing:*

- **Human Judgment:** Testers can use their intuition and judgment to uncover hidden defects.
- **Exploratory Testing:** Manual testing is well-suited for exploratory testing to find unique issues.
- **Adaptability:** Testers can adjust test cases in real-time based on observations.
- **Early Testing:** Effective in early stages when requirements are changing rapidly.

*Cons of Manual Testing:*

- **Time-Consuming:** Manual testing can be slower and more time-consuming for repetitive tasks.
- **Limited Coverage:** May not cover all scenarios due to human limitations.
- **Human Errors:** Testers might miss defects due to oversight or fatigue.
- **Costly and Resource-Intensive:** Requires dedicated human resources.

# Test Case Design

## Writing effective test cases

Writing effective test cases is crucial for thorough testing and accurate defect detection. Effective test cases should be clear, concise, and detailed. They need to cover various scenarios, conditions, and user interactions to ensure comprehensive testing.

**Key Points:**

- **Clear Steps:** Each test case should have a clear set of steps to execute.
- **Expected Results:** Clearly define the expected outcomes and results.
- **Coverage:** Ensure that each test case covers a specific functionality or scenario.
- **Variety:** Include positive and negative scenarios, boundary conditions, and edge cases.
- **Reusability:** Design test cases that can be reused in different test cycles.

## Test case structure and format

A standardized test case structure and format make test cases consistent and easy to understand for the entire testing team. A well-structured test case includes sections such as the test case ID, description, preconditions, steps, expected results, actual results, and status.

**Key Points:**

- **Test Case ID:** A unique identifier for each test case.
- **Description:** Briefly describe the purpose of the test case.
- **Preconditions:** List any conditions that must be met before executing the test case.
- **Steps:** Outline the steps needed to execute the test case.
- **Expected Results:** Clearly state the expected outcomes after each step.
- **Actual Results:** Record the actual outcomes during test execution.
- **Status:** Indicate whether the test case passed, failed, or needs further investigation.

## Test case prioritization

Test case prioritization involves determining the order in which test cases should be executed based on factors such as business impact, risk, and critical functionality. Prioritization helps ensure that the most important areas are tested first, especially when time or resources are limited.

**Key Points:**

- **Business Impact:** Identify test cases that directly impact core business processes.
- **Risk Analysis:** Assess potential risks and prioritize test cases in high-risk areas.
- **Critical Functionality:** Prioritize test cases for critical features or functionalities.
- **Dependencies:** Consider dependencies between test cases and prioritize accordingly.
- **Regression Testing:** Prioritize test cases that cover areas prone to regression.

# Test Execution and Reporting

## Executing test cases

Test case execution is the phase where testers perform the actual testing of the software application based on the defined test cases. It involves following the step-by-step instructions outlined in the test cases, interacting with the software as an end user, and observing the results.

**Key Concepts:**

- Testers execute test cases to verify that the application functions as intended.
- During execution, testers validate the correctness of each step and compare actual outcomes with expected outcomes.
- Testers interact with the user interface, input data, and various functionalities to uncover defects and issues.

## Logging defects

Defect logging is the process of identifying and documenting discrepancies or issues discovered during test execution. Properly logging defects provides a clear record of problems that need to be addressed by the development team.

**Key Concepts:**

- Defects are logged with detailed descriptions, steps to reproduce, and any relevant attachments (screenshots, logs).
- Each defect is assigned a severity level based on its impact on the application's functionality.
- Defect logging helps the development team understand and reproduce issues for resolution.

## Creating test reports

Test reports summarize the testing activities, findings, and progress to provide stakeholders with a clear understanding of the software's quality and readiness for release.

**Key Concepts:**

- Test reports include details about executed test cases, pass/fail status, defects found, and testing trends.
- Reports help stakeholders make informed decisions about the application's stability and readiness for release.
- Test reports may highlight areas of concern, successes, and recommendations for further testing or improvements.

## Tracking test progress

Tracking test progress involves monitoring and measuring the advancement of testing activities, identifying bottlenecks, and ensuring that testing aligns with project goals.

**Key Concepts:**

- Test progress is monitored through metrics such as the number of executed test cases, defects, and their status.
- Regular meetings, such as daily standups, help teams discuss progress, roadblocks, and adjustments needed.
- Tracking progress allows for early identification of issues and enables effective resource management.

# Defect Management

## Defining and categorizing defects

Defects are anomalies or deviations in a software application that can potentially impact its functionality, reliability, or usability. Defect management involves the process of identifying, documenting, and categorizing these defects to ensure effective communication and resolution.

**Key Concepts:**

- Defects can include issues like software crashes, incorrect calculations, broken links, and user interface inconsistencies.
- Categorization helps organize defects based on their nature, making it easier to prioritize and address them.
- Defects can be categorized as functional, performance-related, usability, compatibility, or security-related.

## Severity and priority of defects

Severity and priority are two critical aspects of defect management that guide the development and testing teams in addressing defects based on their impact and urgen

**Key Concepts:**

- Severity: Reflects the impact of a defect on the application's functionality. High-severity defects can lead to application crashes or data loss, while low-severity defects have minimal impact.
- Priority: Indicates the urgency of fixing a defect. High-priority defects require immediate attention, while low-priority defects can be addressed later.

## Defect life cycle

The defect life cycle outlines the stages that a defect goes through from discovery to resolution. It ensures that defects are properly documented, reviewed, and resolved in a systematic manner.

**New:** Defect is identified and reported.
**Open:** Defect is reviewed and validated by the testing team.
**Assigned:** Defect is assigned to the development team for resolution.
**Fixed:** Development team fixes the defect.
**Verified:** Testing team confirms that the defect is resolved.
**Closed:** Defect is closed if it has been successfully resolved and verified.