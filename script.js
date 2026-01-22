const booksContainer = document.querySelector(".books-container");

const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(crypto.randomUUID(), title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks(booksContainer) {
    booksContainer.forEach((book) => createCard(book));
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

console.log(myLibrary);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(myLibrary);
displayBooks(myLibrary)
