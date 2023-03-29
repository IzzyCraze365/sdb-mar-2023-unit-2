// Unit 2 - Day 008
// Functions in JS

/* 
Functions:

- Functions provide a block of code that will only run once it is 'called' upon
- It starts with a keyword function followed by the name you give your function.
- Functions do NOT need to have arguments/parameters
- Functions do NOT need to return a value howver they often do

 */
/* 
1. keyword "function"
2. Function Name
3. inside the ()'s you have arguments
 */

// (1)     (2)   (3)
function example1(){
    //any code inside here will be executed when the function is 'called'
    console.log("Example 1 Function Was Excecuted");
}
// You must call the function for it to be executed
example1();


/* 
Functions with Parametersor Arguments
1. keyword "function"
2. Function Name
3. inside the ()'s we can have unlimited parameter all seperated by a comma
3.5 it can get confusing so try to break that up
 */

function example2(param1, param2){ //param1 & param2 are variables that only exist in the function, they do not need to be declared
    console.log("Example 2 function was executed")
    console.log("Param1:",param1);
    console.log("Param2:",param2);
}

example2(10, 5); //direct corrolation to the variables in the function
example2("John", "Isabella");



//Function that returns
function sumTwoNumbers(number1, number2){
    let total = number1+number2;
    return total;
}
let sum1 = sumTwoNumbers(10,5);
let sum2 = sumTwoNumbers(20,45);
console.log(sum1, sum2);

// TAXES Example
function calculateTax(cost, taxPercentage) {
    let totalTax = cost * taxPercentage;
    return +totalTax.toFixed(2); // .toFixed returns a string, adding the (+) returns a number
  }
  
  let shoppingCartTotal = 21.99;
  let checkoutTax = calculateTax(shoppingCartTotal, 0.08);
  let checkoutTotal = sumTwoNumbers(shoppingCartTotal, checkoutTax);
  console.log(checkoutTotal);
  
  //! VOLUME MINI-CHALLENGE
  // ? Write a function that will take 3 arguements (length, width, height) 
  // ? Function should return the volume of the Cubiod;
function volumeCube(length, width, height) {
    let volume = length * width *height;
    return volume;
  }
let volume1 = volumeCube(2,3,4)
console.log(volume1);

//! AGE CONVERTER MINI-CHALLENGE
// ? Write a function that will accept a dog's age and returns a human age.
// ? Humage Age  = (Dog age -2) x 4 + 21

function ageConverter(dogAge) {
    let age = (dogAge-2)*4 + 21;
    return age;
  }
let humanAge = ageConverter(6);
console.log(humanAge);

let johnDogAge = ageConverter(2);
//console.log(johnDogAge);
let ashleeDogAge = ageConverter(1.8);
//console.log(ashleeDogAge);
let isaacDogAge = ageConverter(11);
//console.log(isaacDogAge);
[johnDogAge, ashleeDogAge, isaacDogAge].map((x =>console.log(x))); // Trcik to console log lots of lines in a row