// Return the number of book objects in the array
function getTotalBooksCount(books) {
  return books.length;
 }
 
 // Return the number of account objects inside the array
 function getTotalAccountsCount(accounts) {
  return accounts.length;
 }
 
 // Return the number of books currently checked out
 function getBooksBorrowedCount(books) {
  let checkedOut = books.filter(
   (book) =>
    book.borrows.filter((record) => record.returned === false).length > 0
  );
  return checkedOut.length;
 }
 
 // Return an array of five or fewer objects that represen the most common genres from greatest to least
  function getMostCommonGenres(books) {
  let map = {};
  books.forEach((num) => {
   if (map[num.genre]) {
    map[num.genre]++;
   } else {
    map[num.genre] = 1;
   }
  });
  return Object.entries(map)
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((a, b) => b.count - a.count)
   .slice(0, 5);
 }
 
 // Return an array of five or fewer objects that represent the most popular books (by times borrowed)
 function getMostPopularBooks(books) {
  return books
   .map((book) => {
    return { name: book.title, count: book.borrows.length };
   })
   .sort((a, b) => (a.count < b.count ? 1 : -1))
   .slice(0, 5);
 }
 
 // Return an array of five or fewer objects that represent the most popular authors (by times books borrowed)
 function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let popularAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     popularAuthor.count += book.borrows.length;
    }
   });
   result.push(popularAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
 }

//------ Exports ------//

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};