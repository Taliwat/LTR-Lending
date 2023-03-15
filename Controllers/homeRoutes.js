const router = require('express').Router();
const { User, Application, loanOfficer} = require('../models');

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

// // GET loan officer by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const loanOfficer = await LoanOfficer.findByPk(req.params.id);
//     if (!loanOfficer) {
//       return res.status(404).json({ error: 'Loan officer not found' });
//     }
//     res.json(loanOfficer);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });



module.exports = router;
