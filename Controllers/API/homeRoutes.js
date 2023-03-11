const router = require('express').Router();



router.get('/', async (req, res) => {
  res.send('<h1>Welcome to LTR Lending!</h1>');
});


// router.get('/', async (req,res) =>{

//     // get / about Londa

// });

// router.get('/', async (req,res) =>{

//     // get /about Ryan

// });

// router.get('/', async (req,res) =>{

//     // get/ about Tommy


module.exports = router;
