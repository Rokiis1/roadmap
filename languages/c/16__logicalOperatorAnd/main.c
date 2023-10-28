#include <stdio.h>
#include <stdbool.h>

int main() {
    /*
    Logical Operator && = AND = if both conditions are true, the result is true
    */

   float temp = 25.0;
   bool sunny = false;
// if the temperature is between 20 and 30 degrees and it is sunny, then it is a good day to go out for a walk
// if the temperature is not between 20 and 30 degrees and it is not sunny, then it is not a good day to go out for a walk
    if (temp > 20 && temp < 30 && sunny) {
         printf("The temperature is good.\n");
    } else {
        printf("The temperature is bad.\n");
    }

    return 0;
}