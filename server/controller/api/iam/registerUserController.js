'use strict';

const express = require('express');

const registerUserService = require('../../../services/iam/registerUserService');

let router = express.Router();

router.post('/register', registerUserService.registerUser);

module.exports = router;