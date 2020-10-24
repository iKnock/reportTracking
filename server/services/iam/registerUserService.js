"use strict";

const errorMessage = require('../../error_handling/errorMessage');
const ResponseMessage = require('../../error_handling/responseMessage');
const User = require('../../models/iam/user');

let crypto;
try {
    crypto = require('crypto');
} catch (err) {
    console.error('crypto support is disabled!');
    var responseMessage = new ResponseMessage('500', errorMessage.onErrorUsingCrypto.message, errorMessage.onErrorUsingCrypto);
    response.json(responseMessage);
}

let salt;
function hashPassword(password) {    
    salt = crypto.randomBytes(16).toString('base64');//save this random num for each hash pass and decrypt each pass using its own salt
    const hash = crypto.createHmac('sha256', salt)
        .update(password)
        .digest('base64');    
    return hash;
}

function registerUser(request, response) {
    console.log("register user service is called: " + JSON.stringify(request.body))
    var user = new User();
    const userName = request.body.userName;
    const secondAuthEnabled = request.body.secondAuthEnabled;
    const email = request.body.email;
    const verified = request.body.verified;
    const status = request.body.status;

    var hashPass = hashPassword(request.body.password);
    console.log('hash password: ' + hashPass);

    console.log('salt: ' + salt);

    user.insertUser(userName, hashPass, secondAuthEnabled, email, verified, status, salt, function (user, error) {
        if (error != null) {
            console.error(error);
            var responseMessage = new ResponseMessage(error.errorCode, error.message, errorMessage.onErrorInsertingUser);
            response.json(responseMessage);
        } else {
            var responseMessage = new ResponseMessage('200', errorMessage.onSignUpSuccess.message, user);
            response.json(responseMessage);
        }
    })
}

module.exports = {
    registerUser: registerUser
};