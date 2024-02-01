'use strict'
const express = require('express');
const controller = require('../controllers/user-controller');
const authService = require('../services/auth-service');

const router = express.Router();

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate)
router.post('/refresh-token', authService.authorize, controller.refreshToken)

module.exports = router;