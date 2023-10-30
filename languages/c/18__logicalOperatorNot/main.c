#include <stdio.h>

int main() {
    /*
    logical operator ! = NOT = reverses the result, true becomes false, false becomes true
    */
   float money = 1000;
    float price = 500;
    // So this !(money > price) means that if the money is not greater than the price, then you can't buy the product
    if(!(money > price)) {
        // if the money is not greater than the price, then you can't buy the product
        printf("You can't buy the product\n");
    } else {
        // if the money is greater than the price, then you can buy the product
        printf("You can buy the product\n");
    }
    return 0;
}