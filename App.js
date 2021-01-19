let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const hobbit = new Book("The Hobbit", "JRR Tolkien", 299, "on");
addBookToLibrary(hobbit);

function displayLibrary() {
    const display = document.querySelector(".display");
    myLibrary.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.textContent = book;
        display.appendChild(div);
    });
}
displayLibrary();

function submitForm() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
}