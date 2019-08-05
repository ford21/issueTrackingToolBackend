const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libraries/responseLib')
const check = require('./../libraries/checkLib')

/* Models */
const WatchModel = mongoose.model('watcher');

/**
 * function to get all watcher.
 */
let getAllWatchers = (req, res)=> {
    WatchModel.find()
            .select('-__v -_id')
            .lean()
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Find Watcher', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'No Watcher Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'All Watcher Found', 200, result)
                    res.send(apiResponse)
                }
            });
}

/**
 * function to get all watcher of base on issue id.
 */

let getWatchers = (req, res) => {
    if (check.isEmpty(req.params.trackingId)) {
        console.log("Some parameters is missing");
        let apiResponse = response.generate(true, 'Some parameters is missing', 403, null)
        res.send(apiResponse);
    } else {
        WatchModel.find({ trackingId: req.params.trackingId })
            .select('-__v -_id')
            .lean()
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Find Watcher', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'No Watcher Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'All Watcher Found', 200, result)
                    res.send(apiResponse)
                }
            });
    }
}

/**
 * function to add watcher.
 */
let addWatcher = (req, res) => {
    let findWatcher = () => {
        return new Promise((resolve, reject) => {
            WatchModel.findOne({ trackingId: req.params.trackingId, email: req.user.email })
                .exec((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(result)) {
                        let watcherId = shortid.generate()
                        let newWatchModel = new WatchModel({
                            watcherId: watcherId,
                            trackingId: req.params.trackingId,
                            name: req.user.name,
                            email: req.user.email
                        })
                        console.log(newWatchModel);
                        newWatchModel.save((err, newWatchModel) => {
                            if (err) {
                                console.log('Error Occured.')
                                let apiResponse = response.generate(true, 'Error Occured.', 500, err)
                                reject(apiResponse)
                            } else {
                                console.log('Added Successfully')
                                let newWatchObj = newWatchModel.toObject();
                                resolve(newWatchObj)
                                // let apiResponse = response.generate(false, 'Added Successfully', 200, result)
                                // resolve(apiResponse)
                            }
                        }) // end new WatchModel save
                    } else {
                        console.log('Already a Watcher on this issue')
                        let apiResponse = response.generate(false, 'Already a Watcher on this issue.', 403, null)
                        reject(apiResponse)
                    }

                })
        })// end new promise
    }// end add function
    // making promise call.
    findWatcher(req, res)
        //.then(addWatcher)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Added successfully', 200, resolve)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}

/**
 * function to remove watcher.
 */
let removeWatcher = (req, res) => {
    let findWatcherNRemove = () => {
        return new Promise((resolve, reject) => {
            WatchModel.findOne({ trackingId: req.params.trackingId, email: req.user.email })
                .exec((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else if (!check.isEmpty(result)) {
                        WatchModel.deleteOne({ email: req.user.email, trackingId: req.params.trackingId }, (err, result) => {
                            if (err) {
                                console.log('Error Occured.')
                                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                                reject(apiResponse)
                            } else if (check.isEmpty(result)) {
                                console.log('Watcher Not Found.')
                                let apiResponse = response.generate(true, 'Watcher Not Found.', 404, null)
                                reject(apiResponse)
                            } else {
                                console.log('Watcher Removed Successfully')
                                // let apiResponse = response.generate(false, 'Watcher Removed Successfully', 200, result)
                                // resolve(apiResponse)
                                resolve(result);
                            }
                        })
                    } else {
                        console.log('Your are not a watcher on this issue')
                        let apiResponse = response.generate(true, 'Your are not a watcher on this issue.', 403, null)
                        reject(apiResponse)
                    }

                })
        })// end new promise
    }// end add function
    // making promise call.
    findWatcherNRemove(req, res)
        //.then(addWatcher)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Watcher Removed Successfully', 200, resolve)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}

module.exports = {
    getWatchers: getWatchers,
    getAllWatchers: getAllWatchers,
    addWatcher: addWatcher,
    removeWatcher: removeWatcher
}