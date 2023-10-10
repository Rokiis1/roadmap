# Content Table

- [Bug Report Table](#bug-report-table)
- [Bug Report Table example](#bug-report-table-example)
- [What kind of bug we should write](#what-kind-of-bug-we-should-write)

# Bug Report Table

| Field                | Value                                 |
|----------------------|---------------------------------------|
| Defect ID            | BUG-001                               |
| Date Reported        | 2023-09-16                            |
| Project              | [Project Name]                        |
| Module/Component     | [Module or Component Affected]        |
| Severity             | [High, Medium, Low]             |
| Priority             | [High, Medium, Low]             |
| Reported By          | [Name of Tester]                      |
| Summary              | [Brief Description of the Defect]     |
| Description          | [Detailed Description of the Defect]  |
| Steps to Reproduce   | [List of Steps to Reproduce the Issue]|
| Expected Behavior    | [What Was Expected]                   |
| Actual Behavior      | [What Actually Happened]              |
| Attachments          | [Screenshots, Log Files]        |
| Environment          | [Testing Environment Details]          |
| Status               | [Open, In Progress, Closed, Reopened]  |
| Assigned To          | [Developer's Name or ID]              |
| Date Fixed           | [Date when Fixed, if applicable]      |
| Comments/Notes       | [Additional Information or Notes]      |

# Bug Report Table example

| Field               | Value                                     |
|---------------------|-------------------------------------------|
| Defect ID           | BUG-123                                   |
| Date Reported       | 2023-10-10                                |
| Project             | E-commerce Website                        |
| Module/Component    | Checkout Process                          |
| Severity            | High                                      |
| Priority            | High                                      |
| Reported By         | Rokas                            |
| Summary             | Payment Error during Checkout             |
| Description         | When attempting to make a payment during checkout, an error message is displayed, and the payment cannot be processed.           |
| Steps to Reproduce  | 1. Add items to the cart.
                       2. Proceed to checkout.
                       3. Enter shipping and billing information.
                       4. Select payment method and click 'Submit Payment'.
                       5. Observe the error message.                |
| Expected Behavior   | The payment should be processed successfully, and the user should receive a confirmation of the order.  |
| Actual Behavior     | An error message is displayed, and the payment is not processed.                         |
| Attachments         | [Screenshot of the error message]          |
| Environment         | Web application, Chrome browser            |
| Status              | Open                                      |
| Assigned To         | John Smith                                |
| Date Fixed          | Not fixed yet                             |
| Comments/Notes      | The error seems to be related to a recent update in the payment gateway API. We should investigate and fix it as soon as possible. |


# What kind of bug we should write

1. **Functional Bugs**: These are defects that affect the core functionality of the software. Examples include:
   - Incorrect calculation or logic.
   - Buttons or links not working as expected.
   - Data not being saved or retrieved correctly.

2. **UI/UX Bugs**: These involve issues related to the user interface and user experience. Examples include:
   - Misaligned elements.
   - Inconsistent fonts or colors.
   - UI elements overlapping or not displaying correctly.

3. **Performance Bugs**: These bugs relate to the performance and speed of the software. Examples include:
   - Slow loading times.
   - High memory usage.
   - Crashes or freezing under specific conditions.

4. **Security Vulnerabilities**: Report any security-related issues that could potentially compromise the security of the software. Examples include:
   - Cross-site scripting (XSS) vulnerabilities.
   - Data leaks or exposure of sensitive information.
   - Authentication and authorization problems.

5. **Compatibility Bugs**: These are bugs that affect the software's compatibility with specific browsers, devices, or operating systems. Examples include:
   - Layout issues on a particular browser.
   - Features not working on a specific device.

6. **Data Bugs**: Report issues related to data handling and integrity. Examples include:
   - Data corruption or loss.
   - Incorrect data displayed or processed.
   - Inaccurate reports or calculations.

7. **Usability Bugs**: These relate to problems that impact the usability and user-friendliness of the software. Examples include:
   - Confusing or misleading user instructions.
   - Non-intuitive workflows.
   - Accessibility issues for users with disabilities.

8. **Documentation Bugs**: If you discover discrepancies or errors in the software's documentation, such as user manuals or help files, report them separately.

9. **Regression Bugs**: If a feature that used to work in a previous version of the software is now broken in the current version, it's considered a regression bug.

10. **Edge Cases**: Report bugs that occur in rare or unusual circumstances, as they can be indicative of deeper issues.
