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
import AddPayroll from './Pages/AddPayroll';
import ListPurchase from './Pages/ListPurchase';
import AddPurchase from './Pages/AddPurchase';
import ListSales from './Pages/ListSales'
import AddSales from './Pages/AddSales'
import OfficeExpenses from './Pages/OfficeExpenses';
import ListExpenses from './Pages/ListExpenses';
import Addcontracts from './Pages/Addcontracts';
import Listcontracts from './Pages/Listcontracts';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <Router>
      <div className='font-sans'>
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
          <Route path="/add-payroll" element={<AddPayroll/>} />
          <Route path="/list-purchase" element={<ListPurchase/>} />
          <Route path="/add-purchase" element={<AddPurchase/>} />
          <Route path="/add-sales" element={<AddSales/>} />
          <Route path="/list-sales" element={<ListSales/>} />
          <Route path="/list-expenses" element={<ListExpenses/>} />
          <Route path="/add-expenses" element={<OfficeExpenses/>} />
          <Route path="/add-contracts" element={<Addcontracts/>} />
          <Route path="/list-contracts" element={<Listcontracts />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          
          <Route path="/contracts" element={<Navigate to="/list-contracts" />} />

          

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
