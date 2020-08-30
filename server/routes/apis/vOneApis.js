'use strict';

const regionController = require('../../controller/api/regionController');

const express = require('express');

let router = express.Router();

router.use('/region', regionController);

module.exports=router;