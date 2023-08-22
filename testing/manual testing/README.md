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
- [Regression Testing](#regression-testing)
    - [What is regression testing?](#what-is-regression-testing)
    - [Importance of regression testing](#importance-of-regression-testing)
    - [Building a regression test suite](#building-a-regression-test-suite)
- [Exploratory Testing](#exploratory-testing)
    - [Understanding exploratory testing](#understanding-exploratory-testing)
    - [Benefits and limitations](#benefits-and-limitations)
    - [Techniques for exploratory testing](#techniques-for-exploratory-testing)
- [Usability Testing](#usability-testing)
    - [User-centered testing](#user-centered-testing)
    - [Usability heuristics](#usability-heuristics)
    - [Conducting usability tests](#conducting-usability-tests)
- [Compatibility Testing](#compatibility-testing)
    - [Compatibility matrix](#compatibility-matrix)    
    - [Testing across browsers and devices](#testing-across-browsers-and-devices)
- [Smoke and Sanity Testing](#smoke-and-sanity-testing)
    - [Smoke testing overview](#smoke-testing-overview)
    - [Sanity testing vs smoke testing](#sanity-testing-vs-smoke-testing)
- [Ad Hoc Testing](#ad-hoc-testing)
    - [What is ad hoc testing?](#what-is-ad-hoc-testing)
    - [Purpose and execution](#purpose-and-execution)
- [Boundary Testing](#boundary-testing)
    - [Testing boundary values](#testing-boundary-values)
    - [Importance of boundary testing](#importance-of-boundary-testing)
- [Equivalence Partitioning and Boundary Value Analysis](#equivalence-partitioning-and-boundary-value-analysis)
    - [Concepts and techniques](#concepts-and-techniques)
    - [Applying equivalence partitioning](#applying-equivalence-partitioning)
    - [Utilizing boundary value analysis](#utilizing-boundary-value-analysis)
- [Positive and Negative Testing](#positive-and-negative-testing)
    - [Positive testing explained](#positive-testing-explained)
    - [Negative testing scenarios](#negative-testing-scenarios)
- [Static Testing](#static-testing)
    - [Static vs dynamic testing](#static-vs-dynamic-testing)
    - [Techniques for static testing](#techniques-for-static-testing)
- [Black Box vs White Box Testing](#black-box-vs-white-box-testing)
    - [Differences and similarities](#differences-and-similarities)
    - [When to apply each approach](#when-to-apply-each-approach)
- [Manual vs Automated Testing](#manual-vs-automated-testing)
    - [Comparing manual and automated testing](#comparing-manual-and-automated-testing)
    - [Selecting the right approach](#selecting-the-right-approach)
- [Testing in Different Development Methodologies](#testing-in-different-development-methodologies)
    - [Manual testing in Waterfall model](#manual-testing-in-waterfall-model)
    - [Manual testing in Agile/Scrum](#manual-testing-in-agile-scrum)

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

**Pros of Manual Testing:**

- **Human Judgment:** Testers can use their intuition and judgment to uncover hidden defects.
- **Exploratory Testing:** Manual testing is well-suited for exploratory testing to find unique issues.
- **Adaptability:** Testers can adjust test cases in real-time based on observations.
- **Early Testing:** Effective in early stages when requirements are changing rapidly.

**Cons of Manual Testing:**

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

# Regression Testing

## What is Regression Testing?

Regression testing is a type of software testing that focuses on verifying that new changes or updates to a software application do not adversely affect the existing functionalities. It involves retesting the application to ensure that previously working features still function as expected after modifications.

**Key Concepts:**

- Regression testing aims to catch unintended side effects caused by new changes.
- It involves re-executing selected test cases to validate that no existing functionalities are broken.
- Regression testing is essential when new features, bug fixes, or enhancements are introduced.

## Importance of Regression Testing

Regression testing is a critical aspect of the software development lifecycle as it ensures that software remains stable and reliable even after changes. It helps identify potential defects early and reduces the risk of regressions slipping into production.

**Key Concepts:**

- Changes to code, configurations, or integrations can introduce new defects or break existing features.
- Without regression testing, it's difficult to guarantee that software updates won't negatively impact the user experience.
- Frequent regression testing minimizes the cost and effort required to fix issues discovered late in the development cycle.

## Building a Regression Test Suite

A regression test suite is a collection of test cases that are specifically designed to validate existing functionalities after changes are made to the software. Building an effective regression test suite involves selecting relevant test cases and maintaining its efficiency over time.

**Key Concepts:**

- **Test Selection:** Choose test cases that cover critical and high-risk functionalities.
- **Test Automation:** Automate repetitive regression tests to save time and increase accuracy.
- **Regular Updates:** Keep the regression test suite up-to-date with the latest changes.
- **Maintain Efficiency:** Remove obsolete or redundant test cases to ensure the suite remains efficient.

# Exploratory Testing

## Understanding Exploratory Testing

Exploratory testing is a testing approach where testers dynamically explore the application without predefined test cases. Testers use their intuition, domain knowledge, and experience to uncover defects, learn the application's behavior, and provide valuable feedback.

**Key Concepts:**

- Testers design and execute tests simultaneously, learning the application as they go.
- Exploratory testing is often performed in an unscripted, flexible manner.
- It emphasizes creativity, critical thinking, and adaptability in identifying issues.

## Benefits and Limitations

Exploratory testing offers unique advantages, but it also comes with certain limitations that testers should be aware of.

**Benefits:**

- **Flexibility**: Testers adapt to changing conditions, exploring the application dynamically.
- **Innovation**: Testers discover unexpected issues that scripted tests might miss.
- **Early Feedback**: Rapid feedback can lead to quicker defect detection and resolution.
- **Unscripted Approach**: Allows testers to replicate real user behavior.

**Limitations:**

- **Coverage Concerns**: Exploratory testing might not cover all scenarios systematically.
- **Documentation**: Lack of predefined scripts may lead to less documentation.
- **Subjectivity**: Testers' experience and knowledge influence the testing process.

## Techniques for Exploratory Testing

Several techniques can be employed to make the most of exploratory testing and ensure comprehensive coverage.

**Key Techniques:**

- **Session-Based Testing**: Structured approach with defined sessions and goals.
- **Scenario-Based Testing**: Testers simulate real-world user scenarios.
- **Error Guessing**: Based on experience, testers guess where defects might exist.
- **Time-Boxed Exploratory Testing**: Testing conducted within a specific time frame.

# Usability Testing

## User-Centered Testing

Usability testing is a type of testing that evaluates how user-friendly and intuitive a software application is for its intended users. User-centered testing involves real users performing specific tasks to identify usability issues and gather feedback.

**Key Concepts:**

- Usability testing focuses on user interactions, user satisfaction, and ease of use.
- It ensures that the application aligns with user expectations and needs.
- User-centered testing can be performed with various user personas and demographics.

## Usability Heuristics

Usability heuristics are a set of principles or guidelines that help evaluate the overall usability of a software application. These heuristics serve as a reference point to identify common usability issues that might negatively impact the user experience.

**Key Concepts:**

- Usability heuristics provide a structured approach for evaluating user interfaces.
- They help uncover issues related to navigation, layout, consistency, and user feedback.
- Common usability heuristics include visibility of system status, user control, and consistency.

## Conducting Usability Tests

**Key Concepts:**

- Usability tests involve creating realistic tasks and scenarios for users to complete.
- Participants' interactions, feedback, and observations are documented for analysis.
- Results of usability tests help identify areas for improvement in the user experience.

# Compatibility Testing

## Compatibility Matrix

Compatibility testing is a crucial testing type that ensures a software application functions correctly across different environments, configurations, and platforms. A compatibility matrix outlines the combinations of operating systems, browsers, devices, and other relevant factors that need to be tested to guarantee compatibility.

**Key Concepts:**

- The compatibility matrix specifies the various combinations of platforms and configurations to be tested.
- It helps identify potential issues that might arise due to variations in hardware, software, or network settings.
- The matrix serves as a reference for testers to cover a wide range of scenarios during testing.

## Testing Across Browsers and Devices

Testing across browsers and devices is a significant aspect of compatibility testing, as software applications need to work seamlessly on different browsers, operating systems, and devices to ensure a consistent user experience.

**Key Concepts:**
- Cross-browser testing verifies the application's behavior on various web browsers such as Chrome, Firefox, Safari, and Internet Explorer.
- Cross-device testing ensures that the application functions correctly on different devices like smartphones, tablets, and desktop computers.
- Testing responsive design is essential to confirm that the application adapts well to different screen sizes.

# Smoke and Sanity Testing

## Smoke Testing Overview

Smoke testing is an initial level of testing performed on a software build to ensure that the most critical functionalities are working as expected. It aims to quickly identify major defects and blockers before further testing is conducted.

**Key Concepts:**

- Smoke testing is a preliminary check to determine if the build is stable enough for more detailed testing.
- It involves executing a set of basic test cases covering core features without delving into exhaustive testing.
- The goal is to catch show-stopping issues early in the development cycle.

## Sanity Testing vs Smoke Testing

Sanity testing and smoke testing are often confused, but they serve different purposes in the testing process.

**Key Differences:**

- **Smoke Testing**:
  - Focuses on verifying if the build is stable enough for comprehensive testing.
  - Aims to catch show-stopping defects.
  - Generally performed after each new build.
  - A subset of test cases covering major functionalities is executed.
  
- **Sanity Testing**:
  - Focuses on specific changes or new functionalities introduced in a build.
  - Aims to ensure that recent changes have not adversely affected other parts of the application.
  - Typically performed after fixes or additions to verify the affected area.
  - Selective test cases relevant to the recent changes are executed.

# Ad Hoc Testing

## What is Ad Hoc Testing?

Ad hoc testing is an informal testing approach where testers, without a predefined plan or test cases, explore the application spontaneously to identify defects and issues. It's a freeform approach driven by testers' intuition and experience.

**Key Concepts:**

- Ad hoc testing is unscripted and unplanned, allowing testers to freely interact with the application.
- Testers use their creativity and domain knowledge to simulate real-world usage scenarios.
- The goal is to uncover defects that might not be found using formal test cases.

## Purpose and Execution

Ad hoc testing serves specific purposes and can be executed in various situations.

**Key Concepts:**

- **Defect Discovery**: Ad hoc testing aims to uncover defects quickly, especially in areas not covered by formal testing.
- **Exploratory Nature**: Testers explore the application as end users, discovering unexpected issues.
- **Informal Feedback**: Ad hoc testing provides valuable feedback to developers early in the development process.
- **Complementing Formal Testing**: It complements scripted testing approaches by addressing areas that might be missed.
- **Flexibility**: Ad hoc testing is flexible and can be conducted at any stage of the development cycle.

# Boundary Testing

## Testing Boundary Values

Boundary testing is a testing technique focused on testing the extreme or boundary values of inputs and conditions. It aims to identify defects that may arise at the edges or limits of valid or invalid ranges.

**Key Concepts:**

- Boundary values are the minimum and maximum values of input ranges.
- Testers examine values just below, on, and just above the boundaries.
- The goal is to catch issues related to input validation, calculations, and data handling.

## Importance of Boundary Testing

Boundary testing is crucial for identifying issues related to boundary conditions, which are often overlooked in regular testing. These issues can lead to incorrect behavior, crashes, or vulnerabilities.

**Key Concepts:**

- Incorrect handling of boundary values can lead to application failures or security vulnerabilities.
- Boundary testing helps ensure that the application behaves consistently and accurately at the edges of valid ranges.
- Many defects occur precisely at the boundary points due to rounding errors, off-by-one errors, and incorrect assumptions.

# Equivalence Partitioning and Boundary Value Analysis

## Concepts and Techniques

Equivalence Partitioning and Boundary Value Analysis are techniques that help streamline testing by focusing on specific sets of test cases.

**Key Concepts:**

- **Equivalence Partitioning**: Divides input values into equivalence classes to reduce test cases.
- **Boundary Value Analysis**: Focuses on testing the boundaries of input ranges.
- These techniques are based on the idea that defects often lie at boundaries and transitions.

## Applying Equivalence Partitioning

Equivalence Partitioning divides input values into classes that are expected to behave similarly. Testing a representative value from each class helps ensure coverage.

**Key Concepts:**

- Inputs within an equivalence class should produce similar results.
- Testing one representative value is sufficient to validate the behavior of the entire class.
- This technique reduces the number of test cases while maintaining adequate coverage.

## Utilizing Boundary Value Analysis

Boundary Value Analysis focuses on testing the edges and boundaries of input ranges, where defects frequently occur.

**Key Concepts:**

- Boundary values are often prone to defects due to rounding errors or off-by-one errors.
- Test cases include values right at the boundaries and values just outside them.
- This technique ensures comprehensive testing of boundary conditions.

# Positive and Negative Testing

## Positive Testing Explained

Positive testing, also known as "happy path" testing, focuses on testing scenarios where the application is expected to function as intended. It validates that the system behaves correctly with valid inputs and conditions.

**Key Concepts:**

- Positive testing checks if the application's main functionalities work as expected.
- It tests scenarios where users provide valid inputs and follow the expected workflow.
- Positive testing helps verify the core functionality of the application.

## Negative Testing Scenarios

Negative testing involves testing scenarios where the application is expected to handle unexpected or invalid inputs and conditions. It aims to identify how the application responds to erroneous situations.

**Key Concepts:**

- Negative testing tests the application's ability to handle errors gracefully.
- It includes scenarios such as providing incorrect inputs, exceeding limits, or violating constraints.
- Negative testing helps uncover vulnerabilities, security issues, and unexpected behaviors.

# Static Testing

## Static vs Dynamic Testing

Static testing is a testing approach that doesn't involve executing the code. It focuses on examining the code, requirements, and other documentation to identify defects and improve quality. Dynamic testing, on the other hand, involves executing the code to validate its behavior.

**Key Concepts:**

- **Static Testing**: Involves reviews, inspections, and walkthroughs to find issues early.
- **Dynamic Testing**: Involves executing tests and observing how the software behaves.
- Both approaches are essential for comprehensive quality assurance.

## Techniques for Static Testing

Static testing employs various techniques to identify defects and improve the quality of software artifacts before they are executed.

**Key Techniques:**

- **Code Reviews**: Peers review the code to catch logical and syntax errors.
- **Static Analysis**: Tools analyze code for potential issues without executing it.
- **Walkthroughs**: A formal process where developers present their work to colleagues for feedback.
- **Inspections**: A more structured and rigorous approach to code review.
- **Document Reviews**: Reviewing requirements, design documents, and user manuals.

# Black Box vs White Box Testing

## Differences and Similarities

Black box testing and white box testing are two distinct testing approaches that focus on different aspects of software testing.

**Differences:**

- **Black Box Testing**:
  - Testers don't have access to the internal code or logic.
  - Testing is based on input and expected output.
  - Focuses on validating functional requirements and user interactions.
  
- **White Box Testing**:
  - Testers have access to the internal code and logic.
  - Testing is based on code structure, paths, and logic flow.
  - Focuses on validating code coverage, logic errors, and optimization.

**Similarities:**

- Both approaches aim to uncover defects and improve software quality.
- Both contribute to a comprehensive testing strategy when combined.
- Both involve designing test cases and executing tests.

## When to Apply Each Approach

The choice between black box and white box testing depends on the goals of testing, the stage of development, and the information available.

**Key Considerations:**

- **Black Box Testing**:
  - Suitable for testing functional requirements and user experience.
  - Used when only external behavior matters.
  - Applied during system testing, acceptance testing, and regression testing.
  
- **White Box Testing**:
  - Suitable for testing code structure, logic, and optimization.
  - Used when internal logic and paths need validation.
  - Applied during unit testing, code review, and security testing.

# Manual vs Automated Testing

## Comparing Manual and Automated Testing

Manual testing and automated testing are two distinct approaches in software testing, each with its advantages and considerations.

**Comparing Factors:**

- **Human Involvement**:
  - **Manual Testing**: Requires human testers to execute test cases and validate results.
  - **Automated Testing**: Relies on scripts or tools to execute tests without human intervention.

- **Speed and Efficiency**:
  - **Manual Testing**: Time-consuming, especially for repetitive tasks.
  - **Automated Testing**: Faster for repetitive tests and large test suites.

- **Cost and Investment**:
  - **Manual Testing**: Lower initial investment but higher long-term costs.
  - **Automated Testing**: Higher initial investment for tool setup and scripting, but lower long-term costs.

- **Repetitive Tests**:
  - **Manual Testing**: Prone to human error for repeated execution.
  - **Automated Testing**: Reliable and consistent for repeated tests.

## Selecting the Right Approach

The decision to choose manual testing or automated testing depends on several factors, including project requirements and resources.

**Key Considerations:**

- **Project Nature**:
  - **Manual Testing**: Suited for small projects or when features change frequently.
  - **Automated Testing**: Suitable for large projects with stable requirements.

- **Test Frequency**:
  - **Manual Testing**: Preferred for one-time or infrequent testing.
  - **Automated Testing**: Beneficial for frequent testing, regression testing, and continuous integration.

- **Resource Availability**:
  - **Manual Testing**: Requires skilled human testers.
  - **Automated Testing**: Requires expertise in test automation tools and scripting.

# Testing in Different Development Methodologies

## Manual Testing in Waterfall Model

The Waterfall model is a traditional software development methodology characterized by sequential phases. Manual testing in the Waterfall model follows a structured approach.

**Key Points:**

- **Requirement Analysis**: Testers review requirements to create comprehensive test cases.
- **Design Phase**: Testers prepare test cases based on design documents.
- **Implementation Phase**: Testing involves executing test cases manually, reporting defects.
- **Testing Phase**: Rigorous testing is performed before deployment.

## Manual Testing in Agile/Scrum

Agile/Scrum is an iterative and incremental development methodology. Manual testing in Agile requires flexibility and adaptability.

**Key Points:**

- **User Stories**: Testers collaborate with the team to define acceptance criteria.
- **Sprints**: Manual testing is performed within each sprint.
- **Continuous Testing**: Testing happens continuously as features are developed.
- **Regression Testing**: Frequent regression testing is essential.
- **Adaptability**: Testers adjust test cases based on changing requirements.
