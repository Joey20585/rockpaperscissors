let computerChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomNumber];
}

function getHumanChoice() {
    let validChoices = ["rock", "paper", "scissors"];
    let userInput = prompt("Enter your choice: rock, paper, or scissors:");
    while (!validChoices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:");
    }
    return userInput;
}

let scores = {
    human: 0,
    computer: 0
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        scores.human++;
        return "Player wins!";
    } else {
        scores.computer++;
        return "Computer wins!";
    }
}

function playGame() {
    scores.human = 0;
    scores.computer = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1}: ${result} (Human chose ${humanSelection}, Computer chose ${computerSelection})`);
    }

    console.log(`Final Score - Human: ${scores.human}, Computer: ${scores.computer}`);
    if (scores.human > scores.computer) {
        console.log("Human wins the game!");
    } else if (scores.human < scores.computer) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();
