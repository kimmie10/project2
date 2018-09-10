require("dotenv").config();
var googleBooks = require("google-books-search");
var API_KEY = process.env.GOOGLE_API_KEY;

var options = {
  key: API_KEY,
  field: "title",
  offset: 0,
  limit: 5,
  type: "books",
  order: "relevance",
  lang: "en"
};

googleBooks.search(title, options, function(error, results) {
  if (!error) {
    console.log(results);
  } else {
    console.log(error);
  }
});

module.exports = googleBooks;
