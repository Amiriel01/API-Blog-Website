// Get arguments passed on command line
const userArgs = process.argv.slice(2);

//require models
const User = require("./models/user");
const Comment = require("./models/comment");
const Article = require("models/article");

const users = [];
const comments = [];
const articles = []

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await getUsers();
    await getComments();
    await getArticles();
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
    users[index]= user
    console.log(`Added User: ${user}`);
}

async function articleCreate(title, timestamp, post_text) {
    const articleDetail = {
        title: title,
        timestamp: timestamp,
        post_text: post_text,
    };

    const article = new Article(articleDetail);

    await article.save();
    article[index]= article
    console.log(`Added Article: ${article}`)
}

async function commentCreate(user, timestamp, comment_text) {
    const commentDetail = {
        user: user,
        timestamp: timestamp,
        comment_text: comment_text,
    };

    const comment = new Comment(commentDetail);

    await comment.save();
    comment[index]= comment
    console.log(`Added Comment: ${comment}`)
}

async function getUsers() {
    console.log("Adding Users")
    await Promise.all([
        userCreate()
    ])
}

async function getArticles() {
    console.log("Adding Articles")
    await Promise.all([
        articleCreate()
    ])
}

async function getComments() {
    console.log("Adding Comments")
    await Promise.all([
        commentCreate()
    ])
}
