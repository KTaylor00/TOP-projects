"use strict";

const container = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");
const btnContainerGrid = document.querySelector(".btn-container-grid");

const btn = document.createElement("button");
btn.classList.add("reset-grid");
btn.textContent = "Change grid size";
btnContainerGrid.appendChild(btn);

const btnReset = document.createElement("button");
btnReset.classList.add("reset");
btnReset.textContent = "Reset";
btnContainer.appendChild(btnReset);

function randomColour() {
  let letters = "0123456789ABCDEF";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

function divCreation(columns, rows) {
  for (let i = 0; i < rows * columns; i++) {
    const divs = document.createElement("div");
    divs.classList.add("grid");
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    divs.addEventListener("mouseover", () => {
      divs.style.backgroundColor = randomColour();
    });
    btnReset.addEventListener("click", () => {
      divs.style.backgroundColor = "white";
    });

    container.appendChild(divs);
  }
}

divCreation(32, 32);

btn.addEventListener("click", () => {
  const newGrid = prompt(
    "Please type in your new grid size, number may not exceed 64."
  );
  if (newGrid <= 64) {
    divCreation(newGrid, newGrid);
  }
});
