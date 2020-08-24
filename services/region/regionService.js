const Region = require('../../models/region');
const Zone = require('../../models/zone');
const Woreda = require('../../models/woreda');
const Kebele = require('../../models/kebele');

const region = new Region();
/**region.listAllRegions(function (regions) {
    //console.log(regions);
})**/

try {
    var regions = region.fetchRegions();
    console.log(regions);
} catch (error) {
    console.log("error returned: "+error.code);
}


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