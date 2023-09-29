# Table of Contents

- [Teamwork(Project Managment)](#teamwork-project-managment)
    - [Software Development Life Cycle](#software-development-Life-Cycle)
    
# Software Development Life Cycle

- [Software Development Approaches Comparison](#software-development-approaches-comparison)
  - [Waterfall Model](#waterfall-model)
  - [V Model](#v-model)
  - [Agile Methodologies](#agile-methodologies)
    - [Scrum Framework](#scrum-framework)
  - [Most Of Time Using Mixed Approach](#most-of-time-using-mixed-approach)
- [Project Management](#project-management)
  - [Atlassian](#atlassian)
    - [Jira](#jira)
      - [User Story vs Use Cases](#user-story-vs-use-cases)
      - [Acceptance Criteria](#acceptance-criteria)
      - [Backlog grooming](#backlog-grooming)

**Explanation:**

**Software Development Life Cycle (SDLC)** is a systematic and structured approach to software development that defines a set of processes or phases to guide the creation, maintenance, and management of software applications or systems. It serves as a roadmap for developers, project managers, and stakeholders to ensure that software is developed efficiently, with high quality, and according to specified requirements.

![SDLC](./assets/images/SDLC.png)

**Key Concepts:**

1. **Planning:** In this initial phase, project objectives, scope, and requirements are defined. The team outlines the project's goals, timeline, budget, and resources.
  
2. **Requirements Gathering:** The process of collecting and documenting detailed requirements from stakeholders, including users, clients, and business analysts. This phase helps in understanding what the software should do.

3. **Design:** During this phase, the software's architecture, data structures, user interface, and system components are planned and designed. It lays the foundation for actual development.
  
4. **Implementation (Coding):** Developers write the actual code based on the design specifications. This phase involves coding, unit testing, and integration of software modules.

5. **Testing:** Comprehensive testing is performed to identify and fix defects or bugs. It includes various types of testing such as functional, integration, performance, and user acceptance testing.
  
6. **Deployment (Release):** Once the software passes testing and quality checks, it is deployed to production or made available to users. Deployment may involve data migration and system setup.

7. **Maintenance and Support:** After deployment, the software requires ongoing maintenance, updates, and support to address issues, adapt to changing requirements, and ensure its continued functionality.
Monitoring and Performance Optimization: After the app's deployment, "X Company" continues to monitor its performance, availability, and user experience. This includes tracking key performance indicators (KPIs), server health, and user feedback.

**Resources:**

- [Software Development Life Cycle Software Development Process](https://www.guru99.com/software-development-life-cycle-tutorial.html)

## Software Development Approaches Comparison

**Key Concepts:**

- [File: Software Development Approaches Comparison](./assets/sdlc/approachesComparison.md)

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

**Resources:**

- [Article: Waterfall Model](https://www.guru99.com/what-is-sdlc-or-waterfall-model.html)

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

- **Early Defect Detection: **The V Model places a strong emphasis on early defect detection and prevention through verification activities. This reduces the cost and effort required to fix issues later in the project.

- **Phased Testing:** Different levels of testing (unit testing, integration testing, system testing, and user acceptance testing) are planned and executed in parallel with corresponding development phases.
0
- **Traceability:** The V Model promotes traceability, ensuring that each requirement is traced to a corresponding design and testing activity. This helps maintain alignment with customer requirements.

- **Iterative Feedback:** Feedback from validation activities can lead to adjustments in the development process, allowing for iterative improvements.

- **Structured and Documented:** Like the Waterfall Model, the V Model places importance on documentation and thorough planning.

**Resources:**

- [V Model](https://www.guru99.com/v-model-software-testing.html)

### Agile Methodologies

**Explanation:**

Agile Methodologies are a set of principles and practices for software development that prioritize flexibility, collaboration, and customer-centricity. Unlike traditional approaches that follow a rigid, linear path (such as the Waterfall model), Agile Methodologies embrace change and allow teams to adapt to evolving requirements throughout the development process.

Methodologies provide a guiding philosophy and principles for how development teams should approach their work, while models define the specific steps and sequence of activities within a project. Agile is a methodology that embraces flexibility and collaboration, while Waterfall is a model that follows a sequential, phased approach to development.

*Agile Methodologies value:*

- **Customer Collaboration:** Agile encourages continuous collaboration with customers and stakeholders. Their feedback is actively sought and incorporated into the development process.

- **Iterative Development:** Projects are divided into small, manageable iterations or sprints. Teams work on a subset of features during each iteration, allowing for frequent releases and feedback loops.

- **Self-Organizing Teams:** Agile teams are typically cross-functional and self-organizing. Team members have the autonomy to make decisions and adapt to changing priorities.

- **Continuous Improvement:** Agile promotes a culture of continuous improvement. Teams reflect on their processes and outcomes and make adjustments to enhance efficiency and quality.

- **Adaptability:** Agile teams embrace change and are responsive to shifting priorities or customer needs. This adaptability is a core principle of Agile development.

**Key Concepts:**

- **Scrum:** Scrum is one of the most popular Agile frameworks. It prescribes roles (Scrum Master, Product Owner, Development Team), events (Daily Standup, Sprint Planning, Sprint Review), and artifacts (Product Backlog, Sprint Backlog) to structure the development process.

- **Kanban:** Kanban is another Agile framework that focuses on visualizing work, limiting work in progress, and optimizing workflow. It uses boards with columns to represent stages of work and emphasizes the pull principle.

- **User Stories:** Agile teams often use user stories to capture user requirements in a simple, user-focused format. User stories consist of a short narrative, acceptance criteria, and a priority.

- **Backlog:** The backlog is a prioritized list of features, user stories, or tasks to be completed. It serves as a dynamic document that guides development.

- **Sprint:** In Scrum and some other Agile approaches, a sprint is a time-boxed development, usually lasting two to four weeks. 

**Resources:**

- [Agile Methodologies](https://www.guru99.com/agile-scrum-extreme-testing.html#:~:text=The%20Agile%20software%20development%20methodology%20is%20one%20of,improvement%2C%20team%20collaboration%2C%20evolutionary%20development%2C%20and%20early%20delivery.)

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

**Resources:**

- [Article: Scrum Framework](https://www.guru99.com/scrum-testing-beginner-guide.html)

### Most Of Time Using Mixed Approach

**Key Concepts:**

1. **Project Complexity:** Companies may choose to use a mixed approach when dealing with projects of varying complexity within the same organization. For example, smaller, more straightforward projects may benefit from Agile, while larger, more complex projects may require a Waterfall approach.

2. **Legacy Systems:** Companies with existing legacy systems or technologies may find it challenging to fully adopt Agile practices. In such cases, they may use a mixed approach to accommodate both new and old systems or processes.

3. **Contractual Obligations:** External contracts or agreements with clients or partners may specify the use of Waterfall methodologies, while the company's internal development teams prefer Agile. To meet contractual obligations and maintain client relationships, a mixed approach may be chosen.

4. **Risk Management:** Companies may opt for a mixed approach to balance risk. They might use Waterfall for critical project phases where requirements are well-defined and Agile for phases with more uncertainty or changing requirements.

5. **Resource Constraints:** Limited resources, such as skilled Agile practitioners, can lead companies to use a mixed approach. They may allocate Agile teams to the most critical aspects of a project and use Waterfall for less critical components.

6. **Organizational Culture:** Sometimes, organizations have a mix of project managers and team members with different skill sets and preferences. Adapting a mixed approach can align with the existing culture and capabilities.

7. **Client Demands:** Clients may request a specific approach based on their familiarity with a methodology or industry norms. To accommodate client demands, a mixed approach may be employed.

8. **Transition Period:** During the transition from Waterfall to Agile or vice versa, organizations may use a mixed approach as a temporary measure. This allows teams to gain experience with the new methodology while maintaining existing processes.

9. **Regulatory Requirements:** In regulated industries, companies may need to adhere to certain Waterfall-like documentation and auditing processes for compliance. However, they can still incorporate Agile practices where feasible.

10. **Project-Specific Needs:** Ultimately, the choice of a mixed approach can depend on the unique requirements and constraints of a particular project. Companies may tailor their methodology to fit the specific circumstances.

## Project Management

### Atlassian

### Jira

### User Story vs Use Cases

### Acceptance Criteria

### Backlog grooming