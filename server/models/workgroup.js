module.exports = (sequelize, DataTypes) => {
  const Workgroup = sequelize.define('Workgroup', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });

//  Workgroup.associate = function(models) {
//    Workgroup.hasMany(models.Task);
//  }

  return Workgroup;
};
