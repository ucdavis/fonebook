module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
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
  }, {
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });

//  Workgroup.associate = function(models) {
//    Workgroup.hasMany(models.Task);
//  }

  return Person;
};
