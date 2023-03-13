const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class loanOfficer extends Model {
  checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
  }
}

loanOfficer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newloanOfficerData) => {
        newloanOfficerData.password = await bcrypt.hash(newloanOfficerData.password, 10);
        return newloanOfficerData;
      },
      beforeUpdate: async (updatedloanOfficerData) => {
        updatedloanOfficerData.password = await bcrypt.hash(updatedloanOfficerData.password, 10);
        return updatedloanOfficerData;
      },
  },
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'loanOfficer',
  }
);

module.exports = loanOfficer;