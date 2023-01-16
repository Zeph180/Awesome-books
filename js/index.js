const bookSection = document.querySelector('.books');
const form = document.querySelector('form');

const books = [];

function renderBook(book) {
  const bookCont = document.createElement('article');
  bookCont.innerHTML = `
    <p class="book-title">${book.title}</p>
    <p class="author">${book.author}</p>
    <button id=${book.id} class="remove-btn">Remove</button>
    <hr>
  `;
  bookSection.prepend(bookCont);
}

function addBook(title, author) {
  const book = {
    title,
    author,
    id: crypto.randomUUID(),
  };

  books.push(book);
  renderBook(book);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('.title').value;
  const authorInput = document.querySelector('.author-input').value;

  if (titleInput !== '' && authorInput !== '') {
    addBook(titleInput, authorInput);
    form.reset();
  }
});

let booksData = JSON.parse(localStorage.getItem('books'));
if (booksData !== null) {
  booksData.forEach((book) => renderBook(book));
} else {
  localStorage.setItem('books', JSON.stringify(books));
  books.forEach((book) => renderBook(book));
}

const remove = document.querySelectorAll('.remove-btn');
remove.forEach((item, index) => {
  item.addEventListener('click', () => {
    booksData = JSON.parse(localStorage.getItem('books'));
    booksData.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksData));
    window.location.reload();
  });
});
