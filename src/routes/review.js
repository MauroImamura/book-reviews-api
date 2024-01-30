'use strict'
const express = require('express');
const controller = require('../controllers/review-controller');

const router = express.Router();

router.post('/', controller.post);
router.get('/', controller.get);
router.getById('/', controller.getById);

module.exports = router;