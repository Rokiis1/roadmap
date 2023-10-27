#include <stdio.h>

int main() {
    /*
    arithmetic operators = perform arithmetic operations on variables and constants
    
    + (addition operator = adds two operands (variables) together and produces a sum (result))
    - (subtraction operator = subtracts two operands (variables) and produces a difference (result))
    * (multiplication operator = multiplies two operands (variables) and produces a product (result))
    / (division operator = divides two operands (variables) and produces a quotient (result))
    % (modulus operator = divides two operands (variables) and produces a remainder (result))
    ++ (increment operator = increases an integer value by one)
    -- (decrement operator = decreases an integer value by one)
    */

   int x = 5;
    int y = 2;

    // why float? because 5 / 2 = 2.5 and not 2 (integer)
    float a = x / y; // 5 / 2 = 2.5

    float a = x / (float) y; // 5 / 2 = 2.5 (float) = casting (converts an expression of one data type to another) (converts y to float) (5 / 2.0)

    int a = x % y; // 5 % 2 = 1 (remainder)

    printf("x + y = %d\n", x + y); // x + y = 7
    printf("x - y = %d\n", x - y); // x - y = 3
    printf("x * y = %d\n", x * y); // x * y = 10
    printf("x / y = %d\n", x / y); // x / y = 2
    printf("x %% y = %d\n", x % y); // x % y = 1
    printf("++x = %d\n", ++x); // ++x = 6
    printf("--x = %d\n", --x); // --x = 5
    printf("x++ = %d\n", x++); // x++ = 5
    printf("x-- = %d\n", x--); // x-- = 6

    return 0;
}