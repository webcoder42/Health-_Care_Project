// client/src/services/index.js
const BASE_URL = 'http://localhost:5000';

// ... existing code ...

export const getShifts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/shifts/get`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting shifts:', error);
  }
};

export const createShift = async (shiftData) => {
  try {
    const response = await fetch(`${BASE_URL}/shifts/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shiftData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating shift:', error);
  }
};

export const updateShift = async (shiftId, shiftData) => {
  try {
    const response = await fetch(`${BASE_URL}/shifts/update/${shiftId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shiftData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating shift:', error);
  }
};

export const deleteShift = async (shiftId) => {
  try {
    const response = await fetch(`${BASE_URL}/shifts/delete/${shiftId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting shift:', error);
  }
};
