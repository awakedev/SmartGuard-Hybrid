'use strict';
module.exports = (sequelize, DataTypes) => {
  var LocationPing = sequelize.define('LocationPing', {
    lat : DataTypes.DECIMAL(9,6),
    lng: DataTypes.DECIMAL(9,6),
    userId: DataTypes.STRING
  });

  LocationPing.associate = function(models) {
    // models.User.hasMany(models.Task);
  };

  LocationPing.locateUser = function(userId){
    return this.findAll({
      limit : 10,
      where : {
        userId : userId
      }
    }).then(pings=> pings);
  }

  LocationPing.register = function(userID,password){

  }

  return LocationPing;
};