// # Table of Contents

// - [Live](#live)
// - [Easy](#easy)
// - [Intermediate](#intermediate)
// - [Hard](#hard)

// # Live

/**
 * Task 1: This program checks if a given day of the week is a weekday or a weekend day.
 *
 * @param {string} dayOfWeek - The day of the week to check.
 * @returns {string} - The result indicating "weekday" or "weekend."
 */

/**
 * Task 2: This program checks if a number is positive or negative and provides a message.
 *
 * @param {number} number - The number to be checked.
 * @returns {string} - A message indicating whether the number is positive or negative.
 */

/**
 * Task 3: This program checks if a number is even or odd and provides a message.
 *
 * @param {number} number - The number to be checked.
 */

/**
 * 4. This program compares two numbers and provides a comparison result.
 *
 * @param {number} number1 - The first number to be compared.
 * @param {number} number2 - The second number to be compared.
 * @returns {string} - A message indicating which number is greater or if they are equal.
 */

/**
 * 5. This program checks the user's age and displays a message about their age status.
 *
 * @param {number} age - The user's age to be checked.
 * @returns {string} - A message indicating whether the user is an adult or a minor.
 */

// # Easy

/**
 * Task 1: This program is a basic calculator that performs arithmetic operations.
 *
 * @param {number} num1 - The first number for the operation.
 * @param {number} num2 - The second number for the operation.
 * @param {string} operation - The arithmetic operation to be performed (add, subtract, multiply, or divide).
 * @returns {number} - The result of the arithmetic operation.
 */

// Hint:
// 1. Define the numbers (num1 and num2) and the desired operation (operation).
// 2. Use a switch statement to perform the specified operation based on the 'operation' string.
// 3. Inside each case, perform the corresponding arithmetic operation.
// 4. Handle the case where division by zero is attempted to avoid errors.
// 5. Provide a default case for handling invalid operations.
// 6. Store the result of the operation in the 'result' variable.
// 7. Use string interpolation (template literals) to display the result with a message.

/**
 * Task 2: Calculate the price of a movie ticket based on the user's age.
 *
 * @param {number} userAge - The user's age to determine the ticket price.
 * @param {number} ticketPrice - The calculated price of the movie ticket.
 * @returns {number} - The calculated price of the movie ticket.
 */

// Hint:
// 1. Define the user's age and a variable to store the ticket price (you can name it 'ticketPrice').
// 2. Use conditional statements, such as if-else, to determine the ticket price based on the user's age.
// 3. Set conditions for different age ranges and assign the corresponding ticket prices.
// 4. Calculate the ticket price based on the user's age and store it in the 'ticketPrice' variable.
// 5. Finally, use console.log to display the calculated ticket price to the user.

/**
 * Task 3: This program provides advice based on predefined temperature and weather conditions.
 *
 * @param {number} temperature - The current temperature in Celsius.
 * @param {string} weather - The weather conditions (rainy, sunny, snowy).
 * @returns {string} - Advice based on the input.
 */

// Hint:
// 1. Define the current temperature (in Celsius) and the weather conditions (sunny, rainy, snowy).
// 2. Create a variable named 'advice' to store the advice message based on the conditions.
// 3. Use conditional statements (if-else) to check the weather conditions and temperature to provide appropriate advice.
// 4. Make nested if-else statements to provide specific advice for different temperature and weather conditions.
// 5. Use string concatenation to build the advice message.
// 6. Display the advice message using console.log.

/**
 * Task 4: Calculates and displays a number grade based on a test score.
 *
 * @param {number} testScore - The test score used to determine the number grade.
 * @param {string} letterGrade - The calculated number grade(10,9,8 and so on).
 * @returns {string} - The calculated number grade.
 */

// Hint:
// 1. Define the test score for which you want to calculate the number grade.
// 2. Create a variable named 'numberGrade' to store the calculated number grade.
// 3. Use conditional statements (if-else) to check the test score and assign the appropriate number grade.
// 4. Define different score ranges for different number grades (90 or above for 10, 80-89 for 9, etc.).
// 5. Store the calculated number grade in the 'numberGrade' variable.
// 6. Use string interpolation (template literals) to display the number grade.

/**
 * Task 5: This program provides general diet recommendations based on age and gender.
 *
 * @param {number} age - The user's age.
 * @param {string} gender - The user's gender ("male" or "female").
 * @param {string} dietRecommendations - General diet recommendations.
 * @returns {string} - General diet recommendations.
 */

// Hint:
// 1. Define the user's age and gender for which you want to provide diet recommendations.
// 2. Create a variable named 'dietRecommendations' to store the recommendations.
// 3. Use conditional statements (if-else) to check age and gender to provide appropriate diet recommendations.
// 4. Consider different age ranges and gender-specific recommendations.
// 5. Handle cases where age or gender is not specified or is invalid.
// 6. Store the diet recommendations in the 'dietRecommendations' variable.
// 7. Use console.log to display the diet recommendations.

/**
 * Task 6: This program compares the price per unit of two different products.
 *
 * @param {number} price1 - The price of the first product.
 * @param {number} quantity1 - The quantity of the first product.
 * @param {number} price2 - The price of the second product.
 * @param {number} quantity2 - The quantity of the second product.
 * @param {string} comparisonResult - The comparison result.
 * @returns {string} - The comparison result.
 */

// Hint:
// 1. Define the prices and quantities of two different products (price1, quantity1, price2, quantity2).
// 2. Create a variable named 'comparisonResult' to store the result of the comparison.
// 3. Calculate the unit prices for each product (unitPrice1 and unitPrice2) by dividing the price by the quantity.
// 4. Use conditional statements (if-else) to compare the unit prices.
// 5. Provide messages for different comparison results ("Product 1 has a better price per unit.").
// 6. Handle cases where the unit prices are equal.
// 7. Store the comparison result in the 'comparisonResult' variable.
// 8. Use console.log to display the comparison result.

/**
 * Task 7: This program calculates if the user has a surplus or deficit for the month.
 *
 * @param {number} income - The user's monthly income.
 * @param {number} expenses - The user's total monthly expenses.
 * @param {string} message - A message indicating a surplus or deficit.
 * @returns {string} - A message indicating a surplus or deficit.
 */

// Hint:
// 1. Define the user's monthly income and total monthly expenses (income and expenses).
// 2. Create a variable named 'message' to store the message about the surplus or deficit.
// 3. Use conditional statements (if-else) to compare income and expenses.
// 4. Provide messages for different situations, such as having a surplus, a deficit, or a balanced budget.
// 5. Store the appropriate message in the 'message' variable.
// 6. Use console.log to display the message.

/**
 * Task 8: This program splits a restaurant bill among a group of people.
 *
 * @param {number} totalBill - The total amount of the restaurant bill.
 * @param {number} numberOfPeople - The number of people sharing the bill.
 * @param {number} amountPerPerson - The amount each person needs to pay.
 * @returns {number} - The amount each person needs to pay.
 */

// Hint:
// 1. Define the user's monthly income and total monthly expenses (income and expenses).
// 2. Create a variable named 'message' to store the message about the surplus or deficit.
// 3. Use conditional statements (if-else) to compare income and expenses.
// 4. Provide messages for different situations, such as having a surplus, a deficit, or a balanced budget.
// 5. Store the appropriate message in the 'message' variable.
// 6. Use console.log to display the message.

/**
 * Task 9: This simplified fitness advisor provides generic workout and nutrition advice.
 *
 * @param {string} fitnessGoal - The user's fitness goal (weight loss, muscle gain).
 * @param {string} activityLevel - The user's activity level (sedentary, moderate, active).
 * @param {string} advice - Workout and nutrition advice based on input.
 * @returns {string} - Workout and nutrition advice based on input.
 */

// Hint:
// 1. Define the user's fitness goal and activity level (fitnessGoal and activityLevel).
// 2. Create a variable named 'advice' to store the workout and nutrition advice.
// 3. Use nested conditional statements to provide specific advice for different fitness goals and activity levels.
// 4. Handle cases where fitness goal or activity level is not specified or is invalid.
// 5. Store the appropriate advice in the 'advice' variable.
// 6. Use console.log to display the advice.

/**
 * Task 10: Provides a homework reminder on weekdays and encourages relaxation on weekends.
 *
 * @param {Date} now - The current date and time.
 * @param {number} currentDay - The current day of the week (0 for Sunday, 1 for Monday, and so on).
 * @param {number} currentHour - The current hour of the day.
 * @param {string} reminderMessage - The reminder or relaxation message based on the current day and time.
 * @returns {string} - The reminder or relaxation message based on the current day and time.
 */

// Hint:
// 1. Define the current date and time (now), the current day of the week (currentDay), and the current hour (currentHour).
// 2. Create a variable named 'message' to store the reminder or relaxation message.
// 3. Use conditional statements (if-else) to check the current day and time.
// 4. Determine whether it's a weekday or weekend and whether it's a suitable time for a reminder or relaxation.
// 5. Provide appropriate messages for weekdays and weekends, considering the current hour.
// 6. Store the message in the 'message' variable.
// 7. Use console.log to display the message.