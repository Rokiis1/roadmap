<!-- markdownlint-disable MD033 -->
# Content of Table Testing Throughout the Software Development Lifecycle

- [Software Development Life Cycle (SDLC) Models](#software-development-life-cycle-sdlc-models)
- [Good Practices of Testing](#good-practices-of-testing)
- [Testing Approaches in Software Development](#testing-approaches-in-software-development)
- [Software Testing Life Cycle (STLC)](#software-testing-life-cycle-stlc)
- [Role of Testing in DevOps](#role-of-testing-in-devops)
- [Release and Iteration Planning](#release-and-iteration-planning)
- [Maintenance Testing](#maintenance-testing)

## Software Development Life Cycle (SDLC) Models

**Explanation:**

Software Development Life Cycle (SDLC) models are methodologies that guide the process of developing software.

![alt image](./assets/images/SDLC.png)

<details>
    <summary>Overview:</summary>

1. **Process-oriented:** This approach focuses on the process of developing software, with an emphasis on planning, time schedules, target dates, budgets, and implementation of an entire system at one time.

2. **Sequential SDLC Model:** This is a type of SDLC model where development is seen as flowing steadily downwards through several phases.

    <details>
       <summary>Overview:</summary>

    1. **Waterfall Model:** Waterfall Model, is a linear approach to software development.

        ![alt text](./assets/images/waterfallModel.png)

        <details>
           <summary>Overview:</summary>

        </details>

    2. **V-Shaped Model:** Every single phase in the development cycle, there is a directly associated testing phase.

        ![alt text](./assets/images/vShapedModel.png)

        <details>
           <summary>Overview:</summary>

        1. **Verification:** Regularly evaluate intermediary work products during the software development lifecycle to ensure that you're on the right track. This could involve code reviews, design reviews, or reviewing other documentation.

        2. **Validation:** Once the final product is ready, compare it to the user’s requirements to ensure that it meets the specified requirements. This could involve user acceptance testing or beta testing.

        </details>

    3. **Impact on Testing:**

        - **Scope and Timing of Test Activities:** In Sequential models, testing happens later in the cycle.

        - **Level of Detail in Test Documentation:** Sequential models often have detailed documentation.

        - **Choice of Test Techniques and Approaches:** The SDLC model affects the choice of test techniques and approaches.

        - **Extent of Test Automation:** Traditional models may have limited automation.

        - **Role and Responsibility of Testers:** In traditional models, testers are limited to testing activities.

    </details>

3. **Iterative and Incremental SDLC Model:** This is a type of SDLC model where the software is developed incrementally and the development process is repeated in small iterations.

    ![alt text](./assets/images/Iterative_and_Incremental_diagram.png)

    <details>
       <summary>Overview:</summary>

    - **Iterative Development:** Iterative development involves repeating the development cycle multiple times, with each iteration adding new features or refining existing ones. Each iteration builds upon the previous one, incorporating feedback and changes to improve the software.

    - **Incremental development:** Incremental development involves delivering the software in small, incremental releases. Each release includes a subset of the final features, allowing the software to be tested and used by stakeholders early in the development process.

    - **Impact on Testing:**

        - **Scope and Timing of Test Activities:** Each iteration delivers a working prototype, allowing both static and dynamic testing at all levels.

        - **Level of Detail in Test Documentation:** Documentation can be adjusted based on feedback from each iteration.

        - **Choice of Test Techniques and Approaches:** Iterative and incremental models allow for flexible testing techniques.

        - **Extent of Test Automation:** Automation can be incrementally added and improved with each iteration.

        - **Role and Responsibility of Testers:** Testers are involved throughout the iterations, providing continuous feedback.

    </details>

4. **Agile Model:** In Agile methodologies, testing is integrated throughout the development process rather than being a separate phase.

    ![alt text](./assets/images/agileModel.png)

    <details>
       <summary>Overview:</summary>

    1. **Agile Manifesto:**

        - **Individuals and Interactions over Processes and Tools:** People and teamwork are more important than strict rules and tools.
        - **Working Software over Comprehensive Documentation:** Deliver software that works instead of writing lots of documents.
        - **Customer Collaboration over Contract Negotiation:** Work with customers to get things right instead of just following contracts.
        - **Responding to Change over Following a Plan:** Be ready to change plans when needed instead of sticking to a fixed plan.

    2. **Whole Team Approach:** In Agile, the whole team is responsible for quality and testing. This means that everyone, from developers to business analysts, is involved in testing activities.

    3. **Scrum Framework:** Scrum is an Agile framework used to manage product development.

        ![alt text](./assets/images/scrumDiagram.png)

    4. **Retrospective and Process Improvement:**

        **Explanation:**

        Retrospectives are meetings held at the end of a project, iteration, or release to reflect on the process and identify areas for improvement. The timing and organization of retrospectives depend on the specific SDLC model being followed.

        - **Purpose of Retrospectives:** Reflect on what was successful and should be retained and Identify what was not successful and can be improved.

        - **Timing and Organization:** Retrospectives can be held at the end of a project, iteration, or release milestone. The timing and organization of retrospectives depend on the specific SDLC model being followed.

        - **Participants:** Involve all relevant stakeholders, including testers, developers, architects, product owners, and business analysts.

        - **Outcome of Retrospectives:** Document the results and include them in the test completion report.

    5. **Impact on Testing:**

        - **Scope and Timing of Test Activities:** In Agile, testing activities begin parallelly with development activities.

        - **Level of Detail in Test Documentation:** Agile models often have brief documentation, favoring lightweight documentation.

        - **Choice of Test Techniques and Approaches:** Agile may restrict some techniques due to high-level requirements and time constraints.

        - **Extent of Test Automation:** Agile models favor extensive test automation due to time constraints. Manual testing often uses experience-based techniques.

        - **Role and Responsibility of Testers:** In Agile, testers may have cross-functional responsibilities and participate in planning meetings.

    </details>

</details>

## Good Practices of Testing

**Explanation:**

Good testing practices should be followed in any development model. These practices ensure that all development activities are subjected to quality control and that testing is comprehensive and effective.

<details>
    <summary>Overview:</summary>

1. **Corresponding Testing Activity:** For every development activity, there should be a corresponding testing activity. This ensures that all development activities are subjected to quality control.

2. **Specific Test Objectives:** Different test levels should have specific and different test objectives to avoid redundancy and ensure comprehensive testing.

3. **Early Test Analysis and Design:** Test analysis and design for a given test level should begin during the corresponding development phase to adhere to the principles of early testing.

4. **Early Involvement of Testers:** Testers should be involved in reviewing work products as soon as drafts are available. This supports early testing and defect detection, aligning with the shift-left strategy.

</details>

## Testing Approaches in Software Development

**Explanation:**

Testing approaches in software development are strategies used to ensure the functionality of software works.

<details>
    <summary>Overview:</summary>

1. **Shift Left and Right Approach:** This approach involves conducting testing early and often in the development process (shift left), and continuing testing into the deployment and maintenance stages (shift right). The "left" side could be seen as the planning and documentation stages, and the "right" side as the coding, deployment, and maintenance stages.

    - **Shift Left Approach:** The Shift Left Approach involves moving test activities to the earlier stages of the development process, such as during requirement gathering and design phases, and encouraging cooperation between QA teams, development teams, and other stakeholders like Business Analysts and Project Managers. It also includes integrating automated tests into the **Continuous Integration (CI)** pipeline for fast feedback on code changes and performing static analysis of the source code before dynamic testing to identify code quality issues early.

    - **Shift Right Approach:** **Continuous Delivery (CD)** extending testing into the deployment and maintenance stages to ensure that the software continues to function correctly in production environments. This includes implementing monitoring and observability practices to detect issues in real-time and gather feedback from production usage. Additionally, it involves collecting and analyzing user feedback to identify areas for improvement and ensure that the software meets user expectations. Post-deployment testing, such as **performance testing**, **security testing**, and user **acceptance testing (UAT)**, is also conducted to validate the software in its live environment.

    ![alt text](./assets/images/shiftleftright.png)

2. **Test-Driven Development (TDD):** This is a development methodology where tests are written before the actual code.

    - **Overview**: TDD directs coding through test cases instead of extensive software design. Tests are written first, then code is written to satisfy the tests, and finally, both tests and code are refactored.
    - **Process**: Unit test cases are written prior to the unit code. Developers write code to make these tests pass, reducing the time spent on defect reporting and tracking.
    - **How it's work:**
        1. Write a unit test for a new function.
        2. Run the test and see it fail (since the function is not yet implemented).
        3. Write the minimum code required to pass the test.
        4. Refactor the code while ensuring the test still passes.

    ![alt text](./assets/images/tdd.png)

3. **Behavior-Driven Development (BDD):** Focuses on the behavior of the application, using natural language to describe test cases.

    - **Overview**: BDD expresses the desired behavior of an application with test cases written in natural language, making them easy to understand by any stakeholder.
    - **Process**: Tests are written using the "Given-When-Then" format, which is derived from acceptance criteria. These scenarios are then translated into automated tests.
    - **How it's work:**
        1. Define acceptance criteria for a feature or user story.
        2. Write scenarios in a Given-When-Then format.
        3. Translate these scenarios into automated tests.
        4. Develop the code to pass these tests.

4. **Acceptance Test-Driven Development (ATDD):** BDD focuses on the behavior of the application, using natural language to describe test cases.

    - **How it's work:**
        1. Define acceptance criteria for a user story.
        2. Write acceptance tests based on these criteria.
        3. Develop the code to pass these tests.

5. **Testing Quadrants:** This is a model that helps teams identify what type of testing is needed, when it should be done, and who should do it. It divides testing into four quadrants based on whether the tests are business or technology-facing and whether they support the team or critique the product.

    - **Quadrant 1** - Technology-Facing Tests that Support the Team: This quadrant includes tests that are technology-driven and are used to guide development. These are often automated tests. Examples include Unit Tests, Component Tests, and API Tests.

    - **Quadrant 2** - Business-Facing Tests that Support the Team: This quadrant includes tests that are business-driven and are used to describe and validate what the system should do. These tests are often automated and include tests like Functional Tests.

    - **Quadrant 3** - Business-Facing Tests that Critique the Product: This quadrant includes tests that are business-driven and are used to provide feedback. These tests are often manual and exploratory in nature. Examples include Exploratory Testing, Usability Testing, User Acceptance Testing, and Alpha/Beta Testing.

    - **Quadrant 4** - Technology-Facing Tests that Critique the Product: This quadrant includes tests that are technology-driven and are used to critique the product from a non-functional requirement perspective. These tests are often automated and include Performance Testing, Security Testing, Load Testing, and Stress Testing.

    ![alt text](./assets/images/testQuandrants.png)

</details>

## Software Testing Life Cycle (STLC)

**Explanation:**

The Software Testing Life Cycle (STLC) is a sequence of specific activities conducted during the testing process to ensure software quality.

<details>
    <summary>Overview:</summary>

1. **Requirement Analysis:** To understand the testing requirements based on the requirements document by identifying testable requirements, defining test objectives, and preparing the Requirement Traceability Matrix (RTM), resulting in a clear understanding of what needs to be tested.

2. **Test Planning:** To define the scope, approach, resources, and schedule for testing activities by developing the test plan document, identifying test objectives and criteria, estimating test effort and resources, defining test environment requirements, and identifying risks and mitigation plans, resulting in the creation of the test plan document, test effort estimation, and risk management plan.

3. **Test Design:** To design test cases and test scripts based on the requirements by creating detailed test cases, developing test data, identifying test scenarios, and reviewing and baselining test cases, resulting in the creation of test cases, test scripts, test data, and test scenarios.

4. **Test Environment Setup:** To prepare the test environment where testing will be conducted by setting up hardware and software requirements, configuring the test environment, installing necessary tools and applications, and verifying the test environment setup, resulting in the test environment being ready for execution.

5. **Test Implementation:** To develop and prioritize test cases and scripts by implementing test cases and scripts, creating test suites, and mapping test cases to requirements, resulting in test cases and scripts ready for execution and the creation of test suites.

6. **Test Execution:** To execute the test cases and report defects by executing test cases, logging defects and tracking their status, performing retesting and regression testing, and updating test cases based on feedback, resulting in test execution reports, defect logs, and updated test cases.

7. **Test Closure:** To conclude testing activities and evaluate the testing process by ensuring all test cases are executed, documenting test results and metrics, conducting a test closure meeting, archiving test artifacts, resulting in a test summary report, test metrics, archived test artifacts, and documented.

8. **Impact Analysis:** The purpose of impact analysis is to identify the areas of the application that will be impacted by a change and reduce the effort required for regression testing by focusing on the affected areas.

9. **Maintenance Testing:** Involves testing an operational system to ensure that changes or enhancements do not introduce new defects. It is conducted after the software has been released and is in use by end-users.

**There are different types of maintenance:**

- **Corrective:** Fixing known bugs or issues.
- **Adaptive:** Adapting the software to changes in the environment or improving performance.
- **Perfective:** Enhancing existing features or adding new features.

**Maintenance testing can be triggered by planned or unplanned releases:**

- **Planned Releases:** Changes that were scheduled and known in advance, such as feature enhancements or updates.

- **Unplanned Releases:** Changes that arise unexpectedly, such as hot fixes for critical issues reported by users.

**Triggers for maintenance testing include:**

- **Modifications**: Updates or enhancements to existing features.
- **Upgrades:** Introducing new features or significant changes to the software.
- **Migrations:** Moving the application from one platform to another.
- **Retirement:** Final versions of the application before it is retired, ensuring data archiving and retrieval procedures are in place.

</details>

## Role of Testing in DevOps

**Explanation:**

In DevOps, a methodology that integrates software development (Dev) and IT operations (Ops), testing is not a separate phase but is integrated into every part of the development and deployment process. This integration ensures continuous quality and faster delivery.

![alt text](./assets/images/devops.png)

<details>
    <summary>Overview:</summary>

1. **Integration of Testing**: DevOps includes embedded testing as part of the development process, eliminating the need for a separate testing phase between development and operations.

2. **Continuous Integration and Continuous Delivery (CI/CD)**:
    - **Continuous Integration (CI)**: Every time new code is checked in, automated tests are triggered to verify the build and perform regression testing.
    - **Continuous Delivery (CD)**: Ensures that code changes are automatically prepared for a release to production.

3. **Continuous Testing:** Testing is conducted continuously throughout the development process. Every code change triggers automated tests to ensure that new code integrates well with the existing codebase.

4. **Shift Left Testing:** This approach involves conducting testing as early as possible in the development process (shifting it "left" in the timeline). By identifying and fixing defects early, the overall cost and time to fix issues are reduced.

5. **Infrastructure as Code (IaC):** In DevOps, the infrastructure is often managed using code, which means it can be tested just like application code. This ensures that the infrastructure is consistent and reliable across different environments.

6. **Monitoring and Logging:** Continuous monitoring and logging are used in DevOps to track the application's performance and catch issues in real-time. This helps in quickly identifying and resolving problems before they impact end-users.

7. **Integrated Toolchains:** DevOps promotes the use of integrated toolchains that support continuous integration and continuous delivery (CI/CD). These toolchains automate the build, test, and deployment processes, ensuring a smooth and efficient workflow.

8. **Collaboration:** Collaboration between development, testing, and operations teams. This collaboration ensures that everyone is aligned with the common goal of delivering high-quality software quickly and efficiently.

9. **Benefits of DevOps:**
    - **Fast Feedback**: Provides quick feedback on code quality and whether changes adversely affect existing code.
    - **Shift-Left Approach**: Encourages developers to submit high-quality code accompanied by component tests and static analysis.
    - **Automated Processes**: Facilitates establishing stable test environments and increases the view on non-functional code quality characteristics.
    - **Reduced Manual Testing**: Automation through a delivery pipeline reduces the need for repetitive manual testing.
    - **Minimized Regression Risk**: Frequent automated regression tests reduce the risk of regression failures.

10. **Challenges of DevOps**
    - **Establishing the Pipeline**: Defining and establishing the DevOps delivery pipeline requires expertise and knowledge.
    - **Tool Maintenance**: CI/CD tools must be introduced and maintained, adding complexity to the process.
    - **Resource Requirements**: Test automation requires additional resources and may be difficult to establish and maintain.

</details>

## Release and Iteration Planning

**Explanation:**

Release and iteration planning are essential components of the Agile methodology, ensuring that the project progresses smoothly and efficiently. These planning activities help in defining the scope of work, identifying risks, and determining the test approach for each release and iteration.

<details>
    <summary>Overview:</summary>

1. **Release Planning:** Defining and refining the product backlog. It involves breaking down larger user stories into smaller, manageable ones. The primary goal is to identify the set of items to be worked on during the release and build a product backlog. The product owner (PO) is responsible for refining the backlog periodically. Testers contribute to release planning by participating in writing testable user stories and acceptance criteria, analyzing project and product risks, estimating test effort, and determining the test approach for the release.

2. **Sprint Planning:** Sprint planning occurs at the beginning of each Sprint, focusing on selecting items from the product backlog to be implemented during the Sprint. Testers role in Sprint planning by reviewing work products, performing detailed risk analysis of user stories, determining the testability of user stories, breaking down user stories into testing tasks, estimating test effort, and identifying functional and non-functional aspects of the test object. The key difference between release planning and Sprint planning is the scope: release planning focuses on the entire release, while Sprint planning targets specific user stories for the Sprint.

</details>

## Maintenance Testing

**Explanation:**

Maintenance testing is performed on a live application that is already in use by end users. It involves testing enhancements, bug fixes, and other changes to ensure they do not adversely affect the existing system. Maintenance testing is essentially regression testing conducted whenever changes are made to an existing application.

<details>
    <summary>Overview:</summary>

1. **Categories of Maintenance:**

    - **Corrective:** Fixing known bugs or issues that were pending from previous releases.
    - **Adaptive:** Making changes to adapt to new environments or improve performance and maintainability.
    - **Enhancements:** Adding new features or improving existing ones based on user feedback and requirements.

2. **Impact Analysis:** Impact analysis is a study to identify the areas of the application that will be affected by the change. It helps in determining the scope of regression testing required.

3. **Triggers for Maintenance Testing:**

    - **Modifications:** Planned enhancements, updates, and hot fixes.
    - **Upgrades:** Introducing new features or moving from one version to another.
    - **Migrations:** Moving an application from one platform to another.
    - **Retirement:** Final versions of an application that will no longer receive updates or new releases.

</details>
