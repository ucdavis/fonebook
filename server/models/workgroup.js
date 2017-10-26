'use strict';
module.exports = (sequelize, DataTypes) => {
  var Workgroup = sequelize.define('Workgroup', {
    name: {
    	type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
      }
    }
  });
  
  Workgroup.associate = (models) => {
	  Workgroup.hasMany(models.Role);
  };
  return Workgroup;
};