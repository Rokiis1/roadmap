# Content of Table: Overview

- [Component Testing (Unit Testing)](#component-testing-unit-testing)
- [Component Integration Testing (Unit Integration Testing)](#component-integration-testing-unit-integration-testing)
- [System Testing](#system-testing)
- [System Integration Testing](#system-integration-testing)
- [Acceptance Testing](#acceptance-testing)

After learning what testing is, how the test process works, and how teams organize quality.

**At what stages do we test software?**

Testing is not done only once at the end. Instead, it is performed at different levels, each focusing on a different scope of the system. These levels help ensure that problems are detected as early as possible and that the system works correctly both internally and externally.

Testing is not performed only at the end of development. Instead, it is carried out at different levels, each focusing on a specific scope of the system. These levels help detect defects early and ensure that the system works correctly both internally and externally.

Testing typically progresses from small, isolated parts of the system toward full business validation.

![alt text](./images/testLevels.png)

We begin at the lowest level, where individual parts of the system are verified independently.

## Component Testing (Unit Testing)

Component testing verifies that individual units of code function correctly in isolation. A unit is typically the smallest testable part of the system, such as a function, method, or class.

At this level, testing focuses on internal logic and correctness of individual components. Dependencies are often replaced with **mocks** or stubs to ensure that the unit is tested independently. This makes it easier to detect and fix defects early in development.

## Component Integration Testing (Unit Integration Testing)

Component integration testing focuses on how individual units interact with each other once they are combined.

The goal is to verify that interfaces between components work correctly, that communication between modules is properly handled and that data flows as expected across the system. This level helps detect issues that may not appear during isolated unit testing.

## System Testing

System testing validates the complete and integrated system as a whole. At this level, the focus shifts from individual components to the overall system behavior.

Testing ensures that the system meets specified functional requirements and behaves correctly from the user’s perspective. It often includes end-to-end scenarios that simulate real-world usage.

## System Integration Testing

System integration testing verifies how the system interacts with external systems and services.

This includes communication with third-party APIs, databases, payment systems, and other external components. The goal is to ensure correct data exchange, proper handling of external dependencies, and reliable system behavior beyond internal boundaries.

## Acceptance Testing

Acceptance testing confirms that the system meets business requirements and is ready for release.

At this level, the focus is on validating the system from a business and user perspective rather than technical correctness. It ensures that the system delivers expected value and is suitable for real-world use. This level often includes activities such as user acceptance testing, alpha testing and beta testing.
