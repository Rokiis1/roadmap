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

### Tasks: Intro

- [Tasks: Intro]()

## Testing Principles

**Explanation:**

Testing principles in Quality Assurance (QA) are fundamental guidelines and best practices that help ensure the effectiveness and efficiency of the testing process. These principles guide testing activities to identify and address issues in software, ultimately contributing to the development of high-quality products. 

**Key Concepts:**

1. **Early Testing:**
   - **Explanation:** Testing activities should commence as early as possible in the software development life cycle (SDLC). This principle emphasizes the importance of detecting and addressing defects early to reduce the cost of fixing issues later in the development process.
   - **Key Concepts:** Shift-left testing, unit testing, and integration testing.

2. **Testing is Context Dependent:**
   - **Explanation:** Testing strategies and approaches should be tailored to the specific context of the project. The unique requirements, constraints, and goals of each project should guide testing activities.
   - **Key Concepts:** Customized testing approaches, risk-based testing, and project-specific considerations.

3. **Exhaustive Testing is Impossible:**
   - **Explanation:** It's impractical to test every possible combination of inputs and scenarios. Rather than aiming for exhaustive testing, the focus should be on risk-based testing, prioritizing areas with higher risks of defects.
   - **Key Concepts:** Risk analysis, test prioritization, and test coverage.

4. **Defect Clustering:**
   - **Explanation:** A small number of modules or functionalities typically contain the majority of defects. Identifying and targeting these areas for testing can significantly improve the effectiveness of the testing process.
   - **Key Concepts:** Pareto principle, focusing on high-risk areas, and code hotspot analysis.

5. **Pesticide Paradox:**
   - **Explanation:** If the same set of tests is repeated over and over, the effectiveness of those tests decreases as the system evolves. Regularly review and update test cases to ensure they remain effective.
   - **Key Concepts:** Test maintenance, test case review, and periodic test suite updates.

6. **Testing is a Risk-Based Activity:**
   - **Explanation:** Testing should be prioritized based on the level of risk associated with different aspects of the software. High-risk areas should receive more testing focus than low-risk areas.
   - **Key Concepts:** Risk assessment, risk management, and prioritized testing.

7. **Continuous Improvement:**
   - **Explanation:** The testing process should be continuously evaluated and improved. Lessons learned from previous testing cycles should be applied to enhance future testing efforts.
   - **Key Concepts:** Retrospectives, feedback loops, and process improvement initiatives.

## Test Case Design

**Explanation:**

We will explore the fundamentals of test case design, including the types, format, and requirements of test cases.

**Key Concepts:**

- Test case types (positive, negative, destructive)

- Test case format (ID, summary, preconditions, steps, post conditions, expected results, actual results, status)

- Test case requirements (comprehensiveness, repeatability, reusability)

### Types of Test Cases

**Explanation:**

The two types of test cases: positive, negative.

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

**Explanation:**

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

- [Tasks: Learning Write Test Cases](./tasks/qaBasics/testCaseDesignTask.md)

# Static Testing vs Dynamic Testing

- [Static Testing](#static-testing)
- [Dynamic Testing](#dynamic-testing)

## Static Testing:

**Explanation:**

Static Testing refers to the process of evaluating a software application or component without executing it. It involves examining the code, design, and documentation to identify errors, ensure compliance with coding standards, and improve the overall quality of the software. This type of testing is performed during the early stages of the software development life cycle (SDLC) and is typically non-execution-based.

**Key Concepts:**

1. **Types of Static Testing:**
   - **Code Reviews:** Peer review of source code to identify defects and ensure coding standards.
   - **Static Analysis:** Using tools to analyze code, design, or documentation without executing the program.

2. **Benefits of Static Testing:**
   - **Early Defect Detection:** Identifying issues in the early stages of development reduces the cost of fixing defects.
   - **Improved Code Quality:** Ensures adherence to coding standards and best practices.
   - **Knowledge Sharing:** Facilitates knowledge transfer among team members during code reviews.

3. **Examples of Static Testing Activities:**
   - **Code Inspections:** In-depth examination of source code by a group of developers.
   - **Walkthroughs:** Step-by-step review of requirements, design, or code with team members.

4. **Objective:**
   - **Defect Prevention:** Focuses on finding and fixing defects before the code is executed.

## Dynamic Testing:

**Explanation:**

Dynamic Testing involves the execution of the software to validate its behavior and functionality. It is performed during runtime and includes various testing techniques to ensure that the software meets specified requirements. Dynamic testing helps identify defects related to the system's actual execution and is typically conducted in later stages of the SDLC.

**Key Concepts:**

1. **Types of Dynamic Testing:**
   - **Unit Testing:** Testing individual units or components of the software in isolation.
   - **Integration Testing:** Testing the combination of units or systems to ensure they work together.
   - **System Testing:** Evaluating the entire system's functionality in a complete, integrated environment.

2. **Benefits of Dynamic Testing:**
   - **Verification of Functionality:** Ensures that the software functions as intended.
   - **Identification of Runtime Defects:** Detects defects that may only become apparent during execution.
   - **Performance Testing:** Evaluates how the system performs under various conditions.

3. **Examples of Dynamic Testing Activities:**
   - **Functional Testing:** Verifies that the software functions according to specified requirements.
   - **Regression Testing:** Ensures that new changes do not negatively impact existing functionality.

4. **Objective:**
   - **Defect Detection:** Focuses on finding defects during or after the execution of the software.

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

## Black-Box Test Techniques

**Explanation:**

Black-box testing is a software testing technique that focuses on assessing the functionality of a software application without examining its internal code or structure. Testers, in this approach, treat the software as a "black box," and their main concern is to verify if the inputs produce the expected outputs without knowledge of the internal workings of the system. Various test techniques are employed to ensure thorough testing of different aspects of the software.

**Key Concepts:**

1. **No Knowledge of Internal Code:**
   - Black-box testers do not have access to the internal code, architecture, or design of the software under test. They focus solely on inputs and outputs.

2. **Functional Testing:**
   - Black-box testing primarily involves functional testing, where the software's functions are tested by providing inputs and examining the corresponding outputs.

3. **Test Cases Based on Requirements:**
   - Test cases are designed based on the software requirements and specifications. The goal is to verify that the software meets its specified functionality.

4. **Test Design Techniques:**
   - Various test design techniques are used to create effective test cases. Examples include equivalence partitioning, boundary value analysis, state transition testing, and decision table testing.

5. **Equivalence Partitioning:**
   - Inputs are divided into groups or partitions, and test cases are designed to represent each partition. This helps ensure that the software behaves consistently across different input ranges.

6. **Boundary Value Analysis:**
   - Test cases are designed to evaluate how the software behaves at the boundaries of input ranges. This is important as defects often occur at the edges of input domains.

7. **State Transition Testing:**
   - Applicable for systems with distinct states. Test cases are designed to verify the transitions between different states and the correct behavior in each state.

8. **Decision Table Testing:**
   - A systematic method for testing combinations of inputs by creating a table that represents all possible combinations of input conditions and corresponding actions.

### Equivalence Partitioning

**Explanation:**

Equivalence Partitioning is a black-box testing technique that divides the input domain of a software application into classes of equivalent inputs. The goal is to reduce the number of test cases while ensuring that the selected test cases effectively represent different scenarios. The underlying concept is that if a system behaves correctly for one input within an equivalence class, it should behave correctly for all inputs within that class.

**Key Concepts:**

1. **Equivalence Class:**
   - An equivalence class is a set of input values that are treated the same way by the system. Testers identify these classes to reduce the number of test cases.

2. **Partitioning:**
   - The input domain is divided into different partitions or classes. Each partition represents a set of inputs that should exhibit similar behavior.

3. **Representative Test Cases:**
   - Test cases are selected from each equivalence class to represent the entire class. If a test case from a specific class works correctly, it is assumed that other values in the same class will also work.

4. **Invalid Equivalence Classes:**
   - In addition to valid equivalence classes (inputs that should be accepted), testers also identify invalid equivalence classes (inputs that should be rejected or produce errors).

7. **Efficiency:**
   - Equivalence partitioning is an efficient testing technique as it helps reduce the number of test cases needed to cover a broad range of scenarios.

8. **Applicability:**
   - This technique is particularly applicable when there is a large set of possible input values, and testing all combinations is not feasible.

9. **Requirements-Based:**
   - Equivalence partitioning is closely tied to the software requirements. The identified equivalence classes align with the expected behavior outlined in the requirements.

10. **Error Detection:**
    - The technique is effective at detecting errors related to the handling of different types of inputs and their respective classes.

### Boundary Value Analysis

**Explanation:**

Boundary Value Analysis (BVA) is a black-box testing technique that focuses on testing values at the boundaries of input domains. The objective is to identify errors that may occur at the extremes of the input range, where the behavior of the system is likely to change. By testing values at these boundaries, testers aim to ensure the robustness and reliability of the software, as defects often manifest near the limits of acceptable input values.

**Key Concepts:**

1. **Boundary Values:**
   - Test cases are designed to evaluate the behavior of the system at the boundaries of valid input ranges. These boundaries include the minimum, maximum, and points immediately before and after these limits.

2. **Input Domain:**
   - BVA is applied to the input domain of a function or feature. This could include numerical ranges, date ranges, character lengths, and other parameter constraints.

3. **Three-Partition Rule:**
   - The input domain is divided into three partitions: values below the lower bound, values within the valid range, and values above the upper bound. Test cases are then designed for each of these partitions.

7. **Focus on Invalid Inputs:**
   - While BVA primarily focuses on valid input boundaries, it also considers values immediately outside the valid range to test the system's response to invalid inputs.

### Decision Table Testing

**Explanation:**

Decision Table Testing is a black-box testing technique used to design test cases that cover different combinations of input conditions and their corresponding actions or outcomes. It is particularly useful when a system's behavior is influenced by multiple conditions or rules, and the interactions between these conditions need to be thoroughly tested. Decision tables provide a structured way to represent complex business rules and ensure comprehensive test coverage.

**Key Concepts:**

1. **Decision Table Components:**
   - **Conditions (Inputs):** Represent the various factors or input conditions that influence the system's behavior.
   - **Actions (Outputs):** Indicate the expected outcomes or actions based on combinations of input conditions.

2. **Rules:**
   - Each row in the decision table represents a unique combination of input conditions and their corresponding outcomes. These combinations are often referred to as rules.

3. **Columns:**
   - The decision table consists of columns for each condition and action. It provides a visual representation of the relationships between conditions and actions.

4. **Condition States:**
   - Conditions can have different states, typically denoted as "true," "false," or "don't care" (indicating that the condition's state does not matter for a specific rule).

7. **Boundary Conditions:**
   - Decision tables can include boundary conditions to test the system's behavior at the edges of acceptable input ranges.

### State Transition Testing

**Explanation:**

State Transition Testing is a black-box testing technique that focuses on testing the behavior of a system as it transitions between different states. This technique is particularly applicable to systems with distinct states, where the behavior and functionality can change based on specific events or conditions. The primary goal of state transition testing is to ensure that the system transitions correctly between states and behaves as expected in each state.

**Key Concepts:**

1. **States:**
   - A state represents a condition or situation in which a system exists at a specific point in time. The system's behavior and functionality may vary depending on its current state.

2. **Events:**
   - Events trigger state transitions. An event is an occurrence that causes the system to move from one state to another. Events can be internal or external.

3. **Transitions:**
   - Transitions describe the movement of the system from one state to another in response to an event. The transitions are governed by specific rules or conditions.

4. **State Diagram:**
   - A state transition diagram is often used to visually represent the different states, events, and transitions within a system. It provides a clear and concise view of the system's behavior.

5. **Actions:**
   - Actions are the activities or operations that the system performs when it transitions from one state to another. Each transition may be associated with specific actions.

6. **Conditions:**
   - Conditions define the criteria that must be met for a particular state transition to occur. These conditions may be based on the current state, event, or external factors.

7. **Test Cases:**
   - Test cases for state transition testing are designed to cover different combinations of events and current states, ensuring that the system transitions correctly and performs the expected actions.

###

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

## Test Levels

**Explanation:**

In software testing, test levels represent different stages of testing that occur at various points in the software development life cycle (SDLC). Each test level has specific objectives, focuses on different aspects of the software, and involves different testing activities. These levels are organized hierarchically, with each subsequent level building on the results of the previous ones. 

**Key Concepts:**

1. **Unit Testing:**
   - **Explanation:** Unit testing involves testing individual units or components of the software in isolation to ensure that each unit functions as intended.
   - **Key Concepts:** Focus on the smallest parts of the system, typically automated, and defects are addressed before higher-level testing.

2. **Integration Testing:**
   - **Explanation:** Integration testing involves testing combined units or components to ensure they work together as intended. It focuses on identifying interactions and interface issues.
   - **Key Concepts:** Different integration strategies, such as top-down and bottom-up testing, to verify the flow of data and control between integrated components.

### 3. **System Testing:**
   - **Explanation:** System testing assesses the entire system as a whole, verifying that all components, when integrated, meet specified requirements and ensuring the system functions correctly.
   - **Key Concepts:** Comprehensive functional and non-functional testing, test cases based on system requirements, and various testing techniques.

### 4. **End-to-End (E2E) Testing:**
   - **Explanation:** End-to-End (E2E) testing evaluates the entire workflow of a software application from start to finish, ensuring that all integrated components work together seamlessly.
   - **Key Concepts:** Real-world scenarios, integration of all components, user interface testing, cross-browser and cross-device testing, data flow and transactions testing, and validation of business processes.

### 5. **Acceptance Testing:**
   - **Explanation:** Acceptance testing is the final test level, determining if the software is ready for release. It validates that the software satisfies business requirements and is accepted by stakeholders.
   - **Key Concepts:** User Acceptance Testing (UAT) involving end-users, Alpha/Beta Testing involving external users, and a focus on overall system functionality and business objectives.

**Key Concepts Across Test Levels:**

1. **Test Planning:**
   - Comprehensive test planning for each level, defining scope, objectives, resources, schedule, and deliverables.

2. **Test Execution:**
   - Execution of test cases designed for each level, recording results, identifying and reporting defects.

3. **Defect Lifecycle:**
   - Reporting, tracking, and managing defects identified during testing at different levels.

4. **Traceability:**
   - Establishing links between test cases and requirements using traceability matrices.

5. **Exit Criteria:**
   - Defined exit criteria for transitioning to the next level, ensuring completion of specific test activities and achievement of testing goals.

6. **Feedback Loop:**
   - Providing feedback to development teams based on information gathered during test levels, contributing to defect resolution and system improvement.

7. **Automation:**
   - Employing automation at different test levels to increase efficiency, especially for repetitive and regression testing tasks.

8. **Parallelism:**
   - Conducting different test levels in parallel for a more efficient testing process.

9. **Continuous Improvement:**
   - Applying lessons learned from one test level to subsequent levels and future projects, contributing to continuous improvement in testing processes.

## Test Types

In software testing, test types represent different aspects or dimensions of testing that focus on specific characteristics or objectives. Each test type is designed to address specific testing goals and contribute to the overall assessment of the software's quality. Test types are chosen based on the nature of the software, project requirements, and the testing objectives.

**Explanation:**

In software testing, test types represent different aspects or dimensions of testing that focus on specific characteristics or objectives. Each test type is designed to address specific testing goals and contribute to the overall assessment of the software's quality. Test types are chosen based on the nature of the software, project requirements, and the testing objectives. Here are some common test types:

**Key Concepts:**

1. **Functional Testing:**
   - **Explanation:** Functional testing evaluates the software's functionality against specified requirements. It ensures that the application performs its intended functions correctly.
   - **Key Concepts:** Test cases are designed based on functional specifications, and the focus is on input-output relationships and business processes.

2. **Non-Functional Testing:**
   - **Explanation:** Non-functional testing assesses aspects of the software other than its functionality, including performance, reliability, usability, and security.
   - **Key Concepts:** Test cases are designed to measure and evaluate non-functional attributes like response time, scalability, user experience, and security vulnerabilities.

3. **Manual Testing:**
   - **Explanation:** Manual testing involves human testers executing test cases without the use of automation tools. Testers simulate user interactions and assess software behavior.
   - **Key Concepts:** Exploratory testing, ad-hoc testing, and scripted testing performed manually by testers.

### Functional testing

**Explanation:**

Functional testing is a software testing type that focuses on verifying that the software functions as per the specified requirements. The goal is to ensure that the application behaves correctly and meets the functional expectations of users. Functional testing assesses the software's features, user interfaces, APIs, databases, and other components to validate that they operate according to the defined functional specifications.

**Key Concepts:**

1. **Requirements-Based Testing:**
   - Functional testing is closely tied to the software requirements. Test cases are designed based on the functional specifications to verify that the software aligns with the specified behavior.

2. **Black-Box Testing:**
   - Functional testing is often conducted as black-box testing, meaning testers focus on the inputs and outputs of the software without having knowledge of its internal code or structure.

3. **Test Cases and Test Scenarios:**
   - Test cases and test scenarios are created to cover different aspects of the software's functionality. Test scenarios are broader, describing end-to-end processes, while test cases focus on specific functionalities.

4. **Input-Output Verification:**
   - Testers validate the output produced by the software against expected results based on given inputs. This ensures that the software processes inputs correctly and generates the expected outputs.

5. **Functional Modules:**
   - Functional testing is often organized around functional modules or components of the software. Testers assess each module's behavior independently to ensure that individual features work as intended.

6. **User Interface Testing:**
   - For applications with user interfaces, functional testing includes assessing the usability and functionality of the UI elements. This involves verifying that buttons, forms, navigation, and other UI components work correctly.

7. **Data Validations:**
   - Functional testing includes validating data input, processing, and output. This ensures that the software handles data appropriately and produces accurate results.

8. **Boundary Value Analysis:**
   - Test cases are often designed based on boundary values to verify that the software behaves correctly at the edges of input domains. This is crucial for detecting issues related to input validation.

9. **Integration Testing:**
   - Functional testing often includes integration testing to ensure that different components of the software work seamlessly together, and data flows correctly between integrated modules.

10. **System Testing:**
    - As part of the overall testing strategy, functional testing is integrated into system testing to evaluate the entire system's functionality.

11. **Acceptance Testing:**
    - Functional testing contributes to acceptance testing, where the focus is on verifying that the software meets user requirements and is ready for release.

### Unit Testing 

**Explanation:**

Unit testing is a software testing technique where individual units or components of a software application are tested in isolation to ensure that they work as intended. A unit is the smallest testable part of the software, often a function, method, or procedure. The primary goal of unit testing is to validate that each unit of the software performs its functions correctly according to the design specifications.

**Key Concepts:**

1. **Isolation:**
   - Unit testing focuses on isolating individual units or components from the rest of the application. This is achieved by testing each unit independently without considering the interactions with other units.

2. **White-Box Testing:**
   - Unit testing is a form of white-box testing, meaning that testers have knowledge of the internal structure, logic, and code of the units being tested.

3. **Test Cases:**
   - Test cases for unit testing are designed to cover different scenarios for a specific unit. Test cases often include input values, expected outputs, and conditions under which the unit is expected to function correctly.

4. **Automated Testing:**
   - Unit testing is highly conducive to automation. Automated testing frameworks and tools are commonly used to execute unit tests, allowing for quick and efficient testing of individual units.

5. **Regression Testing:**
   - Unit tests serve as a foundation for regression testing. Whenever changes are made to the codebase, unit tests are executed to ensure that existing functionality remains unaffected.

6. **Red-Green-Refactor Cycle:**
   - The red-green-refactor cycle is a fundamental concept in unit testing. It involves writing a failing test (red), making the test pass (green), and then refactoring the code while ensuring that the test still passes.

7. **Continuous Integration:**
    - Unit testing plays a crucial role in continuous integration processes, where automated tests, including unit tests, are executed whenever changes are pushed to the version control system.

8. **Defect Localization:**
    - If a unit test fails, it helps in quickly identifying the specific unit or component that is not functioning correctly, aiding in efficient defect localization.

### Integration Testing 

**Explanation:**

Integration testing is a software testing technique that focuses on verifying the interactions between different components or units of a software application when integrated together. The goal of integration testing is to ensure that these integrated components work as intended and that the data and control flow between them is correct. This testing phase comes after unit testing and precedes system testing, aiming to identify and address issues related to component interactions.

**Key Concepts:**

1. **Component Integration:**
   - Integration testing involves testing the integration points between different components, such as modules, classes, functions, or services. The focus is on validating that these components interact correctly.

4. **Functional and Non-Functional Testing:**
   - Integration testing encompasses both functional and non-functional testing aspects. Functional testing verifies that integrated components perform their intended functions, while non-functional testing addresses aspects like performance, reliability, and scalability.

7. **Continuous Integration:**
   - Integration testing is closely aligned with continuous integration practices. Automated integration tests are often executed as part of the continuous integration pipeline to ensure that integration issues are identified early.

8. **Concurrency and Parallelism:**
   - Integration testing assesses how components handle concurrent and parallel processing. It verifies that multiple components can run concurrently without interfering with each other.

9. **Data Flow and Interface Testing:**
   - Testing the flow of data between integrated components is a crucial aspect of integration testing. Interface testing ensures that data is exchanged correctly and that input from one component produces the expected output in another. 

###

###

###

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







