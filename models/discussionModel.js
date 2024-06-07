const mongoose = require("mongoose");

const discussionSchema = mongoose.Schema({
    textfield: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    hashtags: [{
        type: String,
        required: true
    }],
    createdon: {
        type: Date,
        default: Date.now
    },
    viewCount: {
        type: Number,
        default: 0
    },
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        text: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    viewCount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Discussion", discussionSchema);