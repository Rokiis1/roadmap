- [Test Design Techniques](#test-design-techniques)
  - [Understanding Test Cases](#understanding-test-cases)
  - [Test Case Design Process](#test-case-design-process)
  - [Testware](#testware)
  - [Test Case Management](#test-case-management)

# Test Design Techniques

## Understanding Test Cases

**Explanation:**

Test cases are a set of conditions or variables under which a tester will determine whether a system under test satisfies requirements or works correctly. The process of developing test cases can also help find problems in the requirements or design of an application, which can be fixed before coding or implementation.

**Key Concepts:**

1. **Scenario ID:** Unique identifier for the scenario that this test case belongs to.
2. **Test Case ID:** Unique identifier for each test case.
3. **Test Case Description:** Brief about what the test case is all about.
4. **Preconditions:** Conditions that must be met before the test case can be run.
5. **Test Steps:** Detailed steps to follow to execute the test case.
6. **Test Data:** The data that needs to be input into the system during the execution of the test case.
7. **Expected Result:** The expected outcome of the test case.
8. **Actual Result:** The actual outcome of the test case, filled out after the test case execution.
9. **Postconditions:** The state of the system after the test case has been executed.
10. **Status (Pass/Fail):** Whether the test case passed or failed.
11. **Notes:** Any additional comments on the test case.

## Test Case Design Process

**Explanation:**

The Test Case Design Process is a systematic approach to creating a set of conditions or variables under which a tester will determine whether a system under test satisfies requirements or works correctly. The process incorporates a Scenario-oriented Approach, which focuses on real-world use cases and user paths.

**Key Concepts:**

1. **Identify Test Requirements:** This is the first step where you identify what you need to test. This could be based on software requirements, user stories, use cases, or any other form of software documentation.

![alt text](./images/indentifyTestRequirements.png)

2. **Define Test Scenarios:** Identify the scenarios that the system will be used in. These scenarios should be based on real-world use cases and should cover all the major functionalities of the system.

![alt text](./images/defineTestScenarios.png)

3. **Define Test Case:** For each scenario, define a set of test cases that cover all the possible paths the user could take. Define the purpose of each test case, what it should achieve, and what functionality or part of the system it covers.

![alt text](./images/defineTestCase.png)

4. **Design Test Steps:** Detail the steps to be taken to execute each test case. This should be clear and concise, and leave no room for ambiguity.

![alt text](./images/designTestSteps.png)

5. **Specify Test Data:** Identify the data to be used for testing. This could be input data for the system, or data that the system uses to perform certain operations.

![alt text](./images/specifyTestData.png)

6. **Define Pre- and Post-Conditions:** Specify the state of the system before and after each test case is executed. This helps to ensure that the system is set up correctly for the test, and that the test has the expected impact on the system.

![alt text](./images/definePreAndPostConditions.png)

7. **Specify Expected Results:** Define what the expected outcome of each test case is. This is what you will compare the actual results to in order to determine if the test case passed or failed.

![alt text](./images/specifyExpectedResults.png)

8. **Review and Approve Test Case:** Have the test cases reviewed by peers or stakeholders for accuracy and completeness. Once approved, the test cases are ready to be executed.

9. **Execute Test Case and Record Results:** Run the test cases, record the results, and compare them to the expected results.

| Scenario ID | Test Case ID | Test Case Description | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Postconditions | Status | Notes |
|-------------|--------------|-----------------------|---------------|------------|-----------|-----------------|---------------|----------------|--------|-------|
| SID001      | TCID001      | Check if a user can register with valid details | User is on the registration page | 1. Enter a valid name in the "Name" field. 2. Enter a valid email in the "Email" field. 3. Enter a valid password in the "Password" field. 4. Click on the "Register" button. | Name: "Test User", Email: "testuser@example.com", Password: "Test@123" | User is successfully registered and redirected to the dashboard | User is successfully registered and redirected to the dashboard | User is registered and redirected to the dashboard | Pass |  |

*Status:*

  1. **Pass:** The test case has passed, meaning the actual result matched the expected result.

  2. **Fail:** The test case has failed, meaning the actual result did not match the expected result.

  3. **Blocked:** The test case could not be executed because a prerequisite test case failed or a setup step was not completed.

  4. **Not Executed:** The test case has not been executed yet.

  5. **In Progress:** The test case is currently being executed.

10. **Update Test Case as Needed:** If the system changes, or if the test case did not accurately test the system, update the test case as needed.

## Testware

**Explanation:**

Testware refers to the artifacts produced during the test process needed to plan, design, and execute tests, such as documentation, scripts, inputs, expected results, set-up and clear-up procedures, files, databases, environment, and any additional software or utilities used in testing.

**Key Concepts:**

1. **Test Documentation:** This includes test plans, test designs, test cases, and test procedures.

2. **Test Scripts:** These are the automated instructions that will be run by automated testing tools.

3. **Test Data:** This is the data that will be used to test the system. It can be input directly into the system or used by the test scripts.

4. **Expected Results:** These are the outcomes that you expect to see after the test has been executed.

5. **Test Environment:** This includes the hardware and software environment in which the tests will be run, and any other software or tools that will be used to carry out the test.

6. **Test Utilities:** These are additional software or tools used to set up, execute, or verify the results of tests.

## Test Case Management

**Explanation:**

Test Case Management involves the process of managing and tracking the use of test cases during the testing process. It helps in organizing, documenting, and conducting tests by providing tools to write and manage test cases in a structured format.

**Key Concepts:**

1. **Test Case Repository:** A centralized location where all the test cases are stored and managed. It helps in maintaining consistency and reusability of test cases.

2. **Test Execution Tracking:** Keeping track of which test cases have been executed, their results, and any bugs or issues found.

3. **Test Coverage:** Ensuring that all parts of the application are tested. It helps in identifying areas that have not been tested.

4. **Test Case Versioning:** Keeping track of changes to test cases over time. This is important when the application changes and test cases need to be updated.

5. **Test Case Prioritization:** Determining the order in which test cases should be executed based on factors like risk, functionality importance.

6. **Reporting and Metrics:** Providing insights into the testing process, like the number of test cases executed, passed, failed.