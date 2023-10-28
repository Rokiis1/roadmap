# include <stdio.h>

// ctypes is used for isdigit() function.
# include <ctype.h>

int main() {
    /*
    Temperature Conversion Program = Write a program that converts a temperature from Fahrenheit to Celsius. The temperature should be entered from the keyboard (via scanf), converted to Celsius, and output to the screen (via printf). The conversion formula is C = (F - 32) / 1.8. 
    */

    // declare variables.
    float temp;
    char unit;

    // take input from user.
    printf("\nIs your temperature in Fahrenheit or Celsius? (F/C): ");
    scanf("%c", &unit);

    // check if input is valid.
    if(unit == 'C') {
        printf("\nEnter your temperature in Celsius: ");
        scanf("%f", &temp);
        temp = (temp * 9 / 5) + 32;
        printf("\nYour temperature in Fahrenheit is: %.1f", temp);
    } else if(unit == 'F') {
        printf("\nEnter your temperature in Fahrenheit: ");
        scanf("%f", &temp);
        temp = (temp - 32) * 5 / 9;
        printf("\nYour temperature in Celsius is: %.1f", temp);
    } else {
        printf("\nInvalid input.");
}

return 0;
}