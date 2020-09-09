
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
        if (error != null) {
            console.error(error);
            response.json({
                success: 'error',
                message: 'query return error'
            })
        } else {
            //check size and if zero return nothing found            
            response.json(secondStepInfo);
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
                errorCode: error.errorCode,
                message: error.message
            })
        } else {
            console.log('secondStepInfo: ' + secondStepInfo);
            if (secondStepInfo != null) {
                response.send({
                    "status": 200,
                    "message": "success"
                });
            } else {

            }

        }
    })
}

module.exports = {
    enrollOtp: enrollOtp,
    fetchEnrollInfo: fetchEnrollInfo,
    deleteEnrollmentInfo: deleteEnrollmentInfo
};


/**
router.get('/tfa/setup', (req, res) => {
    console.log(`DEBUG: Received FETCH TFA request`);

    res.json(commons.userObject.tfa ? commons.userObject.tfa : null);
});

router.delete('/tfa/setup', (req, res) => {
    console.log(`DEBUG: Received DELETE TFA request`);

    delete commons.userObject.tfa;
    res.send({
        "status": 200,
        "message": "success"
    });
});

router.post('/tfa/verify', (req, res) => {
    console.log(`DEBUG: Received TFA Verify request`);

    let isVerified = speakeasy.totp.verify({
        secret: commons.userObject.tfa.tempSecret,
        encoding: 'base32',
        token: req.body.token
    });

    if (isVerified) {
        console.log(`DEBUG: TFA is verified to be enabled`);

        commons.userObject.tfa.secret = commons.userObject.tfa.tempSecret;
        return res.send({
            "status": 200,
            "message": "Two-factor Auth is enabled successfully"
        });
    }

    console.log(`ERROR: TFA is verified to be wrong`);

    return res.send({
        "status": 403,
        "message": "Invalid Auth Code, verification failed. Please verify the system Date and Time"
    });
});**/