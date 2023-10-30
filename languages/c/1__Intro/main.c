// .exe in c gcc helloWorld.c

// This is a preprocessor directive which tells the compiler to include the contents of stdio.h (standard input output header file) before compiling the program
#include<stdio.h>

int main()

// This a comment
/*
 This 
 is 
 a 
 multi 
 line 
 comment
*/

/*  escape sequences = characters that are difficult to enter in a string literal or character constant
    \n - new line
    \t - tab
    \b - backspace
    \r - carriage return
    \f - form feed
    \\ - backslash
    \' - single quote
    \" - double quote
    \? - question mark
    \0 - null character

*/

{

    // printf() is a function to print something on the screen
    printf("Hello World");
    // /n is used to print a new line
    printf("Hello\n World\n");
    // /t is used to print a tab
    printf("Hello\t World\t");
    // combine of /n and /t
    printf("1\t2\t3\n4\t5\t6\n7\t8\t9\n");
    // / is used to print a double quote
    printf("\"Hello World\" - Rokas");
    // \\ is used to print a backslash
    printf("\\Hello World\\ - Rokas");
    // ' is used to print a single quote
    printf("\'Hello World\' - Rokas");
    // return 0 means program executed successfully
    return 0;
}

