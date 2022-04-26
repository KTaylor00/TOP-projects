"use strict";

const gameBoard = (() => {
  const blocks = document.querySelectorAll(".block");
  const board = [];

  return {
    blocks,
    board,
  };
})();

const gameController = (() => {
  let player1Turn = true;
  let player2Turn = false;

  function renderContents() {
    gameBoard.blocks.forEach((block) => {
      gameBoard.board.push(block);
      block.addEventListener("click", (e) => {
        let position = e.target.dataset.block;
        let btn = gameBoard.board[position];

        if (player1Turn) {
          btn.textContent = player1.marker;
          player1Turn = false;
        } else if (!player2Turn) {
          btn.textContent = player2.marker;
          player1Turn = true;
        }

        if (btn.textContent === "X" || btn.textContent === "O") {
          btn.style.color = "black";
          btn.disabled = true;
        }
      });
    });
  }

  return {
    renderContents,
  };
})();

const Player = (name, marker) => {
  return {
    name,
    marker,
  };
};

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

const displayController = (() => {})();
gameController.renderContents();
