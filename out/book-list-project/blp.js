function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
function UI() { }
UI.prototype.addBookToList = function (book) {
    var bookList = document.getElementById('book-list');
    var row = document.createElement('tr');
    row.innerHTML = "\n  <td>" + book.title + "</td>\n  <td>" + book.author + "</td>\n  <td>" + book.isbn + "</td>\n  <td><a href=\"#\" class=\"delete\" style=\"text-decoration:none; padding:.6em; border:1px rgb(22, 201, 198) solid;\">&times;</a></td>\n  ";
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
document.querySelector('#book-form').addEventListener('submit', function (event) {
    var title = document.getElementById('title').value, author = document.getElementById('author').value, isbn = document.getElementById('isbn').value;
    book = new Book(title, author, isbn);
    var ui = new UI();
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill all the fields', 'error');
    }
    else {
        ui.addBookToList(book);
        ui.clearFields();
        ui.showAlert('Book Added', 'success');
    }
    event.preventDefault();
});
document.querySelector('#book-list').addEventListener('click', function (e) {
    var ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book deleted', 'success');
    e.preventDefault();
});
