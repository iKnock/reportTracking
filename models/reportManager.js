const dbConnection = require('../utils/connection');
const Reports = require('./reportDao');

exports.findAllReport = function(callback) {
    dbConnection.getConnection(function (connection) {        
        connection.query('SELECT * FROM tbl_report', function (error, results, fields) {            
            var reports = [];
            for (var i in results) {
                if (results.hasOwnProperty(i)) {
                    const report = new Reports(
                        results[i].report_id,
                        results[i].report_title,
                        results[i].report_desc,
                        results[i].happen_on_date,
                        results[i].reported_on_date,
                        results[i].report_category,
                        results[i].remark
                    );
                    reports.push(report)
                }
            }
            callback(reports);
            connection.release();// When done with the connection, release it.                    
            if (error) throw error;// Handle error after the release.        				
        });
    })
};

this.findAllReport(function (reports) {
    console.log(reports);
});

