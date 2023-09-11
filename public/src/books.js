// Return an author object with matching ID
function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
 }
 
// Return the book object with matching ID
 function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
 }

// Return an array with two arrays inside of it
 function partitionBooksByBorrowedStatus(books) {
  let returns = books.filter((book) =>
   book.borrows.every((borrow) => borrow.returned === true)
  );
  let borrows = books.filter((book) =>
   book.borrows.some((borrow) => borrow.returned === false)
  );
  let result = [[...borrows], [...returns]];
  return result;
 }
 
 // Return an array of ten or fewer account objects that represents accounts given by IDs in the borrows array
 function getBorrowersForBook(book, accounts) {
  return book.borrows
   .map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account };
   })
   .slice(0, 10);
 }

//------ Exports ------//

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};