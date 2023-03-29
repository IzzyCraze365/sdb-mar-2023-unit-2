// Unit 2 - Day 008
// Functions in JS

/* 
Hoisting:

let and const do not get hoiseted

var will get hoisted and if you access it before it is initialized and assigned you will get an "undefined".
    It will NOT break the code

Functions do get Hoisted

 */
// console.log(firstName); // This breaks the code
let firstName = "John";
console.log(firstName); // "John"


console.log(lastName); // "undefined"
var lastName = "Isabella"
console.log(lastName); // "Isabella"

/* 
SCOPE:
 
Var vs Let
- the introduction of ES6 came the introduction of let and const
- Using Let or Const you can NOT reference a variable before it is initialized.


- when it comes to scope - JS will try to look for the variable in it's current block first, then it will look outwards.

- a variable created in a code block cannot be accessed outside of the block.

- JS has three types of scope Block Scope - Functional Scope - Global Scope

- Var keyword can not have block scope

- //TODO These are interview questions "hoisting" and "scope"

- //! Recommended to use let and const in our gode
- //! Think of Var is Doctor's without boarders

*/

function greeting(){
    console.log("Good Afternoon " +firstName);
}

greeting();

// Looking for the variable in its own block first
function greeting2(){
    let firstName= "Jimbo";
    console.log("Good Afternoon " +firstName);
}
//? What first name will it use?
greeting2(); //"Good Afternoon Jimbo"

//? Do I get John or Jimbo
console.log(firstName); //the console log does not have access to "Jimbo" because it was created inside a function.

function greeting3(){
    firstName= "Betty";
    console.log("Good Afternoon " +firstName);
}
//? What first name will it use?
greeting3(); //"Good Afternoon Betty"
//? Do I get John or Betty
console.log(firstName); // "Betty" //! a function can change something that has been declared outside of its block


function greeting4(firstName){
    console.log("Good Afternoon " +firstName);
}
//? What first name will it use?
greeting4("Barney"); //"Good Afternoon Barney"
//? Do I get John or Betty or Barney
console.log(firstName); // "Betty" //! a function can change something that has been declared outside of its block


//INTERVIEW QUESTION

var x = 12

function varTest(){
    var x = 33;
    if (1==1){
        var x = 45;
        console.log(x); //45?
    }
    console.log(x); // 33 or 45???  Answer 45
}

console.log(x); // 12?
varTest();

// VAR test 2
function varTest2() {
    if (1 == 1) {
      var y = 200;
    }
    console.log(y);
  }
  
  varTest2();
  

// LET TEST
let A = 12
function letTest(){
    let A = 33;
    if (1==1){
        let A = 45;
        console.log(A); //45
    }
    console.log(A); // 33 or 45???  Answer 33 //! you cannot redeclare a let within a block
}

console.log(A); // 12
letTest();