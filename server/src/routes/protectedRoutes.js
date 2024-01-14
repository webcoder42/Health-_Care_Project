// server/src/routes/protectedRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware); // Apply authentication middleware to all routes below

// Your protected routes go here

module.exports = router;
