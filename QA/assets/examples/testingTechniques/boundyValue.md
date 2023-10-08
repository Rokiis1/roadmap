# Example 1

Consider a test scenario where the speed of a car should be between 40 and 80 km/h to achieve optimal fuel efficiency. Test cases for boundary value analysis in this scenario could include:

- Test case 1: Speed = 39 km/h (Below the minimum boundary) - Expect an invalid result.
- Test case 2: Speed = 40 km/h (Minimum boundary) - Expect a valid result.
- Test case 3: Speed = 41 km/h (Just above the minimum boundary) - Expect a valid result.
- Test case 4: Speed = 79 km/h (Just below the maximum boundary) - Expect a valid result.
- Test case 5: Speed = 80 km/h (Maximum boundary) - Expect a valid result.
- Test case 6: Speed = 81 km/h (Above the maximum boundary) - Expect an invalid result.

# Example 2

| Test Case ID | Test Case Description | Test Objective | Preconditions | Test Steps | Test Data | Expected Results | Actual Results | Status | Notes | Test Environment | Test Data Sources | Test Case Author | Date Created | Date Last Modified |
|--------------|-----------------------|----------------|---------------|------------|-----------|-----------------|---------------|--------|-------|-----------------|------------------|------------------|--------------|-------------------|
| TC001        | Login with valid credentials | Verify that users can log in successfully with valid credentials. | User account exists | 1. Open the login page. 2. Enter valid username and password. 3. Click the "Login" button. | Username: user123 Password: pass123 | User is logged in and redirected to the dashboard. | | Not Run | | Windows 11, Chrome | Database | Rokas | 2023-10-07 | 2023-10-07 |
