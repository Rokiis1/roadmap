# QA Basics

- [What is Quality Assurance?](#what-is-quality-assurance)
- [Testing Principles](#testing-principles)
- [Test Case Design](#test-case-design)

## What is Quality Assurance?

- [What is Quality?](#what-is-quality)
- [What is Assurance?](#what-is-assurance)
- [Quality Assurance in Software Testing](#quality-assurance-in-software-testing)

### What is Quality?

**Explanation:**

Quality refers to the degree of excellence or superiority of a product or service. These factors include reliability, performance, security, usability, and the ability to meet customer expectations effectively.

**Key Concepts:**

- **Fitness for Purpose**: A product or service should effectively serve its intended purpose. This means that it should meet the specific needs and requirements

- **Conformance to Requirements**: Ultimately, quality is about satisfying customer needs and expectations.  

- **Customer Satisfaction**: The product satisfies customer needs and expectations.

- **Continuous Improvement**: Quality is not a one-time achievement but an ongoing commitment.

### What is Assurance?

**Explanation:**

It involves activities aimed at building confidence that a product or service will meet its quality objectives.

**Key Concepts:**

- **Preventive Activities**: Assurance includes a range of preventive activities that are designed to stop defects from occurring in the first place. 

- **Process Adherence**: Ensuring that processes are followed consistently.

- **Standardization**: Implementing best practices and standards.

- **Early Detection**: Identifying and addressing issues early in the development lifecycle.

### Quality Assurance in Software Testing

**Explanation:**

Quality Assurance (QA): ensure software products meet specified quality standards.

**Key Concepts:**

- **Process Improvement**: QA involves the continuous identification and implementation of improvements in the testing process.

- **Standardization**: Establishing testing standards and guidelines.

- **Test Planning**: These plans outline the testing objectives, strategies, and schedules, ensuring that testing efforts align with project goals.

- **Metrics and Measurement**: Key performance indicators (KPIs).

![What is QA?](../assets/images/qaBasics/whatIsQA.png)

**Resources:**

- [Article: What is Quality Assurance(QA)?](https://www.guru99.com/all-about-quality-assurance.html)
- [Article: Why Is ISTQB Certification Important for QA Professionals?](https://www.testdevlab.com/blog/why-is-istqb-certification-important-for-qa-professionals)
- [Article: What is QA?](https://www.investopedia.com/terms/l/lean-six-sigma.asp)

## Testing Principles

**Explanation:**

Testing principles in Quality Assurance (QA) are fundamental guidelines and best practices that help ensure the effectiveness and efficiency of the testing process. These principles guide testing activities to identify and address issues in software, ultimately contributing to the development of high-quality products. 

**Key Concepts:**

1. **Early Testing:**
   - **Explanation:** Testing activities should commence as early as possible in the software development life cycle (SDLC). This principle emphasizes the importance of detecting and addressing defects early to reduce the cost of fixing issues later in the development process.
   - **Key Concepts:** Shift-left testing, unit testing, and integration testing.

2. **Testing is Context Dependent:**
   - **Explanation:** Testing strategies and approaches should be tailored to the specific context of the project. The unique requirements, constraints, and goals of each project should guide testing activities.
   - **Key Concepts:** Customized testing approaches, risk-based testing, and project-specific considerations.

3. **Exhaustive Testing is Impossible:**
   - **Explanation:** It's impractical to test every possible combination of inputs and scenarios. Rather than aiming for exhaustive testing, the focus should be on risk-based testing, prioritizing areas with higher risks of defects.
   - **Key Concepts:** Risk analysis, test prioritization, and test coverage.

4. **Defect Clustering:**
   - **Explanation:** A small number of modules or functionalities typically contain the majority of defects. Identifying and targeting these areas for testing can significantly improve the effectiveness of the testing process.
   - **Key Concepts:** Pareto principle, focusing on high-risk areas, and code hotspot analysis.

5. **Pesticide Paradox:**
   - **Explanation:** If the same set of tests is repeated over and over, the effectiveness of those tests decreases as the system evolves. Regularly review and update test cases to ensure they remain effective.
   - **Key Concepts:** Test maintenance, test case review, and periodic test suite updates.

6. **Testing is a Risk-Based Activity:**
   - **Explanation:** Testing should be prioritized based on the level of risk associated with different aspects of the software. High-risk areas should receive more testing focus than low-risk areas.
   - **Key Concepts:** Risk assessment, risk management, and prioritized testing.

7. **Continuous Improvement:**
   - **Explanation:** The testing process should be continuously evaluated and improved. Lessons learned from previous testing cycles should be applied to enhance future testing efforts.
   - **Key Concepts:** Retrospectives, feedback loops, and process improvement initiatives.

## Test Case Design

- [Types of Test Cases](#types-of-test-cases)
- [Test Case Format](#test-case-format)
- [Test Case Types](#test-case-types)
- [Test Scenarios vs Test Case](#test-scenarios-vs-test-case)
- [Test Case Requirements](#test-case-requirements)
- [Common Mistakes](#common-mistakes) 

**Explanation:**

We will explore the fundamentals of test case design, including the types, format, and requirements of test cases.

**Key Concepts:**

- Test case types (positive, negative, destructive)

- Test case format (ID, summary, preconditions, steps, post conditions, expected results, actual results, status)

- Test case requirements (comprehensiveness, repeatability, reusability)

### Types of Test Cases

**Explanation:**

The two types of test cases: positive, negative.

**Key Concepts:**

- Positive test cases (using valid inputs)

- Negative test cases (using invalid inputs)

**Example:**

- Positive test cases are used to validate that software behaves correctly with valid inputs, such as logging in with correct credentials. 

- Negative test cases, on the other hand, aim to ensure the software handles invalid inputs appropriately, like incorrect login credentials. 

### Test Case Format

**Explanation:**

We will break down the format of a test case, including its eight essential elements. Understanding this format is crucial for creating effective test cases.

**Key Concepts:**

- Test case elements (ID, summary, preconditions, steps, expected results, actual results, status)

**Example:**

Eight elements that make up a test case format: 

1. These elements include ID (unique identifier)

2. Summary (brief description)

3. Preconditions (actions needed before the test)

4. Steps (actions for verification)

5. Expected results

6. Actual results

7. Status

### Test Case Types

**Explanation:**

It discusses the flexibility in naming and structuring test cases.

**Key Concepts:**

- Different test case formats

- Variability in naming and section terminology

**Example:**

- That test cases can vary in format and structure. For instance, some may use a shorter format with only a few key elements like summary, priority, steps, and expected results. 

- The terminology used in different sections may also vary, with "inputs" used instead of "steps" or "outputs" instead of "results."

### Test Scenarios vs Test Case

**Test scenarios**

**Explanation:**

Test scenarios are high-level descriptions of the end-to-end functionality of a system or a specific feature.

- **Scope:** They cover broad functionalities and are often written in plain language, providing a general overview of what needs to be tested.

- **Level of Detail:** Test scenarios are less detailed compared to test cases. They focus on the "what" rather than the "how."

- **Use Case:** Test scenarios are often used in the early stages of test planning to outline the major paths or workflows that need to be tested.

- **Example:**

  - *Scenario:* Verify the login functionality.

  - *Scenario:* Test the checkout process for an e-commerce website.

**Test Cases**

**Explanation:**

Test cases are detailed step-by-step instructions that specify how to execute a test scenario. They are more granular and provide specific inputs, actions, and expected outcomes.

- **Scope:** Test cases break down the test scenarios into smaller, manageable units. They are the building blocks for test execution.

- **Level of Detail:** Test cases are highly detailed and include specific conditions, data, and steps required to validate a particular aspect of the system.

- **Use Case:** Test cases are used during the execution phase of testing. Testers follow these detailed instructions to validate the functionality.

- **Example:**

  - *Test Case:* Enter valid username and password and click the "Login" button. Verify that the user is successfully logged in.'

  - *Test Case:* Add a product to the cart, proceed to checkout, and confirm that the order is placed.

**Key Concepts:**

1. **Abstraction Level:**

   - **Test Scenarios:** Higher abstraction level, focusing on overall functionalities.

   - **Test Cases:** Lower abstraction level, providing detailed steps for execution.

2. **Scope:**

   - **Test Scenarios:** Cover broader functionalities or workflows.

   - **Test Cases:** Break down scenarios into smaller, specific units for detailed testing.

3. **Usage in Test Planning:**

   - **Test Scenarios:** Often used in the initial stages of test planning to outline testing scope.
   - **Test Cases:** Used during the execution phase to validate specific conditions and behaviors.

4. **Detail Level:**

   - **Test Scenarios:** Less detailed, providing a general overview.

   - **Test Cases:** Highly detailed, specifying inputs, actions, and expected outcomes.

5. **Execution Focus:**

   - **Test Scenarios:** Focus on "what" needs to be tested.

   - **Test Cases:** Focus on "how" to test a specific aspect of the scenario.

6. **Relationship:**

   - **Test Scenarios:** Act as a blueprint for testing, guiding the creation of detailed test cases.

   - **Test Cases:** Implement the details outlined in test scenarios.

### Test Case Requirements

**Explanation:**

Discusses the need for accuracy, clarity, and repeatability in test case documentation.

**Key Concepts:**

- including or dealing with all or nearly all aspects of test cases

- Clear and accurate descriptions

- Repeatability and ease of understanding

**Example:**

- Test cases should be comprehensive and not depend on other cases

- They should provide clear and accurate descriptions of steps and expected results to ensure repeatability.

### Common Mistakes

**Explanation:**

Highlights common mistakes made by QA engineers when writing test cases.

**Key Concepts:**

- Avoiding abstract summaries

- Ensuring clickable links

- Balancing detail in descriptions

**Example:**

- Avoiding overly abstract summaries, advocating for specific and clear descriptions like `"check adding a product to the wishlist"` instead of a generalized `"check wishlist functionality."` 

### Examples of Test Case and Scenarios

- [Examples of Test Case and Scenarios](./assets/examples/qaBasics/testCaseAndScenarios/README.md)

### Tasks: Intro

- [Tasks: Intro](./tasks/qaBasics/intro.md)