'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('People', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loginid: {
        type: Sequelize.STRING,
        allowNull: false
      },
      first: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last: {
        type: Sequelize.STRING,
        allowNull: false
      },
      displayName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {        
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
    	  	type: Sequelize.DATE,
        allowNull: false
        
      }
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('People');
  }
};