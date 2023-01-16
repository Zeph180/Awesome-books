const bookSection = document.querySelector('.books');
const addBookBtn = document.querySelector('.add-btn');
const form = document.querySelector('form');
const books = [];
const book = { title: '', author: '', id: '' };

function RemoveBook() {
  console.log('Btn removed');
  console.log(books, "books");
}

function AddBook() {
  const titleInput = document.querySelector('.title').value;
  const authorInput = document.querySelector('.author-input').value;
  const remBtns = document.querySelectorAll('.remove-btn');
  const bookCont = document.createElement('article');

  const btns = Array.from(remBtns);
  console.log(btns);

  btns.forEach((btn) => {
    btn.addEventListener('click', RemoveBook);
  });

  books.push(book);
  book.title = titleInput;
  book.author = authorInput;

  books.forEach((book) => {
    bookCont.classList.add('book');
    bookCont.innerHTML = `
      <p class="book-title">${book.title}</p>
      <p class="author">${book.author}</p>
      <button id=${book.id} class="remove-btn" onclick="RemoveBook()">Remove</button>
      <hr>
    `;
    bookSection.append(bookCont);
  });
  form.reset();
}

addBookBtn.addEventListener('click', AddBook);

// const removeButtons = Array.from(buttons);
// console.log(removeButtons, 'yyy');

// removeButtons.forEach((button, i) => {
//   function RemoveBook() {
//     console.log('Btn removed');
//     removeButtons.filter((removeButtons) => !removeButtons[i]);
//   }

//   button.addEventListener('click', RemoveBook);
// });
