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

Test management is a practice in software development that involves the planning, development, execution, and analysis of software tests. It includes tracking and reporting on test execution status, managing test data, maintaining test case documentation, and ensuring the quality of software products.

- Test case creation and management
- Test execution and tracking
- Integration with bug tracking tools
- Reporting and metrics
- Collaboration among team members

### Test Planning

**Explanation:**

Phase in the software testing life cycle that involves the documentation of the approach needed to test a software product.

**Key Concepts:**

1. **Test Objectives:** These are what you want to achieve with your testing. They should be clear goals that you can measure and realistically reach. These goals should also match up with what you're trying to achieve with your software development.

2. **Test Methods:** These are the types of testing that will be conducted on the software, such as unit testing, integration testing, system testing, and acceptance testing.

3. **Resource Planning:** This involves determining and acquiring the necessary resources for the testing process, including the testing team, tools, and testing environment.

4. **Schedule and Estimation:** This involves estimating the time it will take to complete each task in the testing process and creating a schedule for the tasks.

5. **Deliverables:** These are the outputs of the testing process, such as the test plan, test cases, test scripts, and test reports.

6. **Risk Analysis:** This involves identifying potential risks in the testing process and creating a plan to mitigate those risks.

7. **Test Coverage:** This is a measure of the amount of testing done by a set of tests. It includes information about which parts of a program are actually executed when running the test suite in order to determine which branches of conditional statements have been taken.

8. **Traceability Matrix:** This is a tool that connects two important documents, typically the Software Requirements Specification (SRS) and the Test Plan. It ensures all requirements are covered by test cases, helping to track project needs and verify they are being met.

9. **Test Environment:** It includes the hardware and software environment in which tests will be executed, and any other software or tools that will be used for testing purposes.

**Example:**

- [Example: Test Plan](https://docs.google.com/document/d/1sYmLNT080yBU9CUZUcCcPY2frQwonLCC/edit?usp=sharing&ouid=107308472577516163164&rtpof=true&sd=true)

### Test Pyramid

**Explanation:**

The Test Pyramid idea is for a large number of low-level unit tests, a smaller number of integration tests, and an even smaller number of end-to-end tests.

**Key Concepts:**

1. **Unit Testing:** At the base of the pyramid, these tests are focused on individual components or units of a software system.

2. **Integration Testing:** In the middle of the pyramid, these tests are focused on the interaction between different components of a software system.

3. **System Testing:** Near the top of the pyramid, these tests are focused on the system as a whole.

4. **Acceptance Testing:** At the top of the pyramid, these tests are focused on the suitability of the system for business use.

### Risk Management in Testing

**Explanation:**

Risk Management in Testing is a proactive approach to identify, assess, and mitigate risks that could negatively impact the software testing process and the quality of the final product.

**Key Concepts:**

1. **Understanding Risk in Testing:** Risk in testing refers to the potential for a software product to fail to meet its requirements.

2. **Risk Identification:** It involves identifying potential risks that could impact the software testing process. This could include technical risks (like software bugs or system failures), process risks (like delays or resource shortages), and external risks (like changes in market conditions or regulatory requirements).

3. **Risk Assessment:** Once risks have been identified, they need to be assessed in terms of their likelihood of occurrence and their potential impact. This helps to prioritize risks and to develop appropriate mitigation strategies.

    - **Risk Likelihood:** This refers to the probability that a particular risk will occur. It can be assessed based on past experience, statistical analysis, or expert judgment.

      **Syntax:**

      **(Event that has an effect on objectives)** caused by **(cause/s)** resulting in **(consequence/s)**

      **Example 1:**

      ```text
      Suppose you're planning an outdoor event in a city where it rains about 10 days each month. 

      The likelihood of this risk can be calculated based on past weather data. If it rains 10 days out of 30 in a typical month, then the likelihood of it raining on any given day (and thus potentially disrupting your event) is 10/30, or 33.3%.

      **Example 2:**

      Company uses a specific type of software that has had 5 security breaches reported in the past year. The risk here is that your company's data could be compromised due to a security breach in this software.

      If there were 5 breaches in the past 365 days, the likelihood of a breach on any given day is 5/365, or approximately 1.37%. This means there's a 1.37% chance that a security breach could occur on any given day, based on past data.

    - **Risk Impact:** This refers to the potential consequences if the risk were to occur. It can be assessed in terms of the potential damage to the project's objectives, such as cost overruns, delays, or reduced quality.

      **Syntax:**

      - If **(risk event)** occurs, it could lead to **(consequence/s)**.

      **Example 1:**

      You're managing a construction project for a new building. One potential risk could be a delay in the delivery of essential building materials.

      Cost Overruns: You might have to pay extra for expedited shipping or for buying materials from a different, more expensive supplier.

      Delays: The construction schedule could be pushed back, leading to a later completion date. This could have further impacts, such as penalties for late completion or loss of revenue if the building was intended to be rented or sold.

      Reduced Quality: If you're forced to use different materials due to the delay, the quality of the building might be compromised.

      **Example 2:**

      Suppose you're managing a software development project and one potential risk is that a key developer might leave the team before the project is completed.

      Delays: The departure of a key team member could slow down the development process, leading to a delay in the project timeline.

      Increased Costs: You might need to hire a new developer or pay overtime to other team members to cover the work. The cost of recruiting and training a new developer can also add to the project costs.

      Reduced Quality: If the new developer or the remaining team members are not as skilled or knowledgeable as the departing developer, the quality of the software could be compromised.

      Knowledge Loss: The departing developer might have critical knowledge about the project that is not fully documented or known by the rest of the team. This could lead to further delays and mistakes.

### Risk Response Strategies

**Explanation:**

Risk Response Strategies are the actions taken to address the risks identified during the risk assessment process. These strategies are designed to either reduce the likelihood of the risk occurring.

**Syntax:**

- If **(risk event)** occurs, it could lead to **(consequence/s)**. In response to this risk, we could employ the **(Risk Response Strategy)** by **(specific actions)**.

**Key Concepts:**

1. **Risk Acceptance:** This is a risk response strategy where the risk is accepted without any further actions to reduce its impact or likelihood. This strategy is often used for low-priority risks, where the cost of mitigation would exceed the potential impact of the risk.

    **Example:**

    - If **minor software bug that does not affect the functionality or user experience** occurs, it could lead to **minor inconsistencies in the user interface**. Given the low impact of this risk and the potentially high cost of fixing every minor bug, we could employ the **Risk Acceptance strategy** and accept this risk without taking further action to mitigate it.

2. **Risk Mitigation:** This is a risk response strategy where actions are taken to reduce the likelihood of the risk occurring or to reduce its impact if it does occur.

    **Example:**

    - If **critical software component is complex and prone to errors** occurs, it could lead to **system instability or crashes**. In response to this risk, we could employ the Risk **Mitigation strategy** by simplifying the component, writing additional tests to catch potential errors, and implementing additional security measures to prevent unauthorized access.

3. **Risk Transfer:** The risk is transfered to a third party. This could involve purchasing insurance, outsourcing a risky part of the project, or using contractual agreements to shift the risk to another party.

    **Example:**

    - If **the development of a complex and specialized software module** occurs, it could lead to **delays in the project and potential errors due to lack of expertise**. To manage this risk, we could use the **Risk Transfer strategy** by outsourcing the development of this module to a third-party vendor with proven expertise in this area.

4. **Contingency Plan:** This is a backup plan that tells you what to do if something goes wrong.

    **Example:**

    - If **server outage** occurs, it could lead to **downtime and loss of user data**. A contingency plan for this risk could involve having a backup server ready to take over, and a data recovery plan in place to restore any lost data. This is an example of the **Contingency Plan strategy**.

### Risk Management Tools and Techniques

**Explanation:**

Risk Management Tools and Techniques are methodologies used to identify, assess, and mitigate risks in software testing. They help to prioritize testing efforts.

**Syntax:**

- To manage risks in **(software testing scenario)**, we could use **(specific Risk Management Tool or Technique)** to **(identify/assess/mitigate)** risks.

**Key Concepts:**

1. **Risk-Based Testing:** This is a testing approach where the features and functions to be tested are prioritized based on risk. The risk could be related to functional, non-functional, or even structural aspects of the software.

    **Example:**

    - To manage risks in **testing a new feature in our application**, we could use **Risk-Based Testing** to **identify and assess** risks. This would help to prioritize testing efforts on this new feature, ensure that it is thoroughly tested before release, and manage risks effectively throughout the testing process.

2. **Product Risk Management:** This involves identifying, assessing, and managing risks related to the software product itself. This could include functional defects, performance issues, or security vulnerabilities.

    **Example:**

    - Developing **healthcare management software**, risks like **data breaches, system downtime, or incorrect dosage calculations**. We can manage these risks using Product **Risk Management techniques**. This could involve focusing on high-risk areas with **risk-based testing**, thorough **code reviews** for potential security issues, and **automated testing** for performance standards. For functions like dosage calculations, we could add extra validation checks and thorough **unit testing**.

3. **Project Risk Management:** Involves identifying, assessing, and managing risks related to the process of developing and testing the software. This could include risks like delays, cost overruns, or resource shortages.

    **Example:**

    - During the development of a new **customer relationship management system**, potential risks such as **delays due to unforeseen technical challenges, cost overruns due to changes in requirements, or resource shortages due to team members leaving**. To manage these project risks, we could use **Project Risk Management** techniques. This involve using **project management tools** like Microsoft Project to monitor project progress, implementing **resource allocation strategies** to ensure efficient use of personnel and budget, and developing a **contingency plan** to handle potential delays or resource shortages, such as having backup personnel or additional funding sources.

### Entry Criteria and Exit Criteria

**Explanation:**

Entry Criteria and Exit Criteria are key concepts in software testing that define when testing should start **(Entry Criteria)** and when it should end **(Exit Criteria)**.

**Key Concepts:**

1. **Entry Criteria:** These are the conditions that must be met before testing can begin. They might include requirements like the completion of certain development activities, the availability of the test environment and test data, or completion of documentation.

      **Example:**

      - All development tasks have been completed and the code has been merged into the main branch.

      - The application has been successfully deployed in the testing environment.

      - All test cases have been reviewed and approved by the project manager.

      - Test data required for testing has been created and is available in the testing environment.

      - The testing team has been trained on the new features and changes in the application.

2. **Exit Criteria:** These are the conditions that must be met before testing can be considered complete. This include requirements like the achievement of are test coverage level, the resolution of all high-priority defects, or the completion of all planned test cases.

      **Example:**

      - All test cases have been executed.

      - All critical and high severity defects have been fixed and retested.

      - The testing team has completed a final review and approved the testing results.

      - The stakeholders have accepted the final testing report and given approval for the release.

### Test Estimation

**Explanation:**

Test Estimation is the process of predicting the most the most useless thing. This includes the time, resources, and cost associated with testing activities. Various techniques can be used to estimate testing effort.

**Key Concepts:**

1. **Three Point Estimation:** This technique uses three estimates to define an approximate range for an activity's cost: Most Likely (M), Optimistic (O), and Pessimistic (P). The expected cost E.

    **Syntax:**

    - `E` is the expected duration
    - `O` is the optimistic duration (the shortest time in which the task can be completed)
    - `M` is the most likely duration (the completion time having the highest probability)
    - `P` is the pessimistic duration (the longest time the task might take, assuming everything goes wrong)

    `E = (O + 4M + P) / 6`

    **Example:**

    - Optimistic duration `O` = 3 days (if everything goes perfectly)

    - Most likely duration `M` = 5 days (the most probable duration considering normal problems and delays)

    - Pessimistic duration `P` = 9 days (if many issues are found during testing)

    - **Answer:** `E = (3 + 4*5 + 9) / 6 = 5.33 days`

2. **Use Case Point Method:** This method is based on the use cases of the system. The number of use cases is counted and then adjusted based on the complexity of the system. The formula for this method is `UCP`.

    **Syntax**

    `UCP = UUCW * TCF * ECF`

    **Example:**

    - Unadjusted Use Case Weight `UUCW` = 15 (based on the complexity of the use cases to be tested)

    - Technical Complexity Factor `TCF` = 0.8 (based on the technical difficulty of the project, such as the complexity of the code or the technology used)

    - Environmental Complexity Factor `ECF` = 1.1 (based on the project's environmental factors, such as the experience of the testing team, the quality of the testing tools)

    - **Answer:** `UCP = 15 * 0.8 * 1.1 = 13.2`

3. **Function Point Analysis (FPA):** This method is based on the functionality provided by the system. It considers the number and complexity of inputs, outputs, inquiries, interfaces, and data files.

    **Syntax:**

    `FP = ∑(Complexity Weight * Number of Elements)`

     **Example:**

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

4. **Test Point Analysis (TPA):** This method is similar to FPA but is specifically designed for estimating testing effort. It considers the size of the system, the quality of the system, and the productivity of the test team.

    **Syntax:**

    - `TP` is the Test Points, the result of the calculation and the estimate of the testing effort required.

    `Complexity Weight` is a measure of the complexity of each functional element to be tested.

    - `Number of Elements` is the total number of such elements.

    - `Quality Factor` is a measure of the quality of the software, such as the number of defects.

    - `Productivity Factor` is a measure of the productivity of the testing team.

    `TP = ∑(Complexity Weight * Number of Elements) * Quality Factor * Productivity Factor`

    **Example:**

    - 5 simple elements (complexity weight = 1)

    - 10 medium elements (complexity weight = 2)

    - 2 complex elements (complexity weight = 3)

    - Quality Factor = 0.8 (based on the number of defects found in previous testing cycles)

    - Productivity Factor = 1.2 (based on the productivity of the testing team)

    - **Answer:** `FP = (1*5) + (2*10) + (3*2) = 5 + 20 + 6 = 31`

### Test Case Prioritization

**Explanation:**

Test Case Prioritization is the process of ranking the test cases in order of their importance. Prioritization can be based on various factors such as the criticality of the functionality, the likelihood of failure, the impact of failure, and the cost of testing.

**Key Concepts:**

1. **Criteria for Test Case Prioritization:** Test cases can be prioritized based on various factors.

    - **Business Impact:** Test cases that cover functionality with high business impact should be given higher priority.

      **Example:**

      e-commerce website. The website has various features like user registration, product browsing, adding items to the cart, and making a purchase.

      1. **Users can add items to their cart and view their cart:** This is the first step in the purchasing process. If users can't add items to their cart or view their cart, they won't be able to make a purchase.

      2. **Users can proceed to checkout from their cart:** This is the next step in the purchasing process. If users can't proceed to checkout, they won't be able to complete their purchase.

      3. **Users can enter their shipping and payment information:** This is a crucial step in the purchasing process. If users can't enter their shipping and payment information, they won't be able to complete their purchase.

      4. **Users receive a confirmation after making a purchase:** This is important for user satisfaction and trust. If users don't receive a confirmation after making a purchase, they might be unsure whether their purchase was successful.

      5. **The inventory is updated after a purchase is made:** This is important for maintaining accurate inventory levels. However, it's less critical to the user's ability to make a purchase, so it's listed last.

    - **Risk Level:** Test cases that cover high-risk areas of the application should be given higher priority.

      **Example:**

      The application has various features like viewing account balance, transferring money between accounts, and changing account settings.

      1. **Users can enter the amount they want to transfer:** This is the first step in the money transfer process. If users can't enter an amount, they won't be able to initiate a transfer.

      2. **Users can select the account they want to transfer money to:** This is the next step in the money transfer process. If users can't select an account, they won't be able to complete the transfer.

      3. **The application correctly transfers the entered amount to the selected account:** This is a crucial step in the money transfer process. If the application doesn't correctly transfer the amount, it could lead to financial loss.

      4. **The application updates the account balances correctly after a transfer:** This is important for maintaining accurate account balances. If the application doesn't update the balances correctly, it could lead to confusion or financial issues.

      5. **The application doesn't allow transfers that would result in a negative account balance:** This is important for preventing overdrafts. However, it's less critical to the basic functionality of money transfer, so it's listed last.

    - **Frequency of Use:** Test cases that cover frequently used functionality should be given higher priority.

        **Example:**

        Music streaming application. The application has various features like searching for songs, creating playlists, playing songs, and sharing playlists with friends.

        1. **Users can select a song to play:** This is the first step in the music playing process. If users can't select a song, they won't be able to listen to music.

        2. **The application plays the selected song:** This is the core functionality of the app. If the application doesn't play the selected song, it would significantly impact the user experience.

        3. **Users can pause, resume, skip, and replay the song:** These are important controls for the user while listening to music. If these controls don't work, it would affect the user's ability to interact with the app.

        4. **The application correctly displays the song's title, artist, and album:** This is important for the user's understanding and enjoyment of the music. However, it's less critical to the basic functionality of playing music, so it's listed after the other test cases.

        5. **The application correctly updates the song's play count each time it's played:** This is important for features like most played songs. However, it's less critical to the basic functionality of playing music, so it's listed last.

    - **Complexity:** Test cases that cover complex functionality should be given higher priority, as these areas are more prone to defects.

        **Example:**

        The application has various features like searching for flights, selecting flights, entering passenger details, making a payment, and receiving a booking confirmation.

        1. **Users can enter their departure and arrival locations:** This is the first step in the flight search process. If users can't enter these details, they won't be able to search for flights.

        2. **Users can select their departure and arrival dates:** This is the next step in the flight search process. If users can't select these dates, they won't be able to find flights that match their travel plans.

        3. **Users can specify the number of passengers and flight class:** These details are important for finding flights that can accommodate the user's travel party and meet their comfort preferences.

        4. **The application displays a list of flights that match the user's search criteria:** This is a crucial step in the flight search process. If the application doesn't display matching flights, users won't be able to proceed with booking.

        5. **The application correctly sorts and filters the search results based on user preferences:** It's less critical to the basic functionality of searching for flights, so it's listed last.

    - **Dependency:** Test cases that cover functionality with a lot of dependencies should be given higher priority.

        **Example:**

        The application has various features like creating tasks, assigning tasks to team members, tracking task progress, and generating project reports.

        1. **The application correctly includes all tasks in the report:** This is the first step in the report generation process. If tasks are missing from the report, the report will not be accurate.

        2. **The application correctly includes the assignment and progress information for each task in the report:** This is crucial for understanding the status of each task. If this information is incorrect, it could lead to misunderstandings about task progress.

        3. **The application correctly calculates and displays summary statistics in the report (like total tasks, completed tasks):** These statistics provide a high-level overview of project progress. If they're incorrect, it could mislead stakeholders.

        4. **The application allows users to filter and sort the report data:** It's less critical to the basic functionality of generating a report, so it's listed after the other test cases.

        5. **The application correctly updates the report when tasks are added, assigned, or updated:** It's less critical to the basic functionality of generating a report, so it's listed last.

## Test Monitoring and Control

**Explanation:**

Test Monitoring and Control is involves tracking the progress and quality of testing activities, making necessary adjustments to the testing process, and communicating testing status to stakeholders.

**Key Concepts:**

1. **Test Reporting:** Test reports typically include information on the progress of testing, the quality of the system under test, and any risks or issues identified. Test reporting is a key tool for test monitoring and control.

    **Key Concepts:**

    - **Bug Report:** Provides detailed information about each bug found during testing, including the bug ID, description, severity, priority, status (new, open, fixed), steps to reproduce, and any associated test cases.

    - **Test Case Report:** Provides detailed information about each test case, including the test case ID, description, expected result, actual result, pass/fail status, and any associated defects.

    - **Test Summary Report:** Provides an overview of the testing activities, including the total number of test cases, the number of test cases executed, passed, failed, and the number of defects found and fixed.

    **Example:**

    - [Example: Test Reporting](https://drive.google.com/file/d/1RRpEdycF14DR8FqvSk6qwz_y5ALvWvwu/view?usp=sharing)

2. **Incident Management:** This is the process of managing the defects found during testing.

3. **Configuration Management:** This is the process of managing and controlling the versions of the software under test, the test environment, and the testware (test cases, test scripts, test data).

    **Key Concepts:**

    - **Software under test:** This pertains to the specific version of the software that is subjected to testing.

    - **Test environment:** Configuration management guarantees that the test environment is correctly and consistently set up for all testers.

    - **Testware:** This refers to the artifacts generated during the testing process, including test cases, test scripts, and test data.

    **Example:**

    - [Example: STLC](https://drive.google.com/file/d/1VAwjdRe9oz5pSBVZeZpkJGEOM4Z2ZnXw/view?usp=sharing)
