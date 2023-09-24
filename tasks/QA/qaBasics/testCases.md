1. Task

**Example:**

- [Site: Live Demo](https://magento.softwaretestingboard.com/)

**User Story:**
As a website user, I want to be able to register for an account and log in so that I can access personalized content and features.

**Use Cases:**

1. **User Registration:**
   - **Actor:** User
   - **Description:** The user wants to create a new account.
   - **Main Flow:**
     1. The user clicks on the "Register" or "Sign Up" link.
     2. The system displays a registration form with fields for the user to enter their name, email address, password, and other required information.
     3. The user enters their information and submits the form.
     4. The system validates the user's input, including checking that:
        - The email address is in a valid format using regex.
        - The password meets complexity requirements (minimum length, uppercase, lowercase, special characters) using regex.
        - Other required fields are filled out correctly.
     5. If validation passes, the system creates a new user account with the provided information and sends a confirmation email.
     6. If validation fails, the system displays specific error messages next to the fields that need correction.

2. **User Login:**
   - **Actor:** Registered User
   - **Description:** The user wants to log in to their account.
   - **Main Flow:**
     1. The user clicks on the "Login" link.
     2. The system displays a login form with fields for the user to enter their email address and password.
     3. The user enters their credentials and submits the form.
     4. The system validates the user's input, including checking that:
        - The email address is in a valid format using regex.
        - The password meets complexity requirements (minimum length, uppercase, lowercase, special characters) using regex.
     5. If validation passes, the system verifies the credentials and logs the user into their account, granting access to personalized content and features.
     6. If validation fails, the system displays specific error messages indicating which input is incorrect.
   - **Alternative Flow:**
     - If the user enters incorrect credentials, the system should display an error message.

**Acceptance Criteria:**

1. When I fill out the registration form with valid information and submit it, a new account with my details should be created, and I should receive a confirmation email.
2. If I try to register with an email address that is already in use, I should see an error message indicating that the email address is already registered.
3. During registration, if I provide an invalid email address format or a password that doesn't meet complexity requirements, I should see specific error messages next to the corresponding fields.
4. When I fill out the login form with valid credentials and submit it, I should be logged into my account.
5. If I enter incorrect login credentials, I should see an error message indicating that the login credentials are incorrect.
