const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let watcher = new Schema(
    {
        watcherId: {
            type: String,
            unique:true,
            default: ''
        },
        trackingId: {
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
        }
        
    }
)

mongoose.model('watcher', watcher);
