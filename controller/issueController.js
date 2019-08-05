const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libraries/responseLib')
const check = require('./../libraries/checkLib')
const time = require('./../libraries/timeLib')


/* Models */
const IssueModel = mongoose.model('IssueDetail');
const WatchModel = mongoose.model('watcher');

/**
 * function to get all issue.
 */
let getAllIssues = (req, res) => {
    //let field = String(req.query.field);
    //let val = Number(req.query.value);
    // let sort = '{'+field+':'+val+'}'
    IssueModel.find()
        //.sort({field:val})
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed To Find Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No Issues Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all issues

/**
 * function to sort issue.
 */
let sorting = (req, res) => {
    let field = String(req.query.field);
    let val = Number(req.query.value);
    if (field == 'title') {
        IssueModel.find()
            .sort({ 'title': val })
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Find Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'No Issues Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'All Details Found', 200, result)
                    res.send(apiResponse)
                }
            })
    } else if (field == 'creator') {
        IssueModel.find()
            .sort({ 'creator': val })
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Find Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'No Issues Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'All Details Found', 200, result)
                    res.send(apiResponse)
                }
            })
    } else if (field == 'status') {
        IssueModel.find()
            .sort({ 'status': val })
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Find Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'No Issues Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'All Details Found', 200, result)
                    res.send(apiResponse)
                }
            })
    } else if (field == 'created') {
        IssueModel.find()
            .sort({ 'created': val })
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Find Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'No Issues Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'All Details Found', 200, result)
                    res.send(apiResponse)
                }
            })
    } else {
        getAllIssues();
    }

}

/**
 * function to read single issue.
 */
let viewSingleIssue = (req, res) => {

    if (check.isEmpty(req.params.trackingId)) {

        console.log('trackingId should be passed')
        let apiResponse = response.generate(true, 'trackingId is missing', 403, null)
        res.send(apiResponse)
    } else {

        IssueModel.findOne({ trackingId: req.params.trackingId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Issue Not Found.')
                let apiResponse = response.generate(true, 'Issue Not Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Issue Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}


/**
 * function to read issues by reporter.
 */
let viewIssueByCreator = (req, res) => {

    if (check.isEmpty(req.params.creator)) {

        console.log('creator name should be passed')
        let apiResponse = response.generate(true, 'creator name is missing', 403, null)
        res.send(apiResponse)
    } else {

        IssueModel.find({ 'creator': req.params.creator }, (err, result) => {

            if (err) {
                console.log('Error Occured.')
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Issue Not Found.')
                let apiResponse = response.generate(true, 'Issue Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Issue Found Successfully')
                let apiResponse = response.generate(false, 'Issue Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}


/**
 * function to delete single issue.
 */
let deleteIssue = (req, res) => {

    if (check.isEmpty(req.params.trackingId)) {

        console.log('trackingId should be passed')
        let apiResponse = response.generate(true, 'trackingId is missing', 403, null)
        res.send(apiResponse)
    } else {

        IssueModel.deleteOne({ 'trackingId': req.params.trackingId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Issue Not Found.')
                let apiResponse = response.generate(true, 'Issue Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Issue Deletion Success')
                WatchModel.deleteMany({trackingId:req.params.trackingId}).exec()
                let apiResponse = response.generate(false, 'Issue Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}



/**
 * function to edit issue.
 */
let editIssue = (req, res) => {

    if (check.isEmpty(req.params.trackingId)) {

        console.log('trackingId should be passed')
        let apiResponse = response.generate(true, 'trackingId is missing', 403, null)
        res.send(apiResponse)
    } else {
        let options = req.body;
        options.lastModified = time.now();
        IssueModel.updateOne({ 'trackingId': req.params.trackingId }, options, { multi: true }).exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Issue Not Found.')
                let apiResponse = response.generate(true, 'Issue Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Issue Edited Successfully')
                let apiResponse = response.generate(false, 'Issue Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}



/**
 * function to create the issue.
 */

let createIssue = (req, res) => {

    let issueCreationFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.title) || check.isEmpty(req.body.status)) {
                console.log("required parameters are missing");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {
                var today = Date.now()
                let trackingId = shortid.generate()
                let newIssueModel = new IssueModel({
                    trackingId: trackingId,
                    title: req.body.title,
                    description: req.body.description,
                    bigDes: req.body.bigDescription,
                    status: req.body.status,
                    creator: req.user.name,
                    email: req.user.email,
                    assigned: req.body.assignee,
                    created: today,
                    lastModified: today
                }) // end new issue model

                newIssueModel.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        console.log(err)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Issue created Successfully')
                        resolve(result)
                    }
                }) // end new issue save
            }
        }) // end new issue promise
    } // end create issue function

    // making promise call.
    issueCreationFunction()
        .then((result) => {
            let apiResponse = response.generate(false, 'Issue Created successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}

/**
 * function to search issue.
 */
let searchIssues = (req, res) => {
    let search = req.query.search
    IssueModel.find({ "$text": { "$search": search, "$caseSensitive": false, "$diacriticSensitive": false } })
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed To Find Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No Issues Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}

/**
 * function to assigned issue.
 */
let assignedIssue = (req, res) => {
    let email = req.body.email
    let issueId = req.body.trackingId
    IssueModel.updateOne({trackingId: issueId},{"$set": {assigned: email}})
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed To Find Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No Issues Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Assigned Successful', 200, result)
                res.send(apiResponse)
            }
        })
}

module.exports = {
    getAllIssues: getAllIssues,
    viewSingleIssue: viewSingleIssue,
    viewIssueByCreator: viewIssueByCreator,
    deleteIssue: deleteIssue,
    editIssue: editIssue,
    createIssue: createIssue,
    sorting: sorting,
    searchIssues: searchIssues,
    assignedIssue: assignedIssue
}