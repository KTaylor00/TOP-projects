"use strict";

const authorEl = document.querySelector("#author");
const titleEl = document.querySelector("#title");
const pagesEl = document.querySelector("#pages");
const addBook = document.querySelector(".add-book");
const createBook = document.querySelector(".create-book");
const bookForm = document.querySelector(".book-form");
const displayBookContain = document.querySelector(".display-book-contain");

let myLibrary = [];

class Book {
  constructor(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
  }

  displayBook() {
    const bookDisplay = document.querySelector("#display-book");

    bookDisplay.textContent = "";
    for (let i = 0; i < myLibrary.length; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let displayAuthor = document.createElement("p");
      let displayTitle = document.createElement("p");
      let displayPages = document.createElement("p");
      let read = document.createElement("button");
      let removeBtn = document.createElement("button");

      displayAuthor.textContent = myLibrary[i].author;
      displayTitle.textContent = myLibrary[i].title;
      displayPages.textContent = myLibrary[i].pages;

      removeBtn.innerText = "Remove";
      removeBtn.addEventListener("click", this.remove.bind(this));
      removeBtn.id = `remove-${i}`;

      read.innerText = "Read";
      read.classList.add("read");

      bookDisplay.appendChild(card);
      card.appendChild(displayAuthor);
      card.appendChild(displayTitle);
      card.appendChild(displayPages);
      card.appendChild(read);
      card.appendChild(removeBtn);
    }
  }

  remove(e) {
    let position = e.target.id.split("-")[1];

    myLibrary.splice(position, 1);
    this.displayBook();
  }
}

addBook.addEventListener("click", () => {
  let authorText = authorEl.value;
  let titleText = titleEl.value;
  let pagesText = pagesEl.value;

  let book = new Book(authorText, titleText, pagesText);
  myLibrary.push(book);
  console.log(myLibrary);
  authorEl.value = "";
  titleEl.value = "";
  pagesEl.value = "";
  book.displayBook();
  bookForm.classList.remove("show-book-form");
});

createBook.addEventListener("click", () => {
  bookForm.classList.add("show-book-form");
});
