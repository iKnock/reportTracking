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
    
    getPerimeter(){
        return this.perimeter;
    }

    getZone(){
        return this.zone;
    }

    getGlobalId(){
        return this.globalId;
    }
	
	getRegion() {
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
}

module.exports = Zone;