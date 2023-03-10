const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class loanOfficer extends Model {}

loanOfficer.init(
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

module.exports = loanOfficer;