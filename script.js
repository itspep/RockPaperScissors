class RockPaperScissorsGame {
    constructor() {
        this.choices = ["✊", "✋", "✌️"];
        this.pcScore = 0;
        this.userScore = 0;
        this.totalRounds = 5;
        this.roundsPlayed = 0;

        // UI elements
        this.rockBtn = document.querySelector('#rock');
        this.paperBtn = document.querySelector('#paper');
        this.scissorsBtn = document.querySelector('#scissors');
        this.roundResult = document.querySelector('#round-result');
        this.scoreDisplay = document.querySelector('#score');
        this.finalResult = document.querySelector('#final-result');
        this.playAgainBtn = document.querySelector('#play-again');

        // Event Listeners
        this.rockBtn.addEventListener('click', () => this.play('✊'));
        this.paperBtn.addEventListener('click', () => this.play('✋'));
        this.scissorsBtn.addEventListener('click', () => this.play('✌️'));
        this.playAgainBtn.addEventListener('click', () => this.reset());
    }

    getComputerChoice() {
        const index = Math.floor(Math.random() * this.choices.length);
        return this.choices[index];
    }

    playRound(pc, user) {
        if (pc === user) return "tie";

        const winConditions = {
            "✊": "✌️",
            "✌️": "✋",
            "✋": "✊"
        };

        return winConditions[pc] === user ? "computer" : "player";
    }

    updateUI(pcChoice, humanChoice, winner) {
        this.roundResult.textContent = `Computer chose: ${pcChoice}, You chose: ${humanChoice}. ${
            winner === "tie" ? "It's a tie!" :
            winner === "computer" ? "Computer wins this round!" :
            "You win this round!"
        }`;

        this.scoreDisplay.textContent = `Score: You ${this.userScore} - ${this.pcScore} Computer`;
    }

    checkGameEnd() {
        if (this.roundsPlayed === this.totalRounds) {
            if (this.userScore > this.pcScore) {
                this.finalResult.textContent = "🎉 Congratulations, you won the game! 🎉";
            } else if (this.pcScore > this.userScore) {
                this.finalResult.textContent = "😢 Computer wins the game! Better luck next time.";
            } else {
                this.finalResult.textContent = "🤝 It's a tie!";
            }

            this.playAgainBtn.style.display = "block";
        }
    }

    reset() {
        this.pcScore = 0;
        this.userScore = 0;
        this.roundsPlayed = 0;

        this.roundResult.textContent = "";
        this.scoreDisplay.textContent = "";
        this.finalResult.textContent = "";
        this.playAgainBtn.style.display = "none";
    }

    play(userChoice) {
        if (this.roundsPlayed >= this.totalRounds) return;

        const pcChoice = this.getComputerChoice();
        const winner = this.playRound(pcChoice, userChoice);

        if (winner === "player") this.userScore++;
        if (winner === "computer") this.pcScore++;

        this.roundsPlayed++;
        this.updateUI(pcChoice, userChoice, winner);
        this.checkGameEnd();
    }
}

// Initialize the game
const rpsGame = new RockPaperScissorsGame();
