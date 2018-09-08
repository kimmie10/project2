"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: DataTypes.STRING,
      summary: DataTypes.TEXT,
      publishedDate: DataTypes.DATE,
      author: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      ISBN: DataTypes.INTEGER
    },
    {}
  );
  Book.associate = function(/*_models*/) {
    // associations can be defined here
  };
  return Book;
};
