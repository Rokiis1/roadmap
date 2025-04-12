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

Early and frequent stakeholder feedback helps detect potential quality issues before they become critical, ensures the product meets stakeholder expectations, and reduces the cost and effort required to fix defects later.

<details>
    <summary>Overview:</summary>

1. **Early Quality Problem Identification:** Spots potential issues in work products before they grow into major problems.

2. **Prevents Misunderstandings:** Clarifies requirements and expectations, reducing rework due to miscommunication.

3. **Improves Understanding:** Enhances the team’s grasp of what is being built, ensuring alignment with stakeholder needs.

4. **Prioritization of Work:** Focuses attention on high-risk areas and key features early in the development process.

5. **Cost and Time Savings:** Early defect resolution reduces rework and saves overall development effort.

6. **Enhanced Collaboration:** Regular feedback sessions promote effective collaboration between development teams and stakeholders.

</details>

## Roles and Responsibilities

**Explanation:**

Different stakeholders assume specific roles in the review process to ensure thorough evaluation and high-quality outcomes.

<details>
    <summary>Overview:</summary>

1. **Manager:**
    - **Decides Scope:** Selects the work products (documents or code) to review.
    - **Provides Resources:** Allocates time, staff, and tools for reviews.
    - **Supports the Process:** Ensures alignment with organizational goals.

2. **Author:**
    - **Prepares Work Products:** Creates and revises documents or code before the review.
    - **Addresses Feedback:** Reviews and resolves identified defects and clarifies ambiguities.

3. **Moderator (Facilitator):**
    - **Leads the Meeting:** Guides the review meeting, keeping the discussion focused and on time.
    - **Mediates Discussions:** Ensures all participants can express their views and that conversations stay constructive.

4. **Scribe (Recorder):**
    - **Documents Meeting Details:** Records decisions, action items, and any newly identified anomalies during the review meeting.

5. **Reviewers:**
    - **Evaluates Work Products:** Independently examines the work product to identify defects, inconsistencies, and areas for improvement.
    - **Provides Constructive Feedback:** Offers insights and suggestions based on their expertise.

6. **Review Leader:**
    - **Plans and Coordinates:** Organizes the overall review process, selects appropriate participants, and schedules sessions.
    - **Ensures Objectives and Exit Criteria:** Monitors that review goals are met according to the defined exit criteria.

</details>

## Review Types

**Explanation:**

Reviews are static testing techniques where work products (such as requirements, designs, or code) are examined. The level of formality depends on the work product’s criticality and complexity.

<details>
    <summary>Overview:</summary>

1. **Informal Review:**
    - **Characteristics:**
        - No strict process or detailed documentation is required.
        - Typically conducted between two colleagues.

    - **Notes:** While informal, the goal is still to detect defects early. It’s a lightweight technique mostly used for small-scale review needs.

    - **Example:** A tester asks a peer to quickly go over a set of test cases to spot obvious mistakes and ambiguities.

2. **Walkthrough:**
    - **Characteristics:**
        - Led by the author of the work product.
        - Focuses on explaining the content to an audience and gathering feedback.

    - **Notes:**
        - Individual review by participants prior to the meeting is optional.
        - The walkthrough helps in clarifying ambiguous areas and raising potential issues early, which aligns with the shift-left approach.

    - **Example:** A developer walks the team through a design document to explain design decisions and gather input on potential oversights.

3. **Technical Review:**
    - **Characteristics:**
        - Performed by a group of technically skilled reviewers under the guidance of a moderator.
        - Aims at evaluating technical aspects like coding standards, architecture, and design.

    - **Notes:**
        - Emphasizes consensus-building and decision making on technical problems.
        - Ensures that complex technical challenges are discussed and addressed through collaborative feedback.

    - **Example:** A group of senior developers and architects reviews a module's source code to ensure compliance with internal coding standards and technical accuracy.

4. **Inspection:**
    - **Characteristics:**
        - The most formal review type.
        - Follows a structured process with defined entry and exit criteria, checklists, and roles.

    - **Notes:**
        - Inspections are used to detect the maximum number of anomalies.
        - They often include post-review reporting and metrics collection, which can be used for process improvement.
        - Common practices require that the work product is divided into manageable parts and reviewed in multiple sessions if necessary.

    - **Example:** An inspection of a requirements document with a moderator, scribe, and several reviewers, where each defect is tracked with metrics and all roles are clearly separated. The author does not act in the moderator or scribe roles.

</details>

## Review Process Activities

**Explanation:**

A structured review process ensures work products are evaluated systematically for quality, resulting in early defect detection and continuous improvement.

<details>
    <summary>Overview:</summary>

1. **Planning:** Define the review scope, objectives, work products, quality criteria, and entry/exit conditions.

2. **Review Initiation:** Ensure all participants have access to the work product and understand their roles and responsibilities.

3. **Individual Review:** Each reviewer examines the work product independently and logs anomalies and questions.

4. **Communication and Analysis:** Conduct a review meeting where reviewers discuss findings, and the author clarifies questions.

5. **Rework:** The author revises the work product based on the review outcomes, followed by any necessary follow-up reviews.

</details>

## Checklist-based reviewing

**Explanation:**

Static testing technique where reviewers use a predefined checklist to guide their review of software documents like requirements, design documents, and code.

<details>
    <summary>Overview:</summary>

1. **Systematic Review:** Ensures consistent and thorough review by covering all critical aspects with a checklist.

2. **Common Errors Identification:** The checklist contains typical errors to look for, such as ambiguities or inconsistencies

3. **Consistency Across Reviews:** All reviewers apply the same criteria, ensuring uniformity in defect detection.

</details>

<details>
    <summary>Examples:</summary>

- **Example Checklist for Reviewing Requirements Document**

    1. **Clarity and Ambiguity:** Are requirements stated without ambiguity?

    2. **Completeness:** Are all necessary requirements present?

    3. **Consistency:** Are there any conflicting requirements or terminology?

    4. **Testability:** Are clear acceptance criteria provided?

    5. **Traceability:** Is each requirement uniquely identified and linked to its source?

    6. **Implementability:** Are the requirements realistic given current constraints?

    7. **Prioritization & Compliance:** Are requirements prioritized and compliant with regulations?

- **Example Checklist for Reviewing Code**

    1. **Code Structure:** Is the code logically organized?

    2. **Coding Standards:** Does the code follow to the project's coding standards?

    3. **Error Handling:** Is error handling implemented correctly?

    4. **Performance:** Are there performance bottlenecks?

    5. **Security:** Are potential security vulnerabilities addressed?

    6. **Documentation & Testing::** Is the code properly commented and adequately tested?

    7. **Dependencies:** Are dependencies managed appropriately?

</details>

## Scenario-based reviewing

**Explanation:**

In scenario-based reviewing, predefined real-world scenarios are used to guide a review of work products. This ensures that reviews are contextual and account for actual user interactions.

<details>
    <summary>Overview:</summary>

1. **Contextual Review:** Reviews are guided by realistic scenarios, ensuring that requirements or code support real-world use cases.

2. **User Perspective:** Emphasizes evaluating the work product from the end user’s point of view.

3. **Details:** Helps ensure that all critical aspects of functionality, usability, and performance are reviewed.

</details>

<details>
    <summary>Examples:</summary>

- **Example Scenario for Reviewing Requirements Document (User Registration):**
    1. **Scenario Description:**
        - A new user registers on the website by providing personal information, username, and password.

    2. **Steps to Review:**
        - Confirm all necessary registration fields are specified.
        - Ensure validation rules and error messages are clearly defined.
        - Verify the process for handling duplicates and confirmation emails.
    3. **User Perspective:** Evaluate ease-of-use and clarity of the registration process.

- **Example Scenario for Reviewing Code (User Login):**
    1. **Scenario Description:** A registered user logs in using a username and password.

    2. **Steps to Review:**
        - Check for proper input validation and error handling.
        - Verify secure handling of credentials and logging of login attempts.
        - Ensure the user is correctly redirected upon successful login.

    3. **User Perspective:** Assess overall efficiency, security, and user experience.

</details>

## Static Analysis

**Explanation:**

Static analysis is an automated method of inspecting source code or other textual work products against coding rules and standards, without executing the code. It helps to identify defects, potential security vulnerabilities, and deviations from standards early in the development cycle.

<details>
    <summary>Overview:</summary>

1. **Automated Tools:** Uses tools that automatically scan large codebases to identify issues quickly.

2. **Code Quality:** Identifies violations of coding standards, potential bugs, and security vulnerabilities.

3. **Early Detection:** Finds issues before runtime, reducing the cost and effort needed for fixes during later stages of development.

</details>

<details>
    <summary>Examples:</summary>

1. **SonarQube:**
    - **Description:** An open-source platform for continuous code quality inspection that detects bugs, code smells, and security vulnerabilities.
    - **Features:** Supports multiple languages, integrates with CI/CD pipelines, and provides detailed dashboards and SAST reports.

2. **ESLint:**
    - **Description:** A static code analysis tool for JavaScript that enforces coding standards and detects potential issues.
    - **Features:** Customizable rules, integration with multiple editors, and automatic fixing capabilities.

3. **Pylint:**
    - **Description:**  A tool for Python that checks for errors, enforces coding standards, and finds code smells.
    - **Features:** Highly configurable with detailed reporting.

4. **Bandit:**
    - **Description:** A SAST tool for Python that identifies security vulnerabilities.
    - **Features:** Integrates with CI/CD pipelines and provides comprehensive security reports.

</details>

## Success Factors for Review

**Explanation:**

The success of a review process depends on both planning and execution. In line with the best practices ensures effective detection of defects and continuous improvement.

<details>
    <summary>Overview:</summary>

1. **Clear Objectives and Measurable Exit Criteria:** Define measurable goals for the review evaluation of participants should not be the focus.

2. **Appropriate Review Type:** Select the review type that best fits the work product, project context, and resource availability.

3. **Small Chunks for Review:** Review manageable sections of large work products to maintain focus.

4. **Feedback to Stakeholders and Authors:** Provide clear, actionable feedback to authors and stakeholders to encouraged improvements.

5. **Adequate Preparation Time:** Allocate sufficient time for reviewers to prepare, ensuring all participants have the necessary materials.

6. **Training for Participants:** Make sure everyone knows how a review works and what they’re expected to do. This might involve short training sessions or providing simple guidelines so that each person understands their role and how to look for issues.

7. **Effective Moderator:** A moderator is the person who leads the review meeting. Their job is to keep the discussion focused, allow everyone to share their thoughts, and make sure the meeting moves forward without distractions.

8. **Management Support:** This means that your organization’s leaders understand the importance of the review process. They should provide the needed time, resources, and encouragement, so that the team can perform reviews effectively without feeling rushed or unsupported.

</details>
