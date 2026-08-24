# Table of Contents: Test Execution Summary

- [Test Execution Level 1](#test-execution-level-1)
- [Test Execution Level 2](#test-execution-level-2)

This summary brings together the most important concepts from the **Test Execution** module. It is designed as a quick reference for revision and preparation for questions where the main concepts, relationships and execution decisions need to be explained clearly.

## Test Execution Level 1

Level 1 establishes the foundations of **test execution** and introduces the two main execution approaches covered in this module, **manual testing** and **automation testing**.

**Test execution** is the process of running a test to check whether a system behaves as expected. A test is prepared with inputs, actions and expected results. During execution, the defined steps are performed against the actual system and the observed result is compared with the expected result.

![Test execution flow](./1_level/assets/images/test_execution_flow.png)

If the actual result matches the expected result, the test is considered **passed**. If the actual result does not match the expected result, the test is considered **failed**. Other statuses may also be used when execution is affected by different conditions, but those statuses are handled in later material.

Test execution is important because it moves testing from preparation into **actual verification of system behavior**. A planned test does not provide execution evidence until it is performed and its observed result is evaluated.

**Manual testing** is the process of executing test cases by interacting with the system directly without using automation tools or scripts to perform the test steps. The tester performs the actions, observes the behavior and compares the actual result with the expected result.

Manual testing allows direct interaction with the application and supports observation from a user's perspective. Typical actions can include clicking buttons, entering data, navigating between pages and checking visible results.

![Manual testing flow](./1_level/assets/images/manual_testing_flow.png)

Manual execution can become time-consuming when the same tests need to be repeated many times because a person must perform the steps again for each execution.

**Automation testing** is the process of executing test cases using tools and scripts instead of performing the test steps manually. The automated test performs predefined actions and checks whether the actual result matches the expected result.

Automated tests can interact with a system in different ways, such as clicking interface elements or sending requests. Once suitable tests have been automated, they can be executed repeatedly without requiring a tester to perform every step manually.

![Automation testing flow](./1_level/assets/images/automation_testing_flow.png)

Automation can provide **faster and more consistent repeated execution**, but automated tests require initial effort to create and continuing effort to maintain.

The fundamental difference between manual and automation testing is **who or what performs the test steps**. Manual tests are performed by a person, while automated tests are performed by tools and scripts according to predefined instructions.

Other basic differences include **execution speed**, **consistency** and **setup effort**. Manual testing usually requires less initial setup but depends on continued human effort. Automation requires more preparation but can execute suitable repeatable tests quickly and consistently.

![Manual versus automation testing](./1_level/assets/images/manual_vs_automation.png)

After reviewing Level 1, you should be able to explain **what test execution is**, describe how **actual and expected results are compared**, explain the basic meaning of **passed and failed**, distinguish **manual testing from automation testing** and describe their fundamental differences in execution.

## Test Execution Level 2

Level 2 builds on the execution approaches introduced in Level 1 and focuses on **deciding when manual testing or automation testing provides the most value**. The decision depends on the purpose of the test and the context in which it will be executed rather than on treating one approach as universally better.

**Manual testing** is a strong choice when **human observation, judgment and flexibility** are required. It is especially useful when requirements or expected behavior are still evolving because a tester can adapt the testing as understanding of the feature develops.

Manual testing is also appropriate for **usability and user experience validation** because these areas depend on human perception and judgment. A person can evaluate whether an interface is understandable, comfortable to use and behaves in a way that feels appropriate in ways that traditional scripts cannot reliably measure.

Tests that will be executed **only once or a few times** may be more practical to perform manually because the effort required to create and maintain automation may exceed the time saved by automating them.

Manual execution can also provide more value for **unstable or frequently changing features**. If functionality changes repeatedly, automated tests may require constant updates before they have enough reuse to justify their maintenance cost.

**Unscripted defect investigation** is another situation where manual flexibility is valuable. When unexpected behavior is being investigated, the tester may need to change inputs, follow new paths and adjust the investigation according to what is discovered. A predefined script cannot anticipate every direction the investigation may take.

![When to use manual testing](./2_level/assets/images/when_to_use_manual_testing.png)

**Automation testing** is most appropriate when tests need to be executed **repeatedly and consistently**. A common example is **regression testing**, where automated tests repeatedly verify that existing functionality continues to work after changes to the system.

**Stable features** are generally stronger automation candidates because their expected behavior changes less frequently. This allows automated tests to be reused across many executions without requiring constant script updates.

Automation is also useful when the same tests need to run across **multiple environments or configurations**, such as different browsers, devices, operating configurations or deployment environments.

The required **test data and environment dependencies** must also be considered. Automation provides more value when test data can be prepared reliably and required systems behave predictably. Complex data setup, unstable environments or fragile third-party integrations can increase maintenance effort and reduce the value of automation.

**Large test suites** can benefit from automated execution because many test cases can be run consistently without requiring a tester to perform every test manually.

Automation is also important in **continuous integration and continuous delivery (CI/CD)**, where automated tests can run as part of the delivery pipeline and provide fast feedback without requiring a tester to start each execution manually.

![When to use automation testing](./2_level/assets/images/when_to_use_automation_testing.png)

Not every test that can technically be automated **should be automated**. Automation should provide enough long-term value to justify the effort required to create and maintain it.

Tests involving **usability and user experience**, **one-time or rarely repeated execution**, **unstable requirements**, **human judgment** or **visual layout validation without suitable visual testing tools** may provide more value when performed manually.

Some **security mechanisms**, such as CAPTCHA, are intentionally designed to prevent automated interaction. Testing strategies should allow the surrounding functionality to be tested without attempting to defeat the security control itself.

Automation maintenance is part of the decision. Maintenance can include **updating element locators after a user interface changes**, **changing test data setup when workflows are modified** or **refactoring scripts when an API changes**. If this work occurs frequently, the maintenance cost may outweigh the execution time saved.

Choosing between manual and automation testing therefore requires evaluating practical **trade-offs** rather than relying on a simple preference for one approach.

The first question is **how often the test will be executed**. A test that runs many times has more opportunity to recover the initial automation effort through repeated use. As a rough starting point, a simple and stable test expected to run **more than 5 to 10 times** may be worth considering for automation, but this is not a fixed rule. Automation effort, maintenance cost, execution time and the value of faster feedback must also be considered.

The second question is whether the test requires **identical repetition or adaptive investigation**. Automation is valuable when the same actions and checks must be repeated consistently. Manual testing provides more value when the tester needs to change direction or respond to unexpected behavior.

The third question is whether the feature is **stable enough to justify automation maintenance**. Stable functionality allows the automation investment to provide value over many executions, while frequently changing functionality may require repeated updates to scripts, locators, test data or integrations.

The fourth question is whether the purpose is to **verify a specific rule or observe more broadly for unexpected problems**. Automation works well when inputs and expected results are clearly defined and can be checked programmatically. Manual testing is stronger when broader observation and human judgment are required.

In real projects, **manual and automation testing are often combined**. The objective is not to maximize one approach but to use each where its strengths provide the most useful and efficient testing.

After reviewing Level 2, you should be able to explain **when manual testing provides more value**, identify strong **automation candidates**, describe situations that are generally **poor candidates for automation**, explain how **test data, environment dependencies and maintenance cost** affect automation value and use practical trade-offs to decide which execution approach is appropriate for a test.
