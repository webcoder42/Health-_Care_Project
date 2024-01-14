// server/src/controllers/index.js
const getHello = (req, res) => {
    res.json({ message: 'Hello from Healthcare Staffing Platform server!' });
  };
  
  module.exports = {
    getHello,
  };
  