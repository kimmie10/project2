<<<<<<< HEAD
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
=======
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Books", {
>>>>>>> 226292d4bc61424f2b85addd2689581adc70f692
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
<<<<<<< HEAD
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};
=======
  down: queryInterface => {
    return queryInterface.dropTable("Books");
  }
};
>>>>>>> 226292d4bc61424f2b85addd2689581adc70f692
