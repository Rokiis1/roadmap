Consider a console-based application that determines whether a given number is even or odd. The partitions for this application could be:
1. Even numbers: Numbers with no remainder when divided by 2.
2. Odd numbers: Numbers with a remainder of 1 when divided by 2.
3. Invalid input: Any input that is not a positive integer.

Test cases based on equivalence partitions:
- Test case 1: Input = 2 (Even number) - Expect "This number is even."
- Test case 2: Input = 9 (Odd number) - Expect "This number is odd."
- Test case 3: Input = "abc" (Invalid input) - Expect "Invalid input."
- Test case 4: Input = 1.2 (Invalid input) - Expect "Invalid input."