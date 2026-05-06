# Content of System Testing

- [System Testing](#system-testing)
- [Objectives of System Testing](#objectives-of-system-testing)
- [Scope of System Testing](#scope-of-system-testing)
- [System Testing Across Layers](#system-testing-across-layers)
- [Types of System Testing](#types-of-system-testing)
- [Test Execution Approaches](#test-execution-approaches)
- [Roles and Responsibilities](#roles-and-responsibilities)
- [Test Environment and Data](#test-environment-and-data)

After verifying individual components and their interactions, the next step is to evaluate the system as a complete and integrated whole.

Earlier testing levels focus on isolated parts of the application or the communication between them. While this helps detect defects early, it does not guarantee that the entire system will function correctly when all parts are combined.

At this stage, the focus shifts to validating the system from an end-to-end perspective, ensuring that all components work together as expected and that the system behaves correctly in realistic scenarios.

This is where **system testing** plays a key role by verifying the complete application against specified requirements before it is validated from a business perspective.

To understand how this validation is performed, we begin with the concept of system testing itself.

## System Testing

System testing is a testing level where the complete and fully integrated system is evaluated against specified requirements.

At this stage, the focus shifts from individual components and their interactions to the **overall system behavior**. The goal is to verify that the system works correctly as a whole and that all parts function together as expected.

System testing answers the key question: **Does the entire system behave correctly according to requirements?**

Unlike earlier testing levels, which focus on internal logic or interactions between components, system testing validates the system from an **external perspective**, simulating real user scenarios and end-to-end workflows.

This level of testing ensures that both **functional** and **non-functional requirements** are met. It includes validating system features, performance, usability, reliability and other quality attributes.

System testing is typically performed by **QA teams** in an environment that closely resembles production. The system is tested using realistic data and scenarios to ensure accurate validation.

Because it verifies the system as a whole, system testing plays a critical role in identifying issues that may not be visible at lower testing levels and ensures that the application is stable before moving to acceptance testing.

This leads to the objectives of system testing, which define the key goals and areas that must be verified to ensure the system behaves correctly as a whole.

## Objectives of System Testing

The main objective of system testing is to verify that the complete system behaves correctly and meets all specified requirements.

At this level, testing focuses on validating the system as a whole rather than individual parts, ensuring that all components work together seamlessly in real-world scenarios.

System testing ensures **end-to-end system behavior** across complete workflows and verifies that **functional requirements** are correctly implemented. It also validates **non-functional requirements** such as performance, security and usability, while helping to detect defects that arise from full system integration.

By achieving these objectives, system testing provides confidence that the application will perform as expected when used by real users.

While these objectives define what system testing aims to achieve, it is also important to understand where testing is performed within the system architecture.

This leads to system testing across different layers, where validation can be performed at the user interface, service and data levels, as well as across the entire system.

## System Testing Across Layers

System testing can be performed across different layers of the system architecture, allowing teams to validate behavior at specific points within the application.

Testing at the **user interface (UI) layer** focuses on user interactions and visible system behavior. It helps verify that inputs, outputs and user flows function correctly from the end-user perspective.

At the **API or service layer**, testing focuses on business logic and communication between components. It ensures that requests are processed correctly and that services interact as expected.

Testing at the **database (DB) layer** focuses on data operations, ensuring that data is stored, retrieved and maintained correctly and consistently.

In addition, **end-to-end testing** validates workflows that span across multiple layers, helping confirm that the system behaves correctly when all parts work together.

Testing across these layers helps teams identify where defects occur more precisely and improves the efficiency of debugging and validation.

While layers describe where testing is performed within the system, it is also important to define what is included within system testing as a whole.

This leads to the scope of system testing, which defines the boundaries and coverage of testing activities.

## Scope of System Testing

The scope of system testing defines the boundaries of what is included and excluded at this level of testing.

At this level, testing focuses on validating **complete system workflows**, business processes and realistic user scenarios within the system boundary.

System testing includes verification of how different parts of the application behave together, ensuring that integrated functionality works correctly in real usage conditions.

It does not focus on internal implementation details or isolated components, as these are covered in earlier testing levels.

It also does not primarily validate interactions with external systems, which are addressed in system integration testing.

By clearly defining the scope, teams can ensure that testing remains focused, avoids unnecessary overlap with other testing levels and provides meaningful validation of the system.

While the scope defines what is tested, it is also important to understand the different types of testing performed at this level.

This leads to the various types of system testing, each focusing on specific aspects of system quality.

## Types of System Testing

System testing includes different types of testing that focus on validating specific aspects of system quality.

At this level, testing ensures that the system behaves correctly under various conditions and scenarios.

System testing can be broadly divided into **functional testing** and **non-functional testing**, each focusing on different aspects of system validation.

**Functional testing** verifies that the system behaves according to specified requirements and produces expected results for given inputs. Within functional testing, a distinction can be made between validating system behavior and verifying system changes.

Testing focused on system behavior ensures that features work correctly from the user perspective and that business workflows are properly implemented.

Testing related to system changes includes activities such as **smoke testing**, which verifies basic system stability, **sanity testing**, which validates specific changes, **regression testing**, which ensures that existing functionality is not affected, and **confirmation testing**, which verifies that identified defects have been fixed.

**Non-functional testing** focuses on evaluating system qualities rather than specific functionality. This includes **performance testing**, which evaluates system responsiveness and scalability, **security testing**, which ensures protection against vulnerabilities, **usability testing**, which assesses user experience, **reliability testing**, which verifies system stability over time, and **recovery testing**, which ensures that the system can recover from failures.

By combining functional and non-functional testing, system testing provides a comprehensive evaluation of both system behavior and system quality.

While these types define what aspects of the system are validated, it is also important to understand how testing is performed in practice.

This leads to test execution approaches, where testing can be performed manually or supported by automation.

## Test Execution Approaches

System testing can be performed using different execution approaches depending on the context, complexity and goals of the project.

The two main approaches are **manual testing** and **automated testing**, each providing different advantages in validating system behavior.

**Manual testing** involves executing test scenarios without the use of automation tools. Testers interact with the system in a way similar to real users, allowing them to observe behavior, evaluate usability and identify unexpected issues that may not be easily detected through automation.

**Automated testing** uses tools and scripts to execute tests automatically. This approach is especially useful for repetitive scenarios, regression testing and continuous validation, where tests need to be executed frequently and consistently.

In practice, system testing often combines both approaches. Manual testing is used for exploratory validation and user-focused scenarios, while automation supports efficiency, speed and repeatability.

By selecting the appropriate execution approach, teams can improve test coverage, reduce effort and ensure reliable system validation.

While execution approaches define how testing is performed, it is also important to understand who is involved and what responsibilities they have during system testing.

This leads to roles and responsibilities, which define how different stakeholders contribute to the testing process.

## Roles and Responsibilities

System testing involves multiple roles working together to ensure that the system is thoroughly validated and behaves as expected.

**QA teams** are primarily responsible for designing, executing and maintaining system tests. They ensure that test scenarios cover system workflows, validate requirements and report defects clearly.

**Developers** support system testing by analyzing and fixing defects identified during testing. They may also assist in investigating complex issues and ensuring that fixes do not introduce new problems.

**Test leads or managers** coordinate testing activities, define testing strategies and ensure that testing is completed within the required timelines and quality standards.

**Business analysts** contribute by clarifying requirements and ensuring that system behavior aligns with business expectations.

**DevOps or environment specialists** may support by maintaining test environments, managing deployments and ensuring that the system is stable and ready for testing.

Clear definition of roles helps improve collaboration, reduce misunderstandings and ensure that testing activities are performed efficiently.

While roles define who is involved in system testing, it is also important to understand the environment and data required to perform testing effectively.

This leads to **test environment and data**.

## Test Environment and Data

System testing requires a well-prepared environment and appropriate test data to ensure accurate and reliable validation.

The **test environment** should closely resemble the production setup, including system configuration, infrastructure, integrated components and relevant dependencies. This helps ensure that the system behaves consistently and that issues identified during testing reflect real-world conditions.

A stable and properly configured environment is essential for executing tests effectively and avoiding false results caused by environmental differences.

**Test data** plays a critical role in system testing, as it determines how realistically scenarios can be validated. Data should represent real-world situations, including both typical and edge cases, to ensure comprehensive system coverage.

Using appropriate test data helps validate system behavior under different conditions, including valid inputs, invalid inputs and boundary values.

In some cases, test data must also be carefully managed to ensure data privacy and compliance with regulations, especially when production like data is used.
