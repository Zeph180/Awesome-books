const bookSection = document.querySelector('.books');
const form = document.querySelector('form');
const addBtn = document.querySelector('.add-btn');

const books = [];

function renderBook(book) {
  const bookCont = document.createElement('div');
  bookCont.innerHTML = `
    <p class="book-title">${book.title}</p>
    <p class="author">${book.author}</p>
    <button id=${book.id} class="remove-btn" ">Remove</button>
    <hr>
  `;
  bookSection.appendChild(bookCont);
}

function removeBook(index) {
  // books.slice(index, 1);
  // bookSection.innerHTML = '';
  // const newBook = [];
  // books.forEach((book) => renderBook(book));
  alert('helllo')
}

function addBook(title, author) {
  const book = {
    title,
    author,
    id: crypto.randomUUID(),
  };

  books.push(book);

  renderBook(book);
  const remBtns = document.querySelectorAll('.remove-btn');
  remBtns.forEach((remBtn, index) => {
    remBtn.addEventListener('click', removeBook(index));
    console.log(remBtn);
  });
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('.title').value;
  const authorInput = document.querySelector('.author-input').value;

  if (titleInput !== '' && authorInput !== '') {
    addBook(titleInput, authorInput);
    form.reset();
  }
});
