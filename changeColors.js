//Class 011
//linked to input-output.js

let x = "TEST";
function computerResponse(string) {
  let white = "\033[0;39m";
  let yellow = "\033[0;33m";
  console.log("inside computer response", x);
  console.log(yellow + string + white);
}

module.exports = computerResponse;

computerResponse("Hello John");