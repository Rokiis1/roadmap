# Content of Table of Usability Testing

- [Learnability](#learnability)
- [Efficiency](#efficiency)
- [Error Handling and Recovery](#error-handling-and-recovery)
- [Satisfaction](#satisfaction)
- [Accessibility (WCAG Based)](#accessibility-wcag-based)
- [Responsiveness and Adaptability](#responsiveness-and-adaptability)

## Learnability

Learnability describes how easily a new user understand and start using a system without prior training.

A system allows users to complete basic tasks **quickly**, even on their first interaction. Users should not need **long instructions**, **tutorials**, or **external help** to understand how the interface works.

Learnability focuses on the first impression of the product and the early user experience.

When testing learnability, we observe whether users understand what the **system is for**, **recognize main actions without explanation**, **complete simple tasks without guidance**, and **remember how to use the system after a short break**.

Learnability is strongly influenced by clarity, simplicity, and familiarity. Interfaces that follow common design patterns are easier to learn because users can reuse knowledge from other systems.

Typical learnability issues include, confusing **icons without labels**,**unclear button purposes**, **complex navigation paths**, and **overloaded screens with too much information**.

A practical way to **test learnability** is to, **creating an account** or **finding specific information**, and observe how many mistakes made, how long is **taken**.

If users frequently **hesitate**, ask **questions**, or choose the **wrong actions**, the system has learnability problems.

Learnability is closely related to **accessibility** and **consistency**, but it focuses specifically on **first-time usage**.

Once users understand how the **system works**, the next question becomes, **How fast and comfortably can they perform their tasks?**

This leads us to the next usability approach, **efficiency**.

## Efficiency

Efficiency describes how **quickly** and **comfortably** users can perform tasks once they already understand how the system works.

While learnability focuses on first-time users, efficiency focuses on **experienced users**. An efficient system allows users to complete their work with **minimal effort**, **minimal steps**, and **minimal interruptions**.

When testing efficiency, we observe whether users can, complete tasks with **few steps**, perform actions without **unnecessary navigation**, reuse **shortcuts** or **remembered paths**, and **avoid repeated** or **redundant work**.

An efficient interface reduces friction. Users should not feel that the system slows them down.

Typical efficiency problems include, too **many clicks** to complete a task, **repeating the same** input multiple times, slow **page loading** or **response times**, and **unclear task flow** that forces users to stop and think.

For example, if two users can both complete a task, but one needs twice as many steps, the system is functionally correct but inefficient.

Even in efficient systems, users will sometimes make mistakes.

What matters next is, how **clearly** does the system handle errors, and how easily can **users recover**

This brings us to the next, **error handling and recovery**.

## Error Handling and Recovery

Error handling and recovery describe how the system behaves when users make mistakes, and how easily users can understand and fix those mistakes.

**Errors are unavoidable**. A usable system does not try to eliminate all errors, but instead helps users recover from them.

Good error handling focuses on **clarity**.

When testing error handling, we observe whether error messages clearly ***explain what went wrong***, The user understands what **action caused** the error, the system explains **how to fix** the problem.

**Recovery** is just as important as **error handling**. Users should be able to **undo actions**, **edit** incorrect input, **retry** without restarting the whole process.

For example, if a user submits a form with an invalid email, the system should highlight the field, e**xplain the correct format**, and keep all other entered **data intact**.

A usable system treats errors as part of normal interaction, not as user failures.

When users can learn the system, work efficiently, and recover from errors, the next question becomes, **how does the system feel to use?**

This leads us to the next **Satisfaction**.

## Satisfaction

Satisfaction describes how **pleasant** and **comfortable** the system feels to use from the user’s perspective.

While **learnability**, **efficiency**, and **error handling** focus on **functional interaction**, satisfaction focuses on the **emotional experience**. A system can work correctly and still feel frustrating or unpleasant.

Satisfaction reflects whether users enjoy using the product and feel **comfortable**, and **positive** while interacting with it.

Satisfaction is influenced by many factors, including **visual design**, **smooth interactions**

Typical satisfaction problems include interfaces that feel **cluttered**, **frequent interruptions** or **unexpected results**.

Satisfaction is often evaluated through user feedback, questionnaires, interviews, and observation. Even if users can complete tasks, negative emotions indicate usability problems.

A system may be usable and satisfying for many users, but still unusable for others. To ensure that **all users** can use the system, we must address the next **Accessibility**

## Accessibility (WCAG Based)

Accessibility ensures that people with disabilities can **perceive**, **understand**, **navigate**, and interact with the system.

Accessibility is not separate from usability. A system is not truly usable if part of the population cannot use it.

Accessibility testing is based on the **WCAG** (*Web Content Accessibility Guidelines*) standard. WCAG organizes accessibility into four core principles

**Perceivable**, **Operable**, **Understandable**, and **Robust**.

These principles describe what must be true for content to be accessible to assistive technologies and diverse users.

In practice, **WCAG** defines three compliance levels

- **A** minimum accessibility
- **AA** industry standard and legally required in most projects
- **AAA** advanced and extended accessibility

For most systems, **WCAG 2.1 AA** compliance is considered sufficient and realistic, while **AAA** is recommended for **public**, **government**.

This is why accessibility is structured by **principles** instead of **UI components**.

When testing accessibility, we do not ask only **whether the system works**, but **whether it works for everyone**, including users who rely on **screen readers**, **keyboard-only navigation**, **high contrast modes**, **text zoom**,and reduced **motion** settings.

Accessibility testing is therefore both a **technical** and **human-centered activity**.

Accessibility ensures that all users can access the system. The next leads us to **Responsiveness** and **Adaptability**.

## Responsiveness and Adaptability

Responsiveness and adaptability describe **how well** the system adjusts to different devices, screen sizes, orientations, and usage contexts.

A **responsive system** idea adapts its layout and content to **fit various screen resolutions**, such as **desktop monitors**, **tablets**, and **smartphones**.

An **adaptable system** adjusts not only to **screen size**, but also to user context, **touch** vs **mouse** input, **portrait** vs **landscape** orientation, **large** screens vs **small** screens,
and different **device capabilities**.

Responsiveness focuses **mainly on layout behavior**, while **adaptability includes interaction**.

When testing **responsiveness** and **adaptability**, we observe whether, **content remains readable** on **all screen sizes**, elements do not **overlap** or **disappear**, navigation remains **usable on small screens**, and **interactive elements** are easy to **touch** or **click**.

Typical responsiveness problems include text becoming too **small to read**,buttons placed **too close together**, horizontal scrolling at **high zoom levels**, and broken layouts on **mobile devices**.

Adaptability problems often include features that **work on desktop** but not on **mobile**, **hover-only actions** that **fail on touch screens**, and interactions that **require precise mouse control**.

A **responsive** and **adaptable** system ensures a consistent experience across devices without forcing users to change **how they think** or **behave**.

Responsiveness and adaptability are closely connected to accessibility, but they focus specifically on **device and context differences** rather than **disabilities**.
