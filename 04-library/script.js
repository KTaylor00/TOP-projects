"use strict";

const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const addBook = document.querySelector(".add-book");
const createBook = document.querySelector(".create-book");
const bookForm = document.querySelector(".book-form");
const displayBookContain = document.querySelector(".display-book-contain");

let myLibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  // this.read = read;
  // read = false;
}

function displayBook() {
  const displayBook = document.querySelector("#display-book");

  displayBook.textContent = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    let author = document.createElement("p");
    let title = document.createElement("p");
    let pages = document.createElement("p");
    let read = document.createElement("button");
    let removeBtn = document.createElement("button");

    author.textContent = myLibrary[i].author;
    title.textContent = myLibrary[i].title;
    pages.textContent = myLibrary[i].pages;

    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", remove);
    removeBtn.id = `remove-${i}`;

    read.innerText = "Read";
    read.classList.add("read");

    displayBook.appendChild(card);
    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(removeBtn);
  }
}

function remove(e) {
  let position = e.target.id.split("-")[1];

  myLibrary.splice(position, 1);
  displayBook();
}

function addBookToLibrary() {
  let authorText = author.value;
  let titleText = title.value;
  let pagesText = pages.value;

  const addedBook = new Book(authorText, titleText, pagesText);
  myLibrary.push(addedBook);
  console.log(myLibrary);
  author.value = "";
  title.value = "";
  pages.value = "";
  displayBook();
}
addBook.addEventListener("click", () => {
  addBookToLibrary();
  bookForm.classList.remove("show-book-form");
});

createBook.addEventListener("click", () => {
  bookForm.classList.add("show-book-form");
});
