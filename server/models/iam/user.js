"use strict";

const dbConnection = require('../../utils/connection');
const AppExceptions = require('../../utils/appError');

class User {
    constructor(userId, userName, password, isSecondAuthEnabled, email, verified, status, remark) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.isSecondAuthEnabled = isSecondAuthEnabled;
        this.email = email;
        this.verified = verified;
        this.status = status;
        this.remark = remark;
    }

    //do set operation for each property

    getUserId() {
        return this.userId;
    }

    getUserName() {
        return this.userName;
    }

    getPassword() {
        return this.password;
    }

    getIsSecondAuthEnabled() {
        return this.isSecondAuthEnabled;
    }

    getEmail() {
        return this.email;
    }

    getVerified() {
        return this.verified;
    }

    getStatus() {
        return this.status;
    }

    getRemark() {
        return this.remark;
    }

    getUser() {
        return {
            userId: this.userId,
            userName: this.userName,
            password: this.password,
            isSecondAuthEnabled: this.isSecondAuthEnabled,
            email: this.email,
            verified: this.verified,
            status: this.status,
            remark: this.remark
        };
    }

    insertUser = function (userName, password, isSecondAuthEnabled, email, verified, status, remark, callback) {
        dbConnection.getConnection(function (connection, conError) {
            if (conError != null) {
                const conErr = new AppExceptions(conError.code, conError.message);
                callback(null, conErr);
            } else {
                connection.query('INSERT INTO `tbl_user`(`user_name`, `password`, `is_second_auth_enabled`, `email`, `verified`, `status`, `remark`) VALUES (?,?,?,?,?,?,?)', 
                [userName, password, isSecondAuthEnabled, email, verified, status, remark], function (error, results, fields) {
                    try {                        
                        var user = {
                            'userId': results.insertId,
                            'userName': userName,
                            'email': email,
                            'isSecondAuthEnabled': isSecondAuthEnabled,
                            'verified': verified
                        }

                        console.log('<user.js> - user= ' + JSON.stringify(user))

                        callback(user, null);
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

    logInUser = function (userName, password, callback) {
        dbConnection.getConnection(function (connection, conError) {
            if (conError != null) {
                const conErr = new AppExceptions(conError.code, conError.message);
                callback(null, conErr);
            } else {
                connection.query('SELECT * FROM `tbl_user` WHERE `user_name` = ? and `password`= ?', [userName, password], function (error, results, fields) {
                    try {
                        var user;
                        for (var i in results) {
                            if (results.hasOwnProperty(i)) {
                                user = new User(
                                    results[i].user_id,
                                    results[i].user_name,
                                    results[i].password,
                                    results[i].is_second_auth_enabled,
                                    results[i].email,
                                    results[i].verified,
                                    results[i].status,
                                    results[i].remark
                                );
                            }
                        }
                        callback(user);
                        connection.release();// When done with the connection, release it.                    
                        if (error) throw error;// Handle error after the release.  
                    } catch (error) {
                        //write in the log the original exception and return readable format to the caller
                        console.error('error---->' + error)
                        const err = new AppExceptions(error.code, error.message);
                        callback(null, err);
                    }

                });
            }
        })
    };
}

module.exports = User;