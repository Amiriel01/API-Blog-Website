const express = require('express');
const router = express.Router();
const passport = require('passport');

//require controller module
const user_controller = require("../controllers/userController")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//sign up form POST
router.post('/sign-up', user_controller.sign_up)

// //user login
// router.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/users/login"
//   })
// );

//user login
router.post(
  "/login",
  passport.authenticate("json", {
    failureRedirect: "/login",
    successRedirect: "/"
  })
);

//user logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    // res.json("You were logged out.")
    res.redirect('/')
  });
});

//user update DELETE
router.delete("/user/:id", user_controller.user_delete)

module.exports = router;
