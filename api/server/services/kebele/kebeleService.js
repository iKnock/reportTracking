"use strict";

const Kebele = require('../../models/kebele');
const httpResponse = require('./index');

function fetchKebeles(request, response) {
    var kebele = new Kebele();
    kebele.listAllKebele(function (kebele, error) {
        if (error != null) {
            console.error(error);
            response.json(httpResponse.onKebeleNotFound)
            console.log(response)
        } else {            
            response.json(kebele);
            //console.log(response)
        }
    })
}

function fetchKebelesInRegion(request, response) {
    var kebele = new Kebele();
    const regionName = request.params.regionName;    

    kebele.featchKebeleInRegion(regionName, function (kebele, error) {
        if (error != null) {
            console.error(error);
            response.json(httpResponse.onKebeleByRegionNotFound)
            console.log(response)
        } else {            
            response.json(kebele);
            //console.log(response)
        }
    })
}

function fetchKebelesInZone(request, response) {
    var kebele = new Kebele();
    const zoneName = request.params.zoneName;

    kebele.featchKebeleInZone(zoneName, function (kebele, error) {
        if (error != null) {
            console.error(error);
            response.json(httpResponse.onKebeleByZoneNotFound)
            console.log(response)
        } else {            
            response.json(kebele);
            //console.log(response)
        }
    })
}

function fetchKebelesInWoreda(request, response) {
    var kebele = new Kebele();
    const woredaName = request.params.woredaName;

    kebele.featchKebeleInWoreda(woredaName, function (kebele, error) {
        if (error != null) {
            console.error(error);
            response.json(httpResponse.onKebeleByWoredaNotFound)
            console.log(response)
        } else {            
            response.json(kebele);
            //console.log(response)
        }
    })
}

module.exports = {
    fetchKebeles: fetchKebeles,
    fetchKebelesInRegion: fetchKebelesInRegion,
    fetchKebelesInZone: fetchKebelesInZone,
    fetchKebelesInWoreda:fetchKebelesInWoreda    
};