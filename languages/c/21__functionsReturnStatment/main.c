#include <stdio.h>

// return statement = used to end the execution of the function and returns the value to the caller (main function)
// from void to other type, because we are returning a double value (result) from the function to the caller (main function) and we need to change the return type from void to double to do that.
double cube(double num) {
    double result = num * num * num;
    return result;
}

int main () {
    double answer = cube(3.0);
    printf("%f\n", answer);
    return 0;
}