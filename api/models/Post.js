const mongoose = require('mongoose');

//Creating the user schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: false,
    }
}, { timestamps: true });

modulele.exports = mongoose.model("Post", postSchema);