'use strict';

const express = require('express');

const kebeleService = require('../../services/kebele/kebeleService');

let router = express.Router();

router.get('/details', kebeleService.fetchKebeles);
router.get('/region/:regionName', kebeleService.fetchKebelesInRegion);
router.get('/zone/:zoneName', kebeleService.fetchKebelesInZone);
router.get('/woreda/:woredaName', kebeleService.fetchKebelesInWoreda);

module.exports = router;