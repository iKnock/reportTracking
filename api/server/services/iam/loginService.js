/**const express = require('express');
const speakeasy = require('speakeasy');
const commons = require('./commons');
const router = express.Router();**/

const httpResponse = require('./index');
const User = require('../../models/iam/user');
const errorMessage = require('../../error_handling/errorMessage');

function fetchUser(request, response) {
    var user = new User();
    const userName = request.params.userName;
    const password = request.params.password;

    user.logInUser(userName, password, function (user, error) {
        if (error != null) {
            console.error(error);
            console.log(response)
        } else {
            response.json(user);
            //console.log(response)
        }
    })
}

let crypto;
try {
    crypto = require('crypto');
} catch (err) {
    console.error('crypto support is disabled!');
    var responseMessage = new ResponseMessage('500', errorMessage.onErrorUsingCrypto.message, errorMessage.onErrorUsingCrypto);
    response.json(responseMessage);
}

function hashPassword(password, salt) {
    const hash = crypto.createHmac('sha256', salt)
        .update(password)
        .digest('base64');
    return hash;
}

function findSalt(userName) {
    let salt;
    userObj.findUserByUserName(userName, function (user, error) {
        if (error != null) {
            console.error(error);
            var responseMessage = new ResponseMessage(error.errorCode, error.message, errorMessage.onErrorReadingUser);
            response.json(responseMessage);
        } else {
            salt = user.getSalt();
        }
    })
    return salt;
}

function logIn(request, response) {
    var userObj = new User();
    const userName = request.params.userName;
    const password = request.params.password;

    userObj.logInUser(userName, password, function (user, error) {
        if (error != null) {
            console.error(error);
            console.log(response)
        } else {
            if (userName == user.getUserName() && password == user.getPassword()) {
                console.log(`DEBUG: Login without TFA is successful`);
                return response.send({
                    "status": 200,
                    "message": "success"
                });

                verifyOtp(request, response, user);

            } else {
                console.log(`ERROR: Login without TFA is not successful`);
                return response.send({
                    "status": 403,
                    "message": "Invalid username or password"
                });
            }
        }
    })
}

function verifyOtp(request, response, user) {
    if (!request.headers['x-tfa']) {
        console.log(`WARNING: Login was partial without TFA header`);

        return response.send({
            "status": 206,
            "message": "Please enter the Auth Code"
        });
    }
    let isVerified = speakeasy.totp.verify({
        secret: user.getSalt(),
        encoding: 'base32',
        token: req.headers['x-tfa']
    });

    if (isVerified) {
        console.log(`DEBUG: Login with TFA is verified to be successful`);

        return res.send({
            "status": 200,
            "message": "success"
        });
    } else {
        console.log(`ERROR: Invalid AUTH code`);

        return res.send({
            "status": 206,
            "message": "Invalid Auth Code"
        });
    }
}

module.exports = {
    logIn: logIn
};

/**router.post('/login', (req, res) => {
    console.log(`DEBUG: Received login request`);

    if (commons.userObject.uname && commons.userObject.upass) {
        if (!commons.userObject.tfa || !commons.userObject.tfa.secret) {
            if (req.body.uname == commons.userObject.uname && req.body.upass == commons.userObject.upass) {
                console.log(`DEBUG: Login without TFA is successful`);

                return res.send({
                    "status": 200,
                    "message": "success"
                });
            }
            console.log(`ERROR: Login without TFA is not successful`);

            return res.send({
                "status": 403,
                "message": "Invalid username or password"
            });

        } else {
            if (req.body.uname != commons.userObject.uname || req.body.upass != commons.userObject.upass) {
                console.log(`ERROR: Login with TFA is not successful`);

                return res.send({
                    "status": 403,
                    "message": "Invalid username or password"
                });
            }
            if (!req.headers['x-tfa']) {
                console.log(`WARNING: Login was partial without TFA header`);

                return res.send({
                    "status": 206,
                    "message": "Please enter the Auth Code"
                });
            }
            let isVerified = speakeasy.totp.verify({
                secret: commons.userObject.tfa.secret,
                encoding: 'base32',
                token: req.headers['x-tfa']
            });

            if (isVerified) {
                console.log(`DEBUG: Login with TFA is verified to be successful`);

                return res.send({
                    "status": 200,
                    "message": "success"
                });
            } else {
                console.log(`ERROR: Invalid AUTH code`);

                return res.send({
                    "status": 206,
                    "message": "Invalid Auth Code"
                });
            }
        }
    }

    return res.send({
        "status": 404,
        "message": "Please register to login"
    });
});
*/