const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libraries/responseLib')
const check = require('./../libraries/checkLib')

/* Models */
const commentModel = mongoose.model('comment');



let getAllComments = (req, res) => {
    commentModel.find({ 'issueId': req.params.trackingId })
        .sort({'commentId': -1})
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed To Find comments', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No comment Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All comments Found', 200, result)
                res.send(apiResponse)
            }
        })
}

let addComment = (req, res) => {
    getLastIndex= () =>{
        return new Promise((resolve, reject) => {
        commentModel.find()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed To Find comments', 500, null)
                reject(apiResponse)
            } else {
                resolve(result)
            }
        })
        });
    }
    let addCommentFunction = (result) => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.user.name) || check.isEmpty(req.user.email) || check.isEmpty(req.body.trackingId) || check.isEmpty(req.body.comment)) {
                console.log("Some parameters is missing");
                let apiResponse = response.generate(true, 'Some parameters is missing', 403, null)
                reject(apiResponse)
            } else {
                let newcommentModel = new commentModel({
                    commentId: ++result.length,
                    comment: req.body.comment,
                    name: req.user.name,
                    email: req.user.email,
                    issueId: req.body.trackingId,
                }) 
                newcommentModel.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        console.log(err)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Added Successfully')
                        resolve(result)
                    }
                }) // end new save
            }
        }) // end new promise
    } // end add function

    // making promise call.
    getLastIndex()
        .then(addCommentFunction)
        .then((result) => {
            let apiResponse = response.generate(false, 'comment successful', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}

module.exports = {
    getAllComments: getAllComments,
    addComment: addComment
}