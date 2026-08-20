# Table of Contents: Test Layer UI

- [Goal of UI Testing](#goal-of-ui-testing)
- [Preparing for UI Testing](#preparing-for-ui-testing)
- [Prioritizing UI Checks](#prioritizing-ui-checks)
- [Manual and Automated UI Testing](#manual-and-automated-ui-testing)
- [Basic Functional Checks](#basic-functional-checks)
- [Visual Verification](#visual-verification)
- [Happy Path Testing](#happy-path-testing)
- [Recording Test Results](#recording-test-results)
- [Completing UI Testing](#completing-ui-testing)

Testing in the **UI layer** evaluates the application from the user's perspective. The tester interacts directly with the interface and observes whether user actions produce the expected visible results.

The UI describes **where testing is performed**, while testing types describe **what aspect of the application is being evaluated**. Different types of testing can therefore be performed through the UI depending on the testing objective.

The focus of this module is **manual testing**, basic **functional testing**, visual verification and **happy path testing**. Testing is primarily performed from a **black-box perspective**, where the tester evaluates inputs, actions and observable outputs without needing knowledge of the application's source code or internal implementation.

Other testing objectives can also involve the UI. For example, UI interactions may be evaluated as part of **usability**, **accessibility**, **compatibility**, **security** or **performance** testing. These are not separate test layers and require their own testing approaches, so they are introduced only where relevant rather than covered in detail here.

The purpose is to establish a practical foundation for verifying behavior through the interface before testing moves deeper into the system through the API and database layers.

## Goal of UI Testing

The goal of UI testing is to verify that users can interact with the application and receive the expected results through the interface.

This includes checking whether controls respond correctly, navigation leads to the expected location, entered information is handled correctly and changes in application state are represented appropriately in the interface.

![Goal of UI testing](./assets/images/ui_testing_goal.png)

For example, consider an online store with an **Add to Cart** button. When a user selects a product and clicks the button, the expected behavior may be that the product is added to the cart and the cart counter increases by one. The tester verifies the behavior that can be observed through the interface rather than investigating how the API or database processes the operation.

UI testing therefore answers a basic question: **does the application behave as expected when a user interacts with it?**

To answer that question reliably, the tester first needs a known source of expected behavior, suitable test data and a controlled starting state.

## Preparing for UI Testing

UI testing should begin from a known starting point. The tester needs access to the application, suitable test data, an appropriate environment and enough information to determine what the application is expected to do.

The information used to determine expected behavior is called the **test basis**. A test basis may include requirements, user stories, acceptance criteria, design specifications or other agreed documentation that describes the intended behavior of the application.

For example, an acceptance criterion may state that after a user adds a product to the cart, the cart counter must increase by one. This gives the tester a specific expected result to compare with the actual behavior.

The tester should also prepare the required **test data**. Testing a shopping cart may require an available product, while testing an authenticated page requires a valid user account. Test data should be known and reusable so that the same check can be repeated under the same conditions.

When a test changes application data, the tester should know how to restore the required starting state. This may involve removing an item from a cart, signing out of an account, resetting a user preference or recreating test data before repeating the check.

Browser state can also influence UI behavior. Cookies, local storage, session storage and cached information may cause the application to behave differently between test runs. If a scenario requires a logged-out user, for example, an existing authenticated session should not remain active from earlier testing.

A prepared and repeatable starting state makes the result easier to understand. Once that state is established, the tester can decide which UI checks should be performed first.

## Prioritizing UI Checks

When testing a user interface, the tester may have many features and user flows to check. It is not always practical to test everything with the same priority, so testing should begin with the parts of the application that are most important to users.

A useful starting point is to identify the **main user flows**. These are common actions that users need to complete successfully when using the application.

For example, in an online store, important flows may include signing in, finding a product, adding it to the cart and completing a purchase. These flows should normally be checked before less important or rarely used interface features.

Priority can also be influenced by recently changed functionality, areas where problems have been found before, and features that affect many users.

At this point, the goal is simply to understand that UI checks should be performed in a meaningful order rather than selecting features randomly. More detailed methods for determining testing priorities and evaluating risk are covered separately in **Test Management Level 4**.

Once the important UI flows have been identified, the tester can begin checking them through direct interaction with the application.

## Manual and Automated UI Testing

UI testing can be performed **manually or through automation**. Both approaches interact with the same UI layer and verify observable behavior, but they differ in how actions are executed and results are evaluated.

In **manual UI testing**, a human tester interacts directly with the application by clicking controls, entering information, submitting forms and navigating between pages. The tester observes the application's behavior and compares the actual result with the expected behavior defined by the test basis.

In **automated UI testing**, a test script performs predefined UI actions and automatically verifies whether the expected result occurs. This is useful when the same checks need to be repeated frequently and consistently.

![Manual and automated UI testing](./assets/images/ui_testing_execution_approaches.png)

Manual and automated testing are therefore different **execution approaches**, not different test layers. Both can be used to verify behavior through the UI.

This module focuses primarily on **manual execution** so that the tester first understands what actions to perform, what behavior to observe and what needs to be verified. Understanding what to verify manually provides a foundation for designing effective automated checks. Creating and maintaining automated UI tests requires additional tools and techniques and is covered separately.

During manual testing, the tester should pay attention to the actual result after important actions rather than assuming that a successful-looking screen means the check passed. This can create **confirmation bias**, where the tester expects the application to work and overlooks unexpected behavior. Browser developer tools may also provide useful information through browser storage, network activity or JavaScript errors in the browser console. Direct testing of requests, responses and status codes belongs to **Test Layer API**.

With an understanding of how UI tests can be executed, the next step is to examine whether individual UI features perform their intended functions.

## Basic Functional Checks

Basic functional checks verify whether individual UI features perform their intended functions. This is **functional testing performed through the UI layer**: the tester performs an action through the interface and compares the observed result with the expected behavior. The tester performs these checks from a **black-box perspective**, without needing to know the underlying implementation.

For example, if the test basis states that selecting **Add to Cart** should add one product to the cart, the tester can perform the action and verify that the cart counter changes from `0` to `1`.

![Basic functional UI check](./assets/images/ui_functional_check.png)

The same principle applies to navigation, forms, buttons, search controls, filters and other interactive features. The tester performs an intended action and verifies that the application produces the expected visible result.

Some UI behavior depends on browser or application state. If login information is expected to persist, the tester can log in, refresh the page and verify that the authenticated state remains. If a preference is expected to persist, the tester can change it, reload the application and verify that the setting remains applied. The relevant state can then be reset and the behavior checked again from the original condition.

Functional correctness is only one part of the user experience. A feature may perform the correct action while presenting its result incorrectly or unclearly. This leads to visual verification.

## Visual Verification

Visual verification checks whether information and interface elements are presented correctly to the user. The tester observes the rendered interface and compares it with the expected design and presentation. It is important to distinguish **functional behavior** from **visual presentation**.

If a requirement states that a validation message must appear after a particular action, checking that the message **appears** is a functional check. Checking that the same message is readable, positioned correctly, uses the expected styling and does not overlap other content is visual verification.

![Visual verification in UI testing](./assets/images/ui_visual_verification.png)

Visual checks may include verifying that text is readable, required elements are visible, controls are positioned correctly, content is not unexpectedly clipped or overlapping and changes in state are clearly presented.

The tester should also pay attention to dynamic updates, especially in applications where content changes without a full page reload. Elements may appear or change after an action, so the tester should wait for the interface to reach its expected state before evaluating the visual result.

For example, after adding a product to a shopping cart, functional testing verifies that the cart state changes correctly. Visual verification checks that the updated cart counter is visible, readable and displayed in the expected location.

Visual verification can also reveal issues related to other **non-functional quality characteristics** of the UI. The tester may notice usability problems when information or controls are difficult to understand or interact with, accessibility problems when content or controls are difficult for some users to perceive or operate, and compatibility problems when the interface appears or behaves differently across supported browsers, devices, operating systems or screen sizes.

These observations can indicate that further testing is needed. During basic UI testing, the tester may identify obvious issues related to **usability**, **accessibility** or **compatibility**, but a complete evaluation of these areas requires additional techniques, environments and tools.

Visual verification therefore complements functional testing by checking not only that the expected behavior occurs, but that its result is presented appropriately to the user and does not introduce obvious interface quality problems.

Once individual functionality and its visual presentation have been checked, the tester can combine these observations into a complete successful user flow.

## Happy Path Testing

**Happy path testing** verifies a successful user flow when valid inputs are provided and actions are performed in their intended sequence.

Instead of checking only one UI control at a time, the tester follows a normal user scenario and verifies important results throughout the flow. For example, a shopping flow may involve opening a product page, selecting a product, adding it to the cart, opening the cart and confirming that the selected product appears correctly.

A happy path should contain clear **checkpoints** rather than relying only on the final result. A checkpoint is a point within the flow where an important result is verified before continuing. This helps confirm that each significant part of the flow behaves correctly and makes it easier to identify where a failure occurs.

If a critical checkpoint fails and the remaining steps depend on it, the current flow should stop. If later behavior can be checked independently, the required starting state can be restored and that behavior can be evaluated separately.

In modern development practices, many basic happy path scenarios may already be verified earlier through developer testing and automated checks. Testers should consider this existing coverage rather than unnecessarily repeating the same checks at every layer. UI testing remains valuable for verifying important user journeys, observable behavior and interactions that need confirmation through the interface.

This module uses happy path UI testing as a foundation for learning how to follow a user flow and verify expected behavior. More detailed scenario selection, negative testing and test design techniques are introduced separately in **Test Case Design Level 2 and 3**.

The results of the UI checks should be recorded so that the completed testing and any findings remain visible.

## Recording Test Results

During UI testing, the tester should keep track of what was checked and what was observed. For each check, the recorded result should show whether the observed behavior matched the expected behavior defined by the test basis.

If the observed result is unclear or the test basis is ambiguous, the tester should record the uncertainty and seek clarification rather than guessing whether the check passed or failed.

The exact way tests and results are documented depends on the approach used by the project. Techniques for designing and organizing tests, including **experience-based approaches** such as **checklist-based testing**, are covered separately in **Test Case Design Level 1**.

When observed behavior does not match the expected behavior, further investigation or defect reporting may be required. The process for documenting, communicating, tracking and retesting defects is covered separately in **Test Management Level 1**.

Recording results makes it possible to see which UI checks have been completed, which have failed and which still require attention. Once the planned checks have been performed, the tester can determine whether the intended UI testing has been completed.

## Completing UI Testing

UI testing is complete for the planned scope when the selected user flows have been executed and their important functional and visual results have been checked.

For example, if the planned scope includes signing in, finding a product and adding it to the cart, completing UI testing means that these flows have been performed and their expected results have been verified. A failure in one of these flows does not mean that testing was not performed; it means that testing identified a problem that must be recorded and handled appropriately.

Completing the planned scope does not mean that every possible UI behavior has been tested. This module concentrates on the selected **happy path flows** and the functional and visual checks performed through them. Other scenarios may require additional testing outside this scope.

At this point, the tester has learned how to prepare for UI testing, select important flows, interact with the interface, verify functional and visual behavior, follow successful user journeys and record the results.

The UI layer is used as the starting point in this course because it provides a direct and accessible way to learn the basic testing process through observable application behavior. This does not mean that testing must begin with the UI in practice. The appropriate starting point depends on the system, testing objective and available access.

With this foundation established, the course continues with **Test Layer API**, where the same testing mindset is applied at a different layer of the application.
