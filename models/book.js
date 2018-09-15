"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      publisher: DataTypes.STRING,
      publishedDate: { type: DataTypes.DATE, allowNull: true },
      authorId: DataTypes.INTEGER,
      isbn: DataTypes.INTEGER,
      googleLink: DataTypes.STRING,
      googleId: DataTypes.STRING,
      isbns: { type: DataTypes.JSON, allowNull: true },
      imageUrl: DataTypes.STRING,
      pageCount: { type: DataTypes.INTEGER, allowNull: true }
    },
    {}
  );
  Book.associate = models => {
    Book.belongsToMany(models.Category, {
      onDelete: "CASCADE",
      through: "category_books",
      as: "categories",
      foreignKey: "bookId"
    });

    Book.belongsToMany(models.Author, {
      onDelete: "CASCADE",
      through: "author_books",
      as: "authors",
      foreignKey: "bookId"
    });
  };
  return Book;
};
