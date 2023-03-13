const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//this is middleware - This is useful for handling requests that do not match any of the defined routes
router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;

