// Unit 2 - Day 007
// Playing with Numbers

/* 
CONDITIONALS:
- We use conditionals when a decision needs to be made.
- The conditions need to either be truthy or falsey 
- Tools we have available for decision making are the following
    - if statements
*/

// ? Create an if statement for the condition using a 24hr clock if it's before 12pm console.log ("good morning")

let currentHour = 3;

// console.log(currentHour < 12);
/* 
1. keyword - "if" to start the if statement
2. conditional - must result in a truth 
*/
// (1)  (2)
if (currentHour < 12) {
  // inbetween the brackets is considered a block of code
  // this block of code will be executed if the conditional is true.
  console.log("Good Morning (if)");
}

// ! Example of if - else statement

if (currentHour < 12) {
  console.log("Good Morning (if-else)");
} else {
  console.log("Good Afternoon (if-else)");
}

// ! Example of if -else if - else statements
// ? If the hours are between 12-5pm  the greeting should be "Good Afternoon" and if it's between 5-12am the greeting should be "Good Evening"

if (currentHour < 12) {
  console.log("Good Morning (if-else-if)");
} else if (currentHour < 17) {
  console.log("Good Afternoon (if-else-if)");
} else {
  console.log("Good Evening (if-else-if)");
}

// TODO Ticket Prices Mini-Challenge
// ? Write a conditional based on age will store in a variable the price of the movie ticket;
// Child Price = 5 (age 10) 10 or younger
// Adult Price = 10
// Senior Price = 8  age(age 55)

let age = 10;
let priceOfTicket = 0;

// If statements...
if (age <= 10) {
  priceOfTicket = 5;
  console.log("AGE", age + "// Price", priceOfTicket); // TEST
  //return priceOfTicket = 5; //returning is wrong
} else if (age >= 55) {
  priceOfTicket = 8;
  console.log("AGE", age + "// Price", priceOfTicket); // TEST
} else {
  priceOfTicket = 10;
  console.log("AGE", age + "// Price", priceOfTicket); // TEST
}
//console.log("hi"); // TEST
console.log(
  "Since you are",
  age,
  "years old, the price of your movie ticket is $" + priceOfTicket
);
// console.log(priceOfTicket)

// ! Rob's Code
// Addon Challenge:
// Add a military discount to seniors and adult tickets discount of 1 dollar off
let age = 18;
let priceOfTicket = 0;
let isMilitaryMember = true;

// If statements...
if (age <= 10) {
  priceOfTicket = 5;
} else if (age >= 55) {
  priceOfTicket = 8;
  isMilitaryMember === true
    ? (priceOfTicket = priceOfTicket - 1)
    : (priceOfTicket = priceOfTicket);
} else {
  priceOfTicket = 10;
  isMilitaryMember === true
    ? (priceOfTicket = priceOfTicket - 1)
    : (priceOfTicket = priceOfTicket);
}
console.log("Price of the ticket is: $" + priceOfTicket);

// ! Turnaries

/* 
1. Conditional that will result in a true or flase
2. Add a (?) and what is on the right side side of the questionmark up to the colin is what will happen if true
3. Code for the True statement
4. Truth and False divider (the :)
5. Code for the False statement
       (1)                (2)         (3)                       (4)             (5)
 isMilitaryMember === true ? (priceOfTicket = priceOfTicket - 1) :(priceOfTicket = priceOfTicket);
*/

// TODO Time Mini-Challenge
// ? Write an if else statement to determin if the current seconds are odd or even.
// ? If it's even console log "The current second is 22 and it is even"
// ? If it's odd console log "The current second is 23 and it is odd"

// ! BONUS: See if you can create a turnary to solve this...
//Google w3 schools for Get Seconds

//Prints the Seconds on the Clock of the Computer
// I do NOT understand how this works
const d = new Date();
let seconds = d.getSeconds();
console.log("Time in seconds =", seconds); // TEST

//IF - ELSE statements
if (seconds % 2 === 0) {
  console.log(
    "The current second is",
    seconds,
    "and it is even! \nSolved with an If-Else statement."
  );
  //return priceOfTicket = 5; //returning is wrong
} else {
  console.log(
    "The current second is",
    seconds,
    "and it is odd! \nSolved with an If-Else statement."
  );
}

// Turnary statement
seconds % 2 === 0
  ? console.log(
      "The current second is",
      seconds,
      "and it is even! \nSolved with a Turnary statement."
    )
  : console.log(
      "The current second is",
      seconds,
      "and it is odd!\nSolved with a Turnary statement."
    );
