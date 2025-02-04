const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const roundResult = document.querySelector('#round-result');
const score = document.querySelector('#score');
const finalResult = document.querySelector('#final-result');
const playAgainBtn = document.querySelector('#play-again');

let pcScore = 0;
let userScore = 0;
let totalRounds = 5;
let roundsPlayed = 0;

function getComputerChoice() {
    const choices = ["✊", "✋", "✌️"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(pcChoice, humanChoice) {
    if (pcChoice === humanChoice) {
        return "tie";
    } else if (
        (pcChoice === "✊" && humanChoice === "✌️") ||
        (pcChoice === "✌️" && humanChoice === "✋") ||
        (pcChoice === "✋" && humanChoice === "✊")
    ) {
        return "computer";
    } else {
        return "player";
    }
}

function updateUI(pcChoice, humanChoice, roundWinner) {
    roundResult.textContent = `Computer chose: ${pcChoice}, You chose: ${humanChoice}. ${roundWinner === "tie" ? "It's a tie!" : roundWinner === "computer" ? "Computer wins this round!" : "You win this round!"}`;
    score.textContent = `Score: You ${userScore} - ${pcScore} Computer`;
}

function checkGameEnd() {
    if (roundsPlayed === totalRounds) {
        if (userScore > pcScore) {
            finalResult.textContent = "🎉 Congratulations, you won the game! 🎉";
        } else if (pcScore > userScore) {
            finalResult.textContent = "😢 Computer wins the game! Better luck next time.";
        } else {
            finalResult.textContent = "🤝 It's a tie!";
        }
        playAgainBtn.style.display = "block"; // Show the "Play Again" button
    }
}

function resetGame() {
    pcScore = 0;
    userScore = 0;
    roundsPlayed = 0;
    roundResult.textContent = "";
    score.textContent = "";
    finalResult.textContent = "";
    playAgainBtn.style.display = "none"; // Hide the "Play Again" button
}

rock.addEventListener('click', () => handleClick('✊'));
paper.addEventListener('click', () => handleClick('✋'));
scissors.addEventListener('click', () => handleClick('✌️'));

playAgainBtn.addEventListener('click', resetGame);

function handleClick(humanChoice) {
    if (roundsPlayed >= totalRounds) return;

    let pcChoice = getComputerChoice();
    let roundWinner = playRound(pcChoice, humanChoice);

    if (roundWinner === "computer") {
        pcScore++;
    } else if (roundWinner === "player") {
        userScore++;
    }

    roundsPlayed++;
    updateUI(pcChoice, humanChoice, roundWinner);
    checkGameEnd();
}