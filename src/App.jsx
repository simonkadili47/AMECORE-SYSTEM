import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login from './Login';
import Register from './Register';
import Dashboard from './components/Dashboard/Dashboard';
import AddEmployee from './Pages/AddEmployee';
import ListEmployee from './Pages/ListEmployee'
import PayrollList from './Pages/PayrollList';
import AddInvoice from './Pages/AddInvoice';
import ListInvoice from './Pages/ListInvoice';

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
          <Route path="/payroll-list" element={<PayrollList/>} />
          <Route path="/add-invoice" element={<AddInvoice/>} />
          <Route path="/list-invoice" element={<ListInvoice/>} />
          

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
