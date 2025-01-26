function getComputerChoice() {
    let pcChoice = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3

    if (pcChoice === 1) {
        return "rock";
    } else if (pcChoice === 2) {
        return "paper";
    } else if (pcChoice === 3) {
        return "scissors";
    }
}




function getHumanChoice(){
    let humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
    // Convert the input to lowercase for comparison
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === "rock"){
        return "rock";
    }else if (humanChoice === "paper"){
        return "paper";
    }else if (humanChoice === "scissors"){
        return "scissors";
    }
}


//console.log(getHumanChoice());

let pcScore = 0;
let userScore = 0;
let total = 0;

function playRound(pcChoice, humanChoice) {
    if (pcChoice === "rock" && humanChoice === "rock") {
        console.log("You both played Rock. It's a tie!");
    } else if (pcChoice === "rock" && humanChoice === "paper") {
        console.log("You played Paper, Computer played Rock. You win!");
        userScore++;
    } else if (pcChoice === "rock" && humanChoice === "scissors") {
        console.log("You played Scissors, Computer played Rock. Computer wins!");
        pcScore++;
    } else if (pcChoice === "paper" && humanChoice === "rock") {
        console.log("You played Rock, Computer played Paper. Computer wins!");
        pcScore++;
    } else if (pcChoice === "paper" && humanChoice === "paper") {
        console.log("You both played Paper. It's a tie!");
    } else if (pcChoice === "paper" && humanChoice === "scissors") {
        console.log("You played Scissors, Computer played Paper. You win!");
        userScore++;
    } else if (pcChoice === "scissors" && humanChoice === "rock") {
        console.log("You played Rock, Computer played Scissors. You win!");
        userScore++;
    } else if (pcChoice === "scissors" && humanChoice === "paper") {
        console.log("You played Paper, Computer played Scissors. Computer wins!");
        pcScore++;
    } else if (pcChoice === "scissors" && humanChoice === "scissors") {
        console.log("You both played Scissors. It's a tie!");
    } else {
        console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
    }
}

function playgame(){
    console.log("Welcome to the Game");
    do{
        let pcChoice = getComputerChoice();
        let userChoice = getHumanChoice();

                // Ensure the user enters a valid choice
                if (humanChoice === null) {
                    continue; // Skip to the next iteration for invalid input
                }
                
        playRound(pcChoice, userChoice);
        total++;
    }while(total <5);
    if(pcScore > userScore){
        console.log("PC won!");
    }else{
        console.log("You won!");
    }
}
