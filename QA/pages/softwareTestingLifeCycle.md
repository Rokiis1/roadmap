# Software Testing Life Cycle

- [Requirement Analysis](#requirement-analysis)
- [Test Planning](#test-planning)
- [Defect Reporting and Tracking](#defect-reporting-and-tracking)
- [Test Closure](#test-closure)

**Explanation:**

The Software Testing Life Cycle is a structured approach that encompasses various phases from the inception of a software project to its completion and release. It ensures that the software meets its intended requirements.

**Key Concepts:**

- **Requirement Analysis**: This initial phase involves understanding and documenting all project requirements, including functional and non-functional aspects. It sets the foundation for the entire testing process.

- **Test Planning**: Test planning is crucial for outlining the scope of testing, identifying necessary resources, creating schedules, defining deliverables, and estimating efforts. It helps in organizing and managing the testing process effectively.

- **Test Case Design**: In this phase, test cases are designed based on the identified requirements. Test scenarios and cases are created to cover various aspects of the software's functionality, ensuring comprehensive testing.

- **Test Execution**: Test execution involves setting up the testing environment, running test cases, and documenting the results. Testers execute the test cases as per the test plan and report any defects they encounter.

- **Defect Reporting and Tracking**: During test execution, defects or issues are identified and reported to the development team. A defect tracking system is used to manage and monitor the status of these reported defects until they are resolved.

- **Test Closure**: Test closure marks the end of the testing phase. It involves evaluating whether all functionalities have been tested, no new defects are found, testing schedules are met, and there are no project risks related to testing.

## Requirement Analysis

**Explanation:**

Requirement Analysis is the first phase in the Software Testing Life Cycle (STLC). In this phase, testers analyze the requirements from a testing perspective. This involves understanding the system, identifying testable requirements, and determining the testing strategies to be used.

**Key Concepts:**

- **Understanding the system:** Testers need to understand the functionality, architecture, and performance requirements of the system.

- **Identifying testable requirements:** Not all requirements are testable. Testers need to identify which requirements can be validated through testing.

- **Determining testing strategies:** Based on the requirements, testers decide the testing strategies like unit testing, integration testing, system testing.

- **Creating a test plan:** Based on the understanding of the system and the testing strategies, testers create a test plan. This document outlines what will be tested, how it will be tested, and the expected outcomes.

- **Preparing test cases and test data:** Testers prepare test cases to cover all the testable requirements. They also prepare test data that will be used to execute the test cases.

- **Setting up the test environment:** Testers set up the test environment to match the conditions under which the system will be used. This includes setting up the hardware, software, and network configurations.

**Example:**

- [Example: Traceability Matrix (RTM) in the Requirement Analysis](../assets/examples/stlc/rtmTesting.md)

## Test Planning

- [Purpose and Content of a Test Plan](#purpose-and-content-of-a-test-plan)
- [Tester's Contribution to Iteration and Release Planning](#testers-contribution-to-iteration-and-release-planning)
- [Entry Criteria and Exit Criteria](#entry-criteria-and-exit-criteria)
- [Estimation Techniques](#estimation-techniques)
- [Test Case Prioritization](#test-case-prioritization)

### Purpose and Content of a Test Plan

**Explanation:**

A test plan is to outline the strategy that will be used to verify and ensure that a product or system meets its design specifications and other requirements. A test plan serves as a blueprint for all testing activities and enables project members to understand the details of the testing process.

**Key Concepts:**

- **Test Objectives:** These are the goals and objectives that the tests are designed to meet.

- **Test Scope:** This outlines the boundaries of the testing, including what will be tested and what will not be tested.

- **Test Strategy:** This describes the testing approach that will be used to achieve the testing objectives.

- **Test Schedule:** Describes when testing activities will take place.

- **Resource Planning:** This includes details about the resources required for testing, including personnel, test environments, and test tools.

- **Risk Management:** This includes identification of potential risks and plans for risk mitigation.

- **Test Deliverables:** This includes the expected outputs from the testing process, such as test cases, test data, and test reports.

### Tester's Contribution to Iteration and Release Planning

**Explanation:**

They contribute by estimating the time and effort required for testing, identifying the scope of testing, and planning the testing process. They also help in identifying potential risks and devising mitigation strategies.

Testers also contribute by providing feedback on the quality of the product at the end of each iteration, which helps in making informed decisions about the release.

**Key Concepts:**

- **Test Planning:** Testers contribute to planning the testing process, including defining the scope of testing and estimating the time and effort required.

- **Risk Identification and Mitigation:** Testers help in identifying potential risks and devising strategies to mitigate them.

- **Quality Feedback:** Testers provide feedback on the quality of the product at the end of each iteration, which is crucial for release planning.

### Entry Criteria and Exit Criteria

**Explanation:**

Entry criteria are the conditions that must be met before testing can begin. Exit criteria are the conditions that must be met before testing can be considered complete.

**Key Concepts:**

- **Entry Criteria:** These are the conditions that must be met before a test phase can begin. They may include requirements like completed and reviewed design documents, availability of test data, or a stable build ready for testing.

- **Exit Criteria:** These are the conditions that must be met before a test phase can be considered complete. They often include requirements like all planned tests executed, all critical bugs fixed, or test coverage reaching a certain threshold.

### Estimation Techniques

**Explanation:**

Estimation techniques are used to estimate the time and effort required for testing.

**Key Concepts:**

- **Function Point Analysis (FPA):** This technique estimates the effort based on the functionality provided by the software. It considers factors like the number of user inputs, user outputs, user inquiries, files, and external interfaces.

- **Use Case Point Method:** An estimation technique based on the complexity and size of use cases.

- **Test Point Analysis:** This technique is similar to FPA but is more focused on the testing process. It considers factors like the complexity of the functions, the level of reusability of test cases, and the level of testing (unit, integration, system).

- **Three Point Estimation:** This technique uses three scenarios (optimistic, most likely, and pessimistic) to estimate the effort. The final estimate is a weighted average of these three scenarios.

- **PERT (Program Evaluation and Review Technique):** This technique is similar to the Three Point Estimation but uses a different formula to calculate the weighted average. It's often used when there's a high degree of uncertainty about the effort.

### Test Case Prioritization

**Explanation:**

Test Case Prioritization is a strategy in software testing where test cases are ordered based on their importance, impact, or likelihood of catching bugs. The goal is to increase the effectiveness and efficiency of testing by finding defects earlier in the testing process.

**Key Concepts:**

- **Risk-Based Prioritization:** Test cases are prioritized based on the risk associated with the functionality they are testing.

- **Business Value-Based Prioritization:** Test cases are prioritized based on the business value of the functionality they are testing.

- **Test Case Complexity:** Complex test cases that cover multiple functionalities or modules may be prioritized to ensure broader coverage early in the testing process.

- **Frequent Usage:** Features or functionalities that are frequently used by end-users are tested earlier.

- **Dependency:** Test cases for functionalities that other parts of the system depend on are given higher priority.

**Example:**

- [Example: Test Plan](../assets/examples/stlc/testPlan.md)

## Defect Reporting and Tracking

- [Defect Report (Bug Report)](#defect-report-bug-report)
- [Test Summary Report](#test-summary-report)

## Defect Report (Bug Report)

**Explanation:**

A Defect Report, also known as a Bug Report, is a document that records any defects identified during the testing process. It provides detailed information about the defect to help the development team understand the issue and fix it. The report is typically created by the tester who found the defect and is then assigned to a developer to fix.

**Example:**

- [Example: Defect Report (Bug Report)](../assets/examples/stlc/bugReport.md)

## Test Summary Report

**Explanation:**

A Test Summary Report is a document that provides a comprehensive summary of all testing activities conducted during a software testing life cycle. It is usually prepared at the end of the testing phase and is used to communicate the overall status and results of the testing process to stakeholders.

**Key Concepts:**

Test Summary: A brief overview of the testing activities, including the types of testing performed and the testing tools used.

Test Metrics: Quantitative measures of the testing process, such as the number of test cases executed, the number of defects found and fixed, test case effectiveness, etc.

Defect Analysis: A detailed analysis of the defects found during testing, including their severity, priority, and status.

Test Coverage: The extent to which the software has been tested. This can be measured in terms of requirements coverage, code coverage, etc.

Challenges and Risks: Any challenges encountered during the testing process and any risks associated with the software going forward.

Recommendations: Suggestions for improving the software or the testing process in future releases.

Approval: A sign-off from the test manager or other relevant stakeholder indicating that the testing process has been completed and the software is ready for release.

**Example:**

- [Example: Test Summary Report](../assets/examples/stlc/testSummaryReport.md)

## Test Closure

**Explanation:**

The main purpose of this phase is to evaluate the entire testing process, ensure all testing work has been completed and documented, and learn from the process to improve future testing activities.

**Key Concepts:**

- **Test Completion Check:** The team checks to ensure all testing has been completed and all test cases have been executed.

- **Test Metrics Collection:** The team collects and analyzes test metrics, such as the number of test cases executed, the number of defects found and fixed, etc.

- **Test Documentation:** The team ensures all test documentation is complete and organized for future reference. This includes test plans, test cases, bug reports, etc.

- **Test Deliverables:** The team prepares all the deliverables to be handed over to the stakeholders. This includes the Test Case Document, Test Scripts, Bug Reports, Test Summary Report, Test Metrics, Release Note, and Sign-off Document.

- **Sign-off:** The formal closure of the testing phase, indicating that the software has met the defined quality standards and is ready for release.

- [Example: Test Closure](../assets/examples/stlc/testClosure.md)