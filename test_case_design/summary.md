# Content of Table: Summary

- [Summary test case design level 1](#summary-test-case-design-level-1)
- [Summary test case design level 2](#summary-test-case-design-level-2)
- [Summary test case design level 3](#summary-test-case-design-level-3)
- [Summary test case design level 4](#summary-test-case-design-level-4)

## Summary test case design level 1

Level 1 introduces the **foundation of test case design**.

The focus is on understanding how tests are created, organized and executed before applying advanced techniques.

A **test basis** is the source of information used to design tests.

The test basis may include

- requirements
- user stories
- use cases
- design documents
- API contracts
- business rules
- user manuals
- compliance rules

A **test scenario** is a high-level description of what needs to be tested.

Test scenarios describe system behavior without detailed steps or specific data.

Scenarios can be written using traditional wording such as

- **Verify that**
- **Ensure that**
- **Check that**
- **Test that**

Scenarios can also be written using **BDD** format.

BDD uses

- **Given** for the initial state
- **When** for the action
- **Then** for the expected result

A **test case** is a detailed validation derived from a scenario.

A typical test case includes

- **Test Case ID**
- **Description**
- **Preconditions**
- **Test Data**
- **Test Steps**
- **Expected Result**
- **Postconditions**

**Test data** defines the values used during testing.

Test data may be

- **valid**
- **invalid**
- **static**
- **dynamic**
- **synthetic**
- **masked**
- **anonymized**

**Test execution** is the process of running test cases and comparing actual results with expected results.

Execution statuses include

- `Pass`
- `Fail`
- `Blocked`
- `Not Run`

Key things to remember from Level 1

- Test case design starts from a reliable test basis
- Scenarios describe what should be validated
- Test cases turn scenarios into executable validation
- Test data is required to make test cases meaningful
- Test execution records what happened during testing
- Good test cases should be clear, repeatable and independent

## Summary test case design level 2

Level 2 focuses on **experience-based testing techniques**.

These techniques rely on the tester’s knowledge, intuition and experience.

They are useful when requirements are incomplete, unclear or changing.

Experience-based techniques are not a replacement for structured test design, but they complement it.

**Error Guessing** is used when testers predict likely defects based on experience.

Common error guessing ideas include

- empty inputs
- invalid formats
- boundary values
- special characters
- data type mismatches
- timeout scenarios
- concurrent access
- resource exhaustion

A **fault attack** is a more structured form of error guessing.

Fault attacks use known defect patterns to target common failure areas.

**Exploratory Testing** combines test design and execution at the same time.

The tester learns about the system while testing and adapts based on what is discovered.

Exploratory testing is often guided by a **charter**.

A charter defines

- mission
- areas to test
- risks to focus on
- test data needed
- session duration
- tester notes

Exploratory testing is usually performed in **time-boxed sessions**, often between `60–120 minutes`.

**Checklist-Based Testing** uses a predefined list of items to guide testing.

It provides structure without requiring detailed test cases.

Checklists are useful for repeated checks, usability reviews, compatibility checks and smoke-style verification.

**Ad-Hoc Testing** is the least structured approach.

It is performed without predefined documentation, checklists or planning.

Ad-hoc testing is useful for quick defect discovery but is difficult to repeat and audit.

Key things to remember from Level 2

- Experience-based testing depends on tester skill and knowledge
- Error guessing targets likely defect areas
- Fault attacks use known defect patterns
- Exploratory testing combines learning, design and execution
- Charters give exploratory testing direction
- Checklist-based testing adds lightweight structure
- Ad-hoc testing is fast but has low repeatability
- These techniques should support structured testing, not replace it

## Summary test case design level 3

Level 3 focuses on **black-box test design techniques**.

These techniques design test cases based on inputs, outputs and expected behavior.

The internal implementation is not considered.

The system is treated as a **black box**.

Black-box techniques are useful for

- user interface testing
- API testing
- system testing
- integration scenarios
- acceptance testing

**Equivalence Partitioning** groups inputs that are expected to behave in the same way.

Each group is called an **equivalence class**.

Equivalence classes may be

- **valid**
- **invalid**

The goal is to select representative values from each class instead of testing every possible value.

**Boundary Value Analysis** focuses on values at the edges of input ranges.

Defects often happen near boundaries.

Boundary testing usually includes values

- just below the boundary
- on the boundary
- just above the boundary

Boundary Value Analysis is often used together with Equivalence Partitioning.

**Decision Table Testing** is used when behavior depends on combinations of conditions.

A decision table maps conditions to actions.

Common notation includes

- `T` for true
- `F` for false
- `–` when the condition does not affect the outcome
- `N/A` when the condition or action is not applicable
- `X` when an action should occur

Each meaningful row in a decision table can become a test case.

**State Transition Testing** is used when system behavior depends on current state and previous events.

Important concepts include

- **state**
- **event**
- **transition**
- **action**
- **valid transition**
- **invalid transition**

State transition testing is useful for workflows, interactive systems and systems that change over time.

**Use Case Testing** validates complete user workflows.

It focuses on real user goals and end-to-end behavior.

Use cases may include

- main success scenario
- alternative flows
- preconditions
- postconditions

Key things to remember from Level 3

- Black-box techniques derive tests from expected behavior
- Equivalence Partitioning reduces test cases by grouping similar inputs
- Boundary Value Analysis focuses on edge values
- Decision Table Testing handles combinations of conditions
- State Transition Testing handles state-dependent behavior
- Use Case Testing validates complete user workflows
- These techniques can be combined for stronger coverage

## Summary test case design level 4

Level 4 focuses on **white-box test design techniques**.

White-box testing uses knowledge of the internal code structure.

The focus shifts from external behavior to internal implementation.

White-box testing analyzes

- statements
- decisions
- branches
- paths
- control flow

**Statement Testing** focuses on executing every statement in the code at least once.

Statement coverage is calculated as

`Statement Coverage = (Executed Statements / Total Statements) * 100`

Statement testing answers the question of whether the code was executed.

However, `100%` statement coverage does not guarantee that all decision outcomes were tested.

**Branch Testing** focuses on executing every decision outcome at least once.

Branch coverage is calculated as

`Branch Coverage = (Executed Branches / Total Branches) * 100`

Branch testing answers whether all decision outcomes were evaluated.

It is stronger than statement testing because full branch coverage usually implies statement coverage, assuming all statements are reachable.

However, branch testing does not always test all combinations of conditions.

**Path Testing** focuses on executing complete paths through the code from start to end.

Path coverage is calculated as

`Path Coverage = (Executed Paths / Total Paths) * 100`

Path testing answers whether complete execution flows were tested.

It is more thorough than statement and branch testing, but full path coverage can become impractical because of **path explosion**.

When loops exist, full path coverage may be impossible, so testing focuses on important loop cases such as

- zero iterations
- one iteration
- many iterations

The main difference between the techniques is coverage depth.

Statement testing checks whether code lines ran.

Branch testing checks whether decision outcomes ran.

Path testing checks whether full execution flows ran.

Key things to remember from Level 4

- White-box testing is based on internal code structure
- Statement testing verifies executed code lines
- Branch testing verifies decision outcomes
- Path testing verifies full execution routes
- Branch testing is stronger than statement testing
- Path testing is stronger but harder to achieve fully
- Coverage tools help identify untested areas
- White-box testing should be combined with black-box testing for better overall coverage
