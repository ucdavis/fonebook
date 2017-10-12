module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
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
  }, {
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });

//  Workgroup.associate = function(models) {
//    Workgroup.hasMany(models.Task);
//  }

  return Location;
};
