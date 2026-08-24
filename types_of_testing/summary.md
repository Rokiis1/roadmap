# Table of Contents: Non-Functional Testing Summary

- [Usability Testing](#usability-testing)

This summary brings together the key concepts from the **Non-Functional Testing** module. It is designed as a quick reference for reviewing how different quality characteristics of a system can be evaluated through testing.

Non-functional testing focuses on **how well a system operates** rather than only whether individual functions produce the correct result. Depending on the product and testing objective, this may include characteristics such as **usability**, **performance**, **reliability**, **security** and **compatibility**.

The course begins with **Usability Testing**, which evaluates whether intended users can interact with a system effectively, efficiently and satisfactorily in a defined context of use. Later parts of the module extend this foundation to other non-functional quality characteristics.

## Usability Testing

**Usability testing** is a type of **non-functional dynamic testing** used to evaluate how effectively, efficiently and satisfactorily intended users can interact with a system to achieve specific goals in a defined context of use.

Usability problems do not necessarily cause functional failures. A registration form may successfully create an account while still having poor usability because users cannot understand its labels, cannot discover an important action or repeatedly make avoidable errors.

Usability evaluation begins by selecting the **feature or user flow**, defining a clear **objective** and identifying the relevant **context of use**. The objective should describe the usability question that needs to be answered.

For example, an evaluation of account registration may ask `Can a first-time user complete registration without assistance?`

Usability testing can be supported by **experience-based testing techniques**, particularly **checklist-based testing**. A checklist gives the tester reusable usability conditions to evaluate without requiring detailed step-by-step test cases.

The tester then chooses an appropriate **usability evaluation approach**.

![User-based and expert-based usability testing workflow](./dynamic_testing/non_functional_testing/assets/images/usability_testing_method_workflow.png)

**User-based usability testing** is appropriate when evidence is needed about how representative users actually interact with the interface. Common approaches include **moderated usability testing** and **unmoderated usability testing**. Techniques such as the **Thinking Aloud Protocol** can provide additional information about what participants expect, notice and find confusing.

**Expert-based usability evaluation** does not require representative participants. **Heuristic Evaluation** inspects an interface against recognized usability principles, while **Cognitive Walkthrough** examines whether a user, particularly a new or unfamiliar user, is likely to understand the actions required to complete a task.

The two approaches can complement each other. Expert evaluation can identify potential problems early, while user-based testing can provide direct evidence about how intended users actually experience the interface.

Usability can be evaluated through several related characteristics. **Learnability** considers how easily users understand and begin using the system. **Efficiency** considers the time, effort and interactions required to achieve a goal. **Error prevention and recovery** considers whether predictable mistakes are prevented and whether users can understand and recover from errors. **Satisfaction** considers how users perceive the experience.

User-based testing can collect measures such as **task success**, **completion time**, **errors**, **assistance** and participant feedback.

**SEQ**, the Single Ease Question, measures how easy or difficult a specific task felt and is normally collected after that task. **SUS**, the System Usability Scale, measures the participant's overall perception of system usability and is normally collected once after the complete session.

Accessibility is closely related to usability but has a more specific purpose. **Accessibility testing** evaluates barriers affecting people with disabilities and users of assistive technologies. For web content, **WCAG** organizes accessibility around the **Perceivable, Operable, Understandable and Robust (POUR)** principles.

User-based usability testing normally uses realistic **goal-based task scenarios** rather than click-by-click instructions. The participant should decide how to achieve the goal so that the tester can observe whether the interface itself provides sufficient guidance.

During a participant session, the tester presents the task, observes the participant without unnecessarily directing them and records the selected evidence. Depending on the objective, this may include success, completion time, errors, assistance, hesitation, incorrect actions and navigation paths. SEQ may be collected after individual tasks and SUS after the complete session when these measures are part of the evaluation.

Participant sessions should use suitable test data and follow appropriate privacy and consent practices. Recording should only be performed with appropriate participant consent, and leading questions should be avoided because they can influence participant behavior.

User-based and expert-based evaluations produce different forms of evidence.

**User-based testing** can produce participant observations and quantitative metrics such as success rate, completion time, error rate, assistance rate, SEQ and SUS.

**Expert-based evaluation** primarily produces documented usability problems supported by inspection evidence, interface location and expected user impact. Heuristic Evaluation may additionally identify the violated heuristic, while Cognitive Walkthrough records where a user may have difficulty discovering an action or understanding system feedback.

Both paths ultimately produce **usability findings**.

A useful usability finding connects the observed problem with supporting evidence and its effect on the user. Findings should then be prioritized according to factors such as **severity**, **frequency** and **user impact**.

Recommendations should address the observed usability problem without unnecessarily prescribing a particular implementation. After changes are implemented, the affected area should be **retested** using an appropriate evaluation method.

Where comparable measurements are available, before-and-after results can help determine whether usability improved. A higher success rate or SEQ score alone does not prove that every usability problem has been resolved, so quantitative results should be interpreted together with qualitative observations.

Usability testing can be performed throughout development, including on **sketches, wireframes, prototypes, partially implemented features and release candidates**. Early evaluation can reveal confusing interaction designs before they become expensive to change, while later evaluation can examine the implemented product in a more realistic context.

The key point is that **usability testing evaluates whether intended users can achieve their goals effectively, efficiently and satisfactorily, using evidence from user behavior, measurements, structured feedback or expert evaluation rather than relying only on subjective opinions about whether an interface looks easy to use**.
