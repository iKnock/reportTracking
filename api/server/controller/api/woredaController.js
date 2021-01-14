'use strict';

const express = require('express');

const regionService = require('../../services/region/regionService');

let router = express.Router();

router.get('/details', regionService.fetchWoredas);

module.exports = router;