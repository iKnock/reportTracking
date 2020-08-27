"use strict";

const dbConnection = require('../utils/connection');
const AppExceptions = require('../utils/appError');

class Woreda {
	constructor(objectId, regionName, zoneName, woredaNo, woredaName, globalId) {
		this.objectId = objectId;
		this.regionName = regionName;
		this.zoneName = zoneName;
		this.woredaNo = woredaNo;
		this.woredaName = woredaName;
		this.globalId = globalId;
	}

	//do set operation for each property

	getObjectId() {
		return this.objectId;
	}

	getRegionName() {
		return this.regionName;
	}

	getZoneName() {
		return this.zoneName;
	}

	getWoredaNo() {
		return this.woredaNo;
	}

	getWoredaName() {
		return this.woredaName;
	}

	getGlobalId() {
		return this.globalId;
	}

	getWoreda() {
		return {
			objectId: this.objectId,
			regionName: this.regionName,
			zoneName: this.zoneName,
			woredaNo: this.woredaNo,
			woredaName: this.woredaName,
			globalId: this.globalId
		};
	}	

	listAllWoreda = function (callback) {
		dbConnection.getConnection(function (connection, conError) {
			if (conError != null) {
				const conErr = new AppExceptions(conError.code, conError.message);
				callback(null, conErr);
			} else {
				connection.query('SELECT * FROM tbl_woreda', function (error, results, fields) {
					try {
						var woredas = [];
						for (var i in results) {
							if (results.hasOwnProperty(i)) {
								const woreda = new Woreda(
									results[i].OBJECT_ID,
									results[i].REGION_NAME,
									results[i].ZONE_NAME,
									results[i].WOREDA_NO_,
									results[i].WOREDA_NAME,
									results[i].Global_ID
								);
								woredas.push(woreda)
							}
						}
						callback(woredas, null);
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

module.exports = Woreda;