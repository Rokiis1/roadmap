// 1 Task.
/**
 * Find the index of a user in an array of objects based on a specific property.
 *
 * @param {Array} users - Array of user objects.
 * @param {string} username - The username to search for.
 * @returns {number} - The index of the user, or -1 if not found.
 */
// Hint:
// 1 Step: Outside the function, create an example users array containing user objects with id and name properties.
// 2 Step: Declare a function named findUserById that takes two parameters: userId and users.
// 3 Step: Inside the function, use the find method on the users array to search for a user object with an id property that matches the provided userId.
// 4 Step: Call the findUserById function, passing the target userId and the users array as arguments.
// 5 Step: using console.log().

// 2 Task.
/**
 * Find the index of a specific element in an array.
 *
 * @param {Array} array - The array to search in.
 * @param {*} element - The element to search for.
 * @returns {number} - The index of the element, or -1 if not found.
 */
// Hint:
// 1 Step: Declare a function named findElementIndex that takes two parameters: array and element.
// 2 Step: Inside the function, use the findIndex method on the array to search for the index of the element.
// 3 Step: Pass an arrow function as the argument for the findIndex method.
// 4 Step: The arrow function should check if each element in the array is equal to the provided element.
// 5 Step: The findIndex method will return the index of the element if found or -1 if not found.
// 6 Step: Call the findElementIndex function, passing the target element (3) and the array (numbers) as arguments.

// 3 Task.
/**
 * Find the index of the first element in an array that satisfies a condition.
 *
 * @param {Array} array - The array to search in.
 * @param {Function} condition - The condition function.
 * @returns {number} - The index of the element, or -1 if not found.
 */
// Hint:
// 1 Step: Declare a function named findElementIndexByCondition that takes two parameters: array and condition.
// 2 Step: Inside the function, use the findIndex method on the array to search for the index of the first element that satisfies the given condition.
// 3 Step: Pass an arrow function as the argument for the findIndex method. The arrow function should check the condition using the provided condition function.
// 4 Step: Define a condition function that checks if an element is greater than 3.
// 5 Step: Call the findElementIndexByCondition function, passing the numbers array and the condition function as arguments.
// 6 Step: console.log().