"use strict";

const httpResponse = require('./index');
const User = require('../../models/iam/user');

function registerUser(request, response) {
    console.log("register user service is called: "+JSON.stringify(request.body))
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
            console.error(error);
            console.log(response)
        } else {
            response.json(user);
            //console.log(response)
        }
    })
}

module.exports = {
    registerUser: registerUser 
};