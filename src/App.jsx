import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login from './Login';
import Register from './Register';
import Dashboard from './components/Dashboard';
import AddEmployee from './Pages/AddEmployee';
import ListEmployee from './Pages/ListEmployee'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-employee" element={<AddEmployee/>} />
          <Route path="/list-employee" element={<ListEmployee/>} />
          

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
