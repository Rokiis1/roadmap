# Content of Table: Summary

- [Summary test management level 1](#summary-test-management-level-1)
- [Summary test management level 2](#summary-test-management-level-2)
- [Summary test management level 3](#summary-test-management-level-3)
- [Summary test management level 4](#summary-test-management-level-4)

## Summary test management level 1

Level 1 introduces **test management** as the discipline of organizing, guiding and controlling testing activities.

The focus is on understanding **responsibility** in testing and how defects are handled when problems are found.

**Defect management** is the main topic at this level.

A defect is any difference between the **expected behavior** and the **actual behavior** of the system.

Defect management ensures that defects are

- **identified**
- **documented**
- **prioritized**
- **assigned**
- **fixed**
- **verified**
- **closed**

A good defect report helps another person understand and reproduce the issue without additional explanation.

Important information in a defect report includes

- **defect ID**
- **title**
- **description**
- **steps to reproduce**
- **expected result**
- **actual result**
- **severity**
- **priority**
- **environment**
- **attachments**

**Severity** describes how strongly the defect affects the system.

**Priority** describes how urgently the defect should be fixed.

Key things to remember from Level 1

- Test management brings **structure and responsibility** to testing
- Defect management prevents issues from being **forgotten or ignored**
- Defects must have clear **ownership and status visibility**
- Severity and priority are different but both are important
- Clear defect reports improve communication between testers, developers and stakeholders

## Summary test management level 2

Level 2 focuses on **test planning**.

In Level 1, defects were managed after they were discovered. Level 2 moves one step earlier and defines how testing should be organized before execution begins.

The main output of test planning is the **test plan**.

A **test plan** is a structured document that explains how testing will be performed for a specific project, release or phase.

The test plan defines

- **what will be tested**
- **what will not be tested**
- **why testing is performed**
- **who is responsible**
- **where testing will happen**
- **when testing will happen**

The **scope of testing** defines the boundaries of testing.

**In scope** describes what will be tested.

**Out of scope** describes what will not be tested in the current testing effort.

**Test objectives** define what testing is expected to achieve. They help determine whether testing has been successful.

**Roles and responsibilities** define who is involved in testing and what each person is expected to do.

The **test environment** defines the hardware, software, tools, configurations and test data required for testing.

The **test schedule** defines when testing activities will take place. It includes phases, timeframes, milestones and dependencies between activities.

Key things to remember from Level 2

- Test planning defines testing before execution begins
- A test plan is the written output of test planning
- Scope prevents testing from becoming unfocused
- Objectives define what testing must achieve
- Roles provide ownership and accountability
- Environment defines the conditions required for testing
- Schedule organizes testing activities over time

## Summary test management level 3

Level 3 focuses on managing testing while execution is happening.

In Level 2, testing was planned. In Level 3, testing is monitored, measured, reported and controlled during execution.

**Test monitoring and control** helps teams understand whether testing is progressing as expected.

**Monitoring** means collecting information about test execution.

**Control** means taking action when testing is not progressing as planned.

Test monitoring and control may involve

- tracking executed test cases
- reviewing pass and fail results
- monitoring defects
- identifying blockers
- adjusting priorities
- reallocating resources

**Test metrics** provide measurable values that help evaluate testing progress, quality and effectiveness.

Common metrics include

- executed test cases
- passed test cases
- failed test cases
- defects found
- defects resolved
- pass rate
- coverage percentage

**Test coverage** shows how much of the system has been tested.

Coverage may be evaluated through

- **requirements coverage**
- **functional coverage**
- **code coverage**

At this level, requirements coverage is especially important because it shows whether requirements are linked to tests.

A **traceability matrix** links requirements to test cases and helps identify gaps.

Traceability can be

- **forward traceability**
- **backward traceability**
- **bidirectional traceability**

**Test reporting** communicates testing results, progress and quality status to stakeholders.

Reports may include detailed execution reports during testing and summary reports for higher-level decisions.

**Test progress tracking** follows testing activity over time and helps identify delays, bottlenecks and unresolved defects.

**Test closure** formally completes testing. It confirms whether exit criteria were met, summarizes results, records lessons learned and communicates remaining risks.

Key things to remember from Level 3

- Testing must be monitored and controlled during execution
- Metrics make testing measurable and objective
- Coverage shows what has been tested
- Traceability connects requirements to test cases
- Reporting makes testing results visible to stakeholders
- Progress tracking shows whether testing is on schedule
- Test closure provides a formal ending and final quality evaluation

## Summary test management level 4

Level 4 focuses on **strategy**, **decision-making** and **optimization**.

At this level, testing is not only executed and monitored. It is guided by risk, priorities, estimation and structured decision-making.

A **test strategy** defines the overall direction of testing across the project or product.

A **test plan** applies that strategy to a specific release, feature or phase.

The test strategy defines high-level guidance such as

- **test approach**
- **test levels**
- **test types**
- **testing techniques**
- **tools strategy**
- **testing quadrants**
- **entry and exit criteria**

Testing can be organized using **testing quadrants**, which help balance technical and business-focused testing.

The **first quadrant** contains technology-facing tests that support the team, such as unit testing and integration testing.

The **second quadrant** contains business-facing tests that support the team, such as functional testing and story validation.

The **third quadrant** contains business-facing tests that evaluate the product, such as exploratory testing, usability testing and user acceptance testing.

The **fourth quadrant** contains technology-facing tests that evaluate the product, such as performance testing, load testing and security testing.

**Risk management** identifies, assesses and controls risks that may affect testing or product quality.

The risk management flow includes

- identify the risk
- assess likelihood and impact
- determine risk level
- define mitigation actions
- record the risk
- use the risk to guide testing

A **risk register** stores risk information in one place and supports risk-based testing.

**Risk-based testing** uses risk levels to decide what should be tested first and more thoroughly.

**Test prioritization and scheduling** define the order in which test cases should be executed.

Prioritization may be based on

- **risk**
- **requirement importance**
- **coverage**
- **dependencies**

Dependencies affect execution order because some tests must run before others.

**Technical dependencies** happen when one test creates data or conditions that another test needs.

**Logical dependencies** happen when one test verifies the result of another test.

**Test estimation** forecasts the time, effort and cost needed for testing.

Estimation may use

- **metrics-based estimation**
- **extrapolation**
- **expert-based estimation**
- **Wide Band Delphi**
- **three point estimation**

**Test deliverables and reporting strategy** define what documents and outputs are produced and how results are communicated.

Common deliverables include

- test plan
- test cases
- test execution reports
- test progress reports
- test summary report
- test closure report
- traceability matrix
- defect reports

**Test governance and communication** define how testing is coordinated, how decisions are made and how stakeholders stay informed.

Key things to remember from Level 4

- Test strategy provides high-level testing direction
- Test plan applies the strategy to a specific context
- Risk management helps testing focus on what matters most
- Risk-based testing prioritizes high-risk areas
- Prioritization decides importance, while dependencies affect execution order
- Estimation helps plan time, effort and resources
- Deliverables and reports make testing visible and traceable
- Governance keeps testing aligned, controlled and communicated
