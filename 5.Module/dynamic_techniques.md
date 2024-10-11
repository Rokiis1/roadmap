# Content of Table

- [Dynamic Techniques](#dynamic-techniques)
  - [Collaboration-based Test Approaches](#collaboration-based-test-approaches)
    - [User Acceptance Testing (UAT)](#user-acceptance-testing-uat)
    - [Collaborative User Story Writing](#collaborative-user-story-writing)
    - [Alpha and Beta Testing](#alpha-and-beta-testing)
  - [Black-box Testing Techniques](#black-box-testing-techniques)
    - [Equivalence Partitioning](#equivalence-partitioning)
    - [Boundary Value Analysis](#boundary-value-analysis)
    - [Decision Table Testing](#decision-table-testing)
    - [State Transition Testing](#state-transition-testing)
  - [Experience-based Techniques](#experience-based-techniques)
    - [Error Guessing](#error-guessing)
    - [Exploratory Testing](#exploratory-testing)
    - [Checklist-Based Testing](#checklist-based-testing)
    - [Smoke and Sanity Testing](#smoke-and-sanity-testing)
  - [Confirmation Testing](#confirmation-testing)
    - [Regression Testing](#regression-testing)

## Dynamic Techniques

**Explanation:**

Dynamic techniques are methods used in software development that involve the execution of the software. These techniques are used to validate the functional behavior of software, to ensure it is working as expected. They are often used in conjunction with static techniques, which are used without executing the software.

**Key Concepts:**

1. **Collaboration-based Test Approaches:** These approaches involve the team working together to write user stories, perform user acceptance testing, and conduct alpha and beta testing.

2. **Black-box Testing Techniques:** These techniques, such as equivalence partitioning, boundary value analysis, and decision table testing, focus on the functionality of the software without considering its internal structure.

3. **Experience-based Techniques:** These techniques, including error guessing, exploratory testing, and checklist-based testing, rely on the tester's experience and knowledge.

4. **White-box Testing Techniques:** These techniques, such as statement testing and coverage, decision testing and coverage, and path testing, focus on the internal structure of the software.

5. **Confirmation Testing:** This includes re-testing and regression testing to ensure
that defects have been corrected and that modifications have not introduced new issues.

## Collaboration-based Test Approaches

**Explanation:**

Collaboration-based test approaches involve the collective participation of various stakeholders in the testing process.

**Key Concepts:**

1. **User Acceptance Testing (UAT):** This is the final phase in the testing process before the software is released for use. The aim is to validate the software against business requirements.

2. **Collaborative User Story Writing:** This involves the team working together to write user stories, which are descriptions of a software feature from an end-user perspective.

3. **Alpha and Beta Testing:** Alpha testing is performed by internal staff before the software is released to external testers (beta testers).

4. **Operational acceptance testing:** This is performed to ensure that the system meets the requirements for operation and maintenance.

5. **Contractual and regulatory acceptance testing:** This is performed to ensure that the system meets the requirements specified in the contract and any applicable regulations.

### User Acceptance Testing (UAT)

**Explanation:**

User Acceptance Testing (UAT) is the final phase in the testing process before the software is released for use. The aim of UAT is to validate the software against business requirements. It is typically conducted by the end-users or clients of the software to ensure that the system meets their needs and is ready for use in real-world scenarios.

**Key Concepts:**

1. **Real-world Scenarios:** UAT involves testing the software under real-world scenarios to ensure it can handle tasks it was designed for.

2. **End-user Involvement:** The testing is typically conducted by the end-users or clients, not by the developers or testers.

3. **Business Requirements:** The focus of UAT is to validate that the software meets the business requirements and not just the technical specifications.

4. **Final Phase:** UAT is usually the last phase of testing, conducted after unit, integration, and system testing.

5. **Acceptance Criteria:** The software is tested against predefined acceptance criteria to determine if it is ready for delivery. These criteria are essential for ensuring the software meets the end users' needs and requirements. There are two common formats for writing acceptance criteria: the Given-When-Then (Behavior-Driven Development - BDD) format and the Checklist format.

  **Given-When-Then (BDD) Format Example:**

  1. Given some initial context (the state of the system),
  2. When an event occurs (an action is carried out),
  3. Then ensure some outcomes.

  ```text
  - Given I have a product in my shopping cart,
    When I click on 'Checkout' and complete the payment process,
    Then I should receive an order confirmation.
  ```

  **Checklist Format Example:**

  ```text
  -  Navigate from the homepage to the registration page.
  -  View a form on the registration page requesting name, email address, and password.
  ```

### Collaborative User Story Writing

**Explanation:**

Collaborative User Story Writing involves the team working together to write user stories, which are descriptions of a software feature from an end-user perspective.

**Key Concepts:**

1. **Collaboration:** The process involves all relevant stakeholders, including developers, testers, business analysts, and users.

2. **End-user Perspective:** User stories are written from the perspective of the end user, focusing on their needs and experiences.

3. **Acceptance Criteria:** Each user story includes acceptance criteria, which define the boundaries of a user story and are used to confirm when a story is completed and working as intended.

4. **Iteration Planning:** User stories are often used in agile development methodologies during iteration planning or sprint planning meetings.

5. **User Stories:** A User Story is written from the perspective of a user who wants to derive value from the product. It should focus on the user's desired outcomes and be embedded in the context where the user seeks value from the product.

6. **INVEST:** is an acronym to help teams write high-quality, specific user stories that are independent, negotiable, valuable, estimatable, small, and testable.

**Syntax:**

A user story is typically written in the format: **"As a [type of user], I want [an action] so that [benefit/a value]"**.

```text
WHO: As a [user type]
WHAT: I want [action to perform]
WHY: So that [the desired outcome]
```

- **Independent:** Each User Story should be self-contained and not depend on other stories.

- **Negotiable:** The details of the User Story can be discussed and negotiated with the team and the stakeholders.

- **Valuable:** The User Story delivers value to the user.

- **Estimable:** It should be possible to estimate the effort required to complete the User Story.

- **Small:** User Stories should be small enough to be completed within a single iteration. If you do not work in iterations, you might assume 2-4 weeks as the rule of thumb.

- **Testable:** There are clear criteria to determine if the story has been successfully implemented.

**Example:**

*User Story 1:*

```text

User Story:

"As a Online Shopper, I want to read reviews of a product before making the decision so that I can reduce the uncertainty."

Acceptance Criteria:

1. Review Display: The product page must display at least 5 reviews for each product to provide a range of opinions and insights.

2. Review Types: Initially, the system should support text reviews. Future iterations can discuss and potentially include ratings and video reviews based on team and stakeholder negotiations.

3. Filtering Capability: Users should have the option to filter reviews based on criteria such as date, rating, or helpfulness, to find the information most relevant to them.

INVEST criteria:

Independent: This story stands alone as it does not require other features to be implemented first.

Negotiable: The team could discuss what types of reviews are most helpful (text, ratings, video) and how they should be presented.

Valuable: The value is clear, it helps reduce purchase uncertainty for the shopper.

Estimable: The team needs enough detail to estimate the effort, such as the source of reviews and integration points.

Small: If too large (involving complex review), it might need to be broken down (start with text reviews only).

Testable: Acceptance criteria could include displaying at least 5 reviews per product and updating reviews in real-time.
```

*User Story 2:*

```text

User Story:

As a User,

I want to drag and drop tasks within a list

So that I can reorder them quicly and easily

Acceptance Criteria:

1. Functionality: Users must be able to drag any task within a list and drop it to a new position within the same list.

2. List Update: After dropping a task to a new position, the list must immediately reflect the new order without requiring a page refresh or any additional user action.

3. Accessibility: Ensure that the drag-and-drop functionality is accessible, allowing users who rely on keyboard navigation or screen readers to reorder tasks as well.

INVEST criteria:

Independent: This story is self-contained, assuming the basic task list functionality already exists.

Negotiable: Details like the visual feedback during drag-and-drop and how the list updates can be discussed.

Valuable: It directly addresses user efficiency in organizing tasks.

Estimable: The team should understand the current list implementation to estimate the effort for adding drag-and-drop.

Small: If implementing drag-and-drop is complex, consider initially supporting it for smaller lists.

Testable: Criteria might include the ability to reorder tasks within a list and have the new order persist across sessions.
```

### Alpha and Beta Testing

**Explanation:**

Alpha and Beta Testing are stages of software testing that are conducted to ensure the quality of the product before it is released to the end-users. Alpha testing is performed internally within the organization by a specialized testing team. Beta testing, on the other hand, is performed by a limited number of end-users who are not part of the organization.

**Key Concepts:**

1. **Alpha Testing:** This is the first phase of testing where the software is tested internally within the organization. It is typically performed by a specialized testing team.

2. **Beta Testing:** This is the second phase of testing where the software is released to a limited number of end-users to gather feedback and identify any potential issues that were not found during alpha testing.

3. **Feedback Loop:** Both alpha and beta testing provide valuable feedback that can be used to improve the quality of the software.

4. **Real-world Exposure:** Beta testing exposes the software to real-world scenarios, which can reveal issues that may not have been identified during alpha testing.

5. **Release Candidate:** The version of the software that is released for beta testing is often called a "release candidate" as it is close to the final version that will be released to the public.

## Black-box Testing Techniques

**Explanation:**

Black-box testing techniques focus on the functionality of the software without considering its internal structure. The tester is unaware of the internal workings of the system and tests the software based on the input and the output.

**Key Concepts:**

1. **Equivalence Partitioning:** This is a software testing technique that divides the input data of a software unit into partitions of equivalent data from which test cases can be derived.

2. **Boundary Value Analysis:** This is a method for designing test cases that focuses on the boundary or edge conditions of the software.

3. **Decision Table Testing:** This is a good way to deal with a combination of inputs, which produce different results.

4. **State Transition Testing:** This is used where some aspect of the system can be described in what is called a "finite state machine".

### Equivalence Partitioning

**Explanation:**

Equivalence Partitioning is a software testing technique that divides the input data of a software unit into partitions of equivalent data from which test cases can be derived.

**Key Concepts:**

1. **Partitioning:** In this context, partitioning refers to the division of a software unit's input data into different categories or partitions. Each partition should contain data that is equivalent in terms of the software unit's behavior.

2. **Equivalence Class:** An equivalence class represents a set of valid or invalid states for input conditions. An equivalence class is a subset of data that is representative of a larger class.

3. **Test Cases:** Test cases are derived from each partition or equivalence class. The fundamental idea is that if a test case uncovers a bug for one data point within the partition, it will likely uncover bugs for all other data points within the same partition.

4. **Boundary Value Analysis:** This is often used in conjunction with Equivalence Partitioning. It involves testing the boundaries of the equivalence classes.

**Example:**

**Feature to Test:** User Age Validation during Registration

The application requires that users be between 13 and 100 years old to register. Users outside this age range are not allowed to register.

We can divide the input data (age) into three equivalence classes:

1. Invalid inputs less than 13
2. Valid inputs between 13 and 100
3. Invalid inputs greater than 100

| Equivalence Class    | Test Input | Expected Outcome                       |
|----------------------|------------|----------------------------------------|
| Age less than 13     | 10         | Registration rejected, error message   |
| Age between 13 and 100 | 30       | Registration accepted                  |
| Age greater than 100 | 110        | Registration rejected, error message   |

### Boundary Value Analysis

**Explanation:**

Boundary Value Analysis (BVA) is a software testing technique used to identify errors at boundaries rather than finding those exist in the center of the input domain. It involves testing the extreme ends of the input domain, i.e., the smallest and largest values, including their just inside and just outside values.

**Key Concepts:**

1. **Boundary Values:** These are the input values which divide the input domain into partitions. They are the extreme ends of the input domain like smallest and largest values.

2. **Edge Values:** These are the values just inside and just outside of the boundary values. They are very important as they often cause errors.

3. **Valid and Invalid Partitions:** In BVA, the input domain is divided into valid and invalid partitions. The valid partition contains values that should be accepted by the system, while the invalid partition contains values that should be rejected.

4. **Testing:** The main idea behind BVA is to select input values from each partition and boundary values for testing. This helps in identifying errors at the boundaries that might have been missed out by other testing techniques.

**Example:**

**Feature to Test:** Withdrawal from a Bank Account

The application allows a user to withdraw an amount between $20 and $1000 from their bank account in a single transaction. Withdrawals outside this range are not allowed.

We can identify the boundary values as $19, $20, $1000, and $1001.

| Boundary Value Analysis | Test Input | Expected Outcome                       |
|-------------------------|------------|----------------------------------------|
| Just below lower limit  | $19        | Withdrawal rejected, error message     |
| At lower limit          | $20        | Withdrawal processed                   |
| At upper limit          | $1000      | Withdrawal processed                   |
| Just above upper limit  | $1001      | Withdrawal rejected, error message     |

### Decision Table Testing

**Explanation:**

Decision Table Testing is a software testing technique used in both functional and black box testing. This method is particularly helpful in designing test cases for complex business rules that involve various input combinations and have different outcomes.

**Key Concepts:**

1. **Decision Table:** It's a table that lists out all possible input combinations and their corresponding output results. Each row represents a unique combination of conditions that leads to a decision.

2. **Conditions and Actions:** Conditions are the inputs or system states that can vary, and actions are the system behavior or output based on those conditions.

3. **Rules:** Each rule in the decision table represents a combination of conditions that leads to one or more actions. Each row in the decision table typically represents a rule.

4. **Simplicity:** Decision tables simplify complex business logic by presenting it in a structured and understandable way. This makes it easier to identify missing or incorrect requirements.

5. **Comprehensive Coverage:** By considering all possible combinations of inputs, decision table testing ensures comprehensive test coverage.

**Example:**

**Feature to Test:** Discount Calculation in an E-commerce Application

The application provides discounts based on the type of user and the total purchase amount. The rules are as follows:

1. Regular users get a 5% discount on purchases over $500.
2. Premium users get a 10% discount on purchases over $500 and a 15% discount on purchases over $1000.

| Type of User | Purchase Amount > $500 | Purchase Amount > $1000 | Discount |
|--------------|------------------------|-------------------------|----------|
| Regular      | No                     | No                      | 0%       |
| Regular      | Yes                    | No                      | 5%       |
| Regular      | Yes                    | Yes                     | 5%       |
| Premium      | No                     | No                      | 0%       |
| Premium      | Yes                    | No                      | 10%      |
| Premium      | Yes                    | Yes                     | 15%      |

### State Transition Testing

**Explanation:**

State Transition Testing is a software testing technique used to test the behavior of an application under test (AUT) for different input conditions in a sequence. It is particularly useful for systems where the system's current state is dependent on a sequence of past events or inputs.

**Key Concepts:**

1. **State:** A distinct condition or mode of the system under different inputs or conditions.

2. **Transition:** The change from one state to another state of the system, usually triggered by events or conditions.

3. **State Diagram:** A graphical representation of all possible states, transitions, and events of the system.

4. **Initial and Final State:** The state in which the system starts is known as the initial state, and the state where it ends is known as the final state.

5. **Events:** An event is an occurrence that may trigger a state transition.

6. **State Table:** A tabular representation of all possible states, transitions, and events, similar to the state diagram but in a tabular form.

7. **Coverage:** The goal in state transition testing is to cover all possible states and transitions. This ensures that the system behaves correctly for all sequences of events.

**Example:**

**Feature to Test:** Online Music Player

1. When a user presses the 'Play' button, the player starts playing music.
2. When a user presses the 'Pause' button, the player pauses the music.
3. When a user presses the 'Stop' button, the player stops the music and resets to the beginning of the track.
4. When a user presses the 'Next' button, the player stops the current track and starts playing the next one.

**State Diagram:**

Initial State: Stopped

States:

1. Playing
2. Paused
3. Stopped

Transitions:

1. Press 'Play': Stopped -> Playing
2. Press 'Pause': Playing -> Paused
3. Press 'Play': Paused -> Playing
4. Press 'Stop': Playing -> Stopped
5. Press 'Stop': Paused -> Stopped
6. Press 'Next': Playing -> Playing (next track)
7. Press 'Next': Paused -> Playing (next track)

**State Table:**

| Current State | Input     | Next State |
|---------------|-----------|------------|
| Stopped       | Play      | Playing    |
| Playing       | Pause     | Paused     |
| Paused        | Play      | Playing    |
| Playing       | Stop      | Stopped    |
| Paused        | Stop      | Stopped    |
| Playing       | Next      | Playing    |
| Paused        | Next      | Playing    |

## Experience-based Techniques

**Explanation:**

Experience-based techniques in software testing are those that leverage the tester's knowledge, skills, and background to design and execute tests. They are less formal and structured than specification-based or structure-based techniques.

### Error Guessing

**Explanation:**

Error Guessing is a software testing technique where the tester applies their experience and intuition to guess the problematic areas of the application. This technique is based on the tester's ability to find bugs or defects based on their past experiences and knowledge.

### Exploratory Testing

**Explanation:**

Exploratory Testing is a type of software testing where test design and test execution happen simultaneously without explicitly planning the detailed test cases in advance. The tester actively controls the design of the tests as they are performed and uses information gained while testing to design new and better tests.

**Key Concepts:**

1. **Charters:** A charter is a mission or goal for the exploratory testing session. It provides direction and scope for the testing activities, including the target of the test, the duration of the test session, the type of testing or the test ideas to be explored, and the expected outcome or output.

    ![alt text](./images/charter.png)

2. **Time-boxed Sessions:** Exploratory testing is often conducted in time-boxed sessions, typically ranging from 60 to 120 minutes.

### Checklist-Based Testing

**Explanation:**

Checklist-Based Testing is a software testing technique where the tester uses a checklist as a guide during the testing process. The checklist contains a set of important aspects or features of the application that need to be tested. This method ensures that the tester does not miss out on testing critical functionalities of the application.

**Key Concepts:**

1. **Checklist Creation:** The checklist is created based on the requirements and specifications of the application. It includes all the important features and functionalities that need to be tested.

    ![alt text](./images/checklist.png)

2. **Guided Testing:** The checklist serves as a guide for the tester during the testing process. It helps to ensure that all necessary areas of the application are covered.

### Smoke and Sanity Testing

- **Smoke Testing:** This is a high-level type of testing done to ensure that the basic functions of a program work correctly. It is often done when a new build is released to test if the build is stable and it can be tested thoroughly later.

- **Sanity Testing:** This is a narrow regression testing that focuses on one or a few areas of functionality. Sanity testing is usually unscripted, helps to identify the dependent missing functionalities, and is used to determine if a section of the application is still working after a minor change.

- **Difference between Smoke and Sanity Testing:** Smoke testing is done to make sure software functionalities are working for a new build, while Sanity testing is done during the release phase to check for the main functionalities of the application without going deeper. Smoke testing is scripted or documented, whereas Sanity testing is usually unscripted.

## Confirmation Testing

**Explanation:**

Confirmation Testing, also known as re-testing, is a type of testing performed to confirm that a test case which previously failed has been corrected after the defects have been fixed. The purpose of confirmation testing is to verify that the original defect has been successfully removed; it is not to uncover new defects.

**Key Concepts:**

1. **Defect Fix Verification:** The main purpose of confirmation testing is to verify that the defects identified in earlier tests have been fixed.

2. **Regression Testing:** Alongside confirmation testing, regression testing is often performed to ensure that the defect fixes haven't introduced new issues elsewhere in the system.

### Regression Testing

**Explanation:**

Regression testing is a type of software testing that ensures that previously developed and tested software still performs the same way after it is changed or interfaced with other software. Changes may include software enhancements, patches, configuration changes. The purpose of regression testing is to ensure that code changes do not introduce new bugs or regressions.
