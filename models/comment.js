const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let comment = new Schema(
    {
        commentId: {
            type: Number,
            default: 1
        },
        issueId: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        },
        comment: {
            type: String,
            default: ''
        },
        created: {
            type: Date,
            default: Date.now()
        }
        
    }
)

mongoose.model('comment', comment);
