const router = require('express').Router();
const { User, Application, loanOfficer } = require('../../Models');

//using api/loanOfficer

//loanOfficer login route
router.post('/login', async (req, res) => {

  try {
    const officerData = await loanOfficer.findOne({ where: { email: req.body.email } });

    if (!officerData) {
      res
        .status(400)
        .json({ message: 'Incorrect email, please try again' });
      return;
    }

    const validPassword = await officerData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = officerData.id;
      req.session.logged_in = true;

      res.render('officerHome');
    });

  } catch (err) {
    res.status(400).json(err);
  }
});
// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// //get application by type
// router.get('/:type', async (req, res) => {
//   try {
//     const applicationData = await Application.findAll({
//       where: {type: req.params.type}
//     });

//     res.status(200).json(applicationData);

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });




// // POST to approve/deny loan application
// router.post('/:id/approve', async (req, res) => {
//   try {
//     const loanApplication = await LoanApplication.findByPk(req.params.id);
//     if (!loanApplication) {
//       return res.status(404).json({ error: 'Loan application not found' });
//     }
//     if (loanApplication.status !== 'pending') {
//       return res.status(400).json({ error: 'Loan application has already been processed' });
//     }
//     loanApplication.status = req.body.approved ? 'approved' : 'denied';
//     await loanApplication.save();
//     res.json({ message: 'Loan application updated successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

module.exports = router;