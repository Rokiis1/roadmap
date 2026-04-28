# Content of Functional Testing (Build and Change-Related Testing)

- [Smoke Testing](#smoke-testing)
- [Sanity Testing](#sanity-testing)
- [Confirmation Testing (Retesting)](#confirmation-testing-retesting)
- [Regression Testing](#regression-testing)

The focus here is on testing types that are performed after changes are introduced to the system.

These changes may include new **builds**, **bug fixes**, or **feature updates**. The purpose of these tests is to verify that the system remains stable and continues to behave as expected after such changes.

Unlike test design techniques, which focus on selecting inputs and defining coverage, these testing types are concerned with **when and why testing is performed** during the development process.

They are commonly used in everyday workflows to quickly determine whether the system is in a suitable state for further testing.

Some of these testing types provide a broad check of system readiness, while others focus on validating specific changes or previously identified defects.

Rather than aiming for complete coverage, the goal is to build **confidence** that the system is functioning correctly after modifications.

Together, these testing types help ensure that updates do not break existing functionality and that the system remains reliable over time.

We start with **Smoke Testing**, which provides a quick validation of the most critical system functionality.

## Smoke Testing

**Smoke testing** is a basic set of tests run on a new software build to quickly verify that the **most critical functionalities** work.

Typical smoke testing focuses on verifying that the application can be launched successfully, that users are able to log in, that basic navigation works as expected and that **core features** of the system are accessible.

If smoke testing fails, the build is usually **rejected for further testing**.

While smoke testing provides a **broad check of system stability**, some situations require a more focused validation of specific changes.

## Sanity Testing

**Sanity testing** is performed after **minor changes** or **defect fixes**. It focuses on verifying that the **specific changes** work correctly and that related functionality has not been negatively affected.

Sanity testing is **narrower and more focused** than smoke testing and is usually executed quickly.

While sanity testing verifies that changes behave correctly, it does not specifically confirm that previously reported defects have been resolved.

## Confirmation Testing (Retesting)

**Confirmation testing**, also called **retesting**, verifies that a previously reported **defect has been fixed**.

The tester reruns the **same test cases** that originally detected the defect to confirm that the issue no longer occurs.

Confirmation testing focuses only on the **fixed defect** and does not verify the surrounding functionality.

However, even when a defect is fixed, changes to the system may unintentionally impact other areas.

## Regression Testing

**Regression testing** ensures that recent changes such as **defect fixes**, **enhancements**, upgrades or migrations have not negatively affected **existing functionality**.

It involves re-running **previously executed test cases** to verify that the software still behaves as expected.

Regression testing is most commonly applied to **functional testing**, but it can also be used in **non-functional areas** such as performance and security to ensure that system behavior remains consistent after changes.

Regression testing plays a **critical role in maintaining system stability over time**.
