# Content of Table: Summary

- [Summary SDLC level 1](#summary-sdlc-level-1)
- [Summary SDLC level 2](#summary-sdlc-level-2)
- [Summary SDLC level 3](#summary-sdlc-level-3)
- [Summary SDLC level 4](#summary-sdlc-level-4)

## Summary SDLC level 1

The **Software Development Life Cycle (SDLC)** is a structured way of organizing how software is built from an initial idea to a working product. It defines a sequence of activities that guide development, including **requirements analysis**, **design**, **implementation**, **testing**, **deployment** and **maintenance**.

The main purpose of SDLC is to provide **structure, control and predictability**. By following a defined process, teams can better manage complexity, reduce risks and ensure that the final product meets expectations.

Testing is an **integral part of the SDLC** and is not limited to a single phase. It supports multiple stages of development and provides **continuous feedback about quality**.

Key things to understand about testing in SDLC

- Testing is performed **throughout the lifecycle**, not only at the end  
- It helps **detect defects early** and reduce risk  
- It ensures the system meets **requirements and user expectations**  

Two important **sequential models** show how SDLC can be structured

The **Waterfall model**

- Development follows a **linear sequence of phases**  
- Each phase is completed before the next begins  
- Testing happens **after implementation**  
- Feedback is **late**, making changes more difficult and costly  

The **V-Model**

- Links **development phases with testing activities**  
- Testing is **planned early** and aligned with development  
- Based on  
  - **Verification** which checks that the system is built correctly  
  - **Validation** which checks that the system meets user needs  

The key difference between these models is how testing is integrated

- Waterfall treats testing as a **separate final phase**  
- V-Model integrates testing through **verification and validation**  

Key things to remember from Level 1

- SDLC provides a **structured way of building software**  
- Testing is **essential and continuous**, even in structured models  
- Sequential models provide **control and clarity** but limit flexibility  
- Feedback is often **delayed**, which increases risk

## Summary SDLC level 2

Level 2 introduces a shift from structured sequential development to more **flexible and adaptive approaches**.

Instead of building the entire system in a single flow, development is organized into smaller steps that allow **continuous improvement and feedback**.

This approach is based on two key ideas

- **Iterative development** focuses on improving the system through repeated cycles  
- **Incremental development** focuses on building the system in smaller parts  

These ideas are combined in the **Iterative and Incremental model**

- Software is delivered in **increments**, each providing usable functionality  
- Each increment is refined through **iterations**  
- Development includes repeated cycles of **planning, design, implementation and testing**  
- Feedback is collected continuously and used to improve the product  

This approach allows

- **early delivery of value**  
- **continuous improvement**  
- **reduced risk compared to sequential models**  

Agile builds on these ideas but focuses on **how teams work**

The **Agile approach**

- Organizes work into **short cycles (iterations)**  
- Emphasizes **collaboration, communication and adaptability**  
- Encourages teams to respond to **changing requirements**  
- Promotes a **shared responsibility for quality**  

Key Agile values

- **Individuals and interactions over processes and tools**  
- **Working software over extensive documentation**  
- **Customer collaboration over contract negotiation**  
- **Responding to change over following a fixed plan**  

These values support

- **continuous feedback**  
- **faster adaptation**  
- **better alignment with user needs**  

Key difference between sequential and iterative approaches

- Sequential development follows a **fixed, linear structure**  
- Iterative development uses **repeated cycles with continuous feedback**  

Key things to remember from Level 2

- Modern development is based on **iterations and increments**  
- Software is delivered **step by step and improved over time**  
- Agile focuses on **team collaboration and adaptability**  
- Feedback is **continuous and drives improvement**

## Summary SDLC level 3

Level 3 focuses on how **testing is performed depending on the development approach** and how it is integrated into the software lifecycle.

The way software is built directly influences **when testing happens**, **how often it is performed** and **how feedback is obtained**.

Testing in **sequential models**

- Testing is performed **after implementation is completed**  
- It is organized as a **separate phase**  
- Activities are **planned in detail upfront**  
- Feedback is **delayed**, making defects harder and more costly to fix  
- Automation is introduced **later**, mainly for **regression testing** and maintenance  

Testing in **iterative and Agile approaches**

- Testing is **continuous and integrated** into development  
- It is performed in **every iteration**  
- Each cycle verifies **new functionality and existing features**  
- Feedback is **early and continuous**  
- Documentation is **flexible and evolves over time**  
- Automation supports **repeated testing and faster validation**  

In Agile

- Testing is a **shared responsibility across the team**  
- Developers, testers and stakeholders collaborate continuously  
- Communication is prioritized over rigid processes  
- Quality is built into the product during development  

Choosing a suitable SDLC model

- Stable and well-defined requirements -> **sequential models**  
- Changing or unclear requirements -> **iterative and Agile approaches**  
- The choice depends on **project size, risk, flexibility and team structure**  

Testing approaches in software development define **how tests are created and used**

- **Test-Driven Development (TDD)** Tests are written before code to guide implementation and verify unit behavior  

- **Acceptance Test-Driven Development (ATDD)** Tests are based on acceptance criteria and created collaboratively to ensure requirements are met  

- **Behavior-Driven Development (BDD)** System behavior is described using scenarios to create a shared understanding between technical and non-technical stakeholders  

Key things to remember from Level 3

- Testing changes based on the **development model**  
- Sequential models use **late and structured testing**  
- Iterative and Agile approaches use **continuous testing**  
- Automation becomes more important as testing is repeated  
- Testing approaches such as **TDD, ATDD and BDD** integrate testing directly into development

## Summary SDLC level 4

Level 4 focuses on how testing is **applied in real development environments**, where teams work continuously, collaborate closely and maintain quality across the entire lifecycle.

Planning and collaboration ensure that **quality is considered from the beginning**

- Work is organized through **release planning and iteration planning**  
- Requirements are refined into **clear and testable work items**  
- Testers contribute to **risk identification, testability and effort estimation**  
- Quality is defined using **acceptance criteria** and **Definition of Done**  
- Development and testing activities are aligned from the start  

Continuous improvement ensures that teams **learn and adapt over time**

- Teams regularly perform **retrospectives**  
- They review **what worked, what did not and what to improve**  
- Improvements are translated into **actionable changes**  
- Success depends on applying and tracking these improvements  

Testing strategies across the lifecycle define **where testing happens**

- **Shift-left testing** moves testing **earlier** into requirements, design and development  
- Focuses on **early defect detection and prevention**  
- **Shift-right testing** extends testing **after release** into production  
- Focuses on **real-world behavior, monitoring and user feedback**  
- Together, they ensure testing covers the **entire lifecycle**  

Continuous testing and delivery focus on **fast and consistent feedback**

- **Continuous Integration (CI)** integrates code frequently and runs automated tests  
- **Continuous Delivery (CD)** ensures changes are always ready for release  
- Automation enables **repeated testing and quick validation**  
- Testing becomes part of the **delivery pipeline**, not a separate phase  

Risk and lifecycle coverage ensure that testing focuses on **what matters most**

- Risks change across stages of development  
- Early stages focus on **requirements and design risks**  
- Later stages focus on **integration, performance and real usage risks**  
- After release, testing continues through **maintenance and monitoring**  
- Teams apply **risk-based thinking continuously**, not only during planning  

Key things to remember from Level 4

- Testing is applied **across the entire lifecycle**, not in isolated phases  
- Quality is built through **planning, collaboration and shared responsibility**  
- Teams improve continuously through **feedback and retrospectives**  
- Testing strategies such as **shift-left and shift-right** extend coverage  
- Automation and CI/CD enable **fast, continuous and reliable testing**  
- Risk-based thinking ensures testing remains **focused and effective**
