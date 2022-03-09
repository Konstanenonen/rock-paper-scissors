
//Randomly eturn either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
  // add random int from 0-2 to a variable
  const randomIndex = Math.round(Math.random()*2);
  // make array that contains strings "Rock" "Paper" and "Scissors"
  const options = ["Rock", "Paper", "Scissors"];
  // return array[randomIndex]
  return options[randomIndex];
}


// sanitize userInput (firstletter capital)
// create winning pairs object
// compare player's choice to computer's choice
// if their are the same return tie
// if their are the same return tie
  // if not check from winning pairs object did the player win the computer
    // if player wins return win
    // if player loses return lose
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.split('')[0].toUpperCase() + 
  playerSelection.split('').slice(1).join('').toLowerCase();
  let winningPairs = {
    "Rock": "Scissors",
    "Paper": "Rock",
    "Scissors": "Paper",
  }
  if (playerSelection === computerSelection) {
    console.log(`It's a tie! ${playerSelection} ties with ${computerSelection}`);
    return 0;
  } else if (winningPairs[playerSelection] === computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return -1;
  }
}

// Make a variable that keeps count is the player winning
// Make a loop that spins 5 times
  // play a game of rock-paper-scissors inside the loop
  // the game will return 1, 0, or -1 depending if the player won
  // add the return value to win count variable
// if (win count is positive)
  // report that the player won the whole game
// if (win count is negative)
  // report that the player lost the game
// else
  // report a tie
function game() {
  let winningCount = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper, or Scissors");
    winningCount += playRound(playerSelection, computerPlay());
  }

  if (winningCount > 0) {
    console.log("Awesome! You won the Computer for good!");
  } else if (winningCount < 0) {
    console.log("Oh no! The Computer was the ultimate winner this time...");
  } else {
    console.log("In the end it is a tie... Not bad!");
  }
}

game();