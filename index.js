let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const playButtons = document.querySelectorAll(".card");
playButtons.forEach(button => button.addEventListener("click", () => game(button)));

function game(button) {
  playRound(button.innerText, computerPlay());
  document.querySelector(".score-count-player").innerText = `You: ${playerScore}`;
  document.querySelector(".score-count-computer").innerText = `Computer: ${computerScore}`;

  const winningText = document.createElement("h3");
  const resultsArea = document.querySelector(".results-area");

  if (playerScore === 5 && !gameOver) {
    winningText.innerText = `You are the ultimate winner!`;
    winningText.setAttribute("class", "win-text win");
    resultsArea.appendChild(winningText);
    gameOver = true;
  } else if (computerScore === 5 && !gameOver) {
    winningText.innerText = `The computer has won the game...`;
    winningText.setAttribute("class", "win-text lose");
    resultsArea.appendChild(winningText);
    gameOver = true;
  } else if (gameOver) {
    const childToBeRemoved = document.querySelector(".win-text");
    resultsArea.removeChild(childToBeRemoved);
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".score-count-player").innerText = `You: ${playerScore}`;
  document.querySelector(".score-count-computer").innerText = `Computer: ${computerScore}`;
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
    resultsArea.style = "color: black;";
  } else if (winningPairs[playerSelection] === computerSelection) {
    resultsArea.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    resultsArea.style = "color: green;";
    playerScore++;
  } else {
    resultsArea.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    resultsArea.style = "color: red;";
    computerScore++;
  }
}
