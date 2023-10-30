#include <stdio.h>

/*
void = the function does not return a value:
- the function does not return a value because it does not have a return statement or because it has a return statement without a value (return;)
- the function does not return a value because it has a return statement with a value (return 0;) but the return type is void
- the function does not return a value because it has a return statement with a value (return 0;) but the return type is void and the return statement is not executed (because it is after an if statement that is always false)
- the function does not return a value because it has a return statement with a value (return 0;) but the return type is void and the return statement is not executed (because it is after an if statement that is always true)
*/
void sayHi() {
    printf("Hi!\n");
}

/*
 function = a block of code that can be reused over and over again in different places in the program (or in different programs)
    - functions are used to avoid repeating the same code over and over again in a program (or in different programs)
    - functions make the code more readable and easier to debug
*/
int main() {
    sayHi();
    sayHi();
    sayHi();
}