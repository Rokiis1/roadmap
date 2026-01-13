# Content Of Table of the Fundamentals of Testing

- [What is Testing?](#what-is-testing)
- [Test Objectives](#test-objectives)
- [Testing and Debugging](#testing-and-debugging)
- [Errors, Defects, Failures, and Root Causes](#errors-defects-failures-and-root-causes)
- [Principles of Testing](#principles-of-testing)
- [Test Process](#test-process)
- [Test Activities](#test-activities)
- [Test Roles](#test-roles)
- [QA vs QC](#qa-vs-qc)
- [Independence of Testing](#independence-of-testing)
- [Whole Team Approach](#whole-team-approach)

In this module, we build the foundation for everything else in QA. Before learning techniques, writing test cases, or using tools, we need to understand what testing is, why we do it, and how teams talk about quality.

We will start with the meaning of testing and the ideas behind it (**verification**, **validation**, **reliability**). Then we’ll move to test objectives, clarify the difference between **testing** and **debugging**, and learn the key terms used in QA: **error**, **defect**, **failure**, and **root cause**. After that, we’ll cover testing principles and the test process, and finish with roles and how teams organize quality work.

## What is Testing?

**Explanation:**

Testing is a process in software development that checks if a product or application works as required. It confirms that the product does what it is supposed to do without mistakes and meets quality standards. In short, testing makes sure every feature works as planned and performs well. This process applies not only to software but also to any product or system that needs to work reliably.

When we talk about testing, two important ideas appear very early: **verification** and **validation**.

**Verification** is about checking whether the product is built correctly. This is typically done by reviewing work and confirming that each part follows the design and requirements.

**Validation** is about confirming that the product solves the user’s real needs. In other words, even if something is built “correctly,” it still must be the right solution for its intended use.

Testing is also connected to reliability. Reliability means the product works well every time it is used and performs as expected, even under different conditions.

Another important point is that **testing is bigger than executing test cases**. Testing also includes **planning**, **managing**, **monitoring**, and **controlling the testing process**. Different approaches can exist depending on what you focus on, such as **product-oriented**, **process-oriented**, **user-oriented**, **time-oriented**, **rules-oriented**, and **scenario-oriented**.

Testing activities can be **dynamic** or **static**. **Dynamic testing** means executing the software. **Static testing** means reviewing code and documentation without execution.

Finally, testing is necessary because it reduces the risk of failures in operation. It helps ensure that features work as planned and meet stakeholder expectations.

![alt text](./assets/images/whatcanwetest.png)

Now that we understand what testing is, we need to answer the next question: what exactly are we trying to achieve when we test? That is where test objectives come in.

## Test Objectives

Test objectives are the specific goals and purposes of testing. They guide testers to align with the overall project goals and ensure that the software meets the required standards and user expectations.

One objective is **evaluating work products**. That means **reviewing requirements**, **designs**, and **code to catch issues early**, before they become expensive problems later.

Another objective is **triggering failures and finding defects**. During testing we try to create situations where the system fails, because failures help reveal defects that need to be fixed.

Testing also aims to ensure **required coverage**. This means confirming that **critical parts** of the software are actually tested, instead of testing randomly or only the “easy” paths.

A purpose of testing is **reducing risk**. Testing reduces the chance that defects will reach production and affect quality.

Finally, testing **verifies requirements**. It checks whether the software matches the specified **requirements** and **meets user expectations**.

At this point we know what testing is and what testing tries to achieve. But in teams, people often mix up **testing** with **debugging**. These are related, but they are not the same, so we separate them clearly next.

## Testing and Debugging

**Testing** and **debugging** are two steps in the software development process that work together.

**Testing** is the process of **finding defects**. It involves executing the product to identify issues. This activity is performed by testers to discover defects and report them.

**Debugging** is the process of **analyzing and fixing defects**. It involves **root cause analysis** and correcting the identified issues. This activity is performed by developers to analyze why the defect happened and to implement a fix.

So **testing** reveals that a problem exists. **Debugging** explains why it exists and removes it.

To communicate clearly about problems, QA uses specific terminology. The next section explains the difference between an **error**, a **defect**, and a **failure**, and also introduces the idea of **root cause**.

## Errors, Defects, Failures, and Root Causes

These terms describe different aspects of problems that can occur during development and operation.

**Explanation:**

These terms in the context of software testing to describe different aspects of problems that can occur during the development and operation of software.

An **error** (a mistake) is a human action or decision that produces an incorrect or unexpected result.

A **defect** (a bug) is a flaw in the system. It is the result of an error made by the creators of the application.

A **failure** happens during execution. It is the result of a defect when the software runs and behaves incorrectly.

A **root cause** is the deepest underlying reason for a defect or a failure.

![alt text](./assets/images/errors_defects_failures_root_cause.png)

Now that we have the basic vocabulary, we can talk about the principles of testing. These principles guide testing decisions, especially because we cannot test everything.

## Principles of Testing

The principles of testing are fundamental guidelines that dictate **what to test**, **how to test**, and **when to test**, following a **rule-oriented approach**.

**Testing can show the presence of defects**, but it cannot prove that there are no defects. Even if no issues are detected, it does not mean the software is completely correct.

**Exhaustive testing is impossible**. It is not practical to test every possible **input**, **scenario**, or **path**. Because of this, testing focuses on **critical areas**, often using techniques such as **risk analysis**, **black-box**.

**Early testing is important**. Starting testing activities early helps catch defects sooner and reduces the cost and impact of later rework.

![alt text](./assets/images/earlyTesting.png)

**Defect clustering (Pareto principle)** means that a small number of modules often contain the majority of defects. This helps guide where to focus testing effort.

**The pesticide paradox** means that repeating the same tests over time can reduce their effectiveness. Tests need to be reviewed and updated to remain useful.

**Testing is context dependent**. Different products require **different testing approaches**. A **testing strategy** must be tailored to the specific project characteristics and risks.

**The absence-of-errors fallacy** means that even if a system has no detected defects, it might still fail to deliver value. A product must meet user needs and business goals, not only be defect-free. **Validation** matters as much as **verification**.

Principles explain how we should think about testing. Next, we need a structured way to apply that thinking in projects. That structure is the **test process**.

## Test Process

The test process is a structured approach that covers all activities from **planning** through **closure**. It ensures that testing is aligned with project **objectives**, **risks** are **managed**, and the final product is validated against its requirements.

**Test planning** defines **objectives**, **approach**, **schedule**, **resources**, and **entry/exit criteria**.

**Test monitoring and control** tracks progress against the plan, makes adjustments, and updates risks.

**Test analysis** examines the **test basis** (**requirements**, **designs**, **user stories**) to identify what needs testing.

**Test design** develops **test cases** and related **artifacts** such as **test data** and **test charters**.

**Test implementation** prepares the **artifacts** needed for **execution**, including **test procedures**, **automation scripts**, and **test environment** setup.

**Test execution** runs tests, compares **actual** and **expected** results, **logs outcomes**, and **reports defects**.

**Test completion** finalizes testing by reviewing **exit criteria**, **archiving artifacts**, and **documenting lessons learned**.

After we understand the process, we can describe what gets produced during testing work. That brings us to test activities and the outputs they create.

## Test Activities

**Test activities** involve a series of tasks to ensure that a software product meets quality standards. Throughout these activities, tangible outputs are produced.

An **artifact** is an individual piece produced during testing, such as **test cases**, **scripts**, **data**, or **logs**.

**Testware (test artifacts)** includes all technical outputs created or used during testing, such as **test cases**, **scripts**, **logs**, **configuration files**, and **tools** that support repeatable and consistent testing.

**Deliverables** are artifacts that are formally provided to **stakeholders**, such as a **Test Plan**, **Test Summary Report**, or **Test Closure Report**.

**Test planning** sets **objectives**, **timelines**, **resources**, and **entry/exit criteria**.

**Test monitoring and control** **tracks progress**, **issues control** directives, and **updates risks**.

**Test analysis** identifies **testable features**, derives **test conditions**, and **assesses risks**.

**Test design** expands conditions into detailed **test cases** and **supporting testware**, defining **test data** and **environment** needs.

**Test implementation** prepares the **testware**, builds **test suites**, and sets up the **environment**.

**Test execution** performs the **tests**, **logs results**, and **reports defects**.

**Test completion** evaluates **exit criteria**, archives useful **testware**, and **produces** a completion report with lessons learned.

Now that we know what happens in testing work, we need to clarify who does what. That is why test roles exist.

## Test Roles

Test roles define the responsibilities and contributions of different individuals involved in the testing process.

**Test management** is responsible for the test process and the test team. This role focuses on planning, monitoring and control, and test completion. The work includes defining objectives, choosing the approach, setting timelines, selecting tools, and managing the overall process.

A **test engineer** is responsible for technical testing work. This role focuses on analysis, design, implementation, and execution. The work includes analyzing the test basis, writing test cases, preparing data, setting up environments, executing tests, and reporting defects.

In small organizations, one person may cover both roles. In other organizations, responsibilities vary depending on context, skills, and team structure. Different people may take on different responsibilities at different times.

Organizations also use the terms **QA** and **QC**, and these terms affect how quality work is organized. So we clarify them next.

## QA vs QC

**Explanation:**

Quality Assurance (**QA**) and Quality Control (**QC**) are two aspects of quality management.

![QAvsQC](./assets/images/qavsqc.png)

**Quality Assurance** is a proactive process that focuses on **preventing defects in the development process**. **QA** is **process-oriented** and aims to improve and stabilize production and associated processes to avoid issues that lead to defects.

**Quality Control** is a reactive process that focuses on **identifying defects in the final product**. **QC** is **product-oriented** and aims to identify and correct defects in the finished product before it reaches the customer.

Even though teams collaborate, independence of testing is still a key idea. Independence affects objectivity and how likely it is to find defects.

## Independence of Testing

**Independence of testing** means that testing is performed by **individuals** or **teams separate** from those who **developed the software**. This helps reduce **bias** and increases the chances of finding defects.

Independent testers can bring objectivity and recognize issues that developers may overlook due to familiarity.

Independence can exist at different levels. Testing may be done by the **author**, by a **peer**, by a **separate testing team** within the organization, or by e**xternal testers** outside the organization.

Independence has **benefits**, such as challenging assumptions and finding different types of failures. It also has **drawbacks**, such as isolation, reduced collaboration, or reduced developer ownership of quality.

A balanced approach that matches project context is often best.

Modern teams often try to combine quality responsibility across the team. That is why the whole team approach is important to understand.

## Whole Team Approach

The whole team approach means that everyone on the team **developers**, **testers**, and **business representatives** is responsible for quality. The team works in a shared space (physical or virtual), which improves communication and collaboration.

Collaboration and shared responsibility reduce misunderstandings and help quality become part of everyday work, not something “added at the end.”

Developers can help define **tests** and **fix defects**, while testers contribute insights that improve the product.

**Co-location** (or close virtual collaboration) supports faster problem solving.

Knowledge transfer improves the team overall quality capability.

Context matters, and some projects (such as safety-critical systems) may still require higher independence.
