//require mongoose
const mongoose = require("mongoose");
//define schema
const Schema = mongoose.Schema;
//require luxon for date/time format
const { DateTime } = require("luxon");

//create comment schema
const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article",
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    comment_text: {
        type: String,
        required: true,
        minLenth: 1,
        maxLength: 250,
    }
})

CommentSchema.virtual("url").get(function () {
    return `/routers/comment/${this._id}`;
})

CommentSchema.virtual("timestamp_formatted").get(function () {
    return DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATETIME_SHORT);
})

module.exports = mongoose.model("Comment", CommentSchema);