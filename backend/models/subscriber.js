// Require Mongoose
const mongoose = require("mongoose");
// Define schema
const Schema = mongoose.Schema;

//create subscribe schema
const SubscriberSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    }
});

module.exports = mongoose.model("Subscriber", SubscriberSchema);