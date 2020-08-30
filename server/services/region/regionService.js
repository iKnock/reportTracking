"use strict";

const express = require('express');
const Region = require('../../models/region');
const Zone = require('../../models/zone');
const Woreda = require('../../models/woreda');
const Kebele = require('../../models/kebele');
const httpResponse = require('./index');

var region = new Region();

function fetchRegions(request, response) {
    region.listAllRegions(function (regions, error) {
        if (error != null) {
            console.error(error);
            response.json(httpResponse.onRegionNotFound)
            console.log(response)
        } else {
            //console.log(regions);
            response.json(regions);
            console.log(response)
        }
    })
}

module.exports = {
    fetchRegions: fetchRegions
};

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