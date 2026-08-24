# Table of Contents: Test Case Design Summary

- [Test Case Design Level 1](#test-case-design-level-1)

This summary brings together the most important concepts from the **Test Case Design** module. It is designed as a quick reference for revision and preparation for questions where the main concepts, relationships and differences need to be explained clearly.

## Test Case Design Level 1

Level 1 focuses on **experience-based testing** and how testers use experience, domain knowledge, observation and judgment to generate useful test ideas. The main approaches are **error guessing**, **exploratory testing**, **checklist-based testing** and **ad-hoc testing**.

**Experience-based approaches** are especially useful when requirements are incomplete, unclear or changing. They allow testers to adapt testing based on what they learn and observe. When using these techniques under time pressure, testers should begin with areas that have high user impact, recent code changes or a history of defects.

**Error guessing** is an experience-based test technique in which testers predict where defects are likely to occur based on past experience, domain knowledge and intuition. Test ideas are generated from known failure patterns rather than from a formal test design procedure.

A **heuristic** is a mental shortcut or rule of thumb that helps a tester decide what to test next. Common error-guessing heuristics include **null or empty inputs**, **boundary values**, **special characters**, **data type mismatches**, **invalid formats**, **limit violations**, **repeated actions** and **timeout or interruption scenarios**.

![Error guessing process](./1_level/assets/images/error_guessing_process.png)

Error-guessing heuristics are starting points rather than a fixed checklist. Testers select heuristics that are relevant to the feature being tested and use their experience to identify additional failure conditions. The tests are deliberate because they target conditions that commonly reveal defects.

A more structured variation of error guessing is sometimes called a **fault attack**. A fault attack deliberately targets known fault or failure patterns using a prepared list or catalog, making the activity more systematic and repeatable than general error guessing.

**Exploratory testing** is an approach in which **test design, execution and learning happen together**. The tester learns about the system while testing and uses new information to decide what to test next rather than relying only on predefined test cases.

A **test oracle** is a source of truth used to decide whether an observed result is correct. Examples include requirements, user documentation, business rules, a comparable product or reasonable user expectations.

Exploratory testing can be guided by a **test charter**, which gives a testing session a clear mission without prescribing every test step. A charter can identify the areas to explore, risks to investigate, required test data, constraints and session duration.

![Exploratory testing process](./1_level/assets/images/exploratory_testing_process.png)

Exploratory testing is often performed in **time-boxed sessions**. A structured approach that organizes exploratory testing into time-boxed sessions is known as **Session-Based Test Management (SBTM)**. Charters, session notes and debriefs help make exploratory testing easier to manage and review.

During a session, testers record important actions, observations and issues. After the session, the findings can be reviewed in a short **debrief** with a test lead, product owner or another relevant stakeholder to clarify findings and decide whether follow-up testing is needed.

Exploratory testing does not need to continue indefinitely. Testing can stop when the session time box expires, when new test ideas are no longer revealing useful information or when the remaining untested areas present an acceptably low level of risk.

**Pair testing** is a collaborative form of testing in which two people test together. One person may interact with the system while the other observes, asks questions, suggests test ideas and records findings. The roles can be exchanged during the session.

**Checklist-based testing** uses a predefined list of conditions, features, risks or quality characteristics to guide testing without specifying every test step in a detailed test case. It provides more structure than free exploration while allowing the tester to decide how each checklist item should be tested.

A checklist should be specific enough to guide testing but not so detailed that it becomes a set of fully scripted test cases. Checklists can support both **functional and non-functional testing** and should be reviewed as the product, risks and team knowledge change.

**Ad-hoc testing** is an informal, unstructured approach in which the tester investigates the system without predefined test cases, a test charter or a checklist. The tester chooses actions based on immediate observations and ideas.

Ad-hoc testing should not be confused with meaningless random clicking. Effective ad-hoc testing still benefits from product knowledge, curiosity and awareness of risk. Its main advantage is speed because little preparation is required, but the trade-off is limited repeatability and visibility of coverage.

If a defect is discovered during ad-hoc testing, the tester should record the steps, test data, environment and relevant system state as soon as possible so that the issue can be reproduced. Ad-hoc testing is generally used as a complementary approach rather than as the sole method when demonstrable coverage, traceability, repeatability or audit evidence is required.

The four approaches can be viewed as a **spectrum of structure**, ranging from very little predefined structure in ad-hoc testing to more consistent guidance in checklist-based testing.

![Experience-based testing spectrum](./1_level/assets/images/experience_based_testing_spectrum.png)

These approaches can also be combined. An exploratory testing session can use error-guessing heuristics or a checklist as sources of test ideas. The appropriate amount of structure depends on the testing objective, risk, available information, time and the need for repeatability or evidence.

After reviewing Level 1, you should be able to explain **how experience-based testing generates test ideas**, describe **error guessing and common heuristics**, explain the purpose of a **fault attack**, describe how **exploratory testing** combines design, execution and learning, explain **test charters, test oracles, time-boxed sessions, SBTM and debriefing**, describe **checklist-based and ad-hoc testing**, and compare the four approaches according to their degree of structure.
