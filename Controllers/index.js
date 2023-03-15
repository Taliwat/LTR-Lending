const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);

//this is middleware - This is useful for handling requests that do not match any of the defined routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

