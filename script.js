function getComputerChoice() {
    let pcChoice = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
    if (pcChoice === 1) return "rock";
    if (pcChoice === 2) return "paper";
    return "scissors";
}

function getHumanChoice() {
    let validChoices = ["rock", "paper", "scissors"];
    let humanChoice;

    do {
        humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
        if (humanChoice === null) {
            console.log("Game canceled!");
            return null; // Exit if user cancels
        }
        humanChoice = humanChoice.toLowerCase();
    } while (!validChoices.includes(humanChoice));

    return humanChoice;
}

function playRound(pcChoice, humanChoice) {
    console.log(`Computer chose: ${pcChoice}`);
    console.log(`You chose: ${humanChoice}`);

    if (pcChoice === humanChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (pcChoice === "rock" && humanChoice === "scissors") ||
        (pcChoice === "scissors" && humanChoice === "paper") ||
        (pcChoice === "paper" && humanChoice === "rock")
    ) {
        console.log("Computer wins this round!");
        return "computer";
    } else {
        console.log("You win this round!");
        return "player";
    }
}

function playGame() {
    console.log("Welcome to Rock, Paper, Scissors!");
    let pcScore = 0;
    let userScore = 0;
    let totalRounds = 5;

    for (let round = 1; round <= totalRounds; round++) {
        console.log(`\nRound ${round}`);
        let pcChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        // Exit if user cancels
        if (humanChoice === null) break;

        let roundWinner = playRound(pcChoice, humanChoice);
        if (roundWinner === "computer") {
            pcScore++;
        } else if (roundWinner === "player") {
            userScore++;
        }

        console.log(`Score: You ${userScore} - ${pcScore} Computer`);
    }

    console.log("\nFinal Results:");
    if (userScore > pcScore) {
        console.log("Congratulations, you won the game!");
    } else if (pcScore > userScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("It's a tie!");
    }
}
playGame();
