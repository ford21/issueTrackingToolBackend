const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libraries/responseLib')
const check = require('./../libraries/checkLib')
const validateInput = require('./../libraries/signupValidation')
//const passwordGenerator = require('./../libraries/generatePassword')
const token = require('./../libraries/tokenLib')
const time = require('./../libraries/timeLib')
const cookie = require('cookie-parser')

/* Models */
const UserModel = mongoose.model('User');
const AuthModel = mongoose.model('Auth');

/* Get all user Details */
let getAllUser = (req, res) => {
    UserModel.find()
        .select(' -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                for(let r of result){
                    delete r.password;
                }
                let apiResponse = response.generate(false, 'All User Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all users

/* Get single user details */
let getSingleUser = (req, res) => {
    UserModel.findOne({ 'email': req.params.email })
        .select('-password -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                delete result.password;
                let apiResponse = response.generate(false, 'User Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get single user


/* Delete single user */
let deleteUser = (req, res) => {

    UserModel.deleteOne({ 'userId': req.params.userId }).exec((err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Failed To delete user', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Deleted the user successfully', 200, result)
            res.send(apiResponse)
        }
    });// end user model find and remove


}// end delete user
/* edit user details */
let editUser = (req, res) => {

    let options = req.body;
    UserModel.updateOne({ 'userId': req.params.userId }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'Failed To edit user details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'User details edited', 200, result)
            res.send(apiResponse)
        }
    });// end user model update


}// end edit user

/* Create user */
let createUser = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                if (!validateInput.Email(req.body.email)) {
                    let apiResponse = response.generate(true, 'Email Does not met the requirement', 400, null)
                    reject(apiResponse)
                } else if (check.isEmpty(req.body.password)) {
                    let apiResponse = response.generate(true, '"password" parameter is missing"', 400, null)
                    reject(apiResponse)
                } else if (!validateInput.Password(req.body.password)) {
                    let apiResponse = response.generate(true, 'password Does not met the requirement', 400, null)
                    reject(apiResponse)
                } else {
                    resolve(req)
                }
            } else {
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }// end validate user input
    let createUser = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ email: req.body.email })
                .exec((err, retrievedUserDetails) => {
                    if (err) {
                        let apiResponse = response.generate(true, 'Failed To Create User', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(retrievedUserDetails)) {
                        console.log(req.body)
                        let today = Date.now()
                        let userId = shortid.generate()
                        //let password = passwordGenerator.hashpassword(req.body.password)
                        let newUser = new UserModel({
                            userId: userId,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            place: req.body.place,
                            gender: req.body.gender,
                            email: req.body.email,
                            password: password,
                            createdOn: today
                        });
                        newUser.save((err, newUser) => {
                            if (err) {
                                console.log(err)
                                let apiResponse = response.generate(true, 'Failed to create new User', 500, null)
                                reject(apiResponse)
                            } else {
                                let newUserObj = newUser.toObject();
                                resolve(newUserObj)
                            }
                        })
                    } else {
                        let apiResponse = response.generate(true, 'User Already Present With this Email', 403, null)
                        reject(apiResponse)
                    }
                })
        })
    }// end create user function


    validateUserInput(req, res)
        .then(createUser)
        .then((resolve) => {
            delete resolve.password;
            delete resolve._id;
            delete resolve.__v;
            let apiResponse = response.generate(false, 'User created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}
/* Login function */
let loginFunction = (req, res) => {
    let findUser = () => {
        console.log("findUser");
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log("req body email is there");
                console.log(req.body);
                UserModel.findOne({ email: req.body.email }, (err, userDetails) => {
                    /* handle the error here if the User is not found */
                    if (err) {
                        console.log(err)
                        /* generate the error message and the api response message here */
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                        /* if Company Details is not found */
                    } else if (check.isEmpty(userDetails)) {
                        /* generate the response and the console error message here */
                        let apiResponse = response.generate(true, 'No User Details Found', 404, null)
                        reject(apiResponse)
                    } else {
                        /* prepare the message and the api response here */
                        resolve(userDetails)
                    }
                });

            } else {
                let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }
    let validatePassword = (retrievedUserDetails) => {
        console.log("validatePassword");
        return new Promise((resolve, reject) => {
            //passwordGenerator.comparePassword(req.body.password, retrievedUserDetails.password, (err, isMatch) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Login Failed', 500, null)
                    reject(apiResponse)
                } else if (isMatch) {
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
                } else {
                    let apiResponse = response.generate(true, 'Wrong Password Login Failed', 400, null)
                    reject(apiResponse)
                }
           // })
        })
    }

    let generateToken = (userDetails) => {
        console.log("generate token");
        return new Promise((resolve, reject) => {
            token.generateToken(userDetails, (err, tokenDetails) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else {
                    tokenDetails.userId = userDetails.userId
                    tokenDetails.userDetails = userDetails
                    resolve(tokenDetails)
                }
            })
        })
    }
    let saveToken = (tokenDetails) => {
        console.log("save token");
        return new Promise((resolve, reject) => {
            AuthModel.findOne({ userId: tokenDetails.userId }, (err, retrievedTokenDetails) => {
                if (err) {
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedTokenDetails)) {
                    let newAuthToken = new AuthModel({
                        userId: tokenDetails.userId,
                        authToken: tokenDetails.token,
                        tokenSecret: tokenDetails.tokenSecret,
                        tokenGenerationTime: time.now()
                    })
                    newAuthToken.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                } else {
                    retrievedTokenDetails.authToken = tokenDetails.token
                    retrievedTokenDetails.tokenSecret = tokenDetails.tokenSecret
                    retrievedTokenDetails.tokenGenerationTime = time.now()
                    retrievedTokenDetails.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                }
            })
        })
    }

    findUser(req, res)
        .then(validatePassword)
        .then(generateToken)
        .then(saveToken)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Login Successful', 200, resolve)
            res.status(200)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.status(err.status)
            res.send(err)
        })
}

/* Validate email */
let validateemail = (req, res) => {
    let findUser = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log(req.body);
                UserModel.findOne({ email: req.body.email }, (err, userEmail) => {
                    if (err) {
                        console.log(err)
                        let apiResponse = response.generate(true, 'Failed To Find User email', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userEmail)) {
                        let apiResponse = response.generate(true, 'No User email Found', 404, null)
                        reject(apiResponse)
                    } else {
                        resolve(userEmail)
                    }
                });

            } else {
                let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }
    findUser(req, res)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Found', 200, resolve)
            res.status(200)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.status(err.status)
            res.send(err)
        })
}

/* Reset user password */
let resetPassword = (req, res) => {
    let findUser = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log(req.body);
                UserModel.findOne({ email: req.body.email }, (err, userEmail) => {
                    if (err) {
                        console.log(err)
                        let apiResponse = response.generate(true, 'Failed To Find User email', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userEmail)) {
                        let apiResponse = response.generate(true, 'No User email Found', 404, null)
                        reject(apiResponse)
                    } else {
                        resolve(userEmail)
                    }
                });

            } else {
                let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }
    let reset = () => {
        return new Promise((resolve, reject) => {
            if (req.body.password) {
                //let password = passwordGenerator.hashpassword(req.body.password)
                UserModel.updateOne({ 'email': req.body.email }, {"$set":{"password":password}}, { multi: false }).exec((err, result) => {
                    if (err) {
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(result)) {
                        let apiResponse = response.generate(true, 'passworsd error', 404, null)
                        reject(apiResponse)
                    } else {
                        //let apiResponse = response.generate(false, 'Issue Edited Successfully.', 200, result)
                        resolve(result)
                    }
                })
            } else {
                let apiResponse = response.generate(true, '"password" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }
    findUser(req, res)
        .then(reset)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Password Reset Successful', 200, resolve)
            res.status(200)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.status(err.status)
            res.send(err)
        })
}

/* logout function */
let logout = (req, res) => {
    let findAuthToken = () => {
        return new Promise((resolve, reject) => {
            AuthModel.findOne({ authToken: req.body.authToken })
                .exec((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(result)) {
                        console.log('Already Logged Out')
                        let apiResponse = response.generate(true, 'Already Logged Out', 403, null)
                        reject(apiResponse)
                    } else {
                        console.log(req.body.authToken)
                        AuthModel.deleteOne({ authToken: req.body.authToken }, (err, result) => {
                            if (err) {
                                console.log(err)
                                let apiResponse = response.generate(true, 'Error occurred', 500, null)
                                reject(apiResponse)
                            } else if (check.isEmpty(result)) {
                                let apiResponse = response.generate(true, 'Invalid UserId', 404, null)
                                reject(apiResponse)
                            } else {
                                console.log('Logout ' + result);
                                //let apiResponse = response.generate(false, 'Logged Out Successfully', 200, null)
                                resolve(result)
                            }
                        }, err => {
                            console.log(err);
                        })
                    }

                })
        })// end new promise
    }// end add function
    // making promise call.
    findAuthToken(req, res)
        //.then(addWatcher)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Logged Out Successfully', 200, resolve)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })



}

module.exports = {
    createUser: createUser,
    loginFunction: loginFunction,
    logout: logout,
    editUser: editUser,
    getAllUser: getAllUser,
    deleteUser: deleteUser,
    getSingleUser: getSingleUser,
    validateemail: validateemail,
    resetPassword: resetPassword
}

