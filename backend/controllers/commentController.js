const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const Article = require("../models/article");
const { body, validationResult } = require("express-validator");
const Comment = require("../models/comment");

exports.comment_create = [
    //validate and sanitize fields
    body("comment_text", "Article cannot be blank.")
        .trim()
        .isLength({ min: 1 })
        .isLength({ max: 250 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        //take out validation errors from the request
        const errors = validationResult(req);

        const article = await Article.findById(req.params.id).exec()
        const user = await User.findOne().exec()
        //create article object with info
        const comment = new Comment({
            article: article,
            user: user,
            comment_text: req.body.comment_text,
        });
        //when the errors are gone, render the form again with sanitized values and error messages
        if (!errors.isEmpty()) {
            //get article info from the form
            errors.array()
            // res.json(comment)
            return;
        } else {
            //data from form is valid, save article
            res.json(await comment.save())
        }
    })
]


