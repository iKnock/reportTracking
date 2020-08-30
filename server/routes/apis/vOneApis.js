'use strict';

const regionController = require('../../controller/api/regionController');
const zoneController = require('../../controller/api/zoneController');
const woredaController = require('../../controller/api/woredaController');
const kebeleController = require('../../controller/api/kebeleController');

const express = require('express');

let router = express.Router();

router.use('/region', regionController);
router.use('/zone', zoneController);
router.use('/woreda', woredaController);
router.use('/kebele', kebeleController);

module.exports=router;