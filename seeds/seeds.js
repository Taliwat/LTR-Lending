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

  for (const loanOfficer of loanOfficerData) {
    await loanOfficer.create({
      ...loanOfficer,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const Application of ApplicationData) {
    await Application.create({
      ...Application,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();