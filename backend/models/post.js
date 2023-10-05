//require mongoose
const mongoose = require("mongoose");
//define schema
const Schema = mongoose.Schema;
//require luxon for date/time format
const { DateTime } = require("luxon");

//create post schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    post_text: {
        type: String,
        required: true,
    },
});

PostSchema.virtual("url").get(function () {
    return `/routers/post/${this._id}`;
})

PostSchema.virtual("timestamp_formatted").get(function () {
    return DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATETIME_SHORT);
})

module.exports = mongoose.model("Post", PostSchema);