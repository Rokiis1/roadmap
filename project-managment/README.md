# Project Managment

- [Software Development Life Cycle](#software-development-life-cycle)
- [Project Management Tools](#project-management-tools)

## Software Development Life Cycle

- [Waterfall Model](#waterfall-model)
- [V Model](#v-model)
- [Iterative Model](#iterative-model)
- [Spiral Model](#spiral-model)
- [DevOps Approach](#devops-approach)
- [Lean Development](#lean-development)
- [Agile Methodologies](#agile-methodologies)
  - [Scrum Framework](#scrum-framework)
- [Most Of the Time Using Mixed Approach](#most-of-the-time-using-mixed-approach)

**Explanation:**

**Software Development Life Cycle (SDLC)** is a systematic and structured approach to software development that defines a set of processes or phases to guide the creation, maintenance, and management of software applications or systems. It serves as a roadmap for developers, project managers, and stakeholders to ensure that software is developed efficiently, with high quality, and according to specified requirements.

![SDLC](./assets/images/SDLC.png)

**Key Concepts:**

1. **Planning and Requirement Analysis:** In this initial phase, project objectives, scope, and requirements are defined. The team, which includes stakeholders such as clients and business analysts, outlines the project's goals, timeline, budget, and resources.

2. **Defining Requirements:** The process of collecting and documenting detailed in Software Requirements Specification (SRS) from stakeholders, including users, clients, and business analysts. This phase helps in understanding what the software should do. During this phase, a Requirement Traceability Matrix (RTM) is created to capture all requirements proposed by the stakeholders.

    **Example:**

    - [Example: Software Requirements Specification](./assets/examples/srs.md)

    - [Example: Traceability Matrix (RTM) in the Defining Requirements](./assets/examples/rtmDefiningRequirements.md)

3. **Designing the Product Architecture:** Software Design Description (SDD), is a detailed description of how a software product or system will be built. It serves as a blueprint for the development process, outlining the system's architecture, components, interfaces, and data for a project. Simultaneously, the Requirement Traceability Matrix (RTM) is updated to reflect the design decisions made. Each requirement in the RTM is linked to the specific design document and design component that will implement it. This ensures that all requirements are accounted for in the design and provides a clear path from requirement to implementation.

    **Example:**

    - [Example: Software Design Description](./assets/examples/sdd.md)

    - [Example: Traceability Matrix (RTM) in the Designing product architecture](./assets/examples/rtmDesigning.md)
  
4. **Building:** Developers write the actual code based on the design specifications outlined in the Software Design Description (SDD). This phase involves coding, unit testing, and integration of software modules.

    **Example:**

    - [Example: Traceability Matrix (RTM) in the building phase](./assets/examples/rtmBuilding.md)

5. **Testing the Product:** Comprehensive testing is performed as part of the Software Testing Life Cycle (STLC) to identify and fix defects or bugs. The STLC includes various stages such as test planning, test case development, test environment setup, test execution, and test cycle closure. Requirement Traceability Matrix (RTM) is updated to link each requirement to its corresponding test case(s). This ensures that all requirements have been tested and validated.

    **Example:**

    - [Example: Traceability Matrix (RTM) in the Testing the Product](./assets/examples/rtmTesting.md)

6. **Deployment (Release):** Once the software passes testing and quality checks, it is deployed to production or made available to users. Deployment may involve data migration and system setup.

7. **Maintenance and Support:** After deployment, the software requires ongoing maintenance, updates, and support to address issues, adapt to changing requirements, and ensure its continued functionality.

### Waterfall Model

**Explanation:**

The Waterfall Model is a traditional and linear approach to software development that is characterized by a sequential flow of phases. Each phase must be completed before the next one begins, and there is typically little room for revisiting earlier phases once they are completed. The Waterfall Model is often used for projects with well-defined and stable requirements.

**Key Concepts:**

*Here are the key phases in the Waterfall Model:*

- **Requirements:** The project starts with a comprehensive analysis of requirements gathered from stakeholders. These requirements are documented in detail, specifying what the software must do.

- **Design:** In this phase, the software's architecture and design are planned. This includes defining system components, data structures, user interfaces, and the overall system structure.

- **Implementation (Coding):** Developers write the actual code based on the design specifications. This phase involves coding, unit testing, and the integration of software modules.

- **Testing:** Comprehensive testing is performed to identify and fix defects or bugs. It includes various types of testing such as functional, integration, performance, and user acceptance testing.

- **Deployment (Release):** Once the software passes testing and quality checks, it is deployed to production or made available to users. Deployment may involve data migration and system setup.

- **Maintenance and Support:** After deployment, the software requires ongoing maintenance, updates, and support to address issues, adapt to changing requirements, and ensure its continued functionality.

**Key Concepts:**

- **Sequential Phases:** The Waterfall Model follows a strict sequence of phases, and each phase must be completed before the next one begins. This sequential approach provides structure but can be less adaptable to changes.

- **Documentation:** The Waterfall Model emphasizes comprehensive documentation at each phase. Detailed documentation helps ensure that requirements are met and that the software functions as intended.

- **Limited Customer Involvement:** Customer involvement is often limited until the end of the project when the software is deployed. Changes to requirements late in the process can be costly and challenging to accommodate.

- **Phased Deliverables:** The Waterfall Model typically results in large, phased deliverables. Users may not see a working version of the software until late in the project.

- **Risk Management:** Risks and issues are often discovered later in the project lifecycle, which can lead to challenges in addressing them. Risk management is less continuous compared to Agile approaches.

### V Model

**Explanation:**

The V Model, also known as the Validation and Verification Model, is a software development and testing framework that is an extension of the Waterfall Model. It emphasizes the importance of verification and validation activities throughout the entire software development lifecycle.

**Here are the key aspects of the V Model:**

- **Requirements Phase:** The project begins with the gathering and analysis of requirements, similar to the Waterfall Model.

- **Design Phase:** Once requirements are defined, the design phase plans how the software will fulfill those requirements. System architecture, component design, and detailed design are specified.

- **Coding Phase:** Developers write the actual code based on the design specifications. This phase involves coding, unit testing, and integration of software modules, similar to the Waterfall Model.

- **Verification (Left Side of the "V"):** After each development phase (requirements, design, and coding), corresponding verification activities are performed. Verification ensures that each phase meets its objectives and adheres to the defined standards. This includes activities like reviews, inspections, and walkthroughs.

- **Validation (Right Side of the "V"):** Once the software is fully coded and integrated, the validation phase begins. Validation verifies that the software, as a whole, meets the customer's requirements and functions correctly. This includes various types of testing, such as system testing, integration testing, and user acceptance testing.

- **Parallel Development and Testing:** Development and testing activities are conducted in parallel, with verification activities on one side of the "V" and validation activities on the other. This dual-track approach helps catch defects and issues early in the development process.

**Key Concepts:**

- **Early Defect Detection:** The V Model places a strong emphasis on early defect detection and prevention through verification activities. This reduces the cost and effort required to fix issues later in the project.

- **Phased Testing:** Different levels of testing (unit testing, integration testing, system testing, and user acceptance testing) are planned and executed in parallel with corresponding development phases.

- **Traceability:** The V Model promotes traceability, ensuring that each requirement is traced to a corresponding design and testing activity. This helps maintain alignment with customer requirements.

- **Iterative Feedback:** Feedback from validation activities can lead to adjustments in the development process, allowing for iterative improvements.

- **Structured and Documented:** Like the Waterfall Model, the V Model places importance on documentation and thorough planning.

### Iterative Model

**Explanation:**

The Iterative Model is a particular implementation of a software development life cycle (SDLC) that emphasizes the repetition of a series of steps. The project goes through a set of iterations or cycles, each resulting in a new version of the software. After each iteration, the development team can refine and validate the features of the software, ensuring that it meets the requirements and functions correctly. This model allows for the early discovery of defects and changes, making it easier to manage scope and risk.

**Key Concepts:**

1. **Incremental Development:** The software is developed and enhanced through repeated cycles (iterations), with each iteration producing a new version of the software.

2. **Feedback and Adaptation:** After each iteration, feedback is collected and used to improve the next iteration. This allows the team to adapt to changes and refine the software based on user feedback and testing results.

3. **Risk Management:** The iterative model allows for early detection of defects and issues, which can be addressed in subsequent iterations. This helps to manage risk and ensure the quality of the software.

4. **User Involvement:** Users are often involved in the iterative process, providing feedback and suggestions that can be incorporated into future iterations. This helps to ensure that the software meets user needs and expectations.

5. **Flexibility:** The iterative model is flexible and can accommodate changes more easily than some other models. Changes can be implemented in the next iteration without disrupting the overall development process.

### Spiral Model

**Explanation:**

The Spiral Model is a type of software development life cycle model that combines elements of both design and prototyping-in-stages, in an effort to combine advantages of top-down and bottom-up concepts. This model is best used for large projects which involve continuous enhancements. The development process in the Spiral Model starts with a small set of requirements and goes through each development phase for those set of requirements. The software is produced in a series of incremental releases. During each iteration, a new version of the software is produced and tested.

**Key Concepts:**

1. **Risk Analysis:** At each iteration, risks are identified and evaluated, and strategies are decided to manage them. This makes the model suitable for high-risk projects.

2. **Prototyping:** The Spiral Model emphasizes prototyping of the software in the early stages of development. This allows users to interact with the prototype and provide feedback, which can be used to improve the software in the next iteration.

3. **User Involvement:** Similar to the Iterative Model, the Spiral Model involves users early in the development process, which helps to ensure that the software meets user needs and expectations.

4. **Flexibility:** The Spiral Model is flexible and allows for changes to be made in the later stages of development. This is particularly useful for large and complex projects.

5. **Cost and Time:** The Spiral Model can be expensive and time-consuming due to the emphasis on risk analysis and user feedback. It's typically used for large, complex, and high-risk projects.

### DevOps Approach

**Explanation:**

DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the system development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology.

**Key Concepts:**

1. **Continuous Integration and Continuous Delivery (CI/CD):** This is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous delivery, and continuous deployment.

2. **Infrastructure as Code (IaC):** Infrastructure as code is a type of IT infrastructure that operations teams can automatically manage and provision through code, rather than using a manual process.

3. **Microservices:** This is an architectural style that structures an application as a collection of services that are highly maintainable and testable, loosely coupled, independently deployable, organized around business capabilities, and owned by a small team.

4. **Monitoring and Logging:** Keeping track of how applications and systems are performing to understand how they’re behaving, and why.

5. **Communication and Collaboration:** One of the key tenets of DevOps is promoting better collaboration between all the parties involved in software development - developers, testers, operations staff, and even customers and management. Everyone collaborates on a project from start to finish.

6. **Automation:** DevOps heavily emphasizes automation at all stages of software production - from integration, testing, to deployment, and infrastructure management. Automated pipelines are put in place to assist with software releases and reduce the possibility of human error.

### Lean Development

**Explanation:**

Lean Software Development (LSD) is a translation of lean manufacturing and lean IT principles and practices to the software development domain. Adapted from the Toyota Production System, a pro-lean subculture is emerging from within the Agile community. The core idea of Lean Development is to maximize customer value while minimizing waste. This means creating more value for customers with fewer resources.

**Key Concepts:**

1. **Eliminate Waste:** Anything that does not add value to the customer is considered waste. This includes unnecessary code or functionality, delay in the software development process, unclear or ambiguous requirements.

2. **Build Quality In:** Lean development emphasizes the importance of ensuring quality in every stage of the development process, rather than relying on inspection at the end of the process to remove defects.

3. **Create Knowledge:** Lean development encourages creating knowledge within the team. This includes learning from failures and successes, and sharing this knowledge among team members.

4. **Defer Commitment:** This principle suggests delaying decisions as much as possible until they can be made based on facts and not on uncertain assumptions and predictions.

5. **Deliver Fast:** Lean development emphasizes the importance of quick delivery of software. The sooner the software is delivered without major defects, the sooner feedback can be received, and incorporation of changes becomes easier.

6. **Respect People:** Lean development emphasizes giving respect to the people who actually carry out the work. The knowledge workers are considered the best people to understand how to carry out the work.

7. **Optimize the Whole:** Lean development emphasizes the need to consider the entire value stream, from the customer's need, to the delivery of the product, and the final use of the product.

### Agile Methodologies

**Explanation:**

Agile Methodologies are a set of principles and practices for software development that prioritize flexibility, collaboration, and customer-centricity. Unlike traditional approaches that follow a rigid, linear path (such as the Waterfall model), Agile Methodologies embrace change and allow teams to adapt to evolving requirements throughout the development process.

*Agile Methodologies value:*

- **Customer Collaboration:** Agile encourages continuous collaboration with customers and stakeholders. Their feedback is actively sought and incorporated into the development process.

- **Iterative Development:** Projects are divided into small, manageable iterations or sprints. Teams work on a subset of features during each iteration, allowing for frequent releases and feedback loops.

- **Self-Organizing Teams:** Agile teams are typically cross-functional and self-organizing. Team members have the autonomy to make decisions and adapt to changing priorities.

- **Continuous Improvement:** Agile promotes a culture of continuous improvement. Teams reflect on their processes and outcomes and make adjustments to enhance efficiency and quality.

- **Adaptability:** Agile teams embrace change and are responsive to shifting priorities or customer needs. This adaptability is a core principle of Agile development.

**Example:**

Company developing a new app might start with a basic version, then add features and make improvements based on user feedback in subsequent iterations. This approach allows the product to evolve and improve over time, rather than trying to get everything perfect in a single, upfront effort.

**Key Concepts:**

- **Scrum:** Scrum is one of the most popular Agile frameworks. It prescribes roles (Scrum Master, Product Owner, Development Team), events (Daily Standup, Sprint Planning, Sprint Review), and artifacts (Product Backlog, Sprint Backlog) to structure the development process.

- **Kanban:** Kanban is another Agile framework that focuses on visualizing work, limiting work in progress, and optimizing workflow. It uses boards with columns to represent stages of work and emphasizes the pull principle.

- **User Stories:** Agile teams often use user stories to capture user requirements in a simple, user-focused format. User stories consist of a short narrative, acceptance criteria, and a priority.

- **Backlog:** The backlog is a prioritized list of features, user stories, or tasks to be completed. It serves as a dynamic document that guides development.

- **Sprint:** In Scrum and some other Agile approaches, a sprint is a time-boxed development, usually lasting two to four weeks. 

### Scrum Framework

**Explanation:**

Scrum is one of the most widely adopted Agile frameworks for software development. It provides a structured approach to managing complex projects while emphasizing adaptability, collaboration, and customer-centricity.

**Key Concepts:**

1. **Roles:**

- **Scrum Master:** The Scrum Master is a servant-leader who facilitates the Scrum process. They ensure that the Scrum team understands and follows Scrum principles, remove impediments, and facilitate collaboration.

- **Product Owner:** The Product Owner represents the customer or stakeholder and is responsible for defining and prioritizing the product backlog. They make decisions about what features to build and the order in which they should be developed.

- **Development Team:** The Development Team consists of cross-functional members who are responsible for delivering the increments of the product during each sprint. They self-organize and determine how to complete the work.

2. **Artifacts:**

- **Product Backlog:** The Product Backlog is a prioritized list of features, user stories, or tasks that represent the work to be done on the project. It is dynamic and evolves as new requirements and feedback emerge.

- **Sprint Backlog:** The Sprint Backlog is a subset of items from the Product Backlog that the Development Team commits to completing during a sprint. It represents the work to be done in the current iteration.

- **Increment:** The Increment is the product's potentially shippable product increment at the end of each sprint. It should be in a usable state and demonstrate tangible progress.

3. **Events:**

- **Sprint:** A Sprint is a time-boxed development iteration, typically lasting two to four weeks. During a sprint, the Development Team works on a set of items from the Sprint Backlog with the goal of delivering a potentially shippable increment.

- **Sprint Planning:** At the beginning of each sprint, the Scrum Team holds a Sprint Planning meeting. During this meeting, they determine what work to take from the Product Backlog and create a detailed Sprint Backlog.

- **Daily Scrum (Daily Standup):** The Daily Scrum is a short daily meeting where team members discuss their progress, challenges, and plans for the day. It helps ensure alignment and quick issue resolution.

- **Sprint Review:** At the end of each sprint, the Scrum Team holds a Sprint Review meeting to demonstrate the work completed during the sprint. Stakeholders provide feedback, and the Product Owner reviews the Product Backlog.

- **Sprint Retrospective:** After the Sprint Review, the team conducts a Sprint Retrospective to reflect on the sprint's performance. They discuss what went well, what could be improved, and identify action items for the next sprint.

### Most of the Time Using Mixed Approach

- **Waterfall-Agile Hybrid:** For projects with well-defined requirements but also some degree of uncertainty, a combination of Waterfall and Agile can be used. The initial stages of the project (requirements, design) can be done using Waterfall, and the later stages (implementation, testing, deployment) can be done using Agile.

- **V Model-Agile Hybrid:** For projects that require rigorous testing and also need to accommodate changing requirements, a combination of the V Model and Agile can be used. The V Model can be used for the initial stages (requirements, design, implementation), and Agile can be used for the later stages (testing, deployment).

- **Iterative-Spiral Hybrid:** For projects with high risk and also a need for frequent iterations, a combination of the Iterative and Spiral models can be used. The Iterative model can be used for the initial development, and the Spiral model can be used for risk analysis and mitigation.

- **DevOps-Lean Hybrid:** For projects that require frequent deployments and also a focus on waste reduction, a combination of DevOps and Lean can be used. DevOps can be used for the development and deployment processes, and Lean can be used for process improvement and waste reduction.

- **Agile-DevOps Hybrid:** For projects that require flexibility in requirements and also frequent deployments, a combination of Agile and DevOps can be used. Agile can be used for the development process, and DevOps can be used for the deployment process.

## Project Management Tools

- [Atlassian](#atlassian)
  - [Jira](#jira)
    - [User Story vs Use Cases](#user-story-vs-use-cases)
    - [Acceptance Criteria](#acceptance-criteria)
    - [Backlog grooming](#backlog-grooming)

### Atlassian

**Resources:**

- [Site: Atlassian](https://www.atlassian.com/)

### Jira

**Explanation:**

Jira is a project and issue tracking software developed by Atlassian, primarily known for its capabilities in agile project management.

**Key Concepts:**

- Agile project management, such as Scrum and Kanban.

- Requirement and test case management.

- Integrating with CI/CD (Continuous Integration/Continuous Deployment) tools and Git repositories.

- DevOps team collaboration and tracking.

### User Story vs Use Cases

**Explanation:**

User Stories and Use Cases are both methods used in software development to identify and describe the functionalities of a system. They serve as a means to communicate the requirements from the perspective of the user.

**Key Concepts:**

- **Use Cases:** provide a more detailed, structured, and formal description of the system behavior. A use case includes the type of user (actor) and what they can do (interactions), and may also include preconditions, postconditions, and error conditions. Use cases are used in more traditional development methodologies to define requirements.

- **User Stories:**simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system. They typically follow a simple template: `"As a [type of user], I want [some goal] so that [some reason]"`. User stories are used in Agile development methodologies for defining requirements, but also as a way to create a conversation about the requirement.

- **Actors:** Actors are external entities, such as users, customers, administrators, or other systems, that interact with the application.

- **Description:** The "Description" in the context of a User Story or Use Case is a brief explanation of the functionality or feature from the user's perspective. It outlines the expected behavior of the system when the user interacts with it to achieve a specific goal.

### Acceptance Criteria

**Explanation:**

These are the specific conditions or tasks that must be completed to fulfill a user story or use case. They should be clearly defined, measurable, and directly related to the user's goal. Acceptance criteria are written in a clear, non-technical language that focuses on the user's needs and expectations. Acceptance criteria define how to know when that goal has been met.

**Key Concepts:**

- Acceptance criteria are specific, measurable, and testable conditions.

- They help ensure that the user story meets the user's expectations and fulfills its intended purpose.

- Acceptance criteria should be written in collaboration with the product owner and stakeholders to ensure alignment with user needs.

### Backlog grooming

**Explanation:**

Backlog grooming is an essential practice in Agile project management, particularly in Scrum. It involves the process of reviewing, refining, and prioritizing items in the product backlog to ensure they are well-prepared and ready for implementation. The backlog consists of user stories, features, and tasks that represent the work to be done in the project.

**Key Concepts:**

- **Purpose:** Backlog grooming helps keep the product backlog organized and ensures that the top-priority items are well-defined and ready for development. It also helps the team maintain a shared understanding of the work to be done.

- **Timing:** Backlog grooming is an ongoing activity that takes place throughout the project's lifecycle. It is not limited to a specific phase but should occur regularly, typically before a sprint planning meeting.

- **Prioritization:** During backlog grooming, the product owner and team prioritize backlog items based on their importance and value to the project. This ensures that the most critical work is at the top of the backlog.

- **Refinement:** Backlog items may need refinement to make them clear, concise, and actionable. This includes adding details, acceptance criteria, estimates, and any necessary attachments (designs).

- **Team Collaboration:** Backlog grooming is a collaborative effort involving the product owner, development team, and other stakeholders. It facilitates discussions, clarifications, and the resolution of any questions or concerns.

**Example:**

- [Example: backlog](./assets/examples/backlog.md)
