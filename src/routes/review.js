'use strict'
const express = require('express');
const controller = require('../controllers/review-controller');
const authService = require('../services/auth-service');

const router = express.Router();

router.post('/', authService.authorize, controller.post);
router.get('/', authService.authorize, controller.get);
router.getById('/', authService.authorize, controller.getById);

module.exports = router;