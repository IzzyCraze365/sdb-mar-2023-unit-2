// Unit 2 - Day 006

// 3 ways to declare variables [var, let, or const]
// JavaScript ends with a semicolin (however they are optional)

// prettier-ignore
var          firstName        =      "Rob";
//(1)           (2)          (3)      (4)

/*
1. JS keyword denotes the creation of the varibale (var, let, or const)
2. The name of the varibale that the developer will referencein order to use the value
that is stored
3. Assignment Operator
4. Initial Value it gets set to.
*/

console.log("firstName", firstName); //the 'PRINT' feature
//The 'Play' button at the top of this terminal will execute the code, it also says how long it takes the code to process.

//! JS variables are CASE SENSITIVE

// console.log("firstName", FirstName)  // code breaks, casing matters

// ? Reassignment of a variable
// No need of a [var, let, or const] because the variable has already been declared.
//Only the variable name followed by an = you can reassign the value.

//! using var and let you CAN reassign however using const you CANNOT

firstName = "John";
console.log("firstName", firstName);

// CONST example

const pi = 3.14;

pi = 4.2; // error cannot reassign a const


// ? Can you declare a variable without assigning it?
var lastName;
console.log("lastName", lastName); //variable is 'undefined'

lastName = "Smith";
console.log("lastName", lastName);

// Naming your variables is important.  Stay away from single letters.

// 60 * 60 * 24 (pretend these are variables = they mean nothing)
let seconds = 60;
let minutes = 60;
let hours = 24;
let totalSeconds = seconds * minutes * hours;
console.log("Number of Seconds in a Day = ", totalSeconds);

// ? Create variable used to store a current temp, and console.log the current temp.

let currentTemp = 39;
console.log("Current Temp = ", currentTemp);