"use strict";

alert(
  "You will be playing a best of 5 game of Rock, Paper and Scissors against the computer, highest score wins!\nGood Luck!!:D"
);

const computerPlay = function () {
  const game = ["Rock", "Paper", "Scissors"];
  const random = game[Math.floor(Math.random() * game.length)];
  return random;
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  const player =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  const computer = computerSelection;

  if (player === "Rock" && computer === "Scissors") {
    playerScore++;
    return `You Win! ${player} beats ${computer}`;
  } else if (computer === "Rock" && player === "Scissors") {
    computerScore++;
    return `You lose! ${computer} beats ${player}`;
  } else if (player === "Paper" && computer === "Rock") {
    playerScore++;
    return `You Win! ${player} beats ${computer}`;
  } else if (computer === "Paper" && player === "Rock") {
    computerScore++;
    return `You lose! ${computer} beats ${player}`;
  } else if (player === "Scissors" && computer === "Paper") {
    playerScore++;
    return `You Win! ${player} beats ${computer}`;
  } else if (computer === "Scissors" && player === "Paper") {
    computerScore++;
    return `You lose! ${computer} beats ${player}`;
  } else {
    return `No points scored!`;
  }
}

function game() {
  let i = 1;
  while (i < 6) {
    const playerSelection = prompt(`Round ${[i++]}: \nRock, Paper, Scissors`);
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
  }
  alert(`Player Score = ${playerScore} \nComputer Score = ${computerScore}`);

  if (computerScore > playerScore) {
    alert(`Computer Wins!`);
  } else if (computerScore > playerScore) {
    alert(`Player Wins!`);
  } else {
    alert(`It's a draw!`);
  }
}

game();
