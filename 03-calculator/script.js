"use strict";

const calcDisplay = document.querySelector(".calc-display");
const btnEquals = document.querySelector(".btn-equals");
const btnNums = document.querySelectorAll(".btn-num");
const display = document.querySelector(".display");
const btnOp = document.querySelectorAll(".btn-op");
const btnClear = document.querySelector(".btn-clear");
const btnBack = document.querySelector(".btn-back");

let firstNumber = "";
let secondNumber = "";
let operation = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else if (operator === "x") {
    return multiply(a, b);
  }
}

btnClear.addEventListener("click", clear);
btnBack.addEventListener("click", back);
btnEquals.addEventListener("click", calc);

btnNums.forEach((btn) => {
  btn.addEventListener("click", () => showBtns(btn.textContent));
});
btnOp.forEach((btn) =>
  btn.addEventListener("click", () => showOp(btn.textContent))
);

function showBtns(num) {
  if (display.textContent === "0" || display.textContent === firstNumber) {
    display.textContent = "";
  }
  display.textContent += num;
}

function showOp(operator) {
  if (operation !== "") calc();
  firstNumber = display.textContent;
  operation = operator;
  calcDisplay.textContent = `${firstNumber} ${operator}`;
}

function calc() {
  secondNumber = display.textContent;
  display.textContent = operate(operation, firstNumber, secondNumber);

  if (display.textContent === "") {
    display.textContent = "0";
  }

  calcDisplay.textContent = `${firstNumber} ${operation} ${secondNumber} =`;
}

function back() {
  display.textContent.slice(1, 1);
}

function clear() {
  display.textContent = "0";
  calcDisplay.textContent = "";
  firstNumber = "";
  secondNumber = "";
  operation = "";
}
