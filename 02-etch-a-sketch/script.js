"use strict";

const container = document.querySelector(".container");

function divCreation(columns, rows) {
  for (let i = 0; i < rows * columns; i++) {
    const divs = document.createElement("div");
    divs.classList.add("grid16");
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    divs.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
      console.log(e.target);
    });
    container.appendChild(divs);
  }
}

divCreation(32, 32);
