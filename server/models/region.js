"use strict";

const dbConnection = require('../utils/connection');
const AppExceptions = require('../utils/appError');

class Region {
	constructor(objectId, regionName, regionId, globalId) {
		this.objectId = objectId;
		this.regionName = regionName;
		this.regionId = regionId;
		this.globalId = globalId;
	}

	//do set operation for each property

	getObjectId() {
		return this.objectId;
	}

	getRegionName() {
		return this.regionName;
	}

	getRegionId() {
		return this.regionId;
	}

	getGlobalId() {
		return this.globalId;
	}

	getRegion() {
		return {
			objectId: this.objectId,
			regionName: this.regionName,
			regionId: this.regionId,
			globalId: this.globalId
		};
	}

	listAllRegions = function (callback) {
		dbConnection.getConnection(function (connection, conError) {
			if (conError != null) {
				const conErr = new AppExceptions(conError.code, conError.message);
				callback(null, conErr);
			} else {
				connection.query('SELECT * FROM tbl_region', function (error, results, fields) {
					try {
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
						callback(regions, null);
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

module.exports = Region;