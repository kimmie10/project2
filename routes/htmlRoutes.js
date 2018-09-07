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
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("bookInfo", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
