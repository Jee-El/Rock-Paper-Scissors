// responses for the player
const negativeResponses = [`Close one! nt`, `Are you gonna keep losing or what?`, `Come on dude don't disappoint us`, `Last chance, you'd better win!`, `Bruh you're throwing this game`];
const positiveResponses = [`Good start!`, `Another win nice!`, `One more win remaining, Keep it up!`, `Sheesh you are too good`];

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

// add buttons to the DOM, assign them an event listener and a type
let buttons = [rockBtn, paperBtn, scissorsBtn];
buttons.forEach((button) => button.setAttribute('type', 'button'));
buttons.forEach((button) => subContainer.appendChild(button));
buttons.forEach((button) => button.addEventListener('click', () => {
    playRound(button.getAttribute('class'));
}));
clearBtn.setAttribute('type', 'reset');
clearBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    result.textContent = `Try your luck against randomness`;
    displayScore(0, 0);
})

// initialize score
let playerScore = 0;
let computerScore = 0;

// display & update the score
function displayScore(playerScore, computerScore) {
    score.textContent = `Humanity ` + playerScore + ' : ' + computerScore + ` Computer`;
}
displayScore(playerScore, computerScore);

// play one round of rock-paper-scissors
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerScore === 5 || computerScore === 5) {
        return result.textContent = `too ez for you :D`;
    }
    
    if (playerSelection === computerSelection) return result.textContent = 'Phew,a tie!';
    
    if (playerSelection === options[0] && computerSelection === options[1]) {
        displayScore(playerScore, ++computerScore);
        return result.textContent = negativeResponses[i];
    }
    
    if (playerSelection === options[0] && computerSelection === options[2]) {
        displayScore(++playerScore, computerScore);
        return result.textContent = positiveResponses[j];
    }
    
    if (playerSelection === options[1] && computerSelection === options[0]) {
        displayScore(++playerScore, computerScore);
        return result.textContent = positiveResponses[j];
    }
    
    if (playerSelection === options[1] && computerSelection === options[2]) {
        displayScore(playerScore, ++computerScore);
        return result.textContent = negativeResponses[i];
    }
    
    if (playerSelection === options[2] && computerSelection === options[0]) {
        displayScore(playerScore, ++computerScore);
        return result.textContent = negativeResponses[i];
    }
    
    if (playerSelection === options[2] && computerSelection === options[1]) {
        displayScore(++playerScore, computerScore);
        return result.textContent = positiveResponses[j];
    }
}

function restartGame() {

}