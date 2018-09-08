var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/books", function(req, res) {
    db.Book.findAll({}).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Create a new example
  app.post("/api/books", function(req, res) {
    db.Book.create(req.body).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Delete an example by id
  app.delete("/api/books/:id", function(req, res) {
    db.Book.destroy({ where: { id: req.params.id } }).then(function(dbBook) {
      res.json(dbBook);
    });
  });
};
