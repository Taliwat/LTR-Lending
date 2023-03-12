const { Application } = require('express');

const router = require('express').Router();
// const { User } = require('../../models');

//gets the home page for the user (still need to incorp Handlebars)
router.get('/', async (req,res) =>{

  res.send('<h1>Home page for the User');

});

//post route - should work for when the user submits the loan
router.post('/', async (req, res) => {
  try {
    const newApplication = await Application.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newApplication);
  } catch (err) {
    res.status(400).json(err);
  }
});


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
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //user logout route
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;