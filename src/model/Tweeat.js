const mongoose = require('mongoose')

const TweeatSchema = new mongoose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Tweeat", TweeatSchema)