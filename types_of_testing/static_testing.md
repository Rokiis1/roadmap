<!-- markdownlint-disable MD033 -->
# Content of Table of the Static Techniques

- [Benefits of Early and Frequent Stakeholder Feedback](#benefits-of-early-and-frequent-stakeholder-feedback)
- [Roles and Responsibilities](#roles-and-responsibilities)
- [Review Types](#review-types)
- [Review Process Activities](#review-process-activities)
- [Checklist-based reviewing](#checklist-based-reviewing)
- [Scenario-based reviewing](#scenario-based-reviewing)
- [Static Analysis](#static-analysis)
- [Success Factors for Review](#success-factors-for-review)

## Benefits of Early and Frequent Stakeholder Feedback

**Explanation:**

It helps in identifying potential quality issues early, ensuring that the product meets the stakeholders expectations, and reducing the cost and effort of fixing defects later in the development process.

<details>
    <summary>Overview:</summary>

1. **Early Communication of Quality Problems:** Allows for the identification of potential quality issues before they become significant problems. This helps in addressing issues promptly and prevents them from escalating.

2. **Prevents Misunderstandings:** Helps prevent misunderstandings about requirements and ensures that changes are understood and implemented correctly. This leads to a clearer understanding of the project goals and reduces the risk of rework.

3. **Improves Understanding:** Helps the development team improve their understanding of what they are building. It ensures that the team is aligned with the stakeholders expectations and can deliver a product that meets their needs.

4. **Prioritization:** Allows for prioritizing work items that identify risk areas early and deliver the most important features to the business first. This ensures that critical functionalities are developed and tested early in the process.

5. **Cost and Time Savings:** By identifying and addressing issues early, the cost and effort required to fix defects are significantly reduced. This leads to more efficient use of resources and helps in meeting project deadlines.

6. **Enhanced Collaboration:** Promotes better collaboration between the development team and stakeholders. Regular feedback sessions ensure that all parties are on the same page and can work together to achieve the project goals.

</details>

## Roles and Responsibilities

**Explanation:**

Various stakeholders take on specific roles and responsibilities to ensure the effectiveness of the review.

<details>
    <summary>Overview:</summary>

1. **Manager:** Decides what is to be reviewed and provides resources such as staff time for the review.

2. **Author:** The person who created the document under review and is responsible for fixing any identified issues.

3. **Moderator:** Ensures the effective running of the review meeting, including mediation, time management, and maintaining a safe review environment.

4. **Scribe:** Records all details during the review meeting, including decisions and new anomalies found.

5. **Reviewers:** Perform the review and may be project members, subject matter experts, or other stakeholders.

6. **Review Leader:** Takes overall responsibility for the review, including deciding who will be involved and organizing when and where the review will take place.

</details>

## Review Types

**Explanation:**

Reviews are a type of static testing where software documents (like requirements, design documents, and code) are examined by a person or a group of people. Different types of reviews can be used depending on the document's criticality, complexity, and other factors.

<details>
    <summary>Overview:</summary>

1. **Informal Review:**
    - Informal reviews do not follow a defined process and do not require formal documentation of defects. The main objective is to detect anomalies.
    - **Example:** A tester asks a colleague to review their test cases. This involves just two people and is often referred to as a buddy check. No formal process and typically involves just two people.

2. **Walkthrough:**
    - A walkthrough is led by the author of the document and can serve multiple objectives such as evaluating quality, building confidence, educating reviewers, gaining consensus, generating new ideas, and detecting anomalies.
    - **Unique Points:** Led by the author and individual review before the meeting is optional.
    - Reviewers might perform an individual review before the walkthrough, but this is not required. Led by the author and individual review before the meeting is optional.

3. **Technical Review:**
    - Performed by technically qualified reviewers and led by a moderator. The objective is to gain consensus and make decisions regarding technical problems, as well as to detect anomalies, evaluate quality, build confidence, and generate new ideas.
    - **Unique Points:** Conducted by technical experts and led by a moderator.
    - **Example:** A technical review of source code by subject matter experts to ensure adherence to coding standards.

4. **Inspection:**
    - The most formal type of review, following a complete formal review process. The main objective is to find the maximum number of anomalies. Other objectives include evaluating quality, building confidence, and motivating authors to improve.
    - **Unique Points:** Matrices are collected and used to improve the SDLC, including the inspection process. Entry and exit criteria, use of checklists, defined roles and responsibilities, and the author cannot act as a review leader or scribe.
    - **Example:** An inspection of a requirements document involving a structured process with a moderator, scribe, and multiple reviewers.

</details>

## Review Process Activities

**Explanation:**

Involves a series of structured activities aimed at evaluating the quality of work products. These activities help in identifying defects early, improving the quality of the product, and ensuring that it meets the stakeholders expectations.

<details>
    <summary>Overview:</summary>

1. **Planning:** The manager defines the scope, purpose, work product to be reviewed, quality characteristics to be evaluated, areas to focus on, entry and exit criteria, and the time frame for the review.

2. **Review Initiation:** The moderator ensures that everyone involved is prepared, has access to the work product, understands their roles, and has everything needed to perform the review.

3. **Individual Review:** Reviewers individually assess the quality of the work product, identify anomalies, and log their findings.

4. **Communication and Analysis:** A review meeting where reviewers present their findings, and the author addresses the questions. The scribe documents the discussion and decisions.

5. **Rework:** The author makes necessary changes based on the review meeting.

</details>

## Checklist-based reviewing

**Explanation:**

Static testing technique where reviewers use a predefined checklist to guide their review of software documents like requirements, design documents, and code.

<details>
    <summary>Overview:</summary>

1. **Systematic Review:** The use of a checklist ensures that the review is systematic and covers all important aspects of the document.

2. **Common Errors:** The checklist typically includes common errors or issues to look for.

3. **Consistency:** Checklists help ensure consistency across reviews, as all reviewers are guided by the same list of items to check.

</details>

<details>
    <summary>Examples:</summary>

- **Example Checklist for Reviewing Requirements Document**

    **Checklist Items:**

    1. **Clarity and Ambiguity:**
        - Are all requirements clearly stated without ambiguity?
        - Are terms and definitions used consistently throughout the document?

    2. **Completeness:**
        - Are all necessary requirements included?
        - Are there any missing requirements that should be addressed?

    3. **Consistency:**
        - Are there any conflicting requirements?
        - Is the terminology consistent with other related documents?

    4. **Testability:**
        - Can each requirement be tested?
        - Are there clear acceptance criteria for each requirement?

    5. **Traceability:**
        - Are all requirements uniquely identified?
        - Is there a traceability matrix linking requirements to their source?

    6. **Implementability:**
        - Are the requirements implementable given the current technology and constraints?
        - Are there any unrealistic requirements?

    7. **Prioritization:**
        - Are the requirements prioritized?
        - Is the prioritization rationale documented?

    8. **Compliance with regulatory requirements:**
        - Do the requirements comply with relevant standards and regulations?
        - Are there any legal or regulatory requirements that need to be addressed?

- **Example Checklist for Reviewing Code**

    **Checklist Items:**

    1. **Code Structure:**
        - Is the code organized logically?
        - Are functions and methods appropriately named and scoped?

    2. **Coding Standards:**
        - Does the code keep to the project's coding standards?
        - Are naming conventions followed consistently?

    3. **Error Handling:**
        - Is error handling implemented correctly?
        - Are exceptions properly managed?

    4. **Performance:**
        - Are there any performance bottlenecks?
        - Is the code optimized for efficiency?

    5. **Security:**
        - Are there any security vulnerabilities?
        - Is sensitive data handled securely?

    6. **Documentation:**
        - Is the code adequately commented?
        - Are there any missing or outdated comments?

    7. **Testing:**
        - Are there unit tests for the code?
        - Do the tests cover all critical paths?

    8. **Dependencies:**
        - Are dependencies managed correctly?
        - Are there any unnecessary dependencies?

</details>

## Scenario-based reviewing

**Explanation:**

Static testing technique where reviewers use predefined scenarios to guide their review of software documents like requirements, design documents, and code.

<details>
    <summary>Overview:</summary>

1. **Contextual Review:** The use of scenarios ensures that the review is contextual and considers how the document will be used in real-world situations.

2. **User Perspective:** Scenarios help reviewers consider the document from the perspective of the end user, ensuring that it meets their needs and expectations.

3. **Thoroughness:** Scenarios help ensure that the review is thorough and covers all important aspects of the document.

</details>

<details>
    <summary>Examples:</summary>

- **Example Scenario for Reviewing Requirements Document:**

    **Scenario:** User Registration Process

    1. **Scenario Description:**
        - A new user wants to register on the website. The user needs to provide personal information, create a username and password.

    2. **Steps to Review:**
        - Verify that the requirements document includes all necessary fields for user registration.
        - Check that the requirements specify validation rules for each field.
        - Ensure that the requirements include error messages for invalid inputs.
        - Confirm that the requirements document specifies the process for handling duplicate usernames or emails.
        - Verify that the requirements include a confirmation email process.

    3. **User Perspective:**
        - Consider the ease of use for the end user during the registration process.
        - Ensure that the registration process is straightforward and user-friendly.

- **Example Scenario for Reviewing Code:**

    **Scenario:** User Login Functionality

    1. **Scenario Description:**
        - A registered user wants to log in to the website. The user needs to enter their username and password to access their account.

    2. **Steps to Review:**
        - Verify that the code includes input validation for the username and password fields.
        - Check that the code handles incorrect login attempts appropriately.
        - Ensure that the code includes secure handling of user credentials.
        - Confirm that the code includes logging for login attempts for security monitoring.
        - Verify that the code redirects the user to the appropriate page after a successful login.

    3. **User Perspective:**
        - Consider the user experience during the login process.
        - Ensure that the login process is quick and efficient.
        - Verify that the code addresses potential user concerns, such as account security and privacy.

</details>

## Static Analysis

**Explanation:**

Static analysis is a method of debugging by examining the source code before a program is run. It is done by analyzing the code against a set of coding rules and standards.

<details>
    <summary>Overview:</summary>

1. **Automated Tools:** Static analysis is often performed using automated tools that can quickly analyze large codebases and identify potential issues.

2. **Code Quality:** Static analysis helps improve code quality by identifying issues such as coding standard violations, potential bugs, and security vulnerabilities.

3. **Early Detection:** Static analysis helps detect issues early in the development process, reducing the cost and effort required to fix them.

</details>

<details>
    <summary>Examples:</summary>

1. **SonarQube:**
    - **Description:** SonarQube is an open-source platform for continuous inspection of code quality. It performs automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities. SonarQube also supports static application security testing (SAST) to identify security vulnerabilities in the code.
    - **Features:** Supports multiple programming languages, integrates with CI/CD pipelines, provides detailed reports and dashboards, and includes SAST capabilities.

2. **ESLint:**
    - **Description:** ESLint is a static code analysis tool for identifying and fixing problems in JavaScript code. It helps ensure that code adheres to a set of predefined coding standards.
    - **Features:** Customizable rules, integration with various development environments, automatic fixing of certain issues.

3. **Pylint:**
    - **Description:** Pylint is a static code analysis tool for Python. It checks for errors in Python code, enforces a coding standard, and looks for code smells.
    - **Features:** Customizable rules, integration with various development environments, detailed reports on code quality.

4. **Bandit:**
    - **Description:** Bandit is an open-source static application security testing (SAST) tool designed to find common security issues in Python code.
    - **Features:** Scans Python code for security vulnerabilities, integrates with CI/CD pipelines, provides detailed security reports.

5. **NodeJsScan:**
    - **Description:** NodeJsScan is an open-source static application security testing (SAST) tool specifically designed for Node.js applications. It helps identify security vulnerabilities in JavaScript code.
    - **Features:** Scans JavaScript and Node.js code for security vulnerabilities, integrates with CI/CD pipelines, provides detailed security reports.

</details>

## Success Factors for Review

**Explanation:**

<details>
    <summary>Overview:</summary>

1. **Clear Objectives and Measurable Exit Criteria:**
    - Define clear objectives for the review process and establish measurable exit criteria. The review should have a well-defined goal, and the evaluation of participants should not be an objective.

2. **Appropriate Review Type:**
    - Choose the appropriate review type based on the work product, participants, project needs, and context. Different documents require different levels of formality in the review process.

3. **Small Chunks for Review:**
    - Conduct reviews on small chunks of work to maintain concentration and effectiveness. Large documents should be broken down into manageable sections for review.

4. **Feedback to Stakeholders and Authors:**
    - Provide feedback from reviews to stakeholders and authors to help them improve the product and their activities. Sharing feedback promotes continuous improvement.

5. **Adequate Preparation Time:**
    - Provide adequate time for participants to prepare for the review. Management should support the review process by allocating sufficient time and resources.

6. **Training for Participants:**
    - Provide adequate training to all participants so they understand their roles and responsibilities in the review process. Training ensures that participants can contribute effectively.

7. **Facilitation by Trained Moderators:**
    - Ensure that reviews are facilitated by trained moderators who understand the review process. Moderators play a role in guiding the review and ensuring its success.

</details>
