// Get arguments passed on command line
const userArgs = process.argv.slice(2);

//require models
const User = require("./models/user");
const Comment = require("./models/comment");
const Article = require("./models/article");

const users = [];
const articles = [];
const comments = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await getUsers();
    await getArticles();
    await getComments();
    
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

//create functions to create the user and message objects
async function userCreate(username, password, member, admin) {
    const userDetail = {
        username: username,
        password: password,
        member: member,
        admin: admin,
    };

    const user = new User(userDetail);

    await user.save();
    users.push(user);
    console.log(`Added User: ${user}`);
}

async function articleCreate(title, timestamp, article_text) {
    const articleDetail = {
        title: title,
        timestamp: timestamp,
        article_text: article_text,
    };

    const article = new Article(articleDetail);

    await article.save();
    articles.push(article);
    console.log(`Added Article: ${article}`)
}

async function commentCreate(article, user, timestamp, comment_text) {
    const commentDetail = {
        article: article,
        user: user,
        timestamp: timestamp,
        comment_text: comment_text,
    };

    const comment = new Comment(commentDetail);

    await comment.save();
    comments.push(comment);
    console.log(`Added Comment: ${comment}`)
}

async function getUsers() {
    console.log("Adding Users")
    await Promise.all([
        userCreate(
            "Admin23",
            "Admin23",
            true,
            true,
        )
    ])
}

async function getArticles() {
    console.log("Adding Articles")
    await Promise.all([
        articleCreate(
            "Day 1",
            Date.now(),
            "It is day one."
        )
    ])
}

async function getComments() {
    console.log("Adding Comments")
    await Promise.all([
        commentCreate(
            articles[0],
            users[0],
            Date.now(),
            "Yes, it is day one."
        )
    ])
}


