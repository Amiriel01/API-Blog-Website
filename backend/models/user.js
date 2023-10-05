// Require Mongoose
const mongoose = require("mongoose");
// Define schema
const Schema = mongoose.Schema;

//create user schema
const UserSchema = new Schema({ 
    username: {
        type: String,
        required: true, 
        unique: true,
        minLength: 5,
        maxLength: 15,
    },
    password: {
        type: String,
        required: true,
        maxLength: 100,
    },
    user: {
        type: Boolean,
        default: true,
    },
    admin: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("User", UserSchema);