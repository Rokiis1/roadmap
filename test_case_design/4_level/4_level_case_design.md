# Content of test case design level 4

- [Statement Testing](#statement-testing)
- [Branch Testing](#branch-testing)
- [Path Testing](#path-testing)

In previous levels, test cases were designed using experience-based and specification-based techniques. These approaches focus on inputs, outputs and expected behavior without considering how the system is implemented internally.

At this level, the focus shifts to how the system is built. Instead of treating the system as a black box, testing is now based on the internal structure of the code. This approach is known as **white-box testing**.

White-box testing uses knowledge of the code, control flow and logic to design test cases. The goal is to ensure that different parts of the implementation are executed and validated, rather than only verifying external behavior.

This introduces a more detailed level of testing, where coverage of the internal structure becomes important. Test cases are designed to execute statements, decisions, and different execution paths within the code.

We start with **Statement Testing**, which focuses on ensuring that each statement in the code is executed at least once.

## Statement Testing

**Statement Testing** is a white-box testing technique that focuses on executing every statement in the code at least once.

At this level, testing is no longer based only on inputs and outputs. Instead, the internal structure of the code is analyzed to understand how the program executes. Each line of code represents a **statement**, and the goal is to ensure that none of these statements are left untested.

A **statement** is a single instruction in the program, such as variable assignment, function calls, or control flow operations like `if` or `else`. If a statement is never executed during testing, any defect within that part of the code will remain undetected.

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

The following diagram shows how the execution flows through the code.

![Statement Testing Flow](./assets/images/statement-testing-flow.png)

In this function, there are multiple statements, including the function declaration, the `if` condition, and the two possible output statements.

If only one test case is used, for example `compareNumbers(20, 10)`, only part of the code will be executed. The `else` branch will never run, leaving some statements untested.

To achieve full statement coverage, at least two test cases are required

`compareNumbers(20, 10)` executes the `if` branch
`compareNumbers(10, 20)` executes the `else` branch

Vy executing both paths, all statements in the function are covered.

Statement testing is useful because it ensures that every part of the code is executed at least once. However, it does not guarantee that all logical decisions are fully tested, since different conditions within the same statement may still behave differently.

Because of this limitation, stronger techniques are needed to verify decision logic more thoroughly.

This leads to Branch Testing, which focuses on ensuring that all decision outcomes are tested.

## Branch Testing

**Branch Testing** is a white-box testing technique that focuses on executing every possible decision outcome in the code at least once.

At this level, testing goes beyond simply executing statements. It focuses on the different paths that can be taken when a condition is evaluated. Whenever the program encounters a decision point, such as an `if` or `else`, the execution can follow different branches depending on the condition.

A **branch** represents one of these possible outcomes. For example, an `if` statement has two branches, one when the condition is true and one when it is false. If only one branch is executed during testing, the other branch remains untested, which may hide defects.

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

In this function, the condition `a > b` creates two possible branches. One branch is executed when the condition is true, and the other is executed when the condition is false.

The diagram below shows how these decision outcomes are represented during execution.

![Branch Testing Flow](./assets/images/branch-testing-flow.png)

If only one test case is used, for example `compareNumbers(20, 10)`, only the true branch is executed. The false branch remains untested.

To achieve full branch coverage, at least two test cases are required

`compareNumbers(20, 10)` executes the true branch
`compareNumbers(10, 20)` executes the false branch

By executing both outcomes, all branches in the function are covered.

Branch testing is considered stronger than statement testing because it ensures that all decision outcomes are evaluated. Achieving full branch coverage also guarantees that all statements are executed, but the reverse is not always true.

However, branch testing still does not guarantee that all possible execution paths are tested, especially when multiple conditions are combined.

To address this, testing can go even further by analyzing complete execution paths through the code.

This leads to Path Testing, which focuses on covering different execution paths from start to end.

## Path Testing

**Path Testing** is a white-box testing technique that focuses on executing different possible paths through the code from start to end.

At this level, testing goes beyond individual statements and decision outcomes. It considers how multiple conditions and branches combine during execution. Each unique sequence of execution forms a **path**, and different inputs may cause the program to follow different paths.

A **path** represents a complete route through the code, starting from the entry point and ending at the exit. In programs that contain multiple conditions, loops, or decision points, the number of possible paths can increase quickly.

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

In this function, there are multiple possible paths depending on how the conditions are evaluated.

The diagram below shows how different execution paths are formed through the code.

![Path Testing Flow](./assets/images/path-testing-flow.png)

If only one test case is used, for example `processNumbers(20, 10)`, only one path is executed. The other possible paths remain untested.

To cover all paths in this example, three test cases are required

`processNumbers(20, 10)` executes the first condition
`processNumbers(10, 20)` executes the second condition
`processNumbers(10, 10)` executes the final condition

By executing each of these cases, all defined paths in the function are covered.

Path testing provides a more thorough level of coverage compared to statement and branch testing because it considers complete execution flows. However, in real systems, the number of possible paths can grow very quickly, making full path coverage difficult or impractical.

Because of this, path testing is often applied selectively, focusing on the most critical or high-risk paths in the system.
