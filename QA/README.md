# Table of Contents

- [Internet](#internet)
- [QA Basics](#qa-basics)
  - [Tasks: Learning Write Test Cases](#tasks-learning-write-test-cases)
- [Project Managment](#project-managment)
- [Software Testing Life Cycle](#software-testing-life-cycle)
- [Manual Testing](#manual-testing)
  - [Tasks: Test Case Report](tasks-test-case-report)
  - [Tasks: Test Summary Report](#tasks-test-summary-report)
  - [Tasks: Bug Report](#tasks-bug-report)
- [Non-Functional Testing](#non-functional-testing)
  - [Accessibility testing](#accessibility-testing)
  - [Load and Performance Testing](#load-and-performance-testing)
  - [Security Testing](#security-testing)
- [Testing Techniques](#testing-techniques)
    - [Non-Functional Techniques](#non-functional-techniques)
    - [Functional Techniques](#functional-techniques)
- [Automated Testing](#automated-testing)
  - [Frontend Automation](#frontend-automation)
  - [Backend Automation](#backend-automation)
    - [APIs](#apis)

# Internet

**Resources:**

- [Dosc: What is Internet?](../internet/README.md)

# QA Basics

- [What is Quality Assurance?](#what-is-quality-assurance)
  - [What is Quality?](#what-is-quality)
  - [What is Assurance?](#what-is-assurance)
  - [Quality Assurance in Software Testing](#quality-assurance-in-software-testing)
- [Tester Mindset](#tester-mindset)
- [Test Oracles](#test-oracles)
- [Test Prioritization](#test-prioritization)
- [Black Box vs Gray Box vs White Box Testing](#black-box-vs-gray-box-vs-white-box-testing)
  - [Differences and similarities](#differences-and-similarities)
  - [When to apply each approach](#when-to-apply-each-approach)
- [Test Case Design](#test-case-design)
  - [Types of Test Cases](#types-of-test-cases)
  - [Test Case Format](#test-case-format)
  - [Test case Types](#test-case-types)
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

**Tasks**

- [Intro](../tasks/QA/images/taskManualTesting1.png)

## Tester Mindset

**Explanation:**

The "Tester Mindset" refers to the collection of qualities, attitudes, and approaches that make a software tester effective in their role. It involves a combination of critical thinking, attention to detail, empathy, curiosity, and a commitment to delivering high-quality software.

**Key Concepts:**

- **Attention to Details:** One of the primary mindsets for a successful software tester is attention to details. Testers need to develop the ability to spot even the smallest errors or anomalies within the application.

- **Analytical Skills:** Building strong analytical skills is another key aspect. Testers should possess the capability to analyse complex systems and recognize or find out potential problems. This involves breaking down the software into its components, understanding their interactions, and identifying vulnerabilities.

- **Curiosity:** Testers should have an innate motivation to explore various test scenarios. This curiosity is what drives including or dealing with all or nearly all elements or aspects test coverage, especially when dealing with intricate applications.

- **Persistence:** Persistence plays a pivotal role in a tester's mindset. Testers must be unwavering in their efforts to discover and replicate bugs. This determination in locating and resolving issues is a cornerstone of effective testing.

- **Creativity:** Creativity is a fundamental mindset for testers. It enables them to devise innovative solutions for testing challenges. Thinking creatively and employing unique approaches can be instrumental in uncovering latent problems.

- **Collaboration:** Effective collaboration skills are indispensable. Testers need to seamlessly interact with diverse stakeholders, including business analysts, developers, and scrum masters, especially in agile environments.

- **Risk Management:** Testers should possess the capability to estimate and manage risks associated with the software. Understanding potential risks and executing robust testing strategies.

- **Customer Focus:** Testers should empathize with end-users, understand their needs and expectations. This user-centric approach ensures that the software aligns with user requirements, resulting in a positive user experience.

- **Continuous Learning:** Commitment to continuous learning is a non-negotiable trait. Testers must stay updated on emerging technologies, evolving testing methodologies, and industry trends. Embracing new knowledge is vital for professional growth.

- **Adaptability:** Testers should be flexible and capable of adjusting to changing project requirements, shifting environments, and software updates. Adaptability ensures that testing remains effective in dynamic situations.

**Resources:**

- [Video: Explanation of Tester Mindset](https://www.youtube.com/watch?v=BCuZfdbWnl8)

## Test Oracles

**Explanation:**

A test oracle is a fundamental concept in software testing. It acts as a reference point to verify whether the actual output of a software application aligns with the expected output defined in test cases. A match indicates a pass, while a mismatch results in a fail.

**Key Concepts:**

1. **Manual vs. Automated Test Oracles:** Test oracles come in two primary forms: manual and automated. Manual test oracles involve human experts who estimate the correctness of the software application's behavior. In contrast, automated test oracles use software tools or algorithms to perform the comparison.

2. **Implementation Approaches:** Methods of implememnting:

  - **Requirement Specification:** Expected results are defined within the project's requirement specifications, and test cases are designed to verify compliance with these requirements.

  - **Historical Data:** Test cases can be based on the output of previous versions of the software, utilizing historical data to determine expected results.

  - **Program Analysis:** Test cases are designed by analyzing the internal programming structure of the software application. The code is estimate and to determine expected outcomes, and these are validated against the actual application output.

 - **Validation and Verification:** The primary purpose of test oracles is to validate and verify the correctness of a software   application. By comparing actual and expected outputs, testers can identify whether test cases pass or fail, ultimately ensuring the software meets its intended behavior.

**Resources:**

- [Video: Explanation of Test Oracles](https://www.youtube.com/watch?v=DR22zNNetp0)

## Test Prioritization

**Explanation:**

Test case prioritization becomes especially valuable when there is a large number of test cases, and there is a need to execute them efficiently within a limited time frame. 

**Key Concepts:**

- **Risk-Based Prioritization:** This technique involves prioritizing test cases based on the associated risks. Test cases are estimate for their potential impact on the project, and those with higher risks are executed first. Conversely, if a test case poses minimal risk, it may not be executed.

- **Requirements-Based Prioritization:** Test cases are prioritized according to the criticality of the requirements they cover. Essential features or requirements vital to the customer or business receive higher priority.

- **Business Value-Based Prioritization:** Prioritizing test cases is aligned with the business's objectives and goals. If certain test cases contribute significantly to delivering business value, they are prioritized for execution.

- **Functional Priority-Based Prioritization:** Test cases related to critical functionalities are given priority. This approach ensures that key functionalities are thoroughly tested, accounting for their complexity and importance.

- **Time-Based Prioritization:** Test cases are prioritized to meet specific time constraints or deadlines. For instance, if there's a need to execute a set of test cases within a week, prioritization is adjusted to meet the timeline.

- **Customer Reputation-Based Prioritization:** Customer feedback and reputation play a significant role in prioritization. If a customer emphasizes the importance of specific test cases, they are prioritized to meet customer expectations.

- **Impact-Based Prioritization:** Test cases are prioritized based on their potential impact on the application. If a test case's absence could lead to significant issues, it receives a higher priority for execution.

- **Regression-Based Prioritization:** This method focuses on prioritizing test cases affected by recent changes or regression issues. Test cases related to areas with frequent regressions are prioritized to ensure stability.

- **Resource-Based Prioritization:** Resources like hardware, human resources, and test environments influence prioritization. Test cases are prioritized based on the availability of necessary resources, such as hardware or skilled testers.

- **Historical Failures-Based Prioritization:** Test cases that historically tend to fail when executed are given special attention. These consistently problematic test cases are prioritized to address recurring issues effectively.

**Resources:**

- [Video: Test Prioritization Techniques](https://www.youtube.com/watch?v=drUfHG6tav8)

## Black Box vs Gray Box vs White Box Testing

**Explanation:**

Black Box Testing, Gray Box Testing, and White Box Testing are three different approaches to software testing, each with its own characteristics and purposes. These terms describe how much information and knowledge the tester has about the internal workings of the software being tested.

**Resources:**

- [Video: Black Box vs Gray Box vs White Box Testing](https://www.youtube.com/watch?v=CPVMbZYeiF4)

### Differences and Similarities

**Explanation:**

Black box testing, gray box testing, and white box testing are three distinct testing approaches that involve different levels of access to the internal components of the software.

**Key Concepts:**

*Black Box Testing:*

- **Access to Code**: Testers have no knowledge of the internal code or logic.

- **Focus**: Testing is based on external behavior and functional requirements.

- **Testers Role**: Testers focus on inputs and expected outputs without knowledge of the internal implementation.

- **Similarities**: It is similar to how end-users interact with the system.

**Resources:**

- [Article: Black Box Testin](https://www.guru99.com/black-box-testing.html)

**Key Concepts:**

*Gray Box Testing:*

- **Access to Code**: Testers have partial knowledge of the internal code and logic.

- **Focus**: Testing combines aspects of both black box and white box testing.

- **Testers Role**: Testers can design tests based on the understanding of internal logic to target specific areas.

- **Similarities**: It bridges the gap between black box and white box testing.

**Resources:**

- [Article: Gray Box Testing](https://www.guru99.com/grey-box-testing.html)

**Key Concepts:**

*White Box Testing:*

- **Access to Code**: Testers have complete knowledge of the internal code and logic.

- **Focus**: Testing is based on code structure, paths, and logic flow.

- **Testers Role**: Testers can design tests to cover specific code paths and conditions.

- **Similarities**: It is akin to how developers analyze the code.

**Resources:**

- [Article: White Box Testing](https://www.guru99.com/white-box-testing.html)

### When to Apply Each Approach

**Explanation:**

The choice of when to apply Black Box, Gray Box, or White Box Testing depends on various factors, including the testing objectives, the level of knowledge about the software under test, and the specific testing phase within the software development life cycle.

1. **Black Box Testing:**

- *When to Apply:*

  - **Functional Testing:** Use Black Box Testing primarily for functional testing to ensure that the software meets its specified requirements and behaves as expected from a user's perspective.

  - **Acceptance Testing:** It's commonly used during acceptance testing to determine if the software meets the user's acceptance criteria.

  - **System Testing:** Black Box Testing can be applied at the system level to verify interactions between components and subsystems.
  
  - **Usability Testing:** For evaluating the software's user-friendliness and overall user experience.

- **Advantages:**

  - Reflects how end-users interact with the software.
  - Doesn't require knowledge of internal code, making it suitable for non-technical testers.
  - Emphasizes real-world scenarios and user expectations.

2. **Gray Box Testing:**

- *When to Apply:*

  - **Integration Testing:** Gray Box Testing can be useful for integration testing to verify that different software components work together as expected.

  - **Security Testing:** It's often applied in security testing to identify vulnerabilities that may require some knowledge of the application's internal architecture.

  - **Database Testing:** Useful when testing applications that interact with databases, as some knowledge of data structures and queries can be beneficial.

  - **API Testing:** For testing APIs where understanding data flows and possible integration issues is important.

- **Advantages:**

  - Provides a balance between functional and structural testing.
  - Suitable for uncovering integration-related issues.
  - Helps identify security vulnerabilities that may not be apparent in Black Box Testing.

3. **White Box Testing:**

- *When to Apply:*

  - **Unit Testing:** White Box Testing is essential for unit testing, where individual code units (functions, methods) are tested in isolation.

  - **Code Coverage Analysis:** Used to measure code coverage and ensure that all code paths are exercised.

  - **Security Testing:** Especially useful for identifying code-level security vulnerabilities like SQL injection, buffer overflows, and insecure authentication.

  - **Performance Tuning:** Can be applied to optimize code performance by analyzing and improving algorithms and data structures.

- **Advantages:**

  - Enables thorough code analysis and identification of code-level defects.
  - Essential for ensuring code quality and security.
  - Ideal for developers and testers with knowledge of the software's internal workings.

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

- Destructive test cases (stress testing)

**Example:**

- Positive test cases are used to validate that software behaves correctly with valid inputs, such as logging in with correct credentials. 

- Negative test cases, on the other hand, aim to ensure the software handles invalid inputs appropriately, like incorrect login credentials. 

- Destructive test cases were also discussed, which test the software's limits and may involve actions like rapid clicking or stress testing.

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

- Stressed the need to ensure that embedded links in test cases are clickable and lead to the correct pages. 

- [Download: Test Case Table Credits Thomas Hamilton](https://drive.google.com/uc?export=download&id=0ByI5-ZLwpo25eXFlcU5ZMTJsT28)

**Resources:**

- [Article: How To Write Test Cases - A Complete Guide With Examples And Best Practices](https://www.lambdatest.com/learning-hub/test-case)
- [Article: Writing Effective Test Cases and Test Case Structure and Format](https://www.guru99.com/test-case.html)
- [Article: Test Case Design](https://www.guru99.com/software-testing-techniques.html)

## Tasks: Learning Write Test Cases

- [Tasks: Learning Write Test Cases](./tasks/testCaseDesignTask.md)

# Project Managment

**Resources:**

- [Page: Project Managment](../project-managment/README.md)

# Software Testing Life Cycle

**Explanation:**

The Software Testing Life Cycle is a structured approach that encompasses various phases from the inception of a software project to its completion and release. It ensures that the software meets its intended requirements, is free of defects, and aligns with quality standards.

**Key Concepts:**

- **Requirement Analysis**: This initial phase involves understanding and documenting all project requirements, including functional and non-functional aspects. It sets the foundation for the entire testing process.

- **Test Planning**: Test planning is crucial for outlining the scope of testing, identifying necessary resources, creating schedules, defining deliverables, and estimating efforts. It helps in organizing and managing the testing process effectively.

- **Test Case Design**: In this phase, test cases are designed based on the identified requirements. Test scenarios and cases are created to cover various aspects of the software's functionality, ensuring comprehensive testing.

- **Test Execution**: Test execution involves setting up the testing environment, running test cases, and documenting the results. Testers execute the test cases as per the test plan and report any defects they encounter.

- **Defect Reporting and Tracking**: During test execution, defects or issues are identified and reported to the development team. A defect tracking system is used to manage and monitor the status of these reported defects until they are resolved.

- **Test Closure**: Test closure marks the end of the testing phase. It involves evaluating whether all functionalities have been tested, no new defects are found, testing schedules are met, and there are no project risks related to testing.

**Example:**

For instance, when developing software, the initial requirement analysis phase involves understanding the customer's needs and creating a requirement traceability matrix (RTM) to map requirements to test cases.

During test planning, the scope of testing is defined, resources are allocated, and schedules are established. Test cases are designed in the test case design phase, covering various scenarios and conditions.

Test execution is where the actual testing takes place, with testers running test cases, documenting results, and reporting defects when issues are found. Defects are tracked and managed until closure.

Finally, in the test closure phase, it is determined whether all planned testing activities have been completed successfully, and the project is ready for the next phase, which could be deployment or further development.

# Manual Testing

- [Test Planning](#test-planning)
- [Test Driven Development vs Behavior Driven Development](#test-driven-development-vs-behavior-driven-development)
- [Test Cases and Scenarios](#test-cases-and-scenarios)
- [Reporting](#reporting)
  - [Test Case Report](#test-case-report)
    - [Test Case vs Test Case Report](#test-case-vs-test-case-report)
  - [Test Summary Report](#test-summary-report)
  - [Defect Report (Bug Report)](#defect-report-bug-report)
- [Compatibility](#compatibility)
- [Verification and Validation](#verification-and-validation)
  - [User Acceptance Testing](#user-acceptance-testing)
- [Static Testing](#static-testing)
- [Levels of Testing in Software Testing](#levels-of-testing-in-software-testing)

## Test Planning

**Explanation:**

Test planning involves defining the overall testing strategy for a project, outlining objectives, scope, resources, schedules, and risks.

**Key Concepts:**

- **Objectives:** Define testing goals and expectations.

- **Scope:** Specify what will be tested and what won't.

- **Test Strategy:** Decide on test levels, types, techniques, and environments.

- **Test Schedule:** Allocate timeframes for testing activities.

- **Risk Assessment:** Identify potential risks and mitigation strategies.

**Resources:**

- [Docs: Test Plan](./assets/manualTesting/testPlanDocs.md)

**Example:**

- [Test Planning Example](./assets/manualTesting/testPlanning.md)

## Test Driven Development vs Behavior Driven Development

**Explanation:**

Test Driven Development (TDD) and Behavior Driven Development (BDD) are two software development methodologies that prioritize writing tests before or alongside code to ensure software quality and behavior. While both share the goal of improving software quality, they differ in their focus, syntax, and application.

**Key Concepts:**

*Test Driven Development (TDD):*

**Focus:** 

TDD primarily centers on writing unit tests for individual code components (functions, methods, or classes).

**Syntax:** 

TDD tests are often written using testing frameworks like JUnit, NUnit, or pytest. These tests typically focus on inputs, expected outputs, and internal logic.

**Example:** 

In TDD, you'd write a test for a specific function, supply inputs, and verify that the function produces the expected outputs.

*Behavior Driven Development (BDD):*

- **Focus:** 

BDD emphasizes specifying the behavior of a system or feature from a user's perspective, focusing on high-level functionality.

- **Syntax:** 

BDD tests use a more natural language format, often with "Given-When-Then" clauses. Tools like Cucumber and SpecFlow are commonly used for BDD tests.

**Example:** 

In BDD, you'd describe scenarios in a human-readable format, like "Given a user is logged in, when they click the 'logout' button, then they should be logged out."

**Example:**

**Test Driven Development (TDD):**
1. Write a test case that checks if a sorting algorithm correctly sorts an array.
2. Implement the sorting algorithm.
3. Run the test case, ensuring it passes.

**Behavior Driven Development (BDD):**
1. Describe a high-level feature, such as user authentication.
2. Define scenarios like user login and logout using "Given-When-Then" statements.
3. Use BDD tools to automate and validate these scenarios against the actual application.

**Resources:**

- [Article: Test-Driven Development (TDD)](https://www.guru99.com/test-driven-development.html)

## Test Cases and Scenarios

**Explanation:**

**Test Scenario:**

- Test scenarios are high-level, one-liner descriptions of what you are going to test in an application.
- They provide a brief overview of what functionality or feature you will be testing.
- Test scenarios are typically derived from requirement documents, such as software requirement specifications (SRS) or user stories.
- They serve as the baseline for understanding what needs to be tested in a specific functionality or feature.

**Test Case:**

- Test cases are more detailed descriptions of how you will test a specific scenario.
- Test cases are derived from test scenarios.
- They include step-by-step instructions on how to perform the test, including actions to take, input data, and expected outcomes.
- Test cases are used to execute and verify that a specific scenario works correctly.

**Relation between Test Scenarios and Test Cases:**

- Test scenarios serve as the basis for creating test cases.
- Test cases provide detailed instructions on how to test each scenario.
- Test scenarios help testers identify what needs to be tested, while test cases guide testers through the actual testing process.

- [Test Cases and Scenarios](./assets/manualTesting/testCasesandScenarios.md)

**Resources:**

- [Article: Test Cases and Scenarios](https://www.guru99.com/test-case-vs-test-scenario.html)

## Reporting

**Explanation:**

Reporting involves documenting and communicating testing activities, results, and defects to stakeholders.

**Key Concepts:**

- **Test Execution Reports:** Summarize test runs and outcomes.

- **Defect Reports:** Document defects found during testing.

- **Status Updates:** Keep stakeholders informed about progress.

- **Metrics and KPIs:** Measure testing effectiveness.

**Resources:**

- [Article: Reporting](https://www.guru99.com/defect-management-process.html)

### Test Case Report

**Explanation:**

A Test Case Report, also known as a Test Execution Report, provides an overview of the status and results of executed test cases.

**Example:**

- [Test Case Report](./assets/manualTesting/testCaseReport.md)

### Test Case vs Test Case Report

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

### Test Summary Report

**Explanation:**

- [Explanation: Test Summary Report](../QA/assets/explanation/testSummaryReport.md)

**Example:**

- [Test Summary Report](./assets/manualTesting/testSummaryReport.md)

### Tasks: Test Summary Report

- [Task: Test Summary Report](../QA/tasks/testSummaryReport.md)

### Defect Report (Bug Report)

**Explanation:**

Defect Reports are separate documents used to document and track issues or defects identified during testing. You do not typically write Defect Reports (Bug Reports) within individual test cases.

- Defect Reports document issues found during testing, which may result from executing test cases. These reports are used to communicate the problems to developers or the relevant team responsible for fixing the defects.

**Example:**

- [Example: Defect Report (Bug Report)](./assets/manualTesting/bugReport.md)

## Tasks: Bug Report

- [Task: Defect Report (Bug Report)](../QA/tasks/bugReport.md)

## Compatibility

**Explanation:**

Compatibility testing ensures that software works across various environments, browsers, devices, and operating systems.

**Example:**

- [Compatibility](./assets/manualTesting/compatibility.md)

**Key Concepts:**

- **Browser Compatibility:** Test across different web browsers.

- **Device Compatibility:** Test on various devices (desktop, mobile, tablet).

- **Operating System Compatibility:** Test on different OS versions.

- **Challenges:** Address differences in rendering, functionality, and performance.

**Resources:**

- [Article: Compatibility Testing](https://www.guru99.com/compatibility-testing.html)

## Verification and Validation

**Explanation:** 

Verification and validation are two independent procedures used together to ensure that a product, service, or system meets its requirements.

**Key Concepts:** 

Verification focuses on confirming whether the procedure used to achieve results is correct, while validation focuses on ensuring that the results themselves meet customer requirements.

**Example:**

Verification is checking the correctness of the chosen path to reach a destination (point A to point B). Once the path is chosen, the validation step confirms whether it successfully fulfills the requirement of reaching point B.

In the context of software development, verification involves reviewing work products like requirements, architecture, design, and code. Various types of reviews, such as requirement review, design review, and code review, are conducted to ensure that the chosen procedures are correct.

On the other hand, validation in software development involves testing the results themselves. It checks whether the software output, behavior, or results align with customer requirements. This includes unit tests, integration tests, system tests, and acceptance tests.

In summary, verification focuses on the procedure's correctness, while validation checks whether the results meet customer requirements.

**Resources:**

- [Article: Verification and Validation](https://www.guru99.com/verification-v-s-validation-in-a-software-testing.html)

### User Acceptance Testing

**Explanation:**

User Acceptance Testing (UAT) is a crucial phase in software development where end users or clients evaluate the software to ensure it aligns with their business requirements and functions correctly before it's deployed in the production environment. UAT focuses on validating the end-to-end business processes and confirming that the software meets client expectations.

**Key Concepts:**

1. **Purpose of UAT:** UAT's primary purpose is to validate the business flow, emphasizing end-to-end functionality rather than cosmetic errors or system-level testing.

2. **UAT Participants:** UAT is conducted by the client and end users of the software to ensure it meets their needs.

3. **Need for UAT:** UAT becomes necessary to verify that the final product aligns with evolving requirements, as developers may not always interpret changes accurately during development.

4. **Prerequisites:** Several criteria must be met before conducting UAT, including having business requirements available, completed unit, integration, and system testing, and no critical defects in system integration testing.

5. **UAT Execution Steps:** UAT involves activities like analyzing business requirements, creating a UAT test plan, identifying test scenarios and cases, preparing test data, executing tests, recording results, and confirming business objectives.

6. **Exit Criteria:** Before moving to production, certain conditions must be met, such as resolving critical defects, satisfactory business process functionality, and stakeholder sign-off.

7. **Qualities of UAT Testers:** UAT testers should have a deep understanding of the business, think from the perspective of end users, and be analytical and independent thinkers.

8. **Best Practices:** These include preparing a UAT plan early, conducting pre-UAT sessions during system testing, testing end-to-end business flows, and thinking like an unknown user.

**Syntax:**

UAT involves the following steps:
1. Analyze business requirements.
2. Create a UAT test plan.
3. Identify test scenarios and test cases.
4. Prepare realistic test data.
5. Execute test cases and record results.
6. Confirm that business objectives have been met.
7. Consider exit criteria before moving to production.

**Example:**

In a software development project, UAT is conducted by the client and end users to ensure that the developed software meets their business requirements. The process includes analyzing business requirements, creating a detailed UAT test plan, identifying various test scenarios and test cases, and executing these test cases using realistic test data. Any issues or defects encountered during UAT are reported, and once they are addressed, and the business objectives are confirmed to be met, the software is ready for deployment in the production environment. UAT helps in preventing surprises and ensures that the final product aligns with client expectations.

**Resources:**

- [Article: User Acceptance Testing](https://www.guru99.com/user-acceptance-testing.html)

## Static Testing

**Explanation:**

Static Testing is a software testing technique that aims to identify defects in a software application without executing its code. This method is employed to catch errors at an early stage of development, making it easier to detect and rectify issues. Static Testing is particularly effective at uncovering errors that may go unnoticed during Dynamic Testing, where code is executed.

**Key Concepts:**

1. **Static Testing Types:** Static Testing encompasses two primary types:
   - **Manual Examinations (Reviews):** This involves a manual analysis of code and documentation.
   - **Automated Analysis using Tools:** Automated analysis is performed using specialized tools.

2. **Testing Review:** A critical aspect of Static Testing is the review process, which involves meetings to identify potential defects in the program's design. Reviews can be categorized into Informal Reviews, Walkthroughs, Technical Reviews, and Inspections.

3. **Participants in the Review Process:** During the review process, several roles are involved, including the Moderator, Author, Scribe, Reviewer, and Manager. Each has specific responsibilities, such as overseeing the meeting, addressing defects, and ensuring the review's objectives are met.

4. **Types of Defects Detected:** Static Testing is adept at finding various types of defects, including deviations from standards, non-maintainable code, design flaws, missing requirements, and inconsistent interface specifications. Common defects found include security vulnerabilities, undeclared variables, boundary violations, syntax errors, and inconsistent interfaces.

5. **Tips for Successful Static Testing:** To ensure a successful static testing process, consider focusing on essential aspects, planning and tracking review activities, providing training with examples, addressing interpersonal issues, maintaining a formal process, and striving for continuous improvement in processes and tools.

6. **Why Static Testing:** Static Testing is performed for several reasons, including early defect detection and correction, reduced development timescales, decreased testing costs and time, improved development productivity, and minimizing defects in later stages of testing.

**Syntax:**

Static Testing involves the following key activities:
1. Reviewing code and documentation for defects.
2. Using tools or manual analysis to uncover issues.
3. Conducting review meetings to discuss potential defects.
4. Assigning roles like Moderator, Author, Scribe, Reviewer, and Manager during reviews.

**Example:**

In the software development process, Static Testing plays a crucial role in identifying defects early on. By conducting code reviews, walkthroughs, technical reviews, and inspections, teams can catch issues related to code quality, design, and adherence to standards. This proactive approach helps reduce development timescales, testing costs, and the number of defects that may arise later in the project. Static Testing tools like Checkstyle and Soot automate parts of this process, further enhancing its efficiency.

**Resources:**

- [Article: Static Testing](https://www.guru99.com/testing-review.html)

## Levels of Testing in Software Testing

**Explanation:**

In software testing, there are four primary levels of testing, each serving a specific purpose in ensuring the quality and functionality of a software system. These levels of testing are as follows:

**Key Concepts:**

1. **Unit Testing:** This level of testing focuses on testing individual software components, known as units or modules, in isolation. It aims to verify whether each module performs its intended functionality correctly. Unit testing is typically carried out by developers and is an essential step in ensuring that each part of the software functions as expected.

2. **Integration Testing:** Integration testing involves testing the interaction and data flow between different software modules when they are integrated into a group or system. It ensures that modules work together seamlessly and that data passes correctly between them. Testers usually perform integration testing to validate the integration of various components.

3. **System Testing:** System testing is conducted on the complete, integrated software system. It evaluates whether the system as a whole complies with specified requirements. This level of testing encompasses various aspects, including load testing, performance testing, reliability testing, and security testing. System testing is often the final step before releasing the software to ensure it meets both functional and non-functional requirements.

4. **Acceptance Testing:** Acceptance testing assesses whether the software system meets the requirements outlined in a specification or contract, as per its delivery. This level of testing is typically carried out by end-users or customers, although other stakeholders may also be involved. It serves as a validation step to ensure that the software aligns with the user's needs and expectations.

**Syntax:**

The four levels of software testing are:

1. **Unit Testing:** Testing individual software components.
2. **Integration Testing:** Testing the interaction between integrated modules.
3. **System Testing:** Testing the complete, integrated software system.
4. **Acceptance Testing:** Validating software against specified requirements.

**Example:**

In the software development lifecycle, these four levels of testing play distinct roles:

- **Unit Testing** helps developers ensure that each module functions correctly in isolation.
- **Integration Testing** verifies the seamless interaction between modules.
- **System Testing** evaluates the overall system's performance, reliability, and compliance with requirements.
- **Acceptance Testing** allows users and customers to validate that the software meets their specified needs.

**Resources:**

- [Article: Levels of Testing in Software Testing](https://www.guru99.com/levels-of-testing.html)

# Non-Functional Testing

## Accessibility Testing

- [Accessibility Tools](#acessibility-tools)
  - [TBD: Wave](#wave)

**Explanation:**

Accessibility testing is a form of software testing that focuses on ensuring that an application is usable by people with disabilities, including those with vision, physical, cognitive, literacy, and hearing impairments. It is essential for creating an inclusive digital environment.

**Web Accessibility:** 

Web accessibility refers to the practice of making websites, tools, and technologies accessible to all people, regardless of their disability or impairment. It aims to remove barriers and provide equal access to web content.

**Why Accessibility Testing?:** 

Accessibility testing is crucial for two primary reasons. First, it taps into an untapped market of over one billion disabled users globally, potentially increasing revenue. Second, it helps organizations avoid lawsuits by complying with accessibility legislation.

**Key Concepts:**

1. **Types of Disabilities:** Accessibility testing should consider various types of disabilities, including vision disabilities (blindness, color blindness), physical disabilities (limited motor control), cognitive disabilities (learning difficulties), literacy disabilities, and hearing disabilities (deafness, hearing impairments).

2. **Performing Accessibility Testing:** Accessibility testing can be performed by addressing the needs of different disability types. This includes providing keyboard shortcuts, voice recognition software, clear color contrast, intuitive form design, and focus indicators. It also involves using cascading style sheets (CSS) for visual design and ensuring a simple navigational hierarchy.

3. **Example Test Cases:** Accessibility test cases should cover aspects like verifying keyboard shortcuts, checking the clarity of user manuals, ensuring font sizes can be enlarged, validating captions and labels, testing video and audio controls, and assessing color contrast and page load times.

4. **Designing Accessible Prototypes:** Designing accessible prototypes involves creating user personas that include disabled individuals, ensuring high color contrast, designing intuitive forms, adding descriptive alt text to images, creating focus indicators, using CSS for style sheets, and maintaining a clear navigational hierarchy.

5. **Accessibility Testing Tools:** Accessibility testing can be aided by various tools and resources that help identify accessibility issues and provide guidance on making web content more accessible.

**Resources:**

- [Article: WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Article: Accessibility Testing](https://www.geeksforgeeks.org/software-testing-accessibility-testing/)
- [Documentation: Chrome DevTools](https://developer.chrome.com/docs/devtools/)

### TBD: Wave

**Resources:**

- [Site: Download Browser Extensions](https://wave.webaim.org/extension/)
- [Site: Wave Tutorial](https://www.softwaretestinghelp.com/web-accessibility-testing-tools/)

## Load and Performance Testing

- [Load and Performance Tools](#load-and-performance-tools)
  - [TBD: JMeter](#jmeter)

**Explanation:**

Load and Performance Testing assess the responsiveness, stability, and scalability of a software application under different levels of load and stress. It helps identify bottlenecks, analyze response times, and ensure optimal performance.

**Key Concepts:**

- **Load Testing:** Evaluates application behavior under expected load.

- **Stress Testing:** Tests application behavior under extreme load conditions.

- **Performance Testing:** Ensures application meets response time requirements.

- **Metrics:** Response time, throughput, resource utilization, and error rates.

- **Purpose:** Identify performance issues before application launch.

**Resources:**

- [Article: Load Testing vs Stress Testing vs Performance Testing](https://www.guru99.com/performance-vs-load-vs-stress-testing.html)

### TBD: JMeter

**Example:**

 - [Tasks: Load Testing and Stress Testing and Performance Testing](./assets/examples/jMeterExample/README.md)

**Resources:**

- [Site: JMeter Dosc](https://jmeter.apache.org/)
- [Video: JMeter Tutorial](https://www.youtube.com/playlist?list=PLJ9A48W0kpRIjLkZ32Do9yDZXnnm7_uj_)

## Security Testing

- [Authentication authorization](#authentication-authorization)
- [Vulnerability Scanning](#vulnerability-scanning)
- [OWASP](#owasp)
- [Attack vectors](#attack-vectors)
- [Secrets Management](#secrets-management)
- [Security Tools](#security-tools)
  - [TBD: BurpSuite](#burpsuite)

**Explanation:**

Security Testing ensures that a software application is resilient to security threats and vulnerabilities. It aims to identify and mitigate potential security risks to protect data and systems.

**Key Concepts:**

- **Authentication:** Verifying user identity.

- **Authorization:** Controlling user access to resources.

- **Vulnerability Scanning:** Automated detection of security weaknesses.

- **OWASP:** Common web application security risks.

- **Attack Vectors:** Paths for exploiting vulnerabilities.

- **Secrets Management:** Secure handling of sensitive information.

**Resources:**

- [Article: What is Security Testing?](https://www.guru99.com/what-is-security-testing.html)

### TBD: BurpSuite

**Resources:**

- [Site: Burp Suite Download](https://portswigger.net/burp/releases/professional-community-2023-10-1-2?requestededition=community&requestedplatform=)
- [Site: Burp Suite Dosc](https://portswigger.net/burp/documentation)

### Authentication authorization

**Explanation:**

Authentication verifies the identity of users or systems, while authorization controls access to specific resources or functionalities based on user roles and permissions.

**Key Concepts:**

- **Authentication Factors:** Knowledge-based (passwords), possession-based (tokens), and biometrics.

- **Authorization Models:** Role-based, attribute-based, and policy-based.

- **Single Sign-On (SSO):** Allows access to multiple systems with a single login.

- **Least Privilege Principle:** Users get the minimum access necessary.

- **Authentication vs. Authorization:** Distinct but interconnected security aspects.

  1. Authentication and Authorization are integral to application security.
  2. Authentication validates identity, while Authorization controls access.
  3. Implementing both safeguards your application from unauthorized access and misuse.

**Resources:**

- [Article: Authentication vs. Authorization](https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization)

### Vulnerability Scanning

**Explanation:**

Vulnerability Scanning involves automated tools that scan an application or network for known security vulnerabilities, misconfigurations, and weaknesses.

**Key Concepts:**

- **Automated Scanning:** Tools like Nessus, OpenVAS, and Qualys.

- **CVE Database:** Common Vulnerabilities and Exposures for tracking known vulnerabilities.

- **Continuous Scanning:** Regular scans to identify new vulnerabilities.

- **Penetration Testing:** Manual testing to validate findings and identify unknown issues.
 
**Resources:**

### OWASP

**Explanation:**

The OWASP is a list of the most critical web application security risks. It serves as a guide for developers, testers, and security professionals to prioritize security measures.

**Key Risks:**

1. **Injection Attacks**

2. **Broken Authentication**

3. **Sensitive Data Exposure**

4. **XML External Entities (XXE)**

5. **Broken Access Control**

6. **Security Misconfigurations**

7. **Cross-Site Scripting (XSS)**

8. **Insecure Deserialization**

9. **Using Components with Known Vulnerabilities**

10. **Insufficient Logging & Monitoring**

**Resources:**

- [10 Most Common Web Security Vulnerabilities](https://www.guru99.com/web-security-vulnerabilities.html)

### Attack vectors

**Explanation:**

Attack Vectors are specific paths or techniques used by malicious actors to exploit vulnerabilities and compromise a system's security.

**Key Concepts:**

- **SQL Injection:** Manipulating SQL queries to access or modify data.

  **Resources:**

  - [Injection Attacks](./assets/securityTesting/injectionAttacks.md)

- **Cross-Site Request Forgery (CSRF):** Forcing users to perform actions without their consent.

- **Cross-Site Scripting (XSS):** Injecting malicious scripts into web pages viewed by other users.

- **Phishing:** Deceptive techniques to trick users into revealing sensitive information.

- **Zero-Day Exploits:** Attacks targeting newly discovered vulnerabilities.

**Resources:**

- [Article: What is an attack vector?](https://www.cloudflare.com/en-gb/learning/security/glossary/attack-vector/)

### Secrets Management

**Explanation:**

Secrets Management involves securely storing, accessing, and distributing sensitive information such as passwords, API keys, and cryptographic keys.

**Key Concepts:**

- **Key Management:** Safeguarding encryption keys used to protect data.

- **Vaults and Key Stores:** Secure storage solutions for secrets.

- **Rotation and Expiry:** Regularly changing secrets to minimize exposure.

- **Access Control:** Restricting who can access and modify secrets.

- **Audit Trails:** Monitoring and recording access to secrets.

**Resources:**

- [Secrets Management: Tools & Best Practice](https://snyk.io/learn/secrets-management/)

# Testing Techniques

**Explanation:** 

| Criteria                        | Non-Functional Techniques       | Functional Techniques       |
|---------------------------------|---------------------------------|-----------------------------|
| **Focus**                       | Evaluate system attributes,    | Verify specific software   |
|                                 | performance, and usability.    | functions or features.     |
| **Purpose**                     | Ensure quality attributes      | Validate correct behavior   |
|                                 | like reliability, scalability, | of software against       |
|                                 | and security.                  | predefined requirements.   |
| **Examples**                    | - Load testing                | - Unit testing              |
|                                 | - Security testing            | - Integration testing       |
|                                 | - Usability testing           | - Regression testing        |
|                                 | - Performance testing         | - Acceptance testing        |
| **Test Cases**                  | Typically, test cases         | Test cases are based on   |
|                                 | are based on user scenarios  | functional specifications |
|                                 | and real-world usage.         | or use cases.              |
| **Metrics**                     | Metrics include response      | Metrics may include test   |
|                                 | time, throughput, error rate, | coverage, pass/fail rates, |
|                                 | and resource utilization.     | and defect density.        |
| **Testing Tools**               | Tools may include load        | Tools include testing      |
|                                 | testing tools, security      | frameworks, test automation|
|                                 | scanning tools, and           | tools, and test management |
|                                 | usability testing tools.      | tools.                      |
| **Challenges**                  | Challenges often revolve      | Challenges may involve    |
|                                 | around simulating real-world  | keeping test cases in sync |
|                                 | conditions and measuring     | with changing requirements|
|                                 | subjective qualities like     | and ensuring thorough      |
|                                 | usability.                    | coverage of functionality. |


**Resources:**

- [Article: Testing Techniques](https://www.guru99.com/non-functional-testing.html)

## Non-Functional Techniques

- [Load Testing](#load-testing)
- [Performance Testing](#performance-testing)
- [Stress Testing](#stress-testing)
- [Security Testing](#security-testing)
- [Accessibility Testing](#accessibility-testing)

### Load Testing

**Explanation:**

Load testing involves assessing a system's performance under specific load conditions to determine its capacity and capability to handle a certain volume of users or transactions.

**Key Concepts:**

- **Load:** The amount of work a system is subjected to during testing.

- **Objective:** Identify performance bottlenecks, measure response times, and assess system scalability.

- **Types:** Concurrent users, transactions, or data volume are typically tested.

- **Tools:** Load testing tools like JMeter, Gatling, or locust can automate load simulations.

**Resources:**

- [Article: Load Testing](https://loadninja.com/load-testing/)

### Performance Testing

**Explanation:**

Performance testing evaluates a system's responsiveness, stability, and overall performance under varying conditions, ensuring it meets user expectations.

**Key Concepts:**

- **Types:** Includes load testing, stress testing, and endurance testing.

- **Metrics:** Key performance indicators (KPIs) such as response time, throughput, and resource utilization.

- **Benefits:** Identifies performance bottlenecks, enables capacity planning, and ensures user satisfaction.

**Resources:**

- [Article: Performance Testing](https://www.guru99.com/performance-testing.html)

### Stress Testing

**Explanation:**

Stress testing evaluates a system's behavior under extreme conditions that exceed its normal operational capacity. It helps identify breaking points and potential failures.

**Key Concepts:**

- **Types:** Overloading system resources, such as memory, CPU, or network.

- **Purpose:** Determine system stability and reliability under high stress.

- **Challenges:** Requires careful planning to avoid damaging the system during testing.

**Resources:**

- [Article: Stress Testing](https://www.guru99.com/stress-testing-tutorial.html)
- [Article: What is a DoS Attack and How to DoS Someone [Ping of Death]](https://www.guru99.com/ultimate-guide-to-dos-attacks.html)

### Security Testing

**Explanation:**

Security testing assesses a system's vulnerabilities and weaknesses to identify potential security risks and protect against unauthorized access, data breaches, and other threats.

**Key Concepts:**

- **Types**: Includes penetration testing, vulnerability scanning, and security code reviews.

- **Objectives**: Identify vulnerabilities, assess risk levels, and ensure compliance with security standards.

- **Criticality**: Security testing is crucial to protect sensitive data and user privacy.

**Resources:**

- [Article: Security Testing](https://www.guru99.com/what-is-security-testing.html)

### Accessibility Testing

**Explanation:**

Accessibility testing ensures that a software application is usable by people with disabilities, conforming to accessibility standards and guidelines.

**Key Concepts:**

- **Types**: Involves testing for visual, auditory, cognitive, and motor impairments.

- **Guidelines**: Compliance with standards like WCAG (Web Content Accessibility Guidelines).

- **Importance**: Accessibility testing promotes inclusivity and ensures software is usable by all users.

**Resources:**

- [Article: Accessibility Testing](https://www.guru99.com/accessibility-testing.html)

**Tasks**

- [Accessibility Testing](../tasks/QA/testingTechniques/accessibilityTesting.md)

## Functional Techniques

- [Experience-based](#experience-based)
  - [Exploratory Testing](#exploratory-testing)
  - [Ad Hoc Testing](#ad-hoc-testing)
- [Boundary value](#boundary-value)
- [Equivalence Partitioning](#equivalence-partitioning)
- [Decision Table Testing](#decision-table-testing)
- [State Transition Testing](#state-transistion-testing)
- [Smoke and Sanity Testing](#smoke-and-sanity-testing)
- [Regression Testing](#regression-testing)
- [Unit Testing](#unit-testing)
- [E2E testing](#e2e-testing)
- [Integration Testing](#integration-testing)

### Experience-based

### Exploratory Testing

**Explanation:**

Exploratory testing is a style of software testing that places emphasis on personal freedom and responsibility for individual testers. It involves testers exploring an application without predefined test cases or strict requirements. Testers aim to discover issues, learn about the application, and document their findings, often with a focus on finding bugs early in the development process.

**Key Concepts:**

- **Freedom and Responsibility:** Testers have the freedom to explore the application as they see fit, relying on their experience and intuition. They take personal responsibility for the quality of their work and continuously optimize their testing process.

- **Learning and Discovery:** Exploratory testing is about learning and understanding the application, its features, and its behavior. Testers may identify potential issues that weren't apparent from the requirements or documentation.

- **Ad Hoc Testing:** Testers conduct testing sessions in an ad hoc manner, without rigid test scripts or predefined steps. They interact with the application as an end-user might, trying to uncover defects.

- **Session-Based Testing:** Exploratory testing is often organized into sessions with predefined time limits. Testers take notes during these sessions, recording what they've tested, what they've found, and any issues they've encountered.

**Example:**

The tester explores the application by adding a new user, observing how it responds to different inputs, noting down issues, and learning about its behavior. During the session, the tester records findings, such as the application's response to invalid input and the structure of HTTP requests. This hands-on approach helps identify potential defects and unexpected behavior.

**Resources:**

- [Article: Exploratory Testing](https://www.guru99.com/exploratory-testing.html)
- [Video: Exploratory Testing](https://www.youtube.com/watch?v=aX42Qr0eeuI&t=658s)

### Ad Hoc Testing

**Explanation:**

Ad hoc testing is an informal and unstructured approach to software testing. It involves testing an application randomly, without following a predefined test plan or documentation. The goal of ad hoc testing is to discover critical defects and vulnerabilities that may be missed in formal or structured testing methods.

**Key Concepts:**

- Random and unstructured testing.

- Focuses on critical flows and breaking the application.

- Relies on the tester's experience and intuition.

- Minimal to no documentation.

**Example:**

Imagine testing a login page without a documented test plan. Testers might try various combinations of input, including special characters, non-English characters, and invalid data, to uncover potential issues.

**Tasks**

- [Tasks: Exploratory Testing and Ad Hoc Testing](./tasks/experienceBased.md)

### Boundary value

**Explanation:**

Boundary value a nalysis, also known as boundary value testing, is a black box testing technique used to design test cases by focusing on the boundaries of acceptable input values. In this technique, testers test the extreme values or boundaries of input ranges to ensure that the system functions correctly at these critical points.

**Key Concepts:**

- Black box testing technique.

- Focuses on boundary values, including minimum and maximum acceptable inputs.

- Aims to identify issues related to boundary conditions.

- Typically applied to input fields or parameters.

**Examples:**

- [Example: Boundry Value](./assets/examples/testingTechniques/boundyValue.md)

**Tasks**

- [Tasks: ](./tasks/boundryValueTesting.md)

### Equivalence Partitioning

**Explanation:**

Equivalence Partitioning is a straightforward yet highly efficient software testing technique used to create test cases. It involves categorizing input data into partitions or groups based on certain characteristics or behaviors. The fundamental idea is to test representative values from each partition to ensure adequate test coverage.

**Key Concepts:**

- Input data is grouped into partitions.

- Elements within the same partition behave similarly.

- Testing is focused on representative values from each partition.

- Helps reduce the number of test cases while maintaining coverage.

**Syntax:**

Equivalence Partitioning involves dividing input data into partitions based on their equivalence in terms of expected behavior. Each partition is then tested with at least one representative test case.

**Example:**

- [Example: Equivalance Partioning](./assets/examples/testingTechniques/equivalencePartioning.md)

**Tasks**

- [Tasks: Equivalance Partioning](./tasks/)

### Decision Table Testing

**Explanation:**

Decision Table Testing is a black-box testing technique used to systematically test combinations of input conditions or rules to determine the corresponding actions or outcomes. It is particularly useful when the behavior of a software application depends on multiple input conditions or factors.

**Key Concepts:**

- Decision tables are used to model combinations of input conditions and expected actions.

- Each rule or condition combination in the decision table represents a test case.

- Decision tables help identify valid and invalid input combinations.

- Test cases are derived from the possible combinations of input conditions.

**Syntax:**

In decision table testing, you create a table that lists all possible combinations of input conditions and the corresponding expected actions or outcomes. Each row in the table represents a unique test case.

**Example:**

- [Example: Decision Table Testing](./assets/examples/testingTechniques/decisionTableTesting.md)

**Tasks**

- [Tasks: ](./tasks/)

### State Transition Testing

**Explanation:**

State Transition Testing is a black-box testing technique that focuses on the behavior of a software application in response to different states and transitions between those states. In this technique, the software's behavior is analyzed based on various input events or conditions that trigger transitions from one state to another.

**Key Concepts:**

- State Transition Diagrams (also known as Statecharts) are often used to model the states and transitions of the software.

- States represent the different conditions or modes in which the software can operate.

- Transitions represent the events or inputs that cause the software to change from one state to another.

- Test cases are designed to validate the software's behavior as it moves through different states and transitions.

**Syntax:**

State Transition Testing involves creating state transition diagrams that visually represent the states and transitions of the software. Test cases are derived from these diagrams to ensure comprehensive coverage of state transitions.

**Example:**

- [Example: State Transition Testing](./assets/examples/testingTechniques/stateTransitionTesting.md)

**Tasks**

- [Tasks: ](./tasks/)

### Smoke and Sanity Testing

**Explanation:**

Smoke Testing and Sanity Testing are two essential levels of software testing that serve different purposes during the software development lifecycle. Both are preliminary tests performed before detailed testing begins.

- [Explanation: Table Smoke vs Sanity Testing](./assets/explanation/smokeAndSanityTesting.md)

**Resources:**

- [Article: Sanity Testing Vs. Smoke Testing – Difference Between Them](https://www.guru99.com/smoke-sanity-testing.html)
- [Video: Sanity Testing Vs. Smoke Testing](https://www.youtube.com/watch?v=u5gC4bD9cCQ)

**Tasks**

- [Tasks: ](./tasks/)

### Regression Testing

**Explanation:**

Regression Testing verifies that new code changes do not negatively impact existing functionalities.

**Key Concepts:**

- **Purpose**: Prevent introduction of new defects while modifying code.

- **Scope**: Re-tests affected areas and related functionalities.

- **Automated Regression**: Automated tests for efficient testing.

**Resources:**

- [Article: Regression Testing](https://www.guru99.com/regression-testing.html)
- [Video: Regression Testing](https://www.youtube.com/watch?v=AWX6WvYktwk&t=71s)

### Unit Testing

**Explanation:**

Unit Testing involves testing individual units or components of a software application in isolation to ensure their correctness.

**Key Concepts:**

- **Focus**: Tests small code units like functions, methods, or classes.

- **Isolation**: Isolates units from the rest of the application.

- **Automation**: Often automated for efficient execution.

- **White Box Testing**: Requires knowledge of code internals.

**Resources:**

- [Unit Testing](https://www.guru99.com/unit-testing-guide.html)

### End-to-End (E2E) Testing

**Explanation:**

End-to-End (E2E) Testing validates the complete flow of an application, simulating real user scenarios.

**Key Concepts:**

- **Scope**: Verifies interactions between different system components.

- **User Journeys**: Tests complete user workflows.

- **Real-World Scenarios**: Simulates how users interact with the application.

- **Challenges**: Requires testing across various layers and technologies.

**Resources:**

- [End-to-End (E2E) Testing](https://www.guru99.com/end-to-end-testing.html)

### Integration Testing

**Explanation:**

Integration Testing ensures that different components or modules of a software application work together seamlessly.

**Key Concepts:**

- **Interaction**: Validates interactions between integrated components.
- **Functionalities**: Tests combined functionalities of integrated parts.
- **Top-Down and Bottom-Up**: Different integration strategies.
- **Dependencies**: Identifies defects at the component interface level.

**Resources:**

- [Integration Testing](https://www.guru99.com/integration-testing.html)

# Automated Testing

Automated testing is a crucial practice in software development that involves using tools and scripts to automatically test software applications. This ensures that the software functions correctly, performs well, and meets its intended requirements. Automated testing helps identify bugs, regressions, and performance issues early in the development process.

## Backend Automation

### APIs

**Resources:**

- [Introduction: APIs](../api/README.md)

### Postman

- [Postman](#postman)

**Example:**

- [Tasks: Google APIs](./tasks/postManTesting/googleApis.md)



