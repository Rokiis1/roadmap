#include <stdio.h>

/*
String functions: https://www.tutorialspoint.com/c_standard_library/string_h.htm
*/

int main() {
    char name[] = "Rokas";
    char surname[] = "Test";

    strlwr(name); // convert string to lowercase
    strupr(surname); // convert string to uppercase
    strcat(name, surname); // append string2 to end of string1 (string1 = string1 + string2)
    strncat(name, surname, 3); // append first n characters of string2 to end of string1 (string1 = string1 + string2)
    strcpy(name, surname); // copy string2 to string1 (string1 = string2)
    strncpy(name, surname, 3); // copy first n characters of string2 to string1 (string1 = string2)
    return 0;
}