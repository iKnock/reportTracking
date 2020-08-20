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

    getGlobalId(){
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
}

module.exports = Woreda;