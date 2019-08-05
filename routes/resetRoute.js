const express = require('express')
const resetController = require('../controller/resetpassword')
const appConfig = require("./../config/appConfig")


module.exports.setRouter = function(app){
    let baseUrl = appConfig.apiVersion+'/resetpassword';
    //for getting OTP
    app.post(baseUrl, resetController.resetPassword);
}