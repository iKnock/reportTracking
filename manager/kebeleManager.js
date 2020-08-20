const dbConnection = require('../utils/connection');
const Kebele = require('../models/kebeleDao');

exports.listAllKebele = function (callback) {
    dbConnection.getConnection(function (connection) {
        connection.query('SELECT * FROM tbl_kebele', function (error, results, fields) {
            var kebeles = [];
            for (var i in results) {
                if (results.hasOwnProperty(i)) {
                    const region = new Kebele(
                        results[i].OBJECT_ID,
                        results[i].R_NAME,
                        results[i].R_CODE,
                        results[i].Z_NAME,
                        results[i].Z_CODE,
                        results[i].W_NAME,
                        results[i].W_CODE,
                        results[i].RK_NAME,
                        results[i].RK_CODE,
                        results[i].COUNT,
                        results[i].T_NAME,
                        results[i].T_CODE,
                        results[i].KK_CODE,
                        results[i].UK_NAME,
                        results[i].UK_CODE,
                        results[i].UK_ID,
                        results[i].KK_NAME,
                        results[i].Global_ID
                    );
                    kebeles.push(region)
                }
            }
            callback(kebeles);
            connection.release();// When done with the connection, release it.                    
            if (error) throw error;// Handle error after the release.        				
        });
    })
};

this.listAllKebele(function (kebeles) {
    console.log(kebeles[15669].getKebele());
    /**for (var i in kebeles) {
        if (kebeles.hasOwnProperty(i)) {
            if (kebeles[i].getKebele() == 'Addis Abeba')
                console.log(kebeles);
        }
    }**/
});

