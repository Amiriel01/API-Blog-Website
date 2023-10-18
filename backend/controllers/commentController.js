const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const Article = require("../models/article");
const { body, validationResult } = require("express-validator");
const Comment = require("../models/comment");
const article = require("../models/article");

exports.comment_create = [
    //validate and sanitize fields
    body("name", "Name cannot be blank.")
        .trim()
        .isLength({ min: 3 })
        .isLength({ max: 20 })
        .escape(),
    body("email", "Email cannot be blank.")
        .trim()
        .escape(),
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
            // user: user,
            name: req.body.name,
            email: req.body.email,
            comment_text: req.body.comment_text,
        });
        //when the errors are gone, render the form again with sanitized values and error messages
        if (!errors.isEmpty()) {
            //get article info from the form
            errors.array()
            res.json(errors.array())
            return;
        } else {
            //data from form is valid, save article
            res.json(await comment.save())
        }
    })
]

exports.comment_update = [
    //validate and sanitize fields
    body("name", "Name cannot be blank.")
        .trim()
        .isLength({ min: 3 })
        .isLength({ max: 20 })
        .escape(),
    body("email", "Email cannot be blank.")
        .trim()
        .escape(),
    body("comment_text", "Article cannot be blank.")
        .trim()
        .isLength({ min: 1 })
        .isLength({ max: 250 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        //take out validation errors from the request
        const errors = validationResult(req);

        //when the errors are gone, render the form again with sanitized values and error messages
        if (!errors.isEmpty()) {
            //get comment info from the form
            // res.json("Console.log for errors");
            // console.log(comment_update)
            return res.json(errors)
        } else {
            //update the comment
            const commentUpdate = await Comment.findByIdAndUpdate(req.body._id, { comment_text: req.body.comment_text, published: req.body.published }).exec()
            //data from form is valid, save article
            return res.json(commentUpdate)
        }
    })
]

//comment delete
exports.comment_delete = async (req, res, next) => {
    const commentDelete = await Comment.findByIdAndRemove(req.params.commentId).exec();
    res.json(commentDelete);
}

