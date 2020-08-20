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
}

module.exports = Kebele;