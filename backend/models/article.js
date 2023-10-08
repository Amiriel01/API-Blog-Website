//require mongoose
const mongoose = require("mongoose");
//define schema
const Schema = mongoose.Schema;
//require luxon for date/time format
const { DateTime } = require("luxon");

//create article schema
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    article_text: {
        type: String,
        required: true,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
    }],
});

ArticleSchema.virtual("url").get(function () {
    return `/routers/article/${this._id}`;
})

ArticleSchema.virtual("timestamp_formatted").get(function () {
    return DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATETIME_SHORT);
})

module.exports = mongoose.model("Article", ArticleSchema);