#include <stdio.h>

int main() {
/*
    Logical Operator || = OR = chec if at least one of the two conditions is true or if both are true
*/
    
    int age = 18;
    // when using ||, if one of the conditions is true, the result is true
    // if both are false, the result is false
    // if both are true, the result is true
    // if one is true and the other is false, the result is true
    // if one is false and the other is true, the result is true
    if(age >= 18 || age <= 35) {
        printf("You are between 18 and 35 years old\n");
    } else {
        printf("You are not between 18 and 35 years old\n");
    }

    return 0;
}