#include <stdio.h>
// stdio.h = standard input output header file (printf(), scanf(), fgets(), etc.)
#include <string.h>

int main() {
    /*
    user input = scanf() function is used to read input from the user (standard input) and store it in a variable (standard output) (scanf() is a function from the stdio.h library) (scanf() returns the number of items read) (scanf() requires the memory address of the variable to store the input) (scanf() can read multiple inputs at once)

    --------------------

    fgets() function is used to read input from the user (standard input) and store it in a variable (standard output) (fgets() is a function from the stdio.h library) (fgets() returns the string read) (fgets() requires the memory address of the variable to store the input) (fgets() can read multiple inputs at once)  
    */

  printf("What's your Name: ");
    char name[25]; // bytes = 25 * 1 = 25 (1 byte per character) (1 character = 1 byte) (1 byte = 8 bits) (1 bit = 0 or 1) (1 byte = 256 bits) (1 byte = 256 characters) 
    // scanf("%s", name); // %s = string (array of characters)
    fgets(name, 25, stdin); // stdin = standard input (keyboard)
    
    // name[strlen(name)-1] = '\0'; // remove the new line character from the string (fgets() adds a new line character at the end of the string) (strlen() = string length function) (strlen() returns the length of the string) (strlen() is a function from the string.h library) (strlen() requires the string to get the length) (strlen() returns the length of the string) (strlen() returns the number of characters in the string) (strlen() returns the number of bytes in the string)
    name[strlen(name)-1] = '\0';

   printf("Enter a number: ");
    int a;
    // & = address of operator (used to get the memory address of a variable)
    scanf("%d", &a);

    printf("Hello %s\n", name);
    printf("a = %d\n", a);

    return 0;
}