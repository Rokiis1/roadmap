# Content of Test Execution Level 1

- [What is Test Execution](#what-is-test-execution)
- [Manual Testing](#manual-testing)
- [Automation Testing](#automation-testing)
- [Differences Between Manual and Automation Testing](#differences-between-manual-and-automation-testing)

In previous topics, the focus was on understanding what testing is and why it is important in software development.

At this level, the focus moves to **test execution**, which is the step where tests are actually performed to verify how the system behaves.

Tests can be executed in different ways. A tester may perform them manually by interacting with the application or they may be executed automatically using tools and scripts.

Both approaches play an important role. Manual testing allows direct observation from a user perspective, while automation helps execute tests quickly and consistently.

The goal at this level is to understand what test execution is, how these approaches work and how they differ in practice.

We begin by defining what test execution means.

## What is Test Execution

**Test execution** is the process of running a test to check whether a system behaves as expected.

A test is usually designed earlier by defining inputs, actions and expected results. During execution, those steps are performed on the actual system and the observed result is compared with the expected one.

The purpose of test execution is to verify whether the software works correctly and to identify any differences between expected and actual behavior.

For example, if a login form should allow a user to sign in with valid credentials, the tester executes the test by entering a username and password and then checking whether the system logs the user in successfully.

If the actual result matches the expected result, the test is considered **passed**.

If the actual result does not match the expected result, the test is considered **failed**.

Test execution is one of the core activities in software testing because it is the point where planned test cases are performed against the application.

It confirms how the system behaves in practice and moves testing from planning into actual verification.

Tests can be executed in different ways depending on how the steps are performed. One of the most common approaches is **manual testing**, where the tester interacts with the system directly.

## Manual Testing

**Manual testing** is the process of executing test cases by interacting with the system directly, without using automation tools or scripts.

In this approach, the tester performs each step of the test case manually, observes how the system behaves, and compares the actual result with the expected result.

Manual testing focuses on understanding the system from a user’s perspective. The tester simulates real user actions such as clicking buttons, entering data, navigating between pages, and verifying visible results.

For example, consider a login feature.

A tester executes the test by opening the application, entering a username and password, clicking the login button, and observing whether the system allows access or shows an error message.

Manual testing allows the tester to directly observe system behavior and interact with the application in real time.

However, executing tests manually can become time-consuming, especially when the same tests need to be repeated multiple times.

To handle repeated execution more efficiently, tests can also be performed using tools and scripts. This approach is known as **automation testing**.

## Automation Testing

**Automation testing** is the process of executing test cases using tools and scripts instead of performing the steps manually.

In this approach, test steps are written as code. The script interacts with the system automatically, performs actions such as sending requests or clicking elements, and verifies whether the actual result matches the expected result.

For example, instead of manually testing a login feature every time, an automated test can be created to perform the same steps.

When the test runs, the system executes the steps automatically and checks whether the result matches the expected outcome.

Automation testing allows tests to be executed quickly and repeatedly without additional manual effort.

However, creating automated tests requires time and effort to write and maintain the scripts.

Because both approaches have different characteristics, manual and automation testing are used together in practice.

## Differences Between Manual and Automation Testing

Manual testing and automation testing are two different approaches to executing tests. Both are used to verify system behavior, but they differ in how tests are performed.

The main difference is in how the test steps are executed.

In manual testing, a tester performs each step by interacting with the system directly. The tester observes the system behavior and determines whether the result is correct.

In automation testing, test steps are executed by scripts and tools. The system runs the tests automatically and checks results based on predefined conditions.

These differences affect how tests are executed and how results are produced.

Manual testing is generally slower because each step must be performed by a person. It can also be harder to repeat tests in exactly the same way every time.

Automation testing is faster and more consistent. The same tests can be executed multiple times with identical steps and results.

Manual testing requires little setup but depends on human effort. Automation testing requires initial effort to create scripts, but once created, tests can run automatically.

Because of these differences, both approaches are used together in practice.
