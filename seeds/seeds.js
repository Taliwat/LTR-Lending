const sequelize = require('../config/connection');
const { loanOfficer, User, Application } = require('../Models');

const UserData = require('./UserData.json');
const loanOfficerData = require('./loanOfficerData.json');
const ApplicationData = require('./ApplicationData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(UserData, {
    individualHooks: true,
    returning: true,
  });

  const officer = await loanOfficer.bulkCreate(loanOfficerData, {
    individualHooks: true,
    returning: true,
  });


  const app = await Application.bulkCreate(ApplicationData);

  process.exit(0);
};

seedDatabase();