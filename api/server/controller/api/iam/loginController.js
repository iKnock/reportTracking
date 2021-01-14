'use strict';

const express = require('express');

const logInService = require('../../../services/iam/loginService');

let router = express.Router();

router.get('/login/:userName/:password', logInService.logIn);

module.exports = router;