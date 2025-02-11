<!-- markdownlint-disable MD033 -->
# Content of Table Managing the Test Managment

- [Test Planning](#test-planning)
- [Test Monitoring and Control](#test-monitoring-and-control)
- [Configuration Management](#configuration-management)
- [Defect Management](#defect-management)
- [Test Reporting](#test-reporting)
- [Testware Management](#testware-management)

**Explanation:**

Managing test activities is a aspect of the software development lifecycle that ensures the quality and reliability of the software product. It involves a series of coordinated tasks and processes that guide the planning, execution, monitoring, and control of testing efforts.

## Test Planning

**Explanation:**

Test Planning It involves creating a detailed document that outlines the strategy and approach for testing a software product. This document serves as a blueprint for the entire testing process, ensuring that all aspects of testing are well-organized and systematically executed.

<details>
    <summary>Overview:</summary>

1. **Introduction:**

    - **Purpose of the Test Plan:** Describe the purpose and objectives of the test plan.
    - **Scope of Testing:** Define the boundaries of the testing activities, including what will and will not be tested.
    - **Objectives:** Clearly state the goals of the testing process.
    - **Constraints:** Identify any limitations or constraints that may impact testing.
    - **Assumptions:** List any assumptions made during the planning process.

2. **Test Items:**

    - **List of Items to be Tested:** Enumerate the specific items, features, or components that will be tested. This section provides a high-level overview of the main components, modules, or subsystems that will be tested.

    - **Features to be Tested:** Detail the features and functionalities that will be included in the testing scope.This section provides a detailed description of the specific features and functionalities within the high-level items. It outlines what aspects of the application will be tested

    - **Features Not to be Tested:** Specify any features or functionalities that are out of scope for testing.

3. **Test Approach(Test Strategy):**

    - **Test Pyramid:** The Test Pyramid idea is for a large number of low-level unit tests, a smaller number of integration tests, and an even smaller number of end-to-end tests.
    - **Test Levels:** Define the levels of testing based on the Test Pyramid (unit testing, integration testing, system testing, acceptance testing).
    - **Test Types:** Specify the types of testing to be performed (functional testing, non-functional testing).
    - **Test Techniques:** Describe the techniques and methodologies that will be used (White-box Testing, Black-box Testing, User Acceptance Testing (UAT)).
    - **Entry and Exit Criteria:** Define the conditions that must be met to start and stop testing activities, ensuring that the testing process is well-structured and efficient.

        <details>
           <summary>Overview:</summary>

        - **Entry Criteria:** These are the conditions that must be met before testing can begin. They ensure that all necessary preparations are completed and that the testing process can start smoothly without any blockers.

            <details>
              <summary>Examples:</summary>

            - All development tasks have been completed and the code has been merged into the main branch.

            - The application has been successfully deployed in the testing environment.

            - All test cases have been reviewed and approved by the project manager.

            - Test data required for testing has been created and is available in the testing environment.

            - The testing team has been trained on the new features and changes in the application.

            - Availability of resources (people, tools, environments, budget, and time).

            - Initial quality level of the test object (conducting smoke tests to accept the build).

            </details>

        - **Exit Criteria:** These are the conditions that must be met before testing can be considered complete. They ensure that all planned testing activities have been executed and that the software meets the required quality standards.

            <details>
               <summary>Examples:</summary>

            - All test cases have been executed.

            - All critical and high severity defects have been fixed and retested.

            - The testing team has completed a final review and approved the testing results.

            - The stakeholders have accepted the final testing report and given approval for the release.

            - Achieving the required level of coverage (requirement coverage, code coverage, functional coverage).

            - Number of unresolved defects within the agreed limit.

            - Completion of planned tests and execution of all test cases.

            - All defects found have been reported and documented.

            - Regression tests are automated and executed.

            </details>

        </details>

    - **Test Prioritization:**  To determine the sequence of test case execution based on various factors such as risk, complexity, dependencies, and requirements.

        <details>
           <summary>Overview:</summary>

        - **Risk-Based Prioritization:** Test cases are prioritized based on the results of risk analysis. High-risk areas are tested first.

            <details>
               <summary>Examples:</summary>

            Test cases for high-risk areas are executed first, followed by medium-risk and low-risk areas.

            </details>

        - **Coverage-Based Prioritization:** Test cases are prioritized based on the coverage they provide, such as statement coverage or decision coverage.

            <details>
               <summary>Examples:</summary>

            Test cases that achieve the highest coverage are executed first. For instance, a test case that covers 50% of the statements is executed before a test case that covers 20%.

            </details>

        - **Requirement-Based Prioritization:** Test cases are prioritized based on the priorities of the requirements they cover. High-priority requirements are tested first.

            <details>
               <summary>Examples:</summary>

            Test cases related to high-priority requirements are executed first, followed by medium and low-priority requirements.

            </details>

        - **Test Execution Schedule:** To define the order in which test cases are executed, ensuring that dependencies are managed and high-priority tests are run first.

        - **Technical Dependencies:** Test cases that are dependent on others must be executed in the correct order to avoid blockers.

        - **Logical Dependencies:** Test cases that logically depend on the results of other tests should be executed in the appropriate sequence.

        - **Priority Levels:** High-priority test cases should be executed before medium and low-priority test cases.

            <details>
              <summary>Examples:</summary>

            - **Test Case ID:** T1, Priority: High, Technical Dependency: T2, Logical Dependency: None
            - **Test Case ID:** T2, Priority: Medium, Technical Dependency: None, Logical Dependency: None
            - **Test Case ID:** T3, Priority: High, Technical Dependency: T2, Logical Dependency: None
            - **Test Case ID:** T4, Priority: Low, Technical Dependency: None, Logical Dependency: None

            - **Step 1:** Execute T2 (Medium priority, no dependencies)
            - **Step 2:** Execute T1 (High priority, dependent on T2)
            - **Step 3:** Execute T3 (High priority, dependent on T2)
            - **Step 4:** Execute T4 (Low priority, no dependencies)

            </details>

        - **Independence of Testing:** Ensure that testing is conducted independently from development to avoid bias.
        - **Metrics:** Identify the metrics that will be collected to measure the effectiveness and progress of testing.

       </details>

4. **Resources:**

    - **Roles and Responsibilities:** Define the roles and responsibilities of the testing team and other stakeholders.

    - **Test Environment:**
        - **Environment Setup:** Identify hardware and software requirements, configure the environment, and install necessary tools.

        - **Test Data Management:** Identify data requirements, create or extract test data, ensure data privacy and security, and maintain test data.

        - **Environment Maintenance:** Monitor and maintain the test environment to ensure stability and reliability.

        - **Tools:** List the tools that will be used for testing, including test management tools, automation tools, and defect tracking tools.

5. **Schedule:**

    - **Testing Timeline:** Provide a timeline for the testing activities, including start and end dates.
    - **Milestones:** Identify key milestones and deliverables throughout the testing process.
    - **Deliverables:** List the expected deliverables from the testing activities (test cases, test scripts, test reports).

6. **Risk Management:**

    - **Risk Register:** Maintain a register of identified risks that could impact testing.

        <details>
           <summary>Overview:</summary>

        1. **Risk in Testing:** Risk in testing refers to the potential for a software product to fail to meet its requirements.

        2. **Risk Identification:** Identify potential risks that could impact the software testing process.

            <details>
              <summary>Overview:</summary>

            - **Technical Risks:** Software bugs, system failures.

            - **Process Risks:** Delays, resource shortages.

            - **External Risks:** Changes in market conditions, regulatory requirements.

            </details>

        3. **Risk Assessment:** Once risks have been identified, they need to be assessed in terms of their likelihood of occurrence and their potential impact.

        4. **Risk Likelihood:** This refers to the probability that a particular risk will occur. It can be assessed based on past experience, statistical analysis.

            <details>
               <summary>Syntax:</summary>

            **(Event that has an effect on objectives)** caused by **(cause/s)** resulting in **(consequence/s)**

            </details>

            <details>
               <summary>Examples:</summary>

            **Example 1:**

            ```text
            Suppose you're planning an outdoor event in a city where it rains about 10 days each month. 

            The likelihood of this risk can be calculated based on past weather data. If it rains 10 days out of 30 in a typical month, then the likelihood of it raining on any given day (and thus potentially disrupting your event) is 10/30, or 33.3%.
            ```

            **Example 2:**

            ```text
            Company uses a specific type of software that has had 5 security breaches reported in the past year. The risk here is that your company's data could be compromised due to a security breach in this software.

            If there were 5 breaches in the past 365 days, the likelihood of a breach on any given day is 5/365, or approximately 1.37%. This means there's a 1.37% chance that a security breach could occur on any given day, based on past data.
            ```

            </details>

    - **Risk Impact:** This refers to the potential consequences if the risk were to occur. It can be assessed in terms of the potential damage to the project's objectives, such as cost overruns, delays, or reduced quality.

        <details>
           <summary>Syntax:</summary>

        If **(risk event)** occurs, it could lead to **(consequence/s)**.

        </details>

        <details>
           <summary>Examples:</summary>

        **Example 1:**

        ```text
        You're managing a construction project for a new building. One potential risk could be a delay in the delivery of essential building materials.

        Cost Overruns: You might have to pay extra for expedited shipping or for buying materials from a different, more expensive supplier.

        Delays: The construction schedule could be pushed back, leading to a later completion date. This could have further impacts, such as penalties for late completion or loss of revenue if the building was intended to be rented or sold.

        Reduced Quality: If you're forced to use different materials due to the delay, the quality of the building might be compromised.
        ```

        **Example 2:**

        ```text
        Suppose you're managing a software development project and one potential risk is that a key developer might leave the team before the project is completed.

        Delays: The departure of a key team member could slow down the development process, leading to a delay in the project timeline.

        Increased Costs: You might need to hire a new developer or pay overtime to other team members to cover the work. The cost of recruiting and training a new developer can also add to the project costs.

        Reduced Quality: If the new developer or the remaining team members are not as skilled or knowledgeable as the departing developer, the quality of the software could be compromised.

        Knowledge Loss: The departing developer might have critical knowledge about the project that is not fully documented or known by the rest of the team. This could lead to further delays and mistakes.
        ```

        </details>

    - **Mitigation Strategies:** Outline strategies to mitigate or manage identified risks.

        <details>
           <summary>Syntax:</summary>

        - If **(risk event)** occurs, it could lead to **(consequence/s)**. In response to this risk, we could employ the **(Risk Response Strategy)** by **(specific actions)**.

        </details>

        <details>
           <summary>Overview:</summary>

        1. **Risk Acceptance:** This is a risk response strategy where the risk is accepted without any further actions to reduce its impact or likelihood. This strategy is often used for low-priority risks, where the cost of mitigation would exceed the potential impact of the risk.

            <details>
               <summary>Examples:</summary>

            - If **minor software bug that does not affect the functionality or user experience**, it could lead to **minor inconsistencies in the user interface**. Given the low impact of this risk and the potentially high cost of fixing every minor bug, we could employ the **Risk Acceptance strategy** and accept this risk without taking further action to mitigate it.

            </details>

        2. **Risk Mitigation:** This is a risk response strategy where actions are taken to reduce the likelihood of the risk occurring or to reduce its impact if it does occur.

            <details>
               <summary>Examples:</summary>

            - If **critical software component is complex and prone to errors**, it could lead to **system instability or crashes**. In response to this risk, we could employ the Risk **Mitigation strategy** by simplifying the component, writing additional tests to catch potential errors, and implementing additional security measures to prevent unauthorized access.

            </details>

        3. **Risk Transfer:** The risk is transfered to a third party. This could involve purchasing insurance, outsourcing a risky part of the project, or using contractual agreements to shift the risk to another party.

            <details>
               <summary>Examples:</summary>

            - If **the development of a complex and specialized software module**, it could lead to **delays in the project and potential errors due to lack of expertise**. To manage this risk, we could use the **Risk Transfer strategy** by outsourcing the development of this module to a third-party vendor with proven expertise in this area.

            </details>

        4. **Contingency Plan:** This is a backup plan that tells you what to do if something goes wrong.

            <details>
               <summary>Examples:</summary>

            - If **server outage**, it could lead to **downtime and loss of user data**. A contingency plan for this risk could involve having a backup server ready to take over, and a data recovery plan in place to restore any lost data. This is an example of the **Contingency Plan strategy**.

            </details>

        </details>

    - **Risk Management Tools and Techniques:** Risk Management Tools and Techniques are methodologies used to identify, assess, and mitigate risks in software testing.

        <details>
           <summary>Syntax:</summary>

        - To manage risks in **(software testing scenario)**, we could use **(specific Risk Management Tool or Technique)** to **(identify/assess/mitigate)** risks.

        </details>

        <details>
           <summary>Overview:</summary>

        1. **Risk-Based Testing:** This approach prioritizes testing based on the risk associated with features and functions. Risks can be related to functional, non-functional, or structural aspects of the software.

            <details>
               <summary>Examples:</summary>

            - **Identify Risks:**
                - First, we identify potential risks associated with the new feature. For example, the new feature might have a high risk of causing performance issues or might be prone to security vulnerabilities.

            - **Assess Risks:**
                - Next, we assess the identified risks to determine their likelihood and impact. For example, if the new feature is complex and has many dependencies, it might have a high likelihood of causing bugs.

            - **Prioritize Testing:**
                - Based on the assessment, we prioritize our testing efforts. We focus more on high-risk areas to ensure they are thoroughly tested. For example, if the new feature has a high risk of performance issues, we perform extensive performance testing.

            - **Execute Tests:**
                - We execute the tests according to the priority. High-risk areas are tested first. For example, we might run multiple test cases to check for performance and security issues.

            - **Manage Risks:**
                - Throughout the testing process, we continuously monitor and manage risks. If new risks are identified, we reassess and adjust our testing priorities accordingly.

            </details>

        2. **Product Risk Management:** This involves identifying, assessing, and managing risks related to the software product itself. This could include functional defects, performance issues, or security vulnerabilities.

            <details>
               <summary>Examples:</summary>

            - **Data Breaches:**
                - **Risk:** Unauthorized access to sensitive patient data.
                - **Management:** We can manage this risk by conducting thorough code reviews to identify potential security vulnerabilities. We can also implement strong encryption and access control measures to protect data.

            - **System Downtime:**
                - **Risk:** The system might become unavailable, affecting healthcare operations.
                - **Management:** We can use automated testing to ensure the system meets performance standards.

            - **Incorrect Dosage Calculations:**
                - **Risk:** Errors in dosage calculations could lead to serious health issues.
                - **Management:** We can manage this risk by adding extra validation checks to ensure calculations are accurate. We can also perform thorough unit testing to verify the correctness of the dosage calculation functions.

            </details>

        3. **Project Risk Management:** Involves identifying, assessing, and managing risks related to the process of developing and testing the software. This could include risks like delays, cost overruns, or resource shortages.

            <details>
               <summary>Examples:</summary>

            - **Delays Due to Unforeseen Technical Challenges:**
                - **Risk:** The project might face delays because of unexpected technical problems.
                - **Management:** We can manage this risk by using project management tools like Jira to monitor project progress and identify issues early. We can also allocate additional time in the project.

            - **Cost Overruns Due to Changes in Requirements:**
                - **Risk:** The project might exceed its budget if there are changes in requirements.
                - **Management:** To manage this risk, we could ask more money from VC or then we could fire more people to give other more tasks.

            </details>

        </details>

7. **Test Estimation:** Test Estimation is the process of predicting the time, effort, and cost required for testing activities.

    <details>
       <summary>Overview:</summary>

    1. **Metrics-Based Estimation:**

        - **Estimation Based on Ratios:** This technique involves using data from previous projects to derive standard ratios that can be applied to new projects.

            <details>
               <summary>Examples:</summary>

            Development to test effort ratio in a previous project was 3:2, and the current project has a development effort of 600 person-days, the test effort can be estimated as 400 person-days.

            </details>

        - **Extrapolation:** This technique uses data from the current project to estimate future activities.

            <details>
               <summary>Examples:</summary>

            Team completed 80 story points in the first sprint, they might estimate that they can complete 80 story points in the next sprint as well.

            </details>

    2. **Expert-Based Estimation:**

    - **Wide Band Delphi:** In this iterative technique, people make experience-based estimations in isolation. The results are collected, and if there are significant deviations, the experts discuss their estimations and make new estimates based on the feedback. This process is repeated until a consensus is reached.

    - **Three Point Estimation:** This technique uses three estimates to define an approximate range for an activity's cost: Most Likely (M), Optimistic (O), and Pessimistic (P). The expected cost E.

        <details>
           <summary>Syntax:</summary>

        - `E` is the expected duration
        - `O` is the optimistic duration (the shortest time in which the task can be completed)
        - `M` is the most likely duration (the completion time having the highest probability)
        - `P` is the pessimistic duration (the longest time the task might take, assuming everything goes wrong)

        `E = (O + 4M + P) / 6`

        </details>

        <details>
           <summary>Examples:</summary>

        - Optimistic duration `O` = 3 days (if everything goes perfectly)

        - Most likely duration `M` = 5 days (the most probable duration considering normal problems and delays)

        - Pessimistic duration `P` = 9 days (if many issues are found during testing)

        - **Answer:** `E = (3 + 4*5 + 9) / 6 = 5.33 days`

        </details>

    </details>

8. **Communication Plan:**

    - **Forms and Frequency of Communication:** Define how and when communication will occur among team members and stakeholders.
    - **Documentation Templates:** Specify the templates to be used for documentation and reporting.

9. **Budget:**

    - **Budget Allocation:** Detail the budget allocated for testing activities.
    - **Cost Estimates:** Provide cost estimates for resources, tools, and other expenses related to testing.

10. **Approval:**

- **Sign-off by Stakeholders:** Obtain approval and sign-off from key stakeholders to validate the test plan.

</details>

## Test Monitoring and Control

**Explanation:**

Test Monitoring and Control are critical components of the test management process. They ensure that the testing activities are progressing as planned and help in identifying any deviations from the plan.

<details>
    <summary>Overview:</summary>

1. **Test Monitoring:**
    - Test monitoring involves the continuous observation and measurement of the testing process. It helps in tracking the progress of testing activities against the planned schedule and budget.
    - Monitoring includes keeping an eye on various factors such as cost, time, effort, and resources. It ensures that the testing process is on track and any issues are identified early.
    - The primary goal of test monitoring is to provide visibility into the testing process and ensure that the project is progressing as expected.

2. **Test Control:**
    - Test control involves taking corrective actions based on the information gathered from test monitoring. When deviations from the plan are observed, appropriate control actions are implemented to address these deviations.
    - Control actions can include reprioritizing tests, reallocating resources, adjusting schedules, or modifying test plans. These actions help in bringing the testing process back on track.
    - Test control ensures that the testing objectives are met and the quality of the product is maintained.

3. **Test Metrics:**
    - Test metrics are quantitative measures used to assess various aspects of the testing process. They provide valuable insights into the effectiveness and efficiency of testing activities.
    - Metrics can include project progress metrics (test completion, resource utilization), test progress metrics (test case implementation progress, test execution time), product quality metrics (defect density, response time).
    - By analyzing these metrics, test managers can make informed decisions, identify areas for improvement, and ensure that the testing process aligns with the project goals.

</details>

## Configuration Management

**Explanation:**

Systematic process for maintaining consistency of a product's requirements. In the context of software testing, configuration management ensures that all test artifacts and related items are properly managed and controlled.

<details>
    <summary>Overview:</summary>

1. **Unique Identification:** Every item involved in the testing process, such as test cases, test scripts, test data, and test environments, must have a unique identifier. This helps in tracking and managing these items effectively.

2. **Version Control:** Managing changes to test artifacts. It involves keeping track of different versions of each item, ensuring that changes are documented, and previous versions can be retrieved if necessary. This helps in maintaining the integrity of the testing process.

3. **Change Management:** Involves controlling and documenting changes to test artifacts. Any modifications to test cases, test scripts, or other items must go through a formal process to ensure that changes are reviewed, approved, and tracked.

4. **Traceability:** Traceability ensures that all test artifacts are linked to their related requirements, design documents, and other relevant items. This helps in understanding the relationships between different items and ensures that all requirements are covered by test cases.

5. **History of Revisions:** Maintaining a history of revisions allows teams to track changes made to test artifacts over time. This includes documenting what changes were made, who made them, and why they were made. This historical information is valuable for audits and for understanding the evolution of the testing process.

</details>

## Defect Management

**Explanation:**

Defect management is the process of managing defects within the software testing lifecycle (STLC). It includes activities and artifacts involved in identifying, documenting, and resolving defects.

<details>
    <summary>Overview:</summary>

1. **What is a Defect?** A defect is a deviation from the expected result or requirement, often referred to as an anomaly.

2. **Defect Reporting:** Communication of defect reports (also known as bug reports) is essential for ensuring that stakeholders are aware of the testing status and any issues that may arise. Different stakeholders may require different types of information, so reports should be tailored accordingly. Defect reports should include details such as the number of defects identified, their severity, status, and any trends observed.

3. **Defect Management Process:**

    - **Defect Identification:** Finding defects in the software.
    - **Defect Logging:** Documenting the identified defects.
    - **Defect Triage:** Prioritizing and categorizing defects.
    - **Defect Assignment:** Assigning defects to the appropriate team members for resolution.
    - **Defect Resolution:** Fixing the defects.
    - **Defect Verification:** Verifying that the defects have been fixed.
    - **Defect Closure:** Closing the defects once they are resolved and verified.

</details>

## Test Reporting

**Explanation:**

Test reporting involves tracking the progress and testing activities, and communicating testing status to stakeholders.

<details>
    <summary>Overview:</summary>

1. **Test Progress Report:** The Test Summary Report is a comprehensive document that provides an overall summary of the testing activities and outcomes. It is typically prepared at the end of the testing phase or project and serves as a formal record of the testing effort. These reports are generated regularly (daily, weekly) and include details such as the test period, progress made, notable deviations, impediments, test metrics, new and changed risks, and plans for the next period.

2. **Test Summary Report:** Test summary reports, also known as test completion reports, are prepared at the end of a project, test level, or test type. They summarize the testing activities and results, providing a comprehensive overview of the testing process. The purpose of test summary reports is to provide stakeholders with a detailed account of the testing activities and outcomes.

3. **Communication:** Communication of test reports is essential for ensuring that stakeholders are aware of the testing status and any issues that may arise. Different stakeholders may require different types of information, so reports should be tailored accordingly.

</details>

## Testware Management

**Explanation:**

Refers to a collection of testing-related artifacts, including documents, tools, scripts, and other items used or produced in the testing process.
