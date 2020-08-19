const mysql = require('mysql2');

const pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'db_reporting_app'
});

exports.getConnection = function(callback) {    
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!    
        console.log("db connected established")    
        callback(connection);
    });
};
