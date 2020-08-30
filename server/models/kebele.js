"use strict";

const dbConnection = require('../utils/connection');
const AppExceptions = require('../utils/appError');

class Kebele {
    constructor(objectId, regionName, regionCode, zoneName, zoneCode, woredaName, woredaCode,
        regionalKebeleName, regionalKebeleCode, count, townName, townCode, kkCode, urbanKebeleName,
        urbanKebeleCode, urbanKebeleId, kkName, globalId) {
        this.objectId = objectId;
        this.regionName = regionName;
        this.regionCode = regionCode;
        this.zoneName = zoneName;
        this.zoneCode = zoneCode;
        this.woredaName = woredaName;
        this.woredaCode = woredaCode;
        this.regionalKebeleName = regionalKebeleName;
        this.regionalKebeleCode = regionalKebeleCode;
        this.count = count;
        this.townName = townName;
        this.townCode = townCode;
        this.kkCode = kkCode;
        this.urbanKebeleName = urbanKebeleName;
        this.urbanKebeleCode = urbanKebeleCode;
        this.urbanKebeleId = urbanKebeleId;
        this.kkName = kkName;
        this.globalId = globalId;
    }

    //do set operation for each property
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

    getRegionalKebeleName() {
        return this.regionalKebeleName;
    }

    getRegionalKebeleCode() {
        return this.regionalKebeleCode;
    }

    getCount() {
        return this.count;
    }

    getTownName() {
        return this.townName;
    }

    getTownCode() {
        return this.townCode;
    }

    getKKCode() {
        return this.kkCode;
    }

    getUrbanKebeleName() {
        return this.urbanKebeleName;
    }

    getUrbanKebeleCode() {
        return this.urbanKebeleCode;
    }

    getUrbanKebeleId() {
        return this.urbanKebeleId;
    }

    getKKName() {
        return this.kkName;
    }

    getGlobalId() {
        return this.globalId;
    }

    getKebele() {
        return {
            objectId: this.objectId,
            regionName: this.regionName,
            regionCode: this.regionCode,
            zoneName: this.zoneName,
            zoneCode: this.zoneCode,
            woredaName: this.woredaName,
            woredaCode: this.woredaCode,
            regionalKebeleName: this.regionalKebeleName,
            regionalKebeleCode: this.regionalKebeleCode,
            count: this.count,
            townName: this.townName,
            townCode: this.townCode,
            kkCode: this.kkCode,
            urbanKebeleName: this.urbanKebeleName,
            urbanKebeleCode: this.urbanKebeleCode,
            urbanKebeleId: this.urbanKebeleId,
            kkName: this.kkName,
            globalId: this.globalId
        };
    }

    listAllKebele = function (callback) {
        dbConnection.getConnection(function (connection, conError) {
            if (conError != null) {
                const conErr = new AppExceptions(conError.code, conError.message);
                callback(null, conErr);
            } else {
                connection.query('SELECT * FROM tbl_kebele', function (error, results, fields) {
                    try {
                        var kebeles = [];
                        for (var i in results) {
                            if (results.hasOwnProperty(i)) {
                                const kebele = new Kebele(
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
                                kebeles.push(kebele)
                            }
                        }
                        callback(kebeles);
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

module.exports = Kebele;