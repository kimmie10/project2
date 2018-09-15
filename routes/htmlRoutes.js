var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Book.findAll({
      //put a order by hearts score
    }).then(function(dbBooks) {
      res.render("index", {
        msg: "BIBLIOTECA",
        books: dbBooks
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/books/:id", function(req, res) {
    db.Book.findOne({ where: { id: req.params.id } }).then(function(dbBook) {
      res.render("bookInfo", {
        book: dbBook
      });
    });
  });

  //Load author page
  app.get("/authors/:authorId", function(req, res) {
    db.Book.findAll({ where: { authorId: req.params.authorId } }).then(function(
      author
    ) {
      res.render("authors", {
        authors: author
      });
    });
  });

  app.get("/search/", function(req, res) {
    res.render("search");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
