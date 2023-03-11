const User = require('./User');
const Application = require('./Application');
const loanOfficer = require('./loanOfficer');

Application.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsTo(loanOfficer, {
  foreignKey: 'user_id'
});


module.exports = {
  User,
  Application,
  loanOfficer,
};