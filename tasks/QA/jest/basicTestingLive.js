/**
 * Task 1: Calculate the Area of a Rectangle
 */

// Step 1: Define a function 'calculateRectangleArea' that takes 'length' and 'width' as parameters.
const calculateRectangleArea = (length, width) => {
    // Step 2: To calculate the area of a rectangle, multiply its length and width.
    return length * width;
};


/**
 * Task 2: Calculate the Sum of an Array
 */

// Step 1: Define a function 'calculateArraySum' that takes an array 'numbers' as a parameter.
const calculateArraySum = (numbers) => {
    // Step 2: You can use the reduce() method to add up all the numbers in the array.
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};


/**
 * Task 3: Find the Maximum Value in an Array
 */

// Step 1: Define a function 'findMaxValue' that takes an array 'numbers' as a parameter.
const findMaxValue = (numbers) => {
    // Step 2: You can use the Math.max() function with the spread operator to find the maximum value in an array.
    return Math.max(...numbers);
};


/**
 * Task 4: Reverse a String
 */

// Step 1: Define a function 'reverseString' that takes a string 'str' as a parameter.
const reverseString = (str) => {
    // Step 2: You can split the string into an array of characters, reverse it, and then join it back into a string.
    return str.split('').reverse().join('');
};


/**
 * Task 5: Check for Palindrome
 */

// Step 1: Define a function 'isPalindrome' that takes a string 'str' as a parameter.
const isPalindrome = (str) => {
    // Step 2: To check for a palindrome, remove spaces, convert to lowercase, and compare with its reverse.
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};


/**
 * Task 6: Calculate Factorial
 */

// Step 1: Define a function 'calculateFactorial' that takes a non-negative integer 'n' as a parameter.
const calculateFactorial = (n) => {
    // Step 2: Use recursion to calculate the factorial.
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * calculateFactorial(n - 1);
  };
  

/**
 * Task 7: Generate Fibonacci Sequence
 */

// Step 1: Define a function 'generateFibonacciSequence' that takes a number 'n' as a parameter.
const generateFibonacciSequence = (n) => {
    // Step 2: Use a loop to generate Fibonacci numbers and store them in an array.
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      const next = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(next);
    }
    return fibonacci.slice(0, n);
  };
  

/**
 * Task 8: Count Vowels in a String
 */

// Step 1: Define a function 'countVowels' that takes a string 'str' as a parameter.
const countVowels = (str) => {
    // Step 2: Use a regular expression to match and count vowels in the string.
    const vowelRegex = /[aeiou]/gi;
    const vowelMatches = str.match(vowelRegex);
    return vowelMatches ? vowelMatches.length : 0;
  };
  

/**
 * Task 9: Check for Prime Number
 */

// Step 1: Define a function 'isPrime' that takes an integer 'num' as a parameter.
const isPrime = (num) => {
    // Step 2: Use a loop to check for divisibility of 'num' by numbers up to its square root.
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  };
  
