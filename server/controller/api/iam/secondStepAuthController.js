'use strict';

const express = require('express');

const secondStepService = require('../../../services/iam/secondStepAuthService');

let router = express.Router();

router.post('/tfa/enroll', secondStepService.enrollOtp);

module.exports = router;