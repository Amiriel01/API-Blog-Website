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

//create an article
router.post("/article", article_controller.article_create_post)

//article detail page for each article
router.get("/article/:id", article_controller.article_detail)

//article update POST
router.put("/article/:id", article_controller.article_update)




// router.post("/articles", (req, res) => {
//     console.log(req.body)
//     res.json({today: true})
// })



module.exports = router;