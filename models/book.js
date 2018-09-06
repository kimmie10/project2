"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: DataTypes.STRING,
      summary: DataTypes.TEXT,
      publishedDate: DataTypes.DATE,
      authorId: DataTypes.INTEGER,
      ISBN: DataTypes.INTEGER
    },
    {}
  );
<<<<<<< HEAD
  Book.associate = function(_models) {
=======
  Book.associate = function() {
>>>>>>> 226292d4bc61424f2b85addd2689581adc70f692
    // associations can be defined here
  };
  return Book;
};
