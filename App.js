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

// This takes a Book object and an index of where to put it in myLibrary
function addBookToLibrary(book, index) {
    myLibrary.splice(index, 0, book);
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

        // Edit and remove options
        const container = document.createElement('div');
        const edit = document.createElement('button');
        const remove = document.createElement('button');

        edit.style.cssText = "margin: 20px 10px 0px 10px;"
        remove.style.cssText = "margin: 20px 10px 0px 10px;"

        edit.textContent = "Edit";
        remove.textContent = "Remove from library";

        edit.addEventListener('click', () => {
            const index = myLibrary.indexOf(book); //index of book in myLibrary
            console.log(index);
            showPopUp();
            document.querySelector("#title").value = book.title;
            document.querySelector("#author").value = book.author;
            document.querySelector("#pages").value = book.pages;
            document.querySelector("#read").checked = book.read;

            console.log(myLibrary);

            document.addEventListener('submit', () => {
                const temp = myLibrary.shift(); //the new edited entry
                console.log(temp);
                myLibrary.splice(index, 1, temp); //replace old entry
                localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); //replace local storage
                displayLibrary();
            })

        });

        remove.addEventListener('click', () => {
            const index = myLibrary.indexOf(book); //index of book in myLibrary
            myLibrary.splice(index, 1); //delete entry
            localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); //replace local storage
            displayLibrary();
        });

        container.appendChild(edit);
        container.appendChild(remove);
        div.appendChild(container);

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

// submitForm takes in an index to pass it onto addBookToLibrary()
function submitForm(index) {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    // Verify inputs
    if (typeof title == "string" && title) {
        if (typeof author == "string" && author) {
            if (!isNaN(pages) && Number.isInteger(parseFloat(pages))) {
                const book = new Book(title, author, pages, read);
                addBookToLibrary(book, index);
                localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
                displayLibrary();
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
    let submitEvent = new Event("submit"); // for edit function
    document.dispatchEvent(submitEvent);
    displayLibrary();
}

function showPopUp() {
    const popup = document.querySelector(".pop-up")
    popup.classList.remove("pop-up-hide");
}

function hidePopUp() {
    const popup = document.querySelector(".pop-up")
    popup.classList.add("pop-up-hide");
    document.querySelector("form").reset(); //reset the form
}