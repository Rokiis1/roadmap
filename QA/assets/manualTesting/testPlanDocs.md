# Table Content

- [Test Plan](#test-plan)
    - [Test Cases For DROPDOWN FIELD](#test-cases-for-dropdown-field)
    - [Test Cases For TEXT FIELD OR TEXT BOX](#test-cases-for-text-box)
    - [Test Cases For GMAIL REGISTRATION AND SIGN-IN](#test-cases-for-gmail-registration-and-sign-in)
    - [Types of Test Scenarios](#types-of-test-scenarios)
    - [CAPTCHA test Scenarios](#captcha-test-scenarios)
    - [Test Cases For DATE OF BIRTH FIELD](#test-cases-for-date-of-birth-field)
    - [Test Cases For CREDIT CARD FUNCTIONALITY](#test-cases-for-credit-card-functionality)

## Test Cases For DROPDOWN FIELD

**Example:**

**Test Case 1: Label Validation**
**Description:** Verify that every dropdown field has a label associated with it.
**Validation Steps:**
1. Navigate to the page containing the dropdown.
2. Inspect each dropdown element.
3. Ensure that a label is present for each dropdown.

**Test Case 2: Default Value Validation**
**Description:** Confirm that dropdowns have a default selected value.
**Validation Steps:**
1. Access the dropdown.
2. Verify that a default value is pre-selected.

**Test Case 3: Checkbox and Dropdown Interaction**
**Description:** Ensure that checkboxes and dropdowns interact as expected.
**Validation Steps:**
1. Select checkboxes.
2. Check if the corresponding items are highlighted in the dropdown.

**Test Case 4: Alignment Testing**
**Description:** Test the alignment of dropdown content.
**Validation Steps:**
1. Check if dropdown content aligns correctly (left or right) as per UI guidelines.

**Test Case 5: Cross-browser and OS Testing**
**Description:** Ensure dropdowns function correctly across various browsers and operating systems.
**Validation Steps:**
1. Access the dropdown on different browsers (Chrome, Firefox, Edge).
2. Test dropdown functionality on different OS (Windows, macOS, Linux).

**Test Case 6: Sorting Validation**
**Description:** Validate alphabetical sorting of dropdown items.
**Validation Steps:**
1. Open the dropdown.
2. Select a specific alphabet key ('G').
3. Verify that items starting with the selected alphabet appear first.

**Test Case 7: Performance Testing**
**Description:** Evaluate dropdown performance with large datasets.
**Validation Steps:**
1. Test dropdown with a large number of values.
2. Measure response time and throughput.
3. Ensure it meets performance requirements.

**Test Case 8: Styling and Guideline Compliance**
**Description:** Confirm that styling (font size, colors) aligns with UI guidelines.
**Validation Steps:**
1. Inspect dropdown styling elements.
2. Ensure styling complies with UI guidelines.

**Test Case 9: Order of Display**
**Description:** Validate the order of dropdown items (ascending or descending).
**Validation Steps:**
1. Check the order of displayed items.
2. Confirm it matches the specified requirement (ascending or descending).

**Test Case 10: Minimum and Maximum Values**
**Description:** Verify that dropdowns accept values within defined minimum and maximum limits.
**Validation Steps:**
1. Attempt to select values below the minimum and above the maximum.
2. Ensure that the dropdown enforces these limits.

**Test Case 11: Editable Dropdown**
**Description:** Test whether the dropdown field is editable.
**Validation Steps:**
1. Try to manually input values into the dropdown.
2. Confirm if manual input is allowed as per the requirement.

**Test Case 12: Multilingual and Currency Testing**
**Description:** Ensure dropdowns function correctly in different languages and with various currencies.
**Validation Steps:**
1. Change the application language.
2. Test dropdown functionality with different languages and currencies.

**Test Case 13: Database Validation**
**Description:** Validate that data entered in the dropdown is accurately reflected in the database.
**Validation Steps:**
1. Perform operations in the dropdown.
2. Check if data submitted from the dropdown appears correctly in the database.

**Test Case 14: Exception Handling**
**Description:** Verify that dropdown interactions do not lead to server exceptions.
**Validation Steps:**
1. Execute various interactions in the dropdown.
2. Ensure that no exceptions are thrown, and the server remains stable.

## Test Cases For TEXT FIELD OR TEXT BOX

**Example:**

**Test Case 1: Label Validation**
**Description:** Ensure that every text field or text box has a meaningful label.
**Validation Steps:**
1. Examine each text input element.
2. Confirm the presence of a clear and meaningful label for identification.

**Test Case 2: Mandatory Field Validation**
**Description:** Verify if a text field is mandatory, and it displays an error when left empty.
**Validation Steps:**
1. Navigate to the mandatory text field.
2. Attempt to proceed without entering any text.
3. Confirm the appearance of an error message specifying the mandatory input requirement.

**Test Case 3: Cursor Display**
**Description:** Validate the display of a cursor when typing in a text field.
**Validation Steps:**
1. Focus on the text field.
2. Confirm the presence of a cursor while typing.

**Test Case 4: Character Limit Validation**
**Description:** Confirm that text fields adhere to minimum and maximum character limits.
**Validation Steps:**
1. Enter text within the minimum character limit.
2. Enter text exceeding the maximum character limit.
3. Ensure that both limits are enforced based on requirements.

**Test Case 5: Text Alignment Testing**
**Description:** Test whether text in text fields is correctly aligned (left or right).
**Validation Steps:**
1. Observe the alignment of text within the text field.
2. Verify that text alignment matches the UI guidelines.

**Test Case 6: Icon Presence Validation**
**Description:** Confirm the presence and relevance of icons associated with text fields.
**Validation Steps:**
1. Inspect text fields with icons.
2. Validate that icons appropriately represent the field's purpose, as per requirements.

**Test Case 7: Voice Input Testing**
**Description:** Verify the functionality of voice input in text fields.
**Validation Steps:**
1. Access text fields designed for voice input.
2. Test voice input functionality according to the application's capabilities.

**Test Case 8: Password Masking Validation**
**Description:** Ensure the ability to hide or reveal characters in password or sensitive fields.
**Validation Steps:**
1. Navigate to a password or sensitive input field.
2. Check for a checkbox to show/hide characters.
3. Verify that characters are masked by default and can be revealed upon request.

**Test Case 9: Editable and Disabled Field Validation**
**Description:** Confirm whether a text field is editable or disabled, as per requirements.
**Validation Steps:**
1. Attempt to input text in an editable field.
2. Verify that the field is editable.
3. Attempt to input text in a disabled field.
4. Verify that the field does not accept input.

**Test Case 10: Hover Messages Verification**
**Description:** Validate the appearance of informative messages when hovering over text fields.
**Validation Steps:**
1. Hover the cursor over various text fields.
2. Confirm the display of appropriate messages describing the field's purpose.

**Test Case 11: Helper Text Testing**
**Description:** Ensure the presence of helpful messages or guidelines beneath text fields.
**Validation Steps:**
1. Examine text fields with helper text.
2. Verify that the messages provide guidance or restrictions as required.

**Test Case 12: Auto-Format Validation**
**Description:** Confirm the correct formatting of text fields for specific inputs (currency, date, phone number).
**Validation Steps:**
1. Enter various inputs into text fields with auto-formatting requirements.
2. Validate that the text fields format the input correctly according to the specified rules.

## Test Cases For GMAIL REGISTRATION AND SIGN-IN

**Test Case 1: Navigate to Gmail Sign-Up Page**
**Description:** Verify that navigating to "gmail.com" takes the user to the Gmail sign-up page.
**Validation Steps:**
1. Open a web browser.
2. Enter "gmail.com" in the address bar.
3. Check if the Gmail sign-up page is displayed.

**Test Case 2: Access Create Account Page**
**Description:** Ensure that clicking on the "Create account" option on the Gmail sign-in page takes the user to the create account page.
**Validation Steps:**
1. Go to "gmail.com."
2. Click on the "Create account" option.
3. Confirm that the create account page is loaded.

**Test Case 3: Verify First Name and Last Name Fields**
**Description:** Validate the behavior of the First Name and Last Name fields on the create account page.
**Validation Steps:**
1. Enter valid first and last names.
2. Ensure that the names are accepted without errors.
3. Verify that both fields allow letters, spaces, and special characters based on requirements.
4. Test with empty First Name and Last Name fields and confirm that it shows an error message if they are mandatory.
5. Verify that the fields trim leading and trailing spaces.
6. Enter invalid characters (special characters, numbers) and confirm they are rejected.
7. Check for UI elements such as field size, alignment, and font size.

**Test Case 4: Validate Username Field**
**Description:** Verify the behavior of the Username (Email Address) field.
**Validation Steps:**
1. Enter a valid email address with the correct format (username@gmail.com).
2. Confirm that the email address is accepted without errors.
3. Test with an empty username field and check for the appropriate error message.
4. Validate that the field accepts a valid combination of letters, numbers, and periods (if allowed).
5. Enter an email address with special characters, and verify that it is rejected.
6. Ensure the field trims spaces.
7. Confirm the UI elements' appearance, including size, alignment, and font size.

**Test Case 5: Password and Confirmation Password**
**Description:** Validate the Password and Confirmation Password fields.
**Validation Steps:**
1. Enter a valid password that meets the specified criteria (at least 8 characters, a mix of letters, numbers, and symbols).
2. Confirm that the password is accepted without errors.
3. Enter a different password in the Confirmation Password field and check for a mismatch error.
4. Test with an empty Password field and ensure it shows an error message (if mandatory).
5. Confirm that the field does not accept spaces.
6. Enter invalid characters in the password field and ensure they are rejected.
7. Check for the "Show Password" functionality (if available) to reveal/hide the password.
8. Verify the UI elements' appearance, including size, alignment, and font size.

**Test Case 6: Phone Number Field**
**Description:** Validate the Phone Number field on the create account page.
**Validation Steps:**
1. Enter a valid 10-digit mobile phone number.
2. Confirm that the phone number is accepted without errors.
3. Test with fewer than 10 digits and more than 10 digits; verify appropriate error messages.
4. Check for special characters and ensure they are rejected.
5. Validate copying and pasting numbers from a notepad.
6. Confirm that the field trims spaces.
7. Verify UI elements, including size, alignment, and font size.

**Test Case 7: Date of Birth (DOB) Field**
**Description:** Validate the Date of Birth (DOB) field on the create account page.
**Validation Steps:**
1. Enter valid date, month, and year values.
2. Confirm that the date of birth is accepted without errors.
3. Test with invalid combinations, such as February 30, and verify appropriate error messages.
4. Check for different date formats if applicable.
5. Validate copying and pasting values into the DOB field.
6. Confirm UI elements' appearance, including size and alignment.

**Test Case 8: Sign-In with Created Account**
**Description:** Verify the sign-in functionality with the created Gmail account.
**Validation Steps:**
1. Enter the username (email or phone) and password.
2. Click on the "Next" button.
3. Ensure successful login and access to the Gmail inbox.
4. Test with invalid username or password and verify appropriate error messages.
5. Check for UI elements, including field sizes, alignment, and font size.

## Types of Test Scenarios

1. Test Scenario 1: Open Website URL

The first step is to open the website's URL in a web browser. For instance, let's consider a web application named TestingShala.com, which provides information related to software testing. Simply open your web browser and enter "TestingShala.com." This should take you to the complete website.

2. Test Scenario 2: Check HTTPS Security

It's essential to validate whether the web application uses secure or unsecured protocols (HTTPS vs. HTTP). If the website deals with sensitive information or financial data, it should utilize HTTPS for added security.

3. Test Scenario 3: Validate Links

Next, validate all the links within the web application. These links can be internal, leading to different sections of the same application, or external, directing users to other websites.

4. Test Scenario 4: Verify Link Navigation

When users click on various links, they should be directed to the appropriate pages without encountering errors or unexpected redirects. Verify that clicking on links like Privacy Policy or Disclaimer takes users to the expected pages.

5. Test Scenario 5: Validate Input Fields

Ensure that all the input fields in the web application, including text fields and drop-down menus, function correctly.

6. Test Scenario 6: Test Field with Valid and Invalid Data

For each input field, test both valid and invalid data. This includes positive and negative scenarios, as well as boundary conditions. This thorough testing helps ensure that all fields work as expected.

7. Test Scenario 7: Test Cookies

Test the web application by enabling and disabling cookies. Check whether cookies are being stored on the user's local computer as intended.

8. Test Scenario 8: Test for Cookie Encryption

Ensure that any cookies stored locally are encrypted. Even if someone accesses the cookie file, they should not be able to read the data in a readable format.

9. Test Scenario 9: Grammar and Syntax Check

Perform a comprehensive check for grammatical errors and syntax issues throughout the web application.

10. Test Scenario 10: Ensure UX Guidelines Compliance

Validate that the web application complies with user experience (UX) guidelines. This includes checking the alignment of elements and ensuring they adhere to specified design standards.

11. Test Scenario 11: Internationalization Testing

If the website is accessible from different countries, test it for internationalization. Ensure that the web application functions correctly with different languages and character sets.

12. Test Scenario 12: Compatibility Testing

Test the web application on various web browsers, operating systems, and devices. Ensure that it works seamlessly across different combinations, as specified in the requirements.

13. Test Scenario 13: Performance Testing

For websites accessed by a large number of users, perform performance testing. Evaluate response times, throughput, and other performance metrics under different load conditions.

14. Test Scenario 14: Scalability Testing

Ensure that the web application can scale up when additional hardware or resources are added. It should be able to handle increased traffic and user load.

15. Test Scenario 15: Security Testing

Perform security testing to identify vulnerabilities and security issues. This includes checking for security vulnerabilities, securing data storage, and safeguarding against threats.

16. Test Scenario 16: Mobile and Responsive Testing

As websites are often accessed via mobile devices, test the web application's compatibility with mobile platforms. Verify that the website remains responsive and functional across various mobile devices and screen sizes.

17. Test Scenario 17: Acceptance Testing

Once the internal testing team has completed its testing, allow the acceptance testing team, which includes business users or end-users, to test the web application. They will ensure that everything aligns with the business requirements. After receiving approval from these stakeholders, the web application can be deployed to the production environment.

## CAPTCHA Test Scenarios

If you're dealing with a web-based or mobile-based application, you'll often encounter CAPTCHA functionality. CAPTCHA stands for "Completely Automated Public Turing test to tell Computers and Humans Apart." It is used to determine whether the entity accessing an application is a human being or a computer program (bot). Let's explore CAPTCHA test scenarios:

1. Test Scenario 1: Validate CAPTCHA Display

The first scenario is to validate that the CAPTCHA functionality is displayed correctly on the web page or within the mobile application. This ensures that the CAPTCHA is being implemented as per the application's requirements.

2. Test Scenario 2: Refresh CAPTCHA

After the CAPTCHA is displayed, users should have the option to refresh the CAPTCHA. This action should result in a new and different CAPTCHA being generated. Refreshing the CAPTCHA is essential to prevent automated bots from submitting junk data repeatedly.

3. Test Scenario 3: Readability of CAPTCHA Text

Ensure that the characters or text displayed in the CAPTCHA are easily readable by users with normal vision. It's crucial that users can identify and enter the CAPTCHA text correctly.

4. Test Scenario 4: Case Sensitivity

If the CAPTCHA text is case-sensitive, users should be required to enter the text exactly as displayed, matching the case (uppercase and lowercase) of the characters.

5. Test Scenario 5: Valid CAPTCHA Entry

Verify that users can successfully enter the correct CAPTCHA text into the input field. This is a validation step to confirm that users can interact with the CAPTCHA as expected.

6. Test Scenario 6: Invalid CAPTCHA Entry

Test what happens when users enter an incorrect CAPTCHA. The application should display an error message indicating that the entered text does not match the CAPTCHA. It should prevent users from proceeding until the correct CAPTCHA is entered.

7. Test Scenario 7: Audio CAPTCHA

For accessibility purposes, check if the application provides an audio CAPTCHA option. When users click on this option, they should hear an audio representation of the CAPTCHA text. Users can then enter the text based on what they hear.

8. Test Scenario 8: Help Icon

Ensure that there is a help icon or mechanism available to guide users on how to operate the CAPTCHA screen. This can be especially helpful for users who are unfamiliar with CAPTCHA challenges.

9. Test Scenario 9: Mathematical CAPTCHA

In some cases, CAPTCHAs involve mathematical challenges, such as addition, subtraction, multiplication, or division. Test scenarios should cover these mathematical CAPTCHAs to ensure users can correctly solve them.

10. Test Scenario 10: Image-Based CAPTCHA

For image-based CAPTCHAs, validate that all images are displayed correctly. Users should be able to select the appropriate images based on the challenge, and the application should respond accordingly.

11. Test Scenario 11: Interactivity

Test the interactivity of CAPTCHAs that require user actions, such as selecting specific images or solving puzzles. Ensure that users can interact with these CAPTCHAs as intended.

12. Test Scenario 12: Completion Requirement

CAPTCHAs are often used to prevent automated actions. Test scenarios should confirm that users cannot proceed to the next page or action until they have successfully completed the CAPTCHA challenge.

##

## Test Cases For DATE OF BIRTH FIELD

### Test Cases for Date of Birth Field Type 1

1.1. Test Case 1: Date Field Format Validation
- Verify that the Date of Birth field accepts date input in various combinations, such as month-date-year, date-month-year, or year-month-date.
- Ensure that the field appropriately handles different date formats.

1.2. Test Case 2: Valid Day Range
- Validate that the field accepts two-digit days within the range of 01 to 31, as these are valid day values in a month.

1.3. Test Case 3: Valid Month Range
- Confirm that the month input is restricted to two-digit values between 01 and 12, as these represent valid months in a year.

1.4. Test Case 4: Year Field Validation
- Ensure that the Year field only accepts four-digit numeric values, restricting any characters or symbols.

1.5. Test Case 5: Predefined Dates
- Verify that the Date of Birth field is pre-filled with appropriate default or placeholder dates, ensuring that it is not empty when initially loaded.

1.6. Test Case 6: Valid Date Constraints
- Validate that the field enforces date constraints appropriately for example, February should not allow a 30th or 31st date, and certain months should not allow more than 29 days.

1.7. Test Case 7: Leap Year Validation
- Check for leap year date validation. In a leap year, ensure that February allows selection of the 29th date but restricts 30th and 31st.

### Test Cases for Date of Birth Field Type 2 (Calendar-Based)

2.1. Test Case 1: Calendar Pop-Up
- When clicking on the calendar icon, ensure that a calendar pop-up window appears.

2.2. Test Case 2: Default Calendar Date
- Verify that the default date displayed in the calendar matches the system date.

2.3. Test Case 3: Date Selection Range
- Confirm that the calendar allows the selection of dates within a valid range, such as the last 50 years, 60 years, or 80 years.

2.4. Test Case 4: Calendar Navigation
- Check that the calendar provides navigation options, allowing users to switch between months and years, and that the selected date remains synchronized with the calendar view.

2.5. Test Case 5: Valid Date Selection
- When selecting a specific date from the calendar, ensure that the Date of Birth field reflects the chosen date correctly, including the day, month, and year.

2.6. Test Case 6: Invalid Date Selection
- Verify that the calendar prevents selecting invalid dates based on the chosen month and year, selecting February 30th.

##

## Test Cases For CREDIT CARD FUNCTIONALITY

1. Test Case 1: Valid Credit Card Number
- Enter a valid credit card number (Visa, Mastercard) and ensure that it is accepted without any issues.
- Verify that the system recognizes valid credit card number patterns based on the card's issuing organization.

2. Test Case 2: Invalid Credit Card Number
- Attempt to enter an invalid credit card number with incorrect patterns or checksums.
- Verify that appropriate error messages are displayed when an invalid credit card number is entered.

3. Test Case 3: Debit Card and Gift Card Validation
- Enter valid details for debit cards or gift cards and ensure that they are accepted as payment methods.
- Verify that specific card types (debit, gift) are recognized and processed correctly.

4. Test Case 4: Account Holder Name Validation
- Validate the Account Holder Name field by entering both valid and invalid data.
- Ensure that it accepts valid names and displays errors for invalid entries (special characters, numbers).

**Test Cases for Expiry Date**

5. Test Case 5: Valid Expiry Date
- Enter a valid expiry date for the credit card (in the format MM/YY).
- Ensure that the system accepts valid expiry dates and does not display errors.

6. Test Case 6: Invalid Expiry Date
- Attempt to enter an invalid expiry date (a past date or a future date that exceeds card validity).
- Verify that the system displays an error message for invalid expiry dates.

7. Test Case 7: Leap Year Expiry Date
- Test the credit card input for a leap year expiry date (February 29) if applicable.
- Ensure that the system handles leap year dates correctly and accepts them when valid.

**Test Cases for CVV (Card Verification Value) Field**

8. Test Case 8: Valid CVV
- Enter a valid CVV code for the credit card (3-digit or 4-digit based on card type).
- Ensure that the system accepts the correct CVV and proceeds without errors.

9. Test Case 9: Invalid CVV
- Enter an invalid CVV code (incorrect length or format).
- Verify that the system displays an error message for invalid CVV entries.

10. Test Case 10: Copy-Paste Disabled
- Attempt to copy and paste data into any of the credit card input fields (card number, name, expiry date, CVV).
- Ensure that the system disables the ability to copy and paste data into these fields, enhancing security.

##

## 

##
