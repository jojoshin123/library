let myLibrary = [];

function loadLibrary() {
    if (!localStorage.getItem("myLibrary")) {
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    } else {
        myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    }
}
loadLibrary();

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

// const hobbit = new Book("The Hobbit", "JRR Tolkien", 299, true);
// addBookToLibrary(hobbit);

function displayLibrary() {
    const display = document.querySelector(".display");
    display.textContent = "";
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

function clearLibrary() {
    const confirm = window.confirm("Are you sure you want to clear the whole library?");
    if (confirm) {
        localStorage.removeItem("myLibrary");
        myLibrary = [];
        localStorage.setItem("myLibrary", myLibrary);
        displayLibrary();
    } else {
        return;
    }
}

function submitForm() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    // Verify inputs
    if (typeof title == "string" && title) {
        if (typeof author == "string" && author) {
            if (Number.isInteger(pages) && pages) {
                const book = new Book(title, author, pages, read);
                addBookToLibrary(book);
                localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
                displayLibrary();
                return book;
            } else {
                alert("\"Pages\" input should be an integer.");
            }
        } else {
            alert("\"Author\" input should be a valid string.");
        }
    } else {
        alert("\"Title\" input should be a valid string.");
    }
    hidePopUp();
}

function showPopUp() {
    const popup = document.querySelector(".pop-up")
    popup.classList.remove("pop-up-hide");
}

function hidePopUp() {
    const popup = document.querySelector(".pop-up")
    popup.classList.add("pop-up-hide");
}