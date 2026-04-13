# Content of types of testing level 1

- [Smoke Testing](#smoke-testing)
- [Sanity Testing](#sanity-testing)
- [Confirmation Testing (Retesting)](#confirmation-testing-retesting)
- [Regression Testing](#regression-testing)

In this level, the focus is on **types of testing based on when and why testing is performed during development**.

These types of testing are commonly used to verify that the system works correctly after changes such as new **builds**, **bug fixes** or **updates**. The goal is not to analyze input data or design test cases in a structured way, but to ensure that the system remains stable and behaves as expected.

These testing activities are part of everyday development workflows. They help quickly determine whether the system is in a condition where more detailed testing can continue.

Some types of testing in this level are broad and focus on overall system readiness, while others are more targeted and verify specific changes or previously identified defects.

Rather than aiming for deep or complete coverage, the goal here is to build **confidence** that the system is functioning correctly after changes.

Together, these types of testing ensure that updates do not break existing functionality and that the system remains reliable over time.

We start with **Smoke Testing**, which provides a quick check to confirm that the most critical parts of the system are working.

## Smoke Testing

Smoke testing is a basic set of tests run on a new software build to quickly verify that the most critical functionalities work.

Typical smoke test areas include

- Application launch  
- Login functionality  
- Basic navigation  
- Core feature access  

If smoke testing fails, the build is usually rejected for further testing.

## Sanity Testing

Sanity testing is performed after minor changes or defect fixes. It focuses on verifying that the specific changes work correctly and that related core functionality has not been broken.

Sanity testing is narrower and more focused than smoke testing and is usually executed quickly.

## Confirmation Testing (Retesting)

Confirmation testing, also called retesting, verifies that a previously reported defect has been fixed.

The tester reruns the same test cases that originally detected the defect to confirm that the issue no longer occurs.

Confirmation testing checks only the fixed defect, not the surrounding functionality.

## Regression Testing

Regression testing ensures that recent changes such as defect fixes, enhancements, upgrades, or migrations have not negatively affected existing functionality.

Regression testing involves re-running previously executed test cases to verify that the software still behaves as expected.

Regression testing protects the stability of the system over time.
