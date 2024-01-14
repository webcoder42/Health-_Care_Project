// client/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchHello } from '../services';

const Dashboard = () => {
  const [helloMessage, setHelloMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHello();
      if (data) {
        setHelloMessage(data.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Server Message: {helloMessage}</p>
      {/* Add more content and functionalities here */}
    </div>
  );
};

export default Dashboard;
