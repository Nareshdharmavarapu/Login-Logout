import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_URL from '../utils/api';

function Dashboard({ setLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout');
      setLoggedIn(false);
      navigate('/');
    } catch (err) {
      alert('Logout failed');
    }
  };

  return (
    <div className="centered-container">
      <div className="form-box">
        <h2>Welcome to your Dashboard!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;


