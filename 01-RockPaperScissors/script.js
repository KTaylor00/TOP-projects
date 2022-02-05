"use strict";

const computerPlay = function () {
  const game = ["Rock", "Paper", "Scissors"];
  const random = game[Math.floor(Math.random() * game.length)];
  return random;
};

let playerScore = 0;
let computerScore = 0;
const results = document.querySelector(".results");

function playRound(playerSelection, computerSelection) {
  const player = playerSelection;
  const computer = computerSelection;

  if (playerScore === 5) {
    return (results.textContent = `Player Wins!`);
  } else if (computerScore === 5) {
    return (results.textContent = `It seems the computer has beaten you!`);
  } else {
    `It's a draw!`;
  }

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
    return `No points scored`;
  }
}

const btns = document.querySelectorAll(".btn");

const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerSelection = btn.textContent;
    const computerSelection = computerPlay();

    results.textContent = playRound(playerSelection, computerSelection);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  });
});

document.querySelector(".reset").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  results.textContent = "Let's Play another game!";
});
