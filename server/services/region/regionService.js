"use strict";

const Region = require('../../models/region');
const Zone = require('../../models/zone');
const Woreda = require('../../models/woreda');
const Kebele = require('../../models/kebele');
const httpResponse = require('./index');

function fetchRegions(request, response) {
    var region = new Region();
    region.listAllRegions(function (regions, error) {
        if (error != null) {
            console.error(error);
            response.json(httpResponse.onRegionNotFound)
            console.log(response)
        } else {            
            response.json(regions);
            //console.log(response)
        }
    })
}

function fetchZones(request, response) {
    var zone = new Zone();
    zone.listAllZones(function (zones, error) {
        if (error != null) {
            console.error(error);
            response.json(httpResponse.onZoneNotFound)
            console.log(response)
        } else {            
            response.json(zones);
            //console.log(response)
        }
    })
}

function fetchWoredas(request, response) {
    var woreda = new Woreda();
    woreda.listAllWoreda(function (woreda, error) {
        if (error != null) {
            console.error(error);
            response.json(httpResponse.onWoredaNotFound)
            console.log(response)
        } else {            
            response.json(woreda);
            //console.log(response)
        }
    })
}

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

module.exports = {
    fetchRegions: fetchRegions,
    fetchZones: fetchZones,
    fetchWoredas: fetchWoredas,
    fetchKebeles: fetchKebeles
};