const mongoose = require('mongoose');

//Creating the user schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);