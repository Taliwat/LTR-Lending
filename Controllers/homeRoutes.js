const router = require('express').Router();
const { User, Application, loanOfficer} = require('../Models');

//using localhost:3001

router.get('/', async (req, res) => {
  res.render('home');
});

router.get('/londa', async (req, res) => {
  res.render('londa');
});

router.get('/ryan', async (req, res) => {
  res.render('ryan');
});

router.get('/tommy', async (req, res) => {
  res.render('tommy');
});

router.get('/lologin', async (req, res) => {
  res.render('lologin');
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/signup', async (req, res) => {
  res.render('signup');
});

router.get('/about', async (req, res) => {
  res.render('about');
});

router.get('/calc', async (req, res) => {
  res.render('calc');
});





module.exports = router;
