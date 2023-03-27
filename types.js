// Unit 2 - Day 006

/* 
Types - Data Types
- Strings
-Numbers
- Boolean
 */

/* 
STRINGS:
- datatypes used to repesent text and they are wrapped in single quotes, double quotes or backticks
 */

let stringOne = "double quotes";
// prettier-ignore"
let stringTwo = 'single quotes'

let stringThree = `backtick quotes`;

// Combining Strings

let greeting = "Good Morning";

let firstName = "Rob";
//! PROBLEM: Morning and Rob does not have a space
console.log(greeting + firstName);

// Solution
console.log(greeting + " "+ firstName);
let fullGreeting = `${greeting} ${firstName}`

console.log(fullgreeting); //EXPECTED VALUE: gOOD mORNING rOB

//! if you want to know what TYPE the Variable is you can use the keyword typeof

console.log(typeof firstName);

let ship = "titanic";
ship.toUpperCase();
console.log(ship);
console.log(ship.toUpperCase());

// To determine the size of the string use the .length method

let animal = "horse";
console.log(animal.length); // Prints "5"

//Accessing the first letter, it is zero based when it is in a string
console.log(animal[1]); // Prints "o" -starts counting at character #0
console.log(animal[0]); // Prints "h"

//Trim gets ride of empty spaces
let textData = "          Hello     " //10 spaces on left, 5 on right
console.log(textData);
console.log(textData.trim());

// Add a new line to a sentence \n
let newLineString = "I went to the store yesterday. \n I bought eggs and milk";
console.log(newLineString);

//! NUMBERS

let currentTemp = 38; //this is a number

console.log(typeof currentTemp);

let funkyNumber = 0.2 + 0.1;
console.log(funkyNumber); // Prints "0.30000000000000004" decimals are weird in programs

let add1 = 2 + 1;
console.log(add1);

let totalMoney = (1999+1599)/100; // You can go decimals by dividing my 100 to get accurate results
console.log(totalMoney);

//! Be Careful of mismatching Strings and Numbers

let myAge = "42"; // this is a STRING
let friendAge = 34; // this is a NUMBER

console.log(myAge + friendAge); //prints "4234"
console.log(Number(myAge) + friendAge); //prints "76" converted the string to a number
//parseInt(myAge)
// Add a (+) before the string variable
console.log(+myAge + friendAge); //prints "76" converted the string to a number

let stringNumber = "23";
let stringExample = "abcd";
console.log(stringNumber +2); // prints "232" since + can be used to push strings together
console.log(stringNumber -2); // "21" treats the string as a number because their is only 1 purpose for subtraction (-)
console.log(stringNumber *2); // "46" treats the string as a number because their is only 1 purpose for multipilcation (*)
console.log(stringNumber /2); // "11.5" treats the string as a number because their is only 1 purpose for division (/)
console.log(stringExample / 2); // "NaN" is returned "Not a Number"

// ! Number Operators
/* 
Adding Numbers use (+)
Subtracting Numbers use (-)
Multiplying Numbers use (*)
Dividing Numbers use (/)

Special Ones
Exponents use (**)
Modulus (AKA: The Remainder) (%)
 */
//3^3
console.log(3**3); //prints "27"
// 27 / 10 = 2 Remainder 7
console.log(27 % 10); //prints "7" divides 21 by 10, and there is 1 left over

// ? How can I tell if a number is even?
console.log("odd", 33 % 2); // Reaminder "1" if there is a remainder the number is ODD
console.log("even", 32 % 2); // Reaminder "0" if there is NO remainder the number is EVEN

// ? How do I take what I had before and add to it
let totalPrice = 0;
console.log(totalPrice);
let item1 = 5;
totalPrice = totalPrice + item1;
// totalPrice += item1; //Same as the line above just shorter syntax
console.log(totalPrice);
let item2 = 10;
totalPrice = totalPrice + item2;
// totalPrice += item2; //Same as the line above just shorter syntax
console.log(totalPrice);

//! BOOLEANS
// Booleans only have two possible values (true or false)
let isOver21 = true; //usual syntax is to have Booleans start with "is"
let isCloudy = false;

console.log(typeof isCloudy); // "boolean"