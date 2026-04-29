# Content of test management level 4

- [Test Strategy (Advanced Test Approach)](#test-strategy-advanced-test-approach)
- [Risk Management and Risk-Based Testing](#risk-management-and-risk-based-testing)
- [Test Prioritization and Scheduling](#test-prioritization-and-scheduling)
- [Test Estimation](#test-estimation)
- [Test Deliverables and Reporting Strategy](#test-deliverables-and-reporting-strategy)
- [Test Governance and Communication](#test-governance-and-communication)

In **Test Management Level 3**, the focus was on executing tests, monitoring progress, measuring results and reporting the current state of testing. Testing activities were actively performed, observed and evaluated.

At this stage, teams gained visibility into testing, but decisions were still largely based on what was happening during execution.

As projects grow in complexity, it is no longer enough to only execute and monitor testing. Teams must make informed decisions about what should be tested first, how risks should be managed and how testing efforts should be optimized.

At **Test Management Level 4**, the focus shifts to **strategy, decision-making and optimization**. Testing is no longer only about performing activities, but about guiding those activities based on risk, priorities and business goals.

This level builds on the foundation of planning and execution by introducing structured approaches for managing uncertainty, improving efficiency and ensuring that testing delivers maximum value.

To achieve this, it is necessary to define a clear and structured approach to testing that aligns with project goals and quality expectations.

## Test Strategy (Advanced Test Approach)

In **Test Management Level 2**, the focus was on creating a **test plan** to organize and control testing activities for a specific release or phase. The test plan provided structure by defining scope, objectives, resources and schedule.

However, as projects grow and involve multiple releases or teams, a single test plan is not enough to ensure consistency across all testing activities. There is a need for a higher-level approach that defines how testing should be performed across the entire project.

This is where test strategy is introduced.

A **test strategy** and a **test plan** are not alternatives. They work together and serve different purposes.

The **test strategy** defines the overall direction of testing. It describes how testing should be performed across the project, including guiding principles, approaches and methods. Because it provides a long-term view, it remains relatively stable and does not change frequently.

The **test plan** applies this strategy to a specific context, such as a release, feature or testing phase. It defines what will be tested, when testing will take place, who is responsible and what resources are required.

In practice, the test strategy and test plan can be documented in different ways depending on the organization.

In some cases, the **test strategy is a separate document** that defines the overall approach for the entire project or product. Individual **test plans are then created separately** for each release or testing phase and follow this strategy.

In other cases, especially in smaller teams or agile environments, the **test strategy is included as a section within the test plan**. In this approach, both the high-level strategy and the detailed plan are documented in a single place.

A key part of test strategy is defining the **test approach**. This includes deciding how testing will be performed at different levels of the system and what types of testing will be applied.

Testing is typically organized into **test levels**, such as unit testing, integration testing, system testing and acceptance testing. Each level focuses on different parts of the system and helps ensure that functionality is validated step by step.

In addition, the strategy defines **test types**, including functional and non-functional testing. Functional testing verifies that the system behaves according to requirements, while non-functional testing evaluates aspects such as performance, security and usability.

Test strategy also defines the **testing techniques** that will be used. These include **black-box testing**, which focuses on external behavior, **white-box testing**, which uses knowledge of internal implementation, and **experience-based testing**, which relies on tester knowledge, intuition and previous experience. More advanced techniques are explored in **Test Case Design Level 4**.

Test strategy also defines the tools that support testing activities. These include test management tools for organizing and tracking test cases, defect tracking tools for managing issues, and automation tools for executing repetitive tests. In addition, specialized tools may be used for API testing, performance testing and security testing, depending on project needs.

To further structure the testing approach, test strategy may use models such as the **Testing Quadrants**. This model helps organize testing activities based on whether they are business-facing or technology-facing, and whether they support development or evaluate the product.

The quadrants divide testing into four areas.

![testing_quadrants](./assets/images/test_quadrants.png)

In the first area, testing is technology-facing and supports the team. This includes unit and integration testing, which focus on verifying internal correctness and are often automated.

In the second area, testing is business-facing and supports the team. This includes functional testing and validation of user scenarios to ensure that the system meets business requirements.

In the third area, testing is business-facing and evaluates the product. This includes exploratory testing, usability testing and user acceptance testing, which help identify defects and improve user experience.

In the fourth area, testing is technology-facing and evaluates the product. This includes performance, load and security testing, which assess how the system behaves under different conditions.

By using the testing quadrants, teams can ensure that testing activities are balanced and cover both technical and business perspectives.

Another important element of test strategy is defining **entry and exit criteria**. Entry criteria specify the conditions that must be met before testing can begin, such as a stable build or a prepared test environment. Exit criteria define when testing can be considered complete, such as achieving sufficient coverage or resolving critical defects.

Test strategy also considers how testing effort should be balanced across different areas of the system. This includes deciding where to focus testing based on risk, complexity and business importance. More advanced prioritization approaches are covered in the next sections.

Without a clear test strategy, testing may become inconsistent across teams or phases. Different approaches may be used without alignment, leading to gaps in coverage or inefficient use of resources.

A well-defined test strategy ensures consistency, improves decision making and provides a strong foundation for managing testing activities at scale.

To apply this strategy effectively, it is necessary to identify and manage risks that can impact testing and product quality.

To apply this strategy effectively, it is necessary to identify and manage risks that can impact testing and product quality. Not all parts of a system carry the same level of risk, and testing efforts must be directed toward areas that are most likely to fail or have the greatest impact on the business.

## Risk Management and Risk-Based Testing

To apply a test strategy effectively, it is necessary to identify and manage risks that can impact testing and overall product quality. Not all parts of a system carry the same level of risk, so testing efforts should focus on the most critical areas.

Risk management is a structured process. In practice, teams follow a simple flow.

```text
1 Identify the risk
2 Assess likelihood and impact
3 Determine risk level
4 Define mitigation actions
5 Record the risk
6 Use the risk to guide testing
```

Risk management is the process of identifying, assessing and controlling potential issues that could affect testing or software quality.

One of the first steps in risk management is **risk identification**. This involves recognizing potential problems during development or testing. Risks can be technical, process-related or external.

```text
Feature: Payment System
Dependency: Third party API
Risk: API instability
Impact: Transaction failures
```

After risks are identified, they must be evaluated through **risk assessment**. Each risk is analyzed based on its likelihood of occurrence and its potential impact.

Risk levels such as High, Medium and Low are used to classify risks and help teams decide which ones need more attention.

```text
Feature: Payment Processing
Likelihood: Medium
Impact: High
Risk Level: High
```

Once risks are assessed, **risk mitigation strategies** are defined. These actions reduce the likelihood or impact of the risk or prepare the team to handle it.

```text
Risk: Payment failure
Mitigation: Add validation tests and retry logic
Contingency: Use backup payment service
```

To keep everything organized, teams maintain a **risk register**. This is where all risk information is stored and updated in one place.

```text
Risk ID: R1
Feature: Payment processing
Description: API instability
Likelihood: Medium
Impact: High
Risk Level: High
Mitigation: Retry mechanism and additional validation tests
Contingency: Use backup payment service
Status: Open
```

The risk register is the main working document. It combines identification, assessment and mitigation and is used throughout testing.

Risk management directly influences how testing is performed through **risk-based testing**.

Risk based testing uses the risk register to decide what to test first. High-risk areas are tested earlier and more thoroughly.

```text
Risk: High
Feature: Payment processing
Action: Test first

Risk: Medium
Feature: Login
Action: Test next

Risk: Low
Feature: Profile
Action: Test later
```

This ensures that the most critical parts of the system are validated first, especially when time or resources are limited.

Risk-based testing is continuous. As testing progresses, risks may change and priorities are updated.

```text
Event: Login failures increase
Risk Level: High
Action: Increase testing priority
```

Risk management can be applied at different levels. **Product risk management** focuses on system functionality, performance and security. **Project risk management** focuses on timelines, cost and resources.

```text
Type: Product Risk
Example: Data breach
Action: Perform security testing

Type: Project Risk
Example: Resource shortage
Action: Adjust schedule or resources
```

Without risk management, testing may be evenly distributed, which can cause critical issues to be missed.

By integrating risk management into testing, teams focus on what matters most and improve overall product quality.

To apply these decisions during execution, it is necessary to determine the order in which testing activities should be performed. Not all tests can be executed at the same time, so their sequence is guided by risk, dependencies and business importance.

## Test Prioritization and Scheduling

Once risks are identified and assessed, testing activities must be organized so that the most important areas are tested first. Since time and resources are limited, not all test cases can be executed at the same time.

Test prioritization and scheduling define the order in which test cases are executed based on factors such as risk, coverage, requirement importance and dependencies.

To make these decisions, information is gathered from different sources.

- **Risk information** comes from risk management activities
- **Requirement priorities** come from business or product stakeholders
- **Coverage information** comes from test design and code analysis
- **Dependencies** come from system workflows and technical design

In practice, this information is combined for each test case and used to decide priority.

```text
Test Case ID: T1
Feature: Payment processing
Impact: High
Likelihood: High
Priority: High

Test Case ID: T2
Feature: User profile
Impact: Low
Likelihood: Low
Priority: Low

Test Case ID: T3
Feature: View dashboard
Impact: Medium
Likelihood: Medium
Priority: Medium

Test Case ID: T4
Feature: Update profile
Impact: Low
Likelihood: Low
Priority: Low
```

Test prioritization focuses on deciding which test cases should be executed first.

One common approach is **risk-based prioritization**. Test cases that cover high-risk areas are executed earlier.

```text
T1 Create user Risk High Priority High
T2 Login Risk Medium Priority Medium
T3 Dashboard Risk Medium Priority Medium
T4 Profile Risk Low Priority Low
```

Another approach is **coverage-based prioritization**, where test cases that cover more functionality or critical paths are executed earlier.

```text
T1 Create user Coverage High Priority High
T2 Login Coverage High Priority High
T3 Dashboard Coverage Medium Priority Medium
T4 Profile Coverage Low Priority Low
```

Test cases can also be prioritized based on **requirement importance**.

```text
Requirement User access Priority High -> Test first
Requirement Dashboard view Priority Medium -> Test later
Requirement Profile update Priority Low -> Test later
```

Test prioritization focuses on deciding which test cases should be executed first.

In practice, teams assign simple scores to each factor and combine them to determine priority.

```text
Risk Score
High = 3
Medium = 2
Low = 1

Requirement Priority
High = 3
Medium = 2
Low = 1

Coverage
High = 3
Medium = 2
Low = 1
```

Each test case is evaluated using these values.

```text
Test Case: T1 Create user
Risk: High = 3
Requirement: High = 3
Coverage: High = 3
Total Score: 9

Test Case: T2 Login
Risk: Medium = 2
Requirement: High = 3
Coverage: High = 3
Total Score: 8

Test Case: T3 Dashboard
Risk: Medium = 2
Requirement: Medium = 2
Coverage: Medium = 2
Total Score: 6

Test Case: T4 Profile
Risk: Low = 1
Requirement: Low = 1
Coverage: Low = 1
Total Score: 3
```

Test cases with higher total scores are executed first.

After priorities are assigned, dependencies between test cases must be considered.

**Technical dependencies** occur when one test case needs specific data or a system condition that is created by another test case.

This means one test must run first because it creates something that the next test directly uses.

```text
Test A Create user
Result User exists in system

Test B Login
Dependency Test B requires user to exist

Execution order
Run Test A first
Then run Test B
```

**Logical dependencies** occur when one test case checks the result of another test case.

This means the second test is used to verify what the first test has done.

```text
Test A Login
Result User is successfully logged in

Test B View dashboard
Checks Dashboard is displayed after login

Dependency Test B checks the result of Test A

Execution order
Run Test A first
Then run Test B
```

The difference is that **technical dependencies** are about **creating data or system conditions** that another test needs, while **logical dependencies** are about **verifying the result** of a previous test.

Once priorities are assigned and dependencies are identified, both must be combined to determine the actual execution order.

Priority shows which test cases are more important, while dependencies define which test cases must run before others.

To determine execution order, teams follow a simple sequence.

```text
Step 1 Assign priority to each test case based on risk, requirement and coverage
Step 2 Identify dependencies between test cases
Step 3 Adjust execution order so that dependencies are respected
```

This means that priority defines importance, while dependencies define the actual execution sequence.

```text
Initial priority based on scoring
T1 Create user High
T2 Login High
T3 Dashboard Medium
T4 Profile Low

Dependencies
T2 depends on T1
T3 depends on T2

Final execution order
Step 1 T1 Create user
Step 2 T2 Login
Step 3 T3 Dashboard
Step 4 T4 Profile
```

Even if a test case has high priority, it may need to wait until its dependencies are completed.

Test prioritization and scheduling ensure that testing is efficient and focused. By executing high-risk and high-value areas first, teams can identify critical issues earlier.

To estimate how much time and effort these activities require, it is necessary to evaluate testing effort in a structured way.

## Test Estimation

Once test cases are prioritized and scheduled, it is necessary to determine how much time, effort and resources are required to complete testing activities.

Test estimation is the process of forecasting the time, effort and cost needed for testing. It helps teams plan testing activities realistically and ensures that testing fits within project timelines.

Since estimation is based on assumptions and available data, it is not always exact. Smaller tasks are usually easier to estimate, while larger tasks should be broken down into smaller parts to improve accuracy.

To perform estimation, teams use different approaches based on available information and experience.

One approach is **metrics-based estimation**, which uses data from previous projects or current progress.

A common method is using ratios between development and testing effort. If previous projects show that testing usually requires a certain proportion of development effort, the same ratio can be applied to the current project.

```text
Previous project ratio
Development 3 parts
Testing 2 parts

Current project development effort 600 person days

Step 1
Find the testing proportion from the ratio

Testing effort = Development effort × Testing ratio

Step 2
Apply the ratio

Testing effort = 600 × 2 / 3

Step 3
Calculate the result

Testing effort = 400 person days
```

Another method is **extrapolation**, where early project data is used to estimate future effort. This is useful when the team already has some progress data from the current project.

```text
Sprint 1 testing effort 40 hours
Sprint 1 completed 80 story points

Step 1
Find testing effort per story point

Effort per story point = 40 / 80

Effort per story point = 0.5 hours

Step 2
Estimate remaining work

Remaining work = 240 story points

Step 3
Calculate remaining testing effort

Remaining testing effort = 240 × 0.5

Remaining testing effort = 120 hours
```

Another approach is **expert-based estimation**, which relies on experience and judgement.

One technique is **Wide Band Delphi**, where multiple experts provide estimates independently and then refine them through discussion until agreement is reached.

```text
Expert 1 estimate 8 hours
Expert 2 estimate 10 hours
Expert 3 estimate 12 hours

Step 1
Compare estimates

Step 2
Discuss assumptions and differences

Step 3
Agree on a final estimate

Final estimate 10 hours
```

Another technique is **three point estimation**, which considers uncertainty by using three values.

The optimistic value represents the best case where everything goes smoothly. The most likely value represents the expected situation under normal conditions. The pessimistic value represents the worst case where issues and delays occur.

```text
O 6 hours
M 9 hours
P 18 hours

Step 1
Use the three point estimation formula

E = (O + 4M + P) / 6

Step 2
Substitute the values

E = (6 + 4×9 + 18) / 6

Step 3
Calculate the result

E = 10 hours
```

This approach provides a more balanced estimate because it takes uncertainty into account.

In practice, estimation is influenced by multiple factors such as the number of test cases, feature complexity, risk level and available resources.

```text
Feature Payment processing
Test cases 20
Risk High
Estimated effort High

Feature Profile page
Test cases 5
Risk Low
Estimated effort Low
```

Estimation is not a one time activity. As testing progresses and more information becomes available, estimates may need to be updated.

Without estimation, it is difficult to plan testing activities, allocate resources or predict completion timelines.

Test estimation ensures that testing is realistic, manageable and aligned with overall project planning.

To ensure that testing results, progress and deliverables are clearly defined and communicated, it is necessary to establish a structured reporting and delivery approach.

## Test Deliverables and Reporting Strategy

Once testing activities are estimated and planned, it is necessary to define what outputs will be produced and how testing results will be communicated.

**Test deliverables** are the documents and artifacts created during testing. They provide evidence of testing activities and help stakeholders understand the quality of the system.

Different deliverables are created at different stages of testing.

At the beginning of testing, **planning-related deliverables** are created. The **test plan** defines scope, objectives, resources and approach, while **test cases** describe detailed testing steps and expected results.

During test execution, progress and results are recorded and shared. **Test progress reports** show execution status and progress, while **test execution reports** show pass and fail results and identified defects.

At the end of testing, **final deliverables** summarize the overall results. **Test summary reports** provide an overall view of testing outcomes and quality status, while **test closure reports** include lessons learned and final evaluation.

In addition to these, **supporting deliverables** help track and manage testing activities. **Traceability matrices** link requirements to test cases, **test metrics** provide quantitative measurement of testing progress and **defect reports** document identified issues.

While deliverables define what is produced, the **reporting strategy** defines how and when this information is communicated.

During testing, **detailed reports** are shared regularly to track progress and identify issues early. These reports may be shared daily or weekly depending on project needs.

At a higher level, **summary reports** are shared with stakeholders to support decision making. These reports provide an overview of test results, defect status and overall system quality.

**Reporting frequency** depends on project needs, but it is important that information is shared consistently and in a structured way.

Without clear deliverables and reporting, testing results may not be visible or properly understood.

Defining deliverables and reporting strategy ensures that testing activities are **transparent**, **measurable** and aligned with stakeholder expectations.

To ensure that all testing activities are aligned across teams and stakeholders, it is necessary to define how **communication** is managed throughout the project.

## Test Governance and Communication

Once deliverables and reporting are defined, it is necessary to ensure that testing activities are properly coordinated and communicated across the project.

**Test governance** defines how testing is controlled, monitored and aligned with project goals. It ensures that roles, responsibilities and processes are clearly defined so that testing activities are consistent and effective.

**Communication** ensures that all stakeholders are informed about testing progress, issues and decisions. Without clear communication, important information may be missed or misunderstood.

Communication during testing can take different forms depending on the needs of the team and stakeholders.

Common forms of communication include **emails**, **meetings** and **dashboards**. Emails are used for formal updates and important notifications. Meetings, such as stand-ups or review sessions, allow teams to discuss progress and resolve issues. Dashboards provide real-time visibility into testing status, metrics and defects.

Communication is also defined by its **frequency**. During active testing, teams may share updates daily through stand-up meetings, focusing on current progress and blockers. More detailed updates are often shared weekly through status reports or review meetings, focusing on overall progress and risks.

To ensure consistency, teams often use **reporting templates**. These templates define how information should be structured and presented, such as test progress reports, test execution reports and test summary reports.

Test governance also defines **roles and responsibilities** related to communication. The test lead typically shares status reports, testers update execution results and stakeholders review reports and make decisions based on the information provided.

Without proper governance and communication, testing activities may become uncoordinated and lack visibility. Important issues may not be reported in time, and decisions may be delayed.

Defining governance and communication ensures that testing activities are controlled, information is shared effectively and all stakeholders remain aligned throughout the project.
