
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

    console.log("you: " + humanChoice);
    console.log("robot: " + computerChoice);

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


const buttons = document.querySelectorAll("button");
buttons.forEach(item => {
    const humanChoice = item.className;
    item.addEventListener("click", () => {
        let win = playRound(humanChoice, getComputerChoice());
        winMessage(win);
        });
    }
);

function winMessage(win) {
    if (win == "tie") {
        console.log("it's a tie. how boring");
    } else if (win) {
        console.log("winner winner");
    } else {
        console.log("wow embarassing");
    }
}

// rock.addEventListener("click")




// let win = playRound(getHumanChoice(), getComputerChoice());




// PLAY FIVE ROUNDS
// let humanScore = 0;
// let computerScore = 0;

// for (let i = 0; i < 5; i++) {
//     let win = playRound(getHumanChoice(), getComputerChoice(3));

//     if (win == "tie") {
//     } else if (win == false) {
//         console.log();
//         computerScore++;
//     } else if (win == true) {
//         humanScore++;
//     }
// }

// console.log("your score: " + humanScore);
// console.log("computer score: " + computerScore);

// if (humanScore > computerScore) {console.log("yaaaay winner");}
// else if (humanScore < computerScore) {console.log("you smelly loser you're a freak");}
// else {console.log("it's a tie");}



