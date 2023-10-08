const express = require('express');
const router = express.Router();
const passport = require('passport');

//require controller module
const user_controller = require("../controllers/userController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//sign up form POST
router.post('/sign-up', user_controller.sign_up)


module.exports = router;
