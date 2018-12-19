'use strict';
module.exports = (sequelize, DataTypes) => {
  var Notification = sequelize.define('User', {
    username: DataTypes.STRING
  });

  Notification.associate = function(models) {
    // models.User.hasMany(models.Task);
  };

  Notification.send = function(userIDs,title,body,image,article){

  }

  Notification.markRecieved = function(id){

  }

  Notification.filter = function(dateFrom,dateTo,recieved){

  }

  return Notification;
};