const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let notification = new Schema(
    {
        notificationId: {
            type: Number,
            default: ''
        },
        issueId: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        },
        notifyChange: {
            type: String,
            default: ''
        },
        byWhom: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
        
    }
)

mongoose.model('notification', notification);
