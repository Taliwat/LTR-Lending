const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;