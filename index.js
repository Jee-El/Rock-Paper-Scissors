function computerPlay() {
    let getRandomNumber = Math.floor(Math.random() * 3);
    let play;
    switch (getRandomNumber) {
        case 0:
            return play = `rock`;
        case 1:
            return play = `paper`;
        case 2:
            return play = `scissors`;
    }
}

let a = 0;
let b = 0;
let you = `You `;
let computer = ` Computer`;
let score = you + a + ` - ` + b + computer;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        score;
        return console.log(`A draw!`);
    }

    if (playerSelection === `rock` && computerSelection === `paper`){
        score = you + a + ` : ` + (++b) + computer;
        return console.log(`You lose! paper beats rock!`);
    }
    if (playerSelection === `paper` && computerSelection === `rock`) {
        score = you + (++a) + ` : ` + b + computer;
        return console.log(`You win! paper beats rock!`);
    }

    if (playerSelection === `scissors` && computerSelection === `rock`) {
        score = you + a + ` : ` + (++b) + computer;
        return console.log(`You lose! rock beats scissors!`);
    }
    if (playerSelection === `rock` && computerSelection === `scissors`) {
        score = you + (++a) + ` : ` + b + computer;
        return console.log(`You win! rock beats scissors!`);
    }
    
    if (playerSelection === `paper` && computerSelection === `scissors`) {
        score = you + a + ` : ` + (++b) + computer;
        return console.log(`You lose! scissors beat paper!`);
    }
    if (playerSelection === `scissors` && computerSelection === `paper`) {
        score = you + (++a) + ` : ` + b + computer;
        return console.log(`You win! scissors beat paper!`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`rock, paper, or scissors?`);
        const computerSelection = computerPlay();
        playRound(playerSelection.toLowerCase(), computerSelection);
    }
    let result = `Final score is : ${score}`;
    if (a < b) {return console.log(`You lost! ${result}`);}
    if (a > b) {return console.log(`You win! ${result}`);}
    if (a == b) {return console.log(`It's a draw! ${result}`);}
}

game();