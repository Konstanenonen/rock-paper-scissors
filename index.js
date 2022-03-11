let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const playButtons = document.querySelectorAll("button");
playButtons.forEach(button => button.addEventListener("click", () => game(button)));

function game(button) {
  playRound(button.innerText, computerPlay());
  document.querySelector(".score-count").innerText = `Your score: ${playerScore} Computer score: ${computerScore}`;

  const winningText = document.createElement("h2");
  const resultsArea = document.querySelector(".results-area");

  if (playerScore === 5 && !gameOver) {
    winningText.innerText = `You have defeated the computer!`;
    winningText.setAttribute("class", "win-text win");
    resultsArea.appendChild(winningText);
    gameOver = true;
  } else if (computerScore === 5 && !gameOver) {
    winningText.innerText = `Oh no! The computer bested you this time.`;
    winningText.setAttribute("class", "win-text lose");
    resultsArea.appendChild(winningText);
    gameOver = true;
  } else if (gameOver) {
    const childToBeRemoved = document.querySelector(".win-text");
    resultsArea.removeChild(childToBeRemoved);
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".score-count").innerText = `Your score: ${playerScore} Computer score: ${computerScore}`;
    document.querySelector(".results").innerText = "";
    gameOver = false;
  }
}

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
