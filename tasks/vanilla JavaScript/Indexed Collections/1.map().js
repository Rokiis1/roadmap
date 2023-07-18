// 1 Task.
/**
 * Calculates the square of each number in an array.
 *
 * @param {number[]} numbers - An array of numbers.
 * @returns {number[]} - An array of squared numbers.
 */
// Hint:
// 1 Step: Defining the calculateSquares function.
// 2 Step: Inside the calculateSquares function, use the map() function to iterate over each element of the numbers array and calculate its square.

// 2 Task.
/**
 * Extracts the name property from each object in the array.
 *
 * @param {Object[]} arr - The input array of objects.
 * @returns {string[]} The resulting array with the name property extracted from each object.
 */
// Hint:
// 1 Step: Define the extractNames function that takes an array arr as its parameter.
// 2 Step: Inside the function, use the map method to iterate over the arr array.
// 3 Step: For each object obj in the array, access its name property using obj.name.
// 4 Step: The map method will create a new array with the extracted name values.
// 5 Step: Return the resulting array from the extractNames function.
// 6 Step: Outside the function, create an example array of objects array with name and age properties.
// 7 Step: Call the extractNames function with array as an argument and store the result in the names variable.
// 8 Step: console.log(name).

// 3 Task.
/**
 * Represents an item in a shopping cart.
 *
 * @typedef {Object} CartItem
 * @property {string} name - The name of the item.
 * @property {number} price - The price of the item.
 * @property {number} quantity - The quantity of the item.
 */

/**
 * Calculates the total price of items in a shopping cart.
 *
 * @param {CartItem[]} cart - The array of CartItem objects representing the shopping cart.
 * @returns {number} The total price of all items in the cart.
 */
// Hint:
// Step 1: Define the calculateTotalPrice function.
// Step 2: Define the calculateSubtotal function within calculateTotalPrice.
// Step 3: Use the map() function to calculate the subtotal price for each item in the cart.
// Step 4: Use the reduce() function to sum up all the subtotal prices and calculate the total price.
// Step 5: Return the calculated totalPrice from the calculateTotalPrice function.