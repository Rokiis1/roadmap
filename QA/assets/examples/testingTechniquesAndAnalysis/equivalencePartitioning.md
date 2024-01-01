# Example 1

Consider a console-based application that determines whether a given number is even or odd. The partitions for this application could be:
1. Even numbers: Numbers with no remainder when divided by 2.
2. Odd numbers: Numbers with a remainder of 1 when divided by 2.
3. Invalid input: Any input that is not a positive integer.

Test cases based on equivalence partitions:
- Test case 1: Input = 2 (Even number) - Expect "This number is even."
- Test case 2: Input = 9 (Odd number) - Expect "This number is odd."
- Test case 3: Input = "abc" (Invalid input) - Expect "Invalid input."
- Test case 4: Input = 1.2 (Invalid input) - Expect "Invalid input."

# Example 2

| Test Case   | Input                                                                      | Expected Outcome                          |
|-------------|----------------------------------------------------------------------------|-------------------------------------------|
| TC001       | Valid Username: "john_doe123"                                              | Registration is successful.               |
| TC002       | Invalid Username (Short): "abc"                                            | Registration fails with an error message. |
| TC003       | Invalid Username (Long): "very_long_username_with_more_than_20_characters" | Registration fails |with an error message.|
| TC004       | Valid Email Address: "user@example.com"                                    | Registration is successful.               |
| TC005       | Invalid Email Address (No "@"): "invalid-email"                            | Registration fails with an error message. |
| TC006       | Invalid Email Format: "user[at]example[dot]com"                            | Registration fails with an error message. |
| TC007       | Valid Password: "secure123"                                                | Registration is successful.               |
| TC008       | Invalid Password (Short): "short"                                          | Registration fails with an error message. |
| TC009       | Invalid Password (No Alphanumeric Characters): "alllowercase"              | Registration fails with an error message. |
