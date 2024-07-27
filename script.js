const bookContainerEl = document.querySelector("#book-container");
const tableEl = document.querySelector("#table");
const dialog = document.getElementById("dialog");
const addBookForm = document.querySelector("#dialog-form");
const addBookBtn = document.getElementById("addBook");
const submitBtn = document.querySelector("#submit-button");
const yesStatusEl = document.querySelector("#yesReadStatus");
const titleEl = document.querySelector("#title");
const authorEl = document.querySelector("#author");
const pagesEl = document.querySelector("#pages");
const closeBtn = document.querySelector("#close-button");

window.onload = (event) => {
    dialog.style.display = "none";
    addBookForm.reset();
};

addBookBtn.addEventListener("click", () => {
    dialog.style.display = "block";
    addBookBtn.style.display = "none";
    bookContainerEl.style.opacity = "0";
});

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.style.display = "none";
    addBookBtn.style.display = "block";
    bookContainerEl.style.opacity = "";
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
    bookContainerEl.style.opacity = "";

    displayLibrary();
});

let myLibrary = [];

function Book(title, author, pages, readStatus = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype.toggleReadStatus = function () {
    this.readStatus = !this.readStatus;
};

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function displayLibrary() {
    bookContainerEl.innerHTML = "";
    const table = document.createElement("table");

    const headerRow = table.insertRow();

    [
        "Title",
        "Author",
        "Pages",
        "Read Status",
        "Change status",
        "Remove",
    ].forEach((colName) => {
        const headerCell = headerRow.insertCell();
        headerCell.style.fontWeight = "700";
        headerCell.textContent = colName;
    });

    myLibrary.forEach((book, index) => {
        const row = table.insertRow();
        ["title", "author", "pages", "readStatus"].forEach((prop) => {
            const cell = row.insertCell();
            if (prop === "readStatus") {
                cell.textContent = book[prop] ? "Yes" : "No";
            } else {
                cell.textContent = book[prop];
            }
        });

        const changeStatusButtonCell = row.insertCell();
        const changeStatusButton = document.createElement("button");
        changeStatusButton.textContent = book.readStatus
            ? "Mark as Unread"
            : "Mark as read";
        changeStatusButton.addEventListener("click", () => {
            book.toggleReadStatus();
            displayLibrary();
        });
        changeStatusButtonCell.appendChild(changeStatusButton);

        const removeButtonCell = row.insertCell();
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeBook(index));
        removeButtonCell.appendChild(removeButton);
    });

    bookContainerEl.appendChild(table);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}
