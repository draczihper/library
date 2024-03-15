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
</tr>
<tr>
<td>The Power of your subconcious mind</td>
<td>J. Murphy</td>
<td>222 pages</td>
<td>read</td>
</tr>
<tr>
<td>Think and Grow rich</td>
<td>John Doe</td>
<td>183 pages</td>
<td>not read yet</td>
</tr>
<tr>
<td>The physchology of money</td>
<td>M. Housel</td>
<td>188</td>
<td>read</td>
</tr>`