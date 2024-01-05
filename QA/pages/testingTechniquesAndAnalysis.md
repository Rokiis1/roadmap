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

### Tasks: Equivalence Partitioning

- [Tasks: Equivalence Partitioning](../tasks/testingTechniquesandAnalysis/equivalencePartitioning.md)

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

### Tasks: Boundary Value Analysis

- [Tasks: Boundary Value Analysis](./tasks/testingTechniquesandAnalysis/boundaryValueAnalysis.md)

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

## Experience-based Test Techniques

- [Exploratory Testing](#exploratory-testing)

### Exploratory Testing

### Tasks: Exploratory Testing

- [Tasks: Exploratory Testing](./tasks/testingTechniquesandAnalysis/equivalencePartitioning.md)

## Collaboration-based Test Approaches

- [Collaborative User Story Writing](#collaborative-user-story-writing)
- [Acceptance Criteria](#acceptance-criteria)

### Collaborative User Story Writing

### Acceptance Criteria