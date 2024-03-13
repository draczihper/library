const bookContainerEl = document.querySelector("#book-container")
const tableEl = document.querySelector("#table")

const myLibrary = [];


function Book() {
    // the constructor
}


function addBookToLibrary() {
    // do stuff here
}

// tableEl.addEventListener("click", () => console.log("Table clicked!"))

tableEl.innerHTML += `<tr>
<td>The Hobbit</td>
<td>J.R.R. Tolkien</td>
<td>295 pages</td>
<td>not read yet</td>
</tr>`