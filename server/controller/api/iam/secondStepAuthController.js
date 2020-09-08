'use strict';

const express = require('express');

const secondStepService = require('../../../services/iam/secondStepAuthService');

let router = express.Router();

router.post('/tfa/enroll', secondStepService.enrollOtp);
router.get('/tfa/enroll/:userName', secondStepService.fetchEnrollInfo);

module.exports = router;