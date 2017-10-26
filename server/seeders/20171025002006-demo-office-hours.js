'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
	  return queryInterface.bulkInsert('OfficeHours', [{
			startTime: new Date(),
			endTime: new Date(),
			expiresOn: new Date(),
			phone: '(530) 123 4567',
			title: 'Office Hour A',
	        createdAt: new Date(),
	        updatedAt: new Date(),
	        personId: 1,
	        dayIndicator: '3',
	        locationId:1
	      },{
    	  		startTime: new Date(),
			endTime: new Date(),
			expiresOn: new Date(),
			phone: '(530) 234 567',
			title: 'Office Hour B',
	        createdAt: new Date(),
	        updatedAt: new Date(),
	        personId: 2,
	        dayIndicator: '2',
	        locationId:2
	      },{
    	  		startTime: new Date(),
			endTime: new Date(),
			expiresOn: new Date(),
			phone: '(530) 234 567',
			title: 'Office Hour B-2',
	        createdAt: new Date(),
	        updatedAt: new Date(),
	        personId: 3,
	        dayIndicator: '4',
	        locationId:3
	      },{
    	  		startTime: new Date(),
			endTime: new Date(),
			expiresOn: new Date(),
			phone: '(530) 345 678',
			title: 'Office Hour C',
	        createdAt: new Date(),
	        updatedAt: new Date(),
	        personId: 1,
	        dayIndicator: '4',
	        locationId:1
	      },{
    	  		startTime: new Date(),
			endTime: new Date(),
			expiresOn: new Date(),
			phone: '(530) 345 678',
			title: 'Office Hour C-2',
	        createdAt: new Date(),
	        updatedAt: new Date(),
	        personId: 2,
	        dayIndicator: '5',
	        locationId:2
		      }
	      ]);
	  
  },

  down: (queryInterface, Sequelize) => {
	  return queryInterface.bulkDelete('OfficeHours', null, {});
  }
};
