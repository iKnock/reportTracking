'use strict';

const express = require('express');

const secondStepService = require('../../../services/iam/secondStepAuthService');

let router = express.Router();

router.get('/tfa/setup', secondStepService.logIn);

module.exports = router;