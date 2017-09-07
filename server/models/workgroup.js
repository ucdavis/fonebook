"use strict";

module.exports = function(sequelize, DataTypes) {
  var Workgroup = sequelize.define("Workgroup", {
    name: DataTypes.STRING
  }, {
  	updatedAt:"updated_at",
  	createdAt:"created_at"
  	});

//  Workgroup.associate = function(models) {
//    Workgroup.hasMany(models.Task);
//  }
  
  return Workgroup;
};