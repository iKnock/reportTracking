const Region = require('../../models/region');
const Zone = require('../../models/zone');
const Woreda = require('../../models/woreda');
const Kebele = require('../../models/kebele');



//function fetchRegions(request, response) {
    //const regionId = request.query.regionId;//passed regionId as query string

    const region = new Region();
    region.listAllRegions(function (regions, error) {
        //console.log(regions[0].getRegion());
        console.log('returned error: '+error);
        //console.log(regions);
        //response.json(regions);
    });    
//}


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
})