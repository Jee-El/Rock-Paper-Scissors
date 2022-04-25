// create all elements for the DOM
const mainContainer = document.createElement('div');
const result = document.createElement('h1');
const score = document.createElement('h2');
const subContainer = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const clearBtn = document.createElement('button');
const options = ["rock", "paper", "scissors"];
let computerPlay = () => options[Math.floor(Math.random() * 3)];

// place some elements into the DOM
document.body.appendChild(mainContainer);
mainContainer.appendChild(subContainer);
mainContainer.insertBefore(result, subContainer);
mainContainer.insertBefore(score, subContainer);
mainContainer.appendChild(clearBtn);

// add css classes for all elements
mainContainer.classList.add('main-container');
result.classList.add('result');
score.classList.add('score');
subContainer.classList.add('sub-container');
rockBtn.classList.add('rock');
paperBtn.classList.add('paper');
scissorsBtn.classList.add('scissors');
clearBtn.classList.add('clear');

// add textual content to some elements
result.textContent = `Try your luck against randomness`;
score.textContent = `Humanity 0 : 0 Computer`;
rockBtn.textContent = `Rock`;
paperBtn.textContent = `Paper`;
scissorsBtn.textContent = `Scissors`;
clearBtn.textContent = `Clear`;

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
    if (playerSelection === computerSelection) return result.textContent = 'Phew,a tie!';
    
    if (playerSelection === options[0] && computerSelection === options[1]) {
        displayScore(playerScore, ++computerScore);
        return endGame() || (result.textContent = "you lost, rock < paper");
    }
    
    if (playerSelection === options[0] && computerSelection === options[2]) {
        displayScore(++playerScore, computerScore);
        return endGame() || (result.textContent = "You won, rock > scissors");
    }
    
    if (playerSelection === options[1] && computerSelection === options[0]) {
        displayScore(++playerScore, computerScore);
        return endGame() || (result.textContent = "You won, paper > rock");
    }
    
    if (playerSelection === options[1] && computerSelection === options[2]) {
        displayScore(playerScore, ++computerScore);
        return endGame() || (result.textContent = "You lost, paper < scissors");
    }
    
    if (playerSelection === options[2] && computerSelection === options[0]) {
        displayScore(playerScore, ++computerScore);
        return endGame() || (result.textContent = "You lost, scissors < rock");
    }
    
    if (playerSelection === options[2] && computerSelection === options[1]) {
        displayScore(++playerScore, computerScore);
        return endGame() || (result.textContent = "You won, scissors > paper");
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
        return result.textContent = "Game Over: You won!";
    }
    if (computerScore === 5) {
        buttons.forEach((button) => button.removeEventListener('click', getPlayerSelection));
        return result.textContent = "Game Over: You lost!";
    }
}

// restart game
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    result.textContent = `Try your luck against randomness`;
    displayScore(0, 0);
}