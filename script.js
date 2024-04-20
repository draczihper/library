const bookContainerEl = document.querySelector("#book-container");
const tableEl = document.querySelector("#table");
const dialog = document.getElementById("dialog");
const addBookBtn = document.getElementById("addBook");
const submitBtn = document.querySelector("#submit-button");
const statusEl = document.querySelector("#status");
const titleEl = document.querySelector("#title");
const authorEl = document.querySelector("#author");
const pagesEl = document.querySelector("#pages")
const closeBtn = document.querySelector("#close-button");

window.onload = (event) => {
    // dialog.style.display = "none";
  };
  

addBookBtn.addEventListener("click", () => {
        dialog.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.style.display = "none";
    
});

if (statusEl.checked) {
    statusEl.value = true;
} else {
    statusEl.value = false;
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close(titleEl.value, authorEl.value, pagesEl.value, statusEl.value)
})

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
        if(prop === 'readStatus') {
            cell.textContent = book[prop] ? "Read" : "Not read yet";
        } else {
            cell.textContent = book[prop];
        }
    });
});
    
}

// addBookToLibrary(myLibrary);



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