const router = require('express').Router();
const { User, Application } = require('../../Models');

//using api/user/


//user login route
router.post('/login', async (req, res) => {

  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.render('userHome');
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// //user logout route
// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
// eslint-disable-next-line indent
      //       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// //post route - should work for when the user submits the loan
router.post('/submit', async (req, res) => {
  try {
    const newApplication = await Application.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    // res.status(200).json(newApplication);
    res.render('submitted');
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;