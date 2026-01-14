# Content of test management level 1

- [Defect Management](#defect-management)

Test management is the **discipline of organizing, guiding, and controlling testing activities throughout the software development lifecycle**. Its purpose is to ensure that testing is performed in a structured way so that software quality can be properly evaluated and communicated.

Test management is not only about **documents** or **tools**. It is about responsibility, coordination, and decision making. Through test management, testing becomes a **controlled process** rather than a **random activity**.

Software systems are **complex**, development **time is limited**, **resources are constrained**, and **risks must be controlled**. Because of this, testing cannot rely only on individual effort. **Test management** provides structure to handle these challenges.

Test management helps teams decide what should be **tested first**, understand what has **already been tested**, **track** discovered problems, and **report** the quality status of the product to stakeholders.

At **Test Management Level 1**, the focus is on understanding **responsibility**, not on **complex processes**.

## Defect Management

Defect management is the systematic process of identifying, documenting, prioritizing, and resolving anomalies (defects) found during testing. Its main purpose is to ensure that every problem discovered in the software is properly tracked from the moment it is detected until it is finally resolved and closed.

A **defect**, also called a **bug** or **anomaly**, is any deviation between the expected behavior of the system and its actual behavior. Defects may appear because of **incorrect requirements**, **design issues**, **coding mistakes**, or **integration problems**.

Defect management prevents defects from being **forgotten**, **misunderstood**, or **ignored**. It creates **traceability** and **visibility** in the testing process.

The **defect management process** follows a clear logical flow. First, a defect is **identified** during testing when the tester observes unexpected behavior. Then the defect is **logged** in a defect tracking system with all relevant information. After that, the defect is **reviewed during triage**, where it is **categorized and prioritized**. Next, it is **assigned** to a responsible developer. Once the developer **fixes** the defect, the tester **verifies** the fix. If the problem is resolved correctly, the defect is **closed**. If not, it is **reopened** and returned for further correction.

This life cycle ensures that every defect has **ownership** and clear **status visibility**.

**Severity** describes how strongly a defect affects the system. **Critical** defects may cause system crashes, data loss, or security risks. **High** severity defects break major functionality. **Medium** severity defects affect functionality but usually have workarounds. **Low** severity defects are minor, often cosmetic issues.

**Priority** describes how urgently a defect should be fixed. A defect with low severity can still have high priority if it affects business or release readiness. Likewise, a high severity defect may have low priority if it occurs in a rarely used feature.

Understanding the difference between **severity** and **priority** is essential for effective communication between testers, developers, and managers.

A good defect report provides enough information for another person to understand and reproduce the problem without additional explanation.

Each bug report should contain a **unique identifier**, a **short and clear title**, a **detailed description**, and precise **steps to reproduce** the defect. It must also include the **expected result** and the **actual result** so the difference is clearly visible. The report should specify **severity**, **priority**, and **environment details** such as browser, operating system, and application version. It should also include **attachments** such as screenshots, videos, or logs when available. Reporter information, status, assignment, and dates help track responsibility and progress.

Many defects lose value because they are poorly written. Common mistakes include missing reproduction steps, vague descriptions, missing environment information, lack of evidence such as screenshots, and incorrect severity or priority selection. Such reports slow down fixing and create frustration between teams.

Effective defect management relies on clarity and discipline. Regular triage meetings help the team prioritize and understand defects correctly. Open communication between testers and developers ensures faster resolution. Monitoring defect trends helps identify weak areas in the system. Keeping a complete defect history supports learning and continuous improvement.
