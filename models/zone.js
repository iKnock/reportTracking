"use strict";

const dbConnection = require('../utils/connection');
const AppExceptions = require('../utils/appError');

class Zone {
	constructor(objectId, zoneId, zoneName, area, perimeter, zone, globalId) {
		this.objectId = objectId;
		this.zoneId = zoneId;
		this.zoneName = zoneName;
		this.area = area;
		this.perimeter = perimeter;
		this.zone = zone;
		this.globalId = globalId;
	}

	//do set operation for each property

	getObjectId() {
		return this.objectId;
	}

	getZoneId() {
		return this.zoneId;
	}

	getZoneName() {
		return this.zoneName;
	}

	getArea() {
		return this.area;
	}

	getPerimeter() {
		return this.perimeter;
	}

	getZone() {
		return this.zone;
	}

	getGlobalId() {
		return this.globalId;
	}

	getZone() {
		return {
			objectId: this.objectId,
			zoneId: this.zoneId,
			zoneName: this.zoneName,
			area: this.area,
			perimeter: this.perimeter,
			zone: this.zone,
			globalId: this.globalId
		};
	}	

	listAllZones = function (callback) {
		dbConnection.getConnection(function (connection, conError) {
			if (conError != null) {
				const conErr = new AppExceptions(conError.code, conError.message);
				callback(null, conErr);
			} else {
				connection.query('SELECT * FROM tbl_zone', function (error, results, fields) {
					try {
						var zones = [];
						for (var i in results) {
							if (results.hasOwnProperty(i)) {
								const zone = new Zone(
									results[i].OBJECT_ID,
									results[i].Z4ID,
									results[i].ZONE_NAME,
									results[i].AREA,
									results[i].PERIMETER,
									results[i].Zone,
									results[i].Global_ID
								);
								zones.push(zone)
							}
						}
						callback(zones);
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

module.exports = Zone;