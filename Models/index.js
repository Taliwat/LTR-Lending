// import models
const User = require('./User');
const Application = require('./Application');
const loanOfficer = require('./loanOfficer');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  User,
  Application,
  loanOfficer,
};