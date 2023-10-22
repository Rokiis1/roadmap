// Examples

let age = 20;

if (age >= 18) {
    // This block is executed if age is 18 or older
    console.log("You are an adult");
} else {
    // This block is executed if age is less than 18
    console.log("You are a minor");
}

let isSunny = true;
let isWarm = true;

if (isSunny && isWarm) {
    console.log("It's a perfect day for a picnic!");
} else {
    console.log("Maybe another day.");
}

let isEmployed = true;
let isStudent = false;
let hasWorkPermit = true;

if ((isEmployed || isStudent) && hasWorkPermit) {
    console.log("You are eligible for part-time work.");
} else {
    console.log("You do not meet the eligibility criteria for part-time work.");
}
