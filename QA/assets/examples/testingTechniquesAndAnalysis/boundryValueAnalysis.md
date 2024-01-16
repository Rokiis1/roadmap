
```plaintext
+--------------------------------------------------------------------+
| Test Case | Password Length      | Expected Result                 |
+--------------------------------------------------------------------+
| Test 1    | 7 (Lower Bound - 1)  | Invalid Input - Below Minimum   |
| Test 2    | 8 (Lower Bound)      | Valid Input                     |
| Test 3    | 9 (Within Range)     | Valid Input                     |
| Test 4    | 12 (Upper Bound)     | Valid Input                     |
| Test 5    | 13 (Upper Bound + 1) | Invalid Input - Exceeds Maximum |
+--------------------------------------------------------------------+
```

**Explanation:**

- **Password Length:** The length of the user's password.
- **Expected Result:** The expected outcome based on the password length.

**In this scenario:**

- **Test 1:** Verifies that the system correctly identifies passwords below the minimum allowed length (7 characters) as invalid.
- **Test 2:** Tests the lower boundary to ensure that the system accepts passwords that meet the minimum requirement (8 characters).
- **Test 3:** Tests a password length within the acceptable range to ensure the system handles it as valid.
- **Test 4:** Tests the upper boundary to ensure that the system accepts passwords that meet the maximum requirement (12 characters).
- **Test 5:** Verifies that the system correctly identifies passwords exceeding the maximum allowed length (13 characters) as invalid.
