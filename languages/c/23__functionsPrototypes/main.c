#include <stdio.h>

/*
Main concepts:
- Function declaration, w/o body (function prototype), before main()
- Ensure that function is declared before it is used (called) in main() with the correct arguments(=parameters)

Important:
Many compilers will not complain if you call a function that has not been declared, but it is a good practice to declare functions before they are used.
Missing arguments in function declaration can cause problems when the function returns a value, because the compiler will not know what type of value the function returns.
A function prototype causes the compiler to flag an error if the function is called with the wrong number or type of arguments.
*/

// function prototype = function declaration = function signature = function header = function interface = function contract = function specification = function name + parameters = function name + parameters + return type
void sayHi(char name[], int age);

// function declaration = function prototype = function signature = function header = function interface = function contract = function specification = function name + parameters = function name + parameters + return type
int main() {
    // function arguments = function parameters = function inputs = function values
    char name[] = "Rokas";
    int age = 20;
    return 0;
}

// function definition = function implementation = function body = function code = function block = function logic = function instructions = function statements = function body + function header = function body + function signature = function body + function prototype = function body + function declaration
void sayHi(char name[], int age) {
    printf("Hello %s, you are %d years old\n", name, age);
}