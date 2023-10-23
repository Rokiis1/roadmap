// # Table of Contents

// - [Live](#live)
// - [Easy](#easy)
// - [Intermediate](#intermediate)
// - [Hard](#hard)

// # Live

/**
 * Task 1: Basic For Loop
 * Write a JavaScript program that uses a 'for' loop to print all numbers from 1 to 10.
*/

/**
 * Task 2: For In Loop with Object
 * Create an object with some key-value pairs. Use a 'for-in' loop to loop through the object and print each key and its corresponding value.
*/

/**
 * Task 3: For Of Loop with Array
 * Create an array of your favorite fruits. Use a 'for-of' loop to iterate through the array and print each fruit.
*/

/**
 * Task 4: While Loop
 * Write a JavaScript program that uses a 'while' loop to print all even numbers from 2 to 10.
*/

/**
 * Task 5: Do While Loop with User Input
 * Write a JavaScript program that uses a 'do-while' loop for a number until they enter a negative number. After each input, print the number entered.
 */

/**
 * Task 6: Nested For Loop
 * Create a nested 'for' loop that prints a pattern of asterisks. For example, for n = 4, it should print:
 * 
 * *
 * **
 * ***
 * ****
*/

/**
 * Task 7: Break Statement
 * Write a 'for' loop that prints numbers from 1 to 10, but if it encounters the number 5, it should stop looping using the 'break' statement.
 */

/**
 * Task 8: Continue Statement
 * Write a 'for' loop that prints numbers from 1 to 10, but if it encounters the number 5, it should skip that iteration using the 'continue' statement.
 */

/**
 * Task 9: Labelled Loop
 * Create a labelled 'for' loop that prints all even numbers from 2 to 10 using a 'continue' statement.
 */

// # Easy

/**
 * Task 1: Remove Last Element from Array
 * This program removes the last element from an array and stores the modified array in a new variable.
 * @param {number[]} arr - The original array to be modified.
 * @returns {number[]} - The new array with the last element removed.
 */

// Hints:
// 1. Use a loop to iterate through the array, starting from the first element (index 0).
// 2. Inside the loop, move each element one position to the left (replace each element with the next element).
// 3. Continue this process until you reach the second-to-last element (arr.length - 1), which is the last element you want to keep.
// 4. After the loop, you will have shifted all elements to the left, effectively removing the first element.
// 5. Finally, update the length of the array to exclude the last (now duplicate) element, which is the original last element of the array.

/**
 * Task 2: Add New Item to Array in the end of an Array
 * This program adds a new item to the end of an array and then prints the modified array.
 * @param {number[]} arr - The original array.
 * @param {number} newItem - The new item to add to the array.
 * @returns {number[]} - The modified array with the new item added at the end.
 */

// Hint:
// 1. First, create a variable to hold the new item you want to add to the array.
// 2. Next, determine where in the array you want to add the new item. In this case, you want to add it to the end of the array.
// 3. To add the new item to the end of the array, you can use the array's length as the index to place the new item.
// 4. Assign the new item to the array at the calculated index (arr[arr.length] = newItem).

/**
 * Task 3: Remove First Element from Array
 * This program removes the first element from an array without using any functions and then prints the modified array.
 * @param {number[]} arr - The original array to be modified.
 * @returns {number[]} - The modified array with the first element removed.
 */

// Hint:
// 1. You can achieve this task by shifting elements to the left within the array.
// 2. Use a loop to iterate through the array, starting from the first element (index 0).
// 3. Inside the loop, move each element one position to the left (replace each element with the next element).
// 4. Continue this process until you reach the second-to-last element (arr.length - 1), which is the last element you want to keep.
// 5. After the loop, you will have shifted all elements to the left, effectively removing the first element.
// 6. Finally, update the length of the array to exclude the last (now duplicate) element, which is the original last element of the array.

/**
 * Task 4: Add Element at the Start of an Array
 * This program adds a new element to the start of an array without using any functions and then prints the modified array.
 * @param {number[]} arr - The original array to be modified.
 * @param {number} newItem - The new item to add to the beginning of the array.
 * @returns {number[]} - The modified array with the new item added at the start.
 */

// Hint:
// 1. Create a variable to hold the new item you want to add to the array.
// 2. Determine where in the array you want to add the new item. In this case, you want to add it at the start of the array.
// 3. To add the new item at the start, you can shift existing elements to the right to make space for the new item.
// 4. Use a loop to iterate through the array in reverse, starting from the last element (arr.length) and moving towards the first element (index 0).
// 5. Inside the loop, move each element one position to the right (replace each element with the previous element).
// 6. Continue this process until you reach the first element.
// 7. Finally, add the new item at the beginning of the array by assigning it to arr[0].

/**
 * Task 5: Extract Values from Start to End
 * This program extracts values from an original array from the 'start' index (inclusive) to the 'end' index (exclusive).
 * @param {number[]} arr - The original array from which values are extracted.
 * @param {number} start - The index from which to start extracting values (inclusive).
 * @param {number} end - The index where extraction should end (exclusive).
 * @returns {number[]} - The extracted values from the original array.
 */

// Hint:
// 1. Create a new array to store the extracted values. You can call it 'newArr'.
// 2. Loop through the original array using a for loop, starting from the 'start' index and ending just before the 'end' index.
// 3. Inside the loop, for each index within the specified range, extract the value from the original array and add it to the 'newArr'.
// 4. To access the values within the specified range, you may need to adjust the index you use to access the original array and the index to add to the 'newArr'.
// 5. After the loop, the 'newArr' will contain the extracted values.
// 6. Finally, print the 'newArr' to see the extracted values.

/**
 * Task 6: Remove Elements specified number from Array 
 * This program removes a specified number of elements from an array starting from a given index.
 * @param {number[]} arr - The original array to be modified.
 * @param {number} index - The index from which removal should begin.
 * @param {number} count - The number of elements to remove.
 * @returns {number[]} - The modified array with elements removed.
 */

// Hint:
// 1. To remove elements from an array, you can loop through the original array.
// 2. Start the loop from the specified 'index' from where the removal should begin.
// 3. Inside the loop, shift the elements to the left to replace the elements that need to be removed.
// 4. Continue this process for 'count' number of elements.
// 5. To access the elements that you want to remove and the elements that replace them, you may need to adjust the index you use for the original array.
// 6. After the loop, update the length of the array to reflect the removal of elements.

/**
 * Task 7: Iterate and Display Array Elements
 * This program iterates through an array and displays each element along with its index.
 * @param {number[]} arr - The array to iterate through and display its elements.
*/

// Hint:
// 1. To iterate through an array, you can use a for loop.
// 2. The loop should start at index 0 (the first element) and continue until it reaches the length of the array.
// 3. Inside the loop, you can access each element using the current index.
// 4. Create a variable to store the current element for better readability.
// 5. You can display each element along with its index using console.log and string concatenation.
// 6. The format for the log can be: "Element at index <index>: <element>".

/**
 * Task 8: Copy elements from the source array to a new array.
 *
 * @param {number[]} sourceArray - The original array to copy elements from.
 * @returns {number[]} A new array containing the copied elements.
*/

// Hint:
// 1. To copy elements from one array to another, you can use a for loop.
// 2. Start by creating an empty array to store the copied elements. You can name it 'newArray'.
// 3. Use a for loop to iterate through the 'sourceArray' from the beginning to the end.
// 4. Inside the loop, access each element in the 'sourceArray' using the current index.
// 5. Create a corresponding element in the 'newArray' at the same index and assign the value of the element from the 'sourceArray' to it.
// 6. Continue this process until you have copied all the elements from the 'sourceArray' to the 'newArray'.
// 7. After the loop, the 'newArray' will contain the copied elements.
// 8. You can print 'newArray' to verify that the elements have been copied
