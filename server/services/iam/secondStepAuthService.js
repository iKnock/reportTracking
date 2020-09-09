
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

const httpResponse = require('./index');
const User = require('../../models/iam/user');
const SecondStepAuth = require('../../models/iam/secondStepAuth');

function enrollOtp(request, response) {
    console.log(`DEBUG: Received TFA setup request`);

    var user = new User();

    user.logInUser("iknock", "password", function (user, error) {
        if (error != null) {
            console.error(error);
        } else {
            const secret = speakeasy.generateSecret({
                length: 10,
                name: user.getUserName(),
                issuer: 'NarenAuth v0.0'
            });
            var url = speakeasy.otpauthURL({
                secret: secret.base32,
                label: user.getUserName(),
                issuer: 'NarenAuth v0.0',
                encoding: 'base32'
            });
            QRCode.toDataURL(url, (err, dataURL) => {
                secondStepInfo = {
                    userId: user.getUserName(),
                    secret: '',
                    tempSecret: secret.base32,
                    dataUrl: dataURL,
                    tfaURL: url,
                    status: 'active'
                };
                console.log('secondStepInfoObj ===> ' + JSON.stringify(secondStepInfo))
                var secondStep = new SecondStepAuth();
                secondStep.insertSecondStep(secondStepInfo, function (result, error) {
                    if (result != null) {
                        return response.json({
                            message: 'TFA Auth needs to be verified',
                            tempSecret: secret.base32,
                            dataURL,
                            tfaURL: secret.otpauth_url
                        });
                    } else {
                        response.json({
                            success: 'error',
                            message: 'query return error'
                        })
                    }
                })

            });
        }
    })
}

function fetchEnrollInfo(request, response) {
    console.log(`DEBUG: Received FETCH TFA request`);
    var secondStep = new SecondStepAuth();

    secondStep.featchSecondStepInfo(request.params.userName, function (secondStepInfo, error) {
        if (secondStepInfo != null) {
            response.json({
                success: 'success',
                error_code: error.errorCode,
                response_data: secondStepInfo
            })
        } else {
            console.error(error);
            response.json({
                success: 'error',
                error_code: error.errorCode,
                message: error.message
            })
        }
    })
}

function deleteEnrollmentInfo(request, response) {
    console.log(`DEBUG: Received DELETE TFA request`);
    var secondStep = new SecondStepAuth();

    secondStep.deleteSecondStepInfo(request.params.userName, function (secondStepInfo, error) {
        if (error != null) {
            console.error(error);
            response.json({
                success: 'error',
                error_code: error.errorCode,
                message: error.message
            })
        } else {
            console.log('secondStepInfo: ' + secondStepInfo);
            response.send({
                "status": 200,
                "message": "success"
            });
        }
    })
}

function verifyEnrollmentInfo(request, response) {

    console.log(`DEBUG: Received TFA Verify request`);

    var secondStep = new SecondStepAuth();

    secondStep.featchSecondStepInfo(request.params.userName, function (secondStepInfo, error) {
        console.log("secondStepInfo: " + request.params.userName)
        if (error != null) {
            response.json({
                success: 'error',
                error_code: error.errorCode,
                message: error.message
            })
        } else {

            console.log("tempSecret: " + secondStepInfo.getTempSecret())

            let isVerified = speakeasy.totp.verify({
                secret: secondStepInfo.getTempSecret(),
                encoding: 'base32',
                token: request.body.token
            });

            if (isVerified) {
                console.log(`DEBUG: TFA is verified to be enabled`);

                //update the second step auth table
                secondStep.updateSecondStepInfo(secondStepInfo.getTempSecret(), request.params.userName, function (updated, error) {
                    if (error != null) {
                        return response.json({
                            status: 401,
                            error_code: error.errorCode,
                            message: error.message
                        });
                    } else {
                        return response.json({
                            status: 200,
                            message: "Two-factor Auth is enabled successfully"
                        });
                    }
                })
            }

            console.log(`ERROR: TFA is verified to be wrong`);

            return response.send({
                "status": 403,
                "message": "Invalid Auth Code, verification failed. Please verify the system Date and Time"
            });
        }
    })
}

module.exports = {
    enrollOtp: enrollOtp,
    fetchEnrollInfo: fetchEnrollInfo,
    deleteEnrollmentInfo: deleteEnrollmentInfo,
    verifyEnrollmentInfo: verifyEnrollmentInfo
};