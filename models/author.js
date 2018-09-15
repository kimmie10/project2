"use strict";
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      name: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  Author.associate = function(models) {
    Author.belongsToMany(models.Book, {
      as: "Books",
      through: "author_books",
      foreignKey: "bookId"
    });
  };
  return Author;
};
