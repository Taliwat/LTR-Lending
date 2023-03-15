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
        model: 'User',
        key: 'id'
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
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [9]
      },
    },
    income: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: true,
      isInt: {
        msg: 'Must be an integer amount of dollars'
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
        args: [['Auto', 'Home', 'Personal']],
        msg: 'Must be an Auto, Home or Personal Loan'
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    amount_requested: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: true,
      isInt: {
        msg: 'Must be an integer amount of dollars'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Application',
  }
);

module.exports = Application;