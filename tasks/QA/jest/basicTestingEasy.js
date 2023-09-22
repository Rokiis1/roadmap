// Easy

// 1. Task

/**
 * Validates an email address.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */

// Function Purpose: This function is used to check if an email address is valid or not.
// Parameter: It takes one parameter, which is a piece of text (a string) representing an email address. For example, it could be "example@email.com".
function validateEmail(email) {
    // Create a rule (regex) to check if the email follows a common pattern.
    // How It Works: We use something called a "regular expression" (regex) to define a pattern that a valid email address should follow.
    // /: This is the starting delimiter of the regular expression.
    // ^: This symbol denotes the start of the string. It means that the pattern should match from the beginning of the text.
    //  [^\s@]+: This part of the pattern matches one or more characters that are NOT whitespace (\s) or the "@" symbol. Let's break it down further:
    // [...]: Square brackets indicate a character set.
    // ^ (inside the square brackets): It's used as a negation symbol, meaning "not."
    // \s: Represents any whitespace character (space, tab, newline).
    // @: The "@" symbol itself.
    // So, [^\s@]+ matches one or more characters that are neither whitespace nor "@".
    // @: This part of the pattern simply matches the "@" symbol.
    // [^\s@]+: Similar to step 3, it matches one or more characters that are NOT whitespace (\s) or the "@" symbol.
    // \.: This part of the pattern matches a period (dot). The backslash \ is used to escape the dot because in regex, the dot is a special character that matches any character. To match an actual dot, we use \..
    // [^\s@]+: Again, it matches one or more characters that are NOT whitespace (\s) or the "@" symbol.
    // $: This symbol denotes the end of the string. It means that the pattern should match until the end of the text.
    // /: This is the ending delimiter of the regular expression.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Use the rule to test if the provided email matches the pattern.
    // If it matches, it's a valid email; otherwise, it's not.
    return emailRegex.test(email);
}
// Hints:
// 1. Import the 'validateEmail' function from the './validateEmail'
// 2. Describe a test suite for the 'validateEmail' function.
// 3. Define the first test case.
// 4. In this test case, we're checking if the 'validateEmail' function correctly identifies
// 5. a valid email ('example@email.com') and returns 'true'.
// 6. Use the 'expect' function to make an assertion:
// 7. Call 'validateEmail' with the email 'example@email.com' and expect it to return 'true'.
// 8. Define the second test case.
// 9. In this test case, we're checking if the 'validateEmail' function correctly identifies
// 10. an invalid email ('invalid-email') and returns 'false'.        
// 11. Use the 'expect' function to make an assertion:
// 12. Call 'validateEmail' with the email 'invalid-email' and expect it to return 'false'


// 2. Task

/**
 * Checks if a given date falls on a weekend (Saturday or Sunday).
 *
 * @param {Date} date - The date to check.
 * @returns {boolean} True if the date is a weekend, false otherwise.
 */

// Function Purpose: This function is used to determine whether a given date falls on a weekend (Saturday or Sunday).
// Parameter: It takes one parameter, which is a JavaScript Date object representing the date to check.
function isWeekend(date) {
    // Get the day of the week from the provided date (0 = Sunday, 1 = Monday, ..., 6 = Saturday).
    const dayOfWeek = date.getDay();
    // Check if the day of the week is either Sunday (0) or Saturday (6).
    // If it is, then it's a weekend; otherwise, it's not.
    return dayOfWeek === 0 || dayOfWeek === 6;
}
// Hints:
// 1. Import the 'isWeekend' function from the './isWeekend'.
// 2. Describe a test suite for the 'isWeekend' function.
// 3. Define the first test case.
// 4. In this test case, we're checking if the 'isWeekend' function correctly identifies
// 5. a weekend date (Sunday) and returns 'true'.
// 6. Use the 'expect' function to make an assertion:
// 7. Call 'isWeekend' with a Sunday date and expect it to return 'true'.
// 8. Define the second test case.
// 9. In this test case, we're checking if the 'isWeekend' function correctly identifies
// 10. a weekday date (Wednesday) and returns 'false'.
// 11. Use the 'expect' function to make an assertion:
// 12. Call 'isWeekend' with a Wednesday date and expect it to return 'false'.

// 3. Task

/**
 * Formats a phone number with dashes.
 *
 * @param {string} phoneNumber - The phone number to format.
 * @returns {string} The formatted phone number.
 */

// Function Purpose: This function is used to format a phone number by adding dashes.
// Parameter: It takes one parameter, which is a string representing the phone number.
function formatPhoneNumber(phoneNumber) {
    // Use the 'replace' method with a regular expression to insert dashes at specific positions.
    // The regular expression '(\d{3})(\d{3})(\d{4})' captures groups of three digits each, representing the area code, prefix, and line number.
    // '$1-$2-$3' is the replacement pattern, which inserts dashes between the captured groups.
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}
// Hints:
// 1. Import the 'formatPhoneNumber' function from the './formatPhoneNumber'.
// 2. Describe a test suite for the 'formatPhoneNumber' function.
// 3. Define the first test case.
// 4. In this test case, we're checking if the 'formatPhoneNumber' function correctly formats
// 5. a phone number ('1234567890') and returns the formatted version ('123-456-7890').
// 6. Use the 'expect' function to make an assertion:
// 7. Call 'formatPhoneNumber' with the phone number '1234567890' and expect it to return '123-456-7890'.
// 8. Define the second test case.
// 9. In this test case, we're checking if the 'formatPhoneNumber' function correctly formats
// 10. a different phone number ('5551234567') and returns the formatted version ('555-123-4567').
// 11. Use the 'expect' function to make an assertion:
// 12. Call 'formatPhoneNumber' with the phone number '5551234567' and expect it to return '555-123-4567'.

// 4. Task

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} input - The input string.
 * @returns {string} The capitalized string.
 */

// Function Purpose: This function is used to capitalize the first letter of a string.
// Parameter: It takes one parameter, which is a string.
function capitalizeString(input) {
    // Use the 'charAt(0)' method to get the first character, 'toUpperCase()' to capitalize it,
    // and 'slice(1)' to get the rest of the string.
    return input.charAt(0).toUpperCase() + input.slice(1);
}
// Hints:
// 1. Import the 'capitalizeString' function from the './capitalizeString'.
// 2. Describe a test suite for the 'capitalizeString' function.
// 3. Define the first test case.
// 4. In this test case, we're checking if the 'capitalizeString' function correctly capitalizes
// 5. the first letter of a string ('hello') and returns the capitalized version ('Hello').
// 6. Use the 'expect' function to make an assertion:
// 7. Call 'capitalizeString' with the string 'hello' and expect it to return 'Hello'.
// 8. Define the second test case.
// 9. In this test case, we're checking if the 'capitalizeString' function correctly capitalizes
// 10. a different string ('world') and returns the capitalized version ('World').
// 11. Use the 'expect' function to make an assertion:
// 12. Call 'capitalizeString' with the string 'world' and expect it to return 'World'.

// 5. Task

/**
 * Generates a random password with a specified length.
 *
 * @param {number} length - The length of the password.
 * @returns {string} The random password.
 */

// Function Purpose: This function is used to generate a random password with a specified length.
// Parameter: It takes one parameter, which is a number representing the length of the password.
function generateRandomPassword(length) {
    // Define a character set containing lowercase letters, uppercase letters, and digits.
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // Initialize an empty string to store the generated password.
    let password = "";
    // Generate each character of the password.
    for (let i = 0; i < length; i++) {
        // Generate a random index within the length of the character set.
        const randomIndex = Math.floor(Math.random() * charset.length);
        // Append the character at the random index to the password.
        password += charset.charAt(randomIndex);
    }
    // Return the generated password.
    return password;
}

// Hints:
// 1. Import the 'generateRandomPassword' function from the './generateRandomPassword'.
// 2. Describe a test suite for the 'generateRandomPassword' function.
// 3. Define the first test case.
// 4. In this test case, we're checking if the 'generateRandomPassword' function correctly generates
// 5. a random password of a specified length (length 8) and returns the password.
// 6. Use the 'expect' function to make an assertion:
// 7. Call 'generateRandomPassword' with the length 8 and expect it to return a string of length 8.
// 8. Define the second test case.
// 9. In this test case, we're checking if the 'generateRandomPassword' function correctly generates
// 10. a different random password of a specified length (length 12) and returns the password.
// 11. Use the 'expect' function to make an assertion:
// 12. Call 'generateRandomPassword' with the length 12 and expect it to return a string of length 12.


// 6. Task

/**
 * Calculates the monthly salary for an employee based on their hourly wage and hours worked.
 *
 * @param {number} hourlyWage - The hourly wage of the employee.
 * @param {number} hoursWorked - The number of hours worked in a month.
 * @returns {number} The calculated monthly salary.
 */

// Function Purpose: This function is used to calculate the monthly salary for an employee based on their hourly wage and hours worked.
// Parameters:
// - hourlyWage: The hourly wage of the employee (a number).
// - hoursWorked: The number of hours worked in a month (a number).
function calculateMonthlySalary(hourlyWage, hoursWorked) {
    // Multiply the hourly wage by the number of hours worked to calculate the monthly salary.
    return hourlyWage * hoursWorked;
}
// Hints:
// 1. Import the 'calculateMonthlySalary' function from the './calculateMonthlySalary'.
// 2. Describe a test suite for the 'calculateMonthlySalary' function.
// 3. Define the first test case.
// 4. In this test case, we're checking if the 'calculateMonthlySalary' function correctly calculates
// 5. the monthly salary for an employee with an hourly wage of 15 and 160 hours worked.
// 6. Use the 'expect' function to make an assertion:
// 7. Call 'calculateMonthlySalary' with hourly wage 15 and hours worked 160, and expect it to return 2400 (15 * 160).
// 8. Define the second test case.
// 9. In this test case, we're checking if the 'calculateMonthlySalary' function correctly calculates
// 10. the monthly salary for an employee with a different hourly wage (20) and hours worked (100).
// 11. Use the 'expect' function to make an assertion:
// 12. Call 'calculateMonthlySalary' with hourly wage 20 and hours worked 100, and expect it to return 2000 (20 * 100).

// 7. Task

/**
 * Generates an employee ID based on their name and birth year.
 *
 * @param {string} name - The employee's full name.
 * @param {number} birthYear - The birth year of the employee.
 * @returns {string} The generated employee ID.
 */

// Function Purpose: This function is used to generate an employee ID based on the employee's name and birth year.
// Parameters:
// - name: The employee's full name (a string).
// - birthYear: The birth year of the employee (a number).
function generateEmployeeID(name, birthYear) {
    // Explanation of Regular Expression:
    // - This regular expression, /\\s+/g, is used to match and remove all whitespace characters (spaces, tabs, and newlines) from the 'name' string.
    // - /: This is the starting delimiter of the regular expression.
    // - \\s+: This part of the regular expression matches one or more whitespace characters:
    //   - \\: The double backslash \\ is used to escape the special character \\ in regular expressions, matching a literal backslash.
    //   - s: The 's' matches any whitespace character, including spaces, tabs, and newlines.
    //   - +: The + quantifier specifies that there should be one or more consecutive whitespace characters.
    // - /: This is the ending delimiter of the regular expression.
    // - g: This is a flag that stands for "global." When used with 'String.replace()', it indicates that all occurrences of the pattern should be replaced, not just the first one found.
    // Remove spaces, take the first 3 characters, and convert to uppercase to create a short name.
    const shortName = name.replace(/\s+/g, '').slice(0, 3).toUpperCase();
    // Combine the short name and birth year with a hyphen to generate the employee ID.
    return `${shortName}-${birthYear}`;
}
// Hints:
// 1. Import the 'generateEmployeeID' function from the './generateEmployeeID'.
// 2. Describe a test suite for the 'generateEmployeeID' function.
// 3. Define the first test case.
// 4. In this test case, we're checking if the 'generateEmployeeID' function correctly generates
// 5. an employee ID for an employee with the name 'Rokas Norvilis' and birth year 2000.
// 6. Use the 'expect' function to make an assertion:
// 7. Call 'generateEmployeeID' with the name 'Rokas Norvilis' and birth year 2000, and expect it to return 'ROK-2000'.
// 8. Define the second test case.
// 9. In this test case, we're checking if the 'generateEmployeeID' function correctly generates
// 10. an employee ID for an employee with a different name ('Vardenis Pavardenis') and birth year (1985).
// 11. Use the 'expect' function to make an assertion:
// 12. Call 'generateEmployeeID' with the name 'Vardenis Pavardenis' and birth year 1985, and expect it to return 'VAR-1985'.

// 8. Task

/**
 * Calculates the total expenses for a company based on an array of expense items.
 *
 * @param {number[]} expenses - An array of expense amounts.
 * @returns {number} The total expenses.
 */

// Function Purpose: This function is used to calculate the total expenses for a company based on an array of expense items.
// Parameters:
// - expenses: An array of expense amounts (an array of numbers).
function calculateTotalExpenses(expenses) {
    // Use the 'reduce' method to sum up all the expense amounts in the 'expenses' array.
    // The '0' argument is the initial value for the 'total' accumulator.
    return expenses.reduce((total, expense) => total + expense, 0);
}
// Hints:
// 1. Import the 'calculateTotalExpenses' function from the './calculateTotalExpenses'.
// 2. Describe a test suite for the 'calculateTotalExpenses' function.
// 3. Define the first test case.
// 4. In this test case, we're checking if the 'calculateTotalExpenses' function correctly calculates
// 5. the total expenses for an array of expenses [100, 200, 300].
// 6. Use the 'expect' function to make an assertion:
// 7. Call 'calculateTotalExpenses' with the expenses array [100, 200, 300], and expect it to return 600 (100 + 200 + 300).
// 8. Define the second test case.
// 9. In this test case, we're checking if the 'calculateTotalExpenses' function correctly calculates
// 10. the total expenses for a different array of expenses ([50, 75, 125, 250]).
// 11. Use the 'expect' function to make an assertion:
// 12. Call 'calculateTotalExpenses' with the expenses array [50, 75, 125, 250], and expect it to return 500 (50 + 75 + 125 + 250).

// 9. Task

/**
 * Determines if an employee is eligible for a performance bonus based on their annual performance rating.
 *
 * @param {number} performanceRating - The annual performance rating (0-10).
 * @returns {boolean} True if eligible, false otherwise.
 */

// Function Purpose: This function is used to determine if an employee is eligible for a performance bonus based on their annual performance rating.
// Parameters:
// - performanceRating: The annual performance rating (a number in the range of 0 to 10).
function isEmployeeEligibleForBonus(performanceRating) {
    // Check if the performance rating is greater than or equal to 7 (indicating eligibility for a bonus).
    return performanceRating >= 7;
}
// Hints:
// 1. Import the 'isEmployeeEligibleForBonus' function from the './isEmployeeEligibleForBonus'.
// 2. Describe a test suite for the 'isEmployeeEligibleForBonus' function.
// 3. Define the first test case.
// 4. In this test case, we're checking if the 'isEmployeeEligibleForBonus' function correctly determines
// 5. that an employee with a performance rating of 8 is eligible for a bonus.
// 6. Use the 'expect' function to make an assertion:
// 7. Call 'isEmployeeEligibleForBonus' with a performance rating of 8 and expect it to return 'true'.
// 8. Define the second test case.
// 9. In this test case, we're checking if the 'isEmployeeEligibleForBonus' function correctly determines
// 10. that an employee with a lower performance rating (5) is not eligible for a bonus.
// 11. Use the 'expect' function to make an assertion:
// 12. Call 'isEmployeeEligibleForBonus' with a performance rating of 5 and expect it to return 'false'.

// 10. Task

/**
 * Generates a unique invoice number for an invoice based on the current date and a counter.
 *
 * @param {number} counter - The current counter value.
 * @returns {string} The generated invoice number.
 */

// Function Purpose: This function is used to generate a unique invoice number for an invoice based on the current date and a counter value.
// Parameters:
// - counter: The current counter value (a number).

function generateInvoiceNumber(counter) {
    // Get the current date.
    const currentDate = new Date();
    
    // Extract the year from the current date.
    const year = currentDate.getFullYear();
    
    // Extract the month from the current date and ensure it is two digits ('01' for January).
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    
    // Combine the year, month, and counter with hyphens to generate the invoice number.
    return `${year}-${month}-${counter}`;
}
// Hints:
// 1. Import the 'generateInvoiceNumber' function from the './generateInvoiceNumber'.
// 2. Describe a test suite for the 'generateInvoiceNumber' function.
// 3. Define the first test case.
// 4. In this test case, we're checking if the 'generateInvoiceNumber' function correctly generates
// 5. an invoice number for the current year, current month, and a given counter value (counter = 1).
// 6. Use the 'expect' function to make an assertion:
// 7. Call 'generateInvoiceNumber' with the counter value 1 and expect it to return a string in the format 'YYYY-MM-1'.
// 8. Define the second test case.
// 9. In this test case, we're checking if the 'generateInvoiceNumber' function correctly generates
// 10. an invoice number with a different counter value (counter = 5) for the current year and month.
// 11. Use the 'expect' function to make an assertion:
// 12. Call 'generateInvoiceNumber' with the counter value 5 and expect it to return a string in the format 'YYYY-MM-5'.
