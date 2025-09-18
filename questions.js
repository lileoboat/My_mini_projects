const prompt = require('prompt-sync')();

console.log("Welcome tp my Quiz");
let correctAnswers = 0;
const totalQuestions = 3;

const ans1 = prompt("What is the basic unit of life?: ");
const correctAns1 = "cell";

if (ans1.trim().toLowerCase() === correctAns1) {
    console.log("Correct");
    correctAnswers++;
}else {
    console.log("Incorrect");
}

const ans2 = prompt("What is the brain of the computer?: ");
const correctAns2 = "cpu";

if (ans2.trim().toLowerCase() === correctAns2) {
    console.log("Correct"); 
    correctAnswers++;   
}else {
    console.log("Incorrect");
}

const ans3 = prompt("What is the Capital of Ghana?: ");
const correctAns3 = "accra";

if (ans3.trim().toLowerCase() === correctAns3) {
    console.log("Correct");
    correctAnswers++;
}else {
    console.log("Incorrect");    
}
console.log(`Great you got ${correctAnswers} out of 3`);
console.log(`Your score is ${Math.round(correctAnswers/totalQuestions * 100)}%`);


