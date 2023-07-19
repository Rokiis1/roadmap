// 1 Task.
/**
 * Displays a list of items on the webpage.
 *
 * @param {Array} items - The array of items to display.
 */
// Hint:
// 1 Step: Declare a function named displayItems that takes one parameter: items.
// 2 Step: Inside the function, use the forEach method on the items array to iterate over each item in the array.
// 3 Step: Pass a callback function to the forEach method that takes one parameter, item.
// 4 Step: Inside the callback function, you can perform the desired action for each item. In this example, it logs the item to the console using console.log(). Alternatively, you can update the webpage to display the item dynamically.
// 5 Step: Outside the function, create an example array, groceryList, containing the items you want to display.
// 6 Step: Call the displayItems function, passing groceryList as the argument.
// 7 Step: The function will iterate over each item in the groceryList array and log or display it accordingly.

// 2 Task.
/**
 * Calculates the total price of a shopping cart.
 *
 * @param {Array} cart - The shopping cart containing items and prices.
 * @returns {number} - The total price of all items in the cart.
 */
// Hint:
// 1 Step: Declare a function named calculateTotalPrice that takes one parameter: cart.
// 2 Step: Initialize a variable named totalPrice with a value of 0 to keep track of the cumulative total price.
// 3 Step: Use the forEach method on the cart array to iterate over each item in the cart.
// 4 Step: Pass a callback function to the forEach method that takes one parameter, item.
// 5 Step: Inside the callback function, access the price property of each item and add it to the totalPrice variable.
// 6 Step: After the forEach loop completes, return the value of totalPrice.
// 7 Step: Outside the function, create an example shoppingCart array containing objects with name and price properties for each item.
// 8 Step: Call the calculateTotalPrice function, passing shoppingCart as the argument.
// 9 Step: Store the result in a variable named totalPrice.
// 10 Step: console.log().

// 3 Task.
/**
 * Updates user statistics based on their activity data.
 *
 * @param {Array} activityData - The array of user activity data.
 * @param {Object} userStats - The object containing user statistics.
 */
// Hint:
// 1 Step: Declare a function named updateUserStats that takes two parameters: activityData and userStats.
// 2 Step: Use the forEach method on the activityData array to iterate over each activity in the data.
// 3 Step: Pass a callback function to the forEach method that takes one parameter, activity.
// 4 Step: Inside the callback function, check the type property of each activity object.
// 5 Step: If the type is 'login', increment the logins property of the userStats object by 1.
// 6 Step: If the type is 'purchase', increment the purchases property of the userStats object by 1 and add the amount property of the activity object to the totalSpent property of the userStats object.
// 7 Step: Outside the function, create an example userActivity array containing objects with type and amount properties for each activity.
// 8 Step: Create an example statistics object with properties logins, purchases, and totalSpent, initialized to 0.
// 9 Step: Call the updateUserStats function, passing userActivity and statistics as the arguments.
// 10 Step: The function will iterate over each activity in userActivity, update the statistics object accordingly, and modify its properties.
// 11 Step: console.log().