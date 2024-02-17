# Testing Techniques and analysis

- [Black-Box Test Techniques](#black-box-test-techniques)
- [White-Box Test Techniques](#white-box-test-techniques)
- [Experience-based Test Techniques](#experience-based-test-techniques)
- [Collaboration-based Test Approaches](#collaboration-based-test-approaches)

## Black-Box Test Techniques

- [Equivalence Partitioning](#equivalence-partitioning)
- [Boundary Value Analysis](#boundary-value-analysis)
- [Decision Table Testing](#decision-table-testing)
- [State Transition Testing](#state-transition-testing)

**Explanation:**

Black-box testing is a software testing technique that focuses on assessing the functionality of a software application without examining its internal code or structure. Testers, in this approach, treat the software as a "black box," and their main concern is to verify if the inputs produce the expected outputs without knowledge of the internal workings of the system. Various test techniques are employed to ensure thorough testing of different aspects of the software.

**Key Concepts:**

1. **No Knowledge of Internal Code:**
   - Black-box testers do not have access to the internal code, architecture, or design of the software under test. They focus solely on inputs and outputs.

2. **Functional Testing:**
   - Black-box testing primarily involves functional testing, where the software's functions are tested by providing inputs and examining the corresponding outputs.

3. **Test Cases Based on Requirements:**
   - Test cases are designed based on the software requirements and specifications. The goal is to verify that the software meets its specified functionality.

4. **Test Design Techniques:**
   - Various test design techniques are used to create effective test cases. Examples include equivalence partitioning, boundary value analysis, state transition testing, and decision table testing.

5. **Equivalence Partitioning:**
   - Inputs are divided into groups or partitions, and test cases are designed to represent each partition. This helps ensure that the software behaves consistently across different input ranges.

6. **Boundary Value Analysis:**
   - Test cases are designed to evaluate how the software behaves at the boundaries of input ranges. This is important as defects often occur at the edges of input domains.

7. **State Transition Testing:**
   - Applicable for systems with distinct states. Test cases are designed to verify the transitions between different states and the correct behavior in each state.

8. **Decision Table Testing:**
   - A systematic method for testing combinations of inputs by creating a table that represents all possible combinations of input conditions and corresponding actions.

### Equivalence Partitioning

**Explanation:**

Equivalence Partitioning is a black-box testing technique that divides the input domain of a software application into classes of equivalent inputs. The goal is to reduce the number of test cases while ensuring that the selected test cases effectively represent different scenarios. The underlying concept is that if a system behaves correctly for one input within an equivalence class, it should behave correctly for all inputs within that class.

**Key Concepts:**

1. **Equivalence Class:**
   - An equivalence class is a set of input values that are treated the same way by the system. Testers identify these classes to reduce the number of test cases.

2. **Partitioning:**
   - The input domain is divided into different partitions or classes. Each partition represents a set of inputs that should exhibit similar behavior.

3. **Representative Test Cases:**
   - Test cases are selected from each equivalence class to represent the entire class. If a test case from a specific class works correctly, it is assumed that other values in the same class will also work.

4. **Invalid Equivalence Classes:**
   - In addition to valid equivalence classes (inputs that should be accepted), testers also identify invalid equivalence classes (inputs that should be rejected or produce errors).

7. **Efficiency:**
   - Equivalence partitioning is an efficient testing technique as it helps reduce the number of test cases needed to cover a broad range of scenarios.

8. **Applicability:**
   - This technique is particularly applicable when there is a large set of possible input values, and testing all combinations is not feasible.

9. **Requirements-Based:**
   - Equivalence partitioning is closely tied to the software requirements. The identified equivalence classes align with the expected behavior outlined in the requirements.

10. **Error Detection:**
    - The technique is effective at detecting errors related to the handling of different types of inputs and their respective classes.

**Example:**

- [Example: Equivalence Partitioning](../assets/examples/testingTechniquesAndAnalysis/equivalencePartitioning.md)

### Boundary Value Analysis

**Explanation:**

Boundary Value Analysis (BVA) is a black-box testing technique that focuses on testing values at the boundaries of input domains. The objective is to identify errors that may occur at the extremes of the input range, where the behavior of the system is likely to change. By testing values at these boundaries, testers aim to ensure the robustness and reliability of the software, as defects often manifest near the limits of acceptable input values.

**Key Concepts:**

1. **Boundary Values:**
   - Test cases are designed to evaluate the behavior of the system at the boundaries of valid input ranges. These boundaries include the minimum, maximum, and points immediately before and after these limits.

2. **Input Domain:**
   - BVA is applied to the input domain of a function or feature. This could include numerical ranges, date ranges, character lengths, and other parameter constraints.

3. **Three-Partition Rule:**
   - The input domain is divided into three partitions: values below the lower bound, values within the valid range, and values above the upper bound. Test cases are then designed for each of these partitions.

7. **Focus on Invalid Inputs:**
   - While BVA primarily focuses on valid input boundaries, it also considers values immediately outside the valid range to test the system's response to invalid inputs.

**Example:**

- [Example: Boundary Value Analysis](./assets/examples/testingTechniquesAndAnalysis/boundryValueAnalysis.md)

### Decision Table Testing

**Explanation:**

Decision Table Testing is a black-box testing technique used to design test cases that cover different combinations of input conditions and their corresponding actions or outcomes. It is particularly useful when a system's behavior is influenced by multiple conditions or rules, and the interactions between these conditions need to be thoroughly tested. Decision tables provide a structured way to represent complex business rules and ensure comprehensive test coverage.

**Key Concepts:**

1. **Decision Table Components:**
   - **Conditions (Inputs):** Represent the various factors or input conditions that influence the system's behavior.
   - **Actions (Outputs):** Indicate the expected outcomes or actions based on combinations of input conditions.

2. **Rules:**
   - Each row in the decision table represents a unique combination of input conditions and their corresponding outcomes. These combinations are often referred to as rules.

3. **Columns:**
   - The decision table consists of columns for each condition and action. It provides a visual representation of the relationships between conditions and actions.

4. **Condition States:**
   - Conditions can have different states, typically denoted as "true," "false," or "don't care" (indicating that the condition's state does not matter for a specific rule).

7. **Boundary Conditions:**
   - Decision tables can include boundary conditions to test the system's behavior at the edges of acceptable input ranges.

**Example:**

- [Example: Decision Table Testing](./assets/examples/testingTechniquesAndAnalysis/decisionTableTesting.md)

### State Transition Testing

**Explanation:**

State Transition Testing is a black-box testing technique that focuses on testing the behavior of a system as it transitions between different states. This technique is particularly applicable to systems with distinct states, where the behavior and functionality can change based on specific events or conditions. The primary goal of state transition testing is to ensure that the system transitions correctly between states and behaves as expected in each state.

**Key Concepts:**

1. **States:**
   - A state represents a condition or situation in which a system exists at a specific point in time. The system's behavior and functionality may vary depending on its current state.

2. **Events:**
   - Events trigger state transitions. An event is an occurrence that causes the system to move from one state to another. Events can be internal or external.

3. **Transitions:**
   - Transitions describe the movement of the system from one state to another in response to an event. The transitions are governed by specific rules or conditions.

4. **State Diagram:**
   - A state transition diagram is often used to visually represent the different states, events, and transitions within a system. It provides a clear and concise view of the system's behavior.

5. **Actions:**
   - Actions are the activities or operations that the system performs when it transitions from one state to another. Each transition may be associated with specific actions.

6. **Conditions:**
   - Conditions define the criteria that must be met for a particular state transition to occur. These conditions may be based on the current state, event, or external factors.

7. **Test Cases:**
   - Test cases for state transition testing are designed to cover different combinations of events and current states, ensuring that the system transitions correctly and performs the expected actions.

**Example:**

- [Example: State Transition Testing](./assets/examples/testingTechniquesAndAnalysis/stateTransitionTesting.md)

## White-Box Test Techniques

Certainly! Let's consolidate the key concepts of white-box testing, as explained earlier, and the information from the ISTQB syllabus in a unified template:

### White-Box Testing

**Explanation:**

White-box testing, also known as clear-box or glass-box testing, is a software testing technique that involves examining the internal structure, code, and logic of a software application. Testers have knowledge of the internal workings of the system being tested, and the tests are designed based on this understanding.

**Key Concepts:**

1. **Code Coverage:**

   - White-box testing aims for high code coverage, measured through metrics like statement coverage and branch coverage.
   - Code coverage provides insights into the percentage of code exercised by test cases.

2. **Test Techniques:**

   - Popular white-box test techniques include statement testing and branch testing.
   - Statement testing involves designing test cases to exercise executable statements, while branch testing focuses on exercising branches in the code.

3. **Branch Coverage Subsumes Statement Coverage:**

   - In real-life testing scenarios, achieving 100% branch coverage to ensure 100% statement coverage, and vice versa, is often impractical and, in many cases, not possible.

4. **Value of White-Box Testing:**

   - Strengths include considering the entire software implementation during testing, facilitating defect detection even in the absence of clear specifications.
   - Weaknesses include potential oversight of defects resulting from omitted requirements.

5. **Use Cases and Techniques:**

   - White-box techniques are applicable in static testing, such as during code reviews and dry runs.
   - Useful for reviewing code not ready for execution, pseudocode, and high-level logic modeled with a control flow graph.

6. **Coverage Measurement:**

   - Code coverage measurements, including statement and branch coverage, provide an objective assessment of the thoroughness of testing.

7. **Objective Measurement:**

   - White-box coverage measures provide an objective benchmark, enabling the generation of additional tests to increase coverage and confidence in the code.

## Experience-based Test Techniques

- [Exploratory Testing](#exploratory-testing)

### Exploratory Testing

**Explanation:**

Exploratory testing is a type of testing where test cases are not created in advance but testers check the system on the fly. They may note down ideas about what to test before test execution. The focus of exploratory testing is more on testing as a "thinking" activity.

**Key Concepts:**

- Session-based testing

- Charter

- Time-boxing

- Test oracles

- Heuristics

## Collaboration-based Test Approaches

- [Acceptance Criteria](#acceptance-criteria)
- [Collaborative User Story Writing](#collaborative-user-story-writing)

In an Agile development environment, Business Analysts (BAs) are often responsible for writing User Stories and Acceptance Criteria. They work closely with the Product Owner, stakeholders, and the development team to understand the business needs and translate them into User Stories.

The Acceptance Criteria, which are part of the User Story, are the conditions that must be met for the User Story to be considered complete. They provide a clear understanding to the team about the expected outcome of a User Story.

### Acceptance Criteria

**Explanation:**

Acceptance criteria are conditions that a software product must meet to be accepted by a user, a customer, or other system. They are unique for each user story and define the functionality to be developed and tested.

**Key Concepts:**

User story, Definition of Done, Scenarios.

**Syntax:**

Acceptance criteria are typically written in a simple language in the format: "Given [initial context], when [event occurs], then [ensure some outcomes]".

```plaintext
- Given I am on the product page,
  When I click on 'Add to Cart',
  Then the product should be added to my shopping cart.

- Given I have a product in my shopping cart,
  When I click on 'Checkout' and complete the payment process,
  Then I should receive an order confirmation.
```

### Collaborative User Story Writing

**Explanation:**

Collaborative user story writing involves the team working together to write user stories. This approach encourages active participation and shared understanding of user stories.

**Key Concepts:**

- User roles, User goals, Acceptance criteria

- Prioritization

- INVEST principle (Independent, Negotiable, Valuable, Estimable, Small, Testable)

- SMART principle (Specific, Measurable, Achievable, Relevant, Time-bound).

- Definition of Done (DoD)

**Syntax:**

A user story is typically written in the format: "As a [type of user], I want [an action] so that [a benefit/a value]".

**Example:**

*INVEST Principle:*

```plaintext
User Story: 

"As a Customer, I want to purchase a product so that I can own the product."

Acceptance Criteria:

I can add a product to the cart.
I can complete the payment process.
I receive an order confirmation after purchase.

INVEST Principle:

Independent: This story can be developed and tested separately from other stories.
Negotiable: The details of how the purchase process works can be adjusted based on team discussions.
Valuable: This story provides value to the customer by allowing them to purchase products.
Estimable: The time and effort required to implement this story can be estimated based on the acceptance criteria and team's prior experience.
Small: This story is small enough to be completed within one sprint.
Testable: The completion of this story can be verified by checking whether the acceptance criteria are met.
```

*SMART Principle:*

```plaintext

User Story:

"As a User, I want to reset my password so that I can regain access to my account."

Acceptance Criteria:

I can request a password reset from the login page.
I receive an email with a password reset link.
I can set a new password using the reset link.

SMART Principle:

Specific: The user story is specific about who the user is (a User), what they want to do (reset their password), and why they want to do it (to regain access to their account).

Measurable: The acceptance criteria provide measurable outcomes. We can check if a password reset can be requested, if an email with a reset link is received, and if a new password can be set using the reset link.

Achievable: The user story seems achievable based on the acceptance criteria. The team would need to have the necessary skills and resources to implement the features described in the user story.

Relevant: The user story is relevant as it directly contributes to the overall functionality of the system (allowing users to regain access to their accounts).

Time-bound: While the user story itself doesn't specify a time frame, it should be possible to complete within a single sprint. The actual time frame would be determined during sprint planning.
```

