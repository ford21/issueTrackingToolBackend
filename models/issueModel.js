const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let issueTrackingTool = new Schema(
    {
        trackingId: {
            type: String,
            unique: true
        },
        title: {
            type: String,
            text: true,
            default: ''
        },
        description: {
            type: String,
            text: true,
            default: ''
        },
        bigDes: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            text: true,
            default: 'open'
        },
        creator: {
            type: String,
            default: 'admin'
        },
        email:{
            type: String,
            default: ''
        },
        assigned: {
            type: String,
            default: ''
        },
        created: {
            type: Date,
            default: Date.now
        }, 
        lastModified: {
            type: Date,
            default: Date.now
        }
    }
)

mongoose.model('IssueDetail', issueTrackingTool);
