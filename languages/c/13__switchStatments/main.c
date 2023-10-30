#include <stdio.h>

int main() {
    /*
    switch Statments = switch (expression) {case constant: code to execute if expression is equal to constant; break; case constant: code to execute if expression is equal to constant; break; default: code to execute if expression is different from all constants; break;} can be many case statements but only one default statement. break is used to exit the switch statement. default is used if none of the case statements are true. expression is the variable that is being tested. constant is the value that is being tested against. 
    */

   char museumTicket;

printf("Enter your ticket type (A for student, B for adult, C for senior): ");
    scanf("%c", &museumTicket);

// switch statement to determine ticket type based on user input.
    switch (museumTicket) {
        // case A, print student ticket.
        case 'A':
            printf("You have a student ticket");
            // break to exit switch statement. 
            break;
        case 'B':
            printf("You have a adult ticket");
            break;
        case 'C':
            printf("You have a senior ticket");
            break;
            // default is used if none of the case statements are true.
        default:
            printf("You have an invalid ticket");
            break;
    }

    return 0;
}