const buttonAdd = document.querySelector('#add-btn');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookDisplay = document.querySelector('#book-section');

class Books {
  constructor(books){
    this.books = books;
  }
  addBook(book) {
    this.books.push(book);
  }
  removeBook(index) {
    books.splice(index, 1);
  }
}

const books = JSON.parse(localStorage.getItem('books')) || [];
const bookData = new Books(books); 

const addBook = (title, author) => {
  const book = {title, author};
  bookData.addBook(book);
  localStorage.setItem('books', JSON.stringify(books));
  // eslint-disable-next-line no-use-before-define
  render();
};

const removeBook = (index) => {
  bookData.removeBook(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  // eslint-disable-next-line no-use-before-define
  render();
};

const render = () => {
  bookDisplay.innerHTML = '';
  books.forEach((book, index) => {
    const div = document.createElement('div');
    div.classList.add('book')
    div.innerHTML = `
            <p>"${book.title}" by ${book.author}</p>
            <button class="remove-button" data-index="${index}">Remove</button>
        `;
    bookDisplay.appendChild(div);
  });

  document.querySelectorAll('.remove-button').forEach((button) => {
    button.addEventListener('click', () => {
      removeBook(button.getAttribute('data-index'));
    });
  });
};

render();

buttonAdd.addEventListener('click', () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  addBook(title, author);
  bookTitle.value = '';
  bookAuthor.value = '';
});