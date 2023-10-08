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

| Test Case ID | Test Case Description               | Test Objective                                |  Preconditions                            | Test Steps                                                                                                                | Test Data                         | Expected Results                                  | Actual Results | Status   | Notes | Test Environment | Test Data Sources | Test Case Author | Date Created | Date Last Modified |
|--------------|-----------------------------------|-----------------------------------------------|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------|--------------------------------------------------|----------------|----------|-------|-----------------|------------------|------------------|--------------|-------------------|
| TC001        | Age Validation - Valid Input       | Verify that the system accepts valid ages.   | Equivalence Class 1: Valid input (18 to 65)   | 1. Navigate to the registration page. 2. Enter an age within the valid range (30). 3. Submit the registration form.   | Age: 30                           | The registration is successful.                   |                | Not Run  |       | Windows 11, Chrome | Database         | Rokas          | 2023-10-07   | 2023-10-07         |
| TC002        | Age Validation - Invalid Input     | Verify that the system rejects invalid ages. | Equivalence Class 2: Invalid input (< 18)    | 1. Navigate to the registration page. 2. Enter an age less than 18 (16). 3. Submit the registration form.     | Age: 16                           | An error message is displayed.                    |                | Not Run  |       | Windows 12, Chrome | Database         | Rokas          | 2023-10-07   | 2023-10-07         |
| TC003        | Age Validation - Invalid Input     | Verify that the system rejects invalid ages. | Equivalence Class 3: Invalid input (> 65)    | 1. Navigate to the registration page. 2. Enter an age greater than 65 (70). 3. Submit the registration form. | Age: 70                           | An error message is displayed.                    |                | Not Run  |       | Windows 13, Chrome | Database         | Rokas          | 2023-10-07   | 2023-10-07         |
