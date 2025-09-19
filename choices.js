const prompt = require('prompt-sync')();

const answer = prompt('Would you like to play the game: (yes/no)');
if (answer.trim().toLowerCase() === 'yes') {
    console.log('Great! lets play the game');

    const answer1 = prompt('You are at a cross road, where do you want to go? (left/right): ');
    if (answer1.trim().toLowerCase() === 'right') {
        console.log("You took the right direction and you can continue the game");

        const answer2 = prompt("You came toa lake and there is an island. Do you use a boat or swim across?: (boat/swim)");
        if (answer2.trim().toLowerCase() === 'boat') {
            console.log("You have reached the island safe. You won the game");            
        }

        else {
            console.log("You tried to swim across and you were eaten by an alligator. You are dead");
        }
    } 
    else {
        console.log("You took the wrong direction and you are dead");
    }
}
else {
    console.log('Maybe next time!');
}