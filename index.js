let playerScore = 0;
let computerScore = 0;

addListenersToButtons();

function game(button) {
  playRound(button.innerText, computerPlay());
  document.querySelector(".score-count-player").innerText = `You: ${playerScore}`;
  document.querySelector(".score-count-computer").innerText = `Computer: ${computerScore}`;

  const winningText = document.createElement("h3");
  const resultsArea = document.querySelector(".results-area");

  if (playerScore === 5) {
    winningText.innerText = `You are the ultimate winner!`;
    winningText.setAttribute("class", "win-text win");
    resultsArea.appendChild(winningText);
    const playAgaingButton = document.createElement("button");
    playAgaingButton.innerText = "Play Again";
    playAgaingButton.setAttribute("class", "play-again-button");
    const buttonArea = document.querySelector(".container");
    buttonArea.innerHTML = "";
    playAgaingButton.addEventListener("click", startNewGame);
    buttonArea.appendChild(playAgaingButton);
  } else if (computerScore === 5) {
    winningText.innerText = `The computer has won the game...`;
    winningText.setAttribute("class", "win-text lose");
    resultsArea.appendChild(winningText);
    const playAgaingButton = document.createElement("button");
    playAgaingButton.innerText = "Play Again";
    playAgaingButton.setAttribute("class", "play-again-button");
    const buttonArea = document.querySelector(".container");
    buttonArea.innerHTML = "";
    playAgaingButton.addEventListener("click", startNewGame);
    buttonArea.appendChild(playAgaingButton);
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

function startNewGame() {
  document.querySelector(".container").innerHTML = `<div class="container">
    <div class="card">
      <img src="./assets/images/rock.jpg">
      <p class="card-title">Rock</p>
    </div>
    <div class="card">
      <img src="./assets/images/paper.jpg">
      <p class="card-title">Paper</p>
    </div>
    <div class="card">
      <img src="./assets/images/scissors.jpg">
      <p class="card-title">Scissors</p>
    </div>
  </div>`;
  addListenersToButtons();
  playerScore = 0;
  computerScore = 0;
  document.querySelector(".score-count-player").innerText = `You: ${playerScore}`;
  document.querySelector(".score-count-computer").innerText = `Computer: ${computerScore}`;
  document.querySelector(".results").innerText = "";
  const winText = document.querySelector(".win-text");
  document.querySelector(".results-area").removeChild(winText);
}

function addListenersToButtons() {
  const playButtons = document.querySelectorAll(".card");
  playButtons.forEach(button => button.addEventListener("click", () => game(button)));
}
