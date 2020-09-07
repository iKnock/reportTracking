"use strict";

const dbConnection = require('../../utils/connection');
const AppExceptions = require('../../utils/appError');

class SecondStepAuth {
    constructor(secondStepId, userId, secret, tempSecret, dataUrl, tfaUrl, status) {
        this.secondStepId = secondStepId;
        this.userId = userId;
        this.secret = secret;
        this.tempSecret = tempSecret;
        this.dataUrl = dataUrl;
        this.tfaUrl = tfaUrl;        
        this.status = status;        
    }

    getSecondStepId() {
        return this.secondStepId;
    }

    getUserId() {
        return this.userId;
    }

    getSecret() {
        return this.secret;
    }

    getTempSecret() {
        return this.tempSecret;
    }

    getDataUrl() {
        return this.dataUrl;
    }

    getTfaUrl() {
        return this.tfaUrl;
    }   

    getStatus() {
        return this.status;
    }

    insertSecondStep = function (secondStepInfo, callback) {
        dbConnection.getConnection(function (connection, conError) {
            if (conError != null) {
                const conErr = new AppExceptions(conError.code, conError.message);
                callback(null, conErr);
            } else {
                connection.query('INSERT INTO `tbl_second_step_auth`(`user_id`, `secret`, `temp_secret`, `data_url`, `tfa_url`, `status`) values (?,?,?,?,?,?)', [secondStepInfo.userId, secondStepInfo.secret, secondStepInfo.tempSecret, secondStepInfo.dataUrl, secondStepInfo.tfaUrl, secondStepInfo.status], function (error, results, fields) {
                    try {
                        console.log('result= ' + results)

                        callback(results);
                        connection.release();// When done with the connection, release it.                    
                        if (error) throw error;// Handle error after the release.  
                    } catch (error) {
                        //write in the log the original exception and return readable format to the caller
                        const err = new AppExceptions(error.code, error.message);
                        callback(null, err);
                    }

                });
            }
        })
    };
}

module.exports = SecondStepAuth;