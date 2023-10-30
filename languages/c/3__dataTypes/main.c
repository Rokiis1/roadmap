#include <stdio.h>
// stdbool.h is a header file in the C standard library to  define the bool, true and false macros. This header file is included in the C++ standard library as well, but the macros it defines only have meaning in C.
#include <stdbool.h>

int main() {
    /*
    data types = int, float, double, char, bool (true/false)

    */
    
    char letter = 'A'; // single character %c
    char name[] = "Rokas"; // array of characters %s

    float pi = 3.14; // 4 bytes (32 bits of precision) 6 - 7 decimal places %f
    double pi2 = 3.141592653589793238462643383279502884197169399375105820974944592307816406286; // 8 bytes (64 bits of precision) 15 - 16 decimal places %lf
    
    bool isTrue = true; // 1 byte (8 bits) %d
    char f = 100;  // 1 byte (-128 to +127) %d or %c
    unsigned char g = 200; // 1 byte (0 to +255) %d or %c
    short h = 30000; // 2 bytes (-32,768 to +32,767) %d
    unsigned short i = 60000; // 2 bytes (0 to +65,535) %d
    int j = 1000000000; // 4 bytes (-2,147,483,648 to +2,147,483,647) %d
    unsigned int k = 4000000000; // 4 bytes (0 to +4,294,967,295) %u
    long long n = 92233732312432423U; // 8 bytes (-9 quintillion to +9 quintillion) %lld
    unsigned long long o = 92233732312432423U; // 8 bytes (0 to +18 quintillion) %llu

    printf("letter: %c\n", letter); // char
    printf("name: %s\n", name); // string
    printf("pi: %f\n", pi); // float
    printf("pi: %0.15f\n", pi); // float with 15 decimal places
    printf("pi2: %lf\n", pi2); // double
    printf("pi2: %0.15lf\n", pi2); // double with 15 decimal places
    printf("isTrue: %d\n", isTrue); // bool
    printf("int: %d\n", j); // int
    
    return 0;
}