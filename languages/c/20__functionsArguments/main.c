#include <stdio.h>

// arguments = the values that are passed to the function parameters (name and age) when the function is called (sayHi("Rokas", 23);) and used in the function body (printf) to print the name and age
void sayHi(char name[], int age) {
    printf("Hi %s!\n", name);
    printf("You are %d years old.\n", age);
}

int main() {
    // calling the function with arguments (name and age) that are passed to the function parameters (name and age) and used in the function body (printf)
    sayHi("Rokas", 23);
    return 0;
}