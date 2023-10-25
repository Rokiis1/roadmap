/**
 * Determines if a given string contains a specific substring and the length is within a range.
 * @param {string} text - The input string to check.
 * @param {string} substring - The substring to search for.
 * @param {number} minLength - The minimum allowed length.
 * @param {number} maxLength - The maximum allowed length.
 * @returns {boolean} Returns true if the conditions are met, false otherwise.
 */

const text = "This is a sample text";
const substring = "sample";
const minLength = 5;
const maxLength = 20;

if (isSubstringWithinLengthRange(text, substring, minLength, maxLength)) {
    console.log("The conditions are met.");
} else {
    console.log("The conditions are not met.");
}

/**
 * Checks if a person is eligible to vote based on age and citizenship.
 * @param {number} age - The age of the person.
 * @param {boolean} isCitizen - Whether the person is a citizen.
 */

/**
 * Checks if a number is greater than 10 and logs a message.
 * @param {number} num - The number to check.
 */