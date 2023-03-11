const router = require('express').Router();
const loanOfficer = require('./loanOfficerRoutes');
const userRoutes = require('./userRoutes');
const home = require('./homeRoutes')

router.use('/user', userRoutes);
router.use('/loanofficer', loanOfficer);
router.use('/home', home);

module.exports = router;
