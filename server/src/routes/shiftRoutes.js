// server/src/routes/shiftRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const shiftController = require('../controllers/shiftController');

router.use(authMiddleware); // Apply authentication middleware to all routes below

router.post('/create', shiftController.createShift);
router.get('/get', shiftController.getShifts);
router.put('/update/:id', shiftController.updateShift);
router.delete('/delete/:id', shiftController.deleteShift);

module.exports = router;
