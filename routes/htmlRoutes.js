var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Book.findAll({}).then(function(dbBooks) {
      res.render("index", {
        msg: "Catchy Book Share Title",
        examples: dbBooks
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/bookInfo/:id", function(req, res) {
    db.Book.findOne({ where: { id: req.params.id } }).then(function(dbBook) {
      res.render("bookInfo", {
        example: dbExample
      });
    });
  });

  //Load author page
  app.get("/authors/:authorId", function(req, res) {
    db.Book.findAll({ where: { authorId: req.params.authorId } }).then(function(
      dbBook
    ) {
      res.render("authors", {
        books: dbBook
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
