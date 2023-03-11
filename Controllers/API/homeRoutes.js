const router = require('express').Router();



router.get('/', async (req, res) => {
    res.send('<h1>Welcome to LTR Lending!</h1>');
});

module.exports = router;
