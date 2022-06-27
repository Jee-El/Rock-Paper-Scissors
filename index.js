// create all elements for the DOM
const body = document.querySelector(`body`);
const mainContainer = document.createElement(`div`);
const result = document.createElement(`div`);
const title = document.createElement(`h1`);
const totalPlays = document.createElement(`div`);
const playsForPlayer = document.createElement(`div`);
const iconRockPlayer = document.createElement(`div`);
const iconPaperPlayer = document.createElement(`div`);
const iconScissorsPlayer = document.createElement(`div`);
const playsForComputer = document.createElement(`div`);
const iconRockComputer = document.createElement(`div`);
const iconPaperComputer = document.createElement(`div`);
const iconScissorsComputer = document.createElement(`div`);
const score = document.createElement(`h2`);
const buttons = document.createElement(`div`);
const rockBtn = document.createElement(`button`);
const paperBtn = document.createElement(`button`);
const scissorsBtn = document.createElement(`button`);
const clearBtn = document.createElement(`button`);
const note = document.createElement(`p`);
const footer = document.createElement(`footer`);
const footerText = document.createElement(`a`);
const githubIcon = document.createElement(`i`);

const tieResponses = [`Phew, a tie!`, `A tie, good save!`, `You tied, lucky!`];
const winResponses = [
	`Great! You win`,
	`Another win, nice one!`,
	`Well done!`,
	`Goodjob! One more win left`,
];
const lossResponses = [
	`You lose, unlucky :(`,
	`You lose. Good try, though`,
	`Another loss, close one!`,
	`You lose, last chance!`,
];
const iconsPlayer = [iconRockPlayer, iconPaperPlayer, iconScissorsPlayer];
const iconsComputer = [
	iconRockComputer,
	iconPaperComputer,
	iconScissorsComputer,
];
const playButtons = [rockBtn, paperBtn, scissorsBtn];
const keyCodes = {
	82: `rock`,
	80: `paper`,
	83: `scissors`,
};
const options = [`rock`, `paper`, `scissors`];

let computerPlay = () => options[Math.floor(Math.random() * 3)];
let playerScore = 0;
let computerScore = 0;
let i = 0;

// Add text to the elements
title.textContent = `You think you can win?`;
rockBtn.textContent = `Rock`;
paperBtn.textContent = `Paper`;
scissorsBtn.textContent = `Scissors`;
clearBtn.textContent = `Restart`;
note.textContent = `Press R on your (physical) keyboard to play Rock. 'P' & 'S' also work.`;
footerText.textContent = `By Jee-El `;
footerText.href = `https://github.com/Jee-El/Rock-Paper-Scissors`;

// Style elements
body.style.cssText = `position: relative;
    background-color: #071E3D;
    min-height: 100vh;
    width: 100%`;

title.style.maxWidth = `350px`;
title.style.padding = `0.4rem 0.8rem`;

iconsPlayer.forEach((icon) => {
	icon.style.cssText = `color: #21E6C1;
        font-size: 2rem`;
});
iconsComputer.forEach((icon) => {
	icon.style.cssText = `color: #21E6C1;
        font-size: 2rem`;
});

note.style.cssText = `color: #21E6C1;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08rem;
    margin-top: 2rem;
    opacity: 0.55;
    max-width: 321px;
    text-align: center;
    width: 75%`;

footer.style.cssText = `align-items: center;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: center;
    position: absolute;
    width: 100%;
    box-shadow: 0 -0.5px 3px #278EA5`;

footerText.style.cssText = `color: #21E6C1;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: capitalize`;

githubIcon.style.cssText = `color: #21E6C1;
    font-size: 0.9rem`;

// add css classes for all elements
mainContainer.classList.add(`main-container`);
result.classList.add(`result`);
totalPlays.classList.add(`total-plays`);
playsForPlayer.classList.add(`plays`, `player`);
playsForComputer.classList.add(`plays`, `computer`);
githubIcon.classList.add(`icon-github`);

iconRockPlayer.classList.add(`icon-rock`);
iconPaperPlayer.classList.add(`icon-paper`);
iconScissorsPlayer.classList.add(`icon-scissors`);

iconRockComputer.classList.add(`icon-rock`);
iconPaperComputer.classList.add(`icon-paper`);
iconScissorsComputer.classList.add(`icon-scissors`);

score.classList.add(`score`);
buttons.classList.add(`buttons`);
rockBtn.classList.add(`rock`);
paperBtn.classList.add(`paper`);
scissorsBtn.classList.add(`scissors`);
clearBtn.classList.add(`clear`);

// place some elements into the DOM
body.appendChild(mainContainer);
mainContainer.appendChild(result);
result.appendChild(title);
result.appendChild(totalPlays);
totalPlays.appendChild(playsForPlayer);
totalPlays.appendChild(playsForComputer);
iconsPlayer.forEach((icon) => {
	playsForPlayer.appendChild(icon);
	icon.style.transform = `scaleX(-1)`;
});
iconsComputer.forEach((icon) => playsForComputer.appendChild(icon));
mainContainer.appendChild(score);
mainContainer.appendChild(buttons);
mainContainer.appendChild(note);
mainContainer.appendChild(footer);
footer.appendChild(footerText);
footerText.appendChild(githubIcon);
playButtons.forEach((playButton) => {
	playButton.setAttribute(`type`, `button`);
	buttons.appendChild(playButton);
});

clearBtn.setAttribute(`type`, `reset`);
buttons.appendChild(clearBtn);

// Event listeners
playButtons.forEach((playButton) =>
	playButton.addEventListener(`click`, getPlayerInputViaClick)
);
document.addEventListener(`keydown`, getPlayerInputViaKeys);
clearBtn.addEventListener(`click`, restartGame);

// Default behavior (on load)
displayScore(playerScore, computerScore);
hideNonPlaysIcons();
showPlaysIcons();

function getPlayerInputViaClick(e) {
	playRound(e.target.classList[0]);
}
function getPlayerInputViaKeys(e) {
	if (e.keyCode in keyCodes) {
		playButtons.forEach((playButton) => playButton.classList.remove(`hover`));
		playRound(keyCodes[e.keyCode]);
		document
			.querySelector(`button.${keyCodes[e.keyCode]}`)
			.classList.add(`hover`);
	}
}
// show the icons of the chosen plays
function showPlaysIcons(player = 0, computer = 0) {
	iconsPlayer[player].style.display = `flex`;
	iconsComputer[computer].style.display = `flex`;
}
// hide the rest of icons
function hideNonPlaysIcons() {
	iconsPlayer.forEach((icon) => (icon.style.display = `none`));
	iconsComputer.forEach((icon) => (icon.style.display = `none`));
}
// play one round of rock-paper-scissors
function playRound(playerSelection, computerSelection = computerPlay()) {
	hideNonPlaysIcons();
	showPlaysIcons(
		options.indexOf(playerSelection),
		options.indexOf(computerSelection)
	);
	if (playerSelection === computerSelection) {
		title.textContent = tieResponses[Math.floor(Math.random() * 3)];
	} else if (
		(playerSelection === options[0] && computerSelection === options[2]) ||
		(playerSelection === options[1] && computerSelection === options[0]) ||
		(playerSelection === options[2] && computerSelection === options[1])
	) {
		title.textContent = winResponses[playerScore];
		displayScore(++playerScore, computerScore);
	} else {
		title.textContent = lossResponses[computerScore];
		displayScore(playerScore, ++computerScore);
	}
	endGame();
}
// display the score
function displayScore(playerScore, computerScore) {
	score.textContent = playerScore + ` : ` + computerScore;
}
// check if the game ended
function endGame() {
	if (playerScore !== 5 && computerScore !== 5) return;

	playButtons.forEach((playButton) =>
		playButton.removeEventListener(`click`, getPlayerInputViaClick)
	);
	document.removeEventListener(`keydown`, getPlayerInputViaKeys);

	title.style.borderRadius = `4px`;
	title.style.boxShadow = `0px 0px 2px 0.5px #278EA5`;
	title.textContent = `Game Over : You ${playerScore === 5 ? 'won' : 'lost'}!`;
}
// restart game
function restartGame() {
	playerScore = 0;
	computerScore = 0;
	title.textContent = `You think you can win?`;
	title.style.boxShadow = `none`;
	displayScore(0, 0);
	hideNonPlaysIcons();
	showPlaysIcons();
	playButtons.forEach((playButton) =>
		playButton.addEventListener(`click`, getPlayerInputViaClick)
	);
	document.addEventListener(`keydown`, getPlayerInputViaKeys);
}
