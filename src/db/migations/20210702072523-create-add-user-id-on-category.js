'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [ queryInterface.addColumn(
      "categories",
      "user_id",
      {
        type: Sequelize.INTEGER,
        after: 'id'
      }
    ) ]
  },
  down: async (queryInterface, Sequelize) => {
    
  }
};