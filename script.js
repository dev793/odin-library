const booksContainer = document.querySelector(".books-container");
const newBookForm = document.querySelector("#new-book-form");

const myLibrary = [];

class Book {

    constructor(id, title, author, pages, isRead) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    toggleRead() {
        this.isRead = !this.isRead;
    }
}

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(crypto.randomUUID(), title, author, pages, isRead);
    myLibrary.push(book);
}

function displayBooks() {
    booksContainer.innerHTML = "";
    myLibrary.forEach((book, index) => createCard(book, index));
}

function createCard(book, index) {
    const bookCard = document.createElement("div");

    const DISPLAY_FIELDS = ["title", "author", "pages", "isRead"];
    
    DISPLAY_FIELDS.forEach((key) => {
        const bookProperty = document.createElement("div");
        bookProperty.textContent = `${key}: ${book[key]}`;
        bookCard.append(bookProperty);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
        myLibrary.splice(index, 1);
        displayBooks()
    });

    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = "Toggle Read";

    toggleReadButton.addEventListener("click", () => {
        book.toggleRead();
        displayBooks();
    });

    bookCard.append(toggleReadButton);
    bookCard.append(deleteButton);
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