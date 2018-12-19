'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    profileComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    facebookId: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    lastSeen: DataTypes.STRING,
    firstNames: DataTypes.STRING,
    surname: DataTypes.STRING,
    min_age: DataTypes.INTEGER,
    max_age: DataTypes.INTEGER,
    gender: DataTypes.ENUM("MALE", "FEMALE"),
    bloodType: DataTypes.STRING,
    knownAllergies: DataTypes.STRING,
    profileImageUrl: DataTypes.STRING
  });

  // Instnance Methods
  User.prototype.getJWTData = function() {
    return {
      "profileComplete" : this.profileComplete,
      "id" : this.id
    }
  };

  // Adding a class level method
  User.prototype.completeProfile = function() {
    this.setDataValue("profileComplete",true);
    return this.save();
  };


  // Class Methods

  User.associate = function(models) {
    // models.User.hasMany(models.Task);
  };

  User.register = function(userID,password){

  }

  User.findOrCreate = function(idInfo){
    this.find({
      where: idInfo
    }).then(user=>{
      if (user) return user;
      else return this.create(idInfo);
    })
  }

  return User;
};