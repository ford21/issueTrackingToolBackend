const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libraries/responseLib')
const check = require('./../libraries/checkLib')
const nodemailer = require('nodemailer')

let resetPassword = (req, res) => {
    var smtpTransport = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        host: "smtp.gmail.com",
        auth: {
            user: "no.reply.issuetrackingtool",
            pass: "noreply123"
        }
    });
    let mailOptions = {
        from: '"<No Reply>" no.reply.issuetrackingtool@gmail.com',
        to: req.body.email,
        //to: 'fordsteinnongbri@gmail.com',
        subject: 'Reset your account password',
        html: '<h4><strong>Reset Password!</strong></h4>' +
            '<p>OTP to Reset your Password</p>' + '<p><strong>' +req.body.OTP + '</strong></p>' +
            '<br><br>' +'<br><br>'+
            '<hr><p>thank you</p><p>Reifford Nongbri</p><hr>'
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            let apiResponse = response.generate(true, 'Unable to send OTP', 400, error);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'check your mail for OTP', 200, null)
            res.send(apiResponse)
        }
    });
}
module.exports = {
    resetPassword: resetPassword
}