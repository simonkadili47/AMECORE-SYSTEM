import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbSmartHome } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LiaFileContractSolid } from "react-icons/lia";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'; 
import image from '../assets/logo.png';

const Sidebar = () => {
  const [showInvoicesDropdown, setShowInvoicesDropdown] = useState(false);
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);
  
  const toggleInvoicesDropdown = () => {
    setShowInvoicesDropdown(prev => !prev);
  };

  const toggleEmployeeDropdown = () => {
    setShowEmployeeDropdown(prev => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-56 bg-white text-black z-10 pt-2 border-r-2 border-gray-200 overflow-y-auto h-full">
        <div className="p-2">
          <div className="flex justify-center mb-4"> 
            <img 
              src={image} 
              alt="" 
              className="w-16 h-auto" 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
          </div>
          <h3 className='mt-1'>
            <Link to="/dashboard" className="flex items-center ml-3 hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors">
              <TbSmartHome className='text-2xl' />
              <span className="ml-2">DASHBOARD</span>
            </Link> 
          </h3>
          <nav className='mt-1'>
            <ul>
              <li className="mb-1">
                <div className="flex flex-col">
                  <button
                    onClick={toggleEmployeeDropdown}
                    className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors"
                  >
                    <FaUser className='text-2xl ml-3' />
                    <span className="ml-2">Employee</span>
                    {showEmployeeDropdown ? (
                      <FaCaretUp className="ml-2 text-xl" /> 
                    ) : (
                      <FaCaretDown className="ml-2 text-xl" /> 
                    )}
                  </button>
                  {showEmployeeDropdown && (
                    <ul className="ml-10 mt-2">
                      <li className="mb-1">
                        <Link to="/add-employee" className="block p-2 hover:bg-customblue hover:text-white hover:rounded-md transition-colors">
                          Add Employee
                        </Link>
                      </li>
                      <li className="mb-1">
                        <Link to="/list-employee" className="block p-2 hover:bg-customblue hover:text-white hover:rounded-md transition-colors">
                          List Employee
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li className="mb-1">
                <Link to="/payroll" className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors">
                  <MdOutlinePayments className='text-2xl ml-3' />
                  <span className="ml-2">Payroll</span>
                </Link>
              </li>
              <li className="mb-1">
                <div className="flex flex-col">
                  <button
                    onClick={toggleInvoicesDropdown}
                    className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors"
                  >
                    <IoDocumentOutline className='text-2xl ml-3' />
                    <span className="ml-2">Invoices</span>
                    {showInvoicesDropdown ? (
                      <FaCaretUp className="ml-2 text-xl" /> 
                    ) : (
                      <FaCaretDown className="ml-2 text-xl" /> 
                    )}
                  </button>
                  {showInvoicesDropdown && (
                    <ul className="ml-10 mt-2">
                      <li className="mb-1">
                        <Link to="/invoices/purchases" className="block p-2 hover:bg-customblue hover:text-white hover:rounded-md transition-colors">
                          Purchases
                        </Link>
                      </li>
                      <li className="mb-1">
                        <Link to="/invoices/sales" className="block p-2 hover:bg-customblue hover:text-white hover:rounded-md transition-colors">
                          Sales
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li className="mb-2">
                <Link to="/office-expenses" className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors">
                  <FaMoneyBillTransfer className='text-2xl ml-3' />
                  <span className="ml-2">Office Expenses</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contracts" className="flex items-center hover:bg-customblue hover:text-white hover:rounded-md p-2 transition-colors">
                  <LiaFileContractSolid className='text-2xl ml-3' />
                  <span className="ml-2">Contracts</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
