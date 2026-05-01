# Content of test case design level 2

- [Error Guessing](#error-guessing)
- [Exploratory Testing](#exploratory-testing)
- [Checklist-Based Testing](#checklist-based-testing)
- [Ad-Hoc Testing](#ad-hoc-testing)

At this level, testing is based on the tester’s experience, intuition and understanding of how systems typically fail.

Unlike structured test design techniques, these approaches do not rely on predefined rules or systematic analysis. Instead, they depend on the tester’s ability to anticipate risks, recognize patterns, and explore the system in a flexible way.

These techniques are especially useful when requirements are incomplete, unclear, or constantly changing. They allow testing to begin early and help uncover defects that might not be identified through formal methods. They are best used as a complement to the structured test case design covered in **Test Case Design Level 1**, not as a replacement.

We start with **Error Guessing**, which focuses on predicting where defects are most likely to occur.

## Error Guessing

Error guessing is an experience-based testing technique where testers predict where defects are likely to occur based on past **experience**, **domain knowledge** and **intuition**.

Instead of following a strict structure, the tester relies on understanding common failure patterns. These may include incorrect input formats, unexpected values, missing validations or logical mistakes in processing.

For example, a tester might try entering letters into numeric fields, submitting empty forms, or using extremely large or small values to see how the system responds. These types of actions are not random, but are guided by experience and knowledge of typical system weaknesses.

Common heuristics used in error guessing include.

```text
Null or empty inputs - leaving required fields blank
Boundary values - values at or just beyond allowed limits
Special characters - symbols, emojis, or scripting tags in text fields
Data type mismatches - entering text in numeric fields or vice versa
Concurrent access - multiple users performing the same action simultaneously
Resource exhaustion - uploading extremely large files or submitting rapid repeated requests
Timeout scenarios - interrupting processes before completion
```

A more structured variation of this approach is known as **fault attack**, where known defect patterns are systematically targeted to increase the likelihood of finding issues. Unlike general error guessing, fault attacks use a predefined list of common vulnerabilities or failure modes such as SQL injection patterns, buffer overflow triggers or race condition scenarios that are applied deliberately across the system.

While error guessing is powerful for identifying likely problem areas, it is still limited by the testers experience. To explore the system more broadly and uncover unexpected issues, a more dynamic approach is needed.

This leads to **Exploratory Testing**, where test design and execution happen together.

## Exploratory Testing

Exploratory testing is a **testing approach** where **test design** and **execution** happen at the same time. Testers learn about the system while testing and use that knowledge to design better tests.

Instead of following predefined test cases, the tester controls the flow of testing and adapts based on what is discovered during execution. This approach is especially useful for uncovering unknown defects and understanding real system behavior.

To provide direction, exploratory testing is often guided by a **charter**. A charter defines the goal of a testing session, including what should be explored, what risks to focus on, and what outcomes are expected.

An example of a testing charter is shown below.

| Element               | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| **Mission**           | Explore the checkout process for payment failures              |
| **Areas to test**     | Payment form, discount code application, order confirmation    |
| **Risks to focus on** | Invalid card handling, duplicate submissions, timeout recovery |
| **Test data needed**  | Valid card, expired card, card with insufficient funds         |
| **Session duration**  | 90 minutes                                                     |
| **Tester notes**      | Record any unexpected error messages or UI inconsistencies     |

Testing is typically performed in **time-boxed sessions**, usually lasting between `60–120 minutes`. During each session, the tester records tested areas, actions performed, and any issues found. A simple session notes format might include.

```text
| Time  | Action Performed                 | Observation                       | Issue?  |
| ----- | -------------------------------- | --------------------------------- | ------- |
| 10:00 | Entered expired card             | Error message displayed correctly | No      |
| 10:15 | Clicked "Pay" twice rapidly      | Two charges created               | **Yes** |
| 10:30 | Disconnected network mid-payment | Stuck on loading spinner          | **Yes** |
```

This flexible approach allows testers to quickly adapt and explore the system, but it can sometimes lack consistency. To improve consistency and coverage, exploratory testing can be performed as pair testing, where one tester drives the session while the other observes, asks questions and documents findings.

To ensure important areas are not missed, a lightweight structure can be introduced.
  
## Checklist-Based Testing

Checklist-based testing uses a predefined **list of items** to guide testing activities without creating detailed test cases.

The checklist acts as a reminder of what should be tested, helping ensure that important areas are consistently verified. It provides structure while still allowing flexibility in how testing is performed.

For example, when testing a responsive user interface, a checklist might include the following.

| Description                                                                   | Status  |
|-------------------------------------------------------------------------------|---------|
| Verify that the layout adjusts correctly on different screen sizes.           |         |
| Check that elements are not overlapping or misaligned.                        |         |
| Ensure that the navigation menu functions on all screens.                     |         |
| Verify that the hamburger menu appears and works correctly on smaller screens.|         |
| Confirm that images resize appropriately and maintain aspect ratio.           |         |
| Ensure that media elements are responsive and playable.                       |         |

This approach can be applied to both functional and non-functional testing, including usability, performance and compatibility.

Even though testing is not fully scripted, results should still be documented through session notes or summary reports to track findings and communicate outcomes.

While **checklist-based testing** introduces guidance, it still relies on predefined items rather than deep analysis. When time is extremely limited such as during a quick **smoke test** before a release or when a developer needs immediate feedback on a small change even this level of structure may not be required. This leads to **Ad-Hoc** Testing, the most informal approach.

## Ad-Hoc Testing

Ad-hoc testing is an unstructured testing technique where testers freely explore the application without **documentation**, **checklist** or **planning**.

The tester interacts with the system freely, performing actions such as clicking random elements, resizing the interface or entering unexpected inputs to observe how the system behaves. For example, a tester might rapidly navigate through a checkout flow without adding items to the cart, refresh a payment confirmation page mid-transaction, or paste a URL with special parameters into the browser address bar.

The main goal is to quickly discover defects without spending time on preparation. This makes ad-hoc testing useful in situations where time is limited or when a quick assessment of system stability is needed.

However, because there is no structure or documentation, results can be difficult to reproduce and important areas may be overlooked. Findings from ad-hoc testing should still be documented as soon as possible, including the exact steps taken and the system state, to help developers reproduce and fix the issue.

For this reason, ad-hoc testing is often used as a complementary approach rather than a primary testing method. It is not suitable for situations requiring repeatability and auditability, such as regulatory compliance testing or safety-critical system validation.
