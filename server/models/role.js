'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    role: {
    	type:DataTypes.STRING,
    	allowNull:false
    	}    
  });
  
  Role.associate = (models)=>{
	  Role.belongsTo(models.Person,{
		  onDelete:'CASCADE'
	  },
  Role.associate = (models)=>{
	  Role.belongsTo(models.Workgroup,{
		  onDelete: 'CASCADE'
	  })
  })
  }
  return Role;
};