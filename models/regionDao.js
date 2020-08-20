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
}

module.exports = Region;