import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', { email, password });
      alert('Registered successfully!');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="centered-container">
      <div className="form-box">
        <h2>Register</h2>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />
        <button onClick={handleRegister}>Register</button>
        <p>Already have an account? <a href="/">Login</a></p>
      </div>
    </div>
  );
}

export default Register;


