const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libraries/responseLib')
const check = require('./../libraries/checkLib')

/* Models */
const notificationModel = mongoose.model('notification');
const WatchModel = mongoose.model('watcher');
const IssueModel = mongoose.model('IssueDetail');

/**
 * function to get all notification base on email.
 */

let getAllNotification = (req, res) => {
    notificationModel.find({ 'email': req.query.email })
        .sort({ 'notificationId': -1 })
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed To Find Notification', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No Notification Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, ' Found All Notifications', 200, result)
                res.send(apiResponse)
            }
        })
}

/**
 * function to delete/clear notification base on email.
 */
let deleteNotification = (req, res) => {
    if (!check.isEmpty(req.body.trackingId)) {
        notificationModel.deleteMany({ email: req.body.email })
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Find Notification', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'No Notification Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Delete Successfull', 200, result)
                    res.send(apiResponse)
                }
            })
    } else {
        notificationModel.deleteMany({ issueId: req.body.trackingId, email: req.body.email })
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Find Notification', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'No Notification Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Delete Successfull', 200, result)
                    res.send(apiResponse)
                }
            })
    }

}

/**
 * function to add new notification.
 */
let addNotification = (req, res) => {
    let len = 0;
    let repoter = '';
    let assignee = '';
    let allWatchers = '';

    checkForWatchers = () => {
        return new Promise((resolve, reject) => {
            WatchModel.find({ 'trackingId': req.body.trackingId })
                .exec((err, watchers) => {
                    if (err) {
                        console.log(err)
                        let apiResponse = response.generate(true, 'Some error occured.', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(watchers)) {
                        let apiResponse = response.generate(true, 'No watcher Found.', 404, null)
                        //reject(apiResponse)
                    } else {
                        allWatchers = watchers;
                        notificationModel.find().sort({ notificationId: -1 }).limit(1).exec((err, result) => {
                            if (!check.isEmpty(result)) {
                                if (len < result[0].notificationId) {
                                    len = result[0].notificationId;
                                }

                            } else {
                                len = 1;
                            }
                            for (let email of allWatchers) {
                                notificationModel.find({ issueId: req.body.trackingId, email: email.email, notifyChange: req.body.changes })
                                    .exec((err, resultNotifications) => {
                                        if (err) {
                                            console.log(err)
                                            let apiResponse = response.generate(true, 'Some error occured.', 500, null)
                                            reject(apiResponse)
                                        } else if (check.isEmpty(resultNotifications)) {
                                            if (check.isEmpty(req.user.name) || check.isEmpty(req.user.email) || check.isEmpty(req.body.trackingId) || check.isEmpty(req.body.title) || check.isEmpty(req.body.changes)) {
                                                console.log("Some parameters is missing");
                                                let apiResponse = response.generate(true, 'Some parameters is missing', 403, null)
                                                reject(apiResponse)
                                            } else {
                                                if (req.user.email != email.email) {
                                                    let newNotificationModel = new notificationModel({
                                                        notificationId: ++len,
                                                        issueId: req.body.trackingId,
                                                        email: email.email,
                                                        notifyChange: req.body.changes,
                                                        byWhom: req.user.name,
                                                        title: req.body.title
                                                    })
                                                    newNotificationModel.save((err, newresult) => {
                                                        if (err) {
                                                            console.log('Error Occured.')
                                                            console.log(err)
                                                            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                                            reject(apiResponse)
                                                        } else {
                                                            console.log('Notification Added Successfully');
                                                            let newresultObj = newresult.toObject();
                                                            resolve(newresultObj);
                                                        }
                                                    }) // end new save
                                                }
                                            }
                                        } else {
                                            let apiResponse = response.generate(true, 'Already available', 404, null)
                                            reject(apiResponse)
                                        }
                                    })
                            }
                            resolve(result);
                        })
                    }
                })
            IssueModel.find({ trackingId: req.body.trackingId }).exec((err, details) => {
                let repoterWatcher;
                let assigneeWatcher;
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Find comments', 500, null)
                    reject(apiResponse)
                } else {
                    repoter = details[0].email;
                    assignee = details[0].assigned
                    for (let email of allWatchers) {
                        if (email.email == repoter) {
                            repoterWatcher = repoter;
                            break;
                        }

                    }
                    for (let email of allWatchers) {
                        if (email.email == assignee) {
                            assigneeWatcher = assignee;
                            break;
                        }

                    }

                    notificationModel.find({ issueId: req.body.trackingId, email: repoter, notifyChange: req.body.changes }).exec((err, resultNotifications) => {
                        if (err) {
                            console.log(err)
                            let apiResponse = response.generate(true, 'Some error occured.', 500, null)
                            reject(apiResponse)
                        } else if (check.isEmpty(resultNotifications)) {
                            if (check.isEmpty(req.user.name) || check.isEmpty(req.user.email) || check.isEmpty(req.body.trackingId) || check.isEmpty(req.body.title) || check.isEmpty(req.body.changes)) {
                                console.log("Some parameters is missing");
                                let apiResponse = response.generate(true, 'Some parameters is missing', 403, null)
                                reject(apiResponse)
                            } else {
                                if (req.user.email != repoter && repoterWatcher != repoter) {
                                    console.log('----------------------------------------------------------------')
                                    console.log('creator')
                                    console.log('----------------------------------------------------------------')
                                    let newNotificationModel = new notificationModel({
                                        notificationId: ++len,
                                        issueId: req.body.trackingId,
                                        email: repoter,
                                        notifyChange: req.body.changes,
                                        byWhom: req.user.name,
                                        title: req.body.title
                                    })
                                    newNotificationModel.save((err, newresult) => {
                                        if (err) {
                                            console.log('Error Occured.')
                                            console.log(err)
                                            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                            reject(apiResponse)
                                        } else {
                                            console.log('Notification Added Successfully');
                                            let newresultObj = newresult.toObject();
                                            resolve(newresultObj);
                                        }
                                    }) // end new save
                                }
                                if (req.user.email != assignee && assigneeWatcher != assignee) {
                                    let newNotificationModel = new notificationModel({
                                        notificationId: ++len,
                                        issueId: req.body.trackingId,
                                        email: assignee,
                                        notifyChange: req.body.changes,
                                        byWhom: req.user.name,
                                        title: req.body.title
                                    })
                                    newNotificationModel.save((err, newresult) => {
                                        if (err) {
                                            console.log('Error Occured.')
                                            console.log(err)
                                            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                            reject(apiResponse)
                                        } else {
                                            console.log('Notification Added Successfully');
                                            let newresultObj = newresult.toObject();
                                            resolve(newresultObj);
                                        }
                                    }) // end new save
                                }
                            }
                        }
                    });
                }
            });

        });
    }

    // making promise call.
    checkForWatchers()
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Notification Added Successfully', 200, resolve)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}

module.exports = {
    getAllNotification: getAllNotification,
    deleteNotification: deleteNotification,
    addNotification: addNotification
}