## Task: Boundary Value Analysis for Price Range Selection

**Context:**

You are testing the price range selection feature on an e-commerce platform. Users can choose a price range from the available options or set a custom range.

**Objective:**

Apply Boundary Value Analysis to design test cases for the price range selection. Ensure that you cover values at the lower and upper boundaries as well as values just inside these boundaries for both predefined and custom ranges.

**Instructions:**

1. **Predefined Price Range:**
   - Class 1: Any price (No specific range).
   - Class 2: Under USD 25.
   - Class 3: USD 25 to USD 50.
   - Class 4: USD 50 to USD 100.
   - Class 5: Over USD 100.

2. **Custom Price Range:**
   - Class 6: Custom range with a minimum value (Low) just below the lower limit.
   - Class 7: Custom range with a maximum value (High) just above the upper limit.
   - Class 8: Custom range with a minimum value (Low) just above the lower limit.
   - Class 9: Custom range with a maximum value (High) just below the upper limit.

3. **Invalid Price Range:**
   - Class 10: Custom range with invalid characters or non-numeric values.
   - Class 11: Custom range with the maximum value (High) less than the minimum value (Low).

**Deliverables:**
- Create a table similar to the one provided in your solution, outlining each test case, the selected price range, and the expected outcome.
- Write a brief explanation for each class, justifying the inclusion of the chosen test cases.

**Note:**
Consider how the system should handle these different scenarios, such as displaying the correct products for valid inputs or showing appropriate error messages for invalid selections. Adapt the template to suit the specifics of your system and requirements.

**Demo:**

- [Demo: Price range](https://www.etsy.com/?ref=lgo)