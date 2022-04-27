// create all elements for the DOM
const mainContainer = document.createElement('div');
const result = document.createElement('div');
const title = document.createElement('h1');
const totalPlays = document.createElement('div');
const playsForPlayer = document.createElement('div');
const iconRockPlayer = document.createElement('div');
const iconPaperPlayer = document.createElement('div');
const iconScissorsPlayer = document.createElement('div');
const playsForComputer = document.createElement('div');
const iconRockComputer = document.createElement('div');
const iconPaperComputer = document.createElement('div');
const iconScissorsComputer = document.createElement('div');
const iconsPlayer = [iconRockPlayer, iconPaperPlayer, iconScissorsPlayer];
const iconsComputer = [iconRockComputer, iconPaperComputer, iconScissorsComputer];
const score = document.createElement('h2');
const subContainer = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const clearBtn = document.createElement('button');
const options = ["rock", "paper", "scissors"];
let computerPlay = () => options[Math.floor(Math.random() * 3)];

// add textual content to some elements
title.textContent = `Try your luck against randomness`;
score.textContent = `Humanity 0 : 0 Computer`;
rockBtn.textContent = `Rock`;
paperBtn.textContent = `Paper`;
scissorsBtn.textContent = `Scissors`;
clearBtn.textContent = `Clear`;

// place some elements into the DOM
document.body.appendChild(mainContainer);
mainContainer.appendChild(subContainer);
mainContainer.insertBefore(result, subContainer);
mainContainer.insertBefore(score, subContainer);
mainContainer.appendChild(clearBtn);
result.appendChild(title);
result.appendChild(totalPlays);
totalPlays.appendChild(playsForPlayer);
totalPlays.appendChild(playsForComputer);
iconsPlayer.forEach((icon) => playsForPlayer.appendChild(icon));
iconsComputer.forEach((icon) => playsForComputer.appendChild(icon));

// add css classes for all elements
mainContainer.classList.add('main-container');
result.classList.add('result');
totalPlays.classList.add('total-plays');
playsForPlayer.classList.add('plays', 'player');
playsForComputer.classList.add('plays', 'computer');

iconRockPlayer.classList.add('icon-rock');
iconPaperPlayer.classList.add('icon-paper');
iconScissorsPlayer.classList.add('icon-scissors');

iconRockComputer.classList.add('icon-rock');
iconPaperComputer.classList.add('icon-paper');
iconScissorsComputer.classList.add('icon-scissors');

score.classList.add('score');
subContainer.classList.add('sub-container');
rockBtn.classList.add('rock');
paperBtn.classList.add('paper');
scissorsBtn.classList.add('scissors');
clearBtn.classList.add('clear');

// initialize score
let playerScore = 0;
let computerScore = 0;

// add buttons to the DOM, assign them an event listener and a type
let buttons = [rockBtn, paperBtn, scissorsBtn];
buttons.forEach((button) => button.setAttribute('type', 'button'));
buttons.forEach((button) => subContainer.appendChild(button));

let getPlayerSelection = (e) => {
    playRound(e.target.getAttribute('class'));
}

buttons.forEach((button) => button.addEventListener('click', getPlayerSelection));

clearBtn.setAttribute('type', 'reset');
clearBtn.addEventListener('click', restartGame);

// display initial score
displayScore(playerScore, computerScore);

// play one round of rock-paper-scissors
function playRound(playerSelection, computerSelection = computerPlay()) {
    if (playerSelection === computerSelection) {
        title.textContent = 'Phew,a tie!';
        console.log(playerSelection, computerSelection);
    }
    
    if (playerSelection === options[0] && computerSelection === options[1]) {
        displayScore(playerScore, ++computerScore);
        title.textContent = "you lost, rock < paper";
        return endGame();
    }
    
    if (playerSelection === options[0] && computerSelection === options[2]) {
        displayScore(++playerScore, computerScore);
        title.textContent = "You won, rock > scissors";
        return endGame();
    }
    
    if (playerSelection === options[1] && computerSelection === options[0]) {
        displayScore(++playerScore, computerScore);
        title.textContent = "You won, paper > rock";
        return endGame()
    }
    
    if (playerSelection === options[1] && computerSelection === options[2]) {
        displayScore(playerScore, ++computerScore);
        title.textContent = "You lost, paper < scissors";
        return endGame()
    }
    
    if (playerSelection === options[2] && computerSelection === options[0]) {
        displayScore(playerScore, ++computerScore);
        title.textContent = "You lost, scissors < rock";
        return endGame();
    }
    
    if (playerSelection === options[2] && computerSelection === options[1]) {
        displayScore(++playerScore, computerScore);
        title.textContent = "You won, scissors > paper";
        return endGame();
    }
}

// display the score
function displayScore(playerScore, computerScore) {
    score.textContent = `You ` + playerScore + ' : ' + computerScore + ` Computer`;
}

// did the game end?
function endGame() {
    if (playerScore === 5) {
        buttons.forEach((button) => button.removeEventListener('click', getPlayerSelection));
        return title.textContent = "Game Over: You won!";
    }
    if (computerScore === 5) {
        buttons.forEach((button) => button.removeEventListener('click', getPlayerSelection));
        return title.textContent = "Game Over: You lost!";
    }
}

// restart game
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    title.textContent = `Try your luck against randomness`;
    displayScore(0, 0);
    buttons.forEach((button) => button.addEventListener('click', getPlayerSelection));
}