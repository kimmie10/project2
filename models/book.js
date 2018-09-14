"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      summary: DataTypes.TEXT,
      publishedDate: DataTypes.DATE,
      authorId: DataTypes.INTEGER,
      ISBN: DataTypes.INTEGER,
      readMoreGoogleLink: DataTypes.STRING,
      ISBNS: { type: DataTypes.JSON, allowNull: true }
    },
    {}
  );
  Book.associate = function(/*_models*/) {
    // associations can be defined here
  };
  return Book;
};
