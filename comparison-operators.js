// Unit 2 - Day 006

//Comparison Operators
/* 
Equal
double equal (==)
triple equal (===) - equal value and equal type

Not Equal
(!=)
(!==) - not equal value not equal in type

For Numbers (Greater than , less than , etc)
 (>) - greater than
 (<) - less than
 (>=) - greater than or equal to
 (<=) - less than or equal to

 
 Logical Operators
  && - "and" statement
  || - "or" statement (they are above the enter key on keyboard)


*/


let helicopter1 = "blackHawk";
let helicopter2 = "Blackhawk";

//returns a boolean
console.log("Helicopters are the same? == ", helicopter1 == helicopter2); //false
console.log("Helicopters are the same? == ", helicopter1.toUpperCase == helicopter2.toUpperCase); //true
console.log("Helicopters are the same? === ", helicopter1.toUpperCase === helicopter2.toUpperCase); //true

//Equal To
let myAge = 42;
let friendAge = "42";
console.log("My age double == ", myAge == friendAge); //true even though its a string and a number
console.log("My age triple === ", myAge === friendAge); //false needs to be same value AND the same value

// NOT Equal To
let name1 = "Robin";
let name2 = "Batman";
console.log(name1 != name2); // "true" Robin is NOT Batman

console.log("Not Age ", myAge != friendAge); //"false" same value
console.log("Not Age ", myAge !== friendAge); //"true" because one is a string and the other is a number

let num1 = 10;
let num2 = 5;
console.log(num1>num2); // "true"

//Greater Than
let joiningMilitaryAge = 18;
let maxJoiningMilitaryAge= 34;
let bethAge = 17;
let hankAge = 38;

console.log("Can Beth join the military? ", bethAge>=joiningMilitaryAge); //false
console.log("Can Hank join the military? ", hankAge>=joiningMilitaryAge); //true
console.log("Can Hank join the military? ", hankAge>=joiningMilitaryAge && hankAge<=maxJoiningMilitaryAge); //false


let person1Permissions = "admin";
let person2Permissions = "user";
let person3Permissions = "guest";

let isViewableAdmin = 
    person1Permissions === "admin" || person2Permissions === "user";
console.log("isViewableAdmin ", isViewableAdmin); //true

// ? Mini Challenge
// Create a variable called  isEven1 and isEven2
// the variable will be true if the value is even
// false if it is odd
// test it out with 33, 122

let isEven1 = 33;
let isEven2 = 122;
let mysteryNumber = 0;


let isEven1Even = isEven1 % 2;
let isEven2Even = isEven2 % 2;
let isMysteryNumberEven = mysteryNumber % 2;

console.log("Is", isEven1 + " is an even number? ", isEven1Even===0);
console.log("Is", isEven2 + " is an even number? ", isEven2Even===0);
console.log("Is", mysteryNumber + " is an even number? ", isMysteryNumberEven===0);

/* 
Rob's code for the Mini-Challenge
let isEven1 = 33 % 2 === 0;
let isEven2 = 122 % 2 === 0;

console.log(isEven1);
console.log(isEven2);
 */