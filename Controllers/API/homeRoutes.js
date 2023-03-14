const router = require('express').Router();
const { User, Application, loanOfficer} = require('../../models');


router.get('/', async (req, res) => {
  res.render('home');
});


// GET loan officer by ID
router.get('/:id', async (req, res) => {
  try {
    const loanOfficer = await LoanOfficer.findByPk(req.params.id);
    if (!loanOfficer) {
      return res.status(404).json({ error: 'Loan officer not found' });
    }
    res.json(loanOfficer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;
