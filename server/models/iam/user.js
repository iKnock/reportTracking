"use strict";

const dbConnection = require('../../utils/connection');
const AppExceptions = require('../../utils/appError');

class User {
    constructor(userId, userName, password, salt, email, verified, status, remark) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.salt = salt;
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

    getSalt() {
        return this.salt;
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
            salt: this.salt,
            email: this.email,
            verified: this.verified,
            status: this.status,
            remark: this.remark
        };
    }

    insertUser = function (callback) {
        dbConnection.getConnection(function (connection, conError) {
            if (conError != null) {
                const conErr = new AppExceptions(conError.code, conError.message);
                callback(null, conErr);
            } else {                
                connection.query('INSERT INTO `tbl_user`(`user_name`, `password`, `salt`, `email`, `verified`, `status`, `remark`) VALUES (?,?,?,?,?,?,?)', [userId, userName, password, salt, email, verified, status, remark], function (error, results, fields) {
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

    logInUser = function (userName, password, callback) {
        dbConnection.getConnection(function (connection, conError) {
            if (conError != null) {
                const conErr = new AppExceptions(conError.code, conError.message);
                callback(null, conErr);
            } else {
                connection.query('SELECT * FROM `tbl_user` where user_name = ? and password = ?', [userName, password], function (error, results, fields) {
                    try {
                        var users = [];
                        for (var i in results) {
                            if (results.hasOwnProperty(i)) {
                                const user = new User(
                                    results[i].user_id,
                                    results[i].user_name,
                                    results[i].password,
                                    results[i].salt,
                                    results[i].email,
                                    results[i].verified,
                                    results[i].status,
                                    results[i].remark
                                );
                                users.push(user)
                            }
                        }
                        callback(users);
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

module.exports = User;