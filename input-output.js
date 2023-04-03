// Input Output Quest
// Day 009

/* 
Note for input output
async is what makes the "await" work
to iuse this function in the Terminal
    Right-Click on the file "Open in Intergrated Terminal"
    then type in the Intergrated Terminal "node i" and hit tab
    the tab should have it autofill the file name "node /\input-output.js"
    Hit ENTER
    Now the code is running in the terminal
 */

const readline = require("readline");
//const { workerData } = require("worker_threads")
const computerResponse = require("./changeColors"); // This calls the function from the other JavaScript file - Day 011

const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
    return new Promise((resolve, reject) => {
      readlineInterface.question(questionText, resolve);
    });
  }
  
  async function start() { //when you want the await, it gives a cadence to 
    console.log("This works!!!!");
    let firstName = await ask("What is your name?");
    firstName = correctCasing(firstName);
    //console.log("Inside the Start =", x)
    computerResponse(`Good Morning, ${firstName}`)
  }
  
  start();

const { log } = require("console");
/* 
function computerResponse(string){
let white = "\033[0;39m"
let yellow = "\033[0;33m";

console.log(yellow + string + white)  //Make the sting come out in Yellow text and then reverts everything back to white
}
 */
function correctCasing(word) {
let wordLowerCase = word.toLowerCase().trim();
let capitalized = word.charAt(0).toUpperCase() + wordLowerCase.slice(1);
return capitalized;
}
  /* 
  How to get this program to start.
  1. Right the file > Open Integrated Terminal
  2. Type in the terminal node [name of the file] ex: node input-output.js
  
  How do you exit the program
  1. CTRL - C
  2. End the process with a process.exit() in your code.
  
  SPECIAL NOTE:
  If you make changes to your file and would like to see those changes you MUST CTRL-C or exit the program and restart the program by node [name of the file]
  */
  

