# Content of Python inputs/outputs operations 2 level

- [Advanced String Formatting](#advanced-string-formatting)
- [Padding and Alignment](#padding-and-alignment)
- [Width and Precision](#width-and-precision)
- [Numeric Formatting](#numeric-formatting)

In **Input/Output Level 1**, we learned how to display values using basic **f-strings** and the `%` operator. These methods allow us to insert values into strings, but they do not give us much control over how those values appear.

In real programs, output often needs to be **structured**, **aligned**, and **readable**. For example, numbers may need a fixed number of decimal places, text may need to align in columns, or values may need consistent spacing.

## Advanced String Formatting

To support this, Python allows **advanced string formatting** using **format specifiers** inside f-strings.

A format specifier is placed **inside the curly braces** of an f-string, after a colon (`:`).

```py
{value:format}
```

The value before the colon is the data being displayed, and the part after the colon describes **how it should be formatted**.

```py
price = 12.5
print(f"Price: {price:.2f}")
```

In this case, `.2f` tells Python to display the number using **two decimal places**.

In many situations, we also need to control **where values appear**, especially when output contains multiple items or repeated lines.

To achieve consistent and readable layouts, Python allows us to control padding and alignment when displaying values.

## Padding and Alignment

Before using padding and alignment, it is important to remember one rule: the width you provide is a **minimum width**, not a maximum.

The string `"Vardenis"` has **8 characters**, so using a width of `8` will not add any padding. Padding will only appear when the width is **greater** than the length of the value (for `"Vardenis"`, padding starts from width `9` and higher).

When displaying output, values do not always have the same length. As a result, text and numbers can appear uneven, making output harder to read, especially when values are shown in rows or repeated lines.

**Padding** and **alignment** allow us to control how values are positioned when displayed.

Padding refers to the extra space added around a value, while alignment determines whether the value appears to the **left, right**, or **center** within that space.

Python allows us to control padding and alignment using **format specifiers** inside f-strings.

Alignment is specified using the following symbols:

- `<` aligns content to the left
- `>` aligns content to the right
- `^` centers the content

These symbols are placed after the colon inside the formatting braces.

```py
text = "Example"
print(f"{text:<10}")
print(f"{text:>10}")
print(f"{text:^10}")
```

In each case, the value is displayed within a fixed width of ten characters, but aligned differently.

By default, padding is done using spaces. This makes it possible to create visually aligned output without changing the original values.

```py
name = "Vardenis"
print(f"{name:>10}")
```

Here, spaces are added before the text so that it aligns to the right within the given width.

Padding can also be done using zeros, which is commonly used when displaying numbers.

```py
number = 7
print(f"{number:03}")
```

In this case, the number is padded with leading zeros to ensure a width of three characters.

Padding and alignment help control **where** values appear and how they are spaced horizontally. However, when working with numbers especially floating-point values we often need more precise control over **how many characters are displayed** and **how many decimal places are shown**.

To address this, Python provides additional formatting options for controlling **width and precision**, which allow numeric output to be displayed in a consistent and predictable way.

## Width and Precision

When displaying numeric values, especially floating-point numbers, the way numbers appear can vary depending on their size or value. This can make output look inconsistent or harder to read when multiple numbers are displayed together.

To improve this, Python allows us to control both the **width** of the output and the precision of numeric values.

The **width** specifies the minimum number of characters used to display a value, while **precision** controls how many digits are shown, most commonly after the decimal point.

Width works in the same way as seen in padding and alignment. It defines the minimum space reserved for a value.

```py
number = 42
print(f"{number:5}")
```

Here, the number is displayed within a width of five characters. If the value is shorter than the specified width, padding is added automatically.

Precision is commonly used with floating-point numbers to control the number of decimal places.

```py
value = 3.1415926
print(f"{value:.2f}")
```

In this example, `.2f` tells Python to display the number using **two decimal places**.

Precision helps ensure that numeric output remains consistent, especially when values change dynamically.

Width and precision can be combined to control both spacing and decimal detail at the same time.

```py
value = 3.1415926
print(f"{value:8.2f}")
```

- `8` defines the minimum width
- `.2f` defines the number of decimal places

numbers are often displayed in different forms, such as large values with separators, percentages, or fixed numeric styles.

To handle these cases, Python provides additional options for numeric formatting, which focus on how numbers are represented rather than just their size or precision.

## Numeric Formatting

In addition to controlling width and precision, Python allows numbers to be displayed in different **numeric formats**. These formats change how numeric values are represented, making them easier to read or better suited for specific contexts.

Numeric formatting is commonly used when displaying large numbers, percentages, or values that require a consistent visual style.

```py
value = 1234567
print(f"{value:,}")
```

This formats the number using commas to separate thousands.

Thousands separators can also be combined with precision control.

```py
value = 1234567.8912
print(f"{value:,.2f}")
```

In this case, commas separating thousands and two digits after the decimal point.

Numeric formatting can also be used to display values as percentages.

```py
ratio = 0.75
print(f"{ratio:.0%}")
```

Here, the value is multiplied by 100 and displayed with a percent sign.
