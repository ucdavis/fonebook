'use strict';
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('Person', {
	  loginid: {
	      type: DataTypes.STRING,
	      allowNull: false,
	      validate: {
	        notEmpty: true,
	        notContains: ' '
	      }
	    },
	    first: {
	      type: DataTypes.STRING,
	      allowNull: false,
	      validate: {
	        notEmpty: true
	      }
	    },
	    last: {
	      type: DataTypes.STRING,
	      allowNull: false,
	      validate: {
	        notEmpty: true
	      }
	    },
	    displayName: {
	      type: DataTypes.STRING,
	      allowNull: true, // can compose from 'first' and 'last'
	      validate: {
	        notEmpty: true
	      }
	    },
	    email: {
	      type: DataTypes.STRING,
	      allowNull: false,
	      validate: {
	        isEmail: true
	      }
	    }

  });
  
  Person.associate = (models) => {
	    Person.hasMany(models.OfficeHours, {
	      //foreignKey: 'person_id',
	      //as: 'todoItems',
	    }),
	Person.hasMany(models.Role);
	  };

  return Person;
};