'use strict';

const express = require('express');

const atlasService = require('../../services/atlas/atlasService');

let router = express.Router();

router.get('/region/:regionName', atlasService.fetchInfosInRegion);
router.get('/woreda/:woredaName', atlasService.fetchInfosInWoreda);

module.exports = router;