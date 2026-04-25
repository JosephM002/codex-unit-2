// TODO: Build an object from a written specification and export it as default.
// Example spec: book with title, author, pages, and a summary() method assigned from a named function.
const book = {
  title: "Ragged Time",
  author: "Unknown",
  pages: 54,
  /* TODO: implement spec */
};
function summary(book) {
  return book.title + "by" + book.author;
}
book.summary = summary;
export default book;
