<!-- markdownlint-disable MD033 -->
# Content of Table

- [Test Management](#test-management)
  - [Test Planning](#test-planning)
    - [Test Pyramid](#test-pyramid)
    - [Risk Management in Testing](#risk-management-in-testing)
    - [Risk Response Strategies](#risk-response-strategies)
    - [Risk Management Tools and Techniques](#risk-management-tools-and-techniques)
    - [Entry Criteria and Exit Criteria](#entry-criteria-and-exit-criteria)
    - [Test Estimation](#test-estimation)
    - [Test Case Prioritization](#test-case-prioritization)
  - [Test Monitoring and Control](#test-monitoring-and-control)

## Test Management

Test management is a practice in software development that involves the planning, development, execution, and analysis of software tests. It includes tracking and reporting on test execution status, managing test data, maintaining test case documentation.

<details>
    <summary>Key Concepts:</summary>

- **Test case creation and management**
  - Define and document test cases.
  - Organize test cases into test suites.
  - Maintain version control of test cases.

- **Test Execution and Tracking**
  - Schedule and execute test cases.
  - Track test execution status.
  - Record test results and logs.

- **Integration with Bug Tracking Tools**
  - Link test cases to bug reports.
  - Create bug reports from failed tests.
  - Track the status of bugs and their resolution.

- **Reporting and Metrics**
  - Generate test execution reports.
  - Analyze test coverage and defect density.
  - Monitor test progress.

- **Collaboration Among Team Members**
  - Share test cases and results with the team.
  - Collaborate on test case development and execution.
  - Communicate issues

</details>

### Test Planning

**Explanation:**

Test Planning It involves creating a detailed document that outlines the strategy and approach for testing a software product. This document serves as a blueprint for the entire testing process, ensuring that all aspects of testing are well-organized and systematically executed.

<details>
    <summary>Key Concepts:</summary>

1. **Test Objectives:**
    - Define what you want to achieve with your testing.
    - Set clear, measurable, and realistic goals.
    - Align these goals with the overall objectives of the software development project.

2. **Test Methods(types of testing):**
    - Unit Testing
    - Integration Testing
    - System Testing
    - Acceptance Testing

3. **Resource Planning:**
    - Testing team
    - Tools
    - Testing environment

4. **Schedule and Estimation:** This involves estimating the time it will take to complete each task in the testing process and creating a schedule for the tasks.

5. **Deliverables(Outputs of the testing process):**
    - Test Plan
    - Test Cases
    - Test Scripts
    - Test Reports

6. **Risk Analysis:**
    - Identify potential risks in the testing process.
    - Develop a plan to mitigate these risks.

7. **Test Coverage:**
    - Measure the amount of testing done by a set of tests.
    - Determine which parts of the program are executed during testing.
    - Ensure all branches of conditional statements are tested.

8. **Traceability Matrix:**
    - Connect two important documents, typically the Software Requirements Specification (SRS) and the Test Plan.
    - Ensure all requirements are covered by test cases.
    - Track project needs and verify they are being met.

9. **Test Environment:**
    - Define the hardware and software environment for test execution.
    - Include any additional software or tools required for testing.

</details>

<details>
    <summary>Examples:</summary>

- [Example: Test Plan](https://drive.google.com/drive/folders/1YpOM3AM-UVPRoFtmtZq2rziA-9x_76Wq)

</details>

### Test Pyramid

**Explanation:**

The Test Pyramid idea is for a large number of low-level unit tests, a smaller number of integration tests, and an even smaller number of end-to-end tests.

<details>
    <summary>Key Concepts:</summary>

1. **Unit Testing:** At the base of the pyramid, these tests are focused on individual components or units of a software system.

2. **Integration Testing:** In the middle of the pyramid, these tests are focused on the interaction between different components of a software system.

3. **System Testing:** Near the top of the pyramid, these tests are focused on the system as a whole.

4. **Acceptance Testing:** At the top of the pyramid, these tests are focused on the suitability of the system for business use.

</details>

### Risk Management in Testing

**Explanation:**

Risk Management in Testing is a proactive approach to identify, assess, and mitigate risks that could negatively impact the software testing process and the quality of the final product.

<details>
    <summary>Key Concepts:</summary>

1. **Understanding Risk in Testing:** Risk in testing refers to the potential for a software product to fail to meet its requirements.

2. **Risk Identification:** Identify potential risks that could impact the software testing process.
    - **Technical Risks:** Software bugs, system failures.
    - **Process Risks:** Delays, resource shortages.
    - **External Risks:** Changes in market conditions, regulatory requirements.

3. **Risk Assessment:** Once risks have been identified, they need to be assessed in terms of their likelihood of occurrence and their potential impact.
    - **Risk Likelihood:** This refers to the probability that a particular risk will occur. It can be assessed based on past experience, statistical analysis.

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

</details>

### Risk Response Strategies

**Explanation:**

Risk Response Strategies are the actions taken to address the risks identified during the risk assessment process. These strategies are designed to either reduce the likelihood of the risk occurring.

<details>
    <summary>Syntax:</summary>

- If **(risk event)** occurs, it could lead to **(consequence/s)**. In response to this risk, we could employ the **(Risk Response Strategy)** by **(specific actions)**.

</details>

<details>
    <summary>Key Concepts:</summary>

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

### Risk Management Tools and Techniques

**Explanation:**

Risk Management Tools and Techniques are methodologies used to identify, assess, and mitigate risks in software testing.

<details>
    <summary>Syntax:</summary>

- To manage risks in **(software testing scenario)**, we could use **(specific Risk Management Tool or Technique)** to **(identify/assess/mitigate)** risks.

</details>

<details>
    <summary>Key Concepts:</summary>

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

### Entry Criteria and Exit Criteria

**Explanation:**

Entry Criteria and Exit Criteria are key concepts in software testing that define when testing should start **(Entry Criteria)** and when it should end **(Exit Criteria)**.

<details>
    <summary>Key Concepts:</summary>

1. **Entry Criteria:** These are the conditions that must be met before testing can begin. They might include requirements like the completion of certain development activities, the availability of the test environment and test data, or completion of documentation.

    <details>
       <summary>Examples:</summary>

      - All development tasks have been completed and the code has been merged into the main branch.

      - The application has been successfully deployed in the testing environment.

      - All test cases have been reviewed and approved by the project manager.

      - Test data required for testing has been created and is available in the testing environment.

      - The testing team has been trained on the new features and changes in the application.

    </details>

2. **Exit Criteria:** These are the conditions that must be met before testing can be considered complete. This include requirements like the achievement of are test coverage level, the resolution of all high-priority defects, or the completion of all planned test cases.

    <details>
       <summary>Examples:</summary>

      - All test cases have been executed.

      - All critical and high severity defects have been fixed and retested.

      - The testing team has completed a final review and approved the testing results.

      - The stakeholders have accepted the final testing report and given approval for the release.

    </details>

</details>

### Test Estimation

**Explanation:**

Test Estimation is the process of predicting the most the most useless thing. This includes the time, resources, and cost associated with testing activities. Various techniques can be used to estimate testing effort.

<details>
    <summary>Key Concepts:</summary>

1. **Three Point Estimation:** This technique uses three estimates to define an approximate range for an activity's cost: Most Likely (M), Optimistic (O), and Pessimistic (P). The expected cost E.

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

2. **Use Case Point Method:** This method is based on the use cases of the system. The number of use cases is counted and then adjusted based on the complexity of the system. The formula for this method is `UCP`.

    <details>
       <summary>Syntax:</summary>

    - `UCP (Use Case Points)` This is the final metric that represents the estimated effort for the project.

    - `UUCW (Unadjusted Use Case Weight)` This is the sum of the weights of all use cases in the project. Each use case is assigned a weight based on its complexity (simple, average, or complex).

    - `TCF (Technical Complexity Factor)` This is an adjustment factor that accounts for the technical complexity of the project. It is calculated based on various technical factors such as performance, security, and usability.

    - `ECF (Environmental Complexity Factor)` This is an adjustment factor that accounts for the environmental factors of the project. It is calculated based on factors such as team experience, tools, and processes.

    `UCP = UUCW * TCF * ECF`

    </details>

    <details>
       <summary>Examples:</summary>

    - `Unadjusted Use Case Weight UUCW` = Summing the weights of all use cases. For example, if we have 10 simple use cases (weight 5 each), 5 average use cases (weight 10 each), and 2 complex use cases (weight 15 each)
        - `UUCW = (10 * 5) + (5 * 10) + (2 * 15) = 50 + 50 + 30 = 130`

    - `Technical Complexity Factor TCF` = 1.2 (based on the technical difficulty of the project, such as the complexity of the code or the technology used)

    - `Environmental Complexity Factor ECF` = 1.9 (based on the project's environmental factors, such as the experience of the testing team, the quality of the testing tools)

    - **Answer:** `UCP = 130 * 0.8 * 1.1 = 140.4`

    This means the estimated effort for the project, based on the use case points, is 140.4 units. These units can be translated into other mathematic unit (hours, day, people), depending on the context of the project.

    </details>

3. **Function Point Analysis (FPA):** This method is based on the functionality provided by the system. It considers the number and complexity of inputs, outputs, inquiries, interfaces, and data files.

    <details>
       <summary>Syntax:</summary>

    - `FP (Function Points)` This is the final metric that represents the functionality provided by the system.

    - `Complexity Weight` This is a predefined weight assigned to each type of element (input, output, inquiry, interface, data file) based on its complexity.

    - `Number of Elements` This is the count of each type of element in the system.

    `FP = ∑(Complexity Weight * Number of Elements)`

    </details>

    <details>
       <summary>Examples:</summary>

    1. **Simple Inputs:** These are the basic pieces of information that the system takes in. For example, in a calculator app, a simple input might be the numbers you want to add or subtract.

    2. **Medium Outputs:** These are the results that the system produces which are of medium complexity. For example, in a weather app, a medium output might be the forecast for the next week, which requires processing data from multiple sources.

    3. **Complex Inquiries:** These are complicated questions or requests that the system needs to handle. For example, in a database system, a complex inquiry might be a query that involves multiple tables and conditional logic.

    4. **Interface:** This is the point where two systems meet and interact. For example, in a web application, the interface could be the API that allows the front-end and back-end to communicate.

    5. **Data Files:** These are files that the system uses to store or retrieve data. For example, in a content management system, a data file might be a document or image uploaded by a user.

    - 5 simple inputs (complexity weight = 1)

    - 10 medium outputs (complexity weight = 2)

    - 2 complex inquiries (complexity weight = 3)

    - 1 interface (complexity weight = 4)

    - 3 data files (complexity weight = 5)

    - **Answer:** `FP = (1*5) + (2*10) + (3*2) + (4*1) + (5*3) = 5 + 20 + 6 + 4 + 15 = 50`

    </details>

4. **Test Point Analysis (TPA):** This method is similar to FPA but is specifically designed for estimating testing effort. It considers the size of the system, the quality of the system, and the productivity of the test team.

    <details>
       <summary>Syntax:</summary>

    - `TP` is the Test Points, the result of the calculation and the estimate of the testing effort required.

    - `Complexity Weight` is a measure of the complexity of each functional element to be tested.

    - `Number of Elements` is the total number of such elements.

    - `Quality Factor` is a measure of the quality of the software, such as the number of defects.

    - `Productivity Factor` Productivity of the testing team.

    `TP = ∑(Complexity Weight * Number of Elements) * Quality Factor * Productivity Factor`

    </details>

    <details>
       <summary>Example:</summary>

    - 5 simple elements (complexity weight = 1)

    - 10 medium elements (complexity weight = 2)

    - 2 complex elements (complexity weight = 3)

    - Quality Factor = 0.8 (based on the number of defects found in previous testing cycles)

    - Productivity Factor = 1.2 (based on the productivity of the testing team)

    - **Answer:** `FP = (1*5) + (2*10) + (3*2) = 5 + 20 + 6 = 31`

    </details>

</details>

### Test Case Prioritization

**Explanation:**

Test Case Prioritization is the process of ranking the test cases in order of their importance.

<details>
    <summary>Key Concepts:</summary>

1. **Criteria for Test Case Prioritization:** Test cases can be prioritized based on various factors.

- **Business Impact:** Test cases that cover functionality with high business impact should be given higher priority.

    <details>
       <summary>Examples:</summary>

    e-commerce website. The website has various features like user registration, product browsing, adding items to the cart, and making a purchase.

    1. **Users can add items to their cart and view their cart:** This is the first step in the purchasing process. If users can't add items to their cart or view their cart, they won't be able to make a purchase.

    </details>

- **Risk Level:** Test cases that cover high-risk areas of the application should be given higher priority.

    <details>
       <summary>Examples:</summary>

    The application has various features like viewing account balance, transferring money between accounts, and changing account settings.

    1. **Users can enter the amount they want to transfer:** This is the first step in the money transfer process. If users can't enter an amount, they won't be able to initiate a transfer.

    </details>

- **Frequency of Use:** Test cases that cover frequently used functionality should be given higher priority.

    <details>
       <summary>Example:</summary>

    Music streaming application. The application has various features like searching for songs, creating playlists, playing songs, and sharing playlists with friends.

    1. **Users can select a song to play:** This is the first step in the music playing process. If users can't select a song, they won't be able to listen to music.

    </details>

- **Complexity:** Test cases that cover complex functionality should be given higher priority, as these areas are more prone to defects.

    <details>
       <summary>Example:</summary>

    The application has various features like searching for flights, selecting flights, entering passenger details, making a payment, and receiving a booking confirmation.

    1. **Users can enter their departure and arrival locations:** This is the first step in the flight search process. If users can't enter these details, they won't be able to search for flights.

    </details>

- **Dependency:** Test cases that cover functionality with a lot of dependencies should be given higher priority.

    <details>
       <summary>Example:</summary>

    The application has various features like creating tasks, assigning tasks to team members, tracking task progress, and generating project reports.

    1. **The application correctly includes all tasks in the report:** This is the first step in the report generation process. If tasks are missing from the report, the report will not be accurate.

    </details>

</details>

## Test Monitoring and Control

**Explanation:**

Test Monitoring and Control is involves tracking the progress and testing activities, and communicating testing status to stakeholders.

<details>
    <summary>Key Concepts:</summary>

1. **Test Reporting:** Test reports provide information on the progress of testing, system quality, and any risks or issues identified.

    <details>
       <summary>Key Concepts:</summary>

    - **Bug Report:** Provides detailed information about each bug found during testing.

    - **Test Case Report:** Provides detailed information about each test case.

    - **Test Summary Report:** provides an overview of the testing activities.

    </details>

    <details>
       <summary>Examples:</summary>

    - [Example: Test Reporting](https://drive.google.com/file/d/1RRpEdycF14DR8FqvSk6qwz_y5ALvWvwu/view?usp=sharing)

    <details>

2. **Incident Management:** This is the process of managing the defects found during testing. Ensures that defects are properly documented, tracked, and resolved.

3. **Configuration Management:** This is the process of managing and controlling the versions of the software under test, the test environment, and the testware (test cases, test scripts, test data).

    <details>
       <summary>Key Concepts:</summary>

    - **Software under test:** Refers to the specific version of the software that is being tested. Ensures that all testers are working with the same version of the software.

    - **Test environment:** Configuration management guarantees that the test environment is correctly and consistently set up for all testers. Includes hardware, software, network configurations

    - **Testware:** Refers to the artifacts generated during the testing process. Includes test cases, test scripts, and test data.

    </details>

    <details>
       <summary>Examples:</summary>

    - [Example: STLC](https://drive.google.com/file/d/1VAwjdRe9oz5pSBVZeZpkJGEOM4Z2ZnXw/view?usp=sharing)

    </details>

</details>
