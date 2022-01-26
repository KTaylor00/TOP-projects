"use strict";
// alert(
//   "You will be playing a best of 5 game of Rock, Paper and Scissors against the computer"
// );

const computerPlay = function () {
  const game = ["Rock", "Paper", "Scissors"];
  const random = game[Math.floor(Math.random() * game.length)];
  return random;
};

function playRound(playerSelection, computerSelection) {
  const player =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  const computer = computerSelection;

  if (player === "Rock" && computer === "Scissors") {
    return `You Win! ${player} beats ${computer}`;
  } else if (computer === "Rock" && player === "Scissors") {
    return `You lose! ${computer} beats ${player}`;
  } else if (player === "Paper" && computer === "Rock") {
    return `You Win! ${player} beats ${computer}`;
  } else if (computer === "Paper" && player === "Rock") {
    return `You lose! ${computer} beats ${player}`;
  } else if (player === "Scissors" && computer === "Paper") {
    return `You Win! ${player} beats ${computer}`;
  } else if (computer === "Scissors" && player === "Paper") {
    return `You lose! ${computer} beats ${player}`;
  } else {
    return `It's a draw!`;
  }
}

function game() {}

const computerSelection = computerPlay();
