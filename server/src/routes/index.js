// server/src/routes/index.js
const express = require('express');
const router = express.Router();
const { getHello } = require('../controllers');

router.get('/', getHello);

module.exports = router;
