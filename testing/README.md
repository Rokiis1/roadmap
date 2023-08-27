# Table of Contents

- [QA Basics](#qa-Basics)
  - [What is Quality Assurance?](#what-is-quality-assurance)
    - [What is Quality?](#what-is-quality)
    - [What is Assurance?](#what-is-assurance)
    - [Quality Assurance in Software Testing](#quality-assurance-in-software-testing)
  - [Tester Mindset](#tester-mindset)
    - [Explanation of Tester Mindset](#explanation-of-tester-mindset)
  - [Test Oracles](#test-oracles)
    - [Explanation of Test Oracles](#explanation-of-test-oracles)
    - [Types of Test Oracles](#types-of-test-oracles)
  - [Test Prioritization](#test-prioritization)
  - [Black Box vs Gray Box vs White Box Testing](#black-box-vs-gray-box-vs-white-box-testing)
    - [Differences and similarities](#differences-and-similarities)
    - [When to apply each approach](#when-to-apply-each-approach)
  - [Test Case Design](#test-case-design)
    - [Writing effective test cases](#writing-effective-test-cases)
    - [Test case structure and format](#test-case-structure-and-format)
    - [Test case prioritization](#test-case-prioritization)
  - [Testing Techniques](#testing-techniques)
    - [Non-Functional Testing](#non-functional-testing)
      - [Load Testing](#load-testing)
      - [Performance Testing](#performance-testing)
      - [Stress Testing](#stress-testing)
      - [Security Testing](#security-testing)
      - [Accessibility Testing](#accessibility-testing)
    - [Functional Testing](#functional-testing)
      - [User Acceptance Testing (UAT)](#uat)
      - [Exploratory Testing](#exploratory-testing)
      - [Smoke and Sanity Testing](#smoke-and-sanity-testing)
      - [Regression Testing](#regression-testing)
      - [Unit Testing](#unit-testing)
      - [E2E testing](#e2e-testing)
      - [Integration Testing](#integration-testing)
- [Software Development Life Cycle (SDLC) Delivery Model](#sdlc)
    - [Agile Model](#agile-model)
    - [Waterfall Model](#waterfall-model)
- [QA Manual Testing](#qa-manual-testing)
    - [Test Planning](#test-planning)
    - [TDD - Test Driven Development](#tdd)
    - [Test Cases and Scenarios](#test-cases-and-scenarios)
    - [Reporting](#reporting)
    - [Compatibility](#compatibility)
    - [Verification and Validation](#verification-and-validation)
- [Non Functional Testing](#non-functional-testing)
  - [Accessibility testing](#accessibility-testing)
    - [Chrome dev tools](#chrome-dev-tools)
  - [Load and Performance Testing](#load-and-performance-testing)
    - [WebPageTest](#web-page-test)
    - [Lighthouse](#lighthouse)
- [Automated Testing](#automated-testing)

# QA Basics

## What is Quality Assurance?

### What is Quality?

**Explanation:**
Quality refers to the degree of excellence or superiority of a product or service. In software, quality encompasses factors such as reliability, performance, security, usability, and meeting customer expectations.

**Key Concepts:**

- **Fitness for Purpose**: A product meets its intended purpose effectively.
- **Conformance to Requirements**: The product adheres to specified requirements.
- **Customer Satisfaction**: The product satisfies customer needs and expectations.
- **Continuous Improvement**: Ongoing efforts to enhance quality.

### What is Assurance?

**Explanation:**

Assurance involves building confidence that a product will meet its quality objectives. It involves proactive activities that help prevent defects and issues.

**Key Concepts:**

- **Preventive Activities**: Measures taken to avoid defects in the first place.
- **Process Adherence**: Ensuring that processes are followed consistently.
- **Standardization**: Implementing best practices and standards.
- **Early Detection**: Identifying and addressing issues early in the development lifecycle.

### Quality Assurance in Software Testing

**Explanation:**

Quality Assurance (QA) in software testing involves processes and practices that ensure software products meet specified quality standards.

**Key Concepts:**

- **Process Improvement**: Identifying areas for process enhancement.
- **Standardization**: Establishing testing standards and guidelines.
- **Test Planning**: Developing comprehensive test plans.
- **Metrics and Measurement**: Using metrics to assess and improve quality.

- ![What is QA?](./images/whatIsQA.png)

**Resources:**

- [What is Quality Assurance(QA)?](https://www.guru99.com/all-about-quality-assurance.html)

**Tasks**

- [QA Basics](../tasks/testing/manualTesting/README.md)

## Tester Mindset

### Explanation of Tester Mindset

**Explanation:**
The "Tester Mindset" refers to the collection of qualities, attitudes, and approaches that make a software tester effective in their role. It involves a combination of critical thinking, attention to detail, empathy, curiosity, and a commitment to delivering high-quality software.

**Key Qualities and Attitudes:**

- **Critical Thinking**: Testers analyze requirements, design, and code critically to identify potential defects.
- **Attention to Detail**: Testers meticulously scrutinize each component to catch even minor issues.
- **Empathy**: Testers put themselves in users' shoes to understand their needs and expectations.
- **Curiosity**: Testers are naturally curious, always exploring the application to uncover defects.
- **Open-Mindedness**: Testers approach testing with an open mind, avoiding assumptions.
- **Communication Skills**: Testers effectively communicate issues to developers and stakeholders.
- **Problem-Solving**: Testers have a knack for finding solutions to complex issues.
- **Continuous Learning**: Testers stay updated with technology trends and testing methodologies.

## Test Oracles

### Explanation of Test Oracles

**Explanation:**

A **test oracle** is a mechanism or principle used to determine the expected outcome of a test case. It's a benchmark against which the actual output of a software component or system is compared to determine if the behavior is correct or not.

**Key Concepts:**

- **Expected Behavior**: Test oracles establish what the system's behavior should be under specific conditions.
- **Validation**: Test oracles are used to validate the correctness of outputs.
- **Manual and Automated**: Oracles can be manual (human judgment) or automated (defined by rules).
- **Dynamic and Static**: Dynamic oracles evaluate runtime behavior, while static oracles analyze code or documentation.
- **Challenges**: Creating accurate and reliable test oracles can be challenging.

**Resources:**

### Types of Test Oracles

**Explanation:**

There are different types of test oracles used to determine expected outcomes based on different criteria.

**Types:**
- **Explicit Oracles**: Clearly defined expected results based on specifications.
- **Derived Oracles**: Derived from the same system or similar systems.
- **Comparative Oracles**: Compare the system under test to another system or model.
- **Stochastic Oracles**: Use statistical data to determine expected behavior.

## Test Prioritization

### Explanation of Test Prioritization

**Explanation:**

Test prioritization is the process of ordering or ranking test cases based on their importance, risks, and potential impact on the system under test. It ensures that the most critical tests are executed first, optimizing testing efforts in scenarios where time and resources are limited.

**Key Concepts:**

- **Risk Assessment**: Test prioritization considers factors like critical functionalities, user impact, and potential defects.
- **Resource Optimization**: It ensures that high-priority tests are executed within constrained resources.
- **Early Detection**: Prioritizing critical tests increases the chances of detecting showstopper issues early.
- **Test Dependencies**: Dependencies among test cases influence their order of execution.

**Resources:**

### Test Prioritization Techniques

**Explanation:**

There are various techniques to prioritize test cases based on different criteria.

**Techniques:**

- **Risk-Based Prioritization**: Prioritize based on potential risks and their impact.
- **Requirements-Based Prioritization**: Prioritize based on critical functionalities or requirements.
- **Customer Impact Prioritization**: Prioritize based on user impact and customer needs.
- **Automated Test Impact Analysis**: Prioritize tests affected by code changes.
- **Dependency-Based Prioritization**: Prioritize tests with dependencies on other tests.

**Resources:**

- [Test Prioritization](https://www.professionalqa.com/test-prioritization)

## Black Box vs Gray Box vs White Box Testing

### Differences and Similarities

**Explanation:**

Black box testing, gray box testing, and white box testing are three distinct testing approaches that involve different levels of access to the internal components of the software.

**Black Box Testing:**

- **Access to Code**: Testers have no knowledge of the internal code or logic.
- **Focus**: Testing is based on external behavior and functional requirements.
- **Testers Role**: Testers focus on inputs and expected outputs without knowledge of the internal implementation.
- **Similarities**: It is similar to how end-users interact with the system.

- [Black Box Testin](https://www.guru99.com/black-box-testing.html)

**Gray Box Testing:**

- **Access to Code**: Testers have partial knowledge of the internal code and logic.
- **Focus**: Testing combines aspects of both black box and white box testing.
- **Testers Role**: Testers can design tests based on the understanding of internal logic to target specific areas.
- **Similarities**: It bridges the gap between black box and white box testing.

- [Gray Box Testing](https://www.guru99.com/grey-box-testing.html)

**White Box Testing:**

- **Access to Code**: Testers have complete knowledge of the internal code and logic.
- **Focus**: Testing is based on code structure, paths, and logic flow.
- **Testers Role**: Testers can design tests to cover specific code paths and conditions.
- **Similarities**: It is akin to how developers analyze the code.

**Resources:**

- [White Box Testing](https://www.guru99.com/white-box-testing.html)

### When to Apply Each Approach

**Explanation:**

The choice between black box, gray box, and white box testing depends on the goals of testing, the knowledge available, and the desired coverage.

**Black Box Testing:**

- Suitable for testing user interface, functional requirements, and overall system behavior.
- Used during acceptance testing, regression testing, and user-focused testing.

**Gray Box Testing:**

- Suitable for scenarios where partial knowledge of the internal logic can enhance testing.
- Used when a combination of black box and white box testing is needed.

**White Box Testing:**

- Suitable for in-depth testing of code logic, paths, and boundary conditions.
- Used during unit testing, code review, security testing, and code optimization.


## Test Case Design

### Writing Effective Test Cases

Writing effective test cases is crucial for thorough testing and accurate defect detection. Effective test cases should be clear, concise, and detailed. They need to cover various scenarios, conditions, and user interactions to ensure comprehensive testing.

**Key Points:**

- **Clear Steps**: Each test case should have a clear set of steps to execute.
- **Expected Results**: Clearly define the expected outcomes and results.
- **Coverage**: Ensure that each test case covers a specific functionality or scenario.
- **Variety**: Include positive and negative scenarios, boundary conditions, and edge cases.
- **Reusability**: Design test cases that can be reused in different test cycles.

### Test Case Structure and Format

A standardized test case structure and format make test cases consistent and easy to understand for the entire testing team. A well-structured test case includes sections such as the test case ID, description, preconditions, steps, expected results, actual results, and status.

**Key Points:**

- **Test Case ID**: A unique identifier for each test case.
- **Description**: Briefly describe the purpose of the test case.
- **Preconditions**: List any conditions that must be met before executing the test case.
- **Steps**: Outline the steps needed to execute the test case.
- **Expected Results**: Clearly state the expected outcomes after each step.
- **Actual Results**: Record the actual outcomes during test execution.
- **Status**: Indicate whether the test case passed, failed, or needs further investigation.

**Resources:**

- [Writing Effective Test Cases and Test Case Structure and Format](https://www.guru99.com/test-case.html)
- [Test Case Design](https://www.guru99.com/software-testing-techniques.html)

### Test Case Prioritization

Test case prioritization involves determining the order in which test cases should be executed based on factors such as business impact, risk, and critical functionality. Prioritization helps ensure that the most important areas are tested first, especially when time or resources are limited.

**Key Points:**

- **Business Impact**: Identify test cases that directly impact core business processes.
- **Risk Analysis**: Assess potential risks and prioritize test cases in high-risk areas.
- **Critical Functionality**: Prioritize test cases for critical features or functionalities.
- **Dependencies**: Consider dependencies between test cases and prioritize accordingly.
- **Regression Testing**: Prioritize test cases that cover areas prone to regression.

**Resources:**

## Testing Techniques

**Resources:**

[Testing Techniques](https://www.guru99.com/non-functional-testing.html)

### Non-Functional Testing

#### Load Testing

**Explanation:**

Load testing involves assessing a system's performance under specific load conditions to determine its capacity and capability to handle a certain volume of users or transactions.

**Key Concepts:**

- **Load**: The amount of work a system is subjected to during testing.
- **Objective**: Identify performance bottlenecks, measure response times, and assess system scalability.
- **Types**: Concurrent users, transactions, or data volume are typically tested.
- **Tools**: Load testing tools like JMeter, Gatling, or locust can automate load simulations.

**Resources:**

- [Load Testing](https://loadninja.com/load-testing/)

#### Performance Testing

**Explanation:**

Performance testing evaluates a system's responsiveness, stability, and overall performance under varying conditions, ensuring it meets user expectations.

**Key Concepts:**

- **Types**: Includes load testing, stress testing, and endurance testing.
- **Metrics**: Key performance indicators (KPIs) such as response time, throughput, and resource utilization.
- **Benefits**: Identifies performance bottlenecks, enables capacity planning, and ensures user satisfaction.

**Resources:**

- [Performance Testing](https://www.guru99.com/performance-testing.html)

#### Stress Testing

**Explanation:**

Stress testing evaluates a system's behavior under extreme conditions that exceed its normal operational capacity. It helps identify breaking points and potential failures.

**Key Concepts:**

- **Types**: Overloading system resources, such as memory, CPU, or network.
- **Purpose**: Determine system stability and reliability under high stress.
- **Challenges**: Requires careful planning to avoid damaging the system during testing.

- [Stress Testing](https://www.guru99.com/stress-testing-tutorial.html)

**Resources:**

#### Security Testing

**Explanation:**

Security testing assesses a system's vulnerabilities and weaknesses to identify potential security risks and protect against unauthorized access, data breaches, and other threats.

**Key Concepts:**

- **Types**: Includes penetration testing, vulnerability scanning, and security code reviews.
- **Objectives**: Identify vulnerabilities, assess risk levels, and ensure compliance with security standards.
- **Criticality**: Security testing is crucial to protect sensitive data and user privacy.

**Resources:**

- [Security Testing](https://www.guru99.com/what-is-security-testing.html)

#### Accessibility Testing

**Explanation:**

Accessibility testing ensures that a software application is usable by people with disabilities, conforming to accessibility standards and guidelines.

**Key Concepts:**

- **Types**: Involves testing for visual, auditory, cognitive, and motor impairments.
- **Guidelines**: Compliance with standards like WCAG (Web Content Accessibility Guidelines).
- **Importance**: Accessibility testing promotes inclusivity and ensures software is usable by all users.

**Resources:**

- [Accessibility Testing](https://www.guru99.com/accessibility-testing.html)

### Functional Testing

#### User Acceptance Testing (UAT)

**Explanation:**

User Acceptance Testing (UAT) involves testing a software application from the user's perspective to ensure it meets business requirements and is ready for release.

**Key Concepts:**

- **Users**: Performed by end-users or stakeholders.
- **Test Cases**: Based on real-world scenarios and workflows.
- **Validation**: Verifies if the application meets business objectives.
- **Sign-off**: Successful UAT signifies readiness for production.

**Resources:**

- [User Acceptance Testing](https://www.guru99.com/user-acceptance-testing.html)

#### Exploratory Testing

**Explanation:**

Exploratory Testing involves simultaneous test design and execution, where testers explore the software dynamically without predefined test cases.

**Key Concepts:**

- **Approach**: Relies on tester's creativity, intuition, and domain knowledge.
- **Flexibility**: Adaptation to evolving requirements.
- **Bug Hunting**: Efficient for finding defects in an unscripted manner.
- **Documentation**: Testers document actions, observations, and defects found.

**Resources:**

- [Exploratory Testing](https://www.guru99.com/exploratory-testing.html)

#### Smoke and Sanity Testing

**Explanation:**

Smoke Testing and Sanity Testing are quick checks performed to determine whether a build is stable and if further testing can proceed.

**Smoke Testing:**

- **Objective**: Checks basic functionalities to validate if the build is stable.
- **Timing**: Performed after each new build.
- **Coverage**: Focuses on essential functionalities.

**Sanity Testing:**

- **Objective**: Ensures recent changes didn't adversely affect the system.
- **Timing**: After specific changes, fixes, or patches.
- **Coverage**: Focuses on recent modifications.

**Resources:**

- [Sanity Testing Vs. Smoke Testing – Difference Between Them](https://www.guru99.com/smoke-sanity-testing.html)

#### Regression Testing

**Explanation:**

Regression Testing verifies that new code changes do not negatively impact existing functionalities.

**Key Concepts:**

- **Purpose**: Prevent introduction of new defects while modifying code.
- **Scope**: Re-tests affected areas and related functionalities.
- **Automated Regression**: Automated tests for efficient testing.

**Resources:**

- [Regression Testing](https://www.guru99.com/regression-testing.html)

#### Unit Testing

**Explanation:**
Unit Testing involves testing individual units or components of a software application in isolation to ensure their correctness.

**Key Concepts:**
- **Focus**: Tests small code units like functions, methods, or classes.
- **Isolation**: Isolates units from the rest of the application.
- **Automation**: Often automated for efficient execution.
- **White Box Testing**: Requires knowledge of code internals.

**Resources:**

- [Unit Testing](https://www.guru99.com/unit-testing-guide.html)

#### End-to-End (E2E) Testing

**Explanation:**
End-to-End (E2E) Testing validates the complete flow of an application, simulating real user scenarios.

**Key Concepts:**
- **Scope**: Verifies interactions between different system components.
- **User Journeys**: Tests complete user workflows.
- **Real-World Scenarios**: Simulates how users interact with the application.
- **Challenges**: Requires testing across various layers and technologies.

**Resources:**

- [End-to-End (E2E) Testing](https://www.guru99.com/end-to-end-testing.html)

#### Integration Testing

**Explanation:**

Integration Testing ensures that different components or modules of a software application work together seamlessly.

**Key Concepts:**

- **Interaction**: Validates interactions between integrated components.
- **Functionalities**: Tests combined functionalities of integrated parts.
- **Top-Down and Bottom-Up**: Different integration strategies.
- **Dependencies**: Identifies defects at the component interface level.

**Resources:**

- [Integration Testing](https://www.guru99.com/integration-testing.html)
 
# Software Development Life Cycle (SDLC) Delivery Model

![SDLC](./images/SDLC.png)

## Agile Model

**Explanation:**

The Agile model is an iterative and incremental approach to software development. It emphasizes collaboration, flexibility, and customer feedback throughout the development process.

**Key Concepts:**

- Iterative Development: Projects are divided into short iterations (sprints) with working increments delivered in each iteration.
- Customer Collaboration: Continuous involvement and feedback from customers and stakeholders.
- Adaptability: The ability to accommodate changes in requirements even late in the development process.
- Agile Manifesto: Values individuals and interactions, working software, customer collaboration, and responding to change.

**Resources:**

- [Agile model](https://www.tutorialspoint.com/sdlc/sdlc_agile_model.htm)
- [Scrum](https://www.guru99.com/scrum-testing-beginner-guide.html)

## Waterfall Model

**Explanation:**
The Waterfall model is a sequential software development approach where each phase follows the previous one. It's characterized by a structured and well-defined process.

**Key Concepts:**
- Phases: Development progresses through distinct phases: requirements, design, implementation, testing, deployment, and maintenance.
- Sequential Process: Each phase must be completed before moving to the next.
- Documentation: Emphasis on comprehensive documentation at each stage.
- Rigidity: Changes to requirements are discouraged after the initial phases.

**Resources:**

- [Waterfall Model](https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm)

# QA Manual Testing

## Test Planning

**Explanation:**

Test planning involves defining the overall testing strategy for a project, outlining objectives, scope, resources, schedules, and risks.

**Key Concepts:**

- **Objectives**: Define testing goals and expectations.
- **Scope**: Specify what will be tested and what won't.
- **Test Strategy**: Decide on test levels, types, techniques, and environments.
- **Test Schedule**: Allocate timeframes for testing activities.
- **Risk Assessment**: Identify potential risks and mitigation strategies.

**Resources:**

- [Test Planning](https://www.guru99.com/what-everybody-ought-to-know-about-test-planing.html)

## Test-Driven Development (TDD)

**Explanation:**

Test-Driven Development (TDD) is a software development practice where tests are written before the actual code, promoting improved code quality and test coverage.

**Key Concepts:**

- **Red-Green-Refactor Cycle**: Write failing test (red), make it pass (green), and refactor.
- **Unit Testing**: Write unit tests for small code units.
- **Continuous Integration**: Frequent integration and automated testing.
- **Benefits**: Reduces defects, enhances design, and supports refactoring.

**Resources:**

- [Test-Driven Development (TDD)](https://www.guru99.com/test-driven-development.html)

## Test Cases and Scenarios

**Explanation:**

Test cases and scenarios define the steps, conditions, and expected outcomes for testing different aspects of a software application.

**Key Concepts:**

- **Test Case**: A set of inputs, actions, and expected results.
- **Test Scenario**: A sequence of related test cases.
- **Coverage**: Ensure comprehensive coverage of functionalities.
- **Traceability**: Link test cases to requirements for validation.

**Resources:**

- [Test Cases and Scenarios](https://www.guru99.com/test-case-vs-test-scenario.html)

### Reporting

**Explanation:**

Reporting involves documenting and communicating testing activities, results, and defects to stakeholders.

**Key Concepts:**

- **Test Execution Reports**: Summarize test runs and outcomes.
- **Defect Reports**: Document defects found during testing.
- **Status Updates**: Keep stakeholders informed about progress.
- **Metrics and KPIs**: Measure testing effectiveness.

**Resources:**

- [Reporting](https://www.guru99.com/defect-management-process.html)

## Compatibility Testing

**Explanation:**

Compatibility testing ensures that software works across various environments, browsers, devices, and operating systems.

**Key Concepts:**

- **Browser Compatibility**: Test across different web browsers.
- **Device Compatibility**: Test on various devices (desktop, mobile, tablet).
- **Operating System Compatibility**: Test on different OS versions.
- **Challenges**: Address differences in rendering, functionality, and performance.

**Resources:**

- [Compatibility Testing](https://www.guru99.com/compatibility-testing.html)

## Verification and Validation

**Explanation:**

Verification ensures that a software product meets specified requirements, while validation ensures it meets user expectations.

**Key Concepts:**

- **Verification**: Confirm software meets design specifications.
- **Validation**: Ensure software meets user needs and intended use.
- **Quality Assurance and Testing**: Part of V&V process.
- **Validation Testing**: Focus on user acceptance and satisfaction.

**Resources:**

- [Verification and Validation](https://www.guru99.com/verification-v-s-validation-in-a-software-testing.html)

# Accessibility Testing

**Explanation:**

Accessibility testing ensures that a software application is usable by individuals with disabilities, making it inclusive for all users. It involves evaluating the application's design, content, and functionality to ensure compliance with accessibility standards and guidelines.

**Key Concepts:**

- **WCAG Guidelines**: Web Content Accessibility Guidelines provide criteria for accessible design.
- **Types of Disabilities**: Visual, auditory, cognitive, and motor impairments.
- **Tools**: Automated accessibility testing tools and manual assessments.
- **Benefits**: Ensures equal access, avoids legal issues, and improves user satisfaction.

**Resources:**

- [Accessibility Testing](https://www.geeksforgeeks.org/software-testing-accessibility-testing/)

## Dev Tools

**Explanation:**

Dev Tools is a set of web development and debugging tools built into the browser. It provides developers and testers with a range of features to analyze and optimize web pages and applications.

**Key Features:**

- **Elements Inspection**: Inspect and modify HTML and CSS in real-time.
- **Console**: View and debug JavaScript errors and logs.
- **Network Monitoring**: Analyze network requests, responses, and performance.
- **Audits**: Conduct performance audits, including accessibility checks.
- **Device Emulation**: Test responsive design on various devices.

**Resources:**

- [Dev Tools](https://developer.chrome.com/docs/devtools/overview/)

## Load and Performance Testing

**Explanation:**
Load and Performance Testing assess the responsiveness, stability, and scalability of a software application under different levels of load and stress. It helps identify bottlenecks, analyze response times, and ensure optimal performance.

**Key Concepts:**

- **Load Testing**: Evaluates application behavior under expected load.
- **Stress Testing**: Tests application behavior under extreme load conditions.
- **Performance Testing**: Ensures application meets response time requirements.
- **Metrics**: Response time, throughput, resource utilization, and error rates.
- **Purpose**: Identify performance issues before application launch.

**Resources:**

## WebPageTest

**Explanation:**

WebPageTest is an online tool that allows you to test the performance of web pages from various locations around the world. It provides insights into page load times, performance scores, and recommendations for optimization.

**Key Features:**

- **Location Options**: Test from multiple locations for global perspective.
- **Performance Metrics**: Measures first byte time, render time, load time, etc.
- **Waterfall Chart**: Visualizes the loading sequence of page resources.
- **Optimization Suggestions**: Offers recommendations to improve performance.

**Resources:**

- [WebPageTest](https://www.webpagetest.org/)

## Lighthouse

**Explanation:**

Lighthouse is an open-source tool from Google that assesses the quality and performance of web pages. It generates reports and scores based on various performance and accessibility metrics.

**Key Features:**

- **Performance Metrics**: Measures loading times, resource usage, and more.
- **Accessibility Checks**: Identifies issues that impact users with disabilities.
- **Progressive Web App Audit**: Evaluates adherence to PWA principles.
- **Best Practices Audit**: Assesses adherence to web development best practices.

**Resources:**

- [Lighthouse](https://github.com/GoogleChrome/lighthouse/)