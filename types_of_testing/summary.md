# Table of Contents: Non-Functional Testing Summary

- [Usability Testing](#usability-testing)

This summary brings together the key concepts from the **Non-Functional Testing** module. It is designed as a quick reference for reviewing how different quality characteristics of a system can be evaluated through testing.

Non-functional testing focuses on **how well a system operates** rather than only whether individual functions produce the correct result. Depending on the product and testing objective, this may include characteristics such as **usability**, **performance**, **reliability**, **security** and **compatibility**.

The course begins with **Usability Testing**, which evaluates whether intended users can interact with a system effectively, efficiently and satisfactorily in a defined context of use. Later parts of the module extend this foundation to other non-functional quality characteristics.

## Usability Testing

**Usability** is a quality characteristic that describes how effectively, efficiently and satisfactorily intended users can interact with a system to achieve specific goals in a defined context of use.

Usability problems do not necessarily cause functional failures. A registration form may successfully create an account while still having poor usability because important actions are difficult to discover, labels are unclear or error messages do not help the user recover.

Usability can be evaluated through **user-based testing** or **expert-based evaluation**. User-based usability testing involves representative users performing realistic tasks while their behavior and feedback are observed. Formal participant studies are outside the practical scope of this course section.

The practical focus is **expert-based usability evaluation**, which allows a QA tester to inspect an interface systematically without requiring representative participants.

Usability evaluation begins by selecting the **feature or user flow**, defining a clear **objective** and identifying the relevant **context of use**.

For example, an evaluation of account registration may ask `Can a first-time user understand how to complete registration without unnecessary difficulty?`

Usability evaluation can be supported by **experience-based testing techniques**, particularly **checklist-based testing**. A reusable checklist helps the tester evaluate common usability concerns without requiring detailed step-by-step test cases.

When evaluating an interface, the tester should consider several usability characteristics.

**Learnability** describes how easily a new or unfamiliar user can understand the interface and determine how to perform important actions.

**Efficiency** describes how much effort is required to complete a task once the interface is understood. Unnecessary steps, repeated input and excessive navigation can reduce efficiency.

**Error prevention and recovery** describe how well the interface prevents predictable mistakes and helps users understand and recover from errors.

**Satisfaction** concerns whether the interaction is comfortable, understandable and acceptable to users. Because satisfaction is subjective, a QA tester should avoid making unsupported assumptions about what users personally prefer, while still reporting obvious sources of frustration or unnecessary effort.

**Accessibility** should also be considered when evaluating whether intended users can interact successfully with the interface. Basic accessibility checks may be included in the reusable usability checklist, while more systematic accessibility evaluation can be performed against applicable **WCAG** requirements.

For web content, WCAG is organized around four principles commonly abbreviated as **POUR**: **Perceivable**, **Operable**, **Understandable** and **Robust**.

Accessibility evaluation may include checks for **keyboard operation**, **visible and logical focus**, **screen-reader compatibility**, **text alternatives**, **color contrast**, **text resizing and zoom**, **form labels**, **error identification**, **reduced-motion preferences** and **semantic structure**.

Two useful expert-based usability evaluation methods are **Heuristic Evaluation** and **Cognitive Walkthrough**.

A **Heuristic Evaluation** systematically inspects an interface against recognized usability principles. Nielsen's usability heuristics provide a commonly used framework covering areas such as system feedback, consistency, error prevention, recognition rather than recall and user control.

A **Cognitive Walkthrough** examines an important task from the perspective of a new or unfamiliar user. The tester considers whether the user is likely to understand what they need to do, discover the correct action and understand the resulting system feedback.

For example, when evaluating registration, the tester can work through the complete flow and consider whether a first-time user would understand where registration begins, what information is required, how to continue and whether registration was successful.

A practical usability evaluation therefore follows a simple flow.

1. Select the feature or user flow.
2. Define the objective and context of use.
3. Select the relevant checklist checks and evaluation method.
4. Work through the interface systematically.
5. Record identified usability problems and supporting evidence.
6. Describe the expected effect on the user.
7. Prioritize the findings.
8. Recommend an appropriate improvement.
9. Retest after changes are implemented.

Expert-based evaluation primarily produces **documented usability findings** rather than participant metrics.

A useful finding identifies the **problem**, provides the relevant **evidence or location** and describes the **effect on the user**. A Heuristic Evaluation finding may additionally identify the relevant heuristic, while a Cognitive Walkthrough finding may explain where a new or unfamiliar user could have difficulty discovering an action or understanding feedback.

Accessibility findings should similarly identify the barrier, location and user impact and should reference the applicable accessibility requirement when required by the project.

Findings should be prioritized according to their importance and expected **user impact**. Problems that prevent an important task from being completed should normally receive more attention than minor inconvenience or cosmetic inconsistency.

Recommendations should address the observed usability problem without unnecessarily prescribing a particular implementation.

After changes are implemented, the affected area should be **retested** using the relevant checklist checks, Heuristic Evaluation or Cognitive Walkthrough to verify that the original problem has been resolved without introducing new usability problems.

Usability evaluation can be performed throughout development, including on **sketches, wireframes, prototypes, partially implemented features and release candidates**. Early evaluation can identify confusing interactions before they become expensive to redesign, while later evaluation can examine the implemented interface in its intended context.

The key point is that **expert-based usability evaluation gives QA testers a practical and systematic way to identify problems that make an interface difficult, inefficient, inaccessible or confusing to use, even when the underlying functionality works correctly**.
