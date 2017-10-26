'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Workgroups', [{
	    name: 'Workgroup A',
	    createdAt: new Date(),
	    updatedAt: new Date()
	  },
      {
		name: 'Workgroup B',
		createdAt: new Date(),
		updatedAt: new Date()
      },
      {
    	  	name: 'Workgroup C',
  		createdAt: new Date(),
  		updatedAt: new Date()    	  
      },
      {
    	  	name: 'Workgroup D',
  		createdAt: new Date(),
  		updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Workgroups', null, {});

  }
};
