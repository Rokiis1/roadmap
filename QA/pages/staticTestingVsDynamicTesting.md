# Static Testing vs Dynamic Testing

- [Static Testing](#static-testing)
- [Dynamic Testing](#dynamic-testing)

## Static Testing

**Explanation:**

Static Testing refers to the process of evaluating a software application or component without executing code. It involves examining the code, design, and documentation to identify errors, ensure compliance with coding standards, and improve the overall quality of the software. This type of testing is performed during the early stages of the software development life cycle (SDLC) and is typically non-execution-based.

```
   +-------------------+
   |  Software Testing |
   +---------+---------+
             |
   +---------v---------+
   | Static Testing    |
   |                   |
   | - Reviews         |
   | - Inspections     |
   | - Walkthroughs    |
   | - Static Analysis |
   +-------------------+
```

  - **Reviews:** A process where team members examine code, design, or documentation to identify issues.
  
  - **Inspections:** A formal process of reviewing work products to find defects early in the development process.
  
  - **Walkthroughs:** An informal, yet structured, process of reviewing documents with the goal of finding defects.
  
  - **Static Analysis:** The examination of code or other software artifacts without executing them, often using automated tools to find issues.

**Key Concepts:**

1. **Types of Static Testing:**
   - **Code Reviews:** Peer review of source code to identify defects and ensure coding standards.
   - **Static Analysis:** Using tools to analyze code, design, or documentation without executing the program.

2. **Benefits of Static Testing:**
   - **Early Defect Detection:** Identifying issues in the early stages of development reduces the cost of fixing defects.
   - **Improved Code Quality:** Ensures adherence to coding standards and best practices.
   - **Knowledge Sharing:** Facilitates knowledge transfer among team members during code reviews.

3. **Examples of Static Testing Activities:**
   - **Code Inspections:** In-depth examination of source code by a group of developers.
   - **Walkthroughs:** Step-by-step review of requirements, design, or code with team members.

4. **Objective:**
   - **Defect Prevention:** Focuses on finding and fixing defects before the code is executed.

## Dynamic Testing

**Explanation:**

Dynamic Testing involves the execution of the software to validate its behavior and functionality. It is performed during runtime and includes various testing techniques to ensure that the software meets specified requirements. Dynamic testing helps identify defects related to the system's actual execution and is typically conducted in later stages of the SDLC.

```plaintext
   +-------------------+
   |  Software Testing |
   +---------+---------+
             |
   +---------v---------+
   | Dynamic Testing   |
   |                   |
   | - Unit Testing    |
   | - Integration     |
   |   Testing         |
   | - System Testing  |
   | - Acceptance      |
   |   Testing         |
   |   - End-to-End    |
   +-------------------+
```

- **Software Testing:** The broader concept of ensuring the quality and correctness of software.

- **Dynamic Testing:** A phase of testing that involves the execution of the software.

  - **Unit Testing:** Testing individual units or components of the software in isolation.
  
  - **Integration Testing:** Testing the combination of units or systems to ensure they work together.
  
  - **System Testing:** Testing the entire system as a whole to verify that it meets the specified requirements.
  
  - **Acceptance Testing:** Verifying that the software meets the acceptance criteria and is ready for deployment.

    - **End-to-End Testing:** Testing the entire application workflow, including all components and dependencies, to ensure the system works as intended from start to finish.

**Key Concepts:**

1. **Types of Dynamic Testing:**
   - **Unit Testing:** Testing individual units or components of the software in isolation.
   - **Integration Testing:** Testing the combination of units or systems to ensure they work together.
   - **System Testing:** Evaluating the entire system's functionality in a complete, integrated environment.

2. **Benefits of Dynamic Testing:**
   - **Verification of Functionality:** Ensures that the software functions as intended.
   - **Identification of Runtime Defects:** Detects defects that may only become apparent during execution.
   - **Performance Testing:** Evaluates how the system performs under various conditions.

3. **Examples of Dynamic Testing Activities:**
   - **Functional Testing:** Verifies that the software functions according to specified requirements.
   - **Regression Testing:** Ensures that new changes do not negatively impact existing functionality.

4. **Objective:**
   - **Defect Detection:** Focuses on finding defects during or after the execution of the software.