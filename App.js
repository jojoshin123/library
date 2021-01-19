let myLibrary = ["poop"];

function Book(title, author, pages, read) {

}

function addBookToLibrary() {
    myLibrary.push();
}

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