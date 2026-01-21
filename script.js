const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "has read" : "not read yet"}`;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(crypto.randomUUID(), title, author, pages, read);
    myLibrary.push(book);
}

console.log(myLibrary);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(myLibrary);
