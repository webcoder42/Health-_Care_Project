// client/src/components/Authentication.js
import React, { useState } from 'react';
import { registerUser, loginUser } from '../services';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const userData = { username, password };

    const response = await registerUser(userData);

    if (response.token) {
      // Registration successful, handle accordingly (e.g., redirect)
    } else {
      // Registration failed, handle accordingly (e.g., display error message)
    }
  };

  const handleLogin = async () => {
    const userData = { username, password };

    const response = await loginUser(userData);

    if (response.token) {
      // Login successful, handle accordingly (e.g., set authentication state)
    } else {
      // Login failed, handle accordingly (e.g., display error message)
    }
  };

  return (
    <div>
      <h2>Authentication</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Authentication;
