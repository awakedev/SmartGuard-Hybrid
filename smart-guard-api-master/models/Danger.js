'use strict';
module.exports = (sequelize, DataTypes) => {
  
  var Danger = sequelize.define('Danger', {
    lat : DataTypes.DECIMAL(9,6),
    lng: DataTypes.DECIMAL(9,6),
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    priority: DataTypes.ENUM("LOW", "MEDIUM", "HIGH")
  });

  Danger.associate = function(models) {
    // models.User.hasMany(models.Task);
  };

  Danger.register = function(userID,password){

  }

  return Danger;
};