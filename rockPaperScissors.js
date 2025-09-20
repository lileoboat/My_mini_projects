// Game State
let scores = {
    player: 0,
    computer: 0,
    ties: 0
};

// Get the computers choice
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Now lets determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }

    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') 
        ) {
            return 'player';
        }
    return 'computer';
}

// Now leks update the UI
function updateUI(playerChoice, computerChoice, result) {
    // Update choice display
    document.getElementById('player-choice').textContent = playerChoice.toupperCase();
    document.getElemnetById('computer-choice').textContent = computerChoice.toupperCase();

    // Update result message
    const resultElement = document.getElementById('result');
    resultElement.textContent = result === 'tie' ? 'its a tie' : result === 'player' ? 'you win' : 'computer wins';

    // Update scores
    document.getElementById('player-score').textContent = scores.player;
    document.getElementById('computer-score').textContent = scores.computer;
    document.getElementById('ties-score').textContent = scores.ties;

    // Add some visual feedback
    resultElement.style.backgroundColor = result === 'tie' ? '#ffeb3b' : result === 'player' ? '#4caf50' : '#f44336';
}

// Main game 
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Update scores
    if (result === 'player') {
        scores.player++;
    }
    else if (result === 'computer') {
        scores.computer++;
    }
    else {
        scores.ties++;
    }

    updateUI(playerChoice, computerChoice, result);
}

//Reset game
function resetGame() {
    scores = {
        player: 0,
        computer: 0,
        ties: 0
    };

    document.getElementById('player-choice').textContent = '-';
    document.getElementById('computer-choice').textContent = '-';
    document.getElementById('result').textContent = 'Make your choice!';
    document.getElementById('result').style.backgroundColor = '';
    document.getElementById('player-score').textContent = '0';
    document.getElementById('computer-score').textContent = '0';
    document.getElementById('ties-score').textContent = '0';
}

// Add a keyboard support
document.addEventListener('keydown', function(event) {
    switch(event.key.toLowerCase()) {
        case 'r':
            playGame('rock');
            break;
        case 'p':
            playGame('paper');
            break;
        case 's':
            playGame('scissors');
            break;
        case '':
            resetGame();
            break;
    };
})