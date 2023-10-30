#include <stdio.h>
#include <math.h>

int main() {
    /*
    Hypotenuse Calculator Program = Calculate the hypotenuse of a right triangle when the user enters the lengths of the other two sides. 
    */
   
   double A;
    double B;
    double C;
    printf("Enter the length of side A: ");
    scanf("%lf", &A);
    printf("Enter the length of side B: ");
    scanf("%lf", &B);
    // C = sqrt(A^2 + B^2); 
    // sqrt = square root function in math.h library
    C = sqrt((A * A) + (B * B));
    printf("The length of the hypotenuse is: %lf", C);
    return 0;
}