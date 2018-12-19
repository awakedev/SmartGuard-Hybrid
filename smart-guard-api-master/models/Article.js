'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    onWeb: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    onDevice: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Article.associate = function(models) {
    // models.User.hasMany(models.Task);
  };

  Article.register = function(userID,password){

  }

  return Article;
};