**Use Case: Reset Password**

**Description:** This use case describes the process of a registered user resetting their password in order to regain access to their account.

**Actors:**

- Registered User

**Scenarios:**

1. **Successful Password Reset:**

   - **Actor:** Registered User'
   - **Goal:** To reset the password and regain access to the account.
   - **Precondition:** User has forgotten their password and is on the login page.
   - **Scenario Steps:**
     1. User clicks on the "Forgot Password" link on the login page.
     2. User enters their email address.
     3. System validates the email address.
     4. System sends a password reset link to the user's email.
     5. User receives the email and clicks on the reset link.
     6. User sets a new password.
     7. System validates and updates the password.
     8. User is redirected to the login page with a success message.

2. **Invalid Email Address:**

   - **Actor:** Registered User
   - **Goal:** To handle the scenario where the user enters an invalid email address.
   - **Precondition:** User has forgotten their password and is on the login page.
   - **Scenario Steps:**
     1. User clicks on the "Forgot Password" link on the login page.
     2. User enters an invalid email address.
     3. System displays an error message, indicating the email address is invalid.
     4. User is prompted to enter a valid email address.

**User Story:**

- **Title:** Reset Password
- **As a** registered user,
- **I want to** be able to reset my password
- **So that** I can regain access to my account.

**Acceptance Criteria:**

1. There should be a "Forgot Password" link on the login page.
2. The user should be able to enter their email address.
3. The system should send a password reset link to the user's email.
4. The system should validate the user's email address to ensure it's valid.
5. The user should receive an email with a password reset link.
6. Clicking on the link should allow the user to set a new password.
7. The system should validate the new password and update it.
8. After successful password reset, the user should be redirected to the login page with a success message.

**Estimated Effort:** 5 story points
