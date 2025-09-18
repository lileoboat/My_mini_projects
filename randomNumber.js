const prompt = require('prompt-sync')(); 

const target = Math.floor(Math.random() * 100);
let guesses = 0;

while (true) {
    guesses++;
    const guess = Number(prompt("Enter a number from 1 to 100: "));
    if (guess > target) {
        console.log("Guess is too high");
    }
    else if (guess < target) {
        console.log("Guess is too low");
    } else {
        console.log("You guessed it right");
        break;
    }
}

console.log(`You took ${guesses} guesses`);


