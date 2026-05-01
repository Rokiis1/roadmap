# Content of test case design level 4

- [Statement Testing](#statement-testing)
- [Branch Testing](#branch-testing)
- [Path Testing](#path-testing)
- [Differences Between Statement, Branch and Path Testing](#differences-between-statement-branch-and-path-testing)

In previous levels, test cases were designed using experience-based and specification-based techniques. These approaches focus on inputs, outputs and expected behavior without considering how the system is implemented internally.

At this level, the focus shifts to how the system is built. Instead of treating the system as a **black-box testing** is now based on the internal structure of the code. This approach is known as **white-box testing**.

White-box testing uses knowledge of the code, control flow and logic to design test cases. The goal is to ensure that different parts of the implementation are executed and validated, rather than only verifying external behavior.

White-box techniques are most effective when used together with the black-box techniques from **Test Case Design Level 3**. While black-box testing verifies that the system meets requirements from the user's perspective, white-box testing ensures the underlying implementation is thorough and free of structural defects. Both approaches are needed for complete testing coverage.

This introduces a more detailed level of testing, where coverage of the internal structure becomes important. Test cases are designed to execute statements, decisions, and different execution paths within the code.

We start with **Statement Testing**, which focuses on ensuring that each statement in the code is executed at least once.

## Statement Testing

**Statement Testing** is a white-box testing technique that focuses on executing every statement in the code at least once.

At this level, testing is no longer based only on inputs and outputs. Instead, the internal structure of the code is analyzed to understand how the program executes. Each line of code represents a **statement**, and the goal is to ensure that none of these statements are left untested.

A **statement** is a single instruction in the program, such as a variable assignment, a function call, or a control flow operation like `if` or `else`. If a statement is never executed during testing, any defect within that part of the code will remain undetected.

To measure how thoroughly the code is tested, **statement coverage** is used. It represents the percentage of executed statements compared to the total number of statements in the code.

`Statement Coverage = (Executed Statements / Total Statements) * 100`

The objective is to achieve the highest possible coverage, ideally `100%`, meaning every statement has been executed at least once.

To understand how this works, consider a simple example.

```js
function compareNumbers(a, b) {
  if (a > b) {
    console.log("a is bigger");
  } else {
    console.log("b is bigger");
  }
}
```

The diagram below shows how the execution flows through the code.

```text
Test Case 1 (a > b)

Start
  |
  v
if (true)
  |
  v
"a is bigger"
  |
  v
 End


Test Case 2 (a <= b)

Start
  |
  v
if (false)
  |
  v
"b is bigger"
  |
  v
 End
 ```

In this function, there are multiple statements, including the function declaration, the `if` condition, and the two possible output statements. The `else` block also contains statements that must be executed to achieve full coverage.

If only one test case is used, for example `compareNumbers(20, 10)`, only part of the code will be executed. The `else` and its `console.log` statement will never run, leaving those statements untested.

To achieve full statement coverage, at least two test cases are required.

`compareNumbers(20, 10)` executes the `if` branch
`compareNumbers(10, 20)` executes the `else` branch

By executing both cases, all statements in the function are covered.

It is important to note that achieving 100% statement coverage does not guarantee the code is defect-free. **Unreachable code** statements that can never be executed due to logical errors may still exist. Coverage tools can identify which statements were never executed, but they cannot determine whether unexecuted code is unreachable by design or due to a defect.

Statement testing ensures that every part of the code is executed at least once. However, it does not guarantee that all logical decisions are fully tested, since different conditions within the same statement may still behave differently.

Because of this limitation, stronger techniques are needed to verify decision logic more thoroughly.

This leads to **Branch Testing**, which focuses on ensuring that all decision outcomes are tested.

## Branch Testing

**Branch Testing** is a white-box testing technique that focuses on executing every possible decision outcome in the code at least once.

At this level, testing goes beyond simply executing statements. It focuses on the different paths that can be taken when a condition is evaluated. Whenever the program encounters a decision point, such as an `if` or `else`, the execution can follow different branches depending on the condition.

A **branch** represents one of these possible outcomes. For example, an `if` statement has two branches, one when the condition is true and one when it is false. An `else if` chain creates additional branches, each representing a distinct decision outcome. If only one branch is executed during testing, the other branches remain untested, which may hide defects.

To measure how thoroughly the code is tested, **branch coverage** is used. It represents the percentage of executed branches compared to the total number of branches in the code.

`Branch Coverage = (Executed Branches / Total Branches) * 100`

The objective is to ensure that each decision outcome is executed at least once.

To understand how this works, consider a simple example.

```js
function compareNumbers(a, b) {
  if (a > b) {
    console.log("a is bigger");
  } else {
    console.log("b is bigger");
  }
}
```

Execution flow with decision outcomes can be visualized as follows

```text
        Start
          |
          v
     (a > b ?)
       /   \
   True     False
     |         |
     v         v
"a is bigger" "b is bigger"
     |         |
     v         v
        End
```

In this function, the condition `a > b` creates two possible branches. Each evaluation of the condition leads to a different branch, representing a distinct decision outcome.

While **statement testing** focuses on executing each line of code at least once, **branch testing** focuses on executing each possible outcome of a decision.

It is possible to execute all statements without executing all branches. For example, if only one test case is used, such as `compareNumbers(20, 10)`, the program will execute successfully and produce an output, but the `else` branch will never be evaluated.

To achieve full branch coverage, at least two test cases are required

`compareNumbers(20, 10)` executes the true branch
`compareNumbers(10, 20)` executes the false branch

By executing both outcomes, all branches in the function are covered.

Branch testing is stronger than statement testing because it ensures that all decision outcomes are evaluated. Achieving full branch coverage also guarantees that all statements are executed, assuming all statements are reachable. However, the reverse is not always true full statement coverage does not guarantee full branch coverage.

However, branch testing still does not guarantee that all possible execution paths are tested, especially when multiple conditions are combined. For example, consider a compound condition.

```js
if (a > b && c < d) {
  console.log("conditions met");
}
```

Branch testing only requires one test case where the overall condition is true and one where it is false. It does not verify whether each sub-condition (`a > b` and `c < d`) independently affects the outcome. To verify this, **Condition Coverage** is needed, where each Boolean sub-condition is evaluated as both true and false.

To address complete execution paths, testing can go even further by analyzing all possible routes through the code.

This leads to **Path Testing**, which focuses on covering different execution paths from start to end.

## Path Testing

**Path Testing** is a white-box testing technique that focuses on executing different possible paths through the code from start to end.

At this level, testing goes beyond individual statements and decision outcomes. It considers how multiple conditions and branches combine during execution. Each unique sequence of execution forms a **path**, and different inputs may cause the program to follow different paths.

A **path** represents a complete route through the code, starting from the entry point and ending at the exit. In programs that contain multiple conditions, loops or decision points, the number of possible paths can increase quickly. For a program with `n` independent binary decisions, the number of possible paths can be as high as `2^n`, a phenomenon known as **path explosion**. This makes full path coverage impractical for complex systems.

To measure how thoroughly the code is tested, **path coverage** is used. It represents the percentage of executed paths compared to the total number of possible paths in the code.

`Path Coverage = (Executed Paths / Total Paths) * 100`

The objective is to execute as many meaningful paths as possible to ensure that different combinations of conditions are tested.

To understand how this works, consider a simple example.

```js
function processNumbers(a, b) {
  let result;
  if (a > b) {
    result = a - b;
    console.log("a is greater");
  } else if (a < b) {
    result = b - a;
    console.log("b is greater");
  } else {
    result = a + b;
    console.log("a and b are equal");
  }
  return result;
}
```

Execution paths can be visualized as follows.

```text
Path 1:
Start
  |
  v
(a > b) true
  |
  v
"a is greater"
  |
  v
 End

Path 2:
Start
  |
  v
(a > b) false
  |
  v
(a < b) true
  |
  v
"b is greater"
  |
  v
 End

Path 3:
Start
  |
  v
(a > b) false
  |
  v
(a < b) false
  |
  v
"a and b are equal"
  |
  v
 End
```

In this function, each path represents a complete sequence of decisions and execution steps from start to end.

While **branch testing** focuses on executing each individual decision outcome, **path testing** focuses on executing complete combinations of those decisions.

This means that even if all branches are tested, some combinations of conditions may still remain untested.

To cover all paths in this example, three test cases are required.

`processNumbers(20, 10)` executes the first condition
`processNumbers(10, 20)` executes the second condition
`processNumbers(10, 10)` executes the final condition

By executing each of these cases, all defined paths in the function are covered.

Path testing provides a more thorough level of coverage compared to statement and branch testing because it verifies complete execution flows rather than individual parts of the code.

However, as the number of conditions increases, the number of possible paths grows rapidly, making full path coverage difficult or impractical in larger systems. Because of this, path testing is often applied selectively, focusing on the most critical or high-risk paths in the system.

When loops are present, the number of paths becomes theoretically infinite. In practice, loop testing strategies focus on key iterations, **zero iterations** (skip the loop), **one iteration** (execute once) and **many iterations** (execute multiple times). This approach, known as **boundary testing for loops**, ensures that common loop-related defects are detected without attempting infinite path coverage.

## Differences Between Statement, Branch and Path Testing

At this level, three white-box testing techniques were introduced, each providing a different level of coverage and depth.

Although they may seem similar, they focus on different aspects of code execution.

Statement testing ensures that every line of code is executed at least once. The focus is on verifying that all statements run during testing. However, it does not guarantee that all decision outcomes are evaluated.

Branch testing builds on this by ensuring that every decision outcome is executed. It verifies that both true and false paths of conditions are tested. This makes it stronger than statement testing, but it still does not guarantee that all combinations of decisions are covered.

Path testing goes even further by focusing on complete execution paths from start to end. It ensures that different combinations of conditions are tested as full flows. This provides the most thorough level of coverage, but it can become complex as the number of possible paths increases.

The key difference between these techniques is the level of coverage they provide.

Statement testing answers the question of whether the code was executed.  
Branch testing answers whether all decision outcomes were evaluated.  
Path testing answers whether all execution flows were tested.

In practice, white-box testing is supported by **code coverage** tools such as **Istanbul** for JavaScript, **JaCoCo** for Java or **coverage.py** for Python. These tools instrument the code to track which statements, branches and paths are executed during test runs. Coverage reports help identify untested areas and are often integrated into CI/CD pipelines, where builds can be configured to fail if coverage falls below a defined threshold. Typical industry targets vary by context, **80% statement coverage** is common for general applications, while 1**00% branch coverage** may be required for safety critical or financial systems.
