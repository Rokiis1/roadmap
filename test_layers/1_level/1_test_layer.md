# Content of Test Layer Level 1

- [Goal of UI Testing](#goal-of-ui-testing)
- [Manual Interaction Testing](#manual-interaction-testing)
- [Basic Functional Checks](#basic-functional-checks)
- [Visual Verification](#visual-verification)
- [Happy Path Testing](#happy-path-testing)

At this level, testing is focused on the **UI layer**, where interaction with the system happens from the user's perspective. Instead of analyzing internal logic or data structures, testing is performed by executing actions and observing visible behavior.

The goal is to build a basic understanding of how to verify that the system works correctly through direct interaction. This includes checking functionality, validating visible results, and confirming that expected behavior occurs during normal usage.

Testing at this stage is simple and focused on **happy path scenarios**, where the system is used under expected conditions without considering edge cases or complex inputs.

## Goal of UI Testing

The goal of UI testing is to confirm that the system responds correctly to user actions. This means verifying that interactions such as input, navigation, and actions produce the expected visible outcome.

UI testing focuses on validating behavior through the interface, ensuring that the system reacts consistently and provides clear feedback to the user during normal usage.

To achieve this, testing is performed through direct interaction with the application. Instead of relying on predefined rules or complex techniques, the tester works with the system manually, performing actions and observing the results.

This approach is known as manual interaction testing, where the tester directly engages with the system to verify its behavior.

## Manual Interaction Testing

Manual interaction testing is the primary way testing is performed at this level. The tester interacts with the application directly through the user interface, performing actions such as clicking elements, entering data, and navigating between screens.

The purpose of this approach is to observe how the system behaves in response to user actions. Each interaction is followed by checking whether the visible result matches the expected behavior. This allows the tester to confirm that the application responds correctly during normal usage.

At this stage, testing is simple and does not rely on predefined techniques or detailed test design. The focus is on executing actions step by step and observing the outcome. This helps build an understanding of how the system behaves when used from the user’s perspective.

Manual interaction testing also helps identify obvious issues such as elements not responding, incorrect navigation or unexpected behavior after an action. The tester relies on direct observation rather than internal knowledge of the system.

As interactions are performed, it becomes important to verify not only that the system responds, but that it responds correctly. This leads to checking whether specific features and actions behave according to their intended functionality.

## Basic Functional Checks

Basic functional checks focus on verifying that the core features of the application work as expected during normal usage. After performing interactions with the system, the tester checks whether each action produces the correct result.

At this stage, testing is performed as **functional testing**, where the focus is on validating that the system behaves correctly based on user actions. Testing follows a **black-box perspective**, meaning behavior is evaluated through inputs and visible outputs without considering internal implementation.

The goal is to confirm that individual functions behave correctly when used in a straightforward way. This includes validating that inputs are processed properly, actions trigger the expected outcome, and the system responds without errors.

Testing is performed by executing simple actions and comparing the observed result with the expected behavior. The tester relies on an **experience-based approach**, using observation and basic understanding of expected behavior rather than formal test design techniques.

No structured techniques are applied at this level. The focus is not on edge cases or unusual scenarios, but on ensuring that the main functionality works reliably under standard conditions.

Basic functional checks help identify issues where features do not work as intended, such as actions not being executed, incorrect results being displayed or system responses not matching user expectations.

In addition to verifying functionality, it is also important to ensure that the interface presents information clearly and correctly. This introduces visual validation as part of testing.

## Visual Verification

Visual verification focuses on checking that the user interface appears correctly and presents information in a clear and consistent way. After performing actions, the tester observes how elements are displayed and whether the visual output matches the expected result.

At this stage, visual verification is treated as a form of **non-functional testing**, where the focus is not on system behavior, but on how the interface is presented to the user. This includes aspects related to readability, clarity and overall usability.

Testing in this area is closely related to **usability testing**, where the goal is to ensure that the interface is understandable and easy to interact with during normal usage.

No formal test design techniques are applied at this level. Instead, testing is performed using an **experience-based approach**, where the tester relies on observation and judgment while interacting with the system.

The goal is not to evaluate design quality in depth, but to confirm that the interface behaves visually as intended. This includes verifying that text is readable, elements are properly aligned, and important information is visible to the user.

Testing is performed by observing the interface during and after interactions, ensuring that changes are reflected correctly and that no visual issues appear.

Visual verification helps identify issues such as missing elements, incorrect layouts, broken styles, or unclear feedback shown to the user.

## Happy Path Testing

Happy path testing focuses on verifying that the application works correctly when used under expected conditions. The tester follows the most common and intended way of using the system, performing actions with valid inputs and normal sequences.

At this stage, testing is focused on scenarios where the system is used as intended. Situations involving invalid inputs, unexpected actions or error conditions are not covered at this level and are introduced in later stages of testing.

This allows the tester to first understand normal system behavior before exploring how the system handles incorrect or unexpected usage. While negative scenarios can also be tested through the UI, they are not the focus at this stage because the interface does not always clearly show how the system processes errors.

More detailed validation of incorrect inputs and error handling is introduced when testing moves beyond the interface. In the next level, testing shifts to the API layer, where system responses to invalid and unexpected conditions can be observed more directly and consistently.