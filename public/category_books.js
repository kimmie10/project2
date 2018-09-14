"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  Category.associate = function(models) {
    models.Category.belongsToMany(models.Book, {
      as: "Books",
      through: models.CategoryBook,
      foreignKey: "book_id"
    });
  };
  return Category;
};

