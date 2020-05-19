class Book {
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  addBookToList(book){
    const bookList = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete" style="text-decoration:none; padding:.6em; border:1px rgb(22, 201, 198) solid;">&times;</a></td>
    `;
    bookList.appendChild(row);
  }
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
  showAlert(message,className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const form = document.getElementById('book-form');
    document.querySelector('.container').insertBefore(div,form);
    setTimeout(() => div.remove(), 2000);
  }
  deleteBook(target){
    if(target.classList.contains('delete'))
      target.parentElement.parentElement.remove();
  }
}

class Store{
  static getBook(){
    let books;
    if(localStorage.getItem('book') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('book'));
    }
    return books;
  }
  static displayBook(book){
    let books = Store.getBook();
    books.forEach((book)=>{
      const ui = new UI();
      ui.addBookToList(book);
    })
  }
  static addBook(book){
    let books = Store.getBook();
    books.push(book);
    localStorage.setItem('book',JSON.stringify(books));
  }
  static deleteBook(isbn){
    let books = Store.getBook();

    books.forEach((book,index)=>{
      if( book.isbn === isbn)  books.splice(index,1);
      localStorage.setItem('book',JSON.stringify(books));
    })
  }
}
document.addEventListener('DOMContentLoaded',Store.displayBook);

document.querySelector('#book-form').addEventListener('submit',function(event){
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  book = new Book(title,author,isbn);
  const ui = new UI();
  if( title === '' || author === '' || isbn === '' ){
    ui.showAlert('Please fill all the fields','error');
  } else {
    ui.addBookToList(book);
    Store.addBook(book);
    ui.clearFields();
    ui.showAlert('Book Added','success');
  }
  event.preventDefault();
  })

  document.querySelector('#book-list').addEventListener('click',(e)=>{
    const ui = new UI();
    ui.deleteBook(e.target);
    Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book deleted','success');
    e.preventDefault();
  })
  