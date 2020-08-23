const dbConnection = require('../utils/connection');

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

	/**
	 * 
	 * const message = {
    onDbConnectionRefused: {
        success: false,
        code: 'ECONNREFUSED',
        message: 'Couldnt connect to' + host + 'database'
    }
}; 
	 */

	listAllRegions = function (callback) {
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
}

module.exports = Region;