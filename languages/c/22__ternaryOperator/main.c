#include <stdio.h>

int main() {
    /*
    Ternary operator =  a shortcut to writing if-else statements
    */
    int age = 18;
    // if age is greater than or equal to 18, print "Adult", else print "Teenager"
    // condition ? expression1 : expression2
    // if condition is true, expression1 is executed, else expression2 is executed
    printf("%s\n", age >= 18 ? "Adult" : "Teenager");
    return 0;
}