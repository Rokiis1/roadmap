# Example 1 Bug Report

| Field                | Value                                 |
|----------------------|---------------------------------------|
| Defect ID            | 101                                   |
| Summary              | User cannot log in with valid creds   |
| Description          | When a user tries to log in with a valid username and password, the system shows an error message. |
| Severity             | tester or business analyst            |
| Priority             | tester or business analyst            |
| Status               | New                                   |
| Detected By          | Tester1                               |
| Detected On          | 2022-01-01                            |
| Resolved By          |                                       |
| Resolved On          |                                       |
| Screenshot           | [Link to screenshot]                  |
| Comments             | This issue is blocking user login.    |

# Example 2 Bug Report

| Field                | Value                                 |
|----------------------|---------------------------------------|
| Defect ID            | BUG-001                               |
| Date Reported        | 2023-09-16                            |
| Project              | [Project Name]                        |
| Module/Component     | [Module or Component Affected]        |
| Severity             | tester or business analyst            |
| Priority             | tester or business analyst            |
| Reported By          | [Name of Tester]                      |
| Summary              | [Brief Description of the Defect]     |
| Description          | [Detailed Description of the Defect]  |
| Steps to Reproduce   | [List of Steps to Reproduce the Issue]|
| Expected Behavior    | [What Was Expected]                   |
| Actual Behavior      | [What Actually Happened]              |
| Attachments          | [Screenshots, Log Files]              |
| Environment          | [Testing Environment Details]         |
| Status               | [Open, In Progress, Closed, Reopened] |
| Assigned To          | [Developer's Name or ID]              |
| Date Fixed           | [Date when Fixed, if applicable]      |
| Comments/Notes       | [Additional Information or Notes]     |

Severity Levels:

Critical: The defect causes a failure of the complete software system, subsystem or a program within the system.

High: The defect affects the system significantly, but it does not cause a failure. The system can still operate with the defect and there is a workaround, but it is inconvenient.

Medium: The defect affects the system but does not impact critical functionality. It may cause some inconvenience but a workaround is available.

Low: The defect does not affect the system or the business processes. It is an aesthetic issue that does not need to be fixed urgently.

Priority Levels:

Immediate: The defect must be resolved as soon as possible. It is affecting critical functionality of the system and must be fixed before the system can be used.

High: The defect should be resolved in the next build or release. It is affecting significant functionality of the system but is not critical.

Medium: The defect should be resolved in a future build or release but is not urgent. The system can still be used and the defect does not affect critical functionality.

Low: The defect is minor and does not need to be resolved urgently. It can be fixed in a future build or release.

Status:

New: The bug has been reported and is waiting to be reviewed.

Assigned: The bug has been assigned to a developer who will work on fixing it.

Open: The developer has started working on the bug.

Fixed: The developer has made a fix for the bug and it's now ready for testing.

Reopened: The bug was previously marked as fixed, but the fix didn't work or caused another issue, so the bug has been reopened.

Verified: The tester has confirmed that the fix works and the bug has been resolved.

Closed: The bug has been resolved and no further action is needed.

Deferred: The bug is not going to be fixed in the current release due to low priority or other reasons.

Duplicate: The bug is a duplicate of another bug that has already been reported.

Won't Fix: The team has decided not to fix the bug, usually because it's a minor issue, it's too difficult to fix, or it's not actually a bug.

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