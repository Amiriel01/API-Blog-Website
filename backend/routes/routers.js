const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const bcrypt = require('bcryptjs');

//require controller modules//
const post_controller = require("../controllers/postController");
const comment_controller = require("../controllers/commentController");