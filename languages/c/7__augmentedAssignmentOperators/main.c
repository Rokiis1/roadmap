#include <stdio.h>

int main() {
    /*
    augmented assignment operators = perform an arithmetic operation on the variable and then assign the result to the same variable (+=, -=, *=, /=, %=)
    */

    int a = 10;
    int b = 5;

    a = a + b; // a = 10 + 5 = 15
    a += b; // a = a + b = 10 + 5 = 15
    printf("a = %d\n", a); // a = 15
    printf("b = %d\n", b); // b = 5
    return 0;
}