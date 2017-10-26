'use strict';
module.exports = (sequelize, DataTypes) => {
  var Location = sequelize.define('Location', {
	  building: {
	      type: DataTypes.STRING,
	      allowNull: false,
	      validate: {
	        notEmpty: true
	      }
	    },
	    room: {
	      type: DataTypes.STRING,
	      allowNull: false,
	      validate: {
	        notEmpty: true
	      }
	    },
	    label: {
	      type: DataTypes.STRING,
	      allowNull: false,
	      validate: {
	        notEmpty: true
	      }
	    }

  });
  
  Location.associate = function (models) {
	    Location.hasMany(models.OfficeHours, {
	    	//foreignKey: 'location_id'
	    });
	};
  return Location;
};