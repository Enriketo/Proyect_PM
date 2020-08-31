'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    //userName: DataTypes.STRING,
    email: DataTypes.STRING,
//    password: DataTypes.STRING,
//    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    sex: DataTypes.ENUM({
      values: ['F', 'M', 'Other']
    }),
    //document:	DataTypes.INTEGER,
    //documentType:	DataTypes.ENUM({
    //  values: ['CC', 'CE', 'TI', 'NIT', 'PAS'] 
    //}),
    active:	DataTypes.BOOLEAN,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, );
  return User;
};
