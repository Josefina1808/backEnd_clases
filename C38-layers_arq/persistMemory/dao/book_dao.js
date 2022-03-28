const books = [];
let incrementalBook = 0;

const getBooks = () => books;

const saveBook = (book) => {
  incrementalBook++;
  book.id = incrementalBook;
  books.push(book);

  return book;
};

module.exports = {
    getBooks, saveBook
}