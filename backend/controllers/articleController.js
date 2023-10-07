const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const Article = require("../models/article");
const { body, validationResult } = require("express-validator");


//display a list of all articles 
exports.article_list = asyncHandler(async (req, res, next) => {
    const articleList = await Article.find().exec()

    // res.json("article_list", {
    //     article_list: articleList
    // });

    res.json(articleList)
});

//display details for each article for user view
exports.article_detail = asyncHandler(async (req, res, next) => {
    const article = await Article.findById(req.body.id).populate().exec()

    res.json("article_detail", {
        title: article.title,
        article_text: article.article_text,
        article: article,
    });
});

//display article create form on GET(Do I need this?)
// exports.article_create_get = asyncHandler(async (req, res, next) => {
//     res.json("article_create");
// })

//handle article create on POST
exports.article_create_post = [
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
            res.json("article_create", {
                article: article,
                errors: errors.array(),
            });
            return;
        } else {
            //data from form is valid, save article
            res.json(await article.save())
        }
    })
]

//update article GET
exports.article_update_get = asyncHandler(async (req, res, next) => {
    const article = await Article.findById(req.body.id).exec();

    res.json("article_update", {
        article: article,
    })
})

exports.article_update_post = [
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

        //update article object with escaped and trimmed information
        let article = {
            title: req.body.title,
            article_text: req.body.article_text,
        };
        //when the errors are gone, render the form again with sanitized values and error messages
        if (!errors.isEmpty()) {
            //get article info from the form
            res.json("article_update", {
                article: article,
                errors: errors.array(),
            });
            return;
        } else {
            //data from form is valid, save article
            article = await Article.findByIdAndUpdate(req.body.id);
            return res.json('/article_detail')
        }
    }),
];

exports.article_delete_post = async (req, res, next) => {
    const articleId = await Article.findById(req.body.id).exec();
    await Article.findByIdAndRemove(req.body.articleId);
    res.json('/');
}