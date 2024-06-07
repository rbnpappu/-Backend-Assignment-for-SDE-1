const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{ 
        type: String 
    }], // Array of JWT tokens for authentication
    following: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }], 
    discussions: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Discussion' 
    }], 
    likedComments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment' 
    }], 
    repliedComments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment' 
    }]
});

module.exports = mongoose.model("User", userSchema);
