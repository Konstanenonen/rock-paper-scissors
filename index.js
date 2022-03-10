let playerScore = 0;
let computerScore = 0;

const playButtons = document.querySelectorAll("button");
playButtons.forEach(button => button.addEventListener("click", () => {
  playRound(button.innerText, computerPlay());
  document.querySelector(".score-count").innerText = `Your score: ${playerScore} Computer score: ${computerScore}`;

  if (playerScore === 5) {
    const winningText = document.createElement("h2");
    winningText.innerText = `You have defeated the computer!`;
    document.querySelector(".results-area").appendChild(winningText);
  } else if (computerScore === 5) {
    const winningText = document.createElement("h2");
    winningText.innerText = `Oh no! The computer bested you this time.`;
    document.querySelector(".results-area").appendChild(winningText);
  }
}));

function computerPlay() {
  const randomIndex = Math.round(Math.random() * 2);
  const options = ["Rock", "Paper", "Scissors"];
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  let winningPairs = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  const resultsArea = document.querySelector(".results");

  if (playerSelection === computerSelection) {
    resultsArea.innerText = `It's a tie! ${playerSelection} ties with ${computerSelection}`;
  } else if (winningPairs[playerSelection] === computerSelection) {
    resultsArea.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    resultsArea.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
}
