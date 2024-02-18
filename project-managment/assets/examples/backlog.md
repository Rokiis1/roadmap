1. **Use Case: Search for Products**

   **User Story:** As a customer, I want to search for products so that I can find what I'm looking for.

   **Acceptance Criteria:**

   - I can enter keywords in the search bar.

   - I receive a list of products that match my search.

   - I can sort and filter the search results.

2. **Use Case: User Registration**

- **Actor:** New User

- **Description:** A new user wants to register an account so they can access the system's features.

- **Preconditions:** The user has accessed the registration page.

- **Postconditions:** A new user account is created and the user is logged into the system.

- **Main Flow:**

    1. The user enters their desired username.
    2. The user enters a secure password.
    3. The user confirms their password.
    4. The user enters their email address.
    5. The user clicks the "Register" button.
    6. The system validates the provided information.
    7. The system creates a new user account.
    8. The system logs the user in and directs them to the homepage.

- **Extensions:**

   - 6a. If the system detects that the username is already taken, it prompts the user to choose a different username.
   - 6b. If the system detects that the password is not secure enough, it prompts the user to choose a stronger password.
   - 6c. If the system detects that the email address is invalid, it prompts the user to enter a valid email address.

- **Acceptance Criteria:**

    1. The user can enter their desired username, password, and email address.
    2. The system validates the provided information and prompts the user to correct any issues.
    3. The system creates a new user account when valid information is provided.
    4. The user is logged in and directed to the homepage after successful registration.

3. **Principles:**

   **INVEST:**

      - Independent: This story can be developed independently of other features.

      - Negotiable: The registration process can be discussed and agreed upon by the team.

      - Valuable: This story provides value by allowing new users to access the system.

      - Estimable: The team can estimate the effort based on their experience with similar features.

      - Small: This story is small enough to be completed within one sprint.

      - Testable: The completion can be verified by checking the acceptance criteria.

   **SMART:**

      - Specific: The story is clear about who the user is, what they want to do, and why.

      - Measurable: The acceptance criteria provide measurable outcomes.

      - Achievable: The story is achievable based on the team's skills and resources.

      - Relevant: The story is relevant to the system's functionality.

      - Time-bound: The story can be completed within a single sprint.

   **DoD:**

      - Code is written and reviewed.

      - Unit tests are written and pass.

      - Acceptance criteria are met.

      - The feature is documented.