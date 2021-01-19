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
        const title = document.createElement('h1');
        title.textContent = book.title;

        const author = document.createElement('h3');
        author.textContent = `by ${book.author}`;

        const pages = document.createElement('h4');
        pages.textContent = `Number of Pages: ${book.pages}`;

        const read = document.createElement('p');
        if (book.read == true) {
            read.textContent = "(Already Read)";
        } else {
            read.textContent = "(Have Not Read Yet)";
        }

        const div = document.createElement('div');
        div.classList.add('book');
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);

        display.appendChild(div);
    });
}
displayLibrary();

function submitForm() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    console.log(title);
    console.log(author);
    console.log(pages);
    console.log(read);
}

function showPopUp() {
    const popup = document.querySelector(".pop-up")
    popup.classList.remove("pop-up-hide");
}

function hidePopUp() {
    const popup = document.querySelector(".pop-up")
    popup.classList.add("pop-up-hide");
}