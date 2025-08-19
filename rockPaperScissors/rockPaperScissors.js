
function getComputerChoice(max) {
    max = 3;
    let a = Math.floor(Math.random() * max);
    let computerChoice;

    if (a === 0) {
        computerChoice = "rock";
    } else if (a === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    return prompt("rock or paper or scissors : ");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    // console.log("you: " + humanChoice);
    // console.log("robot: " + computerChoice);

    let win;
    if (humanChoice === computerChoice) {
        win = "tie";
    } else {
        if (humanChoice == "ROCK" && computerChoice !== "ROCK") {
            if (computerChoice == "PAPER") {
                win = false;
            } else {
                win = true;
            }
        } else if (humanChoice == "PAPER" && computerChoice !== "PAPER") {
            if (computerChoice == "ROCK") {
                win = true;
            } else {
                win = false;
            }
        } else if (humanChoice == "SCISSORS" && computerChoice !== "SCISSORS") {
            if (computerChoice == "PAPER") {
                win = true;
            } else {
                win = false;
            }
        }
    }

    return win;
}


let rock = document.querySelector("rock");
let paper = document.querySelector("paper");
let scissors = document.querySelector("scissors");

let continuePlaying = true;
let humanScore = 0;
let computerScore = 0;
let winnerMessage = "";

const buttons = document.querySelectorAll("button");
buttons.forEach(item => {
    const humanChoice = item.className;
    item.addEventListener("click", () => {
        if (continuePlaying) {
            let win = playRound(humanChoice, getComputerChoice());
            winMessage(win);
            if (humanScore == 5 || computerScore == 5) {
                continuePlaying = false;
                // console.log("game over bye bye");
                determineWinner(humanScore, computerScore);
                displayWinner.textContent = winnerMessage + " game over bye bye";
            }
        }
        })
    }
);


function determineWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        winnerMessage= "YOU WIN THE GAME AAAAA";
    } else {
        winnerMessage = "oof. never show your face here again.";
    }
}

let resultsMessage = "";

function winMessage(win) {
    if (win == "tie") {
        // console.log("it's a tie. how boring");
        resultsMessage = "it's a tie. how boring";
    } else if (win) {
        // console.log("winner winner");
        resultsMessage = "winner winner";
        humanScore++;
        humanScoreText.textContent = "your score: " + humanScore;
    } else {
        // console.log("you smelly loser you're a freak");
        resultsMessage = "you smelly loser you're a freak";
        computerScore++;
        computerScoreText.textContent = "computer score: " + computerScore;
    }
    results.textContent = resultsMessage;
    // console.log("human score: " + humanScore);
    // console.log("computer score: " + computerScore);
}

const container = document.querySelector("body");
const results = document.createElement("div");
const scoreContainer = document.querySelector("body");
const humanScoreText = document.createElement("div");
const computerScoreText = document.createElement("div");
const displayWinner = document.createElement("div");

container.appendChild(results);
scoreContainer.appendChild(humanScoreText);
scoreContainer.appendChild(computerScoreText);
scoreContainer.appendChild(displayWinner);

results.textContent = "game start !! good luck everybuddy";
humanScoreText.textContent = "your score: " + humanScore;
computerScoreText.textContent = "computer score: " + computerScore;





