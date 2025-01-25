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
