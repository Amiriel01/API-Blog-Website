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
router.post("/article", article_controller.article_create)

//article detail page for each article
router.get("/article/:id", article_controller.article_detail)

//article update PUT
router.put("/article/:id", article_controller.article_update)

//article update DELETE
router.delete("/article/:id", article_controller.article_delete)

//comment create POST
router.post("/article/:id/comment", comment_controller.comment_create)

//comment update PUT
router.put("/article/:id/comment/:id", comment_controller.comment_update);

//comment DELETE
router.delete("/article/:id/comment/:commentId", comment_controller.comment_delete);


module.exports = router;