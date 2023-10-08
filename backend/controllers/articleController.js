const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const Article = require("../models/article");
const { body, validationResult } = require("express-validator");
const Comment = require("../models/comment")


//display a list of all articles 
exports.article_list = asyncHandler(async (req, res, next) => {
    const articleList = await Article.find().exec()

    res.json(articleList)
});

//display details for each article for user view
exports.article_detail = asyncHandler(async (req, res, next) => {
    const articleDetail = await Article.findById(req.params.id).populate("comments").exec()
    const comments = await Comment.find({article: articleDetail._id})
    //figure out why it is not autopopulating later!
    articleDetail.comments = comments
    // console.log(req.body._id)
    console.log(articleDetail)
    res.json(articleDetail)
});

//handle article create on POST
exports.article_create = [
    //validate and sanitize fields
    body("title", "Title cannot be blank")
        .trim()
        .isLength({ min: 1 })
        .isLength({ max: 50 })
        .escape(),
    body("article_text", "Article cannot be blank.")
        .trim()
        .isLength({ min: 1 })
        .isLength({ max: 1000 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        //take out validation errors from the request
        const errors = validationResult(req);
        //create article object with info
        const article = new Article({
            title: req.body.title,
            article_text: req.body.article_text,
        });
        //when the errors are gone, render the form again with sanitized values and error messages
        if (!errors.isEmpty()) {
            //get article info from the form
            errors.array()
            res.json(article)
            
            return;
        } else {
            //data from form is valid, save article
            res.json(await article.save())
        }
    })
]

exports.article_update = [
    //validate and sanitize fields
    body("title", "Title cannot be blank")
        .trim()
        .isLength({ min: 1 })
        .isLength({ max: 50 })
        .escape(),
    body("article_text", "Article cannot be blank.")
        .trim()
        .isLength({ min: 1 })
        .isLength({ max: 1000 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        //take out validation errors from the request
        const errors = validationResult(req);

        //when the errors are gone, render the form again with sanitized values and error messages
        if (!errors.isEmpty()) {
            //get article info from the form
            res.json("Console.log for errors");
            return;
        } else {
            //
            const articleUpdate = await Article.findByIdAndUpdate(req.body._id, {title: req.body.title}, {article_text: req.body.article_text}).exec()
            //data from form is valid, save article
            return res.json(articleUpdate)
        }
    }),
];

exports.article_delete = async (req, res, next) => {
    const articleDelete = await Article.findByIdAndRemove(req.params.id).exec();
    res.json(articleDelete);
}