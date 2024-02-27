function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
  }
  
  const myLibrary = [];
  
  function displayBooks() {
    const bookContainer = document.getElementById('bookContainer');
    bookContainer.innerHTML = '';
  
    myLibrary.forEach((book, index) => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        <button class="toggle-read-btn" data-index="${index}">Toggle Read Status</button>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      bookContainer.appendChild(bookItem);
    });
  }
  
  function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
  }
  
  const newBookBtn = document.getElementById('newBookBtn');
  newBookBtn.addEventListener('click', () => {
    const newBookForm = document.getElementById('newBookForm');
    newBookForm.style.display = 'block';
  });
  
  const addBookBtn = document.getElementById('addBookBtn');
  addBookBtn.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
  
    addBookToLibrary(title, author, pages, read);
  
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
  
    const newBookForm = document.getElementById('newBookForm');
    newBookForm.style.display = 'none';
  });
  
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('toggle-read-btn')) {
      const index = event.target.dataset.index;
      myLibrary[index].toggleReadStatus();
      displayBooks();
    }
  });
  
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
      const index = event.target.dataset.index;
      myLibrary.splice(index, 1);
      displayBooks();
    }
  });
  
  displayBooks();
  