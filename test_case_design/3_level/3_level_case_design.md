# Content of test case design level 3

- [Equivalence Partitioning](#equivalence-partitioning)
- [Boundary Value Analysis](#boundary-value-analysis)
- [Decision Table Testing](#decision-table-testing)
- [State Transition Testing](#state-transition-testing)
- [Use Case Testing](#use-case-testing)

In **Test Case Design Level 2**, testing relied on experience-based and heuristic approaches. Techniques such as Error Guessing, Exploratory Testing, and Checklist-Based Testing focused on identifying defects using intuition, prior knowledge, and general testing practices.

These approaches are valuable for discovering unexpected issues, especially when requirements are incomplete or unclear. However, they do not provide a consistent or systematic way to design test cases.

As systems grow in complexity, relying only on intuition makes it difficult to ensure complete and reliable coverage.

At this level, the focus shifts from *experience-driven testing* to *structured test design*.

Instead of selecting inputs based on guesswork, test cases are now derived using defined techniques. These techniques provide clear rules for identifying relevant inputs and help ensure that testing is both efficient and meaningful.

The goal is not only to reduce the number of test cases, but to ensure that each test case represents important behavior within the system.

These techniques follow a **black box approach**, where testing is based only on inputs and observed outputs. The internal implementation is not considered. The system is evaluated based on how it behaves, not how it is built.

This approach is widely used when the internal logic is not visible or not relevant. For example, it is commonly applied when testing **user interfaces**, where interactions happen through forms and user input, and when testing **APIs**, where requests and responses define system behavior.

It is also essential in **system level testing** and **integration testing**, where the focus is on how components interact and how the system behaves as a whole.

In all of these cases, testing is performed by analyzing inputs and outputs without relying on internal code or structure.

This introduces a more systematic way of designing test cases, where each test is derived from a clear rule rather than intuition.

**Choosing the right technique**, each technique in this level addresses a different testing challenge. Use Equivalence Partitioning when inputs can be grouped by rules or ranges. Use Boundary Value Analysis when defects are likely at the edges of those ranges. Use Decision Table Testing when multiple conditions interact to produce outcomes. Use State Transition Testing when system behavior depends on sequences and history. Use Use Case Testing when validating complete user workflows. In practice, these techniques are often combined,and structured design is enhanced by the **experience-based approaches from Level 2**.

We start with **Equivalence Partitioning**, which focuses on grouping inputs that are expected to behave in the same way.

## Equivalence Partitioning

**Equivalence Partitioning** is a *black-box testing technique* that focuses on reducing the number of test cases while still maintaining effective coverage.

In many systems, inputs are not processed individually but are handled based on defined rules or ranges. When inputs follow the same rule, the system is expected to treat them in the same way. Testing each individual value in such cases does not provide additional benefit and quickly becomes inefficient.

To address this, inputs are grouped into sets where all values are expected to behave similarly. These sets are called **equivalence classes**.

**Partitioning** is the process of dividing input data into these equivalence classes. Each class represents a group of inputs that the system is expected to treat in the same way, which means a **single test case can represent the entire group**.

Each equivalence class represents inputs that share the same expected outcome. These include **valid inputs**, which should be accepted, and **invalid inputs**, which should be rejected.

When designing tests, the goal is to ensure that **each identified class is covered**. This means selecting at least one representative value from every class so that both valid and invalid behavior is exercised.

For example, consider a system that accepts age between `13` and `100`.

Instead of testing many individual values, the input can be divided into classes based on expected behavior. One class represents values below the allowed range, another represents values within the valid range, and another represents values above the allowed range.

| Test Case ID | Equivalence Class      | Test Input | Expected Outcome              | PASS/FAIL |
|--------------|------------------------|------------|-------------------------------|-----------|
| TCID-001     | Age less than `13`     | `10`       | Registration rejected         |           |
| TCID-002     | Age between `13–100`   | `30`       | Registration accepted         |           |
| TCID-003     | Age greater than `100` | `110`      | Registration rejected         |           |

This reduces `88` possible inputs to `3` test cases while maintaining the same coverage of system behavior.

The same idea applies when validating text input with multiple independent rules. For example, a username may be required to follow rules related to length and format. Each rule is partitioned separately.

**Length partitions**.

| Test Case ID | Equivalence Class Description | Valid/Invalid | Expected Outcome  | PASS/FAIL |
| ------------ | ----------------------------- | ------------- | ----------------- | --------- |
| TCID-001     | Length between `5–10`         | Valid         | Username accepted |           |
| TCID-002     | Length less than `5`          | Invalid       | Username rejected |           |
| TCID-003     | Length greater than `10`      | Invalid       | Username rejected |           |

**Format partitions**.

| Test Case ID | Equivalence Class Description | Valid/Invalid | Expected Outcome  | PASS/FAIL |
| ------------ | ----------------------------- | ------------- | ----------------- | --------- |
| TCID-004     | Starts with a letter          | Valid         | Username accepted |           |
| TCID-005     | Does not start with a letter  | Invalid       | Username rejected |           |
| TCID-006     | Non-string input              | Invalid       | Username rejected |           |

When multiple inputs are involved, the same principle still applies. Instead of testing all combinations, a **single valid combination** can represent correct system behavior, while invalid combinations test each rule independently.

| Test Case ID | Username  | Age  | Password   | Description                      | Valid/Invalid | Expected Outcome     | PASS/FAIL |
|--------------|-----------|------|------------|----------------------------------|---------------|----------------------|-----------|
| TCID-010     | `user123` | `25` | `Passw0rd` | All inputs satisfy requirements  | Valid         | Login successful     |           |

**Equivalence Partitioning** is most useful when input rules are clearly defined. It provides a structured way to design test cases by focusing on groups of inputs instead of individual values, allowing testing to remain efficient while still covering meaningful scenarios.

However, while grouping inputs reduces the number of test cases, it does not specifically address what happens at the **edges of those groups**. In many systems, defects are more likely to occur at the boundaries between valid and invalid inputs.

To handle this, testing focuses more closely on the **limits of input ranges**.

## Boundary Value Analysis

Boundary Value Analysis is a black-box testing technique that focuses on testing the edges of input ranges rather than values in the center.

In many systems, inputs are defined by limits. These limits create boundaries between valid and invalid values. While Equivalence Partitioning groups inputs based on similar behavior, it does not specifically verify how the system behaves at these boundaries.

In practice, defects often occur at these edges. Errors such as off-by-one mistakes or incorrect comparisons are more likely to appear where input values change from valid to invalid.

Because of this, testing focuses on values that are at, just below, and just above these limits.

Boundary Value Analysis applies to inputs that have an ordered structure, such as numbers or date ranges. These inputs form partitions where minimum and maximum values define the boundaries.

Instead of selecting values from within the range, testing is centered around these boundary points and the values immediately surrounding them. This allows both valid and invalid edges of the input domain to be verified.

Two common approaches are used when applying Boundary Value Analysis.

In a simpler approach, testing focuses on the boundary points themselves. This verifies that the system correctly handles the minimum and maximum allowed values.

![2BVA](./assets/images/2BVA.png)

In this approach, only the exact boundary values are tested to confirm they are accepted.

For example, consider a file upload system that allows files between 1MB and 10MB.

The boundaries are defined by the minimum value of 1MB and the maximum value of 10MB. Testing focuses on these limits and the values immediately around them to ensure the system correctly handles valid inputs at the edges.

| Test Case ID | Boundary Type             | Value  | Valid/Invalid | PASS/FAIL |
| ------------ | ------------------------- | ------ | ------------- | --------- |
| TC001        | Lower Boundary            | 1MB    | Valid         |           |
| TC002        | Upper Boundary            | 10MB   | Valid         |           |
| TC003        | Just Above Lower Boundary | 1.01MB | Valid         |           |
| TC004        | Just Below Upper Boundary | 9.99MB | Valid         |           |

This confirms that the system accepts the boundary values, but it does not verify behavior outside these limits. To cover invalid boundaries, additional test cases are needed.

| Test Case ID | Boundary Type             | Value   | Valid/Invalid | Expected Outcome | PASS/FAIL |
| ------------ | ------------------------- | ------- | ------------- | ---------------- | --------- |
| TC005        | Just Below Lower Boundary | 0.99MB  | Invalid       | Upload rejected  |           |
| TC006        | Just Above Upper Boundary | 10.01MB | Invalid       | Upload rejected  |           |

In a more detailed approach, testing includes values just below, exactly at, and just above each boundary. This helps detect edge related defects more precisely and is especially useful for identifying off-by-one errors.

![3BVA](./assets/images/3BVA.png)

In this approach, testing is important when system behavior changes at boundary conditions and incorrect handling can affect business logic.

For example, consider an internal banking application where transaction processing depends on the amount.

```text
Transactions below 100 are rejected  
Transactions from 100 to 10,000 are processed normally  
Transactions above 10,000 require additional approval
```

The boundaries are defined by the minimum value of 100 and the maximum value of 10,000. Testing focuses on these limits and the values around them.

| Test Case ID | Boundary Type             | Value  | Expected Behavior                | PASS/FAIL |
|--------------|---------------------------|--------|----------------------------------|-----------|
| TC001        | Lower Boundary            | 100    | Accepted and processed           |           |
| TC002        | Upper Boundary            | 10000  | Accepted and processed           |           |
| TC003        | Just Below Lower Boundary | 99     | Rejected                         |           |
| TC004        | Just Above Lower Boundary | 101    | Accepted and processed           |           |
| TC005        | Just Below Upper Boundary | 9999   | Accepted and processed           |           |
| TC006        | Just Above Upper Boundary | 10001  | Accepted with approval required  |           |

This verifies that the system correctly handles both valid and invalid inputs and applies the correct business rules at the boundaries where behavior changes.

Boundary Value Analysis is often used together with Equivalence Partitioning. While Equivalence Partitioning reduces the number of test cases by grouping inputs, Boundary Value Analysis improves coverage by focusing on the most error-prone areas of those groups.

This allows testing to remain efficient while still validating critical edge conditions.

However, not all system behavior is defined by input ranges. In many cases, the outcome depends on combinations of different conditions rather than a single input value.

When multiple conditions influence the result, testing needs to consider how these combinations affect system behavior.

To handle this, a structured way of representing conditions and their outcomes is used.

## Decision Table Testing

Decision Table Testing is a black-box testing technique used to verify system behavior based on different combinations of input conditions and their corresponding outcomes.

In many systems, behavior is not determined by a single input value but by multiple conditions working together. When these conditions interact, the number of possible combinations increases, and it becomes difficult to ensure that all relevant scenarios are tested.

Instead of testing conditions individually, Decision Table Testing focuses on how combinations of conditions affect the final result.

To represent this clearly, a tabular structure is used where conditions and actions are mapped together. This structure is known as a decision table, and it provides a clear way to visualize how different inputs lead to specific outcomes.

Within this table, conditions represent the input variables that influence system behavior, while actions represent the resulting system responses. These are often expressed using a simple notation so that combinations can be easily understood.

Conditions are typically represented using Boolean values. A value of `T` indicates that a condition is satisfied, while `F` indicates that it is not.

In some cases, a condition does not influence the outcome for a specific combination. This is represented using a `–`, which means the value of that condition can be either true or false without affecting the result. It is used when the condition is irrelevant for that particular scenario.

There are also situations where a condition or action is not applicable at all. This is represented using `N/A`, which means that the condition or action does not belong to that scenario or cannot logically occur in that context.

Actions are represented in a similar simplified way. When an action is expected to occur for a given combination of conditions, it is marked with an `X`. When no mark is present, the action should not occur.

This notation makes it possible to describe complex logic in a structured and readable format, especially when multiple conditions interact.

Each row in the table represents a unique combination of conditions and becomes a separate test case. This ensures that all meaningful combinations are considered during testing.

For example, consider a loan approval system where the result depends on multiple factors such as credit score, income level, employment status, and loan amount.

Each combination of these conditions produces a different outcome.

| Test Case ID | Credit Score | Income Level | Employment Status | Loan Amount | Expected Result |
|--------------|--------------|--------------|-------------------|-------------|-----------------|
| TC001        | High         | High         | Employed          | Low         | Loan Approved   |
| TC002        | Low          | High         | Employed          | Low         | Loan Denied     |
| TC003        | High         | Low          | Employed          | High        | Loan Denied     |
| TC004        | High         | High         | Unemployed        | Low         | Loan Denied     |
| TC005        | High         | High         | Employed          | High        | Loan Approved   |
| TC006        | Low          | Low          | Unemployed        | High        | Loan Denied     |

Decision Table Testing is especially useful when system behavior depends on multiple conditions. It ensures that combinations are not missed and provides a clear representation of business rules.

At the same time, as the number of conditions increases, For example, 5 Boolean conditions produce 32 possible combinations. Testing all of them may not be practical. In such cases, techniques such as **pairwise testing** can be used to reduce the number of combinations while still covering the most important interactions between conditions. Pairwise testing ensures that every pair of conditions appears in at least one test case, significantly reducing the total number of tests needed.

Because of this, it is important to focus on meaningful and relevant combinations when designing test cases.

However, not all system behavior is defined only by combinations of inputs. In many cases, the behavior of the system depends on a sequence of events and how the system changes over time.

When the same input produces different results depending on the current state of the system, testing needs to consider these state changes and the transitions between them.

To handle this, testing focuses on how the system moves from one state to another based on specific events.

## State Transition Testing

State Transition Testing is a black-box testing technique used to verify how a system behaves as it moves between different states based on a sequence of events.

In some systems, the same input does not always produce the same result. The outcome depends on the current state of the system and how it has changed over time. Because of this, testing cannot focus only on inputs or combinations of conditions.

Instead, testing must consider how the system transitions from one state to another.

A **state** represents the condition of the system at a specific point in time. For example, a system may be idle, actively processing, or in an error condition. The system begins in an initial state and moves to other states as events occur.

```text
Idle: Not actively heating or cooling.

Heating: Actively increasing temperature.

Cooling: Actively decreasing temperature.

Energy-Saving: Operating with reduced intensity.

Error: A fault condition, such as sensor failure.
```

**Transitions** between states are triggered by events. These events can be user actions, system responses, or external inputs.

```text
Set Heating, Set Cooling, or Set Energy-Saving

Temperature Reached - The desired temperature is reached.

Error Detected and Reset to handle faults.
```

When a transition occurs, the system may also perform specific **actions**.

```text
Start Heating or Start Cooling

Enter Energy - Saving Mode

Display Error or Clear Error
```

A transition represents the movement from one state to another as a result of an event. For example, a system may move from an idle state to a heating state when a heating command is triggered.

To visualize this behavior, state diagrams are used. These diagrams show all possible states and the transitions between them.

In many systems, transitions are not restricted to a fixed order. The system can move between states depending on different independent events.

```text
[Idle] --(Set Heating)--> [Heating]
[Idle] --(Set Cooling)--> [Cooling]
[Idle] --(Set Energy-Saving)--> [Energy-Saving]

[Heating] --(Temperature Reached)--> [Idle]
[Heating] --(Error Detected)--> [Error]

[Cooling] --(Temperature Reached)--> [Idle]
[Cooling] --(Error Detected)--> [Error]

[Energy-Saving] --(Set Heating)--> [Heating]
[Energy-Saving] --(Set Cooling)--> [Cooling]
[Energy-Saving] --(Error Detected)--> [Error]

[Error] --(Reset)--> [Idle]
```

In other cases, the system follows a strict sequence where transitions must happen in a specific order. This is common in workflows where each step depends on the previous one.

```text
[Idle] --(Set Heating)--> [Heating]
[Heating] --(Temperature Reached)--> [Idle]
[Idle] --(Set Cooling)--> [Cooling]
[Cooling] --(Temperature Reached)--> [Idle]
```

To design test cases, this behavior can also be represented in a tabular form. A state table shows the current state, the event, the next state, and the action that should occur.

| Test Case ID | Current State | Event               | Next State | Action         |
|--------------|---------------|---------------------|------------|----------------|
| TC001        | Idle          | Set Heating         | Heating    | Start Heating  |
| TC002        | Heating       | Temperature Reached | Idle       | Stop Heating   |
| TC003        | Cooling       | Error Detected      | Error      | Display Error  |
| TC004        | Error         | Reset               | Idle       | Clear Error    |

Testing focuses on verifying that all states are reachable and that transitions behave correctly.

One important aspect is ensuring that valid transitions produce the correct result. It is also important to verify that invalid transitions are handled properly. For example, moving directly from an idle state to an error state without a triggering event should not be allowed. When an invalid transition is attempted, the system should either ignore the event, remain in the current state or display an appropriate error message.

| Test Case ID | Current State | Event          | Expected Behavior             | PASS/FAIL |
| ------------ | ------------- | -------------- | ----------------------------- | --------- |
| TC005        | Idle          | Error Detected | No transition; remain in Idle |           |
| TC006        | Error         | Set Heating    | No transition; display error  |           |

Coverage in this type of testing can focus on visiting all states, executing all valid transitions, and checking how the system handles invalid transitions.

State Transition Testing is especially useful for systems where behavior depends on sequences of actions or where the system changes over time. This includes workflows, interactive systems, and systems that react to external events.

While this technique focuses on how the system moves between internal states, testing can also be approached from the user's perspective by analyzing how users interact with the system to achieve specific goals.

This leads to **Use Case Testing**, which focuses on validating end-to-end user scenarios.

## Use Case Testing

**Use Case Testing** is a black-box testing technique that focuses on validating the system based on real user interactions and goals.

Instead of analyzing individual inputs or internal system states, this approach looks at how a user interacts with the system to complete a specific task. Each interaction is described as a **use case**, which represents a sequence of steps performed to achieve a meaningful outcome.

A **use case** typically describes how a user starts an interaction, what actions are performed, and what result is expected at the end. It reflects real-world usage and helps ensure that the system behaves correctly from the user’s perspective.

For example, a use case for an online application might describe how a user logs in, navigates through the system, performs an action, and logs out. The focus is not on individual inputs, but on the entire flow of interaction.

To understand how this works, consider a simple example of a login process.

**Main Success Scenario**.

```text
Use Case: User Login

Precondition: User has a registered account

1. User opens the application
2. User enters valid credentials
3. User submits the form
4. System validates the credentials
5. User is redirected to the dashboard

Postcondition: User session is active
```

**Alternative Flow - Invalid Credentials**.

```text
1. User opens the application
2. User enters invalid credentials
3. User submits the form
4. System validates the credentials
5. System displays an error message
6. User remains on the login page

Postcondition: User is not authenticated
```

**Alternative Flow - Account Locked**.

```text
1. User opens the application
2. User enters valid credentials after multiple failed attempts
3. User submits the form
4. System detects account is locked
5. System displays a lockout message with contact support option

Postcondition: User is not authenticated; account remains locked
```

In this scenario, testing verifies that the entire sequence works correctly from start to finish. If any step fails, the use case is considered unsuccessful. Each alternative flow represents a separate test case that must be executed to ensure complete coverage.

Use case testing is especially useful for validating end-to-end workflows, where multiple components and interactions are involved. It ensures that the system supports real user behavior and meets business requirements.

While other techniques focus on inputs, conditions, or internal logic, use case testing focuses on complete user journeys. This makes it valuable for identifying issues that may not appear when testing isolated parts of the system.

Because it reflects real usage, use case testing is often used in system testing and acceptance testing, where the goal is to confirm that the system works as expected in real-world scenarios.
