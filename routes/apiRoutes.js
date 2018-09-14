var db = require("../models");
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

module.exports = function(app) {
  // Get all examples
  app.get("/api/books", function(req, res) {
    db.Book.findAll({}).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Create a new book
  app.post("/api/books", function(req, res) {
    const bookInfo = req.body;
    let categoriesInfo = bookInfo.categories.split(",");
    // let authorsInfo = bookInfo.authors.split(",");
    // let isbns = bookInfo.isbns;

    delete bookInfo.categories;
    delete bookInfo.authors;

    // either find a category with name or create a new one
    categoriesInfo.map(categoryName =>
      db.Category.findOrCreate({
        where: { name: categoryName }
      })
    );

    db.Book.findOne({
      where: { googleId: bookInfo.googleId, title: bookInfo.title }
    }).then(function(dbBook) {
      if (dbBook === null) {
        db.Book.create(bookInfo).then(function(dbBook) {
          categoriesInfo.map(name =>
            db.Category.findOne({
              where: { name: name }
            }).then(function(category) {
              category.addBook(dbBook);
            })
          );
          res.json(dbBook);
        });
      } else {
        console.log("We have that book!");
        res.json({
          msg: "Book " + dbBook.title + "was previously added. Thank you !"
        });
      }
    });
  });

  // Delete a book by id
  app.delete("/api/books/:id", function(req, res) {
    db.Book.destroy({ where: { id: req.params.id } }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  app.get("/api/googlebooks/search/:title", function(req, res) {
    let title = req.params.title;
    googleBooks.search(title, options, function(error, results) {
      if (!error) {
        console.log(results[0].industryIdentifiers);
      } else {
        console.log(error);
      }
      // We are sending back the result "page" to the client
      res.render("search", {
        googleBooks: results,
        // Overrides which layout to use, instead of the defaul "main" layout.
        layout: "results"
        // partial: function() {
        //   return "bood_card";
        // }
      });
    });
  });
};
