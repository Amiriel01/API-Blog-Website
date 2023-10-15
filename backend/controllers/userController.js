// const Controller = require("../models/controller");
const asyncHandler = require("express-async-handler");
const Article = require("../models/article");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const Subscriber = require("../models/subscriber");

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
            console.log(errors)
            res.json({ error: "there is an error" })
            return;
        } else {
            //data is valid, save user
            console.log(user)
            res.json(await user.save())
        }
    }),
]

exports.user_delete = async (req, res, next) => {
    console.log("delete")
    const userDelete = await User.findByIdAndRemove(req.params.id).exec();

    res.json(userDelete);
}

//handle subscribe POST
exports.subscriber = [
    //validate and sanitize the sign up form fields
    body("name", "Name cannot be blank")
        .trim()
        .isLength({ min: 5 })
        .isLength({ max: 50 })
        .escape(),
    body("email", "Email cannot be blank.")
        .trim()
        .escape(),

    asyncHandler(async (req, res, next) => {
        //take out validation errors from the request
        const errors = validationResult(req);

        //create sign up form object with escaped and trimmed info
        const subscriber = new Subscriber({
            name: req.body.name,
            email: req.body.email,
        });

        //when the errors are gone, render the form again with the sanitized values and error messages
        if (!errors.isEmpty()) {
            //get all user info from the form
            // user.user,
            errors.array()
            console.log(errors)
            res.json({ error: "there is an error" })
            return;
        } else {
            //data is valid, save user
            // console.log(subscriber)
            res.json(await subscriber.save())
        }
    })
]
