const bookContainerEl = document.querySelector("#book-container");
const tableEl = document.querySelector("#table");
// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const pages = document.querySelector("#pages");
// const status = document.querySelector("#readStatus");

const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 295,
        readStatus: false,
    },
    {
        title: "The power your subconscious mind",
        author: "J. Murphy",
        pages: 222,
        readStatus: true,
    },
    {
        title: "Think and Grow rich",
        author: "D. Carnegie",
        pages: 183,
        readStatus: false,
    },
    {
        title: "The psychology of money",
        author: "M. Housel",
        pages: 188,
        readStatus: true,
    }

];


function Book() {
    // the constructor
}


function addBookToLibrary(lib) {
lib.forEach(book => {
    const row = tableEl.insertRow();
    ['title', 'author', 'pages', 'readStatus'].forEach(prop => {
        const cell = row.insertCell();
        cell.textContent = book[prop];
    });
});
    
}

addBookToLibrary(myLibrary);

// tableEl.addEventListener("click", () => console.log("Table clicked!"))

/* tableEl.innerHTML += `<tr>
<td>The Hobbit</td>
<td>J.R.R. Tolkien</td>
<td>295 pages</td>
<td>not read yet</td>
</tr>
<tr>
<td>The Power of your subconscious mind</td>
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
<td>The psychology of money</td>
<td>M. Housel</td>
<td>188</td>
<td>read</td>
</tr>` */