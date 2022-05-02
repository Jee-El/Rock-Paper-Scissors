// create all elements for the DOM
const body = document.querySelector('body');
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
        const score = document.createElement('h2');
        const buttons = document.createElement('div');
            const rockBtn = document.createElement('button');
            const paperBtn = document.createElement('button');
            const scissorsBtn = document.createElement('button');
            const clearBtn = document.createElement('button');
    const footer = document.createElement('footer');
        const footerText = document.createElement('a');
            const githubIcon = document.createElement('i');

const tieResponses = ["Phew, a tie!", 
                    "A tie, good save!",
                    "You tied, lucky!"];
const winResponses = ["Great! You win",
                    "Another win, nice one!",
                    "Well done!",
                    "Goodjob! One more win left"];
const lossResponses = ["You lose, unlucky :(",
                    "You lose. Good try though!",
                    "Another loss, close one",
                    "You lose, last chance!"];

const iconsPlayer = [iconRockPlayer, iconPaperPlayer, iconScissorsPlayer];
const iconsComputer = [iconRockComputer, iconPaperComputer, iconScissorsComputer];
const options = ["rock", "paper", "scissors"];
let computerPlay = () => options[Math.floor(Math.random() * 3)];


// add textual content to some elements
title.textContent = `You think you can win?`;
rockBtn.textContent = `Rock`;
paperBtn.textContent = `Paper`;
scissorsBtn.textContent = `Scissors`;
clearBtn.textContent = `Restart`;
footerText.textContent = `By Jee-El `;
footerText.href = "https://github.com/Jee-El/Rock-Paper-Scissors";

// style body and icons
body.style.cssText = "position: relative; background-color: #071E3D; min-height: 100vh; width: 100%";

title.style.maxWidth = "350px";
title.style.padding = "0.4rem 0.8rem";

iconsPlayer.forEach((icon) => {
    icon.style.cssText = "color: #21E6C1; font-size: 2rem";
})
iconsComputer.forEach((icon) => {
    icon.style.cssText = "color: #21E6C1; font-size: 2rem";
})

footer.style.cssText = "align-items: center; bottom: 0; display: flex; height: 50px; justify-content: center; position: absolute; width: 100%; box-shadow: 0 -0.5px 3px #278EA5";
footerText.style.cssText = "color: #21E6C1; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.1rem; text-decoration: none; text-transform: capitalize";
githubIcon.style.cssText = "color: #21E6C1; font-size: 0.9rem";


// place some elements into the DOM
body.appendChild(mainContainer);
mainContainer.appendChild(result);
mainContainer.appendChild(score);
mainContainer.appendChild(buttons);
mainContainer.appendChild(footer);
result.appendChild(title);
result.appendChild(totalPlays);
totalPlays.appendChild(playsForPlayer);
totalPlays.appendChild(playsForComputer);
iconsPlayer.forEach((icon) => {
    playsForPlayer.appendChild(icon);
    icon.style.transform = "scaleX(-1)";
});
iconsComputer.forEach((icon) => playsForComputer.appendChild(icon));
footer.appendChild(footerText);
footerText.appendChild(githubIcon);


// add css classes for all elements
mainContainer.classList.add('main-container');
result.classList.add('result');
totalPlays.classList.add('total-plays');
playsForPlayer.classList.add('plays', 'player');
playsForComputer.classList.add('plays', 'computer');
githubIcon.classList.add('icon-github');
hideNonPlaysIcons();
showPlaysIcons();

iconRockPlayer.classList.add('icon-rock');
iconPaperPlayer.classList.add('icon-paper');
iconScissorsPlayer.classList.add('icon-scissors');

iconRockComputer.classList.add('icon-rock');
iconPaperComputer.classList.add('icon-paper');
iconScissorsComputer.classList.add('icon-scissors');

score.classList.add('score');
buttons.classList.add('buttons');
rockBtn.classList.add('rock');
paperBtn.classList.add('paper');
scissorsBtn.classList.add('scissors');
clearBtn.classList.add('clear');


// add buttons to the DOM, assign them an event listener and a type
let playButtons = [rockBtn, paperBtn, scissorsBtn];
playButtons.forEach((playButton) => playButton.setAttribute('type', 'button'));
clearBtn.setAttribute('type', 'reset');

playButtons.forEach((playButton) => buttons.appendChild(playButton));
buttons.appendChild(clearBtn);

let getPlayerSelection = (e) => {
    playRound(e.target.getAttribute('class'));
}

playButtons.forEach((playButton) => playButton.addEventListener('click', getPlayerSelection));
clearBtn.addEventListener('click', restartGame);


// show the icons of the chosen plays
function showPlaysIcons(player = 0, computer = 0) {
    iconsPlayer[player].style.display = "flex";
    iconsComputer[computer].style.display = "flex";
}


// hide the rest of icons
function hideNonPlaysIcons() {
    iconsPlayer.forEach((icon) => icon.style.display = "none");
    iconsComputer.forEach((icon) => icon.style.display = "none");
}


// display initial score
let playerScore = 0;
let computerScore = 0;
displayScore(playerScore, computerScore);


// play one round of rock-paper-scissors
function playRound(playerSelection, computerSelection = computerPlay()) {
    if (playerSelection === computerSelection) {
        title.textContent = tieResponses[Math.floor(Math.random() * 3)];
        hideNonPlaysIcons();
        showPlaysIcons(options.indexOf(playerSelection), options.indexOf(computerSelection));
    }
    
    if (playerSelection === options[0] && computerSelection === options[1]) {
        title.textContent = lossResponses[computerScore];
        displayScore(playerScore, ++computerScore);
        hideNonPlaysIcons();
        showPlaysIcons(0, 1);
        endGame();
        return;
    }
    
    if (playerSelection === options[0] && computerSelection === options[2]) {
        title.textContent = winResponses[playerScore];
        displayScore(++playerScore, computerScore);
        hideNonPlaysIcons();
        showPlaysIcons(0, 2);
        endGame();
        return;
    }
    
    if (playerSelection === options[1] && computerSelection === options[0]) {
        title.textContent = winResponses[playerScore];
        displayScore(++playerScore, computerScore);
        hideNonPlaysIcons();
        showPlaysIcons(1, 0);
        endGame();
        return;
    }
    
    if (playerSelection === options[1] && computerSelection === options[2]) {
        title.textContent = lossResponses[computerScore];
        displayScore(playerScore, ++computerScore);
        hideNonPlaysIcons();
        showPlaysIcons(1, 2);
        endGame();
        return;
    }
    
    if (playerSelection === options[2] && computerSelection === options[0]) {
        title.textContent = lossResponses[computerScore];
        displayScore(playerScore, ++computerScore);
        hideNonPlaysIcons();
        showPlaysIcons(2, 0);
        endGame();
        return;
    }
    
    if (playerSelection === options[2] && computerSelection === options[1]) {
        title.textContent = winResponses[playerScore];
        displayScore(++playerScore, computerScore);
        hideNonPlaysIcons();
        showPlaysIcons(2, 1);
        endGame();
        return;
    }
}


// display the score
function displayScore(playerScore, computerScore) {
    score.textContent = playerScore + " : "+ computerScore;
}

// check if the game ended
function endGame() {
    if (playerScore === 5 || computerScore === 5) {
        playButtons.forEach((playButton) => playButton.removeEventListener('click', getPlayerSelection));
        title.style.borderRadius = "4px";
        title.style.boxShadow = "0px 0px 2px 0.5px #278EA5";
    }
    if (playerScore === 5) {
        title.textContent = "Game Over : You won!";
        return;
    }
    if (computerScore === 5) {
        title.textContent = "Game Over : You lost!";
        return;
    }
}


// restart game
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    title.textContent = `You think you can win?`;
    title.style.boxShadow = "none";
    displayScore(0, 0);
    hideNonPlaysIcons();
    showPlaysIcons();
    playButtons.forEach((playButton) => playButton.addEventListener('click', getPlayerSelection));
}