# Content of Functional Testing (Build and Change-Related Testing)

- [Smoke Testing](#smoke-testing)
- [Sanity Testing](#sanity-testing)
- [Confirmation Testing (Retesting)](#confirmation-testing-retesting)
- [Regression Testing](#regression-testing)
- [Build and Change-Related Testing Workflow](#build-and-change-related-testing-workflow)

The focus here is on testing types that are commonly performed when new **builds** or **changes** are introduced to the system.

These changes may include **defect fixes**, **feature updates**, **enhancements**, upgrades or other modifications. The purpose of these testing activities is to determine whether the build is suitable for testing, whether a specific change works correctly, whether a reported defect has been fixed and whether existing functionality still works after the change.

Unlike test design techniques, which focus on selecting test conditions, inputs and coverage, these testing types describe **why and when testing is performed** during the development and delivery process.

The four testing types have different purposes.

| Testing Type             | Main Question                                         |
| ------------------------ | ----------------------------------------------------- |
| **Smoke Testing**        | Is this build stable enough for further testing?      |
| **Sanity Testing**       | Does the changed area work correctly?                 |
| **Confirmation Testing** | Has this specific reported defect been fixed?         |
| **Regression Testing**   | Did the change break existing functionality?          |

These activities can be used together during the same development cycle. The required testing depends on the type of change, affected functionality, project risk and available test coverage.

## Smoke Testing

**Smoke testing** is a small set of tests performed on a new software build to quickly verify that the **most critical functionality works** and that the build is stable enough for further testing.

Before smoke testing begins, the required build should be successfully deployed and the test environment should be available.

Typical smoke testing may verify that the application starts successfully, users can access the system, basic navigation works and critical features are available.

For an application with account functionality, a smoke test might verify that the application loads, the login page is accessible, a user can log in and the main application area can be opened.

Smoke testing provides **broad but shallow coverage**. Its purpose is not to test every feature in detail but to detect major problems that would prevent meaningful further testing.

The result normally determines what happens next.

If the smoke test **passes**, more detailed testing can continue.

If the smoke test **fails**, the build is normally rejected or returned for investigation because continuing detailed testing on an unstable build may waste time.

Smoke tests are commonly good candidates for **automation** because the same critical checks are repeatedly executed for new builds. In CI/CD workflows, automated smoke tests may run after deployment and prevent an unsuitable build from progressing further.

Smoke testing may therefore be performed automatically before QA receives a build, although QA may also execute smoke tests manually depending on the project and workflow.

Once the build is considered stable enough for further testing, more focused testing can be performed when particular areas have changed.

## Sanity Testing

**Sanity testing** is a focused check performed after a **specific change**, such as a minor feature update, configuration change or defect fix, to determine whether the changed area works as expected.

Unlike smoke testing, which checks the general stability of the build, sanity testing concentrates on the **area affected by the change and closely related functionality**.

In practice, smoke testing asks **Is this build stable enough to test?** while sanity testing asks **Did this specific change work correctly?**

Sanity testing may selectively use existing test cases related to the changed area rather than executing a large test suite. It is normally intended to provide quick confidence in the change before broader testing continues.

Sanity testing checks that the **changed area works as a whole**. It does not necessarily re-execute the exact steps that originally reproduced a particular defect.

For example, if changes were made to account registration, sanity testing might verify that registration can still be completed, validation works and the user can continue into the application after creating an account.

When the purpose is specifically to verify that a previously reported defect no longer occurs, **confirmation testing** is used.

## Confirmation Testing (Retesting)

**Confirmation testing**, also called **retesting**, verifies that a previously reported **defect has been fixed**.

The tester reruns the **same test cases or reproduction steps** that originally detected the defect and compares the new result with the expected behavior.

Where practical, the defect should be verified in the **same environment in which it was originally observed**, or in a representative equivalent environment. This is particularly important when the problem may depend on a specific browser, operating system, device, configuration or other environmental condition.

For example, suppose a defect was reported because selecting **Create Account** after entering valid registration information produced an error instead of creating the account.

After the fix is delivered, confirmation testing repeats the conditions and steps that produced the original problem. If registration now completes according to the expected behavior, the fix can be considered confirmed for that defect.

Confirmation testing is deliberately **narrow**. It answers whether the specific defect was corrected but does not establish that the change had no unintended effect elsewhere.

That broader risk is addressed through **regression testing**.

## Regression Testing

**Regression testing** verifies that changes to the system have not negatively affected **existing functionality that previously worked**.

Regression testing may be required after **defect fixes**, **feature changes**, enhancements, configuration changes, upgrades, migrations or other modifications that could affect existing behavior.

For example, a change to account registration may also affect login, account verification, profile creation or other functionality that shares authentication or account-management components. Regression testing checks relevant existing behavior to identify unintended side effects.

Regression testing does not always mean rerunning every existing test.

The appropriate regression scope depends on the **change, affected areas and risk**.

**Full regression** executes the complete regression suite and may be appropriate for major releases, large changes or situations where changes could have broad effects.

**Partial regression** executes tests for the changed area and functionality that may be affected by it.

**Risk-based regression** prioritizes tests according to factors such as business importance, technical impact, previous defects and the likelihood that the change could affect existing behavior.

Regression suites are strong candidates for **test automation** because the same tests are executed repeatedly as the product changes. Automated regression testing can provide faster feedback, while manual regression testing remains useful where human observation, exploratory investigation or functionality unsuitable for automation is required.

Regression testing is commonly associated with functional testing, but regression can also be applied to relevant **non-functional characteristics** when a change may affect areas such as performance, security, usability or compatibility.

Regression testing therefore provides confidence that functionality outside the immediate change continues to behave as expected.

## Build and Change-Related Testing Workflow

Smoke, sanity, confirmation and regression testing are related, but they answer different questions and are not necessarily executed in the same order for every change.

A practical workflow may look like this.

1. A new build is deployed to the test environment.
2. **Smoke testing** checks whether the build is stable enough for further testing.
3. QA performs the planned testing and identifies a defect in account registration.
4. A developer implements the defect fix and provides an updated build.
5. **Confirmation testing** repeats the original reproduction steps to verify that the registration defect has been fixed.
6. **Sanity testing** checks the changed registration area and closely related behavior to determine whether the change works correctly as a whole.
7. **Regression testing** checks existing functionality that could have been affected by the registration change.

The exact workflow can vary by project. For a small change, confirmation, sanity and targeted regression testing may be sufficient. For a major release, a new smoke test followed by broader regression testing may be required.

The important distinction is the **purpose of each activity**.

**Smoke testing** determines whether the build is suitable for further testing.

**Sanity testing** provides focused confidence that a changed area works correctly.

**Confirmation testing** verifies that a specific reported defect has been fixed.

**Regression testing** verifies that changes have not introduced unintended problems into existing functionality.

Together, these testing activities help QA respond efficiently to new builds and software changes without treating every change as requiring the same amount or type of testing.
