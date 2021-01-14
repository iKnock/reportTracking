"use strict";

const dbConnection = require('../utils/connection');
const AppExceptions = require('../utils/appError');

class Atlas {
    constructor(objectId, regionName, regionCode, zoneName, zoneCode, woredaName, woredaCode, populationSize,
        area, density) {
        this.objectId = objectId;
        this.regionName = regionName;
        this.regionCode = regionCode;
        this.zoneName = zoneName;
        this.zoneCode = zoneCode;
        this.woredaName = woredaName;
        this.woredaCode = woredaCode;
        this.populationSize = populationSize;
        this.area = area;
        this.density = density;
    }

    getObjectId() {
        return this.objectId;
    }

    getRegionName() {
        return this.regionName;
    }

    getRegionCode() {
        return this.regionCode;
    }

    getZoneName() {
        return this.zoneName;
    }

    getZoneCode() {
        return this.zoneCode;
    }

    getWoredaName() {
        return this.woredaName;
    }

    getWoredaCode() {
        return this.woredaCode;
    }

    getPopulationSize() {
        return this.populationSize;
    }

    getArea() {
        return this.area;
    }

    getDensity() {
        return this.density;
    }

    getAtlas() {
        return {
            objectId: this.objectId,
            regionName: this.regionName,
            regionCode: this.regionCode,
            zoneName: this.zoneName,
            zoneCode: this.zoneCode,
            woredaName: this.woredaName,
            woredaCode: this.woredaCode,
            populationSize: this.populationSize,
            area: this.area,
            density: this.density
        }
    }

    fetchAtlasInRegion = function (regionName, callback) {
        dbConnection.getConnection(function (connection, conError) {
            if (conError != null) {
                const conErr = new AppExceptions(conError.code, conError.message);
                callback(null, conErr);
            } else {
                //SELECT `OBJECTID`,`R_NAME`,`R_CODE`,`Z_NAME`,`Z_CODE`,
                //`W_NAME`,`W_CODE`,`Pop2007`,`Area`,`Density` FROM `tbl_atlas` where R_NAME like '%Addis%'                
                connection.query('SELECT * FROM tbl_atlas where R_NAME like ?', ['%' + regionName + '%'], function (error, results, fields) {
                    try {

                        if (error) {
                            const err = new AppExceptions(error.code, error.message);
                            console.error('during qurey execution --> ' + err)
                            callback(null, err);
                        } else {
                            var atalsValues = [];
                            for (var i in results) {
                                if (results.hasOwnProperty(i)) {
                                    const atlas = new Atlas(
                                        results[i].OBJECTID,
                                        results[i].R_NAME,
                                        results[i].R_CODE,
                                        results[i].Z_NAME,
                                        results[i].Z_CODE,
                                        results[i].W_NAME,
                                        results[i].W_CODE,
                                        results[i].Pop2007,
                                        results[i].Area,
                                        results[i].Density
                                    );
                                    atalsValues.push(atlas)
                                }
                            }
                            callback(atalsValues);
                            connection.release();// When done with the connection, release it.
                        }
                    } catch (error) {
                        //write in the log the original exception and return readable format to the caller
                        const err = new AppExceptions(error.code, error.message);
                        console.log('Error: ---> ' + err)
                        callback(null, err);
                    }
                });
            }
        });
    };

    featchAtlasInWoreda = function (woredaName, callback) {
        dbConnection.getConnection(function (connection, conError) {
            if (conError != null) {
                const conErr = new AppExceptions(conError.code, conError.message);
                callback(null, conErr);
            } else {
                connection.query('SELECT * FROM tbl_atlas where W_NAME like ?', ['%' + woredaName + '%'], function (error, results, fields) {
                    try {
                        var atalsValues = [];
                        for (var i in results) {
                            if (results.hasOwnProperty(i)) {
                                const atlas = new Atlas(
                                    results[i].OBJECTID,
                                    results[i].R_NAME,
                                    results[i].R_CODE,
                                    results[i].Z_NAME,
                                    results[i].Z_CODE,
                                    results[i].W_NAME,
                                    results[i].W_CODE,
                                    results[i].Pop2007,
                                    results[i].Area,
                                    results[i].Density
                                );
                                atalsValues.push(atlas)
                            }
                        }
                        callback(atalsValues);
                        connection.release();// When done with the connection, release it.                    
                        if (error) throw error;// Handle error after the release.        				
                    } catch (error) {
                        //write in the log the original exception and return readable format to the caller
                        const err = new AppExceptions(error.code, error.message);
                        callback(null, err);
                    }
                });
            }
        });
    };
}

module.exports = Atlas;