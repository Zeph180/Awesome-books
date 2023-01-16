const addBookBtn = document.querySelector('.add-btn');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author').value;
const bookSection = document.querySelector('.books');
const books = [
  {
    title: 'JavaScript the Good Parts',
    author: 'Arnica'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear'
  }
]

const book = {title:'', author:''};

function AddBook(titleInput, authorInput) {
  book.title = titleInput;
  book.author = authorInput;
  books.push(book);
  console.log(titleInput, authorInput);
}

addBookBtn.addEventListener('click', AddBook)

books.forEach(book => {
  const bookCont = document.createElement('article');
  bookCont.classList.add('book');
  bookCont.innerHTML = `
    <p class="book-title">${book.title}</p>
    <p class="author">${book.author}</p>
    <button class="remove-btn">Remove</button>
    <hr>
  `
  bookSection.append(bookCont);
});

// AddBook('hello', 'it');
console.log(books);