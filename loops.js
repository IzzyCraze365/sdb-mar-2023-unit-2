// Unit 2 - Day 007
// Loops

/* 
LOOPS:
Loops offer us a quick and easy way of doing something repeatedly.

There are many kinds of loops
- For statement
- While loop
*/

// ! DANGER: There is a danger of being stuck in an infinite loop
/*
semicolons are mandatory for loops
most of the time variable "i" is used "iteration"
remember:
    i++ === i=i+1
*/

/*
1: Set the variable before the loop starts (initializes variable)
2: Conditional - run the loop until the statement is false
3: Counter - setting up the counter to add to the variable you set up in (1)
*/
//      (1)     (2)   (3)
for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}

// How to display individual characters of a string using a loop

let word = "bootcamp";
console.log(word.charAt(0));

for (let i = 0; i <= 8; i++) {
  console.log(word.charAt(i));
}

// Dynamic loop that goes throug each letter no matter how long the word is
let word2 = "indianapolas";

for (let i = 0; i <= word2.length; i++) {
  console.log(word2.charAt(i));
}

// TODO Make a Pyramid using a loop.
// Create a variable to hold the symbol of the (#)
// create a variable to tell the loop how tall you want it
// Inside the loop we want to

/* 
#
##
###
####
######
*/

let name = "John"; // Pick the Name of the Pyramid
let height = 5; // How tall is the Pyramid?
let brick = "#"; // What design would you like for the bricks

console.log(
  "Welcome to the Pyramid of",
  name + "! \n A Grand Pyramid that is",
  height,
  "rows tall!"
);

for (let i = 0; i <= height; i++) {
  console.log(brick.repeat(i));
}
for (let i = height; i >= 0; i--) {
  console.log(brick.repeat(i));
}

// TODO Rob's Pyramid version

let name = "John"; // Pick the Name of the Pyramid
let height = 10; // How tall is the Pyramid?
let brick = "#"; // What design would you like for the bricks

console.log(
  "Welcome to the Pyramid of",
  name + "! \n A Grand Pyramid that is",
  height,
  "rows tall!"
);

for (let i = 0; i <= height; i++) {
  if (i <= height / 2) {
    console.log(brick.repeat(i));
  } else {
    let backDown = height - i;
    console.log(brick.repeat(backDown));
  }
}

// TODO John's Better Pyramid
let name = "John"; // Pick the Name of the Pyramid
let height = 5; // How tall is the Pyramid?
let brick = "#"; // What design would you like for the bricks

console.log(
  "Welcome to the Pyramid of", name + "! \n A Grand Pyramid that is", height,"rows tall!");

for (let i = 0; i <= height; i++) {
  console.log(" ".repeat(height-i),brick.repeat(i*2));
}

// ! WHILE Loops
//Loops that will continue as long as the condition is true

let i = 0;

while (i < 10) {
  console.log(i);
  i++; //be sure to make a way to break the while loop otherwise the code will run to infinity
}
