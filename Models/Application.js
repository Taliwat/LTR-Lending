const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Application extends Model {}

Application.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'loanOfficer',
  }
);

module.exports = Application;