"use strict";

const Region = require('../../models/region');
const Zone = require('../../models/zone');
const Woreda = require('../../models/woreda');
const Kebele = require('../../models/kebele');

var region = new Region();
region.listAllRegions(function (regions, error) {
    if (error != null) {
        console.error(error);
    } else {
        console.log(regions);
    }
})

/**
const zone = new Zone();
zone.listAllZones(function (zones) {
    //console.log(zones);
})

const woreda = new Woreda();
woreda.listAllWoreda(function (woredas) {
    //console.log(woredas);
})

const kebele = new Kebele();
kebele.listAllKebele(function (kebeles) {
    //console.log(kebeles);
})**/