# Content of Python Input/Output Operations Summary

- [Input/Output Level 1](#inputoutput-level-1)
- [Input/Output Level 2](#inputoutput-level-2)

## Input/Output Level 1

### Summary Input/Output Level 1

In this level, we learned the fundamentals of **input and output (I/O)** in Python. Input and output allow a program to interact with the outside world by receiving data and displaying results.

We began by learning how to receive user input using the built-in `input()` function. We saw that `input()` always returns a **string**, regardless of what the user enters, and that numerical input must be explicitly converted using functions such as `int()` when arithmetic operations are required.

Next, we explored how to produce output using the built-in `print()` function. We learned how `print()` displays text and values on the screen, how it handles multiple values, and how its behavior can be customized using the `sep` and `end` arguments.

We then introduced **escape characters**, which allow special characters such as new lines and tabs to be represented inside strings. This gave us control over how text appears when displayed.

After that, we learned about **raw strings**, which treat backslashes as literal characters. Raw strings are especially useful when working with file paths and regular expressions.

Finally, we explored **basic string formatting**, including f-strings and the `%` operator. These tools allow values to be inserted into strings, making output clearer and more dynamic.

## Input/Output Level 2

### Summary Input/Output Level 2

In this level, we focused on **controlling the appearance of output** to make it more structured, readable, and consistent.

We began with **advanced string formatting**, building on the f-strings introduced in Level 1. We learned how to use **format specifiers** to control how values are displayed rather than simply inserting them into strings.

Next, we explored **padding and alignment**, which allow text and numbers to be positioned consistently within a given width. We learned that width represents a **minimum width**, and that padding is only applied when the specified width is greater than the length of the value.

We then examined **width and precision**, focusing on numeric values. We learned how width controls the minimum number of characters used for display and how precision controls the number of digits shown, especially after the decimal point for floating-point numbers.

Finally, we covered **numeric formatting**, which allows numbers to be displayed using thousands separators, fixed decimal formats, and percentages. These formatting options improve readability and are commonly used in real-world output such as reports, summaries, and user-facing displays.

Together, these topics provide a strong foundation for presenting structured and readable output before moving on to more advanced input/output operations such as file handling.
