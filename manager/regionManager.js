const dbConnection = require('../utils/connection');
const Region = require('../models/regionDao');

exports.listAllRegions = function (callback) {
    dbConnection.getConnection(function (connection) {
        connection.query('SELECT * FROM tbl_region', function (error, results, fields) {
            var regions = [];
            for (var i in results) {
                if (results.hasOwnProperty(i)) {
                    const region = new Region(
                        results[i].OBJECT_ID,
                        results[i].REGION_NAME,
                        results[i].RID,
                        results[i].Global_ID
                    );
                    regions.push(region)
                }
            }
            callback(regions);
            connection.release();// When done with the connection, release it.                    
            if (error) throw error;// Handle error after the release.        				
        });
    })
};

this.listAllRegions(function (regions) {
    console.log(regions);
});

