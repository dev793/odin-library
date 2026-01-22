const booksContainer = document.querySelector(".books-container");
const newBookForm = document.querySelector("#new-book-form")

const myLibrary = [];

function Book(id, title, author, pages, isRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(crypto.randomUUID(), title, author, pages, isRead);
    myLibrary.push(book);
}

function displayBooks() {
    booksContainer.innerHTML = "";
    myLibrary.forEach((book) => createCard(book));
}

function createCard(book) {
    const bookCard = document.createElement("div")

    for (let prop in book) {
        const bookProperty = document.createElement("div");
        bookProperty.textContent = `${prop}: ${book[prop]}`;
        bookCard.append(bookProperty);
    }
    booksContainer.append(bookCard);
}

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    const isRead = form.isRead.checked;

    addBookToLibrary(title, author, pages, isRead);
    displayBooks();
    form.reset();
}

newBookForm.addEventListener("submit", handleSubmit);

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
displayBooks();