const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Application extends Model {}

Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id"
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ssn: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    income: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isInt: {
        msg: "Must be an integer number of dollars"
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    credit: {
      type: DataTypes.INTEGER,
      min: 300,
      max: 850
    },
    loan_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: true,
      isIn: {
        args: [['Auto', 'Residential', 'Personal']],
        msg: "Must be an Auto, Home or Personal Loan"
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
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