const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const bcrypt = require('bcryptjs');

//require controller modules//
const article_controller = require("../controllers/articleController");
const comment_controller = require("../controllers/commentController");

//article list for homepage
router.get("/articles", article_controller.article_list);

//article detail page for each article
router.get("/articles/:id", article_controller.article_detail)

//create an article
router.post("/articles", article_controller.article_create_post)

// router.post("/articles", (req, res) => {
//     console.log(req.body)
//     res.json({today: true})
// })



module.exports = router;