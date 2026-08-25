# Table of Contents: Types of Testing Summary

- [Usability Testing](#usability-testing)
- [Compatibility Testing](#compatibility-testing)

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

## Compatibility Testing

**Compatibility testing** is a type of non-functional testing used to verify that a system behaves correctly across the **environments that the product is required to support**.

A feature may work correctly in one environment while failing or behaving differently in another. For example, account registration may work correctly in Chrome on Windows while the **Create Account** button does not respond in Safari on iOS.

Compatibility testing can cover different aspects of the environment, including **browser compatibility**, **operating-system compatibility**, **device compatibility**, **hardware compatibility**, **network compatibility** and **software compatibility**. **Backward compatibility** and **forward compatibility** may also be relevant when different versions of software, data or interfaces must work together.

Not every possible environment needs to be tested. Compatibility testing should be based on the environments and versions that the project actually supports.

A **compatibility matrix** is used to organize the browser, operating-system, device and version combinations that are in scope. The matrix should be based on project requirements, supported-platform documentation and, where available, **usage or analytics data**.

The most common environments and those used for critical user flows should normally receive higher priority. This provides **representative, risk-based coverage** without attempting every technically possible combination.

Browser and operating-system **versions** are important because compatibility behavior can change between releases. Exact browser versions can be verified through browser information such as `Chrome chrome://version` | `Edge edge://version` | `Firefox about:support`. Safari does not provide an equivalent internal address, so on macOS its version can be checked from `Safari > About Safari`.

For mobile environments, the operating-system version and **device model** should also be recorded when relevant.

Before comparing environments, the tester should first verify that the feature works correctly in the **primary supported environment**. This provides a known reference for identifying differences when the same feature is tested in secondary environments.

Compatibility testing can be performed using **real devices**, **emulators or simulators** and **cloud browser or device services** depending on the required coverage and risk.

Real devices provide the most representative environment, while emulators and simulators provide a practical way to perform additional checks when physical devices are unavailable. Cloud services such as **BrowserStack** can provide remote access to many browser, operating-system and real-device combinations.

Tools can also support responsive, automated and repeated compatibility checks. **Responsively App** can help with local responsive checks across multiple viewports. **Selenium** and **Playwright** can execute automated tests across browsers, while **BackstopJS** can support visual regression testing. Hosted services such as **Percy** can provide automated visual comparisons.

**Visual regression testing** compares screenshots with an established baseline to identify unexpected layout and rendering differences. Detected differences still require tester review because not every visual difference is necessarily a defect.

Cross-browser testing should consider both **functionality and rendering**. Depending on the feature, this may include page loading, layout, controls, forms, navigation, browser storage, media and browser-specific behavior. Unsupported CSS or JavaScript features can also produce compatibility problems.

Cross-device and operating-system testing considers differences such as **screen size**, **responsive breakpoints**, **orientation**, **touch and mouse input**, **on-screen keyboards**, **permissions**, **device capabilities** and operating-system-specific interactions. Slow or intermittent network conditions may also be checked when relevant to the compatibility scope.

Not every supported environment must provide an identical experience. Some projects allow a simplified but functional experience in older or less capable environments through **graceful degradation** or progressively enhanced behavior. QA should therefore compare observed differences with the project's expected behavior before classifying them as defects.

A practical compatibility testing flow follows the selected feature through each required environment.

1. Select the feature or user flow.
2. Identify the target environments from the compatibility matrix.
3. Prepare the required device, emulator, simulator, virtual machine or cloud environment.
4. Establish the same starting state and test data where practical.
5. Execute the core functional flow in each target environment.
6. Check the relevant layout, rendering, interaction and environment-specific behavior.
7. Compare the observed behavior with the expected result and other supported environments where useful.
8. Record environment-specific deviations together with the exact environment details.
9. Determine whether the difference is a defect or an accepted environment-specific variation.
10. Retest the affected environment after a fix and check related environments where the same root cause may apply.

For account registration, the same registration flow, expected behavior and test data can be reused across the selected environments. This makes it easier to determine whether a difference is caused by the environment rather than by differences in the test itself.

A **compatibility finding** should contain enough information for another person to reproduce the problem. This normally includes the **browser and version**, **operating system and version**, **device model when relevant**, affected feature, reproduction steps, expected result, actual result and supporting evidence. Screen size or resolution should also be included when it contributes to the problem.

For example, a compatibility defect may be recorded as `Create Account button is unresponsive in Safari 17 on iOS 17.2 on iPhone 14`.

Compatibility findings should be prioritized according to the affected environment and user impact. A problem that blocks a core flow on a major supported environment is more significant than a cosmetic difference that does not prevent the required functionality.

Compatibility testing is useful throughout development, but systematic compatibility coverage becomes particularly important once a feature is functionally stable and before release. Compatibility checks should also be repeated after environment-related changes and fixes.

The key point is that **compatibility testing verifies that required functionality and behavior remain acceptable across the environments the product is expected to support, using defined environment combinations rather than attempting to test every possible browser, operating system or device**.
