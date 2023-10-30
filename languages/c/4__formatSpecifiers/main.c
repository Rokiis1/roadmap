# include <stdio.h>

int main() {

    /*
    // format specifiers % = define the type of the variable to be printed on the screen

    //  %c = char
    // %s = string (char array)
    // %f = float (real number)
    // %d = int (integer number)
    // %lf = double (real number with more precision)

    // %.1 = 1 decimal place
    // %1 = minimum filed width
    // %- = left-justified
    */

    char letter = 'a';
    char name[] = "Rokas";
    float pi = 3.14159;
    int number = 5;
    double bigPi = 3.141592653589793238462643383279502884197169399375105820974944592307816406286;

    float item1 = 10.57;
    float item2 = 20.00;
    float item3 = 300.99;

    printf("Item1: $%.2f\n", item1); // Item1: $10.57
    printf("Item1: $%8.2f\n", item1); // Item1: $   10.57
    printf("Item1: $%-8.2f\n", item1); // Item1: $10.57
    printf("Item2: $%.2f\n", item2); 
    printf("Item3: $%.2f\n", item3);

   return 0;
}