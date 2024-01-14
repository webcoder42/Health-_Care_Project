// client/src/components/ShiftManagement.js
import React, { useState, useEffect } from 'react';
import { getShifts, createShift, updateShift, deleteShift } from '../services';

const ShiftManagement = () => {
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
  });

  useEffect(() => {
    fetchShifts();
  }, []); // Fetch shifts when the component mounts

  const fetchShifts = async () => {
    const data = await getShifts();
    setShifts(data);
  };

  const handleCreateShift = async () => {
    await createShift(newShift);
    setNewShift({
      title: '',
      description: '',
      startTime: '',
      endTime: '',
    });
    fetchShifts(); // Refresh the list of shifts after creating a new one
  };

  const handleUpdateShift = async (id) => {
    // Assuming you have an updatedShift state that contains the changes
    const updatedShift = await updateShift(id, updatedShift);
    console.log('Updated Shift:', updatedShift);
    fetchShifts(); // Refresh the list of shifts after updating
  };

  const handleDeleteShift = async (id) => {
    await deleteShift(id);
    fetchShifts(); // Refresh the list of shifts after deleting
  };

  return (
    <div>
      <h2>Shift Management</h2>
      <div>
        <h3>Create New Shift</h3>
        <label>
          Title:
          <input
            type="text"
            value={newShift.title}
            onChange={(e) => setNewShift({ ...newShift, title: e.target.value })}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={newShift.description}
            onChange={(e) => setNewShift({ ...newShift, description: e.target.value })}
          />
        </label>
        <label>
          Start Time:
          <input
            type="datetime-local"
            value={newShift.startTime}
            onChange={(e) => setNewShift({ ...newShift, startTime: e.target.value })}
          />
        </label>
        <label>
          End Time:
          <input
            type="datetime-local"
            value={newShift.endTime}
            onChange={(e) => setNewShift({ ...newShift, endTime: e.target.value })}
          />
        </label>
        <button onClick={handleCreateShift}>Create Shift</button>
      </div>
      <div>
        <h3>Shift List</h3>
        <ul>
          {shifts.map((shift) => (
            <li key={shift._id}>
              {shift.title} - {shift.startTime} to {shift.endTime}
              <button onClick={() => handleUpdateShift(shift._id)}>Update</button>
              <button onClick={() => handleDeleteShift(shift._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShiftManagement;
