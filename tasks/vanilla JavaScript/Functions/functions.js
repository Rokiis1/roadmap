// 1 Task.
/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of `a` and `b`.
 */
// Hint:
// Step 1: Define a function named sum using the const keyword. The function takes two parameters, a and b.
// Step 2: Inside the function, add a try block to catch any potential errors that may occur during the execution of the code.
// Step 3: Inside the try block, return the sum of a and b.
// Step 4: If an error occurs during the execution of the code inside the try block, it will be caught by the catch block. In this case, we can log an error message to the console using console.log.
// Step 5: Outside the function, call the sum function with arguments 5 and 2 and assign the returned value to a variable named result.

// 2 Task.
/**
 * Finds the maximum number from a list of numbers.
 * @param {...number} numbers - The numbers to find the maximum from.
 * @returns {number} - The maximum number from the provided list of numbers.
 */
// Hint:
// Step 1: Define the findMax function.
// Step 2: In this step, we define the findMax function. 
// It takes a variable number of arguments (...numbers) representing the numbers from which we want to find the maximum. 
// The function returns a single number, which is the maximum value.
// Step 3: Here, we check if any numbers are provided by checking the length of the numbers array. 
// If the length is zero, it means no numbers were passed as arguments. 
// In this case, we throw an error using throw new Error('No numbers provided.').
// Step 4: We initialize a variable max with the first number (numbers[0]). 
// Then, we iterate over the remaining numbers starting from index 1 (let i = 1). 
// Inside the loop, we compare each number with the current maximum (max). 
// If a larger number is found, we update max to that number.
// Step 5: Return the maximum number.
// Step 6: Handle errors.

// 3 Task.
/**
 * Concatenates two arrays using the spread operator.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} - The concatenated array.
 */
// Hint:
// Step 1: Define the function and its parameters.
// Step 2: Inside the function, we use the spread operator (...) to concatenate the elements of arr1 and arr2 into a new array. 
// If an error occurs during the concatenation process, it is caught using the try/catch block. 
// The error is logged to the console using console.error, and an empty array ([]) is returned.
// Step 3: We create two arrays, array1 and array2, with some elements. 
// Then we call the concatenateArrays function, passing in array1 and array2 as arguments. 
// The returned value is stored in the concatenatedArray variable. 
// Finally, we log the concatenatedArray to the console, which will display the concatenated array [ ].

// 4 Task.
/**
 * Converts an array of strings to uppercase.
 *
 * @param {string[]} array - The array of strings to convert.
 * @returns {string[]} - The converted array of uppercase strings.
 * @throws {TypeError} - If the input is not an array.
 */
// Hint:
// Step 1: Start with the Function Signature.
// Step 2: The first step inside the function is to check if the input array is actually an array. 
// We can use the Array.isArray() method for this purpose. 
// If the input is not an array, we throw a TypeError with the appropriate message.
// Step 3: Next, we need to initialize an empty array called result to store the converted strings.
// We iterate over each element in the input array and convert each string to uppercase using the toUpperCase() method. 
// We store the converted string in the result array at the same index.
// Step 4: After converting all the strings to uppercase, we can simply return the result array.
// Step 5: To test the function, we can create an example array, call the convertArrayToUppercase function with that array, and log the result to the console.

// 5 Task.
/**
 * Divides two numbers and handles potential errors.
 *
 * @param {number} dividend - The dividend.
 * @param {number} divisor - The divisor.
 * @returns {number} The quotient of the division.
 * @throws {Error} If the divisor is zero.
 */
// Hint:
// Step 1: Implement the function body with a try/catch block.
// Step 2: Check if the divisor is zero using an if statement.
// Step 3: Perform the division and return the quotient.
// Step 4: Handle the error by logging the error message to the console.

// 6 Task.
/**
 * Clones an object and modifies a property value in the new object.
 *
 * @template T - The type of the object being cloned.
 * @param {T} obj - The object to clone.
 * @param {string} property - The property to modify in the new object.
 * @param {*} value - The new value for the specified property.
 * @returns {T} - The cloned object with the modified property value.
 */
// Hint:
// Step 1: Define a function called cloneAndModify that takes three parameters: obj, property, and value.
// Step 2: Inside the function, create a new variable called clonedObj and assign it the cloned object.
//      - Use the spread operator (...) to clone the original object obj. This creates a shallow copy of the object.
//      - const clonedObj = { ...obj };
// Step 3: Modify the property value in the clonedObj.
//      - Access the specified property of clonedObj and assign it the new value.
//      - clonedObj[property] = value;
// Step 4: Return the modified clonedObj from the function.
// Step 5: Use the cloneAndModify function to clone an object and modify a property value.
//      - Create an object originalObj with the desired properties and values.
//      - const originalObj = { };
//      - Call the cloneAndModify function, passing in originalObj, the property to modify (e.g., 'age'), and the new value (e.g., 35).
//      - const modifiedObj = cloneAndModify( );
// Step 6: Test the code by printing the original and modified objects.
//      - console.log(originalObj); // Output: { }
//      - console.log(modifiedObj); // Output: { }

// 7 Task.
/**
 * Returns the square of a given number.
 * @param {number} num - The input number.
 * @returns {number} The square of the input number.
 */
// Hint:
// 1 Step: Start by declaring the arrow function using the const keyword and assigning it to the variable name square.
// 2 Step: Inside the function body, you'll need to calculate the square of the input number. To do this, multiply the num parameter by itself.
// 3 Step: You can now test the square function by calling it with a number and storing the result in a variable.

// 8 Task.
/**
 * Finds the maximum number in an array using the spread operator and array destructuring.
 *
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} The maximum number.
 */
// Hint:
// Step 1: The findMaxNumber function is declared with a rest parameter ...numbers. 
// This allows the function to accept any number of arguments and gather them into an array called numbers.
// Step 2: The spread operator ...numbers is used as an argument to the Math.max() function. 
// The spread operator spreads the elements of the numbers array into individual arguments. 
// This is equivalent to passing each number as a separate argument to Math.max(). 
// The Math.max() function then returns the maximum number among those arguments.
// Step 3: Test the code

// 9 Task.
/**
 * Sums the elements of an array without using any array method.
 *
 * @param {number[]} numbers - The array of numbers to be summed.
 * @returns {number} The sum of the numbers.
 */
// Hint:
// Step 1: Define the sumNumbers function with a rest parameter ...numbers to accept any number of arguments.
// Step 2: Initialize a variable sum with an initial value of 0 to store the sum of the numbers.
// Step 3: Use a for loop to iterate over each number in the numbers array. 
// The loop will run until the index i reaches the length of the array.
// Step 4: Inside the loop, add the current number to the sum variable.
// Step 5: After the loop finishes, return the computed sum.
// Step 6: Create an array of numbers called numbers with the values you want to sum.
// Step 7: Call the sumNumbers function and pass the numbers array using the spread operator ....
// Step 8: Using console.log print the result

// 10 Task.
/**
 * Returns the sum and difference of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {Object} An object containing the sum and difference of the two numbers.
 */
// Hint:
// 1 Step: Define a function named calculateSumAndDifference that takes two parameters: a and b, representing the two numbers.
// 2 Step: Inside the function, create an object literal that has two properties: sum and difference. 
// Set the value of the sum property to the sum of a and b (i.e., a + b), and set the value of the difference property to the difference between a and b (i.e., a - b).
// 3 Step: Return the object from the function.
// 4 Step: To use the function, declare two variables (number1 and number2, for example) and assign the desired values to them.
// 5 Step: Call the calculateSumAndDifference function, passing number1 and number2 as arguments. 
// Capture the returned object using object destructuring and assign the sum and difference properties to variables with the same names.
// 6 Step: Print the values of sum and difference using console.log.