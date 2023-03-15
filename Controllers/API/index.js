const router = require('express').Router();
const loanOfficer = require('./loanOfficerRoutes');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/loanofficer', loanOfficer);


module.exports = router;
