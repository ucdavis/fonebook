'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OfficeHours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dayIndicator : {
      	type: Sequelize.STRING,
      	allowNull: false,
          validate: {
            notEmpty: true
          }
      },
      startTime: {
        type: Sequelize.DATE
      },
      endTime: {
        type: Sequelize.DATE
      },
      expiresOn: {
        type: Sequelize.DATE
      },
      phone: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Foreign key for Person
      personId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
    		  model: 'People',
    		  key: 'id',
    		  //as: 'personId'
    	  	}   	  
      },
   // Foreign key for Location
      locationId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
    		  model: 'Locations',
    		  key: 'id',
    		  //as: 'locationId'
    	  	}   	  
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OfficeHours');
  }
};