"use strict";

const Atlas = require('../../models/atlas');
const httpResponse = require('./index');

function fetchInfosInRegion(request, response) {
    var atlas = new Atlas();
    const regionName = request.params.regionName;

    atlas.fetchAtlasInRegion(regionName, function (regionInfo, error) {
        if (error != null) {
            console.error(error);
            response.json({
                success: error.errorCode,
                message: error.message
            })
        } else {
            //handle here when query return empity result           
            if (regionInfo == null)
                response.json(httpResponse.onAtlasByWoredaNotFound)
            response.json(regionInfo);
            //console.log(response)
        }
    })
}

function fetchInfosInWoreda(request, response) {
    var atlas = new Atlas();
    const woredaName = request.params.woredaName;

    atlas.featchAtlasInWoreda(woredaName, function (woredaInfo, error) {
        if (error != null) {
            console.error(error);
            response.json({
                success: error.errorCode,
                message: error.message
            })
        } else {
            if (woredaInfo == null)
                response.json(httpResponse.onAtlasByWoredaNotFound)
            response.json(woredaInfo);
            //console.log(response)
        }
    })
}

module.exports = {
    fetchInfosInRegion: fetchInfosInRegion,
    fetchInfosInWoreda: fetchInfosInWoreda
};