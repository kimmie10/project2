"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      publisher: DataTypes.STRING,
      publishedDate: DataTypes.DATE,
      authorId: DataTypes.INTEGER,
      isbn: DataTypes.INTEGER,
      googleLink: DataTypes.STRING,
      googleId: DataTypes.STRING,
      isbns: { type: DataTypes.JSON, allowNull: true },
      imageUrl: DataTypes.STRING,
      ratingsCount: DataTypes.INTEGER
    },
    {}
  );
  Book.associate = models => {
    // associations can be defined here
    models.Book.belongsToMany(models.Category, {
      through: "category_books",
      as: "categories",
      foreignKey: "bookId"
    });
  };
  return Book;
};
