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
    Category.belongsToMany(models.Book, {
      as: "Books",
      through: "category_books",
      foreignKey: "categoryId"
    });
  };
  return Category;
};
