'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	  
	  return queryInterface.bulkInsert('People', [{
		  loginid: 'vvega',
	        first: 'Vincent',
	        last: 'Vega',
	        displayName: 'Vincent Vega',
	        email: 'vvega@mail.com',
	        createdAt: new Date(),
	        updatedAt: new Date()
	      },{
			loginid: 'mwallace',
	        first: 'Mia',
	        last: 'Wallace',
	        displayName: 'Mia Wallace',
	        email: 'mwallace@mail.com',
	        createdAt: new Date(),
	        updatedAt: new Date()
	      },{
			loginid: 'jwinnfield',
	        first: 'Jules',
	        last: 'Winnfield',
	        displayName: 'Jules Winnfield',
	        email: 'jwinnfield@mail.com',
	        createdAt: new Date(),
	        updatedAt: new Date()
		      }
	      ]);

  },

  down: (queryInterface, Sequelize) => {
	  
	  return queryInterface.bulkDelete('People', null, {});
  }
};
