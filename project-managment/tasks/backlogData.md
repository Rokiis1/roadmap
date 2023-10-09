**Use Case 1: Registration**

- **Title:** User Registration
- **Description:** This use case covers the process of user registration on the demo page.
- **Actor:** Unregistered User

**User Stories:**

1. **User Registration**
    - **Title:** As an unregistered user, I want to be able to create a new account on the demo page.
    - **Description:** Unregistered users should be able to register with valid and complete information.
    - **Acceptance Criteria:**
        1. Provide a registration form with fields for Full Name, Email, Username, Password, and Phone Number.
        2. Validate that Full Name consists only of letters and spaces.
        3. Validate that Email is in a valid format (contains "@" and a domain).
        4. Ensure that the Email provided is unique (not already registered).
        5. Validate that Username contains only letters and numbers and does not include special symbols.
        6. Validate that Password meets the criteria: at least one capital letter, one small letter, one special symbol, one number, minimum 8 symbols, maximum 20 symbols.
        7. Allow successful registration after validation.

2. **User Registration - Missing Information**
    - **Title:** As an unregistered user, I want to see appropriate error messages when attempting to register with missing or incomplete information.
    - **Description:** The system should handle incomplete registration attempts gracefully.
    - **Acceptance Criteria:**
        1. Provide a registration form with fields for Full Name, Email, Username, Password, and Phone Number.
        2. Leave one or more required fields (Email) empty during registration.
        3. Verify that the system displays an appropriate error message for each missing field.
        4. Ensure that the registration process does not proceed until all required fields are filled.

3. **User Registration - Invalid Email Format**
    - **Title:** As an unregistered user, I want to see an error message when attempting to register with an invalid email format.
    - **Description:** The system should reject registrations with invalid email formats.
    - **Acceptance Criteria:**
        1. Provide a registration form with a field for Email.
        2. Enter an email without the "@" symbol during registration.
        3. Verify that the system displays an error message indicating an invalid email format.
        4. Ensure that the registration process does not proceed with an invalid email.

4. **User Registration - Existing Email**
    - **Title:** As an unregistered user, I want to see an error message when attempting to register with an email that already exists in the database.
    - **Description:** The system should prevent registration with an email that is already registered.
    - **Acceptance Criteria:**
        1. Provide a registration form with fields for Full Name, Email, Username, Password, and Phone Number.
        2. Use an email that is already registered in the system.
        3. Verify that the system displays an error message indicating that the email is already in use.
        4. Ensure that the registration process does not proceed with a duplicate email.

**Demo**

- [Demo: Test Case for Registration](https://momentoapp.emuel.me/login.php)

**Use Case 2: User Authentication**

- **Description:** This use case focuses on user authentication, including login and handling incorrect login credentials.
- **Actors:** Registered User

**User Stories:**

1. **User Login**
    - **Title:** As a registered user, I want to be able to log in successfully with valid credentials on the login page.
    - **Description:** Registered users should be able to log in using their valid credentials.
    - **Acceptance Criteria:**
        1. Provide a login form with fields for Username and Password.
        2. Allow registered users to enter their valid credentials.
        3. Authenticate the user and grant access upon successful login.

2. **User Login - Incorrect Credentials**
    - **Title:** As a user, I want to see appropriate error messages when attempting to log in with incorrect credentials.
    - **Description:** The system should handle incorrect login credentials appropriately.
    - **Acceptance Criteria:**
        1. Provide a login form with fields for Username and Password.
        2. Enter incorrect credentials (wrong password).
        3. Verify that the system displays an appropriate error message.
        4. Ensure that access is not granted with incorrect credentials.

**Demo**

- [Demo: Existing Email and Logging In](https://momentoapp.emuel.me/login.php)

**Use Case 3: Product Management**

- **Description:** This use case focuses on managing products, including adding products to the cart, sorting, and filtering.
- **Actors:** Registered User

**User Stories:**

1. **Product Management - Add to Cart**
    - **Title:** As a user, I want to be able to add a product to the cart successfully.
    - **Description:** Users should have the ability to add products to their shopping cart.
    - **Acceptance Criteria:**
        1. Provide product listings with an option to add products to the cart.
        2. Allow users to add products to their cart.
        3. Ensure that the added products are correctly reflected in the cart.

**Demo**

- [Demo: Positive Adding a Product to Cart](https://www.demoblaze.com/index.html)

2. **Product Sorting - Multiple Criteria**
    - **Title:** As a user, I want to confirm that I can sort products on the products page by various criteria (Product Name, Price).
    - **Description:** Users should have the ability to sort products according to different criteria.
    - **Acceptance Criteria:**
        1. Provide product listings with sorting options.
        2. Sort products by different criteria (Product Name, Price).
        3. Verify that the sorting is applied correctly.

3. **Product Filtering - Multiple Criteria**
    - **Title:** As a user, I want to ensure that I can filter products on the products page using valid and supported criteria, and that the filtered results are displayed correctly.
    - **Description:** Users should be able to filter products based on different criteria and see the filtered results.
    - **Acceptance Criteria:**
        1. Provide product listings with filtering options.
        2. Filter products using various criteria (Category, Brand).
        3. Verify that the filtered results are accurate.

**Demo**

- [Demo: Test Case for Product Sorting, Product Filtering](https://magento.softwaretestingboard.com/)

**Use Case 4: User Profile Management**

- **Description:** This use case focuses on user profile management, including updating user profile information and handling incorrect or incomplete data.
- **Actors:** Registered User

**User Stories:**

1. **User Profile Management - Update Profile**
    - **Title:** As a user, I want to be able to update my profile information successfully.
    - **Description:** Users should have the ability to update their profile details.
    - **Acceptance Criteria:**
        1. Provide a user profile page with editable fields.
        2. Allow users to update their profile information.
        3. Ensure that the updated information is saved correctly.

2. **User Profile Management - Incorrect/Incomplete Data**
    - **Title:** As a user, I want to see appropriate error messages when attempting to update my profile with incorrect or incomplete data.
    - **Description:** The system should handle incorrect or incomplete data gracefully during profile updates.
    - **Acceptance Criteria:**
        1. Provide a user profile page with editable fields.
        2. Attempt to update the profile with incorrect or incomplete data.
        3. Verify that the system displays an appropriate error message.
        4. Ensure that the profile update process is not completed with invalid data.

**Demo**

- [Demo: Updating User Profile](https://momentoapp.emuel.me/login.php)