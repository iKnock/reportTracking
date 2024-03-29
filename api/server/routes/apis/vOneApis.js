'use strict';

const express = require('express');

const regionController = require('../../controller/api/regionController');
const zoneController = require('../../controller/api/zoneController');
const woredaController = require('../../controller/api/woredaController');
const kebeleController = require('../../controller/api/kebeleController');
const atlasController = require('../../controller/api/atlasController');

const userController = require('../../controller/api/iam/loginController');
const secondStepController = require('../../controller/api/iam/secondStepAuthController');
const verifyController = require('../../controller/api/iam/verifyController');

const registerUserController = require('../../controller/api/iam/registerUserController');

let router = express.Router();

router.use('/region', regionController);
router.use('/zone', zoneController);
router.use('/woreda', woredaController);
router.use('/kebele', kebeleController);
router.use('/atlas', atlasController);

router.use('/user', userController);
router.use('/user', secondStepController);
router.use('/user', verifyController);

router.use('/user', registerUserController);

module.exports = router;