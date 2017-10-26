'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	  queryInterface.bulkInsert('Locations', [{
		   building: 'HART HALL',
		   room: 'Room 203',
		   label: 'Location N1',
		   createdAt: new Date(),
		   updatedAt: new Date()
		 }, {
		   building: 'SPROUL HALL',
		   room: 'Room 204',
		   label: 'Location N2',
		   createdAt: new Date(),
		   updatedAt: new Date()
		 }, {
		   building: 'SSH HALL',
		   room: 'Room 205',
		   label: 'Location N3',
		   createdAt: new Date(),
		   updatedAt: new Date()
		 }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations')
  }
};
