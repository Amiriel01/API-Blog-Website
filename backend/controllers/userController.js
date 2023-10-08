// const Controller = require("../models/controller");
const asyncHandler = require("express-async-handler");
const Article = require("../models/article");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");

//handle sign up POST
exports.sign_up = [
    //validate and sanitize the sign up form fields
    body("username", "Username cannot be blank")
        .trim()
        .isLength({ min: 5 })
        .isLength({ max: 25 })
        .escape(),
    body("password", "Password cannot be blank.")
        .trim()
        .isLength({ min: 5 })
        .isLength({ max: 10 })
        .escape(),
    body("confirm_password", "Confirm password cannot be blank.")
        .trim()
        .isLength({ min: 5 })
        .isLength({ max: 10 })
        .custom(async (confirmPassword, { req }) => {
            console.log(confirmPassword)
            const password = req.body.password
            console.log(password)
            if (password !== confirmPassword) {
                throw new Error('Passwords must match.')
            }
            return true;
        })
        .escape(),

    asyncHandler(async (req, res, next) => {
        //take out validation errors from the request
        const errors = validationResult(req);
        const hashPassword = await bcrypt.hashSync(req.body.password, 10)

        //create sign up form object with escaped and trimmed info
        const user = new User({
            username: req.body.username,
            password: hashPassword,
        });

        //when the errors are gone, render the form again with the sanitized values and error messages
        if (!errors.isEmpty()) {
            //get all user info from the form
            // user.user,
            errors.array()
            res.json(user)
            return;
        } else {
            //data is valid, save user
            console.log(user)
            res.json(await user.save())
        }
    }),
]