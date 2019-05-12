/*'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bussiness = sequelize.define('Bussiness', {
    name: DataTypes.STRING,
    loc: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Bussiness.associate = function(models) {
    // associations can be defined here
  };
  return Bussiness;
};
*/

export default (sequelize, DataTypes) => {
  const Bussiness = sequelize.define('Bussiness', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    loc: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your location'
    },
    kind: {
      type: DataTypes.STRING,
      allowNull: {
        args: true,
      }
    },
  }, });
  Bussiness.associate = (models) => {
    // associations can be defined here
          Bussiness.hasMany(models.Staff, {
        foreignKey: 'bussinessId',
      });
  };
  return Bussiness;
};

