const bookContainerEl = document.querySelector("#book-container");
const tableEl = document.querySelector("#table");
const dialog = document.getElementById("dialog");
const addBookForm = document.querySelector("#dialog-form")
const addBookBtn = document.getElementById("addBook");
const submitBtn = document.querySelector("#submit-button");
const yesStatusEl = document.querySelector("#yesReadStatus");
const titleEl = document.querySelector("#title");
const authorEl = document.querySelector("#author");
const pagesEl = document.querySelector("#pages")
const closeBtn = document.querySelector("#close-button");

window.onload = (event) => {
    dialog.style.display = "none";
  };
  

addBookBtn.addEventListener("click", () => {
        dialog.style.display = "block";
        addBookBtn.style.display = "none"
});

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.style.display = "none";
    addBookBtn.style.display = "block";
});


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = addBookForm.elements.title.value;
  const author = addBookForm.elements.author.value;
  const pages = addBookForm.elements.pages.value;
  const readStatus = addBookForm.elements.yes.checked;
    addBookToLibrary(title, author, pages, readStatus);

    addBookForm.reset();
    dialog.style.display = "none";
    addBookBtn.style.display = "block";
    displayLibrary();
});

let myLibrary = [];


function Book(title, author, pages, readStatus = false) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}


function displayLibrary() {
    bookContainerEl.innerHTML = '';
    const table = document.createElement('table');

    const headerRow = table.insertRow();

    ['Title', 'Author', 'Pages', 'Read Status'].forEach(colName => {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = colName;
      });

      myLibrary.forEach(book => {
        const row = table.insertRow();
        ['title', 'author', 'pages', 'readStatus'].forEach(prop => {
          const cell = row.insertCell();
          if (prop === 'readStatus') {
            cell.textContent = book[prop] ? 'Yes' : 'No';
          } else {
            cell.textContent = book[prop];
          }
        });
      });

      bookContainerEl.appendChild(table);
}


