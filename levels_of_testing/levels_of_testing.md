<!-- markdownlint-disable MD033 -->
# Content of Table on the Levels of Testing

- [Component Testing (Unit Testing)](#component-testing-unit-testing)
- [Component Integration Testing (Unit Integration Testing)](#component-integration-testing-unit-integration-testing)
- [System Testing](#system-testing)
- [System Integration Testing](#system-integration-testing)
- [Acceptance Testing](#acceptance-testing)

![alt text](./images/testLevels.png)

## Component Testing (Unit Testing)

**Explanation:**

Component testing(unit testing) verifies that individual units of code function correctly in isolation.

<details>
    <summary>Overview:</summary>

1. **Isolation:** Each unit is tested separately so that failures point directly to specific components.

2. **Mocking:** Simulated objects (mocks) replace real dependencies.

3. **White-Box Testing:** Developers use knowledge of internal code structures.

4. **Automated:** These tests are usually automated for frequent regression testing.

5. **Test-Driven Development (TDD):** Unit tests are often written before the code to drive development.

6. **Coverage:** Measures how much of the components code is tested.

</details>

## Component Integration Testing (Unit Integration Testing)

**Explanation:**

Component integration testing verifies the interactions between individual units once they are combined.

<details>
    <summary>Overview:</summary>

1. **Interaction Testing:** Focuses on interfaces and communication between units.

2. **Integration Approaches:**

    - **Bottom-Up Integration** is an approach where testing starts with the lower-level modules and progresses upwards. Lower-level modules are integrated and tested first, and then higher-level modules are added and tested incrementally.

    - **Top-Down Integration**  is an approach where testing starts with the higher-level modules and progresses downwards. Higher-level modules are integrated and tested first, and then lower-level modules are added and tested incrementally.

    - **Big Bang Integration** is an approach where all modules are integrated simultaneously after they have been developed and unit tested. The entire system is then tested as a whole.

</details>

## System Testing

**Explanation:**

System testing validates the complete, integrated software product against its specified requirements.

<details>
    <summary>Overview:</summary>

1. **Whole System:** The entire system is tested as one entity.

2. **Functional and Non-Functional Testing:**
    - **Functional Testing:** valdiate that the system meets the functional requirements.

    - **Non-Functional Testing:** Although **system testing** itself is primarily **functional**, it serves as a prerequisite for **non-functional testing**.

3. **End-to-End Testing:** Validates the complete workflows function correctly.

4. **Realistic Environment:** Typically executed in an environment that simulates production.

5. **Objective Validation:** Often performed by an independent test team for unbiased perspective.

</details>

## System Integration Testing

**Explanation:**

System integration testing focuses on the communication and data flow between the system under test and external systems or services.

<details>
    <summary>Overview:</summary>

1. **Interaction Between Systems:** Verifies that interactions with external systems are correctly managed.

2. **Test Environment:** Requires a test environment similar to production.

</details>

## Acceptance Testing

**Explanation:**

Acceptance testing confirms that the system meets business requirements and is ready for deployment. This level often involves end users.

<details>
    <summary>Key Concepts:</summary>

1. **User Perspective:** Tests are based on real world scenarios and business needs.

2. **Types of Acceptance Testing:**
    - **User Acceptance Testing (UAT):** Final validation by end users.

    - **Operational Acceptance Testing (OAT):** Validating the operational aspects of the system to ensure it can be deployed, installed, and operated in the environment.

    - **Contract and Regulatory Acceptance Testing:** Ensures that the system meets contract obligations and regulatory standards.

3. **Alpha and Beta Testing:**
    - **Alpha Testing:** Conducted by the customer in a pre production environment to validate the product before it is released.

    - **Beta Testing:** Conducted by a limited number of end users in the real environment to gather feedback before the product is officially released.

4. **End-user and Stakeholder Involvement:** Most of the time, end users or stakeholders perform acceptance testing. QA teams prepare the environment and ensure everything is working correctly before handing it over for acceptance testing. QA teams may also perform preliminary acceptance testing to verify that the system is ready for end user testing.

</details>
