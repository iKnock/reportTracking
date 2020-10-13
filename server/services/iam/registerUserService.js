"use strict";

const errorMessage = require('../../error_handling/errorMessage');
const ResponseMessage = require('../../error_handling/responseMessage');
const User = require('../../models/iam/user');

function registerUser(request, response) {
    console.log("register user service is called: " + JSON.stringify(request.body))
    var user = new User();
    const userName = request.body.userName;
    const password = request.body.password;
    const secondAuthEnabled = request.body.secondAuthEnabled;
    const email = request.body.email;
    const verified = request.body.verified;
    const status = request.body.status;
    const remark = request.body.remark;

    user.insertUser(userName, password, secondAuthEnabled, email, verified, status, remark, function (user, error) {
        if (error != null) {
            delete password;
            console.error(error);
            var responseMessage = new ResponseMessage(error.errorCode, error.message, errorMessage.onErrorInsertingUser);
            response.json(responseMessage);
        } else {            
            delete password;
            var responseMessage = new ResponseMessage('200', errorMessage.onSignUpSuccess.message, user);
            response.json(responseMessage);
        }
    })
}

module.exports = {
    registerUser: registerUser
};