var Book = /** @class */ (function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    return Book;
}());
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.addBookToList = function (book) {
        var bookList = document.getElementById('book-list');
        var row = document.createElement('tr');
        row.innerHTML = "\n    <td>" + book.title + "</td>\n    <td>" + book.author + "</td>\n    <td>" + book.isbn + "</td>\n    <td><a href=\"#\" class=\"delete\" style=\"text-decoration:none; padding:.6em; border:1px rgb(22, 201, 198) solid;\">&times;</a></td>\n    ";
        bookList.appendChild(row);
    };
    UI.prototype.clearFields = function () {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    };
    UI.prototype.showAlert = function (message, className) {
        var div = document.createElement('div');
        div.className = "alert " + className;
        div.appendChild(document.createTextNode(message));
        var form = document.getElementById('book-form');
        document.querySelector('.container').insertBefore(div, form);
        setTimeout(function () { return div.remove(); }, 2000);
    };
    UI.prototype.deleteBook = function (target) {
        if (target.classList.contains('delete'))
            target.parentElement.parentElement.remove();
    };
    return UI;
}());
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.getBook = function () {
        var books;
        if (localStorage.getItem('book') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('book'));
        }
        return books;
    };
    Store.displayBook = function (book) {
        var books = Store.getBook();
        books.forEach(function (book) {
            var ui = new UI();
            ui.addBookToList(book);
        });
    };
    Store.addBook = function (book) {
        var books = Store.getBook();
        books.push(book);
        localStorage.setItem('book', JSON.stringify(books));
    };
    Store.deleteBook = function (isbn) {
        var books = Store.getBook();
        books.forEach(function (book, index) {
            if (book.isbn === isbn)
                books.splice(index, 1);
            localStorage.setItem('book', JSON.stringify(books));
        });
    };
    return Store;
}());
document.addEventListener('DOMContentLoaded', Store.displayBook);
document.querySelector('#book-form').addEventListener('submit', function (event) {
    var title = document.getElementById('title').value, author = document.getElementById('author').value, isbn = document.getElementById('isbn').value;
    book = new Book(title, author, isbn);
    var ui = new UI();
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill all the fields', 'error');
    }
    else {
        ui.addBookToList(book);
        Store.addBook(book);
        ui.clearFields();
        ui.showAlert('Book Added', 'success');
    }
    event.preventDefault();
});
document.querySelector('#book-list').addEventListener('click', function (e) {
    var ui = new UI();
    ui.deleteBook(e.target);
    Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book deleted', 'success');
    e.preventDefault();
});
