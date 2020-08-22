const mysql = require('mysql2');

const host = 'localhost';
const user = 'root';
const password = '';
const database = 'db_reporting_app';

const pool = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database
});

exports.getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        if (err){//write this to log file with log level of error or sever
            throw err;
        }            
        callback(connection);
    });
};
