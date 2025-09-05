import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import './App.css';

axios.defaults.withCredentials = true;

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/session')
      .then(res => {
        setLoggedIn(res.data.loggedIn);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? <Navigate to="/dashboard" /> : <Login setLoggedIn={setLoggedIn} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            loggedIn ? <Dashboard setLoggedIn={setLoggedIn} /> : <Navigate to="/" />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


