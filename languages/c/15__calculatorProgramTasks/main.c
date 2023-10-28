#include <stdio.h>

int main() {
    /*
    Calculator = Write a program that acts as a simple calculator. The program should allow the user to type in expressions of the form number operator number, where number is any floating point number and operator is one of the operators +, -, *, /, or %. The program should then compute and print the value of the expression. (Note: This program is a bit more challenging than the previous ones because it requires you to do two things at once: you need to accept different types of input, and you need to perform different actions depending on the input. You may want to read the next chapter to learn more about how to do this.)
    */
   char operator;
   double num1;
   double num2;
   double result;

    printf("\nEnter an expression (+ - * /): ");

    scanf("%c", &operator);

    printf("\nEnter number 1: ");
    scanf("%lf", &num1);
    printf("\nEnter number 2: ");
    scanf("%lf", &num2);

    switch(operator) {
        case '+':
            result = num1 + num2;
            printf("\n%.2lf + %.2lf = %.2lf", num1, num2, result);
            break;
        case '-':
            result = num1 - num2;
            printf("\n%.2lf - %.2lf = %.2lf", num1, num2, result);
            break;
        case '*':
            result = num1 * num2;
            printf("\n%.2lf * %.2lf = %.2lf", num1, num2, result);
            break;
        case '/':
            result = num1 / num2;
            printf("\n%.2lf / %.2lf = %.2lf", num1, num2, result);
            break;
        default:
            printf("\nInvalid operator.");
            break;
    }

    return 0;   
}