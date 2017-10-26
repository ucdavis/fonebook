'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      personId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
        	model: 'People',
        	key: 'id'
        }
      },
      workgroupId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
        	model: 'workgroups',
        	key: 'id'
        }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Roles');
  }
};