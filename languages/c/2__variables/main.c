#include <stdio.h>

int main() {
    /*
    Variables = Allocated memory in RAM to store data (value) of a specific type.
    Variable name = Identifier for the variable.
    Variable type = Type of data that can be stored in the variable.
    Variable value = Data stored in the variable.
    */

   int x; // Declaration of a variable
    x = 10; // Initialization of a variable
    int y = 20; // Declaration and initialization of a variable

    int age = 20; // int = integer (whole number)
    float gpa = 3.5; // float = floating point number (decimal number)
    char letter = 'R'; // char = character (single letter or symbol)
    char name[] = "Rokas"; // char[] = string (array of characters)

    printf("My name is %s and I am %d years old. My GPA is %f and my favorite letter is %c.\n", name, age, gpa, letter);

   return 0;
}