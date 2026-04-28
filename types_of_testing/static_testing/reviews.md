# Table of Contents - Static Testing (Reviews)

- [Benefits of Early and Frequent Stakeholder Feedback](#benefits-of-early-and-frequent-stakeholder-feedback)
- [Roles and Responsibilities](#roles-and-responsibilities)
- [Review Types](#review-types)
- [Review Process Activities](#review-process-activities)
- [Checklist-Based Reviewing](#checklist-based-reviewing)
- [Scenario-Based Reviewing](#scenario-based-reviewing)
- [Success Factors for Review](#success-factors-for-review)

Static testing focuses on evaluating work products without executing the software. Instead of running the system, artifacts such as requirements, design documents, source code and user manuals are reviewed to identify defects early.

One of the main techniques used in static testing is **reviews**.

Reviews involve examining work products to detect issues, improve quality and ensure alignment with stakeholder expectations before development continues. They help reduce rework, improve communication and provide early feedback on potential problems.

To understand how reviews are performed in practice, it is important to explore the key aspects that define them.

We begin with the **benefits of early and frequent stakeholder feedback**, which explains why reviews are valuable and how they contribute to overall software quality.

## Benefits of Early and Frequent Stakeholder Feedback

Early and frequent stakeholder feedback is essential in static testing because it helps identify issues in work products before they become costly defects during later stages of development.

By involving stakeholders early, teams can ensure that requirements are clearly understood and aligned with business needs. This reduces misunderstandings and prevents incorrect assumptions from propagating into design and implementation.

Receiving feedback at an early stage improves the overall understanding of the system. It allows both technical and non-technical participants to clarify expectations, refine requirements and validate that the solution being developed matches the intended purpose.

Early feedback also supports better prioritization. By identifying high-risk areas and critical functionality sooner, teams can focus their efforts where they are most needed.

Another important benefit is the reduction of cost and effort. Defects found during reviews are significantly cheaper to fix compared to those discovered during dynamic testing or production.

In addition, frequent interaction with stakeholders improves collaboration and communication. It creates a shared understanding across the team and encourages continuous improvement of work products.

As a result, early and frequent feedback contributes to higher quality, reduced rework and more efficient development.

While early feedback helps improve the quality of work products, effective reviews do not happen automatically.

They require clear structure and coordination, where each participant understands their role and responsibilities within the review process.

To achieve this, different stakeholders are involved, each contributing in a specific way to ensure a thorough and effective review.

## Roles and Responsibilities

In a review process, different stakeholders take on specific roles to ensure that work products are evaluated effectively and consistently. Each role has a clear purpose, contributing to the overall quality and success of the review.

The **manager** is responsible for defining the scope of the review and ensuring that the necessary resources are available. This includes allocating time, selecting participants and supporting the review process at an organizational level.

The **author** is the person who created the work product being reviewed. Their responsibility is to prepare the material for review and address any feedback or defects identified during the process.

The **moderator**, also known as the facilitator, leads the review activities. They ensure that the review stays focused, discussions remain constructive and the process is followed correctly. The moderator plays a key role in maintaining structure and efficiency.

The **scribe** is responsible for documenting the outcomes of the review. This includes recording identified defects, decisions made during discussions and any action items that need to be followed up.

The **reviewers** examine the work product in detail. They identify defects, inconsistencies and areas for improvement and provide feedback based on their expertise and perspective.

In some cases, a **review leader** is responsible for planning and coordinating the overall review process. This includes organizing sessions, selecting appropriate participants and ensuring that review objectives and exit criteria are met.

By clearly defining these roles, the review process becomes more structured and effective. Each participant understands their responsibilities, which helps improve collaboration and ensures that defects are identified early.

While roles define who is involved in the review process, reviews themselves can be conducted in different ways depending on the context, level of formality and objectives.

To better understand how reviews are applied in practice, it is important to explore the different types of reviews.

## Review Types

Reviews are static testing techniques where work products such as requirements, design documents or source code are examined to identify defects and improve quality.

Depending on the context, complexity, and criticality of the work product, reviews can vary in their level of formality and structure.

An **informal review** is the simplest form of review. It does not follow a defined process and usually involves a quick check by one or more colleagues. Although lightweight, informal reviews are still useful for identifying obvious issues early.

A **walkthrough** is led by the author of the work product. The author explains the content step by step to other participants, who provide feedback and ask questions. This type of review helps improve understanding and clarify ambiguities.

A **technical review** is performed by a group of technically skilled participants. It focuses on evaluating technical aspects such as design decisions, architecture and coding standards. A moderator typically guides the discussion to ensure that it remains focused and productive.

An **inspection** is the most formal type of review. It follows a structured process with clearly defined roles, entry and exit criteria and the use of checklists. Inspections aim to detect as many defects as possible and often include metrics collection for process improvement.

Each review type serves a different purpose, and the choice of review depends on factors such as project needs, available resources and the importance of the work product being evaluated.

While review types define the level of formality and structure, reviews themselves are carried out through a series of organized activities.

To understand how reviews are performed step by step, it is important to examine the review process.

## Review Process Activities

A review is not a single action but a structured process made up of several activities. These activities ensure that work products are evaluated systematically, defects are identified early and improvements are applied effectively.

The process begins with **planning**. In this stage, the scope and objectives of the review are defined. The work product to be reviewed is selected, participants are assigned and entry and exit criteria are established.

Next is **review initiation**, where all participants receive access to the work product and any supporting materials. At this point, roles and responsibilities are clarified and reviewers are prepared for the evaluation.

The **individual review** phase follows, where each reviewer examines the work product independently. During this activity, reviewers identify defects, raise questions and record their findings.

After individual preparation, the process moves to **communication and analysis**. This usually takes place in a review meeting, where findings are discussed, questions are clarified and agreements are reached on identified issues.

Based on the outcomes of the discussion, the **rework** activity is performed. The author updates the work product to address the identified defects and improve its quality. If necessary, follow-up reviews may be conducted to verify the changes.

By following these structured activities, the review process becomes consistent and effective, ensuring that defects are identified early and work products meet the expected quality standards.

While the review process defines how reviews are carried out, different techniques can be used to guide reviewers and improve the effectiveness of defect detection.

To better understand how reviews can be performed in practice, we now look at checklist-based reviewing.

## Checklist-Based Reviewing

Checklist-based reviewing is a static testing technique where reviewers use a predefined list of items to guide their evaluation of a work product.

Instead of relying only on individual experience or intuition, the checklist provides a structured way to ensure that important aspects of the work product are consistently examined.

The checklist typically contains common issues to look for, such as ambiguities, inconsistencies, missing information or violations of standards. By following this list, reviewers can focus on key quality criteria and reduce the risk of overlooking defects.

This approach improves consistency across reviews, as all reviewers apply the same set of criteria. It also makes the review process more efficient, especially for repetitive or well-understood types of work products such as requirements, design documents or source code.

Checklist-based reviewing is particularly useful in environments where standardization is important, as it helps ensure that reviews are performed in a uniform and systematic way.

For example, when reviewing a requirements document, a checklist may include verifying clarity, completeness, consistency and testability. Similarly, when reviewing code, the checklist may focus on coding standards, error handling, performance and security aspects.

While checklists provide a structured approach, they are based on predefined items and may not fully capture real-world usage scenarios.

To complement this approach, reviews can also be guided by realistic situations that reflect how the system is actually used.

This leads to scenario-based reviewing, where the focus shifts to evaluating the work product from a user or system interaction perspective.

## Scenario-Based Reviewing

Scenario-based reviewing is a static testing technique where reviews are guided by predefined real-world scenarios. Instead of focusing only on general rules or checklists, this approach evaluates the work product based on how it will be used in practice.

In this technique, reviewers consider specific situations that represent user interactions or system behavior. These scenarios help ensure that the work product supports realistic use cases and meets actual user needs.

By using scenarios, reviewers can better understand the context in which the system operates. This makes it easier to identify gaps, missing functionality, or unclear behavior that might not be detected through checklist-based reviewing alone.

Scenario-based reviewing also emphasizes the user perspective. It encourages reviewers to think about how the system will behave during real interactions, which improves the overall usability and relevance of the solution.

For example, when reviewing a requirements document, a scenario might describe how a user registers an account, including all necessary steps and validations. Reviewers can then verify whether the requirements fully support this flow. Similarly, when reviewing code, a scenario might involve a user logging into the system, allowing reviewers to check input validation, security handling and system responses.

This approach complements checklist-based reviewing by adding context and focusing on real-world behavior, making reviews more comprehensive.

While different techniques help guide how reviews are performed, their effectiveness also depends on how well the overall review process is executed.

To ensure that reviews deliver the expected value, it is important to understand the factors that contribute to successful reviews.

## Success Factors for Review

The effectiveness of reviews depends not only on the process and techniques used, but also on how well the review is planned and executed. Applying best practices helps ensure that reviews identify defects efficiently and contribute to continuous improvement.

One important factor is having **clear objectives and measurable exit criteria**. Reviews should have a defined purpose and it should be clear when the review is considered complete. The focus should remain on improving the work product rather than evaluating individuals.

Selecting the **appropriate review type** is also essential. The level of formality should match the complexity and importance of the work product, as well as the available time and resources.

Work products should be reviewed in **small and manageable sections**. This helps maintain focus, reduces fatigue and increases the likelihood of identifying defects.

Providing **clear and constructive feedback** is another key factor. Feedback should be specific, actionable and focused on improving the work product, helping authors understand and address issues effectively.

Reviewers need **adequate preparation time** to examine the work product before discussions take place. Without proper preparation, the effectiveness of the review is significantly reduced.

It is also important that participants receive **basic training and guidance**. Everyone involved should understand the review process, their role and how to identify defects.

An **effective moderator** plays a critical role in guiding the review. The moderator ensures that discussions remain focused, all participants are heard and the review progresses efficiently.

Finally, **management support** is essential. Organizations must provide the necessary time, resources and encouragement for reviews to be performed properly, without pressure to rush or skip important steps.

When these factors are in place, reviews become more structured, efficient and valuable, leading to higher quality work products and improved collaboration across the team.
