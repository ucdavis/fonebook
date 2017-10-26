'use strict';
module.exports = (sequelize, DataTypes) => {
  var OfficeHours = sequelize.define('OfficeHours', {
	  dayIndicator : {
	    	type: DataTypes.STRING,
	    	allowNull: false,
	        validate: {
	          notEmpty: true
	        }
	    },
	  startTime : {
	    	type:DataTypes.DATE,
	    	allowNull: false,
	        validate: {
	          notEmpty: true
	        }
	    },
	    endTime : {
	    		type:DataTypes.DATE,
	    		allowNull: false,
	        validate: {
	          notEmpty: true
	        }
	    },
	    expiresOn : {
	    		type:DataTypes.DATE
	    },
	    phone : {
	    		type:DataTypes.STRING
	    },
	    title : {
	    		type:DataTypes.STRING
	    }

  });
  
  OfficeHours.associate = (models) => {
	  OfficeHours.belongsTo(models.Person, {	      
	      onDelete: 'CASCADE',
	      //foreignKey: 'person_id',
	      //as: 'officeHoursPerson',
	    }),
	 OfficeHours.belongsTo(models.Location, {
	      onDelete: 'CASCADE',
	    });
	  };
  return OfficeHours;
};