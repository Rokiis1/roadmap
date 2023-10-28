#include <stdio.h>

int main() {
    /*
    if Statments = if (condition) {code to execute if condition is true} else {code to execute if condition is false} else if (condition) {code to execute if condition is true} else {code to execute if condition is false} can be many else if statements but only one if and else statement.
    */

    int age;
    printf("Enter your age: ");
    scanf("%d", &age);

// if age is less than 0, print error message and exit program.
if (age < 0) {
    printf("You can't be that old!");
    // else if age is 0, print you just born.
} else if (age == 0) {
    printf("You just born!");
    // else if age is less than 18, print you are a minor.
} else if (age < 18) {
    printf("You are a minor!");
    // else if age is less than 65, print you are an adult.
} else if (age < 65) {
    printf("You are an adult!");
    // else you are a senior citizen.
} else {
    printf("You are a senior citizen!");
}
    return 0;
}