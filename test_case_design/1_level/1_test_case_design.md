# Content of test case design level 1

- [Requirements as Test Basis](#requirements-as-test-basis)
- [Test Scenario](#test-scenario)
- [Test Case Structure](#test-case-structure)
- [Test Data](#test-data)
- [Test Execution](#test-execution)

Test case design is the process of defining *what should be tested* and *how it should be tested* before any execution takes place.

Without a clear structure, testing can become inconsistent, and important scenarios may be missed. To avoid this, test design provides a systematic way to derive tests from reliable sources instead of relying only on intuition.

Every test begins with understanding the expected behavior of the system. This means identifying the rules, conditions and outcomes that define how the system should work.

These sources of information form what is known as the **test basis**. They act as the foundation for all testing activities and guide the creation of scenarios and test cases.

We start with **Requirements as Test Basis**, which focuses on identifying and using this information as the starting point for designing tests.

## Requirements as Test Basis

Requirements define *what the system should do* and *how it is expected to behave*. They describe functionality, constraints, rules, and expected outcomes that the system must satisfy.

In test design, requirements act as the **primary source of truth**. They provide the foundation from which test scenarios and test cases are derived. Without a clear understanding of requirements, it becomes difficult to determine what should be tested and what correct behavior looks like.

The **test basis** is not limited to a single document. It includes all available information that helps describe the expected behavior of the system.

This can include **requirement documentation**, where functionality and business rules are defined. It may also include user stories and use cases, which describe how users interact with the system.

In addition to requirements, **design documents** provide insight into how the system is structured. These may describe system components, interactions, user interfaces or underlying data models. While testing does not focus on implementation details at this level, these documents help clarify expected behavior.

In some cases, the **codebase** itself becomes part of the test basis, especially when documentation is incomplete. Source code, configuration files, and API contracts can help identify expected inputs, outputs and constraints.

Testing is also influenced by **risk analysis**. Identified risks help prioritize what should be tested more thoroughly, especially in areas that may have higher impact on the system.

For systems operating in regulated environments, **compliance standards** and **industry regulations** define additional rules that must be validated. These become part of the expected behavior and must be reflected in testing.

Finally, **user manuals and operational guides** provide a user-focused perspective. They describe how the system is intended to be used and can help identify real-world scenarios that should be tested.

By combining these sources, testers build a complete understanding of the system. This ensures that test scenarios and test cases are not created randomly, but are based on clearly defined expectations.

This foundation is essential, because every test that follows is derived from this information.

However, before creating detailed test cases, testing begins at a higher level. Instead of focusing on specific inputs and expected results, the first step is to identify *what situations or interactions need to be tested*.

These high-level representations of system behavior are called **test scenarios**. They describe what needs to be validated without going into detailed steps or data.

## Test Scenario

A **test scenario** is a high-level description of a situation or interaction that needs to be tested. It focuses on *what should be validated* rather than *how it is tested in detail*.

Instead of defining specific inputs or step-by-step actions, a test scenario describes the context in which the system is used and the behavior that needs to be verified. This helps provide a clear understanding of what areas of the system require testing.

Test scenarios play an important role in structuring testing activities. They help identify **test conditions**, ensuring that different aspects of system behavior are considered. By describing user interactions and system responses at a high level, they support **comprehensive coverage** and reduce the risk of missing important functionality.

They also improve **communication** between testers, developers, and stakeholders. Because scenarios are written in a clear and understandable way, they make it easier to align on what should be tested and why.

Another important role of test scenarios is guiding the creation of test cases. Test cases are derived from scenarios, where each scenario is expanded into more detailed steps, inputs, and expected results.

Test scenarios are also used when preparing **end-to-end (E2E)** and **non-functional testing**, where understanding user flows and system behavior is essential.

Test scenarios can be written using different structures, depending on the context and team practices.

One common approach is a **traditional scenario structure**, where scenarios are described using simple statements that define expected behavior.

In this structure, phrases like **“Verify that”**, **“Ensure that”**, **“Check that”** and **“Test that”** are used to express different types of validation.

“Verify that” is used to confirm that functionality works as expected.
“Ensure that” focuses on conditions or system behavior that must always be maintained.
“Check that” is used for validating negative cases or error handling.
“Test that” is used to confirm specific outcomes or system responses.

For example, in a user authentication context, scenarios may describe validating login, logout, password reset, session handling and error messages for invalid input.

This structure is often used in environments where detailed documentation is required, in legacy systems, or when teams are more familiar with traditional testing approaches. It provides clarity and ensures that all relevant conditions are explicitly described.

Another widely used approach is the **Behavior-Driven Development (BDD) structure**.

In this approach, scenarios are written using the **Given–When–Then** format.

“Given” describes the initial state of the system.
“When” describes the action or event performed.
“Then” defines the expected outcome.

For example, a scenario may describe a user on a login page, entering valid credentials, and being redirected to a dashboard.

This structure is useful in **Agile** environments, where collaboration between technical and non-technical stakeholders is important. It makes scenarios easier to read and understand, even for people without a technical background.

BDD scenarios are also commonly used in **test automation**, as they can be directly integrated with automated testing tools. They emphasize system behavior from the user’s perspective and help ensure that the system meets real user needs.

However, test scenarios remain high-level and do not define the exact steps, inputs, or expected results required for execution.

To perform testing in a consistent and repeatable way, scenarios must be broken down into more detailed and structured elements.

This leads to **test cases**, where each scenario is translated into specific conditions, data, and expected outcomes that can be executed and verified.

## Test Case Structure

A **test case** defines the specific conditions under which a system is tested. It translates a high-level scenario into concrete elements such as inputs, expected results, and execution context.

To ensure consistency and clarity, test cases are often organized using a structured format. This structure helps testers understand what needs to be executed, what data is required, and how results should be validated.

At a higher level, testing can also be represented using a **scenario-based structure**. In this approach, each scenario is identified with a unique Scenario ID, along with a description and an expected outcome. This provides a simplified view of what needs to be validated without going into detailed execution.

However, for actual testing, scenarios are expanded into test cases. Each test case is assigned a unique **Test Case ID** and is linked back to its originating scenario. This helps maintain a clear connection between high-level intent and detailed validation.

This connection becomes important as the system grows and the number of tests increases. Being able to trace what is tested and why ensures that no important functionality is missed.

The concept of **traceability** will be explored later in Test **Test Management Level 2**, where the focus shifts to tracking coverage, linking requirements to tests, and ensuring overall test completeness.

A typical test case includes a **description** of what is being tested, along with **preconditions** that define the required state before execution. It also specifies **test data**, which represents the inputs used during testing and expected results, which define the correct system behavior.

In some cases, **postconditions** are included to describe the state of the system after execution. Additionally, **test steps** may be defined when the test involves a sequence of actions, such as navigating through a user interface or performing an end-to-end flow. However, for simpler validations, especially those focused on inputs and outputs, detailed steps may not be necessary.

Traditionally, this structured approach has been widely used in test documentation and manual testing processes. It provides clarity, traceability and a clear separation between scenarios and test cases.

However, in modern testing practices, like in Agile and automation-focused environments, this approach is often considered **heavyweight** and less flexible. Instead of strictly defining detailed test case tables for every situation, teams tend to focus more on **lightweight representations**, reusable test logic, and automated checks.

Despite this shift, understanding this structure remains important. It provides the foundation for how tests are organized and helps build a clear connection between requirements, scenarios, and validation.

In later stages, particularly in **Test Case Design Level 3**, the focus shifts toward using test design techniques to systematically derive test cases. These techniques help define what should be tested more efficiently, rather than relying only on manually structured test case definitions.

Regardless of how test cases are designed, they must be executed using appropriate inputs. The selection of these inputs plays a critical role in validating system behavior and ensuring meaningful results.

This brings the focus to **test data**, which defines the specific values used during testing to verify expected outcomes.

## Test Data

**Test data** represents the specific input values used during testing to validate system behavior. It defines *what is provided to the system* so that expected outcomes can be verified.

While test cases describe *what should be tested*, test data defines *with what values it is tested*. Without appropriate data, even well-designed test cases cannot effectively validate system behavior.

Test data can represent both **valid inputs**, where the system is expected to behave correctly and **invalid inputs**, where the system should handle errors or reject the input. Using both types ensures that the system is tested under normal conditions as well as edge and failure scenarios.

The selection of test data depends on the rules and constraints defined in the system. For example, if a field accepts values within a specific range, test data should include values inside the range, at the limits and outside the allowed boundaries.

In some cases, test data is derived directly from **requirements**, while in others it is influenced by **test design techniques** such as equivalence partitioning or boundary value analysis. These techniques help identify which data values are most meaningful for testing.

Test data can be **static**, where predefined values are used or **dynamic**, where data is generated during test execution. It can also come from different sources, such as databases, files or external systems, depending on how the application operates.

Managing test data is important. Data must be consistent, relevant and reusable across different test cases to ensure reliable results.

By carefully selecting and organizing test data, testing becomes more effective, as each execution provides meaningful validation of system behavior.

Once test cases are defined and the necessary data is prepared, the next step is to run these tests against the system.

This is where planned testing activities are carried out and actual system behavior is observed and compared with expected results.

## Test Execution

Test execution is the process of running test cases against the system and comparing the **actual results** with the **expected results**.

At this stage, everything prepared earlier comes together. Test scenarios define what should be tested, test cases provide structure and test data supplies the inputs. Execution is where the system behavior is observed and validated.

During execution, each test case is run under defined conditions, and the outcome is recorded. The purpose is to determine whether the system behaves as expected or if any deviations occur.

To keep execution organized, results are documented in a structured way. Traditionally, this is done using a test execution table, sometimes referred to as a test results table.

This structure typically includes a reference to the **Test Case ID**, allowing each result to be linked back to what was designed. In cases where scenarios are used, a **Scenario ID** may also be included to maintain a connection to higher-level context.

Execution records usually capture the **execution date**, which helps track when testing was performed. In manual testing, the **tester name** may also be recorded, while in automated testing this is often replaced by system-generated logs.

The most important part of execution is the **actual result**, which represents what the system did during the test. This is compared against the expected outcome defined in the test case.

Based on this comparison, a **status** is assigned. A test may be marked as `Pass` when the behavior matches expectations, `Fail` when there is a deviation, or `Blocked` when the test cannot be executed due to an issue such as missing data or environment problems.

Additional **comments or defect information** may also be recorded. These provide context for failures and help with further investigation and debugging.

In modern testing practices, like in automated environments, this information is often captured automatically through tools rather than manually maintained tables. Test execution results may be stored in test management systems, CI/CD pipelines, or reporting dashboards.

However, the underlying concept remains the same. Each test execution must clearly show what was tested, what happened, and whether the system behaved as expected.

This ensures that testing results are reliable, traceable, and useful for evaluating system quality.
