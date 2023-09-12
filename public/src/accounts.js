// Return the account object that has the matching ID
function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
  return foundId;
}

// Return an array (sorted by last name) of the provided account objects
 function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
   accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
 }

// Create a helper function to be called in getTotalNumberofBorrows
function booksById (book, {id}) {
  return book.borrows.filter(borrow => borrow.id === id);
}

// Return a number of times the account's ID appears in any books' "borrows" array
 function getTotalNumberOfBorrows(account, books) {
  let total = 0;
   books.forEach(book => {
     let borrowedById = booksById(book, account);
     total += borrowedById.length;
   });
   return total;
 }

 
 // Return an array of book objects that represents all books currently checked out by the account
 function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let matches = [];
  books.forEach((item) => {
   const borrowed = item.borrows;
   const book = {
    id: item.id,
    title: item.title,
    genre: item.genre,
    authorId: item.authorId,
    author: {},
    borrows: {}
   };
   const { id, title, genre, authorId, author, borrows } = book;
   borrowed.forEach((borrow) => {
    if (borrow.id === account.id && borrow.returned === false) {
     result.push(book);
     matches.push(borrow);
     book.borrows = matches;
     book.author = authors.filter((auth) => auth.id === book.authorId)[0];
    }
   });
  });
  return result;
 }

 //------ Exports ------//

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
