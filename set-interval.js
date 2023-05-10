// Week 8 Day 038
// Extra Lesson - Timers

// setInterval is a method that calls a function at specific intervals
// Each second equates to 1000ms
// setInterval (function, how many seconds do you want to wait between function calls)
// You will want to assign a variable to the setInterval so you can clear the timer and stop it from running.
// clearInterval(id of timer)

let count = 0

function countUp(){
    count++
    console.log(count);
    if(count ===5){
        clearInterval(timer1); // This wipes the slate clear, stopes the timer and sets it back to 0
    }
}

// setInterval will return an ID for the timer
let timer1 = setInterval(countUp, 1000); // this number is miliseconds

setTimeout(()=>console.log(count), 7000); // waits until 7 seconds