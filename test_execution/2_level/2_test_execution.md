# Content of Test Execution Level 2

- [When to Use Manual Testing](#when-to-use-manual-testing)
- [When to Use Automation Testing](#when-to-use-automation-testing)
- [What Not to Automate](#what-not-to-automate)
- [Trade-offs in Test Execution](#trade-offs-in-test-execution)

In the previous level, the focus was on understanding what test execution is and how manual and automation testing differ.

At this level, the focus shifts to deciding how tests should be executed in practice.

Not all tests should be executed in the same way. Some situations require human judgment and flexibility, while others benefit from speed and consistency.

The choice depends on factors such as how often tests need to be executed, how stable the system is, and what type of behavior is being verified.

The goal is to understand when manual testing provides more value, when automation is the better choice and how to make effective decisions based on the context.

We begin by examining when manual testing should be preferred.

## When to Use Manual Testing

Manual testing is the better choice when human observation and flexibility are required.

It becomes especially important when working with new or changing features. In early stages, requirements may not be fully defined and test cases cannot always be clearly specified in advance.

When the goal is to evaluate how the system feels to a real user, manual testing is necessary. Usability, readability and overall interaction require human judgment and cannot be reliably validated by automation.

Manual testing is also more practical when tests are executed only a few times. In these cases, creating automation would require more effort than the value it provides.

If the system is unstable or frequently changing, manual testing is often preferred. Automated tests may break often and require constant maintenance, reducing their effectiveness.

Manual testing is also essential when investigating unexpected behavior. Understanding defects and exploring their causes requires flexibility that cannot be predefined in scripts.

In these situations, manual testing provides more value than automation.

In the next section, we look at situations where automation testing becomes the more effective approach.

## When to Use Automation Testing

Automation testing is most appropriate in situations where tests need to be executed repeatedly and consistently.

It is commonly used for regression testing. When changes are made to the system, previously working functionality must be verified again. Running these tests manually every time can be slow and error-prone, while automated tests can execute the same steps quickly and reliably.

Automation is also useful when working with stable features. If a part of the system does not change frequently, automated tests can be created once and reused many times without constant updates.

Another common use is when tests need to be executed across multiple environments or configurations. Automation allows the same test to run against different browsers, devices or environments without additional manual effort.

Automation testing is especially valuable when dealing with large numbers of test cases. As the system grows, executing all tests manually becomes inefficient. Automated execution makes it possible to run many tests in a short amount of time.

It is also used in continuous integration and delivery processes, where tests must run automatically whenever changes are introduced to the codebase.

In practice, automation testing is chosen when speed, consistency and repeatability are more important than human observation.

However, not all tests are suitable for automation and choosing what to automate requires careful consideration.

## What Not to Automate

Automation testing is the better choice when tests need to be executed repeatedly and consistently.

It becomes especially valuable in regression testing, where previously working functionality must be verified after changes are introduced. Executing these tests manually every time is inefficient, while automation allows them to run quickly and reliably.

Automation should be preferred for stable features that do not change frequently. In these cases, tests can be created once and reused without constant updates.

It is also the right approach when tests need to run across multiple environments or configurations. Automation makes it possible to execute the same test in different browsers, devices or environments without additional effort.

As the number of test cases increases, automation becomes necessary. Running large test suites manually is slow and difficult to maintain, while automated execution allows many tests to run in a short time.

Automation is also essential in continuous integration and delivery processes, where tests must run automatically whenever changes are introduced to the system.

In these situations, automation provides more value than manual execution by improving speed, consistency and reliability.

However, not all tests should be automated and selecting the right candidates is an important part of the process.

## Trade-offs in Test Execution

Choosing between manual and automation testing is not about selecting one over the other. Each approach provides value in different situations and the decision depends on the context.

One key trade-off is between speed and effort. Automation allows tests to run quickly and repeatedly, but requires time to design and maintain. Manual testing requires little setup, but becomes inefficient when tests need to be repeated.

Another trade-off is consistency versus flexibility. Automated tests follow predefined steps and produce consistent results. Manual testing allows testers to adapt, explore and respond to unexpected behavior.

Cost is also an important factor. Automation has a higher initial cost, but becomes more efficient over time when tests are reused. Manual testing has a lower initial cost, but can become expensive when repeated frequently.

There is also a difference between verification and observation. Automated tests only check what is defined in the script, while manual testing allows broader observation and can reveal unexpected issues.

Because of these trade-offs, neither approach is sufficient on its own. The goal is to apply each where it provides the most value, balancing speed, cost, flexibility and reliability.
