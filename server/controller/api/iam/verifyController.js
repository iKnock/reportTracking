'use strict';

const express = require('express');

const secondStepService = require('../../../services/iam/secondStepAuthService');

let router = express.Router();

router.post('/token/otp/verify/:userName', secondStepService.verifyEnrollmentInfo);

module.exports = router;