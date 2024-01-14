// server/src/controllers/shiftController.js
const Shift = require('../models/Shift');

const createShift = async (req, res) => {
  try {
    const { title, description, startTime, endTime } = req.body;
    const createdBy = req.user.userId; // Get user ID from JWT

    const newShift = new Shift({
      title,
      description,
      startTime,
      endTime,
      createdBy,
    });

    await newShift.save();

    res.status(201).json(newShift);
  } catch (error) {
    console.error('Error creating shift:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getShifts = async (req, res) => {
  try {
    const shifts = await Shift.find().populate('createdBy', 'username');
    res.json(shifts);
  } catch (error) {
    console.error('Error getting shifts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateShift = async (req, res) => {
  try {
    const { title, description, startTime, endTime } = req.body;
    const shiftId = req.params.id;

    const updatedShift = await Shift.findByIdAndUpdate(
      shiftId,
      { title, description, startTime, endTime },
      { new: true }
    );

    if (!updatedShift) {
      return res.status(404).json({ error: 'Shift not found' });
    }

    res.json(updatedShift);
  } catch (error) {
    console.error('Error updating shift:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteShift = async (req, res) => {
  try {
    const shiftId = req.params.id;

    const deletedShift = await Shift.findByIdAndDelete(shiftId);

    if (!deletedShift) {
      return res.status(404).json({ error: 'Shift not found' });
    }

    res.json({ message: 'Shift deleted successfully' });
  } catch (error) {
    console.error('Error deleting shift:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createShift,
  getShifts,
  updateShift,
  deleteShift,
};
